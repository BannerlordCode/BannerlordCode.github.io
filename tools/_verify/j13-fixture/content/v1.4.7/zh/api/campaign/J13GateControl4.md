---
title: "J13GateControl4"
description: "判据② 的 bullet 格式负向对照：成员用 `- **Name**` 写、5 行，但一条引用都不给。它不是文档页。"
---
# J13GateControl4

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J13GateControl4`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 13 行）

## 概述
这是 `tools/_verify/j13-fixture/` 下的**第 4 个夹具**：成员用 **bullet 形态**（`- **Name**`）而不是表格，且有 5 行成员、**0 条引用**。
它的用途是证明判据②（`checked >= 成员行数`）**真的认 bullet 格式**：旧版 `memberRowCount()` 只数表格行，
对这种页返回 `members=0` ⇒ `checked < 0` 为假 ⇒ 判据②静默不跑、最终仍打印 `RESULT: PASS`。
v1.5.3 整条线都用 bullet 格式，所以那个洞是整条线失效。

## 心智模型
把它想成一份**换了排版的同一份坏目录**：旧尺只认一种排版，于是「没量到」被当成了「通过」。
判据必须在无法判定时 fail closed（exit 2），不得 vacuous PASS。

## 怎么用
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J13GateControl4.md
```
期望：`RESULT: FAIL` 且 exit code = 1，理由是 `checked=0 < members=5`（证明 bullet 被数到了）。

## 关键成员

- **AddToCounts** — 夹具用：故意**不给**任何行号引用。
- **GetTroopCount** — 夹具用：故意**不给**任何行号引用。
- **FindIndexOfTroop** — 夹具用：故意**不给**任何行号引用。
- **RemoveTroop** — 夹具用：故意**不给**任何行号引用。
- **TotalManCount** — 夹具用：故意**不给**任何行号引用。

## 真实示例
```csharp
// 夹具不是真实示例；这 4 行只是为了满足「有 csharp 块」这个形态
int bulletA = 1;
int bulletB = bulletA + 1;
int bulletC = bulletB + 1;
int bulletD = bulletC + 1;
```

## 参见
- [TroopRoster](../TroopRoster)
- [PartyBase](../PartyBase)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
