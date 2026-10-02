---
title: "DefaultBattleMissionAgentSpawnLogic"
description: "DefaultBattleMissionAgentSpawnLogic 的自动生成类参考。"
---
# DefaultBattleMissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultBattleMissionAgentSpawnLogic : MissionLogic,IBattleMissionAgentSpawnLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic,IBattleMissionAgentSpawnLogic,IMissionAgentSpawnLogic,IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs

## 概述

`DefaultBattleMissionAgentSpawnLogic` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### AfterStart
`public override void AfterStart() `

### OnMissionTick
`public override void OnMissionTick(float dt) `

### OnEndMission
`protected override void OnEndMission() `

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn,int attackerTotalSpawn,int defenderInitialSpawn,int attackerInitialSpawn,bool spawnDefenders,bool spawnAttackers,in MissionSpawnSettings spawnSettings) `

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side) `

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer) `

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side,bool spawnTroops,bool enforceSpawning = false) `

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side,bool spawnHorses) `

### StartSpawner
`public void StartSpawner(BattleSideEnum side) `

### StopSpawner
`public void StopSpawner(BattleSideEnum side) `

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side) `

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide) `

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops() `

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None) `

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value,bool resetTimers = true) `

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side) `

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side) `

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side) `

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side) `

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side,DefaultBattleMissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged) `

### ComputeDeploymentBaseOffsets
`public static void ComputeDeploymentBaseOffsets(SpawnPathData sideSpawnPathData,float baseDeploymentOffset,out float deployingSideBaseOffset,out float opposingSideBaseOffset) `

### ComputeTeamDeploymentOffsets
`public static void ComputeTeamDeploymentOffsets(SpawnPathData spawnPathData,float deploymentBaseOffset,float interTeamGapOffset,float[] teamOffsetRanges,out float[] teamDeployOffsets) `

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

## 参见

- [本区域目录](../)
- [API 参考](../../)
