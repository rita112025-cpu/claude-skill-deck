// 由 sync-skills.mjs 產生，不要手動修改。
window.SKILL_DECK = {
  "generatedAt": "2026-10-26",
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
      "name": "developing-with-streamlit",
      "category": "build",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "所有 Streamlit 工作：建立、修改、除錯、美化、主題、效能與部署，也含自訂元件；依已安裝版本載入對應文件。",
      "when": "只要碰到 Streamlit、st.、app.py、快取、fragment、st.components 時啟動。",
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
      "name": "gen-image",
      "category": "ai",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 gen_comfy.py（本機 ComfyUI、SDXL）從文字提示產生圖片。",
      "when": "說「用 ComfyUI 生成…」「畫一張…」時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "hf-cli",
      "category": "ai",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Hugging Face Hub 指令列 hf：下載、上傳與管理模型、資料集、Space、bucket、repo、論文、jobs 等。",
      "when": "提到 hf、huggingface，或要處理 Hugging Face 登入、快取、上傳下載時啟動。",
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
      "name": "diagram-design",
      "category": "writing",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "做品牌風格的圖表：架構圖、流程圖、時序圖、ER、時間軸、泳道、甘特、桑基、圖表等，輸出 HTML／SVG／PNG。",
      "when": "要畫架構圖、流程圖或各類資訊圖表時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "MIT",
      "notes": []
    },
    {
      "name": "hyperframes",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 HyperFrames（HTML 轉影片）製作、編輯、動畫與渲染任何影片的入口：發表影片、說明片、音樂影片、圖表、字卡、字幕。",
      "when": "要做、改或渲染 HyperFrames 影片時，最先讀這個。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "hyperframes-cli",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "HyperFrames 指令列工具用法：建立專案、檢查、預覽、剪時間軸、本機或雲端渲染、發佈，以及建置或渲染失敗時的排除。",
      "when": "要跑 hyperframes 指令，或建置、渲染出錯時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "hyperframes-registry",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "約 450 個現成的 HyperFrames 區塊與元件（轉場、疊圖、標題、動態文字、字幕、圖表、地圖、3D、運鏡），安裝後可直接編輯。",
      "when": "要做 CRT、glitch、底片顆粒、圖表等具名效果前先查這裡，不要從頭手刻；也用於 hyperframes add 與目錄。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "media-use",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "為 HyperFrames 影片取得或製作素材：音樂、音效、圖片、圖示、標誌、旁白、虛擬人物、轉錄、去背、調色，並混音。",
      "when": "影片需要配樂、旁白、圖片，或畫面偏暗偏灰、想做風格化時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "figma",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把 Figma 帶進 HyperFrames 影片：輸出素材、品牌 token、元件，並把畫格重建成動態。",
      "when": "貼上 figma.com 連結，或要用某個 Figma 設計、畫格、標誌、品牌做影片時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "slideshow",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 HyperFrames 做可現場簡報的投影片：分段顯示、分支熱點、講者模式與備忘稿，由 hyperframes present 提供。",
      "when": "要的是簡報而不是渲染成影片，或想把現有網頁改成簡報時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-to-hyperframes",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把既有影片程式碼或素材移到 HyperFrames，並逐格比對原片驗證；以 Remotion 為主，也支援 Motion Canvas、Lottie、Three.js、p5.js 等。",
      "when": "要移植、轉換或重用用其他工具做的影片時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "blender-explainer-video",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 HyperFrames 做 Blender（或其他軟體）的旁白教學短片：分鏡、HTML 場景、中文旁白、燒入字幕與背景音樂，輸出 MP4。",
      "when": "要為某個軟體做教學、介紹或操作影片，並用 HyperFrames 渲染時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "video-shotcraft",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用鏡頭配方卡與已驗收模板，做電影感產品影片：Remotion、真實頁面截圖、2.5D 運鏡、節奏卡點與聲音設計。",
      "when": "要把前端專案或網頁做成產品宣傳片，或點名 Ink Press 模板、鏡頭卡時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "canopy-part-title",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "HyperFrames 動畫區塊：樹葉掃過畫面並分開，露出標題。1920×1080、12 秒。",
      "when": "要這種葉片揭示標題的片頭時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "code-slice-hero",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "HyperFrames 動畫區塊：拼貼式標題逐格翻轉，在深度場掃過時露出後方標題。1920×1080、8 秒。",
      "when": "要逐格翻轉揭示標題的片頭時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "cuboid-carousel",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "HyperFrames 動畫區塊：一串倒角方塊隨行進波移動，做成內容輪播。1920×1080、約 6.7 秒。",
      "when": "要立體方塊輪播展示多段內容時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "frost-sequence-camera-orbit",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "HyperFrames 動畫區塊：鏡頭環繞冰晶標誌，標誌碎裂後重組為兩段文字再淡出。1920×1080、22.5 秒。",
      "when": "要冰碎裂重組的標誌片頭時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "glass-shard-title",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "HyperFrames 動畫區塊：玻璃碎片穿過霧氣飛入，拼成標題。1920×1080、約 12 秒。",
      "when": "要玻璃碎片拼出標題的片頭時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "orbit-card",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "HyperFrames 動畫區塊：單張功能卡片沿已核可的 Blender 運鏡環繞點陣球體。1920×1080、10 秒。",
      "when": "要卡片環繞球體展示單一功能時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "wireframe-portal-title",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "HyperFrames 動畫區塊：線框傳送門炸開、標題穿出，字母再換成第二句。1920×1080、8 秒。",
      "when": "要線框傳送門換字的片頭時使用。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-best-practices",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Remotion 各項 skill 的總入口，依需求導向對應的子 skill。",
      "when": "做 Remotion 影片，不確定該用哪個子 skill 時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-create",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "建立新的 Remotion 影片專案。",
      "when": "要從零開始一支 Remotion 影片時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-markup",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Remotion 的內容、動畫與特效最佳做法。",
      "when": "寫 Remotion 場景、動畫、特效時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-captions",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Remotion 的字幕：轉錄、顯示與動畫。",
      "when": "要在 Remotion 影片加字幕或做字幕動畫時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-maps",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "Remotion 的地圖動畫知識。",
      "when": "要在 Remotion 影片做地圖動畫時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-multimedia",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "在 Remotion 中用 Mediabunny 處理多媒體。",
      "when": "要在 Remotion 讀寫、轉換音訊或影片檔時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-interactivity",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "規劃 Remotion 的標記結構，讓影片能被互動操作。",
      "when": "要讓 Remotion 內容可互動時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-saas",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "用 Remotion 打造應用程式。",
      "when": "要做以 Remotion 為核心的 SaaS 或應用時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-studio",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "預覽 Remotion 影片（Studio）。",
      "when": "要預覽或調整 Remotion 影片時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-render",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "匯出（渲染）Remotion 影片。",
      "when": "要把 Remotion 影片輸出成檔案時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-docs",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "搜尋 Remotion 官方文件。",
      "when": "查 Remotion 的 API 或用法時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "remotion-upgrade",
      "category": "video",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "升級 Remotion 與相關套件。",
      "when": "要升級 Remotion 版本時啟動。",
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
    },
    {
      "name": "bim-meeting-minutes",
      "category": "kb",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "把 Whisper 逐字稿整理成 BIM／SCADA 會議紀錄（完整查核版與內部傳閱精簡版），含專有名詞修正、轉 PDF、同步到會議紀錄資料夾。",
      "when": "說「整理會議紀錄」「修正逐字稿」「轉 PDF」「精簡成內部傳閱版」時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "meeting-minutes-template",
      "category": "kb",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "從逐字稿產生會議紀錄 docx，一律套用 MINUTES_TEMPLATE 範本的樣式與多層級編號。",
      "when": "說「用逐字稿生成會議紀錄」「套用會議紀錄範本」時啟動。",
      "translated": true,
      "source": "手動放置",
      "sourceUrl": "",
      "installedAt": "",
      "license": "",
      "notes": []
    },
    {
      "name": "xdmrt-pullbox-requirements",
      "category": "kb",
      "manual": false,
      "anyProject": true,
      "locations": [
        "~/.claude/skills"
      ],
      "desc": "汐東捷運 SCADA 拉線箱規範查核：連續彎頭數、導線管尺寸、彎曲半徑、箱體材質與 IP、檢修空間、接地、標示，並可追溯原始 PDF 頁碼。",
      "when": "查核拉線箱或接線盒設置，或要追溯規範出處與證據層級時啟動。",
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
      "id": "video",
      "title": "影片與動畫製作",
      "sub": "用 HyperFrames、Remotion 做影片、簡報與動畫片頭，含素材、工具與現成區塊。"
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
