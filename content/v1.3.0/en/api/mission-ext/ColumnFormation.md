---
title: "ColumnFormation"
description: "Auto-generated class reference for ColumnFormation."
---
# ColumnFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ColumnFormation : IFormationArrangement`
**Base:** `IFormationArrangement`
**File:** `TaleWorlds.MountAndBlade/ColumnFormation.cs`

## Overview

`ColumnFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Vanguard` | `public IFormationUnit Vanguard { get; }` |
| `ColumnCount` | `public int ColumnCount { get; set; }` |
| `RankCount` | `public int RankCount { get; }` |
| `VanguardFileIndex` | `public int VanguardFileIndex { get; }` |
| `DistanceMultiplier` | `public float DistanceMultiplier { get; }` |
| `IntervalMultiplier` | `public float IntervalMultiplier { get; }` |
| `Width` | `public float Width { get; set; }` |
| `FlankWidth` | `public float FlankWidth { get; set; }` |
| `UnitPositionsOnVanguardFileIndex` | `public List<Vec2> UnitPositionsOnVanguardFileIndex { get; }` |
| `Depth` | `public float Depth { get; }` |
| `RankDepth` | `public float RankDepth { get; }` |
| `MinimumWidth` | `public float MinimumWidth { get; }` |
| `MaximumWidth` | `public float MaximumWidth { get; }` |
| `MinimumFlankWidth` | `public float MinimumFlankWidth { get; }` |
| `IsLoose` | `public bool? IsLoose { get; }` |
| `UnitCount` | `public int UnitCount { get; }` |
| `PositionedUnitCount` | `public int PositionedUnitCount { get; }` |

## Key Methods

### Clone
`public IFormationArrangement Clone(IFormation formation)`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.Clone(formation);
```

### DeepCopyFrom
`public void DeepCopyFrom(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.DeepCopyFrom(arrangement);
```

### GetPlayerUnit
`public IFormationUnit GetPlayerUnit()`

**Purpose:** Reads and returns the `player unit` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetPlayerUnit();
```

### GetAllUnits
`public MBReadOnlyList<IFormationUnit> GetAllUnits()`

**Purpose:** Reads and returns the `all units` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetAllUnits();
```

### GetAllUnits
`public void GetAllUnits(in MBList<IFormationUnit> allUnitsListToBeFilledIn)`

**Purpose:** Reads and returns the `all units` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.GetAllUnits(allUnitsListToBeFilledIn);
```

### GetUnpositionedUnits
`public MBList<IFormationUnit> GetUnpositionedUnits()`

**Purpose:** Reads and returns the `unpositioned units` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnpositionedUnits();
```

### AddUnit
`public bool AddUnit(IFormationUnit unit)`

**Purpose:** Adds `unit` to the current collection or state.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.AddUnit(unit);
```

### RemoveUnit
`public void RemoveUnit(IFormationUnit unit)`

**Purpose:** Removes `unit` from the current collection or state.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.RemoveUnit(unit);
```

### GetUnit
`public IFormationUnit GetUnit(int fileIndex, int rankIndex)`

**Purpose:** Reads and returns the `unit` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnit(0, 0);
```

### OnBatchRemoveStart
`public void OnBatchRemoveStart()`

**Purpose:** Invoked when the `batch remove start` event is raised.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.OnBatchRemoveStart();
```

### OnBatchRemoveEnd
`public void OnBatchRemoveEnd()`

**Purpose:** Invoked when the `batch remove end` event is raised.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.OnBatchRemoveEnd();
```

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)`

**Purpose:** Reads and returns the `local position of unit or default` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalPositionOfUnitOrDefault(0);
```

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)`

**Purpose:** Reads and returns the `local direction of unit or default` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalDirectionOfUnitOrDefault(0);
```

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)`

**Purpose:** Reads and returns the `world position of unit or default` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetWorldPositionOfUnitOrDefault(0);
```

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Reads and returns the `local position of unit or default` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalPositionOfUnitOrDefault(unit);
```

### GetLocalPositionOfUnitOrDefaultWithAdjustment
`public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)`

**Purpose:** Reads and returns the `local position of unit or default with adjustment` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalPositionOfUnitOrDefaultWithAdjustment(unit, 0);
```

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Reads and returns the `world position of unit or default` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetWorldPositionOfUnitOrDefault(unit);
```

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Reads and returns the `local direction of unit or default` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalDirectionOfUnitOrDefault(unit);
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**Purpose:** Reads and returns the `units to pop` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitsToPop(0);
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count, Vec3 targetPosition)`

**Purpose:** Reads and returns the `units to pop` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitsToPop(0, targetPosition);
```

### GetUnitsToPopWithCondition
`public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool> currentCondition)`

**Purpose:** Reads and returns the `units to pop with condition` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitsToPopWithCondition(0, func<IFormationUnit, false);
```

### SwitchUnitLocations
`public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.SwitchUnitLocations(firstUnit, secondUnit);
```

### SwitchUnitLocationsWithUnpositionedUnit
`public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.SwitchUnitLocationsWithUnpositionedUnit(firstUnit, secondUnit);
```

### SwitchUnitLocationsWithBackMostUnit
`public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.SwitchUnitLocationsWithBackMostUnit(unit);
```

### GetUnitsDistanceToFrontLine
`public float GetUnitsDistanceToFrontLine(IFormationUnit unit)`

**Purpose:** Reads and returns the `units distance to front line` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitsDistanceToFrontLine(unit);
```

### GetLocalDirectionOfRelativeFormationLocation
`public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**Purpose:** Reads and returns the `local direction of relative formation location` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalDirectionOfRelativeFormationLocation(unit);
```

### GetLocalWallDirectionOfRelativeFormationLocation
`public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**Purpose:** Reads and returns the `local wall direction of relative formation location` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalWallDirectionOfRelativeFormationLocation(unit);
```

### GetUnavailableUnitPositions
`public IEnumerable<Vec2> GetUnavailableUnitPositions()`

**Purpose:** Reads and returns the `unavailable unit positions` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnavailableUnitPositions();
```

### GetOccupationWidth
`public float GetOccupationWidth(int unitCount)`

**Purpose:** Reads and returns the `occupation width` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetOccupationWidth(0);
```

### CreateNewPosition
`public Vec2? CreateNewPosition(int unitIndex)`

**Purpose:** Constructs a new `new position` entity and returns it to the caller.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.CreateNewPosition(0);
```

### InvalidateCacheOfUnitAux
`public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.InvalidateCacheOfUnitAux(roundedLocalPosition);
```

### BeforeFormationFrameChange
`public void BeforeFormationFrameChange()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.BeforeFormationFrameChange();
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)`

**Purpose:** Invoked when the `formation frame changed` event is raised.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.OnFormationFrameChanged(false);
```

### OnUnitLostMount
`public void OnUnitLostMount(IFormationUnit unit)`

**Purpose:** Invoked when the `unit lost mount` event is raised.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.OnUnitLostMount(unit);
```

### IsTurnBackwardsNecessary
`public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)`

**Purpose:** Determines whether the current object is in the `turn backwards necessary` state or condition.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.IsTurnBackwardsNecessary(previousPosition, newPosition, previousDirection, false, newDirection);
```

### TurnBackwards
`public void TurnBackwards()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.TurnBackwards();
```

### OnFormationDispersed
`public void OnFormationDispersed()`

**Purpose:** Invoked when the `formation dispersed` event is raised.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.OnFormationDispersed();
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.Reset();
```

### RearrangeFrom
`public virtual void RearrangeFrom(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.RearrangeFrom(arrangement);
```

### RearrangeTo
`public virtual void RearrangeTo(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.RearrangeTo(arrangement);
```

### RearrangeTransferUnits
`public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.RearrangeTransferUnits(arrangement);
```

### FormFromWidth
`public void FormFromWidth(float width)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.FormFromWidth(0);
```

### GetNeighborUnitOfLeftSide
`public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)`

**Purpose:** Reads and returns the `neighbor unit of left side` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetNeighborUnitOfLeftSide(unit);
```

### GetNeighborUnitOfRightSide
`public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)`

**Purpose:** Reads and returns the `neighbor unit of right side` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetNeighborUnitOfRightSide(unit);
```

### ReserveMiddleFrontUnitPosition
`public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.ReserveMiddleFrontUnitPosition(vanguard);
```

### ReleaseMiddleFrontUnitPosition
`public void ReleaseMiddleFrontUnitPosition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.ReleaseMiddleFrontUnitPosition();
```

### GetLocalPositionOfReservedUnitPosition
`public Vec2 GetLocalPositionOfReservedUnitPosition()`

**Purpose:** Reads and returns the `local position of reserved unit position` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalPositionOfReservedUnitPosition();
```

### OnTickOccasionallyOfUnit
`public void OnTickOccasionallyOfUnit(IFormationUnit unit, bool arrangementChangeAllowed)`

**Purpose:** Invoked when the `tick occasionally of unit` event is raised.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.OnTickOccasionallyOfUnit(unit, false);
```

### GetDirectionChangeTendencyOfUnit
`public float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)`

**Purpose:** Reads and returns the `direction change tendency of unit` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetDirectionChangeTendencyOfUnit(unit);
```

### UpdateLocalPositionErrors
`public void UpdateLocalPositionErrors(bool recalculateErrors)`

**Purpose:** Recalculates and stores the latest representation of `local position errors`.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
columnFormation.UpdateLocalPositionErrors(false);
```

### GetUnitPositionsOnVanguardFileIndex
`public List<Vec2> GetUnitPositionsOnVanguardFileIndex()`

**Purpose:** Reads and returns the `unit positions on vanguard file index` value held by the current object.

```csharp
// Obtain an instance of ColumnFormation from the subsystem API first
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitPositionsOnVanguardFileIndex();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ColumnFormation columnFormation = ...;
columnFormation.Clone(formation);
```

## See Also

- [Area Index](../)