---
title: "ITournamentManager"
description: "ITournamentManager: a public interface in TaleWorlds.CampaignSystem; 15 exposed members (15 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs."
---
# ITournamentManager

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ITournamentManager`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs`

## Overview

ITournamentManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs. It is a public interface; the inheritance chain is ITournamentManager. It exposes 15 public/protected members: 15 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITournamentManager is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.TournamentGames) the module directory; inheritance chain ITournamentManager. The surface is method-led (methods 15/15, properties 0/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TournamentGames/ITournamentManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddTournament` | `void AddTournament(TournamentGame game);` | method |
| `GetTournamentGame` | `TournamentGame GetTournamentGame(Town town);` | method |
| `OnPlayerJoinMatch` | `void OnPlayerJoinMatch(Type gameType);` | method |
| `OnPlayerJoinTournament` | `void OnPlayerJoinTournament(Type gameType, Settlement settlement);` | method |
| `OnPlayerWatchTournament` | `void OnPlayerWatchTournament(Type gameType, Settlement settlement);` | method |
| `OnPlayerWinMatch` | `void OnPlayerWinMatch(Type gameType);` | method |
| `OnPlayerWinTournament` | `void OnPlayerWinTournament(Type gameType);` | method |
| `InitializeLeaderboardEntry` | `void InitializeLeaderboardEntry(Hero hero, int initialVictories = 0);` | method |
| `AddLeaderboardEntry` | `void AddLeaderboardEntry(Hero hero);` | method |
| `GivePrizeToWinner` | `void GivePrizeToWinner(TournamentGame tournament, Hero winner, bool isPlayerParticipated);` | method |
| `DeleteLeaderboardEntry` | `void DeleteLeaderboardEntry(Hero hero);` | method |
| `int>>GetLeaderboard` | `List<KeyValuePair<Hero, int>>GetLeaderboard();` | method |
| `GetLeaderBoardRank` | `int GetLeaderBoardRank(Hero hero);` | method |
| `GetLeaderBoardLeader` | `Hero GetLeaderBoardLeader();` | method |
| `ResolveTournament` | `void ResolveTournament(TournamentGame tournament, Town town);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FightTournamentGame](../FightTournamentGame)
- [same namespace TournamentCampaignBehavior](../TournamentCampaignBehavior)
- [same namespace TournamentGame](../TournamentGame)
- [same namespace TournamentManager](../TournamentManager)
