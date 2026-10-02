---
title: "MissionMultiplayerSiegeClient"
description: "MissionMultiplayerSiegeClient: a public class in TaleWorlds.MountAndBlade, inheriting MissionMultiplayerGameModeBaseClient, ICommanderInfo; 23 exposed members (12 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerSiegeClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerSiegeClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionMultiplayerSiegeClient lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs. It is a public class, implementing/inheriting MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior; the inheritance chain is MissionMultiplayerSiegeClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 23 public/protected members: 12 methods, 6 properties, 5 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerSiegeClient lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionMultiplayerSiegeClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 12/23, properties 6/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerSiegeClient.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold` | property |
| `IsGameModeTactical` | `public override bool IsGameModeTactical` | property |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown` | property |
| `GameType` | `public override MultiplayerGameType GameType` | property |
| `float>OnMoraleChangedEvent;` | `public event Action<BattleSideEnum, float>OnMoraleChangedEvent;` | event |
| `OnFlagNumberChangedEvent;` | `public event Action OnFlagNumberChangedEvent;` | event |
| `Team>OnCapturePointOwnerChangedEvent;` | `public event Action<FlagCapturePoint, Team>OnCapturePointOwnerChangedEvent;` | event |
| `Action` | `public event Action<GoldGain>OnGoldGainEvent;` | event |
| `Action` | `public event Action<int[]>OnCapturePointRemainingMoraleGainsChangedEvent;` | event |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent` | property |
| `IEnumerable` | `public IEnumerable<FlagCapturePoint>AllCapturePoints` | property |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `GetGoldAmount` | `public override int GetGoldAmount()` | method |
| `OnGoldAmountChangedForRepresentative` | `public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)` | method |
| `OnNumberOfFlagsChanged` | `public void OnNumberOfFlagsChanged()` | method |
| `OnCapturePointOwnerChanged` | `public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)` | method |
| `OnMoraleChanged` | `public void OnMoraleChanged(int attackerMorale, int defenderMorale, int[]capturePointRemainingMoraleGains)` | method |
| `GetFlagOwner` | `public Team GetFlagOwner(FlagCapturePoint flag)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `List` | `public List<ItemObject>GetSiegeMissiles()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionMultiplayerGameModeBaseClient](../MissionMultiplayerGameModeBaseClient/)
- [base / interface ICommanderInfo](../ICommanderInfo/)
- [base / interface IMissionBehavior](../IMissionBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
