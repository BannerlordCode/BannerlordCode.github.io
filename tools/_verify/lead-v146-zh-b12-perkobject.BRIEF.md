# brief · b12-perkobject

页面：`content/v1.4.6/zh/api/campaign/PerkObject.md`（新建）
源文件：`TaleWorlds.CampaignSystem/CharacterDevelopment/PerkObject.cs`（161 行）
锚表：`tools/_verify/_tmp/anchors/b12-perkobject.txt`（20 锚点，只有这一段）

```
**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Type:** `public sealed class PerkObject : PropertyObject`
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/PerkObject.cs`
```

骨架（H2 逐字）：
```
---
title: "PerkObject"
description: "<1–2 句中文>"
---
# PerkObject

**Namespace:** `TaleWorlds.CampaignSystem.CharacterDevelopment`
**Type:** `public sealed class PerkObject : PropertyObject`
**Source:** `TaleWorlds.CampaignSystem/CharacterDevelopment/PerkObject.cs`

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
1. 行号**只能**取自锚表；表外不写；锚表没有的成员 ⇒ 不写那一行。20 个不必全用。
2. **不写未经测量的断言** —— 名字（类型/方法/成员）只能来自锚表或源码实测；能力描述（「它负责 X」）必须实测才能写，否则改成指令式。
3. 源码与 brief 冲突 ⇒ **以源码为准**并在回报里指出。
4. 「关键成员」表四列 `| 成员 | 签名 | 作用 | 行号 |`，每行第 4 列一条锚表行号。
   **门禁语义**：`## 关键成员` 段内**任何表格**都计入 `members`；加辅助表也要配引用。

**★ 跨文件引用通道（本批新规则，boss 裁定 (A)）**
散文中若需要**别的文件**的事实，**可以引用它**，但必须：
- 用**同一套只读工具**为该文件生成锚表：
  ```bash
  cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
  node tools/_verify/make-anchor-table.mjs C:/WorkSpace/Bannerlord/bannerlord-1.4.6 <相对路径.cs>
  ```
- **被引用文件的 basename 必须全树唯一**（先查：`find C:/WorkSpace/Bannerlord/bannerlord-1.4.6 -name <File>.cs | wc -l` 必须 = 1）。
  **若不唯一 ⇒ 该事实改为表外散文，不给行号。**（原因：判分器对重名 basename 会 fail-closed。）
- 引用写全 `文件.cs:N`，行号在该文件行数范围内。
- **在回报里逐条列出你为此新增了哪些文件的锚表。**
（已知可用：`TaleWorlds.Core/SkillObject.cs` dup=1 · `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs` dup=1）

**★ 自检：集合等式（本批新标准，必做）**
回报时必须给出：
```
页面引用行号集合 = <排序后的行号列表>
锚表行号集合     = <排序后的行号列表>
判定：页面集合 ⊆ 锚表集合   （跨文件引用另列，同样要求 ⊆ 其文件的锚表集合）
```
**集合等式是完备的，抽查不是。**

**链接解析基准（不可推导）**：叶子页 route = 它自己的目录 `…/api/<桶>/<页名>/`
| 目标 | 写法 |
| --- | --- |
| 同桶兄弟页 | `../X` |
| 父索引 | `../_index` |
| 跨桶 | `../../<桶>/<X>` |
叶子目标不带尾斜杠。跨桶写一个 `../` 会解析到不存在的路径。

**链接白名单（已逐条实测存在）**
`../Hero` `../Clan` `../Kingdom` `../CharacterObject` `../Campaign` `../CampaignEvents` `../CampaignBehaviorBase` `../ExplainedNumber` `../CampaignTime` `../HeroDeveloper` `../_index` `../../core-extra/SkillObject` `../../core-extra/PropertyObject` `../../core-extra/Game` `../../campaign-ext/MBObjectBase`

**内容提示（指令式）**：读源码后自己定成员。写清 ① 它代表什么、在「定义 / 实例」关系里处于哪一侧、以及它派生的那个基类给了它什么；② 一个 perk 的定义由哪些要素组成（归属、门槛、效果与其增量方式、替代关系等）—— 按源码实际字段写；③ 坑：想加自己的 perk 时哪条路是可行的、哪些字段改了不会生效。

**硬约束**：本轮结束时若 `content/v1.4.6/zh/api/campaign/PerkObject.md` 不存在 ⇒ 本轮视为未完成，直接回报「未完成 + 卡点」。
**边界**：第一个动作必须是创建文件；不动 `_index.md`；不 `git add`/`commit`；不改 `tools/**`。

## 锚表完备性读数（派单前置条件，boss #23294 要求写进落盘 brief）

```
  锚表 21 条 / 独立清单 21 条 / 差集 0 条（gap 0 · expected-skip 0）
判定：所有文件 GAP = 0 ✅（anchor set ⊇ declaration set）
```
