---
title: "DefaultBattleMissionAgentSpawnLogic"
description: "Auto-generated class reference for DefaultBattleMissionAgentSpawnLogic."
---
# DefaultBattleMissionAgentSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultBattleMissionAgentSpawnLogic : MissionLogic,IBattleMissionAgentSpawnLogic,IMissionAgentSpawnLogic,IMissionBehavior `
**Base:** MissionLogic, IBattleMissionAgentSpawnLogic, IMissionAgentSpawnLogic, IMissionBehavior
**Source:** TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs

## Overview

Auto-generated stub for `DefaultBattleMissionAgentSpawnLogic`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

### AfterStart
`public override void AfterStart()`

### OnMissionTick
`public override void OnMissionTick(float dt)`

### OnEndMission
`protected override void OnEndMission()`

### InitWithSinglePhase
`public void InitWithSinglePhase(int defenderTotalSpawn,int attackerTotalSpawn,int defenderInitialSpawn,int attackerInitialSpawn,bool spawnDefenders,bool spawnAttackers,in MissionSpawnSettings spawnSettings)`

### GetAllTroopsForSide
`public IEnumerable<IAgentOriginBase> GetAllTroopsForSide(BattleSideEnum side)`

### SetCustomReinforcementSpawnTimer
`public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)`

### SetSpawnTroops
`public void SetSpawnTroops(BattleSideEnum side,bool spawnTroops,bool enforceSpawning = false)`

### SetSpawnHorses
`public void SetSpawnHorses(BattleSideEnum side,bool spawnHorses)`

### StartSpawner
`public void StartSpawner(BattleSideEnum side)`

### StopSpawner
`public void StopSpawner(BattleSideEnum side)`

### IsSideSpawnEnabled
`public bool IsSideSpawnEnabled(BattleSideEnum side)`

### OnSideDeploymentOver
`public void OnSideDeploymentOver(BattleSideEnum battleSide)`

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

### GetReinforcementInterval
`public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)`

### SetReinforcementsSpawnEnabled
`public void SetReinforcementsSpawnEnabled(bool value,bool resetTimers = true)`

### GetTotalNumberOfTroopsForSide
`public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)`

### GetGeneralCharacterOfSide
`public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)`

### GetSpawnHorses
`public bool GetSpawnHorses(BattleSideEnum side)`

### IsSideDepleted
`public bool IsSideDepleted(BattleSideEnum side)`

### AddPhaseChangeAction
`public void AddPhaseChangeAction(BattleSideEnum side,DefaultBattleMissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)`

### ComputeDeploymentBaseOffsets
`public static void ComputeDeploymentBaseOffsets(SpawnPathData sideSpawnPathData,float baseDeploymentOffset,out float deployingSideBaseOffset,out float opposingSideBaseOffset)`

### ComputeTeamDeploymentOffsets
`public static void ComputeTeamDeploymentOffsets(SpawnPathData spawnPathData,float deploymentBaseOffset,float interTeamGapOffset,float[] teamOffsetRanges,out float[] teamDeployOffsets)`

### OnPhaseChangedDelegate
`public delegate void OnPhaseChangedDelegate()`

## See Also

- [Section index](../)
