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
      "name": "ask-matt",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Ask which skill or flow fits your situation.",
      "when": "A router over the skills in this repo.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "claude-handoff",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Hand the current conversation off to a fresh background agent that picks up the work immediately.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "code-review",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match wha…",
      "when": "Runs both reviews in parallel sub-agents and reports them side by side. Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to …",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "codebase-design",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Shared vocabulary for designing deep modules.",
      "when": "Use when the user wants to design or improve a module's interface, find deepening opportunities, decide where a seam goes, make code more testable or AI-naviga…",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "deploy-to-vercel",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Deploy applications and websites to Vercel.",
      "when": "Use when the user requests deployment actions like \"deploy my app\", \"deploy and give me the link\", \"push this live\", or \"create a preview deployment\".",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "diagnosing-bugs",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Diagnosis loop for hard bugs and performance regressions.",
      "when": "Use when the user says \"diagnose\"/\"debug this\", or reports something broken/throwing/failing/slow.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "domain-modeling",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Build and sharpen a project's domain model.",
      "when": "Use when discussing codebase terminology, writing or editing a CONTEXT.md, or recording or editing an ADR.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "git-guardrails-claude-code",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D, etc.) before they execute.",
      "when": "Use when user wants to prevent destructive git operations, add git safety hooks, or block git push/reset in Claude Code.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "grill-me",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "A relentless interview to sharpen a plan or design.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "grill-with-docs",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "grilling",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Grill the user relentlessly about a plan, decision, or idea.",
      "when": "Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "handoff",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Compact the current conversation into a handoff document for another agent to pick up.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "implement",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Implement a piece of work based on a spec or set of tickets.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "implement-spec",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Implement a specification in code.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "improve-codebase-architecture",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "loop-me",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Grill me about specs for the workflows I want to build, within this workspace.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "migrate-to-shoehorn",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Migrate test files from `as` type assertions to @total-typescript/shoehorn.",
      "when": "Use when user mentions shoehorn, wants to replace `as` in tests, or needs partial test data.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "pdf-extraction",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Extract text from a PDF page-by-page with page numbers preserved, using PyMuPDF with a pypdf fallback.",
      "when": "Trigger when asked to read, parse, extract text from, summarize, or cross-reference a PDF — especially engineering/SCADA spec sheets checked against Excel or D…",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "pr",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Use when writing a PR body.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "prototype",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Build a throwaway prototype to answer a design question.",
      "when": "Use when the user wants to sanity-check whether a state model or logic feels right, or explore what a UI should look like.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "research",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo.",
      "when": "Use when the user wants a topic researched, docs or API facts gathered, or reading legwork delegated to a background agent.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "resolving-merge-conflicts",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Use when you need to resolve an in-progress git merge/rebase conflict.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "retro",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Conduct a retrospective on a coding session.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "scaffold-exercises",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Create exercise directory structures with sections, problems, solutions, and explainers that pass linting.",
      "when": "Use when user wants to scaffold exercises, create exercise stubs, or set up a new course section.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "setup-matt-pocock-skills",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout.",
      "when": "Run once before first use of the other engineering skills.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "setup-pre-commit",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo.",
      "when": "Use when user wants to add pre-commit hooks, set up Husky, configure lint-staged, or add commit-time formatting/typechecking/testing.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "setup-ts-deep-modules",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files.",
      "when": "User-invoked.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:brainstorming",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior.",
      "when": "Explores user intent, requirements and design before implementation.",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:diagnosing-superpowers",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, \"it took too long\", \"why is it so …",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:dispatching-parallel-agents",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:executing-plans",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:finishing-a-development-branch",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when implementation is complete, all tests pass, and you need to decide how to integrate the work",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:receiving-code-review",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performativ…",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:requesting-code-review",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when completing tasks, implementing major features, or before merging to verify work meets requirements",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:subagent-driven-development",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when executing implementation plans with independent tasks in the current session",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:using-git-worktrees",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:using-superpowers",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:writing-plans",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when you have a spec or requirements for a multi-step task, before touching code",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "superpowers:writing-skills",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "外掛 superpowers"
      ],
      "desc": "Use when creating new skills, editing existing skills, or verifying skills work before deployment",
      "when": "",
      "translated": false,
      "source": "obra/superpowers-marketplace",
      "sourceUrl": "https://github.com/obra/superpowers-marketplace",
      "installedAt": "2026-09-21",
      "version": "6.4.1",
      "license": "",
      "notes": []
    },
    {
      "name": "tdd",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Test-driven development.",
      "when": "Use when the user wants to build features or fix bugs test-first, mentions \"red-green-refactor\", or wants integration tests.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "teach",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Teach the user a new skill or concept, within this workspace.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "to-questionnaire",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Turn a decision you can't fully answer into a questionnaire for someone else to fill in.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "to-spec",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "to-tickets",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker (edges as text in one file per ticket local…",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "triage",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "vercel-cli-with-tokens",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Deploy and manage projects on Vercel using token-based authentication.",
      "when": "Use when working with Vercel CLI using access tokens rather than interactive login — e.g. \"deploy to vercel\", \"set up vercel\", \"add environment variables to ve…",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "vercel-composition-patterns",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "vercel-optimize",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Use for Vercel cost and performance optimization on deployed projects, especially Next.js, SvelteKit, Nuxt, and limited Astro apps.",
      "when": "Collect Vercel metrics, usage, project config, and code scan results first; investigate only metric-backed candidates; produce ranked recommendations grounded …",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "vercel-react-native-skills",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "vercel-react-view-transitions",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Guide for implementing smooth, native-feeling animations using React's View Transition API (`<ViewTransition>` component, `addTransitionType`, and CSS view transition pseudo-elements).",
      "when": "Use this skill whenever the user wants to add page transitions, animate route changes, create shared element animations, animate enter/exit of components, anim…",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "wait-what",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Stop.",
      "when": "That last message did not land: re-pitch it.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "wayfinder",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "web-design-guidelines",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Review UI code for Web Interface Guidelines compliance.",
      "when": "Use when asked to \"review my UI\", \"check accessibility\", \"audit design\", \"review UX\", or \"check my site against best practices\".",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "wizard",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Generate an interactive bash wizard that walks a human through steps only they can perform.",
      "when": "Use when provisioning infrastructure, setting up credentials or CI secrets, walking an unfamiliar third-party dashboard, or running a one-off migration or cuto…",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-beats",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-for-agents",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Writing documents for agents.",
      "when": "Use when creating or editing skills, or modifying AGENTS.md or CLAUDE.md.",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-fragments",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Writing, explore: mine raw fragments, no structure yet.",
      "when": "",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-guidelines",
      "category": "new",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Review docs/prose for Writing Guidelines compliance.",
      "when": "Use when asked to \"review my docs\", \"check writing style\", \"audit prose\", \"review docs voice and tone\", or \"check this page against the writing handbook\".",
      "translated": false,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "writing-shape",
      "category": "new",
      "manual": true,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Writing, exploit: shape raw material into an article, paragraph by paragraph.",
      "when": "",
      "translated": false,
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
      "id": "new",
      "title": "新安裝・待分類",
      "sub": "同步時新發現、deck.json 還沒幫它分類的 skill。說明直接取自 SKILL.md 原文。"
    }
  ]
};
