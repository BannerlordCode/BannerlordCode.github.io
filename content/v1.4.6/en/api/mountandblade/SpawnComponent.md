---
title: "SpawnComponent"
description: "SpawnComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic; 23 exposed members (20 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade/SpawnComponent.cs."
---
# SpawnComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnComponent : MissionLogic`
**File:** `TaleWorlds.MountAndBlade/SpawnComponent.cs`

## Overview

SpawnComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SpawnComponent.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is SpawnComponent → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 23 public/protected members: 20 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawnComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain SpawnComponent → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 20/23, properties 2/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SpawnComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpawnFrameBehavior` | `public SpawnFrameBehaviorBase SpawnFrameBehavior` | property |
| `SpawningBehavior` | `public SpawningBehaviorBase SpawningBehavior` | property |
| `SpawnComponent` | `public SpawnComponent(SpawnFrameBehaviorBase spawnFrameBehavior, SpawningBehaviorBase spawningBehavior)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AreAgentsSpawning` | `public bool AreAgentsSpawning()` | method |
| `SetNewSpawnFrameBehavior` | `public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)` | method |
| `SetNewSpawningBehavior` | `public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `SetSiegeSpawningBehavior` | `public static void SetSiegeSpawningBehavior()` | method |
| `SetFlagDominationSpawningBehavior` | `public static void SetFlagDominationSpawningBehavior()` | method |
| `SetWarmupSpawningBehavior` | `public static void SetWarmupSpawningBehavior()` | method |
| `SetSpawningBehaviorForCurrentGameType` | `public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `StartSpawnSession` | `protected void StartSpawnSession()` | method |
| `GetSpawnFrame` | `public MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn = false)` | method |
| `SpawnEquipmentUpdated` | `protected void SpawnEquipmentUpdated(MissionPeer lobbyPeer, Equipment equipment)` | method |
| `SetEarlyAgentVisualsDespawning` | `public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer, bool canDespawnEarly = true)` | method |
| `ToggleUpdatingSpawnEquipment` | `public void ToggleUpdatingSpawnEquipment(bool canUpdate)` | method |
| `AllowEarlyAgentVisualsDespawning` | `public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)` | method |
| `GetMaximumReSpawnPeriodForPeer` | `public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)` | method |
| `OnClearScene` | `public override void OnClearScene()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
