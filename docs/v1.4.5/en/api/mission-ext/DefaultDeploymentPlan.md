<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDeploymentPlan`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs`

## Overview

`DefaultDeploymentPlan` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlanMade` | `public bool IsPlanMade { get; }` |
| `SpawnPathOffset` | `public float SpawnPathOffset { get; }` |
| `TargetOffset` | `public float TargetOffset { get; }` |
| `SafetyScore` | `public float SafetyScore { get; }` |
| `FootTroopCount` | `public int FootTroopCount { get; }` |
| `MountedTroopCount` | `public int MountedTroopCount { get; }` |
| `TroopCount` | `public int TroopCount { get; }` |

## Key Methods

### CreateInitialPlan
`public static DefaultDeploymentPlan CreateInitialPlan(Mission mission, Team team)`

**Purpose:** Creates a new `initial plan` instance or object.

### CreateReinforcementPlan
`public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission, Team team)`

**Purpose:** Creates a new `reinforcement plan` instance or object.

### CreateReinforcementPlanWithSpawnPath
`public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission, Team team, SpawnPathData spawnPathData)`

**Purpose:** Creates a new `reinforcement plan with spawn path` instance or object.

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**Purpose:** Sets the value or state of `spawn with horses`.

### MakeDeploymentPlan
`public void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry formationSceneSpawnEntries = null)`

**Purpose:** Handles logic related to `make deployment plan`.

### ClearPlan
`public void ClearPlan()`

**Purpose:** Handles logic related to `clear plan`.

### ClearAddedTroops
`public void ClearAddedTroops()`

**Purpose:** Handles logic related to `clear added troops`.

### AddTroops
`public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount)`

**Purpose:** Adds `troops` to the current collection or state.

### GetFormationPlan
`public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass)`

**Purpose:** Gets the current value of `formation plan`.

### GetFormationDeploymentFrame
`public bool GetFormationDeploymentFrame(FormationClass fClass, out MatrixFrame frame)`

**Purpose:** Gets the current value of `formation deployment frame`.

### GetFirstValidFormationDeploymentFrame
`public bool GetFirstValidFormationDeploymentFrame(out MatrixFrame frame)`

**Purpose:** Gets the current value of `first valid formation deployment frame`.

### IsPlanSuitableForFormations
`public bool IsPlanSuitableForFormations((int, int) troopDataPerFormationClass)`

**Purpose:** Handles logic related to `is plan suitable for formations`.

### UpdateSafetyScore
`public void UpdateSafetyScore()`

**Purpose:** Updates the state or data of `safety score`.

### GetFrameFromFormationSpawnEntity
`public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity, float depthOffset = 0f)`

**Purpose:** Gets the current value of `frame from formation spawn entity`.

## Usage Example

```csharp
DefaultDeploymentPlan.CreateInitialPlan(mission, team);
```

## See Also

- [Complete Class Catalog](../catalog)