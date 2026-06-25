---
title: "FormationIntegrityDataGroup"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationIntegrityDataGroup`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationIntegrityDataGroup

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct FormationIntegrityDataGroup`
**Area:** mission-ext

## Overview

`FormationIntegrityDataGroup` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RetreatPositionCache` | `public Formation.RetreatPositionCacheSystem RetreatPositionCache { get; }` |
| `RepresentativeClass` | `public FormationClass RepresentativeClass { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `UnitSpacing` | `public int UnitSpacing { get; }` |
| `OrderPositionLock` | `public object OrderPositionLock { get; }` |
| `CountOfUnits` | `public int CountOfUnits { get; }` |
| `CountOfDetachedUnits` | `public int CountOfDetachedUnits { get; }` |
| `CountOfUndetachableNonPlayerUnits` | `public int CountOfUndetachableNonPlayerUnits { get; }` |
| `CountOfUnitsWithoutDetachedOnes` | `public int CountOfUnitsWithoutDetachedOnes { get; }` |
| `UnitsWithoutLooseDetachedOnes` | `public MBReadOnlyList<IFormationUnit> UnitsWithoutLooseDetachedOnes { get; }` |
| `CountOfUnitsWithoutLooseDetachedOnes` | `public int CountOfUnitsWithoutLooseDetachedOnes { get; }` |
| `CountOfDetachableNonPlayerUnits` | `public int CountOfDetachableNonPlayerUnits { get; }` |
| `OrderPosition` | `public Vec2 OrderPosition { get; }` |
| `OrderGroundPosition` | `public Vec3 OrderGroundPosition { get; }` |
| `OrderPositionIsValid` | `public bool OrderPositionIsValid { get; }` |
| `Depth` | `public float Depth { get; }` |
| `MinimumWidth` | `public float MinimumWidth { get; }` |
| `MaximumWidth` | `public float MaximumWidth { get; }` |
| `UnitDiameter` | `public float UnitDiameter { get; }` |

## Key Methods

### CreateNewOrderWorldPosition
`public WorldPosition CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**Purpose:** Creates a new `new order world position` instance or object.

### SetMovementOrder
`public void SetMovementOrder(MovementOrder input)`

**Purpose:** Sets the value or state of `movement order`.

### SetFacingOrder
`public void SetFacingOrder(FacingOrder order)`

**Purpose:** Sets the value or state of `facing order`.

### SetArrangementOrder
`public void SetArrangementOrder(ArrangementOrder order)`

**Purpose:** Sets the value or state of `arrangement order`.

### SetFormOrder
`public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)`

**Purpose:** Sets the value or state of `form order`.

### SetRidingOrder
`public void SetRidingOrder(RidingOrder order)`

**Purpose:** Sets the value or state of `riding order`.

### SetFiringOrder
`public void SetFiringOrder(FiringOrder order)`

**Purpose:** Sets the value or state of `firing order`.

### SetControlledByAI
`public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)`

**Purpose:** Sets the value or state of `controlled by a i`.

### SetTargetFormation
`public void SetTargetFormation(Formation targetFormation)`

**Purpose:** Sets the value or state of `target formation`.

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### ResetArrangementOrderTickTimer
`public void ResetArrangementOrderTickTimer()`

**Purpose:** Resets `arrangement order tick timer` to its initial state.

### SetPositioning
`public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)`

**Purpose:** Sets the value or state of `positioning`.

### GetCountOfUnitsWithCondition
`public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)`

**Purpose:** Gets the current value of `count of units with condition`.

### GetReadonlyMovementOrderReference
`public readonly ref MovementOrder GetReadonlyMovementOrderReference()`

**Purpose:** Gets the current value of `readonly movement order reference`.

### GetFirstUnit
`public Agent GetFirstUnit()`

**Purpose:** Gets the current value of `first unit`.

### GetCountOfUnitsBelongingToLogicalClass
`public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass)`

**Purpose:** Gets the current value of `count of units belonging to logical class`.

### GetCountOfUnitsBelongingToPhysicalClass
`public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)`

**Purpose:** Gets the current value of `count of units belonging to physical class`.

### SetSpawnIndex
`public void SetSpawnIndex(int value = 0)`

**Purpose:** Sets the value or state of `spawn index`.

### GetNextSpawnIndex
`public int GetNextSpawnIndex()`

**Purpose:** Gets the current value of `next spawn index`.

### GetUnitWithIndex
`public Agent GetUnitWithIndex(int unitIndex)`

**Purpose:** Gets the current value of `unit with index`.

## Usage Example

```csharp
// First obtain a FormationIntegrityDataGroup instance from game state, then call one of its public methods
var value = new FormationIntegrityDataGroup();
value.CreateNewOrderWorldPosition(worldPositionEnforcedCache);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
