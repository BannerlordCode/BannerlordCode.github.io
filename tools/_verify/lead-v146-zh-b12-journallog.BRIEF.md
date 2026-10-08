# brief · b12-journallog

页面：`content/v1.4.6/zh/api/campaign/JournalLog.md`（新建）
源文件：`TaleWorlds.CampaignSystem/JournalLog.cs`（136 行）
锚表：`tools/_verify/_tmp/anchors/b12-journallog.txt`（19 锚点，只有这一段）

## 锚表完备性读数（派单前置条件，boss #23294 要求写进落盘 brief）
```
  锚表 19 条 / 独立清单 19 条 / 差集 0 条（gap 0 · expected-skip 0）
判定：所有文件 GAP = 0 ✅（anchor set ⊇ declaration set）
```

## 同名异类预检（boss #23332 检测器）
`find <root> -name JournalLog.cs | wc -l` → **1** ⇒ **结构上不可能**发生「同名异类」缺陷（无需该检查）。

```
**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public class JournalLog`
**Source:** `TaleWorlds.CampaignSystem/JournalLog.cs`
```

骨架（H2 逐字）：
```
---
title: "JournalLog"
description: "<1–2 句中文>"
---
# JournalLog

**Namespace:** `TaleWorlds.CampaignSystem`
**Type:** `public class JournalLog`
**Source:** `TaleWorlds.CampaignSystem/JournalLog.cs`

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
1. 行号**只能**取自锚表；表外不写；锚表没有的成员 ⇒ 不写那一行。19 个不必全用。
2. **不写未经测量的断言** —— 名字只能来自锚表或源码实测；能力描述必须实测才能写，否则改成指令式。
3. 源码与 brief 冲突 ⇒ **以源码为准**并在回报里指出。
4. 「关键成员」表四列 `| 成员 | 签名 | 作用 | 行号 |`，每行第 4 列一条锚表行号。
   **门禁语义**：`## 关键成员` 段内**任何表格**都计入 `members`；加辅助表也要配引用。

**跨文件引用通道**：散文需要别的文件的事实时可以引用 —— 用同一套只读工具为该文件生成锚表，且**该文件 basename 必须全树唯一**（`find … -name <File>.cs | wc -l` = 1）；不唯一 ⇒ 写成不给行号的散文。**回报里列出新增的锚表。**
```bash
node tools/_verify/make-anchor-table.mjs C:/WorkSpace/Bannerlord/bannerlord-1.4.6 <相对路径.cs>
```

**集合等式自检（必做）**：回报「页面引用行号集合」与「锚表行号集合」+ 判定 **页面集合 ⊆ 锚表集合**（跨文件另列，同样 ⊆）。

**链接解析基准**：叶子页 route = 它自己的目录 `…/api/<桶>/<页名>/`
| 目标 | 写法 |
| --- | --- |
| 同桶兄弟页 | `../X` |
| 父索引 | `../_index` |
| 跨桶 | `../../<桶>/<X>` |
叶子目标不带尾斜杠。跨桶写一个 `../` 会解析到不存在的路径。

**链接白名单（已逐条实测存在）**
`../Campaign` `../CampaignEvents` `../CampaignBehaviorBase` `../Hero` `../Clan` `../Kingdom` `../Settlement` `../MobileParty` `../QuestManager` `../CampaignObjectManager` `../ExplainedNumber` `../CampaignTime` `../_index` `../../campaign-ext/MBObjectBase` `../../core-extra/Game`

**内容提示（指令式）**：读源码后自己定成员。写清 ① 它在战役系统里扮演什么角色（与「事件/日志」体系的关系），以及它与「条目」那一层的关系（哪些是容器、哪些是条目）；② 一条记录由哪些要素组成、它们怎么被追加与读取 —— 按源码实际字段写；③ 坑：谁在什么时机写它、mod 想加自己的记录时哪条路可行、哪些字段改了不会生效。

**硬约束**：本轮结束时若 `content/v1.4.6/zh/api/campaign/JournalLog.md` 不存在 ⇒ 本轮视为未完成，直接回报「未完成 + 卡点」。
**边界**：第一个动作必须是创建文件；不动 `_index.md`；不 `git add`/`commit`；不改 `tools/**`。
