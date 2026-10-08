# brief · b11-herodev

页面：`content/v1.4.6/zh/api/campaign/HeroDeveloper.md`（新建）
源文件：`TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`（574 行）
锚表：`tools/_verify/_tmp/anchors/b11-herodev.txt`（54 锚点，只有这一段）

```
**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Type:** `public class HeroDeveloper`
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`
```

骨架（H2 逐字）：
```
---
title: "HeroDeveloper"
description: "<1–2 句中文>"
---
# HeroDeveloper

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Type:** `public class HeroDeveloper`
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`

> 节 schema：本页采用 7 节（按出现顺序）：概述 / 心智模型 / 怎么用 / 关键成员 / 真实示例 / 参见 / 导航

## 概述
## 心智模型
## 怎么用
（含 `### 怎么拿到` / `### 典型用法` / `### 坑`）
## 关键成员
## 真实示例
## 参见
## 导航
```

**内容规则（硬）**
1. 行号**只能**取自锚表；表外不写；锚表没有的成员 ⇒ 不写那一行。54 个不必全用。
2. **不写未经测量的断言** —— 名字（类型/方法/成员）只能来自锚表或源码实测；能力描述（「它负责 X」）必须实测才能写，否则改成指令式（「写清它定义了哪几类入口」）。
3. 源码与 brief 冲突 ⇒ **以源码为准**并在回报里指出。
4. 「关键成员」表四列 `| 成员 | 签名 | 作用 | 行号 |`，每行第 4 列一条锚表行号。
   **门禁语义**：`## 关键成员` 段内**任何表格**都计入 `members`（实测 25+10 ⇒ 35）；加辅助表也要配引用。

**链接解析基准（不可推导，必须照此写）**
叶子页 route = 它自己的目录 `…/api/<桶>/<页名>/`：
| 目标 | 写法 |
| --- | --- |
| 同桶兄弟页 | `../X` |
| 父索引 | `../_index` |
| **跨桶** | `../../<桶>/<X>` |
叶子目标不带尾斜杠。**跨桶写一个 `../` 会解析到不存在的路径**（已发生实例）。

**链接白名单（已逐条实测存在，只用这些）**
`../Hero` `../Clan` `../Kingdom` `../MobileParty` `../PartyBase` `../Settlement` `../Campaign` `../CharacterObject` `../CampaignEvents` `../CampaignBehaviorBase` `../CampaignObjectManager` `../ExplainedNumber` `../CampaignTime` `../_index` `../../campaign-ext/MBObjectBase` `../../campaign-ext/MBObjectManager` `../../core-extra/Game` `../../core-extra/SkillObject`

**内容提示（指令式）**：读源码后自己定成员。写清 ① 它挂在谁身上、代表哪类状态；② 技能与特性的成长路径、有哪些「未分配点数」类可写状态、修改它们的正确入口（哪些直接写、哪些必须走方法）；③ 坑：直接写状态会漏掉什么（事件派发 / 缓存失效 / 同步）。

**硬约束**：本轮结束时若 `content/v1.4.6/zh/api/campaign/HeroDeveloper.md` 不存在 ⇒ 本轮视为未完成，直接回报「未完成 + 卡点」。
**边界**：第一个动作必须是创建文件；不动 `_index.md`；不 `git add`/`commit`；不改 `tools/**`。
