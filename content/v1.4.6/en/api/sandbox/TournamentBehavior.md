---
title: "TournamentBehavior"
description: "TournamentBehavior: a public class in SandBox, inheriting MissionLogic, ICameraModeLogic; 36 exposed members (13 methods, 16 properties, 5 fields). Source: SandBox/Tournaments/MissionLogics/TournamentBehavior.cs."
---
# TournamentBehavior

**Namespace:** `SandBox.Tournaments.MissionLogics`
**Module:** `SandBox`
**Type:** `public class TournamentBehavior : MissionLogic, ICameraModeLogic`
**File:** `SandBox/Tournaments/MissionLogics/TournamentBehavior.cs`

## Overview

TournamentBehavior lives in the SandBox module, source file SandBox/Tournaments/MissionLogics/TournamentBehavior.cs. It is a public class, implementing/inheriting MissionLogic, ICameraModeLogic; the inheritance chain is TournamentBehavior → MissionLogic. It exposes 36 public/protected members: 13 methods, 16 properties, 5 fields, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentBehavior is a top-level type in SandBox, namespace differing from (SandBox.Tournaments.MissionLogics) the module directory; inheritance chain TournamentBehavior → MissionLogic. The surface is property-led (properties 16/36, methods 13/36), so it mostly exposes state for reading. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/MissionLogics/TournamentBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentGame` | `public TournamentGame TournamentGame` | property |
| `TournamentRound[]Rounds` | `public TournamentRound[]Rounds` | property |
| `GetMissionCameraLockMode` | `public SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)` | method |
| `IsPlayerEliminated` | `public bool IsPlayerEliminated` | property |
| `CurrentRoundIndex` | `public int CurrentRoundIndex` | property |
| `LastMatch` | `public TournamentMatch LastMatch` | property |
| `CurrentRound` | `public TournamentRound CurrentRound` | property |
| `NextRound` | `public TournamentRound NextRound` | property |
| `CurrentMatch` | `public TournamentMatch CurrentMatch` | property |
| `Winner` | `public TournamentParticipant Winner` | property |
| `IsPlayerParticipating` | `public bool IsPlayerParticipating` | property |
| `Settlement` | `public Settlement Settlement` | property |
| `TournamentBehavior` | `public TournamentBehavior(TournamentGame tournamentGame, Settlement settlement, ITournamentGameBehavior gameBehavior, bool isPlayerParticipating)` | constructor |
| `MBList` | `public MBList<CharacterObject>GetAllPossibleParticipants()` | method |
| `DeleteTournamentSetsExcept` | `public static void DeleteTournamentSetsExcept(GameEntity selectedSetEntity)` | method |
| `DeleteAllTournamentSets` | `public static void DeleteAllTournamentSets()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `StartMatch` | `public void StartMatch()` | method |
| `SkipMatch` | `public void SkipMatch(bool isLeave = false)` | method |
| `EndTournamentViaLeave` | `public void EndTournamentViaLeave()` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)` | method |
| `BetOdd` | `public float BetOdd` | property |
| `MaximumBetInstance` | `public int MaximumBetInstance` | property |
| `BettedDenars` | `public int BettedDenars` | property |
| `OverallExpectedDenars` | `public int OverallExpectedDenars` | property |
| `PlayerDenars` | `public int PlayerDenars` | property |
| `PlaceABet` | `public void PlaceABet(int bet)` | method |
| `GetExpectedDenarsForBet` | `public int GetExpectedDenarsForBet(int bet)` | method |
| `GetMaximumBet` | `public int GetMaximumBet()` | method |
| `TournamentEnd;` | `public event Action TournamentEnd;` | event |
| `RoundCount` | `public const int RoundCount` | field |
| `ParticipantCount` | `public const int ParticipantCount` | field |
| `EndMatchTimerDuration` | `public const float EndMatchTimerDuration` | field |
| `CheerTimerDuration` | `public const float CheerTimerDuration` | field |
| `MaximumOdd` | `public const float MaximumOdd` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TournamentArcheryMissionController](../TournamentArcheryMissionController)
- [same namespace TournamentFightMissionController](../TournamentFightMissionController)
- [same namespace TournamentJoustingMissionController](../TournamentJoustingMissionController)
- [same namespace TownHorseRaceMissionController](../TownHorseRaceMissionController)
