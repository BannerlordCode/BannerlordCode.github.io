---
title: "DefaultFormationDeploymentPlan"
description: "Auto-generated class reference for DefaultFormationDeploymentPlan."
---
# DefaultFormationDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationDeploymentPlan : IFormationDeploymentPlan `
**Base:** IFormationDeploymentPlan
**Source:** TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs

## Overview

Auto-generated stub for `DefaultFormationDeploymentPlan`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### HasFrame
`public bool HasFrame()`

### GetDefaultFlank
`public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount,bool teamPlanHasAnyFootTroops,bool spawnWithHorses = false)`

### GetFlankDeploymentOrder
`public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0)`

### GetFrame
`public MatrixFrame GetFrame()`

### GetPosition
`public Vec3 GetPosition()`

### GetDirection
`public Vec2 GetDirection()`

### CreateNewDeploymentWorldPosition
`public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

### Clear
`public void Clear()`

### SetPlannedTroopCount
`public void SetPlannedTroopCount(int footTroopCount,int mountedTroopCount)`

### SetPlannedDimensions
`public void SetPlannedDimensions(float width,float depth)`

### SetFrame
`public void SetFrame(in WorldFrame frame)`

### SetSpawnClass
`public void SetSpawnClass(FormationClass spawnClass)`

### GetFormationDefaultFlankAux
`public static FormationDeploymentFlank GetFormationDefaultFlankAux(FormationClass formationClass,int formationTroopCount,bool teamPlanHasAnyFootTroops,bool hasSignificantMountedTroops,bool canSpawnWithHorses)`

## See Also

- [Section index](../)
