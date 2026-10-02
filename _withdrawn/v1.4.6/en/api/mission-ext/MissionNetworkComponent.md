---
title: "MissionNetworkComponent"
description: "MissionNetworkComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 16 exposed members (14 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionNetworkComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionNetworkComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class MissionNetworkComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionNetworkComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionNetworkComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionNetworkComponent.cs. It is a public class (sealed), implementing/inheriting MissionNetwork; the inheritance chain is MissionNetworkComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 16 public/protected members: 14 methods, 2 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionNetworkComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MissionNetworkComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 14/16, properties 0/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionNetworkComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnMyClientSynchronized;` | `public event Action OnMyClientSynchronized;` | event |
| `Action` | `public event Action<NetworkCommunicator>OnClientSynchronizedEvent;` | event |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnPlayerDisconnectedFromServer` | `public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` | method |
| `HandleEarlyNewClientAfterLoadingFinished` | `protected override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleLateNewClientAfterLoadingFinished` | `protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleEarlyPlayerDisconnect` | `protected override void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `HandlePlayerDisconnect` | `protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | method |
| `OnAddTeam` | `public override void OnAddTeam(Team team)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnPeerSelectedTeam` | `public void OnPeerSelectedTeam(MissionPeer missionPeer)` | method |
| `OnClientSynchronized` | `public void OnClientSynchronized(NetworkCommunicator networkPeer)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
