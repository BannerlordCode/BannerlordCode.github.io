---
title: "MissionMultiplayerGameModeBaseClient"
description: "MissionMultiplayerGameModeBaseClient: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork, ICameraModeLogic; 27 exposed members (10 methods, 17 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerGameModeBaseClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionMultiplayerGameModeBaseClient : MissionNetwork, ICameraModeLogic`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionMultiplayerGameModeBaseClient lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs. It is a public class (abstract), implementing/inheriting MissionNetwork, ICameraModeLogic; the inheritance chain is MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 27 public/protected members: 10 methods, 17 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerGameModeBaseClient lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is property-led (properties 17/27, methods 10/27), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerGameModeBaseClient.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionLobbyComponent` | `public MissionLobbyComponent MissionLobbyComponent` | property |
| `MissionNetworkComponent` | `public MissionNetworkComponent MissionNetworkComponent` | property |
| `ScoreboardComponent` | `public MissionScoreboardComponent ScoreboardComponent` | property |
| `NotificationsComponent` | `public MultiplayerGameNotificationsComponent NotificationsComponent` | property |
| `WarmupComponent` | `public MultiplayerWarmupComponent WarmupComponent` | property |
| `RoundComponent` | `public IRoundComponent RoundComponent` | property |
| `TimerComponent` | `public MultiplayerTimerComponent TimerComponent` | property |
| `IsGameModeUsingGold` | `public abstract bool IsGameModeUsingGold` | property |
| `IsGameModeTactical` | `public abstract bool IsGameModeTactical` | property |
| `IsGameModeUsingCasualGold` | `public virtual bool IsGameModeUsingCasualGold` | property |
| `IsGameModeUsingRoundCountdown` | `public abstract bool IsGameModeUsingRoundCountdown` | property |
| `IsGameModeUsingAllowCultureChange` | `public virtual bool IsGameModeUsingAllowCultureChange` | property |
| `IsGameModeUsingAllowTroopChange` | `public virtual bool IsGameModeUsingAllowTroopChange` | property |
| `GameType` | `public abstract MultiplayerGameType GameType` | property |
| `GetGoldAmount` | `public abstract int GetGoldAmount();` | method |
| `GetMissionCameraLockMode` | `public virtual SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)` | method |
| `IsRoundInProgress` | `public bool IsRoundInProgress` | property |
| `IsInWarmup` | `public bool IsInWarmup` | property |
| `RemainingTime` | `public float RemainingTime` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `CheckTimer` | `public bool CheckTimer(out int remainingTime, out int remainingWarningTime, bool forceUpdate = false)` | method |
| `GetWarningTimer` | `protected virtual int GetWarningTimer()` | method |
| `OnGoldAmountChangedForRepresentative` | `public abstract void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount);` | method |
| `CanRequestTroopChange` | `public virtual bool CanRequestTroopChange()` | method |
| `CanRequestCultureChange` | `public virtual bool CanRequestCultureChange()` | method |
| `IsClassAvailable` | `public bool IsClassAvailable(MultiplayerClassDivisions.MPHeroClass heroClass)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [base / interface ICameraModeLogic](../../core-extra/ICameraModeLogic/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
