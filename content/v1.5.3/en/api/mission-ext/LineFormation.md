---
title: "LineFormation"
description: "Auto-generated class reference for LineFormation."
---
# LineFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LineFormation : IFormationArrangement `
**Base:** IFormationArrangement
**Source:** TaleWorlds.MountAndBlade/LineFormation.cs

## Overview

Auto-generated stub for `LineFormation`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetFileCountFromWidth
`public int GetFileCountFromWidth(float width)`

### GetUnitCountWithOverride
`protected int GetUnitCountWithOverride()`

### Clone
`public virtual IFormationArrangement Clone(IFormation formation)`

### DeepCopyFrom
`public virtual void DeepCopyFrom(IFormationArrangement arrangement)`

### Reset
`public void Reset()`

### IsUnitPositionRestrained
`protected virtual bool IsUnitPositionRestrained(int fileIndex,int rankIndex)`

### MakeRestrainedPositionsUnavailable
`protected virtual void MakeRestrainedPositionsUnavailable()`

### GetUnitAt
`protected IFormationUnit GetUnitAt(int fileIndex,int rankIndex)`

### IsUnitPositionAvailable
`public bool IsUnitPositionAvailable(int fileIndex,int rankIndex)`

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)`

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)`

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)`

### GetUnavailableUnitPositions
`public IEnumerable<Vec2> GetUnavailableUnitPositions()`

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

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

### GetUnitsToPopWithCondition
`public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count,Func<IFormationUnit,bool> currentCondition)`

### TryGetUnitPositionIndexFromLocalPosition
`protected virtual bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition,out int fileIndex,out int rankIndex)`

### GetLocalPositionOfUnit
`protected virtual Vec2 GetLocalPositionOfUnit(int fileIndex,int rankIndex)`

### GetLocalPositionOfUnitWithAdjustment
`protected virtual Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex,int rankIndex,float distanceBetweenAgentsAdjustment)`

### GetLocalDirectionOfUnit
`protected virtual Vec2 GetLocalDirectionOfUnit(int fileIndex,int rankIndex)`

### GetLocalPositionOfUnitOrDefaultWithAdjustment
`public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit,float distanceBetweenAgentsAdjustment)`

### IsDeepenApplicable
`protected virtual bool IsDeepenApplicable()`

### IsNarrowApplicable
`protected virtual bool IsNarrowApplicable(int amount)`

### RelocateUnit
`protected void RelocateUnit(IFormationUnit unit,int fileIndex,int rankIndex)`

### GetPlayerUnit
`public IFormationUnit GetPlayerUnit()`

### GetAllUnits
`public MBReadOnlyList<IFormationUnit> GetAllUnits()`

### GetUnpositionedUnits
`public MBList<IFormationUnit> GetUnpositionedUnits()`

### GetLocalDirectionOfRelativeFormationLocation
`public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)`

### GetLocalWallDirectionOfRelativeFormationLocation
`public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)`

### GetFormationInfo
`public void GetFormationInfo(out int fileCount,out int rankCount)`

### GetUnitsDistanceToFrontLine
`public float GetUnitsDistanceToFrontLine(IFormationUnit unit)`

### GetNeighborUnitOfLeftSide
`public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)`

### GetNeighborUnitOfRightSide
`public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)`

### SwitchUnitLocationsWithUnpositionedUnit
`public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit,IFormationUnit secondUnit)`

### SwitchUnitLocations
`public void SwitchUnitLocations(IFormationUnit firstUnit,IFormationUnit secondUnit)`

### SwitchUnitLocationsWithBackMostUnit
`public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)`

### BeforeFormationFrameChange
`public void BeforeFormationFrameChange()`

### BatchUnitPositionAvailabilities
`public void BatchUnitPositionAvailabilities(bool isUpdatingCachedOrderedLocalPositions = true)`

### OnFormationFrameChanged
`public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)`

### UpdateLocalPositionErrors
`public void UpdateLocalPositionErrors(bool recalculateErrors)`

### OnFormationDispersed
`public void OnFormationDispersed()`

### OnUnitLostMount
`public void OnUnitLostMount(IFormationUnit unit)`

### IsTurnBackwardsNecessary
`public bool IsTurnBackwardsNecessary(Vec2 previousPosition,WorldPosition? newPosition,Vec2 previousDirection,bool hasNewDirection,Vec2? newDirection)`

### TurnBackwards
`public virtual void TurnBackwards()`

### GetOccupationWidth
`public float GetOccupationWidth(int unitCount)`

### InvalidateCacheOfUnitAux
`public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)`

### CreateNewPosition
`public Vec2? CreateNewPosition(int unitIndex)`

### RearrangeFrom
`public virtual void RearrangeFrom(IFormationArrangement arrangement)`

### RearrangeTo
`public virtual void RearrangeTo(IFormationArrangement arrangement)`

### RearrangeTransferUnits
`public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)`

### CalculateWidth
`public static float CalculateWidth(float interval,float unitDiameter,int unitCountOnLine)`

### FormFromFlankWidth
`public void FormFromFlankWidth(int unitCountOnLine,bool skipSingleFileChangesForPerformance = false)`

### ReserveMiddleFrontUnitPosition
`public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)`

### ReleaseMiddleFrontUnitPosition
`public void ReleaseMiddleFrontUnitPosition()`

### GetLocalPositionOfReservedUnitPosition
`public Vec2 GetLocalPositionOfReservedUnitPosition()`

### OnTickOccasionally
`public void OnTickOccasionally()`

### UpdateFrontUnitTypeDelegate
`protected virtual void UpdateFrontUnitTypeDelegate()`

### GetDirectionChangeTendencyOfUnit
`public virtual float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)`

### GetCachedOrderedAndAvailableUnitPositionIndicesCount
`public int GetCachedOrderedAndAvailableUnitPositionIndicesCount()`

### GetCachedOrderedAndAvailableUnitPositionIndexAt
`public Vec2i GetCachedOrderedAndAvailableUnitPositionIndexAt(int i)`

### GetGlobalPositionAtIndex
`public WorldPosition GetGlobalPositionAtIndex(int indexX,int indexY)`

### PreferShieldedUnitsOnFront
`protected bool PreferShieldedUnitsOnFront(Agent agent)`

### PreferBracerUnitsOnFront
`protected bool PreferBracerUnitsOnFront(Agent agent)`

## See Also

- [Section index](../)
