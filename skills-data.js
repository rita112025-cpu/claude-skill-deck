// 由 sync-skills.mjs 產生，不要手動修改。
window.SKILL_DECK = {
  "generatedAt": "2026-09-14",
  "skills": [
    {
      "name": "fe-issue",
      "category": "plan",
      "manual": false,
      "anyProject": false,
      "locations": [
        "rita-ai-workbench"
      ],
      "desc": "把 PM 需求 Issue 轉成前端技術 Issue 草稿。",
      "when": "貼上 PM issue，或說「需求怎麼拆」「開發任務規劃」時啟動。給 GitLab Issue 網址會自動抓內容。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-14",
      "license": "",
      "notes": []
    },
    {
      "name": "fe-arch",
      "category": "plan",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills",
        "rita-ai-workbench"
      ],
      "desc": "前端專案的檔案與目錄放置規則。",
      "when": "新增元件、API、hook、頁面，或問「這個檔案該放哪」「要不要抽共用」時啟動。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-14",
      "license": "",
      "notes": []
    },
    {
      "name": "react-best-practices",
      "category": "build",
      "manual": false,
      "anyProject": false,
      "locations": [
        "rita-ai-workbench"
      ],
      "desc": "Vercel 整理的 React／Next.js 效能規則，40 多條、分 8 類。",
      "when": "寫、改、審 React 元件、Next.js 頁面、資料抓取或 bundle 時啟動。",
      "translated": true,
      "source": "vercel-labs/agent-skills",
      "sourceUrl": "https://github.com/vercel-labs/agent-skills",
      "installedAt": "2026-09-14",
      "license": "MIT",
      "notes": [
        "SKILL.md 裡的 name 是 vercel-react-best-practices"
      ]
    },
    {
      "name": "test-driven-development",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "測試先行：先寫會失敗的測試，再寫實作讓它通過。",
      "when": "開始實作功能或修 bug、還沒寫程式碼之前啟動。",
      "translated": true,
      "source": "obra/superpowers",
      "sourceUrl": "https://github.com/obra/superpowers",
      "installedAt": "2026-09-14",
      "license": "",
      "notes": []
    },
    {
      "name": "systematic-debugging",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "遇到 bug、測試失敗或怪異行為時，先找出根因再動手修。",
      "when": "回報壞掉、測試不過、結果不如預期，準備提出修正之前啟動。內含追根因、縱深防禦、找出污染狀態的測試等方法。",
      "translated": true,
      "source": "obra/superpowers",
      "sourceUrl": "https://github.com/obra/superpowers",
      "installedAt": "2026-09-14",
      "license": "",
      "notes": []
    },
    {
      "name": "fe-code-review",
      "category": "verify",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills",
        "rita-ai-workbench"
      ],
      "desc": "用規格、標準兩軸審查前端變更，串接內建 /code-review。",
      "when": "說 review、「幫我看一下這個 branch」，或想知道改動會影響到哪裡時啟動。會追 diff 以外的呼叫點副作用。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-14",
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
      "installedAt": "2026-09-14",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "verification-before-completion",
      "category": "verify",
      "manual": false,
      "anyProject": false,
      "locations": [
        "rita-ai-workbench"
      ],
      "desc": "說「完成」「修好」「測試通過」之前，先跑驗證指令、看到結果。",
      "when": "準備 commit、開 PR，或要回報完成之前啟動。沒有證據就不算完成。",
      "translated": true,
      "source": "obra/superpowers",
      "sourceUrl": "https://github.com/obra/superpowers",
      "installedAt": "2026-09-14",
      "license": "",
      "notes": []
    },
    {
      "name": "fe-mr-generator",
      "category": "mr",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills",
        "rita-ai-workbench"
      ],
      "desc": "產生 Merge Request 的標題與描述。",
      "when": "說「幫我產 MR 描述」、整理 branch 變更，或開發完成要推 MR 時啟動。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-14",
      "license": "",
      "notes": []
    },
    {
      "name": "fe-mr-review",
      "category": "mr",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills",
        "rita-ai-workbench"
      ],
      "desc": "AI 先審 GitLab MR，列出要人工確認的項目；也能分析並回覆 review comment。",
      "when": "被指派審 MR，或 MR 上有 review 建議要處理時啟動。",
      "translated": true,
      "source": "jackyu/claude-skills",
      "sourceUrl": "https://github.com/jackyu/claude-skills",
      "installedAt": "2026-09-14",
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
      "installedAt": "2026-09-14",
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
      "installedAt": "2026-09-14",
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
      "installedAt": "2026-09-14",
      "license": "",
      "notes": []
    },
    {
      "name": "i-have-adhd:i-have-adhd",
      "category": "chat",
      "manual": true,
      "anyProject": true,
      "locations": [
        "外掛 i-have-adhd"
      ],
      "desc": "把回覆改成 ADHD 友善的形狀：先給下一步、多步驟編號、每輪重述進度。",
      "when": "打指令後整個 session 持續生效，說「stop adhd mode」關閉。外掛另附 always-on 開關。",
      "translated": true,
      "source": "ayghri/i-have-adhd",
      "sourceUrl": "https://github.com/ayghri/i-have-adhd",
      "installedAt": "2026-09-14",
      "version": "0.3.0",
      "license": "MIT",
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
      "id": "new",
      "title": "新安裝・待分類",
      "sub": "同步時新發現、deck.json 還沒幫它分類的 skill。說明直接取自 SKILL.md 原文。"
    }
  ]
};
