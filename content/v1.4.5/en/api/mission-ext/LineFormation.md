---
title: "LineFormation"
description: "Auto-generated class reference for LineFormation."
---
# LineFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LineFormation : IFormationArrangement`
**Base:** `IFormationArrangement`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/LineFormation.cs`

## Overview

`LineFormation` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AreLocalPositionsDirty` | `public bool AreLocalPositionsDirty { get; set; }` |
| `Width` | `public virtual float Width { get; set; }` |
| `FlankWidth` | `public float FlankWidth { get; set; }` |
| `MaximumWidth` | `public virtual float MaximumWidth { get; }` |
| `IsStaggered` | `public bool IsStaggered { get; set; }` |
| `PostponeReconstructUnitsFromUnits2D` | `public bool PostponeReconstructUnitsFromUnits2D { get; set; }` |

## Key Methods

### GetFileCountFromWidth
`public int GetFileCountFromWidth(float width)`

**Purpose:** Reads and returns the `file count from width` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetFileCountFromWidth(0);
```

### Clone
`public virtual IFormationArrangement Clone(IFormation formation)`

**Purpose:** Duplicates the current object's state and returns a new instance.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.Clone(formation);
```

### DeepCopyFrom
`public virtual void DeepCopyFrom(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.DeepCopyFrom(arrangement);
```

### Reset
`public void Reset()`

**Purpose:** Returns the current object to its default or initial condition.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.Reset();
```

### IsUnitPositionAvailable
`public bool IsUnitPositionAvailable(int fileIndex, int rankIndex)`

**Purpose:** Determines whether the current object is in the `unit position available` state or condition.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.IsUnitPositionAvailable(0, 0);
```

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)`

**Purpose:** Reads and returns the `local position of unit or default` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalPositionOfUnitOrDefault(0);
```

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)`

**Purpose:** Reads and returns the `local direction of unit or default` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalDirectionOfUnitOrDefault(0);
```

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)`

**Purpose:** Reads and returns the `world position of unit or default` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetWorldPositionOfUnitOrDefault(0);
```

### GetUnavailableUnitPositions
`public IEnumerable<Vec2> GetUnavailableUnitPositions()`

**Purpose:** Reads and returns the `unavailable unit positions` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetUnavailableUnitPositions();
```

### AddUnit
`public bool AddUnit(IFormationUnit unit)`

**Purpose:** Adds `unit` to the current collection or state.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.AddUnit(unit);
```

### RemoveUnit
`public void RemoveUnit(IFormationUnit unit)`

**Purpose:** Removes `unit` from the current collection or state.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.RemoveUnit(unit);
```

### GetUnit
`public IFormationUnit GetUnit(int fileIndex, int rankIndex)`

**Purpose:** Reads and returns the `unit` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetUnit(0, 0);
```

### OnBatchRemoveStart
`public void OnBatchRemoveStart()`

**Purpose:** Invoked when the `batch remove start` event is raised.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.OnBatchRemoveStart();
```

### OnBatchRemoveEnd
`public void OnBatchRemoveEnd()`

**Purpose:** Invoked when the `batch remove end` event is raised.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.OnBatchRemoveEnd();
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**Purpose:** Reads and returns the `units to pop` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetUnitsToPop(0);
```

### GetUnitsToPopWithCondition
`public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool> currentCondition)`

**Purpose:** Reads and returns the `units to pop with condition` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetUnitsToPopWithCondition(0, func<IFormationUnit, false);
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count, Vec3 targetPosition)`

**Purpose:** Reads and returns the `units to pop` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetUnitsToPop(0, targetPosition);
```

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Reads and returns the `local position of unit or default` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalPositionOfUnitOrDefault(unit);
```

### GetLocalPositionOfUnitOrDefaultWithAdjustment
`public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)`

**Purpose:** Reads and returns the `local position of unit or default with adjustment` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalPositionOfUnitOrDefaultWithAdjustment(unit, 0);
```

### GetLocalDirectionOfUnitOrDefault
`public virtual Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Reads and returns the `local direction of unit or default` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalDirectionOfUnitOrDefault(unit);
```

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Reads and returns the `world position of unit or default` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetWorldPositionOfUnitOrDefault(unit);
```

### GetPlayerUnit
`public IFormationUnit GetPlayerUnit()`

**Purpose:** Reads and returns the `player unit` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetPlayerUnit();
```

### GetAllUnits
`public MBReadOnlyList<IFormationUnit> GetAllUnits()`

**Purpose:** Reads and returns the `all units` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetAllUnits();
```

### GetAllUnits
`public void GetAllUnits(in MBList<IFormationUnit> allUnitsListToBeFilledIn)`

**Purpose:** Reads and returns the `all units` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.GetAllUnits(allUnitsListToBeFilledIn);
```

### GetUnpositionedUnits
`public MBList<IFormationUnit> GetUnpositionedUnits()`

**Purpose:** Reads and returns the `unpositioned units` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetUnpositionedUnits();
```

### GetLocalDirectionOfRelativeFormationLocation
`public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**Purpose:** Reads and returns the `local direction of relative formation location` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalDirectionOfRelativeFormationLocation(unit);
```

### GetLocalWallDirectionOfRelativeFormationLocation
`public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**Purpose:** Reads and returns the `local wall direction of relative formation location` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalWallDirectionOfRelativeFormationLocation(unit);
```

### GetFormationInfo
`public void GetFormationInfo(out int fileCount, out int rankCount)`

**Purpose:** Reads and returns the `formation info` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.GetFormationInfo(fileCount, rankCount);
```

### GetUnitsDistanceToFrontLine
`public float GetUnitsDistanceToFrontLine(IFormationUnit unit)`

**Purpose:** Reads and returns the `units distance to front line` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetUnitsDistanceToFrontLine(unit);
```

### GetNeighborUnitOfLeftSide
`public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)`

**Purpose:** Reads and returns the `neighbor unit of left side` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetNeighborUnitOfLeftSide(unit);
```

### GetNeighborUnitOfRightSide
`public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)`

**Purpose:** Reads and returns the `neighbor unit of right side` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetNeighborUnitOfRightSide(unit);
```

### SwitchUnitLocationsWithUnpositionedUnit
`public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.SwitchUnitLocationsWithUnpositionedUnit(firstUnit, secondUnit);
```

### SwitchUnitLocations
`public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.SwitchUnitLocations(firstUnit, secondUnit);
```

### SwitchUnitLocationsWithBackMostUnit
`public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.SwitchUnitLocationsWithBackMostUnit(unit);
```

### BeforeFormationFrameChange
`public void BeforeFormationFrameChange()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.BeforeFormationFrameChange();
```

### BatchUnitPositionAvailabilities
`public void BatchUnitPositionAvailabilities(bool isUpdatingCachedOrderedLocalPositions = true)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.BatchUnitPositionAvailabilities(false);
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)`

**Purpose:** Invoked when the `formation frame changed` event is raised.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.OnFormationFrameChanged(false);
```

### UpdateLocalPositionErrors
`public void UpdateLocalPositionErrors(bool recalculateErrors)`

**Purpose:** Recalculates and stores the latest representation of `local position errors`.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.UpdateLocalPositionErrors(false);
```

### OnFormationDispersed
`public void OnFormationDispersed()`

**Purpose:** Invoked when the `formation dispersed` event is raised.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.OnFormationDispersed();
```

### OnUnitLostMount
`public void OnUnitLostMount(IFormationUnit unit)`

**Purpose:** Invoked when the `unit lost mount` event is raised.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.OnUnitLostMount(unit);
```

### IsTurnBackwardsNecessary
`public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)`

**Purpose:** Determines whether the current object is in the `turn backwards necessary` state or condition.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.IsTurnBackwardsNecessary(previousPosition, newPosition, previousDirection, false, newDirection);
```

### TurnBackwards
`public virtual void TurnBackwards()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.TurnBackwards();
```

### GetOccupationWidth
`public float GetOccupationWidth(int unitCount)`

**Purpose:** Reads and returns the `occupation width` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetOccupationWidth(0);
```

### InvalidateCacheOfUnitAux
`public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.InvalidateCacheOfUnitAux(roundedLocalPosition);
```

### CreateNewPosition
`public Vec2? CreateNewPosition(int unitIndex)`

**Purpose:** Constructs a new `new position` entity and returns it to the caller.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.CreateNewPosition(0);
```

### RearrangeFrom
`public virtual void RearrangeFrom(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.RearrangeFrom(arrangement);
```

### RearrangeTo
`public virtual void RearrangeTo(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.RearrangeTo(arrangement);
```

### RearrangeTransferUnits
`public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.RearrangeTransferUnits(arrangement);
```

### CalculateWidth
`public static float CalculateWidth(float interval, float unitDiameter, int unitCountOnLine)`

**Purpose:** Calculates the current value or result of `width`.

```csharp
// Static call; no instance required
LineFormation.CalculateWidth(0, 0, 0);
```

### FormFromFlankWidth
`public void FormFromFlankWidth(int unitCountOnLine, bool skipSingleFileChangesForPerformance = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.FormFromFlankWidth(0, false);
```

### ReserveMiddleFrontUnitPosition
`public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.ReserveMiddleFrontUnitPosition(vanguard);
```

### ReleaseMiddleFrontUnitPosition
`public void ReleaseMiddleFrontUnitPosition()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.ReleaseMiddleFrontUnitPosition();
```

### GetLocalPositionOfReservedUnitPosition
`public Vec2 GetLocalPositionOfReservedUnitPosition()`

**Purpose:** Reads and returns the `local position of reserved unit position` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalPositionOfReservedUnitPosition();
```

### OnTickOccasionally
`public void OnTickOccasionally()`

**Purpose:** Invoked when the `tick occasionally` event is raised.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
lineFormation.OnTickOccasionally();
```

### GetDirectionChangeTendencyOfUnit
`public virtual float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)`

**Purpose:** Reads and returns the `direction change tendency of unit` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetDirectionChangeTendencyOfUnit(unit);
```

### GetCachedOrderedAndAvailableUnitPositionIndicesCount
`public int GetCachedOrderedAndAvailableUnitPositionIndicesCount()`

**Purpose:** Reads and returns the `cached ordered and available unit position indices count` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetCachedOrderedAndAvailableUnitPositionIndicesCount();
```

### GetCachedOrderedAndAvailableUnitPositionIndexAt
`public Vec2i GetCachedOrderedAndAvailableUnitPositionIndexAt(int i)`

**Purpose:** Reads and returns the `cached ordered and available unit position index at` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetCachedOrderedAndAvailableUnitPositionIndexAt(0);
```

### GetGlobalPositionAtIndex
`public WorldPosition GetGlobalPositionAtIndex(int indexX, int indexY)`

**Purpose:** Reads and returns the `global position at index` value held by the current object.

```csharp
// Obtain an instance of LineFormation from the subsystem API first
LineFormation lineFormation = ...;
var result = lineFormation.GetGlobalPositionAtIndex(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
LineFormation lineFormation = ...;
lineFormation.GetFileCountFromWidth(0);
```

## See Also

- [Area Index](../)