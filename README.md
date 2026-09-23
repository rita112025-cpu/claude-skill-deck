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

### 開工前（2）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-issue` | 自動 | 任何專案 | 把 PM 需求 Issue 轉成前端技術 Issue 草稿。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/fe-arch` | 自動 | 任何專案 | 前端專案的檔案與目錄放置規則。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |

### 寫程式時（3）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/vercel-react-best-practices` | 自動 | 任何專案 | Vercel 整理的 React／Next.js 效能規則，40 多條、分 8 類。 | 手動放置 |
| `/superpowers:test-driven-development` | 自動 | 任何專案 | 測試先行：先寫會失敗的測試，再寫實作讓它通過。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:systematic-debugging` | 自動 | 任何專案 | 遇到 bug、測試失敗或怪異行為時，先找出根因再動手修。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |

### 交付前（3）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-code-review` | 自動 | 任何專案 | 用規格、標準兩軸審查前端變更，串接內建 /code-review。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/playwright-skill` | 自動 | 任何專案 | 用 Playwright 自動操作瀏覽器：測網站、截圖、檢查 RWD、登入流程與壞連結。 | [lackeyjb/playwright-skill](https://github.com/lackeyjb/playwright-skill) |
| `/superpowers:verification-before-completion` | 自動 | 任何專案 | 說「完成」「修好」「測試通過」之前，先跑驗證指令、看到結果。 | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |

### MR 與發版（3）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/fe-mr-generator` | 自動 | 任何專案 | 產生 Merge Request 的標題與描述。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/fe-mr-review` | 自動 | 任何專案 | AI 先審 GitLab MR，列出要人工確認的項目；也能分析並回覆 review comment。 | [jackyu/claude-skills](https://github.com/jackyu/claude-skills) |
| `/changelog-generator` | 自動 | 任何專案 | 把 git commit 整理成使用者看得懂的更新說明。 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |

### AI 工具開發（2）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/mcp-builder` | 自動 | 任何專案 | 打造 MCP server 的指南，讓 LLM 透過工具串接外部服務。 | [ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills) |
| `/prompt-engineering` | 自動 | 任何專案 | 寫 prompt 的技巧：優化提示、改善 LLM 輸出、設計可重用的 prompt 範本。 | [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit) |

### 對話設定（1）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/i-have-adhd` | 手動 | 任何專案 | 把回覆改成 ADHD 友善的形狀：先給下一步、多步驟編號、每輪重述進度。 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) |

### 新安裝・待分類（59）

| 指令 | 觸發 | 範圍 | 用途 | 來源 |
|---|---|---|---|---|
| `/ask-matt` | 手動 | 任何專案 | Ask which skill or flow fits your situation. | 手動放置 |
| `/claude-handoff` | 手動 | 任何專案 | Hand the current conversation off to a fresh background agent that picks up the work immediately. | 手動放置 |
| `/code-review` | 自動 | 任何專案 | Review the changes since a fixed point (commit, branch, tag, or merge-base) along two axes: Standards (does the code follow this repo's documented coding standards?) and Spec (does the code match wha… | 手動放置 |
| `/codebase-design` | 自動 | 任何專案 | Shared vocabulary for designing deep modules. | 手動放置 |
| `/deploy-to-vercel` | 自動 | 任何專案 | Deploy applications and websites to Vercel. | 手動放置 |
| `/diagnosing-bugs` | 自動 | 任何專案 | Diagnosis loop for hard bugs and performance regressions. | 手動放置 |
| `/domain-modeling` | 自動 | 任何專案 | Build and sharpen a project's domain model. | 手動放置 |
| `/git-guardrails-claude-code` | 自動 | 任何專案 | Set up Claude Code hooks to block dangerous git commands (push, reset --hard, clean, branch -D, etc.) before they execute. | 手動放置 |
| `/grill-me` | 手動 | 任何專案 | A relentless interview to sharpen a plan or design. | 手動放置 |
| `/grill-with-docs` | 手動 | 任何專案 | A relentless interview to sharpen a plan or design, which also creates docs (ADR's and glossary) as we go. | 手動放置 |
| `/grilling` | 自動 | 任何專案 | Grill the user relentlessly about a plan, decision, or idea. | 手動放置 |
| `/handoff` | 手動 | 任何專案 | Compact the current conversation into a handoff document for another agent to pick up. | 手動放置 |
| `/implement` | 手動 | 任何專案 | Implement a piece of work based on a spec or set of tickets. | 手動放置 |
| `/implement-spec` | 手動 | 任何專案 | Implement a specification in code. | 手動放置 |
| `/improve-codebase-architecture` | 手動 | 任何專案 | Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick. | 手動放置 |
| `/loop-me` | 手動 | 任何專案 | Grill me about specs for the workflows I want to build, within this workspace. | 手動放置 |
| `/migrate-to-shoehorn` | 自動 | 任何專案 | Migrate test files from `as` type assertions to @total-typescript/shoehorn. | 手動放置 |
| `/pdf-extraction` | 自動 | 任何專案 | Extract text from a PDF page-by-page with page numbers preserved, using PyMuPDF with a pypdf fallback. | 手動放置 |
| `/pr` | 自動 | 任何專案 | Use when writing a PR body. | 手動放置 |
| `/prototype` | 自動 | 任何專案 | Build a throwaway prototype to answer a design question. | 手動放置 |
| `/research` | 自動 | 任何專案 | Investigate a question against high-trust primary sources and capture the findings as a Markdown file in the repo. | 手動放置 |
| `/resolving-merge-conflicts` | 自動 | 任何專案 | Use when you need to resolve an in-progress git merge/rebase conflict. | 手動放置 |
| `/retro` | 手動 | 任何專案 | Conduct a retrospective on a coding session. | 手動放置 |
| `/scaffold-exercises` | 自動 | 任何專案 | Create exercise directory structures with sections, problems, solutions, and explainers that pass linting. | 手動放置 |
| `/setup-matt-pocock-skills` | 手動 | 任何專案 | Configure this repo for the engineering skills: set up its issue tracker, triage label vocabulary, and domain doc layout. | 手動放置 |
| `/setup-pre-commit` | 自動 | 任何專案 | Set up Husky pre-commit hooks with lint-staged (Prettier), type checking, and tests in the current repo. | 手動放置 |
| `/setup-ts-deep-modules` | 手動 | 任何專案 | Wire dependency-cruiser into a TypeScript repo so each package is a deep module, with implementation hidden in subfolders and reachable only through its entry-point files. | 手動放置 |
| `/superpowers:brainstorming` | 自動 | 任何專案 | You MUST use this before any creative work - creating features, building components, adding functionality, or modifying behavior. | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:diagnosing-superpowers` | 自動 | 任何專案 | Use when a superpowers session went wrong and your human partner wants to know why — repeated work, ignored plans, stumbles, poor results, a skill that didn't fire, "it took too long", "why is it so … | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:dispatching-parallel-agents` | 自動 | 任何專案 | Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:executing-plans` | 自動 | 任何專案 | Use when executing an implementation plan in the current session as the implementer yourself — your human partner chose inline execution, or no subagent tool is available | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:finishing-a-development-branch` | 自動 | 任何專案 | Use when implementation is complete, all tests pass, and you need to decide how to integrate the work | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:receiving-code-review` | 自動 | 任何專案 | Use when receiving code review feedback, before implementing suggestions, especially if feedback seems unclear or technically questionable - requires technical rigor and verification, not performativ… | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:requesting-code-review` | 自動 | 任何專案 | Use when completing tasks, implementing major features, or before merging to verify work meets requirements | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:subagent-driven-development` | 自動 | 任何專案 | Use when executing implementation plans with independent tasks in the current session | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:using-git-worktrees` | 自動 | 任何專案 | Use when starting feature work that needs isolation from current workspace or before executing implementation plans - ensures an isolated workspace exists via native tools or git worktree fallback | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:using-superpowers` | 自動 | 任何專案 | Use when starting any conversation - establishes how to find and use skills, requiring skill invocation before ANY response including clarifying questions | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:writing-plans` | 自動 | 任何專案 | Use when you have a spec or requirements for a multi-step task, before touching code | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/superpowers:writing-skills` | 自動 | 任何專案 | Use when creating new skills, editing existing skills, or verifying skills work before deployment | [obra/superpowers-marketplace](https://github.com/obra/superpowers-marketplace) |
| `/tdd` | 自動 | 任何專案 | Test-driven development. | 手動放置 |
| `/teach` | 手動 | 任何專案 | Teach the user a new skill or concept, within this workspace. | 手動放置 |
| `/to-questionnaire` | 手動 | 任何專案 | Turn a decision you can't fully answer into a questionnaire for someone else to fill in. | 手動放置 |
| `/to-spec` | 手動 | 任何專案 | Turn the current conversation into a spec and publish it to the project issue tracker: no interview, just synthesis of what you've already discussed. | 手動放置 |
| `/to-tickets` | 手動 | 任何專案 | Break a plan, spec, or the current conversation into a set of tracer-bullet tickets, each declaring its blocking edges, published to the configured tracker (edges as text in one file per ticket local… | 手動放置 |
| `/triage` | 手動 | 任何專案 | Move issues and external PRs through a state machine of triage roles, categorise, verify, grill if needed, and write agent-ready briefs. | 手動放置 |
| `/vercel-cli-with-tokens` | 自動 | 任何專案 | Deploy and manage projects on Vercel using token-based authentication. | 手動放置 |
| `/vercel-composition-patterns` | 自動 | 任何專案 |  | 手動放置 |
| `/vercel-optimize` | 自動 | 任何專案 | Use for Vercel cost and performance optimization on deployed projects, especially Next.js, SvelteKit, Nuxt, and limited Astro apps. | 手動放置 |
| `/vercel-react-native-skills` | 自動 | 任何專案 |  | 手動放置 |
| `/vercel-react-view-transitions` | 自動 | 任何專案 | Guide for implementing smooth, native-feeling animations using React's View Transition API (`<ViewTransition>` component, `addTransitionType`, and CSS view transition pseudo-elements). | 手動放置 |
| `/wait-what` | 手動 | 任何專案 | Stop. | 手動放置 |
| `/wayfinder` | 手動 | 任何專案 | Plan a huge chunk of work (more than one agent session can hold) as a shared map of decision tickets on your issue tracker, and resolve them one at a time until the way to the destination is clear. | 手動放置 |
| `/web-design-guidelines` | 自動 | 任何專案 | Review UI code for Web Interface Guidelines compliance. | 手動放置 |
| `/wizard` | 自動 | 任何專案 | Generate an interactive bash wizard that walks a human through steps only they can perform. | 手動放置 |
| `/writing-beats` | 手動 | 任何專案 | Writing, exploit; assemble raw material into a journey of beats, grounding each term before a beat leans on it. | 手動放置 |
| `/writing-for-agents` | 自動 | 任何專案 | Writing documents for agents. | 手動放置 |
| `/writing-fragments` | 手動 | 任何專案 | Writing, explore: mine raw fragments, no structure yet. | 手動放置 |
| `/writing-guidelines` | 自動 | 任何專案 | Review docs/prose for Writing Guidelines compliance. | 手動放置 |
| `/writing-shape` | 手動 | 任何專案 | Writing, exploit: shape raw material into an article, paragraph by paragraph. | 手動放置 |

<!-- skills:end -->
