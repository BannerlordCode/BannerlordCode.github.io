---
title: "DefaultTeamDeploymentPlan"
description: "DefaultTeamDeploymentPlan 的自动生成类参考。"
---
# DefaultTeamDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultTeamDeploymentPlan : ITeamDeploymentPlan `
**Base:** ITeamDeploymentPlan
**Source:** TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs

## 概述

`DefaultTeamDeploymentPlan` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value) `

### MakeDeploymentPlan
`public void MakeDeploymentPlan(float spawnPathOffset = 0f,float targetOffset = 0f,FormationSceneSpawnEntry[,] formationSceneSpawnEntries = null,bool isReinforcement = false) `

### UpdateReinforcementPlans
`public void UpdateReinforcementPlans() `

### ClearPlan
`public void ClearPlan(bool isReinforcement = false) `

### ClearAddedTroops
`public void ClearAddedTroops(bool isReinforcement = false) `

### AddTroops
`public void AddTroops(FormationClass formationClass,int footTroopCount,int mountedTroopCount,bool isReinforcement = false) `

### GetTroopCount
`public int GetTroopCount(bool isReinforcement = false) `

### IsFirstPlan
`public bool IsFirstPlan(bool isReinforcement = false) `

### IsPlanMade
`public bool IsPlanMade(bool isReinforcement = false) `

### GetDeploymentBoundaries
`public MBReadOnlyList<ValueTuple<string,MBList<Vec2>>> GetDeploymentBoundaries() `

### GetSpawnPathOffset
`public float GetSpawnPathOffset(bool isReinforcement = false) `

### GetTargetOffset
`public float GetTargetOffset(bool isReinforcement = false) `

### GetDeploymentZoneFrame
`public MatrixFrame GetDeploymentZoneFrame() `

### GetFormationsCenterFrameAndExtents
`public MatrixFrame GetFormationsCenterFrameAndExtents(out Vec2 halfExtents,bool ignoreDimensionlessFormations = true) `

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries() `

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass,bool isReinforcement = false) `

### GetMeanPosition
`public Vec3 GetMeanPosition(bool isReinforcement = false) `

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(ValueTuple<int,int>[] troopDataPerFormationClass) `

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(in Vec2 position,[TupleElementNames(new string[] { "id","points" })] out ValueTuple<string,MBList<Vec2>> containingBoundaryTuple) `

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position) `

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition,in WorldPosition endPosition,out WorldPosition intersection) `

### ComputeDeploymentBoundariesFromMissionBoundaries
`public static MBList<Vec2> ComputeDeploymentBoundariesFromMissionBoundaries(ICollection<Vec2> missionBoundaries,in MatrixFrame deploymentFrame,float desiredWidth,float desiredDepth) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
