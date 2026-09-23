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

共 73 個（手動 23、自動 50），2026-09-23 同步。這一段由 `sync-skills.mjs` 產生，不要手動修改。

### 開工前（11）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-issue` | 自動 | 任何專案 | 把 PM 需求 Issue 轉成前端技術 Issue 草稿。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/fe-arch` | 自動 | 任何專案 | 前端專案的檔案與目錄放置規則。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/superpowers:brainstorming` | 自動 | 任何專案 | 任何創造性工作（做新功能、蓋元件、加功能、改行為）動手之前，先探索使用者真正的意圖、需求與設計方向。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:writing-plans` | 自動 | 任何專案 | 手上有規格或需求、要做的是多步驟任務，在動程式碼之前先把計畫寫下來。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/to-spec` | 手動 | 任何專案 | 把目前對話直接整理成一份規格，發布到專案的 issue tracker——不再訪談，只做已討論內容的綜合整理。 | 手動放置 |
| `/to-tickets` | 手動 | 任何專案 | 把一份計畫、規格或目前對話拆成一批「tracer-bullet」票券，每張票標明它會卡住哪些其他票，發布到設定好的 tracker。 | 手動放置 |
| `/to-questionnaire` | 手動 | 任何專案 | 把一個自己答不出來的決定，轉換成一份給別人填的問卷。 | 手動放置 |
| `/triage` | 手動 | 任何專案 | 讓 issue 和外部 PR 走過一套分流狀態機：分類、驗證、必要時訪談式追問、寫成 agent 可直接接手的簡報。 | 手動放置 |
| `/wayfinder` | 手動 | 任何專案 | 把一大塊超出單一 agent session 負荷的工作，規劃成 issue tracker 上一張張決策票券構成的地圖，逐一解決直到終點清楚為止。 | 手動放置 |
| `/research` | 自動 | 任何專案 | 針對一個問題，對照高可信度的第一手資料來源進行調查，並把發現寫成 repo 裡的 Markdown 檔案。 | 手動放置 |
| `/pdf-extraction` | 自動 | 任何專案 | 逐頁從 PDF 擷取文字並保留頁碼，優先用 PyMuPDF、備援 pypdf；掃描（純圖片）頁會標記 NEEDS_OCR，不會亂猜內容。 | 手動放置 |

### 寫程式時（11）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/vercel-react-best-practices` | 自動 | 任何專案 | Vercel 整理的 React／Next.js 效能規則，40 多條、分 8 類。 | 手動放置 |
| `/superpowers:test-driven-development` | 自動 | 任何專案 | 測試先行：先寫會失敗的測試，再寫實作讓它通過。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:systematic-debugging` | 自動 | 任何專案 | 遇到 bug、測試失敗或怪異行為時，先找出根因再動手修。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/implement` | 手動 | 任何專案 | 根據一份規格或一批票券（tickets）把工作實作出來。 | 手動放置 |
| `/implement-spec` | 手動 | 任何專案 | 把一份規格（specification）落地實作成程式碼。 | 手動放置 |
| `/migrate-to-shoehorn` | 自動 | 任何專案 | 把測試檔裡的 `as` 型別斷言換成 @total-typescript/shoehorn。 | 手動放置 |
| `/prototype` | 自動 | 任何專案 | 做一個用完即丟的雛型（prototype），純粹用來回答一個設計上的疑問。 | 手動放置 |
| `/tdd` | 自動 | 任何專案 | 測試先行開發（TDD）。 | 手動放置 |
| `/vercel-composition-patterns` | 自動 | 任何專案 | 能撐得住規模的 React 組合模式（composition patterns）。 | 手動放置 |
| `/vercel-react-native-skills` | 自動 | 任何專案 | 打造高效能行動 App 的 React Native／Expo 最佳實務。 | 手動放置 |
| `/vercel-react-view-transitions` | 自動 | 任何專案 | 用 React 的 View Transition API 做流暢、原生感的動畫轉場。 | 手動放置 |

### 交付前（8）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-code-review` | 自動 | 任何專案 | 用規格、標準兩軸審查前端變更，串接內建 /code-review。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/playwright-skill` | 自動 | 任何專案 | 用 Playwright 自動操作瀏覽器：測網站、截圖、檢查 RWD、登入流程與壞連結。 | [lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill) |
| `/superpowers:verification-before-completion` | 自動 | 任何專案 | 說「完成」「修好」「測試通過」之前，先跑驗證指令、看到結果。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/code-review` | 自動 | 任何專案 | 從固定基準點（commit／branch／tag／merge-base）開始，用「標準」與「規格」兩軸審查變更，兩個子 agent 平行跑、結果並排呈現。 | 手動放置 |
| `/web-design-guidelines` | 自動 | 任何專案 | 依 Web Interface Guidelines 審查 UI 程式碼。 | 手動放置 |
| `/resolving-merge-conflicts` | 自動 | 任何專案 | 處理正在進行中的 git merge／rebase 衝突。 | 手動放置 |
| `/superpowers:requesting-code-review` | 自動 | 任何專案 | 完成任務、做完重要功能，或準備 merge 前，確認成果真的符合需求。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:receiving-code-review` | 自動 | 任何專案 | 收到 code review 意見時，在動手改之前先技術性地檢視、驗證，尤其當意見看起來不清楚或技術上有疑慮時，不要照單全收。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |

### MR 與發版（3）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-mr-generator` | 自動 | 任何專案 | 產生 Merge Request 的標題與描述。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/fe-mr-review` | 自動 | 任何專案 | AI 先審 GitLab MR，列出要人工確認的項目；也能分析並回覆 review comment。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/changelog-generator` | 自動 | 任何專案 | 把 git commit 整理成使用者看得懂的更新說明。 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |

### AI 工具開發（3）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/mcp-builder` | 自動 | 任何專案 | 打造 MCP server 的指南，讓 LLM 透過工具串接外部服務。 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| `/prompt-engineering` | 自動 | 任何專案 | 寫 prompt 的技巧：優化提示、改善 LLM 輸出、設計可重用的 prompt 範本。 | [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit) |
| `/superpowers:writing-skills` | 自動 | 任何專案 | 建立新 skill、修改既有 skill，或在部署前驗證 skill 真的能用。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |

### 對話設定（2）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/i-have-adhd` | 手動 | 任何專案 | 把回覆改成 ADHD 友善的形狀：先給下一步、多步驟編號、每輪重述進度。 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) |
| `/wait-what` | 手動 | 任何專案 | 「等等，剛剛那句話沒聽懂」：請 Claude 用不同方式重講一次上一則回覆。 | 手動放置 |

### 訪談打磨（4）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/grilling` | 自動 | 任何專案 | 針對一個計畫、決定或想法，連續不斷地追問下去，逼出盲點。 | 手動放置 |
| `/grill-me` | 手動 | 任何專案 | 用連續追問的方式訪談，把一個計畫或設計磨得更扎實。 | 手動放置 |
| `/grill-with-docs` | 手動 | 任何專案 | 跟 grill-me 一樣是連續追問式訪談，但邊問邊順手產出 ADR 和名詞表等文件。 | 手動放置 |
| `/loop-me` | 手動 | 任何專案 | 針對「這個 workspace 裡想做的工作流程」進行連續追問，把規格問清楚。 | 手動放置 |

### 架構與模組設計（4）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/codebase-design` | 自動 | 任何專案 | 設計「深模組」時共用的詞彙庫：怎麼設計或改善模組介面、找出可以再深化的地方、決定介面切在哪裡。 | 手動放置 |
| `/domain-modeling` | 自動 | 任何專案 | 建立並持續打磨一個專案的領域模型（domain model）。 | 手動放置 |
| `/improve-codebase-architecture` | 手動 | 任何專案 | 掃描整個 codebase 找出可以深化架構的機會，做成可視化 HTML 報告，選一項後再用訪談方式打磨。 | 手動放置 |
| `/setup-ts-deep-modules` | 手動 | 任何專案 | 把 dependency-cruiser 接進 TypeScript 專案，讓每個套件都成為「深模組」：實作藏在子資料夾裡，只能透過進入點檔案存取。 | 手動放置 |

### 除錯與事後檢討（3）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/diagnosing-bugs` | 自動 | 任何專案 | 處理難纏的 bug 或效能退化時的診斷迴圈。 | 手動放置 |
| `/superpowers:diagnosing-superpowers` | 自動 | 任何專案 | 當一個 superpowers session 出了狀況，幫忙分析為什麼——重工、計畫被忽略、卡頓、結果不好、該觸發的 skill 沒觸發、「怎麼跑這麼久／這麼貴」，也能整理成回報給 superpowers 維護者的 bug report。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/retro` | 手動 | 任何專案 | 針對一次寫程式的 session 做事後回顧（retrospective）。 | 手動放置 |

### 多代理協作與交接（9）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/ask-matt` | 手動 | 任何專案 | 不知道現在該用哪個 skill 或走哪個流程時，問它一聲，它會幫你在這批 skill 裡找方向。 | 手動放置 |
| `/claude-handoff` | 手動 | 任何專案 | 把目前對話交接給一個全新的背景 agent，讓它立刻接手繼續做。 | 手動放置 |
| `/handoff` | 手動 | 任何專案 | 把目前對話濃縮成一份交接文件，方便另一個 agent 接手。 | 手動放置 |
| `/superpowers:dispatching-parallel-agents` | 自動 | 任何專案 | 遇到兩個以上彼此獨立、沒有共用狀態或先後依賴的任務時，平行派給多個 agent 同時做。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:subagent-driven-development` | 自動 | 任何專案 | 執行一份實作計畫時，把各自獨立的任務拆給不同 subagent 分頭做。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:using-git-worktrees` | 自動 | 任何專案 | 開始一項需要跟目前工作區隔離的新功能開發前，準備一個獨立的 git worktree（或退而求其次的隔離方式）。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:executing-plans` | 自動 | 任何專案 | 在目前 session 裡親自把一份實作計畫執行到底（適用於沒有 subagent 工具、或使用者選擇自己動手做的情況）。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:finishing-a-development-branch` | 自動 | 任何專案 | 實作做完、測試都過了，決定接下來要怎麼把這個分支併回去。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:using-superpowers` | 自動 | 任何專案 | 每個對話一開始就先確立「怎麼找、怎麼用」這批 skill 的規則，包含連澄清問題都要先套 skill。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |

### 寫作與文件（8）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/writing-beats` | 手動 | 任何專案 | 把素材組裝成一連串「beat」構成的閱讀節奏，每個 beat 用到的詞彙都要先鋪墊過。 | 手動放置 |
| `/writing-fragments` | 手動 | 任何專案 | 先不管結構，把原始素材、片段想法挖出來。 | 手動放置 |
| `/writing-shape` | 手動 | 任何專案 | 把原始素材逐段塑形成一篇文章。 | 手動放置 |
| `/writing-for-agents` | 自動 | 任何專案 | 寫給 agent 看的文件的寫法。 | 手動放置 |
| `/writing-guidelines` | 自動 | 任何專案 | 依 Writing Guidelines 審查文件／文案。 | 手動放置 |
| `/teach` | 手動 | 任何專案 | 在這個 workspace 裡教使用者一項新技能或新概念。 | 手動放置 |
| `/pr` | 自動 | 任何專案 | 寫 PR 內文時用。 | 手動放置 |
| `/scaffold-exercises` | 自動 | 任何專案 | 建立練習題目錄結構：章節、題目、解答、講解，且都要通過 lint。 | 手動放置 |

### 環境與工具設置（7）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/setup-matt-pocock-skills` | 手動 | 任何專案 | 把這個 repo 設定成可以用這套工程 skill：設好 issue tracker、triage 標籤詞彙、領域文件的擺放方式。 | 手動放置 |
| `/setup-pre-commit` | 自動 | 任何專案 | 在目前 repo 裝上 Husky pre-commit hook，搭配 lint-staged（Prettier）、型別檢查與測試。 | 手動放置 |
| `/git-guardrails-claude-code` | 自動 | 任何專案 | 設定 Claude Code hook，在危險 git 指令（push、reset --hard、clean、branch -D 等）執行前擋下來。 | 手動放置 |
| `/deploy-to-vercel` | 自動 | 任何專案 | 把應用程式或網站部署到 Vercel。 | 手動放置 |
| `/vercel-cli-with-tokens` | 自動 | 任何專案 | 用 token 認證（而非互動登入）透過 Vercel CLI 部署與管理專案。 | 手動放置 |
| `/vercel-optimize` | 自動 | 任何專案 | 針對已部署專案做 Vercel 成本與效能優化（Next.js／SvelteKit／Nuxt 為主，Astro 有限支援）：先收集 Vercel 指標與掃描結果，只追有數據支撐的候選項，產出有版本依據的建議。 | 手動放置 |
| `/wizard` | 自動 | 任何專案 | 產生一份互動式 bash 精靈，帶使用者一步步完成只有人類才能做的操作。 | 手動放置 |

<!-- skills:end -->
