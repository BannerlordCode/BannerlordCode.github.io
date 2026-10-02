---
title: "ColumnFormation"
description: "Auto-generated class reference for ColumnFormation."
---
# ColumnFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ColumnFormation : IFormationArrangement `
**Base:** IFormationArrangement
**Source:** TaleWorlds.MountAndBlade/ColumnFormation.cs

## Overview

Auto-generated stub for `ColumnFormation`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Clone
`public IFormationArrangement Clone(IFormation formation)`

### DeepCopyFrom
`public void DeepCopyFrom(IFormationArrangement arrangement)`

### GetPlayerUnit
`public IFormationUnit GetPlayerUnit()`

### GetAllUnits
`public MBReadOnlyList<IFormationUnit> GetAllUnits()`

### GetUnpositionedUnits
`public MBList<IFormationUnit> GetUnpositionedUnits()`

### AddUnit
`public bool AddUnit(IFormationUnit unit)`

### RemoveUnit
`public void RemoveUnit(IFormationUnit unit)`

### GetUnit
`public IFormationUnit GetUnit(int fileIndex,int rankIndex)`

### OnBatchRemoveStart
`public void OnBatchRemoveStart()`

### OnBatchRemoveEnd
`public void OnBatchRemoveEnd()`

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)`

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)`

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)`

### GetLocalPositionOfUnitOrDefaultWithAdjustment
`public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit,float distanceBetweenAgentsAdjustment)`

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

### GetUnitsToPopWithCondition
`public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count,Func<IFormationUnit,bool> currentCondition)`

### SwitchUnitLocations
`public void SwitchUnitLocations(IFormationUnit firstUnit,IFormationUnit secondUnit)`

### SwitchUnitLocationsWithUnpositionedUnit
`public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit,IFormationUnit secondUnit)`

### SwitchUnitLocationsWithBackMostUnit
`public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)`

### GetUnitsDistanceToFrontLine
`public float GetUnitsDistanceToFrontLine(IFormationUnit unit)`

### GetLocalDirectionOfRelativeFormationLocation
`public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)`

### GetLocalWallDirectionOfRelativeFormationLocation
`public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)`

### GetUnavailableUnitPositions
`public IEnumerable<Vec2> GetUnavailableUnitPositions()`

### GetOccupationWidth
`public float GetOccupationWidth(int unitCount)`

### CreateNewPosition
`public Vec2? CreateNewPosition(int unitIndex)`

### InvalidateCacheOfUnitAux
`public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)`

### BeforeFormationFrameChange
`public void BeforeFormationFrameChange()`

### OnFormationFrameChanged
`public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)`

### OnUnitLostMount
`public void OnUnitLostMount(IFormationUnit unit)`

### IsTurnBackwardsNecessary
`public bool IsTurnBackwardsNecessary(Vec2 previousPosition,WorldPosition? newPosition,Vec2 previousDirection,bool hasNewDirection,Vec2? newDirection)`

### TurnBackwards
`public void TurnBackwards()`

### OnFormationDispersed
`public void OnFormationDispersed()`

### Reset
`public void Reset()`

### RearrangeFrom
`public virtual void RearrangeFrom(IFormationArrangement arrangement)`

### RearrangeTo
`public virtual void RearrangeTo(IFormationArrangement arrangement)`

### RearrangeTransferUnits
`public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)`

### GetUnitCountWithOverride
`protected int GetUnitCountWithOverride()`

### FormFromWidth
`public void FormFromWidth(float width)`

### GetNeighborUnitOfLeftSide
`public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)`

### GetNeighborUnitOfRightSide
`public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)`

### ReserveMiddleFrontUnitPosition
`public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)`

### ReleaseMiddleFrontUnitPosition
`public void ReleaseMiddleFrontUnitPosition()`

### GetLocalPositionOfReservedUnitPosition
`public Vec2 GetLocalPositionOfReservedUnitPosition()`

### OnTickOccasionallyOfUnit
`public void OnTickOccasionallyOfUnit(IFormationUnit unit,bool arrangementChangeAllowed)`

### OnTickOccasionally
`public void OnTickOccasionally()`

### GetDirectionChangeTendencyOfUnit
`public float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)`

### UpdateLocalPositionErrors
`public void UpdateLocalPositionErrors(bool recalculateErrors)`

### GetUnitPositionsOnVanguardFileIndex
`public List<Vec2> GetUnitPositionsOnVanguardFileIndex()`

## See Also

- [Section index](../)
