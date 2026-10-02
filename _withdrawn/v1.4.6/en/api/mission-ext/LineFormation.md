---
title: "LineFormation"
description: "LineFormation: a public class in TaleWorlds.MountAndBlade, inheriting IFormationArrangement; 99 exposed members (72 methods, 20 properties, 3 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/LineFormation.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LineFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class LineFormation : IFormationArrangement`
**File:** `TaleWorlds.MountAndBlade/LineFormation.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LineFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/LineFormation.cs. It is a public class, implementing/inheriting IFormationArrangement; the inheritance chain is LineFormation → IFormationArrangement. It exposes 99 public/protected members: 72 methods, 20 properties, 3 fields, 2 events, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LineFormation lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain LineFormation → IFormationArrangement. The surface is method-led (methods 72/99, properties 20/99), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/LineFormation.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FileCount` | `protected int FileCount` | property |
| `RankCount` | `public int RankCount` | property |
| `AreLocalPositionsDirty` | `public bool AreLocalPositionsDirty` | property |
| `Interval` | `protected float Interval` | property |
| `IntervalMultiplier` | `public virtual float IntervalMultiplier` | property |
| `Distance` | `protected float Distance` | property |
| `DistanceMultiplier` | `public virtual float DistanceMultiplier` | property |
| `UnitDiameter` | `protected float UnitDiameter` | property |
| `GetFileCountFromWidth` | `public int GetFileCountFromWidth(float width)` | method |
| `Width` | `public virtual float Width` | property |
| `Depth` | `public virtual float Depth` | property |
| `FlankWidth` | `public float FlankWidth` | property |
| `RankDepth` | `public float RankDepth` | property |
| `MinimumFlankWidth` | `public float MinimumFlankWidth` | property |
| `MinimumWidth` | `public virtual float MinimumWidth` | property |
| `MaximumWidth` | `public virtual float MaximumWidth` | property |
| `GetUnitCountWithOverride` | `protected int GetUnitCountWithOverride()` | method |
| `IsStaggered` | `public bool IsStaggered` | property |
| `IsLoose` | `public virtual bool? IsLoose` | property |
| `OnWidthChanged;` | `public event Action OnWidthChanged;` | event |
| `OnShapeChanged;` | `public event Action OnShapeChanged;` | event |
| `PostponeReconstructUnitsFromUnits2D` | `public bool PostponeReconstructUnitsFromUnits2D` | property |
| `LineFormation` | `public LineFormation(IFormation ownerFormation, bool isStaggered = true)` | constructor |
| `LineFormation` | `protected LineFormation(IFormation ownerFormation, bool isDeformingOnWidthChange, bool isStaggered = true) : this(ownerFormation, isStaggered)` | constructor |
| `Clone` | `public virtual IFormationArrangement Clone(IFormation formation)` | method |
| `DeepCopyFrom` | `public virtual void DeepCopyFrom(IFormationArrangement arrangement)` | method |
| `Reset` | `public void Reset()` | method |
| `IsUnitPositionRestrained` | `protected virtual bool IsUnitPositionRestrained(int fileIndex, int rankIndex)` | method |
| `MakeRestrainedPositionsUnavailable` | `protected virtual void MakeRestrainedPositionsUnavailable()` | method |
| `GetUnitAt` | `protected IFormationUnit GetUnitAt(int fileIndex, int rankIndex)` | method |
| `IsUnitPositionAvailable` | `public bool IsUnitPositionAvailable(int fileIndex, int rankIndex)` | method |
| `GetLocalPositionOfUnitOrDefault` | `public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)` | method |
| `GetLocalDirectionOfUnitOrDefault` | `public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)` | method |
| `GetWorldPositionOfUnitOrDefault` | `public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)` | method |
| `IEnumerable` | `public IEnumerable<Vec2>GetUnavailableUnitPositions()` | method |
| `AddUnit` | `public bool AddUnit(IFormationUnit unit)` | method |
| `RemoveUnit` | `public void RemoveUnit(IFormationUnit unit)` | method |
| `GetUnit` | `public IFormationUnit GetUnit(int fileIndex, int rankIndex)` | method |
| `OnBatchRemoveStart` | `public void OnBatchRemoveStart()` | method |
| `OnBatchRemoveEnd` | `public void OnBatchRemoveEnd()` | method |
| `List` | `public List<IFormationUnit>GetUnitsToPop(int count)` | method |
| `IEnumerable` | `public IEnumerable<IFormationUnit>GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool>currentCondition)` | method |
| `List` | `public List<IFormationUnit>GetUnitsToPop(int count, Vec3 targetPosition)` | method |
| `TryGetUnitPositionIndexFromLocalPosition` | `protected virtual bool TryGetUnitPositionIndexFromLocalPosition(Vec2 localPosition, out int fileIndex, out int rankIndex)` | method |
| `GetLocalPositionOfUnit` | `protected virtual Vec2 GetLocalPositionOfUnit(int fileIndex, int rankIndex)` | method |
| `GetLocalPositionOfUnitWithAdjustment` | `protected virtual Vec2 GetLocalPositionOfUnitWithAdjustment(int fileIndex, int rankIndex, float distanceBetweenAgentsAdjustment)` | method |
| `GetLocalDirectionOfUnit` | `protected virtual Vec2 GetLocalDirectionOfUnit(int fileIndex, int rankIndex)` | method |
| `GetLocalPositionOfUnitOrDefault` | `public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)` | method |
| `GetLocalPositionOfUnitOrDefaultWithAdjustment` | `public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)` | method |
| `GetLocalDirectionOfUnitOrDefault` | `public virtual Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)` | method |
| `GetWorldPositionOfUnitOrDefault` | `public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)` | method |
| `IsDeepenApplicable` | `protected virtual bool IsDeepenApplicable()` | method |
| `IsNarrowApplicable` | `protected virtual bool IsNarrowApplicable(int amount)` | method |
| `RelocateUnit` | `protected void RelocateUnit(IFormationUnit unit, int fileIndex, int rankIndex)` | method |
| `UnitCount` | `public int UnitCount` | property |
| `PositionedUnitCount` | `public int PositionedUnitCount` | property |
| `GetPlayerUnit` | `public IFormationUnit GetPlayerUnit()` | method |
| `MBReadOnlyList` | `public MBReadOnlyList<IFormationUnit>GetAllUnits()` | method |
| `GetAllUnits` | `public void GetAllUnits(in MBList<IFormationUnit>allUnitsListToBeFilledIn)` | method |
| `MBList` | `public MBList<IFormationUnit>GetUnpositionedUnits()` | method |
| `GetLocalDirectionOfRelativeFormationLocation` | `public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)` | method |
| `GetLocalWallDirectionOfRelativeFormationLocation` | `public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)` | method |
| `GetFormationInfo` | `public void GetFormationInfo(out int fileCount, out int rankCount)` | method |
| `GetUnitsDistanceToFrontLine` | `public float GetUnitsDistanceToFrontLine(IFormationUnit unit)` | method |
| `GetNeighborUnitOfLeftSide` | `public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)` | method |
| `GetNeighborUnitOfRightSide` | `public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)` | method |
| `SwitchUnitLocationsWithUnpositionedUnit` | `public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)` | method |
| `SwitchUnitLocations` | `public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)` | method |
| `SwitchUnitLocationsWithBackMostUnit` | `public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)` | method |
| `BeforeFormationFrameChange` | `public void BeforeFormationFrameChange()` | method |
| `BatchUnitPositionAvailabilities` | `public void BatchUnitPositionAvailabilities(bool isUpdatingCachedOrderedLocalPositions = true)` | method |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)` | method |
| `UpdateLocalPositionErrors` | `public void UpdateLocalPositionErrors(bool recalculateErrors)` | method |
| `OnFormationDispersed` | `public void OnFormationDispersed()` | method |
| `OnUnitLostMount` | `public void OnUnitLostMount(IFormationUnit unit)` | method |
| `IsTurnBackwardsNecessary` | `public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)` | method |
| `TurnBackwards` | `public virtual void TurnBackwards()` | method |
| `GetOccupationWidth` | `public float GetOccupationWidth(int unitCount)` | method |
| `InvalidateCacheOfUnitAux` | `public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)` | method |
| `CreateNewPosition` | `public Vec2? CreateNewPosition(int unitIndex)` | method |
| `RearrangeFrom` | `public virtual void RearrangeFrom(IFormationArrangement arrangement)` | method |
| `RearrangeTo` | `public virtual void RearrangeTo(IFormationArrangement arrangement)` | method |
| `RearrangeTransferUnits` | `public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)` | method |
| `CalculateWidth` | `public static float CalculateWidth(float interval, float unitDiameter, int unitCountOnLine)` | method |
| `FormFromFlankWidth` | `public void FormFromFlankWidth(int unitCountOnLine, bool skipSingleFileChangesForPerformance = false)` | method |
| `ReserveMiddleFrontUnitPosition` | `public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)` | method |
| `ReleaseMiddleFrontUnitPosition` | `public void ReleaseMiddleFrontUnitPosition()` | method |
| `GetLocalPositionOfReservedUnitPosition` | `public Vec2 GetLocalPositionOfReservedUnitPosition()` | method |
| `OnTickOccasionally` | `public void OnTickOccasionally()` | method |
| `UpdateFrontUnitTypeDelegate` | `protected virtual void UpdateFrontUnitTypeDelegate()` | method |
| `GetDirectionChangeTendencyOfUnit` | `public virtual float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)` | method |
| `GetCachedOrderedAndAvailableUnitPositionIndicesCount` | `public int GetCachedOrderedAndAvailableUnitPositionIndicesCount()` | method |
| `GetCachedOrderedAndAvailableUnitPositionIndexAt` | `public Vec2i GetCachedOrderedAndAvailableUnitPositionIndexAt(int i)` | method |
| `GetGlobalPositionAtIndex` | `public WorldPosition GetGlobalPositionAtIndex(int indexX, int indexY)` | method |
| `PreferShieldedUnitsOnFront` | `protected bool PreferShieldedUnitsOnFront(Agent agent)` | method |
| `PreferBracerUnitsOnFront` | `protected bool PreferBracerUnitsOnFront(Agent agent)` | method |
| `UnitPositionAvailabilityValueOfUnprocessed` | `protected const int UnitPositionAvailabilityValueOfUnprocessed` | field |
| `UnitPositionAvailabilityValueOfUnavailable` | `protected const int UnitPositionAvailabilityValueOfUnavailable` | field |
| `UnitPositionAvailabilityValueOfAvailable` | `protected const int UnitPositionAvailabilityValueOfAvailable` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IFormationArrangement](../IFormationArrangement/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
