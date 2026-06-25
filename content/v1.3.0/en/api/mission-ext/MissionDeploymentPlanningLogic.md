---
title: "MissionDeploymentPlanningLogic"
description: "Auto-generated class reference for MissionDeploymentPlanningLogic."
---
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

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.Initialize();
```

### ClearAll
`public virtual void ClearAll()`

**Purpose:** Removes all all from the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.ClearAll();
```

### MakeDefaultDeploymentPlans
`public virtual void MakeDefaultDeploymentPlans()`

**Purpose:** Executes the MakeDefaultDeploymentPlans logic.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.MakeDefaultDeploymentPlans();
```

### MakeDeploymentPlan
`public virtual void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetPathOffset = 0f)`

**Purpose:** Executes the MakeDeploymentPlan logic.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.MakeDeploymentPlan(team, 0, 0);
```

### RemakeDeploymentPlan
`public virtual bool RemakeDeploymentPlan(Team team)`

**Purpose:** Executes the RemakeDeploymentPlan logic.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.RemakeDeploymentPlan(team);
```

### ClearDeploymentPlan
`public virtual void ClearDeploymentPlan(Team team)`

**Purpose:** Removes all deployment plan from the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.ClearDeploymentPlan(team);
```

### IsPlanMade
`public virtual bool IsPlanMade(Team team)`

**Purpose:** Determines whether the this instance is in the plan made state or condition.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.IsPlanMade(team);
```

### IsPlanMade
`public virtual bool IsPlanMade(Team team, out bool isFirstPlan)`

**Purpose:** Determines whether the this instance is in the plan made state or condition.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.IsPlanMade(team, isFirstPlan);
```

### IsPositionInsideDeploymentBoundaries
`public virtual bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)`

**Purpose:** Determines whether the this instance is in the position inside deployment boundaries state or condition.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.IsPositionInsideDeploymentBoundaries(team, position);
```

### HasDeploymentBoundaries
`public virtual bool HasDeploymentBoundaries(Team team)`

**Purpose:** Determines whether the this instance already holds deployment boundaries.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.HasDeploymentBoundaries(team);
```

### GetDeploymentBoundaries
`public virtual MBReadOnlyList<ValueTuple<string, List<Vec2>>> GetDeploymentBoundaries(Team team)`

**Purpose:** Reads and returns the deployment boundaries value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetDeploymentBoundaries(team);
```

### SupportsReinforcements
`public virtual bool SupportsReinforcements()`

**Purpose:** Executes the SupportsReinforcements logic.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.SupportsReinforcements();
```

### SupportsNavmesh
`public virtual bool SupportsNavmesh()`

**Purpose:** Executes the SupportsNavmesh logic.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.SupportsNavmesh();
```

### HasPlayerSpawnFrame
`public virtual bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

**Purpose:** Determines whether the this instance already holds player spawn frame.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.HasPlayerSpawnFrame(battleSide);
```

### GetPlayerSpawnFrame
`public virtual bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)`

**Purpose:** Reads and returns the player spawn frame value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetPlayerSpawnFrame(battleSide, position, direction);
```

### GetClosestDeploymentBoundaryPosition
`public virtual Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)`

**Purpose:** Reads and returns the closest deployment boundary position value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetClosestDeploymentBoundaryPosition(team, position);
```

### ProjectPositionToDeploymentBoundaries
`public virtual void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position)`

**Purpose:** Executes the ProjectPositionToDeploymentBoundaries logic.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
missionDeploymentPlanningLogic.ProjectPositionToDeploymentBoundaries(team, position);
```

### GetPathDeploymentBoundaryIntersection
`public virtual bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition foundPosition)`

**Purpose:** Reads and returns the path deployment boundary intersection value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetPathDeploymentBoundaryIntersection(team, startPosition, endPosition, foundPosition);
```

### GetDeploymentFrame
`public virtual MatrixFrame GetDeploymentFrame(Team team)`

**Purpose:** Reads and returns the deployment frame value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetDeploymentFrame(team);
```

### GetFormationPlan
`public virtual IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false)`

**Purpose:** Reads and returns the formation plan value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetFormationPlan(team, fClass, false);
```

### GetSpawnPathOffset
`public virtual float GetSpawnPathOffset(Team team)`

**Purpose:** Reads and returns the spawn path offset value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetSpawnPathOffset(team);
```

### GetZoomFocusFrame
`public virtual MatrixFrame GetZoomFocusFrame(Team team)`

**Purpose:** Reads and returns the zoom focus frame value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetZoomFocusFrame(team);
```

### GetZoomOffset
`public virtual float GetZoomOffset(Team team, float fovAngle)`

**Purpose:** Reads and returns the zoom offset value held by the this instance.

```csharp
// Obtain an instance of MissionDeploymentPlanningLogic from the subsystem API first
MissionDeploymentPlanningLogic missionDeploymentPlanningLogic = ...;
var result = missionDeploymentPlanningLogic.GetZoomOffset(team, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionDeploymentPlanningLogic instance = ...;
```

## See Also

- [Area Index](../)