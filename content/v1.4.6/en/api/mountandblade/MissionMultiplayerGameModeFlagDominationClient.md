---
title: "MissionMultiplayerGameModeFlagDominationClient"
description: "MissionMultiplayerGameModeFlagDominationClient: a public class in TaleWorlds.MountAndBlade, inheriting MissionMultiplayerGameModeBaseClient, ICommanderInfo; 33 exposed members (20 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs."
---
# MissionMultiplayerGameModeFlagDominationClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerGameModeFlagDominationClient : MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs`

## Overview

MissionMultiplayerGameModeFlagDominationClient lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs. It is a public class, implementing/inheriting MissionMultiplayerGameModeBaseClient, ICommanderInfo, IMissionBehavior; the inheritance chain is MissionMultiplayerGameModeFlagDominationClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 33 public/protected members: 20 methods, 7 properties, 6 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerGameModeFlagDominationClient is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionMultiplayerGameModeFlagDominationClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 20/33, properties 7/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerGameModeFlagDominationClient.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold` | property |
| `IsGameModeTactical` | `public override bool IsGameModeTactical` | property |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown` | property |
| `GameType` | `public override MultiplayerGameType GameType` | property |
| `IsGameModeUsingCasualGold` | `public override bool IsGameModeUsingCasualGold` | property |
| `Action` | `public event Action<NetworkCommunicator>OnBotsControlledChangedEvent;` | event |
| `float>OnTeamPowerChangedEvent;` | `public event Action<BattleSideEnum, float>OnTeamPowerChangedEvent;` | event |
| `float>OnMoraleChangedEvent;` | `public event Action<BattleSideEnum, float>OnMoraleChangedEvent;` | event |
| `OnFlagNumberChangedEvent;` | `public event Action OnFlagNumberChangedEvent;` | event |
| `Team>OnCapturePointOwnerChangedEvent;` | `public event Action<FlagCapturePoint, Team>OnCapturePointOwnerChangedEvent;` | event |
| `Action` | `public event Action<GoldGain>OnGoldGainEvent;` | event |
| `IEnumerable` | `public IEnumerable<FlagCapturePoint>AllCapturePoints` | property |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnPreparationEnded` | `public void OnPreparationEnded()` | method |
| `GetMissionCameraLockMode` | `public override SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `GetWarningTimer` | `protected override int GetWarningTimer()` | method |
| `GetFlagOwner` | `public Team GetFlagOwner(FlagCapturePoint flag)` | method |
| `OnTeamPowerChanged` | `public void OnTeamPowerChanged(BattleSideEnum teamSide, float power)` | method |
| `OnMoraleChanged` | `public void OnMoraleChanged(float morale)` | method |
| `OnGoldAmountChangedForRepresentative` | `public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)` | method |
| `OnNumberOfFlagsChanged` | `public void OnNumberOfFlagsChanged()` | method |
| `OnBotsControlledChanged` | `public void OnBotsControlledChanged(MissionPeer missionPeer, int botAliveCount, int botTotalCount)` | method |
| `OnCapturePointOwnerChanged` | `public void OnCapturePointOwnerChanged(FlagCapturePoint flagCapturePoint, Team ownerTeam)` | method |
| `OnRequestForfeitSpawn` | `public void OnRequestForfeitSpawn()` | method |
| `List` | `public override List<CompassItemUpdateParams>GetCompassTargets()` | method |
| `GetGoldAmount` | `public override int GetGoldAmount()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionMultiplayerGameModeBaseClient](../MissionMultiplayerGameModeBaseClient)
- [base / interface ICommanderInfo](../ICommanderInfo)
- [base / interface IMissionBehavior](../IMissionBehavior)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
