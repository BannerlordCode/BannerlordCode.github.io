---
title: "J13GateControl6"
description: "fail-closed 的【负向对照夹具】——有类型元数据但**没有「关键成员」节**。它不是文档页。"
---
# J13GateControl6

**命名空间：** `TaleWorlds.CampaignSystem.Roster`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class J13GateControl6`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Roster/TroopRoster.cs`（声明见第 1 行）

## 概述
这是 `tools/_verify/j13-fixture/` 下的**第二个负向对照夹具**，专门打「空洞 PASS」：
它有「关键成员」表（多行），但**一条 `File.cs:N` 引用都不给**。
判分器不会因此报错：`checked=0 · J13=0 · bare=0`，而 `deep_pass` 仍可能成立
⇒ 一页可以「一个成员都没有证据」却全绿。本夹具用来证明四道硬判据里的第②条（`checked >= 成员行数`）真的会红。

## 心智模型
把它想成一张**没有页码的目录**：条目齐全、看起来很完整，但你无法据此找到任何一页。
引用就是文档的证据链 —— 少了它，`J13=0` 只是「没有东西可检查」，不是「检查通过」。

## 怎么用
```
node tools/_verify/j13-hard-gate.mjs tools/_verify/j13-fixture/content/v1.4.7/zh/api/campaign/J13GateControl6.md
```
期望：`RESULT: FAIL` 且 exit code = 1，理由是 `checked=0 < members=N`。

## 真实示例
```csharp
// 夹具不是真实示例；这 4 行只是为了满足「有 csharp 块」这个形态
int controlA = 1;
int controlB = controlA + 1;
int controlC = controlB + 1;
int controlD = controlC + 1;
```

## 参见
- [TroopRoster](../TroopRoster)
- [PartyBase](../PartyBase)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
