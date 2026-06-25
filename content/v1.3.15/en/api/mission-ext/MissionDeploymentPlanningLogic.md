---
title: "MissionDeploymentPlanningLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionDeploymentPlanningLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionDeploymentPlanningLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDeploymentPlanningLogic : MissionLogic, IMissionDeploymentPlan`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs`

## Overview

`MissionDeploymentPlanningLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionDeploymentPlanningLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public virtual void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ClearAll
`public virtual void ClearAll()`

**Purpose:** Handles logic related to `clear all`.

### MakeDefaultDeploymentPlans
`public virtual void MakeDefaultDeploymentPlans()`

**Purpose:** Handles logic related to `make default deployment plans`.

### MakeDeploymentPlan
`public virtual void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetPathOffset = 0f)`

**Purpose:** Handles logic related to `make deployment plan`.

### RemakeDeploymentPlan
`public virtual bool RemakeDeploymentPlan(Team team)`

**Purpose:** Handles logic related to `remake deployment plan`.

### ClearDeploymentPlan
`public virtual void ClearDeploymentPlan(Team team)`

**Purpose:** Handles logic related to `clear deployment plan`.

### IsPlanMade
`public virtual bool IsPlanMade(Team team)`

**Purpose:** Handles logic related to `is plan made`.

### IsPlanMade
`public virtual bool IsPlanMade(Team team, out bool isFirstPlan)`

**Purpose:** Handles logic related to `is plan made`.

### IsPositionInsideDeploymentBoundaries
`public virtual bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)`

**Purpose:** Handles logic related to `is position inside deployment boundaries`.

### HasDeploymentBoundaries
`public virtual bool HasDeploymentBoundaries(Team team)`

**Purpose:** Checks whether the current object has/contains `deployment boundaries`.

### GetDeploymentBoundaries
`public virtual MBReadOnlyList<ValueTuple<string, MBList<Vec2>>> GetDeploymentBoundaries(Team team)`

**Purpose:** Gets the current value of `deployment boundaries`.

### SupportsReinforcements
`public virtual bool SupportsReinforcements()`

**Purpose:** Handles logic related to `supports reinforcements`.

### SupportsNavmesh
`public virtual bool SupportsNavmesh()`

**Purpose:** Handles logic related to `supports navmesh`.

### HasPlayerSpawnFrame
`public virtual bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

**Purpose:** Checks whether the current object has/contains `player spawn frame`.

### GetPlayerSpawnFrame
`public virtual bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)`

**Purpose:** Gets the current value of `player spawn frame`.

### GetClosestDeploymentBoundaryPosition
`public virtual Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)`

**Purpose:** Gets the current value of `closest deployment boundary position`.

### ProjectPositionToDeploymentBoundaries
`public virtual void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position)`

**Purpose:** Handles logic related to `project position to deployment boundaries`.

### GetPathDeploymentBoundaryIntersection
`public virtual bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition foundPosition)`

**Purpose:** Gets the current value of `path deployment boundary intersection`.

### GetDeploymentFrame
`public virtual MatrixFrame GetDeploymentFrame(Team team)`

**Purpose:** Gets the current value of `deployment frame`.

### GetFormationPlan
`public virtual IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false)`

**Purpose:** Gets the current value of `formation plan`.

### GetSpawnPathOffset
`public virtual float GetSpawnPathOffset(Team team)`

**Purpose:** Gets the current value of `spawn path offset`.

### GetZoomFocusFrame
`public virtual MatrixFrame GetZoomFocusFrame(Team team)`

**Purpose:** Gets the current value of `zoom focus frame`.

### GetZoomOffset
`public virtual float GetZoomOffset(Team team, float fovAngle)`

**Purpose:** Gets the current value of `zoom offset`.

## Usage Example

```csharp
var implementation = new CustomMissionDeploymentPlanningLogic();
```

## See Also

- [Complete Class Catalog](../catalog)