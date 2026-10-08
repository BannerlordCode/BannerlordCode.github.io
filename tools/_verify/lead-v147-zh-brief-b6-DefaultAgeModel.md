# brief — b6 / DefaultAgeModel（**更正后形态**：事实类留 / 检查类移）

## 任务
写**一个**页面文件：`content/v1.4.7/zh/api/campaign-ext/DefaultAgeModel.md`
源码（只读）：`bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`（285 行）

## 事实类（Lead 已测量，你无法推导 —— 必须照用，不要自行推导/核实）
1. **锚表行号**：`tools/_verify/b6/DefaultAgeModel.sig.txt`（22 个锚点行）。**表内的行号已测量过，直接用**；表外的行号若需要，先 `awk 'NR==<N>' <源码>` 核实并把原文贴回；**不在表里就省略那一行**。
2. **链接白名单**（以下目标**已逐条实测存在**，只准从这里选，不要新增）：
   `../AgeModel` · `../DefaultPartySizeLimitModel` · `../DefaultPartyTrainingModel` · `../DefaultVolunteerModel` · `../MBObjectBase` · `../MBObjectManager` ·
   `../../campaign/Campaign` · `../../campaign/Hero` · `../../campaign/CharacterObject` · `../../campaign/Clan` · `../../campaign/CampaignGameStarter` ·
   `../../core/Module` · `../../core-extra/Game` · `../../localization/TextObject`
3. **链接解析基准**：`../X` 以【页面的 URL 目录】为基准 = 页文件路径去掉 `.md`。
   例：`.../campaign-ext/DefaultAgeModel/` ⇒ `../AgeModel` → `campaign-ext/AgeModel` ✅　`../../campaign/Campaign` → `campaign/Campaign` ✅
   **不要自行推导**；骨架里的链接已按此规则写对，照写。
4. **名字来源**：页内任何类型名/方法名/成员名必须来自**源码或锚表**。**不要相信本 brief 里的任何名字。**
5. **不写未经测量的断言**：不要写「这个类负责 X」这类能力断言；改成**导向式指令**（「写清它定义了哪几类职责」）。

## 检查类（已移出，交给 R2 —— 你不必在写之前知道）
裸引用 · 链接位置 · 引用空行 · 体量 · `.Method(` · 尾斜杠 —— 这些由 R2 的九条判据抓。

## 硬约束的【磁盘可判定后果】
**本轮结束时若 `content/v1.4.7/zh/api/campaign-ext/DefaultAgeModel.md` 不存在，本轮视为未完成** ⇒ 回报「未完成 + 卡点」。
**第一动作必须是 write。**

## 骨架（标题逐字一致）
frontmatter(title/description) + `# DefaultAgeModel` + `**命名空间：**`/`**模块：**`/`**类型：**`/`**基类：**`/`**源文件：**`
+ 七节：`## 概述` `## 心智模型` `## 怎么用` `## 关键成员` `## 真实示例` `## 参见` `## 导航`
+ 导航四行照抄：`../` `../../` `../../../` `../../../architecture/`
`## 参见` 至少含 `../AgeModel`。

## 两条门禁语义（免你误读）
- **判分器/硬门禁是黑盒**：运行它、读输出即可；**不要读它的源码实现**。
- **`## 关键成员` 节内的任何表格都会计入 `members`** ⇒ 该节只放成员行。

## 自检
`node tools/_verify/j13-hard-gate.mjs content/v1.4.7/zh/api/campaign-ext/DefaultAgeModel.md` 必须 `RESULT: PASS — ①②③④⑤⑥⑦⑧⑨ all green`

## 边界
只写这一个文件；不得碰 `_index.md`；不得 git add/commit；不得写别的页。
