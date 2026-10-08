---
title: "J13GateControl5"
description: "判据② 的 bullet 格式【正向】对照：成员用 `- **Name**` 写、5 行、5 条真实引用且 J13=0。它不是文档页。"
---
# J13GateControl5

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J13GateControl5`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 13 行）

## 概述
这是 `tools/_verify/j13-fixture/` 下的**第 5 个夹具**，是 `J13GateControl4` 的**正向对照**：
同样是 bullet 形态、同样 5 行成员，但每行都带一条**真实存在**的 `TroopRoster.cs:N` 引用（N 逐字取自 `tools/_verify/sig-b1/TroopRoster.sig.txt`）。
用途：证明「解析真的认 bullet」——如果只做负向对照，解析不认 bullet 也会「看起来通过」（members=0 ⇒ 判据②静默不跑）。
一个没生效的对照，和一个干净的正向对照，输出看起来一模一样，所以两个都要有。

## 心智模型
把 4 与 5 配对看：4 证明**会红**，5 证明**红的原因不是解析失灵**。
只做一个方向的对照，等于没有对照。

## 怎么用
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J13GateControl5.md
```
期望：`RESULT: PASS` 且 exit code = 0，且输出里 `members=5 (tbl=0,bul=5)` —— `bul=5` 就是「bullet 被数到了」的机械证据。

## 关键成员

- **Count**（`TroopRoster.cs:54`）— 夹具用：真实成员行，证明引用可解析。
- **VersionNo**（`TroopRoster.cs:66`）— 夹具用：真实成员行。
- **TotalRegulars**（`TroopRoster.cs:70`）— 夹具用：真实成员行。
- **TotalWoundedRegulars**（`TroopRoster.cs:80`）— 夹具用：真实成员行。
- **TotalWoundedHeroes**（`TroopRoster.cs:90`）— 夹具用：真实成员行。

## 真实示例
```csharp
// 夹具不是真实示例；这 4 行只是为了满足「有 csharp 块」这个形态
int posA = 1;
int posB = posA + 1;
int posC = posB + 1;
int posD = posC + 1;
```

## 参见
- [TroopRoster](../TroopRoster)
- [PartyBase](../PartyBase)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
