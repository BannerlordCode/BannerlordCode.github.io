<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMissionDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ClearDeploymentPlan
`public void ClearDeploymentPlan(Team team)`

**Purpose:** Handles logic related to `clear deployment plan`.

### ClearReinforcementPlan
`public void ClearReinforcementPlan(Team team)`

**Purpose:** Handles logic related to `clear reinforcement plan`.

### HasPlayerSpawnFrame
`public bool HasPlayerSpawnFrame(BattleSideEnum battleSide)`

**Purpose:** Checks whether the current object has/contains `player spawn frame`.

### GetPlayerSpawnFrame
`public bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)`

**Purpose:** Gets the current value of `player spawn frame`.

### HasSignificantMountedTroops
`public static bool HasSignificantMountedTroops(int footTroopCount, int mountedTroopCount)`

**Purpose:** Checks whether the current object has/contains `significant mounted troops`.

### ClearAddedTroops
`public void ClearAddedTroops(Team team, bool isReinforcement = false)`

**Purpose:** Handles logic related to `clear added troops`.

### ClearAll
`public void ClearAll()`

**Purpose:** Handles logic related to `clear all`.

### AddTroops
`public void AddTroops(Team team, FormationClass formationClass, int footTroopCount, int mountedTroopCount = 0, bool isReinforcement = false)`

**Purpose:** Adds `troops` to the current collection or state.

### SetSpawnWithHorses
`public void SetSpawnWithHorses(Team team, bool spawnWithHorses)`

**Purpose:** Sets the value or state of `spawn with horses`.

### MakeDefaultDeploymentPlans
`public void MakeDefaultDeploymentPlans()`

**Purpose:** Handles logic related to `make default deployment plans`.

### MakeDeploymentPlan
`public void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)`

**Purpose:** Handles logic related to `make deployment plan`.

### MakeReinforcementDeploymentPlan
`public void MakeReinforcementDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)`

**Purpose:** Handles logic related to `make reinforcement deployment plan`.

### RemakeDeploymentPlan
`public bool RemakeDeploymentPlan(Team team)`

**Purpose:** Handles logic related to `remake deployment plan`.

### IsPositionInsideDeploymentBoundaries
`public bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)`

**Purpose:** Handles logic related to `is position inside deployment boundaries`.

### GetClosestDeploymentBoundaryPosition
`public Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)`

**Purpose:** Gets the current value of `closest deployment boundary position`.

### SupportsReinforcements
`public bool SupportsReinforcements()`

**Purpose:** Handles logic related to `supports reinforcements`.

### SupportsNavmesh
`public bool SupportsNavmesh()`

**Purpose:** Handles logic related to `supports navmesh`.

### GetPathDeploymentBoundaryIntersection
`public bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)`

**Purpose:** Gets the current value of `path deployment boundary intersection`.

### IsPositionInsideSiegeDeploymentBoundaries
`public bool IsPositionInsideSiegeDeploymentBoundaries(in Vec2 position)`

**Purpose:** Handles logic related to `is position inside siege deployment boundaries`.

### GetSpawnPathOffset
`public float GetSpawnPathOffset(Team team)`

**Purpose:** Gets the current value of `spawn path offset`.

### GetTargetOffset
`public float GetTargetOffset(Team team)`

**Purpose:** Gets the current value of `target offset`.

### GetTroopCount
`public int GetTroopCount(Team team, bool isReinforcement = false)`

**Purpose:** Gets the current value of `troop count`.

### GetFormationPlan
`public IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement)`

**Purpose:** Gets the current value of `formation plan`.

### IsPlanMade
`public bool IsPlanMade(Team team)`

**Purpose:** Handles logic related to `is plan made`.

### IsPlanMade
`public bool IsPlanMade(Team team, out bool isFirstPlan)`

**Purpose:** Handles logic related to `is plan made`.

### IsReinforcementPlanMade
`public bool IsReinforcementPlanMade(Team team)`

**Purpose:** Handles logic related to `is reinforcement plan made`.

### IsInitialPlanSuitableForFormations
`public bool IsInitialPlanSuitableForFormations(Team team, { "footTroopCount", "mountedTroopCount" })`

**Purpose:** Handles logic related to `is initial plan suitable for formations`.

### HasDeploymentBoundaries
`public bool HasDeploymentBoundaries(Team team)`

**Purpose:** Checks whether the current object has/contains `deployment boundaries`.

### GetDeploymentFrame
`public MatrixFrame GetDeploymentFrame(Team team)`

**Purpose:** Gets the current value of `deployment frame`.

### ProjectPositionToDeploymentBoundaries
`public void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition endPosition)`

**Purpose:** Handles logic related to `project position to deployment boundaries`.

### GetDeploymentBoundaries
`public MBReadOnlyList<ValueTuple<string, List<Vec2>>> GetDeploymentBoundaries(Team team)`

**Purpose:** Gets the current value of `deployment boundaries`.

### GetMeanPosition
`public Vec3 GetMeanPosition(Team team, bool isReinforcement = false)`

**Purpose:** Gets the current value of `mean position`.

### UpdateReinforcementPlan
`public void UpdateReinforcementPlan(Team team)`

**Purpose:** Updates the state or data of `reinforcement plan`.

### GetZoomFocusFrame
`public MatrixFrame GetZoomFocusFrame(Team team)`

**Purpose:** Gets the current value of `zoom focus frame`.

### GetZoomOffset
`public float GetZoomOffset(Team team, float fovAngle)`

**Purpose:** Gets the current value of `zoom offset`.

## Usage Example

```csharp
var value = new DefaultMissionDeploymentPlan();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)