---
title: "IFormationArrangement"
description: "IFormationArrangement：TaleWorlds.MountAndBlade 的 public 接口；公开成员 62 个（方法 46、属性 14、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/IFormationArrangement.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IFormationArrangement

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IFormationArrangement`
**File:** `TaleWorlds.MountAndBlade/IFormationArrangement.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

IFormationArrangement 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IFormationArrangement.cs。它是一个 public 接口，继承链为 IFormationArrangement。public/protected 成员共 62 个：46 方法、14 属性、2 事件。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IFormationArrangement 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 IFormationArrangement。成员构成以方法为主（方法 46/62，属性 14/62），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IFormationArrangement.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Width` | `float Width` | 属性 |
| `Depth` | `float Depth` | 属性 |
| `FlankWidth` | `float FlankWidth` | 属性 |
| `RankDepth` | `float RankDepth` | 属性 |
| `MinimumWidth` | `float MinimumWidth` | 属性 |
| `MaximumWidth` | `float MaximumWidth` | 属性 |
| `MinimumFlankWidth` | `float MinimumFlankWidth` | 属性 |
| `IsLoose` | `bool? IsLoose` | 属性 |
| `IntervalMultiplier` | `float IntervalMultiplier` | 属性 |
| `DistanceMultiplier` | `float DistanceMultiplier` | 属性 |
| `GetPlayerUnit` | `IFormationUnit GetPlayerUnit();` | 方法 |
| `MBReadOnlyList` | `MBReadOnlyList<IFormationUnit>GetAllUnits();` | 方法 |
| `GetAllUnits` | `void GetAllUnits(in MBList<IFormationUnit>allUnitsListToBeFilledIn);` | 方法 |
| `MBList` | `MBList<IFormationUnit>GetUnpositionedUnits();` | 方法 |
| `UnitCount` | `int UnitCount` | 属性 |
| `RankCount` | `int RankCount` | 属性 |
| `PositionedUnitCount` | `int PositionedUnitCount` | 属性 |
| `AddUnit` | `bool AddUnit(IFormationUnit unit);` | 方法 |
| `RemoveUnit` | `void RemoveUnit(IFormationUnit unit);` | 方法 |
| `GetUnit` | `IFormationUnit GetUnit(int fileIndex, int rankIndex);` | 方法 |
| `OnBatchRemoveStart` | `void OnBatchRemoveStart();` | 方法 |
| `OnBatchRemoveEnd` | `void OnBatchRemoveEnd();` | 方法 |
| `GetLocalPositionOfUnitOrDefault` | `Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex);` | 方法 |
| `GetLocalPositionOfUnitOrDefault` | `Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit);` | 方法 |
| `GetLocalPositionOfUnitOrDefaultWithAdjustment` | `Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment);` | 方法 |
| `GetLocalDirectionOfUnitOrDefault` | `Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex);` | 方法 |
| `GetLocalDirectionOfUnitOrDefault` | `Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit);` | 方法 |
| `GetWorldPositionOfUnitOrDefault` | `WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex);` | 方法 |
| `GetWorldPositionOfUnitOrDefault` | `WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit);` | 方法 |
| `List` | `List<IFormationUnit>GetUnitsToPop(int count);` | 方法 |
| `List` | `List<IFormationUnit>GetUnitsToPop(int count, Vec3 targetPosition);` | 方法 |
| `IEnumerable` | `IEnumerable<IFormationUnit>GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool>conditionFunction);` | 方法 |
| `SwitchUnitLocations` | `void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit);` | 方法 |
| `SwitchUnitLocationsWithUnpositionedUnit` | `void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit);` | 方法 |
| `SwitchUnitLocationsWithBackMostUnit` | `void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit);` | 方法 |
| `GetNeighborUnitOfLeftSide` | `IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit);` | 方法 |
| `GetNeighborUnitOfRightSide` | `IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit);` | 方法 |
| `GetLocalWallDirectionOfRelativeFormationLocation` | `Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit);` | 方法 |
| `IEnumerable` | `IEnumerable<Vec2>GetUnavailableUnitPositions();` | 方法 |
| `GetOccupationWidth` | `float GetOccupationWidth(int unitCount);` | 方法 |
| `CreateNewPosition` | `Vec2? CreateNewPosition(int unitIndex);` | 方法 |
| `BeforeFormationFrameChange` | `void BeforeFormationFrameChange();` | 方法 |
| `OnFormationFrameChanged` | `void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false);` | 方法 |
| `IsTurnBackwardsNecessary` | `bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection);` | 方法 |
| `TurnBackwards` | `void TurnBackwards();` | 方法 |
| `OnFormationDispersed` | `void OnFormationDispersed();` | 方法 |
| `Reset` | `void Reset();` | 方法 |
| `Clone` | `IFormationArrangement Clone(IFormation formation);` | 方法 |
| `DeepCopyFrom` | `void DeepCopyFrom(IFormationArrangement arrangement);` | 方法 |
| `RearrangeTo` | `void RearrangeTo(IFormationArrangement arrangement);` | 方法 |
| `RearrangeFrom` | `void RearrangeFrom(IFormationArrangement arrangement);` | 方法 |
| `RearrangeTransferUnits` | `void RearrangeTransferUnits(IFormationArrangement arrangement);` | 方法 |
| `OnWidthChanged;` | `event Action OnWidthChanged;` | 事件 |
| `OnShapeChanged;` | `event Action OnShapeChanged;` | 事件 |
| `ReserveMiddleFrontUnitPosition` | `void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard);` | 方法 |
| `ReleaseMiddleFrontUnitPosition` | `void ReleaseMiddleFrontUnitPosition();` | 方法 |
| `GetLocalPositionOfReservedUnitPosition` | `Vec2 GetLocalPositionOfReservedUnitPosition();` | 方法 |
| `OnUnitLostMount` | `void OnUnitLostMount(IFormationUnit unit);` | 方法 |
| `GetDirectionChangeTendencyOfUnit` | `float GetDirectionChangeTendencyOfUnit(IFormationUnit unit);` | 方法 |
| `UpdateLocalPositionErrors` | `void UpdateLocalPositionErrors(bool recalculateErrors = true);` | 方法 |
| `OnTickOccasionally` | `void OnTickOccasionally();` | 方法 |
| `AreLocalPositionsDirty` | `bool AreLocalPositionsDirty` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
