---
title: "DefaultMissionDeploymentPlan"
description: "Auto-generated class reference for DefaultMissionDeploymentPlan."
---
# DefaultMissionDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDeploymentPlan : IMissionDeploymentPlan `
**Base:** IMissionDeploymentPlan
**Source:** TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs

## Overview

Auto-generated stub for `DefaultMissionDeploymentPlan`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Initialize
`public void Initialize()`

### ClearDeploymentPlan
`public void ClearDeploymentPlan(Team team)`

### ClearReinforcementPlan
`public void ClearReinforcementPlan(Team team)`

### HasPlayerSpawnFrame
`public bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

### GetPlayerSpawnFrame
`public bool GetPlayerSpawnFrame(BattleSideEnum battleSide,out WorldPosition position,out Vec2 direction)`

### HasSignificantMountedTroops
`public static bool HasSignificantMountedTroops(int footTroopCount,int mountedTroopCount)`

### ClearAddedTroops
`public void ClearAddedTroops(Team team,bool isReinforcement = false)`

### ClearAll
`public void ClearAll()`

### AddTroops
`public void AddTroops(Team team,FormationClass formationClass,int footTroopCount,int mountedTroopCount = 0,bool isReinforcement = false)`

### SetSpawnWithHorses
`public void SetSpawnWithHorses(Team team,bool spawnWithHorses)`

### MakeDefaultDeploymentPlans
`public void MakeDefaultDeploymentPlans()`

### MakeDeploymentPlan
`public void MakeDeploymentPlan(Team team,float spawnPathOffset = 0f,float targetOffset = 0f)`

### MakeReinforcementDeploymentPlan
`public void MakeReinforcementDeploymentPlan(Team team)`

### RemakeDeploymentPlan
`public bool RemakeDeploymentPlan(Team team)`

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(Team team,in Vec2 position)`

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(Team team,in Vec2 position)`

### SupportsReinforcements
`public bool SupportsReinforcements()`

### SupportsNavmesh
`public bool SupportsNavmesh(Team team)`

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(Team team,in WorldPosition startPosition,in WorldPosition endPosition,out WorldPosition intersection)`

### IsPositionInsideSiegeDeploymentBoundaries
`public bool IsPositionInsideSiegeDeploymentBoundaries(in Vec2 position)`

### GetSpawnPathOffset
`public float GetSpawnPathOffset(Team team)`

### GetTargetOffset
`public float GetTargetOffset(Team team)`

### GetTroopCount
`public int GetTroopCount(Team team,bool isReinforcement = false)`

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(Team team,FormationClass fClass,bool isReinforcement)`

### IsPlanMade
`public bool IsPlanMade(Team team)`

### IsReinforcementPlanMade
`public bool IsReinforcementPlanMade(Team team)`

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(Team team,[TupleElementNames(new string[] { "footTroopCount","mountedTroopCount" })] ValueTuple<int,int>[] troopDataPerFormationClass)`

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries(Team team)`

### GetDeploymentZoneFrame
`public MatrixFrame GetDeploymentZoneFrame(Team team)`

### GetFormationsCenterFrameAndExtents
`public MatrixFrame GetFormationsCenterFrameAndExtents(Team team,out Vec2 halfExtents,bool ignoreDimensionlessFormations = true)`

### ProjectPositionToDeploymentBoundaries
`public void ProjectPositionToDeploymentBoundaries(Team team,ref WorldPosition endPosition)`

### GetDeploymentBoundaries
`public MBReadOnlyList<ValueTuple<string,MBList<Vec2>>> GetDeploymentBoundaries(Team team)`

### GetMeanPosition
`public Vec3 GetMeanPosition(Team team,bool isReinforcement = false)`

### UpdateReinforcementPlan
`public void UpdateReinforcementPlan(Team team)`

### GetZoomFocusFrame
`public MatrixFrame GetZoomFocusFrame(Team team)`

### GetZoomOffset
`public float GetZoomOffset(Team team,float fovAngle)`

## See Also

- [Section index](../)
