---
title: "ColumnFormation"
description: "ColumnFormation: a public class in TaleWorlds.MountAndBlade, inheriting IFormationArrangement; 78 exposed members (54 methods, 20 properties, 1 fields). Source: TaleWorlds.MountAndBlade/ColumnFormation.cs."
---
# ColumnFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ColumnFormation : IFormationArrangement`
**File:** `TaleWorlds.MountAndBlade/ColumnFormation.cs`

## Overview

ColumnFormation lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ColumnFormation.cs. It is a public class, implementing/inheriting IFormationArrangement; the inheritance chain is ColumnFormation → IFormationArrangement. It exposes 78 public/protected members: 54 methods, 20 properties, 1 fields, 2 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ColumnFormation is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain ColumnFormation → IFormationArrangement. The surface is method-led (methods 54/78, properties 20/78), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ColumnFormation.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Vanguard` | `public IFormationUnit Vanguard` | property |
| `ColumnCount` | `public int ColumnCount` | property |
| `FileCount` | `protected int FileCount` | property |
| `RankCount` | `public int RankCount` | property |
| `VanguardFileIndex` | `public int VanguardFileIndex` | property |
| `Distance` | `protected float Distance` | property |
| `DistanceMultiplier` | `public float DistanceMultiplier` | property |
| `Interval` | `protected float Interval` | property |
| `IntervalMultiplier` | `public float IntervalMultiplier` | property |
| `ColumnFormation` | `public ColumnFormation(IFormation ownerFormation, IFormationUnit vanguard = null, int columnCount = 1)` | constructor |
| `Clone` | `public IFormationArrangement Clone(IFormation formation)` | method |
| `DeepCopyFrom` | `public void DeepCopyFrom(IFormationArrangement arrangement)` | method |
| `Width` | `public float Width` | property |
| `FlankWidth` | `public float FlankWidth` | property |
| `List` | `public List<Vec2>UnitPositionsOnVanguardFileIndex` | property |
| `Depth` | `public float Depth` | property |
| `RankDepth` | `public float RankDepth` | property |
| `MinimumWidth` | `public float MinimumWidth` | property |
| `GetPlayerUnit` | `public IFormationUnit GetPlayerUnit()` | method |
| `MaximumWidth` | `public float MaximumWidth` | property |
| `MinimumFlankWidth` | `public float MinimumFlankWidth` | property |
| `MBReadOnlyList` | `public MBReadOnlyList<IFormationUnit>GetAllUnits()` | method |
| `GetAllUnits` | `public void GetAllUnits(in MBList<IFormationUnit>allUnitsListToBeFilledIn)` | method |
| `MBList` | `public MBList<IFormationUnit>GetUnpositionedUnits()` | method |
| `IsLoose` | `public bool? IsLoose` | property |
| `AddUnit` | `public bool AddUnit(IFormationUnit unit)` | method |
| `RemoveUnit` | `public void RemoveUnit(IFormationUnit unit)` | method |
| `GetUnit` | `public IFormationUnit GetUnit(int fileIndex, int rankIndex)` | method |
| `OnBatchRemoveStart` | `public void OnBatchRemoveStart()` | method |
| `OnBatchRemoveEnd` | `public void OnBatchRemoveEnd()` | method |
| `GetLocalPositionOfUnitOrDefault` | `public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)` | method |
| `GetLocalDirectionOfUnitOrDefault` | `public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)` | method |
| `GetWorldPositionOfUnitOrDefault` | `public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)` | method |
| `GetLocalPositionOfUnitOrDefault` | `public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)` | method |
| `GetLocalPositionOfUnitOrDefaultWithAdjustment` | `public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)` | method |
| `GetWorldPositionOfUnitOrDefault` | `public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)` | method |
| `GetLocalDirectionOfUnitOrDefault` | `public Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)` | method |
| `List` | `public List<IFormationUnit>GetUnitsToPop(int count)` | method |
| `List` | `public List<IFormationUnit>GetUnitsToPop(int count, Vec3 targetPosition)` | method |
| `IEnumerable` | `public IEnumerable<IFormationUnit>GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool>currentCondition)` | method |
| `SwitchUnitLocations` | `public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)` | method |
| `SwitchUnitLocationsWithUnpositionedUnit` | `public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)` | method |
| `SwitchUnitLocationsWithBackMostUnit` | `public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)` | method |
| `GetUnitsDistanceToFrontLine` | `public float GetUnitsDistanceToFrontLine(IFormationUnit unit)` | method |
| `GetLocalDirectionOfRelativeFormationLocation` | `public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)` | method |
| `GetLocalWallDirectionOfRelativeFormationLocation` | `public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)` | method |
| `IEnumerable` | `public IEnumerable<Vec2>GetUnavailableUnitPositions()` | method |
| `GetOccupationWidth` | `public float GetOccupationWidth(int unitCount)` | method |
| `CreateNewPosition` | `public Vec2? CreateNewPosition(int unitIndex)` | method |
| `InvalidateCacheOfUnitAux` | `public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)` | method |
| `BeforeFormationFrameChange` | `public void BeforeFormationFrameChange()` | method |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)` | method |
| `OnUnitLostMount` | `public void OnUnitLostMount(IFormationUnit unit)` | method |
| `IsTurnBackwardsNecessary` | `public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)` | method |
| `TurnBackwards` | `public void TurnBackwards()` | method |
| `OnFormationDispersed` | `public void OnFormationDispersed()` | method |
| `Reset` | `public void Reset()` | method |
| `OnWidthChanged;` | `public event Action OnWidthChanged;` | event |
| `OnShapeChanged;` | `public event Action OnShapeChanged;` | event |
| `RearrangeFrom` | `public virtual void RearrangeFrom(IFormationArrangement arrangement)` | method |
| `RearrangeTo` | `public virtual void RearrangeTo(IFormationArrangement arrangement)` | method |
| `RearrangeTransferUnits` | `public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)` | method |
| `UnitCount` | `public int UnitCount` | property |
| `PositionedUnitCount` | `public int PositionedUnitCount` | property |
| `GetUnitCountWithOverride` | `protected int GetUnitCountWithOverride()` | method |
| `FormFromWidth` | `public void FormFromWidth(float width)` | method |
| `GetNeighborUnitOfLeftSide` | `public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)` | method |
| `GetNeighborUnitOfRightSide` | `public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)` | method |
| `ReserveMiddleFrontUnitPosition` | `public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)` | method |
| `ReleaseMiddleFrontUnitPosition` | `public void ReleaseMiddleFrontUnitPosition()` | method |
| `GetLocalPositionOfReservedUnitPosition` | `public Vec2 GetLocalPositionOfReservedUnitPosition()` | method |
| `OnTickOccasionallyOfUnit` | `public void OnTickOccasionallyOfUnit(IFormationUnit unit, bool arrangementChangeAllowed)` | method |
| `OnTickOccasionally` | `public void OnTickOccasionally()` | method |
| `GetDirectionChangeTendencyOfUnit` | `public float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)` | method |
| `IEnumerable` | `public IEnumerable<T>GetUnitsAtVanguardFile<T>() where T : IFormationUnit` | method |
| `UpdateLocalPositionErrors` | `public void UpdateLocalPositionErrors(bool recalculateErrors)` | method |
| `List` | `public List<Vec2>GetUnitPositionsOnVanguardFileIndex()` | method |
| `ArrangementAspectRatio` | `public static readonly int ArrangementAspectRatio` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IFormationArrangement](../IFormationArrangement)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
