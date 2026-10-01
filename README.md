# Claude Skill 盤點台

這台電腦實際安裝的 Claude Code skill 清單。清單不是手寫的，是 `sync-skills.mjs` 掃描本機後產生的，所以之後裝了新 skill，跑一次腳本就會更新。

線上版：<https://rita112025-cpu.github.io/claude-skill-deck/>，可搜尋、可篩選，點一下就能複製指令。

## 裝了新 skill 之後

1. 在這個 repo 的根目錄執行 `node sync-skills.mjs`
2. 看輸出：會列出新增、移除，以及還沒有中文說明的 skill
3. （可選）在 `deck.json` 的 `skills` 補上 `category`、`desc`、`when`，再跑一次步驟 1
4. `git add -A`、`git commit`、`git push`，GitHub Pages 通常 1～2 分鐘後更新

只想檢查網站和本機是否一致：`node sync-skills.mjs --check`，不一致時結束碼為 1。

自動檢查：`node sync-skills.mjs --hook` 是給 Claude Code 的 SessionStart hook 用的，一致時不輸出任何東西，不一致時會在 session 開頭提醒。這台電腦已經在 `~/.claude/settings.json` 設定好，每次開新 session 或接續舊 session 都會跑一次。

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

共 31 個（手動 1、自動 30），2026-10-01 同步。這一段由 `sync-skills.mjs` 產生，不要手動修改。

### 開工前（4）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-issue` | 自動 | 任何專案 | 把 PM 需求 Issue 轉成前端技術 Issue 草稿。 | 手動放置 |
| `/fe-arch` | 自動 | 任何專案 | 前端專案的檔案與目錄放置規則。 | 手動放置 |
| `/brainstorming` | 自動 | 任何專案 | 動手前先釐清需求與設計，經討論並取得你同意後才實作。 | 手動放置 |
| `/writing-plans` | 自動 | 任何專案 | 有規格的多步驟任務，動手前先寫成可照做的實作計畫。 | 手動放置 |

### 寫程式時（4）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/executing-plans` | 自動 | 任何專案 | 在目前 session 自己逐項執行實作計畫，最後做一次整體審查。 | 手動放置 |
| `/impeccable` | 自動 | 任何專案 | 設計、審查與打磨前端介面：版面、排版、配色、動效與無障礙。 | 手動放置 |
| `/test-driven-development` | 自動 | 任何專案 | 先寫會失敗的測試並看它失敗，再寫最少的程式碼讓它通過。 | 手動放置 |
| `/ui-ux-pro-max` | 自動 | 任何專案 | 查詢 UI/UX 風格、配色、字體與規範，用來設計與檢查介面。 | 手動放置 |

### 交付前（5）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-code-review` | 自動 | 任何專案 | 用規格、標準兩軸審查前端變更，串接內建 /code-review。 | 手動放置 |
| `/agent-browser` | 自動 | 任何專案 | 用 CLI 操作網頁：開頁面、填表單、點按鈕、截圖、擷取資料。 | 手動放置 |
| `/receiving-code-review` | 自動 | 任何專案 | 收到 code review 意見時先驗證再實作，不盲目照單全收。 | 手動放置 |
| `/requesting-code-review` | 自動 | 任何專案 | 完成任務或 merge 前，派 reviewer 檢查成果是否符合需求。 | 手動放置 |
| `/verification-before-completion` | 自動 | 任何專案 | 宣稱完成、修好或通過之前，先實際跑驗證指令並看到結果。 | 手動放置 |

### MR 與發版（3）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-mr-generator` | 自動 | 任何專案 | 產生 Merge Request 的標題與描述。 | 手動放置 |
| `/fe-mr-review` | 自動 | 任何專案 | AI 先審 GitLab MR，列出要人工確認的項目；也能分析並回覆 review comment。 | 手動放置 |
| `/changelog-generator` | 自動 | 任何專案 | 把 git commit 整理成使用者看得懂的更新說明。 | 手動放置 |

### AI 工具開發（4）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/mcp-builder` | 自動 | 任何專案 | 打造 MCP server 的指南，讓 LLM 透過工具串接外部服務。 | 手動放置 |
| `/prompt-engineering` | 自動 | 任何專案 | 寫 prompt 的技巧：優化提示、改善 LLM 輸出、設計可重用的 prompt 範本。 | 手動放置 |
| `/book-to-skill` | 自動 | 任何專案 | 把書或文件（PDF、EPUB 等）轉成 skill，萃取其中的框架與原則。 | [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) |
| `/writing-skills` | 自動 | 任何專案 | 建立、修改 skill，並在部署前驗證它真的有效。 | 手動放置 |

### 對話設定（2）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/i-have-adhd` | 手動 | 任何專案 | 把回覆改成 ADHD 友善的形狀：先給下一步、多步驟編號、每輪重述進度。 | 手動放置 |
| `/using-superpowers` | 自動 | 任何專案 | 對話開始時先確立規則：只要有 skill 可能適用，回答前先呼叫它。 | 手動放置 |

### 除錯與事後檢討（2）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/diagnosing-superpowers` | 自動 | 任何專案 | 分析 superpowers session 哪裡出錯，每項發現附上紀錄出處。 | 手動放置 |
| `/systematic-debugging` | 自動 | 任何專案 | 遇到 bug 或測試失敗，先查出根因再修，沒查完不提修正。 | 手動放置 |

### 多代理協作與交接（4）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/dispatching-parallel-agents` | 自動 | 任何專案 | 兩個以上互不相依的任務，各派一個 agent 同時處理再整合。 | 手動放置 |
| `/finishing-a-development-branch` | 自動 | 任何專案 | 測試通過後，列出合併、發 PR、保留等選項並收尾分支。 | 手動放置 |
| `/subagent-driven-development` | 自動 | 任何專案 | 執行計畫時每項任務派新 subagent，逐項審查，最後整體審查。 | 手動放置 |
| `/using-git-worktrees` | 自動 | 任何專案 | 開始功能開發前先確認有隔離工作區，沒有就建立 git worktree。 | 手動放置 |

### 專案知識庫（3）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/er4-appendix-c-utility-routing` | 自動 | 任何專案 | 汐東捷運業主需求書附錄 C：管線佈設與共同管架施作原則查詢。 | 手動放置 |
| `/scada-basecom-evidence-audit` | 自動 | 任何專案 | 汐東／基隆 SCADA 文件盤點、證據分層與待確認事項查詢。 | 手動放置 |
| `/scada-xdmrt-tk01` | 自動 | 任何專案 | 汐止東湖線 SCADA 送審文件查詢：主控台、設備規格、EMC、電纜光纖。 | 手動放置 |

<!-- skills:end -->
