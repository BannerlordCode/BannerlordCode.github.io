---
title: "MissionLobbyComponent"
description: "MissionLobbyComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 44 exposed members (33 methods, 4 properties, 1 fields). Source: TaleWorlds.MountAndBlade/MissionLobbyComponent.cs."
---
# MissionLobbyComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionLobbyComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyComponent.cs`

## Overview

MissionLobbyComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionLobbyComponent.cs. It is a public class (abstract), implementing/inheriting MissionNetwork; the inheritance chain is MissionLobbyComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 44 public/protected members: 33 methods, 4 properties, 1 fields, 5 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionLobbyComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionLobbyComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 33/44, properties 4/44), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionLobbyComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPostMatchEnded;` | `public event Action OnPostMatchEnded;` | event |
| `OnCultureSelectionRequested;` | `public event Action OnCultureSelectionRequested;` | event |
| `bool>OnAdminMessageRequested;` | `public event Action<string, bool>OnAdminMessageRequested;` | event |
| `OnClassRestrictionChanged;` | `public event Action OnClassRestrictionChanged;` | event |
| `IsInWarmup` | `public bool IsInWarmup` | property |
| `AddLobbyComponentType` | `public static void AddLobbyComponentType(Type type, LobbyMissionType missionType, bool isSeverComponent)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnUdpNetworkHandlerClose` | `protected override void OnUdpNetworkHandlerClose()` | method |
| `CreateBehavior` | `public static MissionLobbyComponent CreateBehavior()` | method |
| `QuitMission` | `public virtual void QuitMission()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnUdpNetworkHandlerTick` | `protected override void OnUdpNetworkHandlerTick()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `IsClassAvailable` | `public bool IsClassAvailable(FormationClass formationClass)` | method |
| `ChangeClassRestriction` | `public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool value)` | method |
| `HandleNewClientConnect` | `protected override void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)` | method |
| `HandleLateNewClientAfterLoadingFinished` | `protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `DespawnPlayer` | `public void DespawnPlayer(MissionPeer missionPeer)` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnPlayerKills` | `protected virtual void OnPlayerKills(MissionPeer killerPeer, Agent killedAgent, MissionPeer assistorPeer)` | method |
| `OnPlayerDies` | `protected virtual void OnPlayerDies(MissionPeer peer, MissionPeer affectorPeer, MissionPeer assistorPeer)` | method |
| `OnBotKills` | `protected virtual void OnBotKills(Agent botAgent, Agent killedAgent)` | method |
| `OnBotDies` | `protected virtual void OnBotDies(Agent botAgent, MissionPeer affectorPeer, MissionPeer assistorPeer)` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `GetSpawnPeriodDurationForPeer` | `public static int GetSpawnPeriodDurationForPeer(MissionPeer peer)` | method |
| `SetStateEndingAsServer` | `public virtual void SetStateEndingAsServer()` | method |
| `EndGameAsServer` | `protected virtual void EndGameAsServer()` | method |
| `RequestCultureSelection` | `public void RequestCultureSelection()` | method |
| `RequestAdminMessage` | `public void RequestAdminMessage(string message, bool isBroadcast)` | method |
| `RequestTroopSelection` | `public void RequestTroopSelection()` | method |
| `OnCultureSelected` | `public void OnCultureSelected(BasicCultureObject culture)` | method |
| `MissionType` | `public MultiplayerGameType MissionType` | property |
| `CurrentMultiplayerState` | `public MissionLobbyComponent.MultiplayerGameState CurrentMultiplayerState` | property |
| `Action` | `public event Action<MissionLobbyComponent.MultiplayerGameState>CurrentMultiplayerStateChanged;` | event |
| `GetRandomFaceSeedForCharacter` | `public int GetRandomFaceSeedForCharacter(BasicCharacterObject character, int addition = 0)` | method |
| `MPHostChangeParam` | `public static string MPHostChangeParam(List<string>strings)` | method |
| `PostMatchWaitDuration` | `public static readonly float PostMatchWaitDuration` | field |
| `MultiplayerGameState` | `public enum MultiplayerGameState` | property |
| `MultiplayerGameState` | `public enum MultiplayerGameState` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionNetwork](../MissionNetwork)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
