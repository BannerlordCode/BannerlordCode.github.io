---
title: "SpawnComponent"
description: "Auto-generated class reference for SpawnComponent."
---
# SpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnComponent : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/SpawnComponent.cs

## Overview

Auto-generated stub for `SpawnComponent`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AreAgentsSpawning
`public bool AreAgentsSpawning()`

### SetNewSpawnFrameBehavior
`public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior)`

### SetNewSpawningBehavior
`public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior)`

### OnEndMission
`protected override void OnEndMission()`

### SetSiegeSpawningBehavior
`public static void SetSiegeSpawningBehavior()`

### SetFlagDominationSpawningBehavior
`public static void SetFlagDominationSpawningBehavior()`

### SetWarmupSpawningBehavior
`public static void SetWarmupSpawningBehavior()`

### SetSpawningBehaviorForCurrentGameType
`public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType)`

### AfterStart
`public override void AfterStart()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### StartSpawnSession
`protected void StartSpawnSession()`

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(Team team,bool hasMount,bool isInitialSpawn = false)`

### SpawnEquipmentUpdated
`protected void SpawnEquipmentUpdated(MissionPeer lobbyPeer,Equipment equipment)`

### SetEarlyAgentVisualsDespawning
`public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer,bool canDespawnEarly = true)`

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate)`

### AllowEarlyAgentVisualsDespawning
`public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

### GetMaximumReSpawnPeriodForPeer
`public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer)`

### OnClearScene
`public override void OnClearScene()`

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow)`

## See Also

- [Section index](../)
