---
title: "WhileEnteringSettlementBattleMissionController"
description: "WhileEnteringSettlementBattleMissionController 的自动生成类参考。"
---
# WhileEnteringSettlementBattleMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class WhileEnteringSettlementBattleMissionController : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs

## 概述

`WhileEnteringSettlementBattleMissionController` 的自动生成类参考页面。声明来自 `SandBox/Missions/MissionLogics/WhileEnteringSettlementBattleMissionController.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

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

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side) `

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops() `

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
