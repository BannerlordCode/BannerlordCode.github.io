---
title: "MissionDeploymentPlanningLogic"
description: "Auto-generated class reference for MissionDeploymentPlanningLogic."
---
# MissionDeploymentPlanningLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDeploymentPlanningLogic : MissionLogic,IMissionDeploymentPlan `
**Base:** MissionLogic, IMissionDeploymentPlan
**Source:** TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs

## Overview

Auto-generated stub for `MissionDeploymentPlanningLogic`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Initialize
`public virtual void Initialize()`

### ClearAll
`public virtual void ClearAll()`

### MakeDefaultDeploymentPlans
`public virtual void MakeDefaultDeploymentPlans()`

### MakeDeploymentPlan
`public virtual void MakeDeploymentPlan(Team team,float spawnPathOffset = 0f,float targetPathOffset = 0f)`

### RemakeDeploymentPlan
`public virtual bool RemakeDeploymentPlan(Team team)`

### ClearDeploymentPlan
`public virtual void ClearDeploymentPlan(Team team)`

### IsPlanMade
`public virtual bool IsPlanMade(Team team)`

### IsPositionInsideDeploymentBoundaries
`public virtual bool IsPositionInsideDeploymentBoundaries(Team team,in Vec2 position)`

### HasDeploymentBoundaries
`public virtual bool HasDeploymentBoundaries(Team team)`

### GetDeploymentBoundaries
`public virtual MBReadOnlyList<ValueTuple<string,MBList<Vec2>>> GetDeploymentBoundaries(Team team)`

### SupportsReinforcements
`public virtual bool SupportsReinforcements()`

### UpdateReinforcementPlan
`public virtual void UpdateReinforcementPlan(Team team)`

### SupportsNavmesh
`public virtual bool SupportsNavmesh(Team team)`

### HasPlayerSpawnFrame
`public virtual bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

### GetPlayerSpawnFrame
`public virtual bool GetPlayerSpawnFrame(BattleSideEnum battleSide,out WorldPosition position,out Vec2 direction)`

### GetClosestDeploymentBoundaryPosition
`public virtual Vec2 GetClosestDeploymentBoundaryPosition(Team team,in Vec2 position)`

### ProjectPositionToDeploymentBoundaries
`public virtual void ProjectPositionToDeploymentBoundaries(Team team,ref WorldPosition position)`

### GetPathDeploymentBoundaryIntersection
`public virtual bool GetPathDeploymentBoundaryIntersection(Team team,in WorldPosition startPosition,in WorldPosition endPosition,out WorldPosition foundPosition)`

### GetDeploymentZoneFrame
`public virtual MatrixFrame GetDeploymentZoneFrame(Team team)`

### GetFormationsCenterFrameAndExtents
`public virtual MatrixFrame GetFormationsCenterFrameAndExtents(Team team,out Vec2 halfExtents,bool ignoreDimensionlessFormations = true)`

### GetFormationPlan
`public virtual IFormationDeploymentPlan GetFormationPlan(Team team,FormationClass fClass,bool isReinforcement = false)`

### GetSpawnPathOffset
`public virtual float GetSpawnPathOffset(Team team)`

### GetZoomFocusFrame
`public virtual MatrixFrame GetZoomFocusFrame(Team team)`

### GetZoomOffset
`public virtual float GetZoomOffset(Team team,float fovAngle)`

## See Also

- [Section index](../)
