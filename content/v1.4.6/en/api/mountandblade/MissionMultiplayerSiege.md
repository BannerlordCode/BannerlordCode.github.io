---
title: "MissionMultiplayerSiege"
description: "MissionMultiplayerSiege: a public class in TaleWorlds.MountAndBlade, inheriting MissionMultiplayerGameModeBase, IAnalyticsFlagInfo; 33 exposed members (18 methods, 3 properties, 8 fields). Source: TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs."
---
# MissionMultiplayerSiege

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerSiege : MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs`

## Overview

MissionMultiplayerSiege lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs. It is a public class, implementing/inheriting MissionMultiplayerGameModeBase, IAnalyticsFlagInfo, IMissionBehavior; the inheritance chain is MissionMultiplayerSiege → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 33 public/protected members: 18 methods, 3 properties, 8 fields, 2 events, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerSiege is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionMultiplayerSiege → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 18/33, properties 3/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerSiege.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals` | property |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams` | property |
| `OnDestructableComponentDestroyed;` | `public event MissionMultiplayerSiege.OnDestructableComponentDestroyedDelegate OnDestructableComponentDestroyed;` | event |
| `OnObjectiveGoldGained;` | `public event MissionMultiplayerSiege.OnObjectiveGoldGainedDelegate OnObjectiveGoldGained;` | event |
| `MBReadOnlyList` | `public MBReadOnlyList<FlagCapturePoint>AllCapturePoints` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `GetMissionType` | `public override MultiplayerGameType GetMissionType()` | method |
| `UseRoundController` | `public override bool UseRoundController()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `CheckForMatchEnd` | `public override bool CheckForMatchEnd()` | method |
| `GetWinnerTeam` | `public override Team GetWinnerTeam()` | method |
| `GetFlagOwnerTeam` | `public Team GetFlagOwnerTeam(FlagCapturePoint flag)` | method |
| `CheckForWarmupEnd` | `public override bool CheckForWarmupEnd()` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `OnPeerChangedTeam` | `public override void OnPeerChangedTeam(NetworkCommunicator peer, Team oldTeam, Team newTeam)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `HandleNewClientAfterLoadingFinished` | `protected override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `NumberOfFlagsInGame` | `public const int NumberOfFlagsInGame` | field |
| `NumberOfFlagsAffectingMoraleInGame` | `public const int NumberOfFlagsAffectingMoraleInGame` | field |
| `MaxMorale` | `public const int MaxMorale` | field |
| `StartingMorale` | `public const int StartingMorale` | field |
| `MaxMoraleGainPerFlag` | `public const int MaxMoraleGainPerFlag` | field |
| `MoraleGainPerFlag` | `public const int MoraleGainPerFlag` | field |
| `GoldBonusOnFlagRemoval` | `public const int GoldBonusOnFlagRemoval` | field |
| `MasterFlagTag` | `public const string MasterFlagTag` | field |
| `OnDestructableComponentDestroyedDelegate` | `public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer[]contributors);` | method |
| `OnObjectiveGoldGainedDelegate` | `public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain);` | method |
| `OnDestructableComponentDestroyedDelegate` | `public delegate void OnDestructableComponentDestroyedDelegate(DestructableComponent destructableComponent, ScriptComponentBehavior attackerScriptComponentBehaviour, MissionPeer[]contributors)` | nested type |
| `OnObjectiveGoldGainedDelegate` | `public delegate void OnObjectiveGoldGainedDelegate(MissionPeer peer, int goldGain)` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionMultiplayerGameModeBase](../MissionMultiplayerGameModeBase)
- [base / interface IAnalyticsFlagInfo](../IAnalyticsFlagInfo)
- [base / interface IMissionBehavior](../IMissionBehavior)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
