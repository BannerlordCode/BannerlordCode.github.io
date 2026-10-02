---
title: "DefaultTeamDeploymentPlan"
description: "Auto-generated class reference for DefaultTeamDeploymentPlan."
---
# DefaultTeamDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultTeamDeploymentPlan : ITeamDeploymentPlan `
**Base:** ITeamDeploymentPlan
**Source:** TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs

## Overview

Auto-generated stub for `DefaultTeamDeploymentPlan`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

### MakeDeploymentPlan
`public void MakeDeploymentPlan(float spawnPathOffset = 0f,float targetOffset = 0f,FormationSceneSpawnEntry[,] formationSceneSpawnEntries = null,bool isReinforcement = false)`

### UpdateReinforcementPlans
`public void UpdateReinforcementPlans()`

### ClearPlan
`public void ClearPlan(bool isReinforcement = false)`

### ClearAddedTroops
`public void ClearAddedTroops(bool isReinforcement = false)`

### AddTroops
`public void AddTroops(FormationClass formationClass,int footTroopCount,int mountedTroopCount,bool isReinforcement = false)`

### GetTroopCount
`public int GetTroopCount(bool isReinforcement = false)`

### IsFirstPlan
`public bool IsFirstPlan(bool isReinforcement = false)`

### IsPlanMade
`public bool IsPlanMade(bool isReinforcement = false)`

### GetDeploymentBoundaries
`public MBReadOnlyList<ValueTuple<string,MBList<Vec2>>> GetDeploymentBoundaries()`

### GetSpawnPathOffset
`public float GetSpawnPathOffset(bool isReinforcement = false)`

### GetTargetOffset
`public float GetTargetOffset(bool isReinforcement = false)`

### GetDeploymentZoneFrame
`public MatrixFrame GetDeploymentZoneFrame()`

### GetFormationsCenterFrameAndExtents
`public MatrixFrame GetFormationsCenterFrameAndExtents(out Vec2 halfExtents,bool ignoreDimensionlessFormations = true)`

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries()`

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass,bool isReinforcement = false)`

### GetMeanPosition
`public Vec3 GetMeanPosition(bool isReinforcement = false)`

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(ValueTuple<int,int>[] troopDataPerFormationClass)`

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(in Vec2 position,[TupleElementNames(new string[] { "id","points" })] out ValueTuple<string,MBList<Vec2>> containingBoundaryTuple)`

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position)`

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition,in WorldPosition endPosition,out WorldPosition intersection)`

### ComputeDeploymentBoundariesFromMissionBoundaries
`public static MBList<Vec2> ComputeDeploymentBoundariesFromMissionBoundaries(ICollection<Vec2> missionBoundaries,in MatrixFrame deploymentFrame,float desiredWidth,float desiredDepth)`

## See Also

- [Section index](../)
