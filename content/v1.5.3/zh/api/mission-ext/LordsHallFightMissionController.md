---
title: "LordsHallFightMissionController"
description: "LordsHallFightMissionController 的自动生成类参考。"
---
# LordsHallFightMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LordsHallFightMissionController : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs

## 概述

`LordsHallFightMissionController` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnMissionStateFinalized
`public override void OnMissionStateFinalized() `

### OnCreated
`public override void OnCreated() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### StartSpawner
`public void StartSpawner(BattleSideEnum side) `

### StopSpawner
`public void StopSpawner(BattleSideEnum side) `

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side) `

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None) `

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side) `

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops() `

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side) `

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
