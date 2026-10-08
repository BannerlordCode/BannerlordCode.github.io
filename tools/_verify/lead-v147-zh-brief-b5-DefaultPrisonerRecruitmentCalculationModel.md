# brief — b5 / DefaultPrisonerRecruitmentCalculationModel
（落盘存档，供机械审计：brief 内不得出现锚表外的类型名/方法名/成员名）

## 任务
写**一个**页面文件：`content/v1.4.7/zh/api/campaign-ext/DefaultPrisonerRecruitmentCalculationModel.md`
- 源码（只读）：`bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonerRecruitmentCalculationModel.cs`
- 行号锚点表（**唯一允许出现的名字来源**）：`tools/_verify/b5/DefaultPrisonerRecruitmentCalculationModel.sig.txt`

## 硬约束的【可验证后果】
**本轮结束时若 `content/v1.4.7/zh/api/campaign-ext/DefaultPrisonerRecruitmentCalculationModel.md` 不存在，则本轮视为未完成 —— 直接回报「未完成」并说明卡点。**
⇒ 你可以说服自己「先核实更务实」，但你无法说服磁盘。**第一动作必须是 write。**

## 行号核实的【范围】（重要，防无谓核实）
- 锚表内的行号**已被命令测量过**，**直接用**，不要再 `awk` 核实。
- `awk` 核实**只对锚表之外**的行才需要（方法体内语句、锚表未覆盖的 private 成员）。
- 若某行号**不在表里**，就**省略那一行**，而不是去核实它。

## 链接解析基准（必读）
`../X` 的基准是【页面的 URL 目录】= 页文件路径去掉 `.md`。骨架里的链接已按此规则写对，照写，不要"修正"。
白名单目标已逐条实测存在，不需要核实；链接是否解析不是验收项（那是 R2 的 J5R）。

## 骨架（标题逐字一致）
frontmatter(title/description) + `# 标题` + `**命名空间：**`/`**模块：**`/`**类型：**`/`**基类：**`/`**源文件：**`
+ 七节：`## 概述` `## 心智模型` `## 怎么用` `## 关键成员` `## 真实示例` `## 参见` `## 导航`
+ 导航块四行：`../` `../../` `../../../` `../../../architecture/`

## 硬规则
① 引用写全带文件名，禁止裸 `:N`；② 不得指向空行/纯注释/纯括号/`case` 行；
③ markdown 链接只在 `## 参见` 与 `## 导航`；④ 示例至少一次真实 `.Method(` 调用（`new X(...)` 不算）；
⑤ 解释性 private 成员应进表。
★ 名字来源：页内任何类型名/方法名/成员名必须来自源码或锚点表。不要相信本 brief 里的任何名字。

## 自检
`node tools/_verify/j13-hard-gate.mjs <该页>` 必须 `RESULT: PASS — ①②③④⑤⑥⑦⑧⑨ all green`

## 边界
只写这一个文件；不得碰 `_index.md`；不得 git add/commit；不得写别的页。
