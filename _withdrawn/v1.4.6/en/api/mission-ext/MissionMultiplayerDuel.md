---
title: "MissionMultiplayerDuel"
description: "MissionMultiplayerDuel: a public class in TaleWorlds.MountAndBlade, inheriting MissionMultiplayerGameModeBase; 25 exposed members (18 methods, 2 properties, 3 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMultiplayerDuel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerDuel : MissionMultiplayerGameModeBase`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionMultiplayerDuel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs. It is a public class, implementing/inheriting MissionMultiplayerGameModeBase; the inheritance chain is MissionMultiplayerDuel → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 25 public/protected members: 18 methods, 2 properties, 3 fields, 1 events, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerDuel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionMultiplayerDuel → MissionMultiplayerGameModeBase → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 18/25, properties 2/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerDuel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsGameModeHidingAllAgentVisuals` | `public override bool IsGameModeHidingAllAgentVisuals` | property |
| `IsGameModeUsingOpposingTeams` | `public override bool IsGameModeUsingOpposingTeams` | property |
| `OnDuelEnded;` | `public event MissionMultiplayerDuel.OnDuelEndedDelegate OnDuelEnded;` | event |
| `GetMissionType` | `public override MultiplayerGameType GetMissionType()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `CheckIfPlayerCanDespawn` | `public override bool CheckIfPlayerCanDespawn(MissionPeer missionPeer)` | method |
| `OnPlayerDespawn` | `public void OnPlayerDespawn(MissionPeer missionPeer)` | method |
| `DuelRequestReceived` | `public void DuelRequestReceived(MissionPeer requesterPeer, MissionPeer requesteePeer)` | method |
| `DuelRequestAccepted` | `public void DuelRequestAccepted(Agent requesterAgent, Agent requesteeAgent)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `GetDuelAreaIndexIfDuelTeam` | `public int GetDuelAreaIndexIfDuelTeam(Team team)` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `HandleLateNewClientAfterSynchronized` | `protected override void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `HandleEarlyPlayerDisconnect` | `protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `HandlePlayerDisconnect` | `protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `DuelRequestTimeOutInSeconds` | `public const float DuelRequestTimeOutInSeconds` | field |
| `NumberOfDuelAreas` | `public const int NumberOfDuelAreas` | field |
| `DuelEndInSeconds` | `public const float DuelEndInSeconds` | field |
| `OnDuelEndedDelegate` | `public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer, TroopType troopType);` | method |
| `OnDuelEndedDelegate` | `public delegate void OnDuelEndedDelegate(MissionPeer winnerPeer, TroopType troopType)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionMultiplayerGameModeBase](../MissionMultiplayerGameModeBase/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
