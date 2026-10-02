---
title: "StealthPatrolPointMissionLogic"
description: "StealthPatrolPointMissionLogic 的自动生成类参考。"
---
# StealthPatrolPointMissionLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox
**Type:** `public class StealthPatrolPointMissionLogic : MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic,IMissionAgentSpawnLogic,IMissionBehavior
**Source:** SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs

## 概述

`StealthPatrolPointMissionLogic` 的自动生成类参考页面。声明来自 `SandBox/Missions/MissionLogics/StealthPatrolPointMissionLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnEndMission
`protected override void OnEndMission() `

### AfterStart
`public override void AfterStart() `

### OnLocationCharacterAgentSpawned
`public void OnLocationCharacterAgentSpawned(LocationCharacterAgentSpawnedMissionEvent locationCharacterAgentSpawnedEvent) `

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent,Agent agent,sbyte agentBoneIndex) `

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent,Agent affectorAgent,AgentState agentState,KillingBlow blow) `

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent,Agent otherAgent) `

### OnCheckpointLoadedEvent
`public void OnCheckpointLoadedEvent(CheckpointLoadedMissionEvent checkpointLoadedMissionEvent) `

### StartSpawner
`public void StartSpawner(BattleSideEnum side) `

### StopSpawner
`public void StopSpawner(BattleSideEnum side) `

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side) `

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side) `

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None) `

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side) `

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops() `

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
