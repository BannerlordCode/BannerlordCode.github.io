---
title: "TournamentMatch"
description: "TournamentMatch：TaleWorlds.CampaignSystem.TournamentGames 的 public 类；公开成员 15 个（方法 7、属性 6、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentMatch

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentMatch`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

TournamentMatch 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs。它是一个 public 类，继承链为 TournamentMatch。public/protected 成员共 15 个：7 方法、6 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TournamentMatch 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.TournamentGames`，继承链 TournamentMatch。成员构成以方法为主（方法 7/15，属性 6/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<TournamentTeam>Teams` | 属性 |
| `IEnumerable` | `public IEnumerable<TournamentParticipant>Participants` | 属性 |
| `State` | `public TournamentMatch.MatchState State` | 属性 |
| `IEnumerable` | `public IEnumerable<TournamentParticipant>Winners` | 属性 |
| `IsReady` | `public bool IsReady` | 属性 |
| `TournamentMatch` | `public TournamentMatch(int participantCount, int numberOfTeamsPerMatch, int numberOfWinnerParticipants, TournamentGame.QualificationMode qualificationMode)` | 构造函数 |
| `End` | `public void End()` | 方法 |
| `Start` | `public void Start()` | 方法 |
| `GetParticipant` | `public TournamentParticipant GetParticipant(int uniqueSeed)` | 方法 |
| `IsParticipantRequired` | `public bool IsParticipantRequired()` | 方法 |
| `AddParticipant` | `public void AddParticipant(TournamentParticipant participant, bool firstTime)` | 方法 |
| `IsPlayerParticipating` | `public bool IsPlayerParticipating()` | 方法 |
| `IsPlayerWinner` | `public bool IsPlayerWinner()` | 方法 |
| `MatchState` | `public enum MatchState` | 属性 |
| `MatchState` | `public enum MatchState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FightTournamentGame](../FightTournamentGame/)
- [同命名空间 ITournamentManager](../ITournamentManager/)
- [同命名空间 TournamentCampaignBehavior](../TournamentCampaignBehavior/)
- [同命名空间 TournamentGame](../TournamentGame/)
