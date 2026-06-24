<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ColumnFormation`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `clone`.

### DeepCopyFrom
`public void DeepCopyFrom(IFormationArrangement arrangement)`

**Purpose:** Handles logic related to `deep copy from`.

### GetPlayerUnit
`public IFormationUnit GetPlayerUnit()`

**Purpose:** Gets the current value of `player unit`.

### GetAllUnits
`public MBReadOnlyList<IFormationUnit> GetAllUnits()`

**Purpose:** Gets the current value of `all units`.

### GetAllUnits
`public void GetAllUnits(in MBList<IFormationUnit> allUnitsListToBeFilledIn)`

**Purpose:** Gets the current value of `all units`.

### GetUnpositionedUnits
`public MBList<IFormationUnit> GetUnpositionedUnits()`

**Purpose:** Gets the current value of `unpositioned units`.

### AddUnit
`public bool AddUnit(IFormationUnit unit)`

**Purpose:** Adds `unit` to the current collection or state.

### RemoveUnit
`public void RemoveUnit(IFormationUnit unit)`

**Purpose:** Removes `unit` from the current collection or state.

### GetUnit
`public IFormationUnit GetUnit(int fileIndex, int rankIndex)`

**Purpose:** Gets the current value of `unit`.

### OnBatchRemoveStart
`public void OnBatchRemoveStart()`

**Purpose:** Called when the `batch remove start` event is raised.

### OnBatchRemoveEnd
`public void OnBatchRemoveEnd()`

**Purpose:** Called when the `batch remove end` event is raised.

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)`

**Purpose:** Gets the current value of `local position of unit or default`.

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)`

**Purpose:** Gets the current value of `local direction of unit or default`.

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)`

**Purpose:** Gets the current value of `world position of unit or default`.

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Gets the current value of `local position of unit or default`.

### GetLocalPositionOfUnitOrDefaultWithAdjustment
`public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)`

**Purpose:** Gets the current value of `local position of unit or default with adjustment`.

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Gets the current value of `world position of unit or default`.

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**Purpose:** Gets the current value of `local direction of unit or default`.

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**Purpose:** Gets the current value of `units to pop`.

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count, Vec3 targetPosition)`

**Purpose:** Gets the current value of `units to pop`.

### GetUnitsToPopWithCondition
`public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool> currentCondition)`

**Purpose:** Gets the current value of `units to pop with condition`.

### SwitchUnitLocations
`public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**Purpose:** Handles logic related to `switch unit locations`.

### SwitchUnitLocationsWithUnpositionedUnit
`public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**Purpose:** Handles logic related to `switch unit locations with unpositioned unit`.

### SwitchUnitLocationsWithBackMostUnit
`public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)`

**Purpose:** Handles logic related to `switch unit locations with back most unit`.

### GetUnitsDistanceToFrontLine
`public float GetUnitsDistanceToFrontLine(IFormationUnit unit)`

**Purpose:** Gets the current value of `units distance to front line`.

### GetLocalDirectionOfRelativeFormationLocation
`public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**Purpose:** Gets the current value of `local direction of relative formation location`.

### GetLocalWallDirectionOfRelativeFormationLocation
`public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**Purpose:** Gets the current value of `local wall direction of relative formation location`.

### GetUnavailableUnitPositions
`public IEnumerable<Vec2> GetUnavailableUnitPositions()`

**Purpose:** Gets the current value of `unavailable unit positions`.

### GetOccupationWidth
`public float GetOccupationWidth(int unitCount)`

**Purpose:** Gets the current value of `occupation width`.

### CreateNewPosition
`public Vec2? CreateNewPosition(int unitIndex)`

**Purpose:** Creates a new `new position` instance or object.

### InvalidateCacheOfUnitAux
`public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)`

**Purpose:** Handles logic related to `invalidate cache of unit aux`.

### BeforeFormationFrameChange
`public void BeforeFormationFrameChange()`

**Purpose:** Handles logic related to `before formation frame change`.

### OnFormationFrameChanged
`public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)`

**Purpose:** Called when the `formation frame changed` event is raised.

### OnUnitLostMount
`public void OnUnitLostMount(IFormationUnit unit)`

**Purpose:** Called when the `unit lost mount` event is raised.

### IsTurnBackwardsNecessary
`public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)`

**Purpose:** Handles logic related to `is turn backwards necessary`.

### TurnBackwards
`public void TurnBackwards()`

**Purpose:** Handles logic related to `turn backwards`.

### OnFormationDispersed
`public void OnFormationDispersed()`

**Purpose:** Called when the `formation dispersed` event is raised.

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### RearrangeFrom
`public virtual void RearrangeFrom(IFormationArrangement arrangement)`

**Purpose:** Handles logic related to `rearrange from`.

### RearrangeTo
`public virtual void RearrangeTo(IFormationArrangement arrangement)`

**Purpose:** Handles logic related to `rearrange to`.

### RearrangeTransferUnits
`public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)`

**Purpose:** Handles logic related to `rearrange transfer units`.

### FormFromWidth
`public void FormFromWidth(float width)`

**Purpose:** Handles logic related to `form from width`.

### GetNeighborUnitOfLeftSide
`public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)`

**Purpose:** Gets the current value of `neighbor unit of left side`.

### GetNeighborUnitOfRightSide
`public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)`

**Purpose:** Gets the current value of `neighbor unit of right side`.

### ReserveMiddleFrontUnitPosition
`public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)`

**Purpose:** Handles logic related to `reserve middle front unit position`.

### ReleaseMiddleFrontUnitPosition
`public void ReleaseMiddleFrontUnitPosition()`

**Purpose:** Handles logic related to `release middle front unit position`.

### GetLocalPositionOfReservedUnitPosition
`public Vec2 GetLocalPositionOfReservedUnitPosition()`

**Purpose:** Gets the current value of `local position of reserved unit position`.

### OnTickOccasionallyOfUnit
`public void OnTickOccasionallyOfUnit(IFormationUnit unit, bool arrangementChangeAllowed)`

**Purpose:** Called when the `tick occasionally of unit` event is raised.

### GetDirectionChangeTendencyOfUnit
`public float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)`

**Purpose:** Gets the current value of `direction change tendency of unit`.

### UpdateLocalPositionErrors
`public void UpdateLocalPositionErrors(bool recalculateErrors)`

**Purpose:** Updates the state or data of `local position errors`.

### GetUnitPositionsOnVanguardFileIndex
`public List<Vec2> GetUnitPositionsOnVanguardFileIndex()`

**Purpose:** Gets the current value of `unit positions on vanguard file index`.

## Usage Example

```csharp
var value = new ColumnFormation();
value.Clone(formation);
```

## See Also

- [Complete Class Catalog](../catalog)