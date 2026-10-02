---
title: "IFormationArrangement"
description: "IFormationArrangement: a public interface in TaleWorlds.MountAndBlade; 62 exposed members (46 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade/IFormationArrangement.cs."
---
# IFormationArrangement

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFormationArrangement`
**File:** `TaleWorlds.MountAndBlade/IFormationArrangement.cs`

## Overview

IFormationArrangement lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IFormationArrangement.cs. It is a public interface; the inheritance chain is IFormationArrangement. It exposes 62 public/protected members: 46 methods, 14 properties, 2 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IFormationArrangement is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain IFormationArrangement. The surface is method-led (methods 46/62, properties 14/62), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IFormationArrangement.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Width` | `float Width` | property |
| `Depth` | `float Depth` | property |
| `FlankWidth` | `float FlankWidth` | property |
| `RankDepth` | `float RankDepth` | property |
| `MinimumWidth` | `float MinimumWidth` | property |
| `MaximumWidth` | `float MaximumWidth` | property |
| `MinimumFlankWidth` | `float MinimumFlankWidth` | property |
| `IsLoose` | `bool? IsLoose` | property |
| `IntervalMultiplier` | `float IntervalMultiplier` | property |
| `DistanceMultiplier` | `float DistanceMultiplier` | property |
| `GetPlayerUnit` | `IFormationUnit GetPlayerUnit();` | method |
| `MBReadOnlyList` | `MBReadOnlyList<IFormationUnit>GetAllUnits();` | method |
| `GetAllUnits` | `void GetAllUnits(in MBList<IFormationUnit>allUnitsListToBeFilledIn);` | method |
| `MBList` | `MBList<IFormationUnit>GetUnpositionedUnits();` | method |
| `UnitCount` | `int UnitCount` | property |
| `RankCount` | `int RankCount` | property |
| `PositionedUnitCount` | `int PositionedUnitCount` | property |
| `AddUnit` | `bool AddUnit(IFormationUnit unit);` | method |
| `RemoveUnit` | `void RemoveUnit(IFormationUnit unit);` | method |
| `GetUnit` | `IFormationUnit GetUnit(int fileIndex, int rankIndex);` | method |
| `OnBatchRemoveStart` | `void OnBatchRemoveStart();` | method |
| `OnBatchRemoveEnd` | `void OnBatchRemoveEnd();` | method |
| `GetLocalPositionOfUnitOrDefault` | `Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex);` | method |
| `GetLocalPositionOfUnitOrDefault` | `Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit);` | method |
| `GetLocalPositionOfUnitOrDefaultWithAdjustment` | `Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment);` | method |
| `GetLocalDirectionOfUnitOrDefault` | `Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex);` | method |
| `GetLocalDirectionOfUnitOrDefault` | `Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit);` | method |
| `GetWorldPositionOfUnitOrDefault` | `WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex);` | method |
| `GetWorldPositionOfUnitOrDefault` | `WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit);` | method |
| `List` | `List<IFormationUnit>GetUnitsToPop(int count);` | method |
| `List` | `List<IFormationUnit>GetUnitsToPop(int count, Vec3 targetPosition);` | method |
| `IEnumerable` | `IEnumerable<IFormationUnit>GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool>conditionFunction);` | method |
| `SwitchUnitLocations` | `void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit);` | method |
| `SwitchUnitLocationsWithUnpositionedUnit` | `void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit);` | method |
| `SwitchUnitLocationsWithBackMostUnit` | `void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit);` | method |
| `GetNeighborUnitOfLeftSide` | `IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit);` | method |
| `GetNeighborUnitOfRightSide` | `IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit);` | method |
| `GetLocalWallDirectionOfRelativeFormationLocation` | `Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit);` | method |
| `IEnumerable` | `IEnumerable<Vec2>GetUnavailableUnitPositions();` | method |
| `GetOccupationWidth` | `float GetOccupationWidth(int unitCount);` | method |
| `CreateNewPosition` | `Vec2? CreateNewPosition(int unitIndex);` | method |
| `BeforeFormationFrameChange` | `void BeforeFormationFrameChange();` | method |
| `OnFormationFrameChanged` | `void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false);` | method |
| `IsTurnBackwardsNecessary` | `bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection);` | method |
| `TurnBackwards` | `void TurnBackwards();` | method |
| `OnFormationDispersed` | `void OnFormationDispersed();` | method |
| `Reset` | `void Reset();` | method |
| `Clone` | `IFormationArrangement Clone(IFormation formation);` | method |
| `DeepCopyFrom` | `void DeepCopyFrom(IFormationArrangement arrangement);` | method |
| `RearrangeTo` | `void RearrangeTo(IFormationArrangement arrangement);` | method |
| `RearrangeFrom` | `void RearrangeFrom(IFormationArrangement arrangement);` | method |
| `RearrangeTransferUnits` | `void RearrangeTransferUnits(IFormationArrangement arrangement);` | method |
| `OnWidthChanged;` | `event Action OnWidthChanged;` | event |
| `OnShapeChanged;` | `event Action OnShapeChanged;` | event |
| `ReserveMiddleFrontUnitPosition` | `void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard);` | method |
| `ReleaseMiddleFrontUnitPosition` | `void ReleaseMiddleFrontUnitPosition();` | method |
| `GetLocalPositionOfReservedUnitPosition` | `Vec2 GetLocalPositionOfReservedUnitPosition();` | method |
| `OnUnitLostMount` | `void OnUnitLostMount(IFormationUnit unit);` | method |
| `GetDirectionChangeTendencyOfUnit` | `float GetDirectionChangeTendencyOfUnit(IFormationUnit unit);` | method |
| `UpdateLocalPositionErrors` | `void UpdateLocalPositionErrors(bool recalculateErrors = true);` | method |
| `OnTickOccasionally` | `void OnTickOccasionally();` | method |
| `AreLocalPositionsDirty` | `bool AreLocalPositionsDirty` | property |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
