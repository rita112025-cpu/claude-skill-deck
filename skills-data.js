// 由 sync-skills.mjs 產生，不要手動修改。
window.SKILL_DECK = {
  "generatedAt": "2026-09-23",
  "skills": [
    {
      "name": "fe-issue",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把 PM 需求 Issue 轉成前端技術 Issue 草稿。",
      "when": "貼上 PM issue，或說「需求怎麼拆」「開發任務規劃」時啟動。給 GitLab Issue 網址會自動抓內容。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-23",
      "license": "",
      "notes": []
    },
    {
      "name": "fe-arch",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "前端專案的檔案與目錄放置規則。",
      "when": "新增元件、API、hook、頁面，或問「這個檔案該放哪」「要不要抽共用」時啟動。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-23",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:brainstorming",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "任何創造性工作（做新功能、蓋元件、加功能、改行為）動手之前，先探索使用者真正的意圖、需求與設計方向。",
      "when": "開始任何創造性工作之前必須啟動，不能跳過。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:writing-plans",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "手上有規格或需求、要做的是多步驟任務，在動程式碼之前先把計畫寫下來。",
      "when": "拿到 spec 或需求、準備規劃多步驟任務、還沒開始寫程式碼時啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "to-spec",
      "category": "plan",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把目前對話直接整理成一份規格，發布到專案的 issue tracker——不再訪談，只做已討論內容的綜合整理。",
      "when": "討論已經夠完整、想直接收斂成正式規格並發布時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "to-tickets",
      "category": "plan",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把一份計畫、規格或目前對話拆成一批「tracer-bullet」票券，每張票標明它會卡住哪些其他票，發布到設定好的 tracker。",
      "when": "計畫或規格已經有了，要拆成可執行、有依賴關係的票券時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "to-questionnaire",
      "category": "plan",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把一個自己答不出來的決定，轉換成一份給別人填的問卷。",
      "when": "有個決定需要別人的輸入才能做，想用問卷形式收集答案時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "triage",
      "category": "plan",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "讓 issue 和外部 PR 走過一套分流狀態機：分類、驗證、必要時訪談式追問、寫成 agent 可直接接手的簡報。",
      "when": "有一批 issue／PR 需要整理分流、決定優先順序與後續處理方式時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "wayfinder",
      "category": "plan",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把一大塊超出單一 agent session 負荷的工作，規劃成 issue tracker 上一張張決策票券構成的地圖，逐一解決直到終點清楚為止。",
      "when": "任務規模太大、一個 session 裝不下，需要拆成長期可追蹤的決策點時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "research",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "針對一個問題，對照高可信度的第一手資料來源進行調查，並把發現寫成 repo 裡的 Markdown 檔案。",
      "when": "想研究某個主題、蒐集文件或 API 事實，或想把讀資料的苦工丟給背景 agent 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "pdf-extraction",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "逐頁從 PDF 擷取文字並保留頁碼，優先用 PyMuPDF、備援 pypdf；掃描（純圖片）頁會標記 NEEDS_OCR，不會亂猜內容。",
      "when": "被要求讀取、解析、擷取、摘要或交叉比對 PDF 時啟動，尤其是工程／SCADA 規格書要對照 Excel 或 DWG 資料的情境；純編輯、合併或跑 OCR 的需求不適用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "vercel-react-best-practices",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Vercel 整理的 React／Next.js 效能規則，40 多條、分 8 類。",
      "when": "寫、改、審 React 元件、Next.js 頁面、資料抓取或 bundle 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "superpowers:test-driven-development",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "測試先行：先寫會失敗的測試，再寫實作讓它通過。",
      "when": "開始實作功能或修 bug、還沒寫程式碼之前啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:systematic-debugging",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "遇到 bug、測試失敗或怪異行為時，先找出根因再動手修。",
      "when": "回報壞掉、測試不過、結果不如預期，準備提出修正之前啟動。內含追根因、縱深防禦、找出污染狀態的測試等方法。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "implement",
      "category": "build",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "根據一份規格或一批票券（tickets）把工作實作出來。",
      "when": "手上已經有規格或票券，準備開始動手寫程式時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "implement-spec",
      "category": "build",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把一份規格（specification）落地實作成程式碼。",
      "when": "手上有明確的 spec，要照著把功能寫出來時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "migrate-to-shoehorn",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把測試檔裡的 `as` 型別斷言換成 @total-typescript/shoehorn。",
      "when": "使用者提到 shoehorn、想在測試裡取代 `as`、或需要局部（partial）測試資料時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "prototype",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "做一個用完即丟的雛型（prototype），純粹用來回答一個設計上的疑問。",
      "when": "想快速確認某個狀態模型或邏輯是否合理，或想探索 UI 該長什麼樣子時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "tdd",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "測試先行開發（TDD）。",
      "when": "使用者想先寫測試再做功能／修 bug，提到「red-green-refactor」，或想要整合測試時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "vercel-composition-patterns",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "能撐得住規模的 React 組合模式（composition patterns）。",
      "when": "重構 boolean prop 氾濫的元件、打造彈性元件庫、設計可重用 API，或碰到 compound components、render props、context providers、元件架構、React 19 API 變動時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "vercel-react-native-skills",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "打造高效能行動 App 的 React Native／Expo 最佳實務。",
      "when": "寫 React Native 元件、優化清單效能、實作動畫，或處理原生模組時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "vercel-react-view-transitions",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 React 的 View Transition API 做流暢、原生感的動畫轉場。",
      "when": "要加頁面轉場、路由切換動畫、共享元素動畫、元件進出場、清單重新排序動畫，或在 Next.js 整合 view transitions 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "fe-code-review",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用規格、標準兩軸審查前端變更，串接內建 /code-review。",
      "when": "說 review、「幫我看一下這個 branch」，或想知道改動會影響到哪裡時啟動。會追 diff 以外的呼叫點副作用。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-23",
      "license": "",
      "notes": []
    },
    {
      "name": "playwright-skill",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 Playwright 自動操作瀏覽器：測網站、截圖、檢查 RWD、登入流程與壞連結。",
      "when": "說要測網站、驗證網頁功能或自動操作瀏覽器時啟動，會自動偵測本機的開發伺服器。",
      "translated": true,
      "source": "lackeyjb/playwright-skill",
      "sourceUrl": "https://github.com/lackeyjb/playwright-skill",
      "installedAt": "2026-09-23",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "superpowers:verification-before-completion",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "說「完成」「修好」「測試通過」之前，先跑驗證指令、看到結果。",
      "when": "準備 commit、開 PR，或要回報完成之前啟動。沒有證據就不算完成。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "code-review",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "從固定基準點（commit／branch／tag／merge-base）開始，用「標準」與「規格」兩軸審查變更，兩個子 agent 平行跑、結果並排呈現。",
      "when": "要 review 一個 branch、一個 PR、進行中的變更，或說「review since X」時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "web-design-guidelines",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "依 Web Interface Guidelines 審查 UI 程式碼。",
      "when": "被要求「review my UI」「check accessibility」「audit design」「review UX」，或要對照最佳實務檢查網站時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "resolving-merge-conflicts",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "處理正在進行中的 git merge／rebase 衝突。",
      "when": "遇到合併或 rebase 卡在衝突、需要解決時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:requesting-code-review",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "完成任務、做完重要功能，或準備 merge 前，確認成果真的符合需求。",
      "when": "準備收尾、要請人（或自己）review 之前啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:receiving-code-review",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "收到 code review 意見時，在動手改之前先技術性地檢視、驗證，尤其當意見看起來不清楚或技術上有疑慮時，不要照單全收。",
      "when": "收到 review 回饋、準備採納建議之前啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "fe-mr-generator",
      "category": "mr",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "產生 Merge Request 的標題與描述。",
      "when": "說「幫我產 MR 描述」、整理 branch 變更，或開發完成要推 MR 時啟動。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-23",
      "license": "",
      "notes": []
    },
    {
      "name": "fe-mr-review",
      "category": "mr",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "AI 先審 GitLab MR，列出要人工確認的項目；也能分析並回覆 review comment。",
      "when": "被指派審 MR，或 MR 上有 review 建議要處理時啟動。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-23",
      "license": "",
      "notes": []
    },
    {
      "name": "changelog-generator",
      "category": "mr",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把 git commit 整理成使用者看得懂的更新說明。",
      "when": "要發版、寫 CHANGELOG，或整理這段時間改了什麼時啟動。會分類並濾掉技術細節。",
      "translated": true,
      "source": "ComposioHQ/awesome-claude-skills",
      "sourceUrl": "https://github.com/ComposioHQ/awesome-claude-skills",
      "installedAt": "2026-09-23",
      "license": "",
      "notes": []
    },
    {
      "name": "mcp-builder",
      "category": "ai",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "打造 MCP server 的指南，讓 LLM 透過工具串接外部服務。",
      "when": "要寫 MCP server 串接外部 API 時啟動，Python（FastMCP）或 Node／TypeScript（MCP SDK）都適用。",
      "translated": true,
      "source": "ComposioHQ/awesome-claude-skills",
      "sourceUrl": "https://github.com/ComposioHQ/awesome-claude-skills",
      "installedAt": "2026-09-23",
      "license": "Complete terms in LICENSE.txt",
      "notes": []
    },
    {
      "name": "prompt-engineering",
      "category": "ai",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "寫 prompt 的技巧：優化提示、改善 LLM 輸出、設計可重用的 prompt 範本。",
      "when": "撰寫 agent 指令、hook、skill、子代理 prompt，或任何跟 LLM 互動的內容時啟動。",
      "translated": true,
      "source": "NeoLabHQ/context-engineering-kit",
      "sourceUrl": "https://github.com/NeoLabHQ/context-engineering-kit",
      "installedAt": "2026-09-23",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:writing-skills",
      "category": "ai",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "建立新 skill、修改既有 skill，或在部署前驗證 skill 真的能用。",
      "when": "要寫新 skill、改 skill，或確認 skill 有效時啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "i-have-adhd",
      "category": "chat",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把回覆改成 ADHD 友善的形狀：先給下一步、多步驟編號、每輪重述進度。",
      "when": "打指令後整個 session 持續生效，說「stop adhd mode」關閉。這份是手動複製 skill 資料夾，外掛版原有的 always-on hook 開關沒有一併裝上，要用要另外跑 /plugin marketplace add ayghri/i-have-adhd 正式裝成外掛。",
      "translated": true,
      "source": "ayghri/i-have-adhd",
      "sourceUrl": "https://github.com/ayghri/i-have-adhd",
      "installedAt": "2026-09-23",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "wait-what",
      "category": "chat",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "「等等，剛剛那句話沒聽懂」：請 Claude 用不同方式重講一次上一則回覆。",
      "when": "覺得 Claude 上一句話講得太快、太術語、或沒說到重點時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "grilling",
      "category": "personal",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "針對一個計畫、決定或想法，連續不斷地追問下去，逼出盲點。",
      "when": "想要有人幫忙壓力測試自己的想法，或說出任何「grill」相關的觸發語時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "grill-me",
      "category": "personal",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用連續追問的方式訪談，把一個計畫或設計磨得更扎實。",
      "when": "想把某個計畫或設計想清楚、經得起質疑時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "grill-with-docs",
      "category": "personal",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "跟 grill-me 一樣是連續追問式訪談，但邊問邊順手產出 ADR 和名詞表等文件。",
      "when": "想一邊釐清計畫、一邊把過程順便寫成正式文件時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "loop-me",
      "category": "personal",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "針對「這個 workspace 裡想做的工作流程」進行連續追問，把規格問清楚。",
      "when": "想設計一個新的工作流程、但規格還沒想清楚時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "codebase-design",
      "category": "arch",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "設計「深模組」時共用的詞彙庫：怎麼設計或改善模組介面、找出可以再深化的地方、決定介面切在哪裡。",
      "when": "要設計或改善模組介面、找架構深化機會、讓程式碼更好測試或更利於 AI 導覽，或其他 skill 需要這套深模組詞彙時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "domain-modeling",
      "category": "arch",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "建立並持續打磨一個專案的領域模型（domain model）。",
      "when": "討論程式碼裡的術語、撰寫或修改 CONTEXT.md，或記錄／修改 ADR 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "improve-codebase-architecture",
      "category": "arch",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "掃描整個 codebase 找出可以深化架構的機會，做成可視化 HTML 報告，選一項後再用訪談方式打磨。",
      "when": "想全面檢視架構、找出哪裡該重構或抽象化時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "setup-ts-deep-modules",
      "category": "arch",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把 dependency-cruiser 接進 TypeScript 專案，讓每個套件都成為「深模組」：實作藏在子資料夾裡，只能透過進入點檔案存取。",
      "when": "使用者主動要求時啟動，用於一次性把架構邊界規則佈線進 repo。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "diagnosing-bugs",
      "category": "debug2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "處理難纏的 bug 或效能退化時的診斷迴圈。",
      "when": "使用者說「diagnose」「debug this」，或回報東西壞了、丟例外、失敗、變慢時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:diagnosing-superpowers",
      "category": "debug2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "當一個 superpowers session 出了狀況，幫忙分析為什麼——重工、計畫被忽略、卡頓、結果不好、該觸發的 skill 沒觸發、「怎麼跑這麼久／這麼貴」，也能整理成回報給 superpowers 維護者的 bug report。",
      "when": "想搞懂某次（含過去的）session 為什麼跑歪、或要寫 bug report 時啟動，任何 harness 都適用。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "retro",
      "category": "debug2",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "針對一次寫程式的 session 做事後回顧（retrospective）。",
      "when": "一段開發工作告一段落，想回頭檢討這次做得如何時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "ask-matt",
      "category": "collab",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "不知道現在該用哪個 skill 或走哪個流程時，問它一聲，它會幫你在這批 skill 裡找方向。",
      "when": "面對一堆 skill 不知從何下手，或想知道某個情境該套哪個流程時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "claude-handoff",
      "category": "collab",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把目前對話交接給一個全新的背景 agent，讓它立刻接手繼續做。",
      "when": "要把手上工作丟給另一個 session／agent 接續執行時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "handoff",
      "category": "collab",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把目前對話濃縮成一份交接文件，方便另一個 agent 接手。",
      "when": "要離開這個 session、把進度整理好交給下一個人或下一個 agent 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:dispatching-parallel-agents",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "遇到兩個以上彼此獨立、沒有共用狀態或先後依賴的任務時，平行派給多個 agent 同時做。",
      "when": "手上有多個互不相干的任務、想同時進行而非一個個做時啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:subagent-driven-development",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "執行一份實作計畫時，把各自獨立的任務拆給不同 subagent 分頭做。",
      "when": "手上有計畫要落地、且任務之間可拆給多個 subagent 平行執行時啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:using-git-worktrees",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "開始一項需要跟目前工作區隔離的新功能開發前，準備一個獨立的 git worktree（或退而求其次的隔離方式）。",
      "when": "要開新功能分支、又不想干擁目前工作區的變更，或準備執行實作計畫之前啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:executing-plans",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "在目前 session 裡親自把一份實作計畫執行到底（適用於沒有 subagent 工具、或使用者選擇自己動手做的情況）。",
      "when": "要照著計畫一步步實作，且是自己（而非分派給 subagent）動手時啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:finishing-a-development-branch",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "實作做完、測試都過了，決定接下來要怎麼把這個分支併回去。",
      "when": "功能做完、測試全過，準備決定 merge 方式或收尾流程時啟動。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:using-superpowers",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "每個對話一開始就先確立「怎麼找、怎麼用」這批 skill 的規則，包含連澄清問題都要先套 skill。",
      "when": "任何新對話開始時自動生效，是整套 superpowers 的入口規則。",
      "translated": true,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-beats",
      "category": "writing",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把素材組裝成一連串「beat」構成的閱讀節奏，每個 beat 用到的詞彙都要先鋪墊過。",
      "when": "有一批素材要組織成有節奏的文章結構時啟動（寫作系列技法之一）。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-fragments",
      "category": "writing",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "先不管結構，把原始素材、片段想法挖出來。",
      "when": "還沒想清楚架構、只想先把素材倒出來時啟動（寫作系列技法之一）。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-shape",
      "category": "writing",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把原始素材逐段塑形成一篇文章。",
      "when": "素材已經有了，要動手組織成文章段落時啟動（寫作系列技法之一）。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-for-agents",
      "category": "writing",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "寫給 agent 看的文件的寫法。",
      "when": "要建立或編輯 skill，或修改 AGENTS.md／CLAUDE.md 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-guidelines",
      "category": "writing",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "依 Writing Guidelines 審查文件／文案。",
      "when": "被要求「review my docs」「check writing style」「audit prose」，或要對照寫作規範檢查文件語氣時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "teach",
      "category": "writing",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "在這個 workspace 裡教使用者一項新技能或新概念。",
      "when": "使用者想學一個新概念或新技能時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "pr",
      "category": "writing",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "寫 PR 內文時用。",
      "when": "要撰寫 Pull Request 的說明內容時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "scaffold-exercises",
      "category": "writing",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "建立練習題目錄結構：章節、題目、解答、講解，且都要通過 lint。",
      "when": "想搭建練習題骨架、建立題目 stub，或設定新課程章節時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "setup-matt-pocock-skills",
      "category": "setup2",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把這個 repo 設定成可以用這套工程 skill：設好 issue tracker、triage 標籤詞彙、領域文件的擺放方式。",
      "when": "第一次要用這批工程 skill 之前，先跑一次做初始設定。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "setup-pre-commit",
      "category": "setup2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "在目前 repo 裝上 Husky pre-commit hook，搭配 lint-staged（Prettier）、型別檢查與測試。",
      "when": "要加 pre-commit hook、設定 Husky／lint-staged，或加上 commit 時的格式化／型別檢查／測試時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "git-guardrails-claude-code",
      "category": "setup2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "設定 Claude Code hook，在危險 git 指令（push、reset --hard、clean、branch -D 等）執行前擋下來。",
      "when": "想防止誤觸破壞性 git 操作、加上 git 安全防護，或擋掉 Claude Code 裡的 git push／reset 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "deploy-to-vercel",
      "category": "setup2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把應用程式或網站部署到 Vercel。",
      "when": "使用者要求「deploy my app」「deploy and give me the link」「push this live」，或要建立 preview deployment 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "vercel-cli-with-tokens",
      "category": "setup2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 token 認證（而非互動登入）透過 Vercel CLI 部署與管理專案。",
      "when": "要用 access token 操作 Vercel CLI，例如部署、初始設定、或新增環境變數時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "vercel-optimize",
      "category": "setup2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "針對已部署專案做 Vercel 成本與效能優化（Next.js／SvelteKit／Nuxt 為主，Astro 有限支援）：先收集 Vercel 指標與掃描結果，只追有數據支撐的候選項，產出有版本依據的建議。",
      "when": "想降低 Vercel 帳單、處理慢或貴的路由、找快取機會，或關心 Function Invocations、Build Minutes、Fast Data Transfer、Core Web Vitals、Bot Management、Fluid compute 等指標時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "wizard",
      "category": "setup2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "產生一份互動式 bash 精靈，帶使用者一步步完成只有人類才能做的操作。",
      "when": "要佈建基礎設施、設定憑證或 CI 密鑰、走一個不熟悉的第三方後台，或執行一次性遷移／切換時啟動；agent 自己能做的步驟不適用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    }
  ],
  "categories": [
    {
      "id": "plan",
      "title": "開工前",
      "sub": "需求進來、動手之前：把需求拆成技術 Issue，決定檔案放哪。"
    },
    {
      "id": "build",
      "title": "寫程式時",
      "sub": "寫程式、修 bug 時套用的做法與規則。"
    },
    {
      "id": "verify",
      "title": "交付前",
      "sub": "說「做完了」之前：先審查、用瀏覽器實測，再用實際跑出來的結果證明。"
    },
    {
      "id": "mr",
      "title": "MR 與發版",
      "sub": "開 MR、審 MR，以及整理給人看的更新說明。"
    },
    {
      "id": "ai",
      "title": "AI 工具開發",
      "sub": "寫 MCP server、prompt、skill 這類給 AI 用的東西時。"
    },
    {
      "id": "chat",
      "title": "對話設定",
      "sub": "調整 Claude 回覆方式的開關。"
    },
    {
      "id": "personal",
      "title": "訪談打磨",
      "sub": "用連續追問把一個計畫、設計或決定磨得更扎實。"
    },
    {
      "id": "arch",
      "title": "架構與模組設計",
      "sub": "設計模組介面、找架構可深化的地方、佈線相依檢查工具。"
    },
    {
      "id": "debug2",
      "title": "除錯與事後檢討",
      "sub": "追根因、寫 session 事後報告、分析哪裡跑歪了。"
    },
    {
      "id": "collab",
      "title": "多代理協作與交接",
      "sub": "把工作交給另一個 agent、平行派工、隔離工作區、收尾分支。"
    },
    {
      "id": "writing",
      "title": "寫作與文件",
      "sub": "把素材寫成文章、教材、給 agent 看的文件，或審查文件用字風格。"
    },
    {
      "id": "setup2",
      "title": "環境與工具設置",
      "sub": "一次性把 repo 設定好：pre-commit、git 安全防護、Vercel 帳號、專案初始化。"
    },
    {
      "id": "new",
      "title": "新安裝・待分類",
      "sub": "同步時新發現、deck.json 還沒幫它分類的 skill。說明直接取自 SKILL.md 原文。"
    }
  ]
};
