---
title: "ITournamentManager"
description: "ITournamentManager：TaleWorlds.CampaignSystem.TournamentGames 的 public 接口；公开成员 15 个（方法 15、属性 0、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ITournamentManager

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ITournamentManager`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

ITournamentManager 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs。它是一个 public 接口，继承链为 ITournamentManager。public/protected 成员共 15 个：15 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ITournamentManager 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.TournamentGames`，继承链 ITournamentManager。成员构成以方法为主（方法 15/15，属性 0/15），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddTournament` | `void AddTournament(TournamentGame game);` | 方法 |
| `GetTournamentGame` | `TournamentGame GetTournamentGame(Town town);` | 方法 |
| `OnPlayerJoinMatch` | `void OnPlayerJoinMatch(Type gameType);` | 方法 |
| `OnPlayerJoinTournament` | `void OnPlayerJoinTournament(Type gameType, Settlement settlement);` | 方法 |
| `OnPlayerWatchTournament` | `void OnPlayerWatchTournament(Type gameType, Settlement settlement);` | 方法 |
| `OnPlayerWinMatch` | `void OnPlayerWinMatch(Type gameType);` | 方法 |
| `OnPlayerWinTournament` | `void OnPlayerWinTournament(Type gameType);` | 方法 |
| `InitializeLeaderboardEntry` | `void InitializeLeaderboardEntry(Hero hero, int initialVictories = 0);` | 方法 |
| `AddLeaderboardEntry` | `void AddLeaderboardEntry(Hero hero);` | 方法 |
| `GivePrizeToWinner` | `void GivePrizeToWinner(TournamentGame tournament, Hero winner, bool isPlayerParticipated);` | 方法 |
| `DeleteLeaderboardEntry` | `void DeleteLeaderboardEntry(Hero hero);` | 方法 |
| `int>>GetLeaderboard` | `List<KeyValuePair<Hero, int>>GetLeaderboard();` | 方法 |
| `GetLeaderBoardRank` | `int GetLeaderBoardRank(Hero hero);` | 方法 |
| `GetLeaderBoardLeader` | `Hero GetLeaderBoardLeader();` | 方法 |
| `ResolveTournament` | `void ResolveTournament(TournamentGame tournament, Town town);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 FightTournamentGame](../FightTournamentGame/)
- [同命名空间 TournamentCampaignBehavior](../TournamentCampaignBehavior/)
- [同命名空间 TournamentGame](../TournamentGame/)
- [同命名空间 TournamentManager](../TournamentManager/)
