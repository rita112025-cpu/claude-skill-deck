#!/usr/bin/env node
// 掃描這台電腦安裝的 Claude Code skill，產生 skills-data.js 與 README.md 的清單區塊。
//
//   node sync-skills.mjs          同步（有變化才寫檔）
//   node sync-skills.mjs --check  只檢查網站和本機是否一致，不一致時結束碼為 1
//   node sync-skills.mjs --hook   給 Claude Code SessionStart hook 用：一致時不輸出，
//                                 不一致或檢查失敗時輸出 hook JSON（systemMessage + additionalContext）
//
// 掃描範圍：
//   1. ~/.claude/skills                                  任何專案都能用
//   2. deck.json 的 projectRoots 底下各專案的 .claude/skills  只限該專案
//   3. ~/.claude/plugins/installed_plugins.json 列出的外掛    用 /plugin install 裝的
// 分類與中文說明寫在 deck.json；沒寫的 skill 會歸到 new，說明取自 SKILL.md。

import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const HOME = homedir();
const HOOK = process.argv.includes("--hook");
const CHECK = HOOK || process.argv.includes("--check");
const DATA_FILE = join(ROOT, "skills-data.js");
const README_FILE = join(ROOT, "README.md");
const MARK_START = "<!-- skills:start -->";
const MARK_END = "<!-- skills:end -->";
const NEW_CATEGORY = { id: "new", title: "新安裝・待分類", sub: "同步時新發現、deck.json 還沒幫它分類的 skill。" };

// hook 模式下腳本壞掉也要講出來，不然每次開 session 都靜靜地什麼都沒檢查
if (HOOK) {
  const report = err => {
    console.log(JSON.stringify({ systemMessage: `Skill 盤點台檢查失敗：${err?.message ?? err}（${ROOT}）` }));
    process.exit(0);
  };
  process.on("uncaughtException", report);
  process.on("unhandledRejection", report);
}

const deck = readJson(join(ROOT, "deck.json"));
const overrides = deck.skills ?? {};
const categories = deck.categories?.some(c => c.id === "new")
  ? deck.categories
  : [...(deck.categories ?? []), NEW_CATEGORY];
const categoryIds = new Set(categories.map(c => c.id));

// ── 讀檔工具 ─────────────────────────────

function readJson(file) {
  return JSON.parse(readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
}

function readJsonIfExists(file) {
  try { return readJson(file); } catch { return null; }
}

function isDir(p) {
  try { return statSync(p).isDirectory(); } catch { return false; }
}

// 含 SKILL.md 的子目錄才算 skill（_shared 這類共用資料夾會被略過）
function skillDirs(dir) {
  if (!isDir(dir)) return [];
  return readdirSync(dir)
    .map(name => join(dir, name))
    .filter(p => isDir(p) && existsSync(join(p, "SKILL.md")))
    .sort();
}

// 展開路徑裡的 *，例如 D:/* → D:\rita-ai-workbench、D:\claude-skill-deck…
function expand(pattern) {
  const segs = pattern.replace(/^~(?=$|[\\/])/, HOME).split(/[\\/]+/);
  let paths = [segs[0] === "" ? sep : segs[0] + sep];
  for (const seg of segs.slice(1).filter(Boolean)) {
    paths = paths.flatMap(base => {
      if (seg !== "*") return [join(base, seg)];
      try {
        return readdirSync(base).filter(n => !/^[.$]/.test(n)).map(n => join(base, n)).filter(isDir);
      } catch { return []; }
    });
  }
  return paths.filter(isDir);
}

// 只處理 SKILL.md frontmatter 會用到的 YAML：頂層 key、引號字串、> | 區塊與縮排續行
function frontmatter(file) {
  const m = readFileSync(file, "utf8").replace(/^\uFEFF/, "").match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const lines = m[1].split(/\r?\n/);
  const out = {};
  for (let i = 0; i < lines.length; i++) {
    const kv = lines[i].match(/^([A-Za-z][\w-]*):[ \t]*(.*)$/);
    if (!kv) continue;
    const cont = [];
    while (i + 1 < lines.length && (lines[i + 1].trim() === "" || /^\s/.test(lines[i + 1]))) {
      cont.push(lines[++i].trim());
    }
    let val = kv[2].trim();
    if (/^[>|][-+]?$/.test(val)) {
      val = cont.join(val[0] === ">" ? " " : "\n").trim();
    } else if (val === "") {
      continue; // 巢狀物件（例如 metadata:）用不到
    } else {
      val = [val, ...cont.filter(Boolean)].join(" ");
      if (/^'[\s\S]*'$/.test(val)) val = val.slice(1, -1).replace(/''/g, "'");
      else if (/^"[\s\S]*"$/.test(val)) {
        try { val = JSON.parse(val); } catch { val = val.slice(1, -1); }
      }
    }
    out[kv[1]] = val;
  }
  return out;
}

function clip(s, n) {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

// 沒有中文說明時，把 SKILL.md 的 description 拆成「用途」與「何時啟動」
function splitDescription(text = "") {
  const t = text.replace(/\s+/g, " ").trim();
  const zh = t.match(/^(.*?)[。．]?\s*(?:使用時機|觸發時機|適用時機)[：:]\s*(.+)$/);
  if (zh) return { desc: clip(zh[1] + "。", 200), when: clip(zh[2], 160) };
  const s = t.match(/^(.+?[。！？]|.+?[.!?](?=\s))\s*(.*)$/);
  return s ? { desc: clip(s[1], 200), when: clip(s[2], 160) } : { desc: clip(t, 200), when: "" };
}

// 比對同名 skill 的多份副本是否一致；換行符號差異不算
function hashDir(dir) {
  const h = createHash("sha1");
  (function walk(d) {
    for (const name of readdirSync(d).sort()) {
      if ([".openskills.json", ".skill-source.json", ".git", "node_modules"].includes(name)) continue;
      const p = join(d, name);
      if (isDir(p)) walk(p);
      else h.update(relative(dir, p).split(sep).join("/") + "\0" + readFileSync(p, "latin1").replace(/\r\n/g, "\n"));
    }
  })(dir);
  return h.digest("hex");
}

// 網站是公開的：路徑一律把家目錄換成 ~
function hideHome(s) {
  return String(s ?? "").split(HOME).join("~");
}

const marketplaces = readJsonIfExists(join(HOME, ".claude", "plugins", "known_marketplaces.json")) ?? {};

function sourceOf(entry) {
  // .openskills.json 由 openskills 安裝時寫入；.skill-source.json 是只抓單一資料夾安裝時自己記的，欄位相容
  const osj = readJsonIfExists(join(entry.dir, ".openskills.json")) ?? readJsonIfExists(join(entry.dir, ".skill-source.json"));
  if (osj) {
    const url = (osj.repoUrl ?? "").replace(/\.git$/, "");
    const label = osj.sourceType === "local" ? "本機檔案安裝" : url.replace(/^https?:\/\/github\.com\//, "") || osj.source;
    return { label: hideHome(label), url: /^https?:/.test(url) ? url : "", installedAt: (osj.installedAt ?? "").slice(0, 10) };
  }
  if (entry.plugin) {
    const src = marketplaces[entry.marketplace]?.source ?? {};
    const url = src.repo ? `https://github.com/${src.repo}` : src.url ?? "";
    return {
      label: src.repo ?? entry.marketplace,
      url: /^https?:/.test(url) ? url : "",
      installedAt: (entry.installedAt ?? "").slice(0, 10),
      version: entry.version,
    };
  }
  const gitConfig = join(entry.dir, ".git", "config");
  if (existsSync(gitConfig)) {
    const url = (readFileSync(gitConfig, "utf8").match(/url\s*=\s*(\S+)/)?.[1] ?? "").replace(/\.git$/, "");
    if (url) return { label: hideHome(url.replace(/^https?:\/\/github\.com\//, "")), url: /^https?:/.test(url) ? url : "", installedAt: "" };
  }
  return { label: "手動放置", url: "", installedAt: "" };
}

// ── 掃描 ─────────────────────────────

const found = [];
const seen = new Set();
function add(entry) {
  const key = resolve(entry.dir).toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  found.push(entry);
}

for (const dir of skillDirs(join(HOME, ".claude", "skills"))) {
  add({ dir, name: basename(dir), where: "~/.claude/skills", anyProject: true });
}

for (const pattern of deck.projectRoots ?? []) {
  for (const project of expand(pattern)) {
    if (resolve(project) === resolve(HOME)) continue;
    for (const dir of skillDirs(join(project, ".claude", "skills"))) {
      add({ dir, name: basename(dir), where: basename(project), anyProject: false });
    }
  }
}

if (deck.includePlugins !== false) {
  const installed = readJsonIfExists(join(HOME, ".claude", "plugins", "installed_plugins.json"))?.plugins ?? {};
  for (const [id, installs] of Object.entries(installed)) {
    const [plugin, marketplace] = id.split("@");
    for (const inst of installs) {
      const anyProject = inst.scope === "user" || !inst.projectPath;
      for (const dir of skillDirs(join(inst.installPath, "skills"))) {
        add({
          dir,
          name: `${plugin}:${basename(dir)}`,
          where: anyProject ? `外掛 ${plugin}` : `外掛 ${plugin}（${basename(inst.projectPath)}）`,
          anyProject,
          plugin,
          marketplace,
          version: inst.version,
          installedAt: inst.installedAt,
        });
      }
    }
  }
}

// ── 整理成網站資料 ─────────────────────────────

const byName = new Map();
for (const entry of found) {
  if (!byName.has(entry.name)) byName.set(entry.name, []);
  byName.get(entry.name).push(entry);
}

const order = Object.keys(overrides);
const rank = (list, value) => {
  const i = list.indexOf(value);
  return i < 0 ? list.length : i;
};

const skills = [...byName].map(([name, copies]) => {
  const main = copies[0]; // 使用者層先掃，所以有的話會是使用者層那份
  const fm = frontmatter(join(main.dir, "SKILL.md"));
  const o = overrides[name] ?? {};
  const auto = splitDescription(fm.description);
  const src = sourceOf(main);
  const notes = [];
  if (fm.name && fm.name !== basename(main.dir)) notes.push(`SKILL.md 裡的 name 是 ${fm.name}`);
  if (copies.length > 1 && new Set(copies.map(c => hashDir(c.dir))).size > 1) {
    notes.push(`${copies.length} 份副本內容不同：${copies.map(c => c.where).join("、")}`);
  }
  if (o.category && !categoryIds.has(o.category)) notes.push(`deck.json 指定的分類 ${o.category} 不存在`);
  return {
    name,
    category: categoryIds.has(o.category) ? o.category : "new",
    manual: fm["disable-model-invocation"] === "true",
    anyProject: copies.some(c => c.anyProject),
    locations: [...new Set(copies.map(c => c.where))],
    desc: o.desc ?? auto.desc,
    when: o.when ?? auto.when,
    translated: Boolean(o.desc),
    source: src.label,
    sourceUrl: src.url,
    installedAt: src.installedAt,
    ...(src.version && { version: src.version }),
    license: fm.license ?? "",
    notes,
  };
});

const categoryOrder = categories.map(c => c.id);
skills.sort((a, b) =>
  rank(categoryOrder, a.category) - rank(categoryOrder, b.category)
  || rank(order, a.name) - rank(order, b.name)
  || a.name.localeCompare(b.name));

// ── 比對與寫檔 ─────────────────────────────

function readPrevious() {
  if (!existsSync(DATA_FILE)) return null;
  const m = readFileSync(DATA_FILE, "utf8").match(/window\.SKILL_DECK = ([\s\S]*);\s*$/);
  try { return m ? JSON.parse(m[1]) : null; } catch { return null; }
}

function readmeBlock(data) {
  const cell = s => String(s).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
  const manual = data.skills.filter(s => s.manual).length;
  const lines = [
    MARK_START,
    "",
    `共 ${data.skills.length} 個（手動 ${manual}、自動 ${data.skills.length - manual}），${data.generatedAt} 同步。這一段由 \`sync-skills.mjs\` 產生，不要手動修改。`,
  ];
  for (const c of data.categories) {
    const list = data.skills.filter(s => s.category === c.id);
    if (!list.length) continue;
    lines.push("", `### ${c.title}（${list.length}）`, "", "| 指令 | 觸發 | 範圍 | 用途 | 來源 |", "|---|---|---|---|---|");
    for (const s of list) {
      const scope = s.anyProject ? "任何專案" : `限 ${s.locations.join("、")}`;
      const source = s.sourceUrl ? `[${cell(s.source)}](${s.sourceUrl})` : cell(s.source);
      lines.push(`| \`/${s.name}\` | ${s.manual ? "手動" : "自動"} | ${cell(scope)} | ${cell(s.desc)} | ${source} |`);
    }
  }
  lines.push("", MARK_END);
  return lines.join("\n");
}

const previous = readPrevious();
const payload = { skills, categories };
const same = Boolean(previous)
  && JSON.stringify({ skills: previous.skills, categories: previous.categories }) === JSON.stringify(payload);
const data = { generatedAt: same ? previous.generatedAt : new Date().toLocaleDateString("sv-SE"), ...payload };

const readme = existsSync(README_FILE) ? readFileSync(README_FILE, "utf8") : "# Claude Skill 盤點台\n";
// Windows 上 git 可能把 README 轉成 CRLF，產生的區塊要跟著原檔的換行符號，否則 --check 永遠不一致
const eol = readme.includes("\r\n") ? "\r\n" : "\n";
const block = readmeBlock(data).replace(/\n/g, eol);
const nextReadme = readme.includes(MARK_START) && readme.includes(MARK_END)
  ? readme.replace(new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`), () => block)
  : `${readme.trimEnd()}${eol}${eol}## 清單${eol}${eol}${block}${eol}`;
const readmeSame = nextReadme === readme;

const before = new Map((previous?.skills ?? []).map(s => [s.name, JSON.stringify(s)]));
const added = skills.filter(s => !before.has(s.name)).map(s => s.name);
const removed = [...before.keys()].filter(n => !byName.has(n));
const changed = skills.filter(s => before.has(s.name) && before.get(s.name) !== JSON.stringify(s)).map(s => s.name);
const untranslated = skills.filter(s => !s.translated).map(s => s.name);
const manualCount = skills.filter(s => s.manual).length;

if (!HOOK) {
  console.log(`本機共 ${skills.length} 個 skill（手動 ${manualCount}、自動 ${skills.length - manualCount}）`);
  if (added.length) console.log(`新增：${added.join("、")}`);
  if (removed.length) console.log(`移除：${removed.join("、")}`);
  if (changed.length) console.log(`有變動：${changed.join("、")}`);
  if (untranslated.length) console.log(`還沒有中文說明：${untranslated.join("、")}（在 deck.json 的 skills 補 category、desc、when）`);
}

if (HOOK) {
  // 一致時什麼都不印，session 開頭才不會多一行雜訊
  if (!(same && readmeSame)) {
    const diff = [
      added.length && `新增 ${added.join("、")}`,
      removed.length && `移除 ${removed.join("、")}`,
      changed.length && `有變動 ${changed.join("、")}`,
    ].filter(Boolean).join("；") || "README 清單需要重新產生";
    console.log(JSON.stringify({
      systemMessage: `Skill 盤點台和本機不一致（${diff}）。到 ${ROOT} 跑 node sync-skills.mjs，再 commit、push。`,
      hookSpecificOutput: {
        hookEventName: "SessionStart",
        additionalContext: `claude-skill-deck 網站（${ROOT}）和本機安裝的 skill 不一致：${diff}。使用者希望網站永遠跟本機一致：找適當時機提醒，並提議在該目錄執行 node sync-skills.mjs 同步；commit、push 之前要先取得使用者同意。`,
      },
    }));
  }
} else if (CHECK) {
  if (same && readmeSame) {
    console.log("網站和本機一致。");
  } else {
    console.log("網站和本機不一致。執行 node sync-skills.mjs 更新。");
    process.exitCode = 1;
  }
} else if (same && readmeSame) {
  console.log("沒有變化，沒有寫檔。");
} else {
  writeFileSync(DATA_FILE, `// 由 sync-skills.mjs 產生，不要手動修改。\nwindow.SKILL_DECK = ${JSON.stringify(data, null, 2)};\n`);
  writeFileSync(README_FILE, nextReadme);
  console.log("已更新 skills-data.js、README.md。下一步：git add -A、git commit、git push。");
}
