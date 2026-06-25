---
title: "DefaultTeamDeploymentPlan"
description: "Auto-generated class reference for DefaultTeamDeploymentPlan."
---
# DefaultTeamDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultTeamDeploymentPlan`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs`

## Overview

`DefaultTeamDeploymentPlan` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `DeploymentBoundaries` | `public MBReadOnlyList<ValueTuple<string, List<Vec2>>> DeploymentBoundaries { get; }` |

## Key Methods

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**Purpose:** **Purpose:** Assigns a new value to spawn with horses and updates the object's internal state.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.SetSpawnWithHorses(false);
```

### MakeDeploymentPlan
`public void MakeDeploymentPlan(FormationSceneSpawnEntry formationSceneSpawnEntries, bool isReinforcement = false, float spawnPathOffset = 0f, float targetOffset = 0f)`

**Purpose:** **Purpose:** Executes the MakeDeploymentPlan logic.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.MakeDeploymentPlan(formationSceneSpawnEntries, false, 0, 0);
```

### UpdateReinforcementPlans
`public void UpdateReinforcementPlans()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of reinforcement plans.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.UpdateReinforcementPlans();
```

### ClearPlan
`public void ClearPlan(bool isReinforcement = false)`

**Purpose:** **Purpose:** Removes all plan from the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.ClearPlan(false);
```

### ClearAddedTroops
`public void ClearAddedTroops(bool isReinforcement = false)`

**Purpose:** **Purpose:** Removes all added troops from the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.ClearAddedTroops(false);
```

### AddTroops
`public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount, bool isReinforcement = false)`

**Purpose:** **Purpose:** Adds troops to the current collection or state.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.AddTroops(formationClass, 0, 0, false);
```

### IsFirstPlan
`public bool IsFirstPlan(bool isReinforcement = false)`

**Purpose:** **Purpose:** Determines whether the this instance is in the first plan state or condition.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.IsFirstPlan(false);
```

### IsPlanMade
`public bool IsPlanMade(bool isReinforcement = false)`

**Purpose:** **Purpose:** Determines whether the this instance is in the plan made state or condition.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.IsPlanMade(false);
```

### GetSpawnPathOffset
`public float GetSpawnPathOffset(bool isReinforcement = false)`

**Purpose:** **Purpose:** Reads and returns the spawn path offset value held by the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetSpawnPathOffset(false);
```

### GetTargetOffset
`public float GetTargetOffset(bool isReinforcement = false)`

**Purpose:** **Purpose:** Reads and returns the target offset value held by the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetTargetOffset(false);
```

### GetTroopCount
`public int GetTroopCount(bool isReinforcement = false)`

**Purpose:** **Purpose:** Reads and returns the troop count value held by the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetTroopCount(false);
```

### GetDeploymentFrame
`public MatrixFrame GetDeploymentFrame()`

**Purpose:** **Purpose:** Reads and returns the deployment frame value held by the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetDeploymentFrame();
```

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries()`

**Purpose:** **Purpose:** Determines whether the this instance already holds deployment boundaries.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.HasDeploymentBoundaries();
```

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass, bool isReinforcement = false)`

**Purpose:** **Purpose:** Reads and returns the formation plan value held by the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetFormationPlan(fClass, false);
```

### GetMeanPosition
`public Vec3 GetMeanPosition(bool isReinforcement = false)`

**Purpose:** **Purpose:** Reads and returns the mean position value held by the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetMeanPosition(false);
```

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(ValueTuple<int, int> troopDataPerFormationClass)`

**Purpose:** **Purpose:** Determines whether the this instance is in the initial plan suitable for formations state or condition.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.IsInitialPlanSuitableForFormations(valueTuple<int, 0);
```

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(in Vec2 position, { "id", "points" })`

**Purpose:** **Purpose:** Determines whether the this instance is in the position inside deployment boundaries state or condition.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.IsPositionInsideDeploymentBoundaries(position, "id", });
```

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position)`

**Purpose:** **Purpose:** Reads and returns the closest deployment boundary position value held by the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetClosestDeploymentBoundaryPosition(position);
```

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)`

**Purpose:** **Purpose:** Reads and returns the path deployment boundary intersection value held by the this instance.

```csharp
// Obtain an instance of DefaultTeamDeploymentPlan from the subsystem API first
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
var result = defaultTeamDeploymentPlan.GetPathDeploymentBoundaryIntersection(startPosition, endPosition, intersection);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultTeamDeploymentPlan defaultTeamDeploymentPlan = ...;
defaultTeamDeploymentPlan.SetSpawnWithHorses(false);
```

## See Also

- [Area Index](../)