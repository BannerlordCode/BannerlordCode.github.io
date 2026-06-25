---
title: "DefaultMissionDeploymentPlan"
description: "Auto-generated class reference for DefaultMissionDeploymentPlan."
---
# DefaultMissionDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultMissionDeploymentPlan : IMissionDeploymentPlan`
**Base:** `IMissionDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs`

## Overview

`DefaultMissionDeploymentPlan` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.Initialize();
```

### ClearDeploymentPlan
`public void ClearDeploymentPlan(Team team)`

**Purpose:** Removes all `deployment plan` from the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ClearDeploymentPlan(team);
```

### ClearReinforcementPlan
`public void ClearReinforcementPlan(Team team)`

**Purpose:** Removes all `reinforcement plan` from the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ClearReinforcementPlan(team);
```

### HasPlayerSpawnFrame
`public bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

**Purpose:** Determines whether the current object already holds `player spawn frame`.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.HasPlayerSpawnFrame(battleSide);
```

### GetPlayerSpawnFrame
`public bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)`

**Purpose:** Reads and returns the `player spawn frame` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetPlayerSpawnFrame(battleSide, position, direction);
```

### HasSignificantMountedTroops
`public static bool HasSignificantMountedTroops(int footTroopCount, int mountedTroopCount)`

**Purpose:** Determines whether the current object already holds `significant mounted troops`.

```csharp
// Static call; no instance required
DefaultMissionDeploymentPlan.HasSignificantMountedTroops(0, 0);
```

### ClearAddedTroops
`public void ClearAddedTroops(Team team, bool isReinforcement = false)`

**Purpose:** Removes all `added troops` from the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ClearAddedTroops(team, false);
```

### ClearAll
`public void ClearAll()`

**Purpose:** Removes all `all` from the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ClearAll();
```

### AddTroops
`public void AddTroops(Team team, FormationClass formationClass, int footTroopCount, int mountedTroopCount = 0, bool isReinforcement = false)`

**Purpose:** Adds `troops` to the current collection or state.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.AddTroops(team, formationClass, 0, 0, false);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(Team team, bool spawnWithHorses)`

**Purpose:** Assigns a new value to `spawn with horses` and updates the object's internal state.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.SetSpawnWithHorses(team, false);
```

### MakeDefaultDeploymentPlans
`public void MakeDefaultDeploymentPlans()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.MakeDefaultDeploymentPlans();
```

### MakeDeploymentPlan
`public void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.MakeDeploymentPlan(team, 0, 0);
```

### MakeReinforcementDeploymentPlan
`public void MakeReinforcementDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.MakeReinforcementDeploymentPlan(team, 0, 0);
```

### RemakeDeploymentPlan
`public bool RemakeDeploymentPlan(Team team)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.RemakeDeploymentPlan(team);
```

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)`

**Purpose:** Determines whether the current object is in the `position inside deployment boundaries` state or condition.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsPositionInsideDeploymentBoundaries(team, position);
```

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)`

**Purpose:** Reads and returns the `closest deployment boundary position` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetClosestDeploymentBoundaryPosition(team, position);
```

### SupportsReinforcements
`public bool SupportsReinforcements()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.SupportsReinforcements();
```

### SupportsNavmesh
`public bool SupportsNavmesh()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.SupportsNavmesh();
```

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)`

**Purpose:** Reads and returns the `path deployment boundary intersection` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetPathDeploymentBoundaryIntersection(team, startPosition, endPosition, intersection);
```

### IsPositionInsideSiegeDeploymentBoundaries
`public bool IsPositionInsideSiegeDeploymentBoundaries(in Vec2 position)`

**Purpose:** Determines whether the current object is in the `position inside siege deployment boundaries` state or condition.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsPositionInsideSiegeDeploymentBoundaries(position);
```

### GetSpawnPathOffset
`public float GetSpawnPathOffset(Team team)`

**Purpose:** Reads and returns the `spawn path offset` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetSpawnPathOffset(team);
```

### GetTargetOffset
`public float GetTargetOffset(Team team)`

**Purpose:** Reads and returns the `target offset` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetTargetOffset(team);
```

### GetTroopCount
`public int GetTroopCount(Team team, bool isReinforcement = false)`

**Purpose:** Reads and returns the `troop count` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetTroopCount(team, false);
```

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement)`

**Purpose:** Reads and returns the `formation plan` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetFormationPlan(team, fClass, false);
```

### IsPlanMade
`public bool IsPlanMade(Team team)`

**Purpose:** Determines whether the current object is in the `plan made` state or condition.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsPlanMade(team);
```

### IsPlanMade
`public bool IsPlanMade(Team team, out bool isFirstPlan)`

**Purpose:** Determines whether the current object is in the `plan made` state or condition.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsPlanMade(team, isFirstPlan);
```

### IsReinforcementPlanMade
`public bool IsReinforcementPlanMade(Team team)`

**Purpose:** Determines whether the current object is in the `reinforcement plan made` state or condition.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsReinforcementPlanMade(team);
```

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(Team team, { "footTroopCount", "mountedTroopCount" })`

**Purpose:** Determines whether the current object is in the `initial plan suitable for formations` state or condition.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.IsInitialPlanSuitableForFormations(team, "footTroopCount", });
```

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries(Team team)`

**Purpose:** Determines whether the current object already holds `deployment boundaries`.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.HasDeploymentBoundaries(team);
```

### GetDeploymentFrame
`public MatrixFrame GetDeploymentFrame(Team team)`

**Purpose:** Reads and returns the `deployment frame` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetDeploymentFrame(team);
```

### ProjectPositionToDeploymentBoundaries
`public void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition endPosition)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.ProjectPositionToDeploymentBoundaries(team, endPosition);
```

### GetDeploymentBoundaries
`public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>> GetDeploymentBoundaries(Team team)`

**Purpose:** Reads and returns the `deployment boundaries` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetDeploymentBoundaries(team);
```

### GetMeanPosition
`public Vec3 GetMeanPosition(Team team, bool isReinforcement = false)`

**Purpose:** Reads and returns the `mean position` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetMeanPosition(team, false);
```

### UpdateReinforcementPlan
`public void UpdateReinforcementPlan(Team team)`

**Purpose:** Recalculates and stores the latest representation of `reinforcement plan`.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.UpdateReinforcementPlan(team);
```

### GetZoomFocusFrame
`public MatrixFrame GetZoomFocusFrame(Team team)`

**Purpose:** Reads and returns the `zoom focus frame` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetZoomFocusFrame(team);
```

### GetZoomOffset
`public float GetZoomOffset(Team team, float fovAngle)`

**Purpose:** Reads and returns the `zoom offset` value held by the current object.

```csharp
// Obtain an instance of DefaultMissionDeploymentPlan from the subsystem API first
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
var result = defaultMissionDeploymentPlan.GetZoomOffset(team, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultMissionDeploymentPlan defaultMissionDeploymentPlan = ...;
defaultMissionDeploymentPlan.Initialize();
```

## See Also

- [Area Index](../)