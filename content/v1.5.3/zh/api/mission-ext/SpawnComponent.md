---
title: "SpawnComponent"
description: "SpawnComponent 的自动生成类参考。"
---
# SpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnComponent : MissionLogic `
**Base:** MissionLogic
**Source:** TaleWorlds.MountAndBlade/SpawnComponent.cs

## 概述

`SpawnComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/SpawnComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### AreAgentsSpawning
`public bool AreAgentsSpawning() `

### SetNewSpawnFrameBehavior
`public void SetNewSpawnFrameBehavior(SpawnFrameBehaviorBase spawnFrameBehavior) `

### SetNewSpawningBehavior
`public void SetNewSpawningBehavior(SpawningBehaviorBase spawningBehavior) `

### OnEndMission
`protected override void OnEndMission() `

### SetSiegeSpawningBehavior
`public static void SetSiegeSpawningBehavior() `

### SetFlagDominationSpawningBehavior
`public static void SetFlagDominationSpawningBehavior() `

### SetWarmupSpawningBehavior
`public static void SetWarmupSpawningBehavior() `

### SetSpawningBehaviorForCurrentGameType
`public static void SetSpawningBehaviorForCurrentGameType(MultiplayerGameType currentGameType) `

### AfterStart
`public override void AfterStart() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### StartSpawnSession
`protected void StartSpawnSession() `

### GetSpawnFrame
`public MatrixFrame GetSpawnFrame(Team team,bool hasMount,bool isInitialSpawn = false) `

### SpawnEquipmentUpdated
`protected void SpawnEquipmentUpdated(MissionPeer lobbyPeer,Equipment equipment) `

### SetEarlyAgentVisualsDespawning
`public void SetEarlyAgentVisualsDespawning(MissionPeer missionPeer,bool canDespawnEarly = true) `

### ToggleUpdatingSpawnEquipment
`public void ToggleUpdatingSpawnEquipment(bool canUpdate) `

### AllowEarlyAgentVisualsDespawning
`public bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer) `

### GetMaximumReSpawnPeriodForPeer
`public int GetMaximumReSpawnPeriodForPeer(MissionPeer lobbyPeer) `

### OnClearScene
`public override void OnClearScene() `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
