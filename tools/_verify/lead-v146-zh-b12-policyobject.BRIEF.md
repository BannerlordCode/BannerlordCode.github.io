# brief · b12-policyobject

页面：`content/v1.4.6/zh/api/campaign/PolicyObject.md`（新建）
源文件：`TaleWorlds.CampaignSystem/PolicyObject.cs`（83 行）
锚表：`tools/_verify/_tmp/anchors/b12-policyobject.txt`（12 锚点，只有这一段）
**锚表完备性已预检**：`anchor-completeness.mjs` → 锚表 12 / 独立清单 12 / gap 0 ✅

```
**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class PolicyObject : PropertyObject`
**Source:** `TaleWorlds.CampaignSystem/PolicyObject.cs`
```

骨架（H2 逐字）：
```
---
title: "PolicyObject"
description: "<1–2 句中文>"
---
# PolicyObject

**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class PolicyObject : PropertyObject`
**Source:** `TaleWorlds.CampaignSystem/PolicyObject.cs`

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
1. 行号**只能**取自锚表；表外不写；锚表没有的成员 ⇒ 不写那一行。12 个不必全用。
2. **不写未经测量的断言** —— 名字只能来自锚表或源码实测；能力描述（「它负责 X」）必须实测才能写，否则改成指令式。
3. 源码与 brief 冲突 ⇒ **以源码为准**并在回报里指出。
4. 「关键成员」表四列 `| 成员 | 签名 | 作用 | 行号 |`，每行第 4 列一条锚表行号。
   **门禁语义**：`## 关键成员` 段内**任何表格**都计入 `members`；加辅助表也要配引用。

**★ 跨文件引用通道（boss 裁定 (A)）**
散文需要别的文件的事实时**可以引用**，但：用**同一套只读工具**为该文件生成锚表 + **该文件 basename 必须全树唯一**（`find … -name <File>.cs | wc -l` 必须 = 1；不唯一 ⇒ 写成不给行号的散文）+ 引用写全 `文件.cs:N` + **在回报里列出新增了哪些文件的锚表**。
生成命令：
```bash
cd C:/WorkSpace/Bannerlord/BannerlordCode.github.io
node tools/_verify/make-anchor-table.mjs C:/WorkSpace/Bannerlord/bannerlord-1.4.6 <相对路径.cs>
```

**★ 自检：集合等式（必做）**
回报里给出「页面引用行号集合」与「锚表行号集合」，判定 **页面集合 ⊆ 锚表集合**（跨文件引用另列，同样 ⊆ 其文件锚表集合）。**集合等式是完备的，抽查不是。**

**链接解析基准（不可推导）**：叶子页 route = 它自己的目录 `…/api/<桶>/<页名>/`
| 目标 | 写法 |
| --- | --- |
| 同桶兄弟页 | `../X` |
| 父索引 | `../_index` |
| 跨桶 | `../../<桶>/<X>` |
叶子目标不带尾斜杠。跨桶写一个 `../` 会解析到不存在的路径。

**链接白名单（已逐条实测存在）**
`../Kingdom` `../Clan` `../Hero` `../Settlement` `../Campaign` `../CampaignEvents` `../CampaignBehaviorBase` `../PerkObject` `../ExplainedNumber` `../_index` `../../core-extra/PropertyObject` `../../core-extra/Game` `../../campaign-ext/MBObjectBase`

**内容提示（指令式）**：读源码后自己定成员。写清 ① 它代表什么、在「定义 / 实例」关系里处于哪一侧、以及它派生的那个基类给了它什么；② 一条政策由哪些要素组成（影响哪些数值、加成方式、归属关系等）—— 按源码实际字段写；③ 坑：政策在游戏里怎么被启用/停用，mod 想加自己的政策时哪条路可行、哪些字段改了不会生效。

**硬约束**：本轮结束时若 `content/v1.4.6/zh/api/campaign/PolicyObject.md` 不存在 ⇒ 本轮视为未完成，直接回报「未完成 + 卡点」。
**边界**：第一个动作必须是创建文件；不动 `_index.md`；不 `git add`/`commit`；不改 `tools/**`。
