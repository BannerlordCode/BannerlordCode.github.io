---
title: "DefaultDeploymentPlan"
description: "DefaultDeploymentPlan 的自动生成类参考。"
---
# DefaultDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDeploymentPlan `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs

## 概述

`DefaultDeploymentPlan` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CreateInitialPlan
`public static DefaultDeploymentPlan CreateInitialPlan(Mission mission,Team team) `

### CreateReinforcementPlan
`public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission,Team team) `

### CreateReinforcementPlanWithSpawnPath
`public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission,Team team,SpawnPathData spawnPathData,float reinforcementOffset) `

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value) `

### MakeDeploymentPlan
`public void MakeDeploymentPlan(FormationSceneSpawnEntry[,] formationSceneSpawnEntries = null) `

### ClearPlan
`public void ClearPlan() `

### ClearAddedTroops
`public void ClearAddedTroops() `

### AddTroops
`public void AddTroops(FormationClass formationClass,int footTroopCount,int mountedTroopCount) `

### GetFormationPlan
`public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass) `

### GetFormationDeploymentFrame
`public bool GetFormationDeploymentFrame(FormationClass fClass,out MatrixFrame frame) `

### GetFirstValidFormationFrame
`public bool GetFirstValidFormationFrame(out MatrixFrame frame,bool checkDimensions) `

### ComputeFormationsCenterFrameAndExtents
`public MatrixFrame ComputeFormationsCenterFrameAndExtents(bool ignoreDimensionlessFormations,out Vec2 halfExtents) `

### IsPlanSuitableForFormations
`public bool IsPlanSuitableForFormations(ValueTuple<int,int>[] troopDataPerFormationClass) `

### UpdateSafetyScore
`public void UpdateSafetyScore() `

### SetSpawnPathOffset
`public void SetSpawnPathOffset(float pathOffset = 0f,float targetOffset = 0f) `

### GetFrameFromFormationSpawnEntity
`public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity,float depthOffset = 0f) `

### GetFormationSpawnWidthAndDepth
`public static ValueTuple<float,float> GetFormationSpawnWidthAndDepth(FormationClass formationNo,int troopCount,bool hasMountedTroops,bool considerCavalryAsInfantry = false) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
