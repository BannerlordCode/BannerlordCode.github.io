---
title: "TournamentRound"
description: "TournamentRound：TaleWorlds.CampaignSystem.TournamentGames 的 public 类；公开成员 7 个（方法 3、属性 3、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentRound

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentRound`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

TournamentRound 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs。它是一个 public 类，继承链为 TournamentRound。public/protected 成员共 7 个：3 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentRound 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.TournamentGames`，继承链 TournamentRound。成员构成以方法为主（方法 3/7，属性 3/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentMatch[]Matches` | `public TournamentMatch[]Matches` | 属性 |
| `CurrentMatchIndex` | `public int CurrentMatchIndex` | 属性 |
| `CurrentMatch` | `public TournamentMatch CurrentMatch` | 属性 |
| `TournamentRound` | `public TournamentRound(int participantCount, int numberOfMatches, int numberOfTeamsPerMatch, int numberOfWinnerParticipants, TournamentGame.QualificationMode qualificationMode)` | 构造函数 |
| `OnMatchEnded` | `public void OnMatchEnded()` | 方法 |
| `EndMatch` | `public void EndMatch()` | 方法 |
| `AddParticipant` | `public void AddParticipant(TournamentParticipant participant, bool firstTime = false)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FightTournamentGame](../FightTournamentGame/)
- [同命名空间 ITournamentManager](../ITournamentManager/)
- [同命名空间 TournamentCampaignBehavior](../TournamentCampaignBehavior/)
- [同命名空间 TournamentGame](../TournamentGame/)
