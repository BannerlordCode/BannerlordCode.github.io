---
title: "DefaultDeploymentPlan"
description: "Auto-generated class reference for DefaultDeploymentPlan."
---
# DefaultDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultDeploymentPlan`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs`

## Overview

`DefaultDeploymentPlan` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpawnWithHorses` | `public bool SpawnWithHorses { get; }` |
| `PlanCount` | `public int PlanCount { get; }` |
| `IsPlanMade` | `public bool IsPlanMade { get; }` |
| `SpawnPathOffset` | `public float SpawnPathOffset { get; }` |
| `TargetOffset` | `public float TargetOffset { get; }` |
| `IsSafeToDeploy` | `public bool IsSafeToDeploy { get; }` |
| `SafetyScore` | `public float SafetyScore { get; }` |
| `FootTroopCount` | `public int FootTroopCount { get; }` |
| `MountedTroopCount` | `public int MountedTroopCount { get; }` |
| `TroopCount` | `public int TroopCount { get; }` |
| `MeanPosition` | `public Vec3 MeanPosition { get; }` |

## Key Methods

### CreateInitialPlan
`public static DefaultDeploymentPlan CreateInitialPlan(Mission mission, Team team)`

**Purpose:** Constructs a new `initial plan` entity and returns it to the caller.

```csharp
// Static call; no instance required
DefaultDeploymentPlan.CreateInitialPlan(mission, team);
```

### CreateReinforcementPlan
`public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission, Team team)`

**Purpose:** Constructs a new `reinforcement plan` entity and returns it to the caller.

```csharp
// Static call; no instance required
DefaultDeploymentPlan.CreateReinforcementPlan(mission, team);
```

### CreateReinforcementPlanWithSpawnPath
`public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission, Team team, SpawnPathData spawnPathData)`

**Purpose:** Constructs a new `reinforcement plan with spawn path` entity and returns it to the caller.

```csharp
// Static call; no instance required
DefaultDeploymentPlan.CreateReinforcementPlanWithSpawnPath(mission, team, spawnPathData);
```

### SetSpawnWithHorses
`public void SetSpawnWithHorses(bool value)`

**Purpose:** Assigns a new value to `spawn with horses` and updates the object's internal state.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.SetSpawnWithHorses(false);
```

### ClearAddedTroops
`public void ClearAddedTroops()`

**Purpose:** Removes all `added troops` from the current object.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.ClearAddedTroops();
```

### ClearPlan
`public void ClearPlan()`

**Purpose:** Removes all `plan` from the current object.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.ClearPlan();
```

### AddTroops
`public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount)`

**Purpose:** Adds `troops` to the current collection or state.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.AddTroops(formationClass, 0, 0);
```

### PlanBattleDeployment
`public void PlanBattleDeployment(FormationSceneSpawnEntry formationSceneSpawnEntries, float spawnPathOffset = 0f, float targetOffset = 0f)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.PlanBattleDeployment(formationSceneSpawnEntries, 0, 0);
```

### GetFormationPlan
`public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass)`

**Purpose:** Reads and returns the `formation plan` value held by the current object.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.GetFormationPlan(fClass);
```

### GetFormationDeploymentFrame
`public bool GetFormationDeploymentFrame(FormationClass fClass, out MatrixFrame frame)`

**Purpose:** Reads and returns the `formation deployment frame` value held by the current object.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.GetFormationDeploymentFrame(fClass, frame);
```

### IsPlanSuitableForFormations
`public bool IsPlanSuitableForFormations(ValueTuple<int, int> troopDataPerFormationClass)`

**Purpose:** Determines whether the current object is in the `plan suitable for formations` state or condition.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.IsPlanSuitableForFormations(valueTuple<int, 0);
```

### UpdateSafetyScore
`public void UpdateSafetyScore()`

**Purpose:** Recalculates and stores the latest representation of `safety score`.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
defaultDeploymentPlan.UpdateSafetyScore();
```

### GetFrameFromFormationSpawnEntity
`public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity, float depthOffset = 0f)`

**Purpose:** Reads and returns the `frame from formation spawn entity` value held by the current object.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.GetFrameFromFormationSpawnEntity(formationSpawnEntity, 0);
```

### GetFormationSpawnWidthAndDepth
`public ValueTuple<float, float> GetFormationSpawnWidthAndDepth(FormationClass formationNo, int troopCount, bool hasMountedTroops, bool considerCavalryAsInfantry = false)`

**Purpose:** Reads and returns the `formation spawn width and depth` value held by the current object.

```csharp
// Obtain an instance of DefaultDeploymentPlan from the subsystem API first
DefaultDeploymentPlan defaultDeploymentPlan = ...;
var result = defaultDeploymentPlan.GetFormationSpawnWidthAndDepth(formationNo, 0, false, false);
```

## Usage Example

```csharp
DefaultDeploymentPlan.CreateInitialPlan(mission, team);
```

## See Also

- [Area Index](../)