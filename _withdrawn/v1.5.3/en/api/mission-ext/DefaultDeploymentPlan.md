---
title: "DefaultDeploymentPlan"
description: "Auto-generated class reference for DefaultDeploymentPlan."
---
# DefaultDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDeploymentPlan `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs

## Overview

Auto-generated stub for `DefaultDeploymentPlan`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CreateInitialPlan
`public static DefaultDeploymentPlan CreateInitialPlan(Mission mission,Team team)`

### CreateReinforcementPlan
`public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission,Team team)`

### CreateReinforcementPlanWithSpawnPath
`public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission,Team team,SpawnPathData spawnPathData,float reinforcementOffset)`

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

### MakeDeploymentPlan
`public void MakeDeploymentPlan(FormationSceneSpawnEntry[,] formationSceneSpawnEntries = null)`

### ClearPlan
`public void ClearPlan()`

### ClearAddedTroops
`public void ClearAddedTroops()`

### AddTroops
`public void AddTroops(FormationClass formationClass,int footTroopCount,int mountedTroopCount)`

### GetFormationPlan
`public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass)`

### GetFormationDeploymentFrame
`public bool GetFormationDeploymentFrame(FormationClass fClass,out MatrixFrame frame)`

### GetFirstValidFormationFrame
`public bool GetFirstValidFormationFrame(out MatrixFrame frame,bool checkDimensions)`

### ComputeFormationsCenterFrameAndExtents
`public MatrixFrame ComputeFormationsCenterFrameAndExtents(bool ignoreDimensionlessFormations,out Vec2 halfExtents)`

### IsPlanSuitableForFormations
`public bool IsPlanSuitableForFormations(ValueTuple<int,int>[] troopDataPerFormationClass)`

### UpdateSafetyScore
`public void UpdateSafetyScore()`

### SetSpawnPathOffset
`public void SetSpawnPathOffset(float pathOffset = 0f,float targetOffset = 0f)`

### GetFrameFromFormationSpawnEntity
`public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity,float depthOffset = 0f)`

### GetFormationSpawnWidthAndDepth
`public static ValueTuple<float,float> GetFormationSpawnWidthAndDepth(FormationClass formationNo,int troopCount,bool hasMountedTroops,bool considerCavalryAsInfantry = false)`

## See Also

- [Section index](../)
