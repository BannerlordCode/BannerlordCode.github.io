<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultTeamDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultTeamDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultTeamDeploymentPlan : ITeamDeploymentPlan`
**Base:** `ITeamDeploymentPlan`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs`

## Overview

`DefaultTeamDeploymentPlan` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Team` | `public Team Team { get; }` |
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |

## Key Methods

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**Purpose:** Sets the value or state of `spawn with horses`.

### MakeDeploymentPlan
`public void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry formationSceneSpawnEntries = null, bool isReinforcement = false)`

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

### GetTroopCount
`public int GetTroopCount(bool isReinforcement = false)`

**Purpose:** Gets the current value of `troop count`.

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
`public bool IsInitialPlanSuitableForFormations((int, int) troopDataPerFormationClass)`

**Purpose:** Handles logic related to `is initial plan suitable for formations`.

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(in Vec2 position, out (string id, MBList<Vec2> points) containingBoundaryTuple)`

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