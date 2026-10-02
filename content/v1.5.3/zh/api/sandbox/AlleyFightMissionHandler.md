---
title: "AlleyFightMissionHandler"
description: "AlleyFightMissionHandler 的自动生成类参考。"
---
# AlleyFightMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox
**Type:** `public class AlleyFightMissionHandler : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs

## 概述

`AlleyFightMissionHandler` 的自动生成类参考页面。声明来自 `SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### EarlyStart
`public override void EarlyStart() `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### AfterStart
`public override void AfterStart() `

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canLeave) `

### OnRetreatMission
`public override void OnRetreatMission() `

### OnRenderingStarted
`public override void OnRenderingStarted() `

### OnMissionStateFinalized
`public override void OnMissionStateFinalized() `

### StartSpawner
`public void StartSpawner(BattleSideEnum side) `

### StopSpawner
`public void StopSpawner(BattleSideEnum side) `

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side) `

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side) `

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None) `

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side) `

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops() `

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
