# Claude Skill 盤點台

這台電腦實際安裝的 Claude Code skill 清單。清單不是手寫的，是 `sync-skills.mjs` 掃描本機後產生的，所以之後裝了新 skill，跑一次腳本就會更新。

線上版：<https://rita112025-cpu.github.io/claude-skill-deck/>，可搜尋、可篩選，點一下就能複製指令。

## 裝了新 skill 之後

1. 在這個 repo 的根目錄執行 `node sync-skills.mjs`
2. 看輸出：會列出新增、移除，以及還沒有中文說明的 skill
3. （可選）在 `deck.json` 的 `skills` 補上 `category`、`desc`、`when`，再跑一次步驟 1
4. `git add -A`、`git commit`、`git push`，GitHub Pages 通常 1～2 分鐘後更新

只想檢查網站和本機是否一致：`node sync-skills.mjs --check`，不一致時結束碼為 1。

需要 Node.js 18 以上，不用安裝任何套件。

## 掃描範圍

| 位置 | 網站上的範圍標示 |
|---|---|
| `~/.claude/skills` | 任何專案 |
| `deck.json` 的 `projectRoots`（預設 `D:/*`）底下各專案的 `.claude/skills` | 限該專案 |
| 用 `/plugin install` 裝的外掛（讀 `~/.claude/plugins/installed_plugins.json`） | 任何專案；指令會帶外掛名稱，例如 `/i-have-adhd:i-have-adhd` |

不列入：桌面版內建的外掛（anthropic-skills、pdf-viewer 等）、Claude Code 內建指令，以及沒有 `SKILL.md` 的資料夾（例如 `~/.claude/skills/_shared`）。

專案放在別的磁碟或資料夾，就把路徑加進 `deck.json` 的 `projectRoots`。路徑可以用 `*`，例如 `C:/work/*`。

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 網站本體 |
| `skills-data.js` | 網站資料，由腳本產生，不要手改 |
| `deck.json` | 掃描路徑、分類、中文說明 |
| `sync-skills.mjs` | 同步腳本 |
| `skills/multi-session-opord/` | 自製 skill 的原始檔備份；這台電腦沒裝，所以不在清單上 |

## 清單

<!-- skills:start -->

共 8 個（手動 1、自動 7），2026-09-14 同步。這一段由 `sync-skills.mjs` 產生，不要手動修改。

### 開工前（2）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-issue` | 自動 | 限 rita-ai-workbench | 把 PM 需求 Issue 轉成前端技術 Issue 草稿。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/fe-arch` | 自動 | 任何專案 | 前端專案的檔案與目錄放置規則。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |

### 寫程式時（1）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/react-best-practices` | 自動 | 限 rita-ai-workbench | Vercel 整理的 React／Next.js 效能規則，40 多條、分 8 類。 | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) |

### 交付前（2）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-code-review` | 自動 | 任何專案 | 用規格、標準兩軸審查前端變更，串接內建 /code-review。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/verification-before-completion` | 自動 | 限 rita-ai-workbench | 說「完成」「修好」「測試通過」之前，先跑驗證指令、看到結果。 | [obra/superpowers](https://github.com/obra/superpowers) |

### MR（2）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-mr-generator` | 自動 | 任何專案 | 產生 Merge Request 的標題與描述。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/fe-mr-review` | 自動 | 任何專案 | AI 先審 GitLab MR，列出要人工確認的項目；也能分析並回覆 review comment。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |

### 對話設定（1）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/i-have-adhd:i-have-adhd` | 手動 | 任何專案 | 把回覆改成 ADHD 友善的形狀：先給下一步、多步驟編號、每輪重述進度。 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) |

<!-- skills:end -->
