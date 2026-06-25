---
title: "DefaultTeamDeploymentPlan"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTeamDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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
| `DeploymentBoundaries` | `public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>> DeploymentBoundaries { get; }` |

## Key Methods

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**Purpose:** Sets the value or state of `spawn with horses`.

### MakeDeploymentPlan
`public void MakeDeploymentPlan(FormationSceneSpawnEntry formationSceneSpawnEntries, bool isReinforcement = false, float spawnPathOffset = 0f, float targetOffset = 0f)`

**Purpose:** Handles logic related to `make deployment plan`.

### UpdateReinforcementPlans
`public void UpdateReinforcementPlans()`

**Purpose:** Updates the state or data of `reinforcement plans`.

### ClearPlan
`public void ClearPlan(bool isReinforcement = false)`

**Purpose:** Handles logic related to `clear plan`.

### ClearAddedTroops
`public void ClearAddedTroops(bool isReinforcement = false)`

**Purpose:** Handles logic related to `clear added troops`.

### AddTroops
`public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount, bool isReinforcement = false)`

**Purpose:** Adds `troops` to the current collection or state.

### IsFirstPlan
`public bool IsFirstPlan(bool isReinforcement = false)`

**Purpose:** Handles logic related to `is first plan`.

### IsPlanMade
`public bool IsPlanMade(bool isReinforcement = false)`

**Purpose:** Handles logic related to `is plan made`.

### GetSpawnPathOffset
`public float GetSpawnPathOffset(bool isReinforcement = false)`

**Purpose:** Gets the current value of `spawn path offset`.

### GetTargetOffset
`public float GetTargetOffset(bool isReinforcement = false)`

**Purpose:** Gets the current value of `target offset`.

### GetTroopCount
`public int GetTroopCount(bool isReinforcement = false)`

**Purpose:** Gets the current value of `troop count`.

### GetDeploymentFrame
`public MatrixFrame GetDeploymentFrame()`

**Purpose:** Gets the current value of `deployment frame`.

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries()`

**Purpose:** Checks whether the current object has/contains `deployment boundaries`.

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass, bool isReinforcement = false)`

**Purpose:** Gets the current value of `formation plan`.

### GetMeanPosition
`public Vec3 GetMeanPosition(bool isReinforcement = false)`

**Purpose:** Gets the current value of `mean position`.

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(ValueTuple<int, int> troopDataPerFormationClass)`

**Purpose:** Handles logic related to `is initial plan suitable for formations`.

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(in Vec2 position, { "id", "points" })`

**Purpose:** Handles logic related to `is position inside deployment boundaries`.

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position)`

**Purpose:** Gets the current value of `closest deployment boundary position`.

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)`

**Purpose:** Gets the current value of `path deployment boundary intersection`.

## Usage Example

```csharp
var value = new DefaultTeamDeploymentPlan();
value.SetSpawnWithHorses(false);
```

## See Also

- [Complete Class Catalog](../catalog)