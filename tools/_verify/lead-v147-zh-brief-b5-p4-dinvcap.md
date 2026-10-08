# brief — b5 / p4-dinvcap — DefaultInventoryCapacityModel.md
（落盘存档，供机械审计：brief 内不得出现锚表外的类型名/方法名/成员名）

## 任务
写**一个**页面文件：`content/v1.4.7/zh/api/campaign-ext/DefaultInventoryCapacityModel.md`
- 源码（只读）：`bannerlord-1.4.7/TaleWorlds.CampaignSystem/GameComponents/DefaultInventoryCapacityModel.cs`（133 行）
- 行号锚点表（唯一允许出现的名字来源）：`tools/_verify/b5/DefaultInventoryCapacityModel.sig.txt`

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
★ 名字来源：页内任何类型名/方法名/成员名必须来自源码或锚点表。不要相信本 brief 里的任何名字（本 brief 刻意不含成员清单）。

## 自检
`node tools/_verify/j13-hard-gate.mjs <该页>` 必须 `RESULT: PASS — ①②③④⑤⑥⑦⑧⑨ all green`

## 边界
只写这一个文件；不得碰 `_index.md`；不得 git add/commit；不得写别的页。
