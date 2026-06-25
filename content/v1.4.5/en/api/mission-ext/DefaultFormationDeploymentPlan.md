---
title: "DefaultFormationDeploymentPlan"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultFormationDeploymentPlan`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultFormationDeploymentPlan

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultFormationDeploymentPlan : IFormationDeploymentPlan`
**Base:** `IFormationDeploymentPlan`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs`

## Overview

`DefaultFormationDeploymentPlan` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasDimensions` | `public bool HasDimensions { get; }` |

## Key Methods

### HasFrame
`public bool HasFrame()`

**Purpose:** Checks whether the current object has/contains `frame`.

### GetDefaultFlank
`public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount, bool teamPlanHasAnyFootTroops, bool spawnWithHorses = false)`

**Purpose:** Gets the current value of `default flank`.

### GetFlankDeploymentOrder
`public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0)`

**Purpose:** Gets the current value of `flank deployment order`.

### GetFrame
`public MatrixFrame GetFrame()`

**Purpose:** Gets the current value of `frame`.

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Gets the current value of `position`.

### GetDirection
`public Vec2 GetDirection()`

**Purpose:** Gets the current value of `direction`.

### CreateNewDeploymentWorldPosition
`public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**Purpose:** Creates a new `new deployment world position` instance or object.

### Clear
`public void Clear()`

**Purpose:** Handles logic related to `clear`.

### SetPlannedTroopCount
`public void SetPlannedTroopCount(int footTroopCount, int mountedTroopCount)`

**Purpose:** Sets the value or state of `planned troop count`.

### SetPlannedDimensions
`public void SetPlannedDimensions(float width, float depth)`

**Purpose:** Sets the value or state of `planned dimensions`.

### SetFrame
`public void SetFrame(in WorldFrame frame)`

**Purpose:** Sets the value or state of `frame`.

### SetSpawnClass
`public void SetSpawnClass(FormationClass spawnClass)`

**Purpose:** Sets the value or state of `spawn class`.

### GetFormationDefaultFlankAux
`public static FormationDeploymentFlank GetFormationDefaultFlankAux(FormationClass formationClass, int formationTroopCount, bool teamPlanHasAnyFootTroops, bool hasSignificantMountedTroops, bool canSpawnWithHorses)`

**Purpose:** Gets the current value of `formation default flank aux`.

## Usage Example

```csharp
var value = new DefaultFormationDeploymentPlan();
value.HasFrame();
```

## See Also

- [Complete Class Catalog](../catalog)