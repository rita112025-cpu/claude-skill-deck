// 由 sync-skills.mjs 產生，不要手動修改。
window.SKILL_DECK = {
  "generatedAt": "2026-10-01",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "brainstorming",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "動手前先釐清需求與設計，經討論並取得你同意後才實作。",
      "when": "做新功能、蓋元件、加功能或改行為之前啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-plans",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "有規格的多步驟任務，動手前先寫成可照做的實作計畫。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "executing-plans",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "在目前 session 自己逐項執行實作計畫，最後做一次整體審查。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "impeccable",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "設計、審查與打磨前端介面：版面、排版、配色、動效與無障礙。",
      "when": "設計或改善網站、儀表板、元件、表單等前端介面時使用；純後端不適用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "Apache 2.0",
      "notes": []
    },
    {
      "name": "test-driven-development",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "先寫會失敗的測試並看它失敗，再寫最少的程式碼讓它通過。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "ui-ux-pro-max",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "查詢 UI/UX 風格、配色、字體與規範，用來設計與檢查介面。",
      "when": "設計、建構、審查或修正頁面、元件、設計系統與無障礙等介面時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "agent-browser",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 CLI 操作網頁：開頁面、填表單、點按鈕、截圖、擷取資料。",
      "when": "需要與網站互動、測試網頁應用，或自動化瀏覽器任務時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "receiving-code-review",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "收到 code review 意見時先驗證再實作，不盲目照單全收。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "requesting-code-review",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "完成任務或 merge 前，派 reviewer 檢查成果是否符合需求。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "verification-before-completion",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "宣稱完成、修好或通過之前，先實際跑驗證指令並看到結果。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "book-to-skill",
      "category": "ai",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把書或文件（PDF、EPUB 等）轉成 skill，萃取其中的框架與原則。",
      "when": "想研讀一份文件、在工作時套用作者的框架，或從檔案建立可重用知識庫時使用。",
      "translated": true,
      "source": "virgiliojr94/book-to-skill",
      "sourceUrl": "https://github.com/virgiliojr94/book-to-skill",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-skills",
      "category": "ai",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "建立、修改 skill，並在部署前驗證它真的有效。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
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
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "using-superpowers",
      "category": "chat",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "對話開始時先確立規則：只要有 skill 可能適用，回答前先呼叫它。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "diagnosing-superpowers",
      "category": "debug2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "分析 superpowers session 哪裡出錯，每項發現附上紀錄出處。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "systematic-debugging",
      "category": "debug2",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "遇到 bug 或測試失敗，先查出根因再修，沒查完不提修正。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "dispatching-parallel-agents",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "兩個以上互不相依的任務，各派一個 agent 同時處理再整合。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "finishing-a-development-branch",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "測試通過後，列出合併、發 PR、保留等選項並收尾分支。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "subagent-driven-development",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "執行計畫時每項任務派新 subagent，逐項審查，最後整體審查。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "using-git-worktrees",
      "category": "collab",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "開始功能開發前先確認有隔離工作區，沒有就建立 git worktree。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "er4-appendix-c-utility-routing",
      "category": "kb",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "汐東捷運業主需求書附錄 C：管線佈設與共同管架施作原則查詢。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "scada-basecom-evidence-audit",
      "category": "kb",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "汐東／基隆 SCADA 文件盤點、證據分層與待確認事項查詢。",
      "when": "",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "scada-xdmrt-tk01",
      "category": "kb",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "汐止東湖線 SCADA 送審文件查詢：主控台、設備規格、EMC、電纜光纖。",
      "when": "",
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
      "id": "kb",
      "title": "專案知識庫",
      "sub": "把捷運／SCADA 專案文件整理成的查詢用知識庫，問到相關主題時才載入對應章節。"
    },
    {
      "id": "new",
      "title": "新安裝・待分類",
      "sub": "同步時新發現、deck.json 還沒幫它分類的 skill。說明直接取自 SKILL.md 原文。"
    }
  ]
};
