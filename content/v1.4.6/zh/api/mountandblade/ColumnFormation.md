---
title: "ColumnFormation"
description: "ColumnFormation：TaleWorlds.MountAndBlade 的 public 类，继承 IFormationArrangement；公开成员 78 个（方法 54、属性 20、字段 1）。源文件 TaleWorlds.MountAndBlade/ColumnFormation.cs。"
---
# ColumnFormation

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ColumnFormation : IFormationArrangement`
**File:** `TaleWorlds.MountAndBlade/ColumnFormation.cs`

## 概述

ColumnFormation 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ColumnFormation.cs。它是一个 public 类，实现/继承 IFormationArrangement，继承链为 ColumnFormation → IFormationArrangement。public/protected 成员共 78 个：54 方法、20 属性、1 字段、2 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ColumnFormation 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ColumnFormation → IFormationArrangement。成员构成以方法为主（方法 54/78，属性 20/78），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ColumnFormation.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Vanguard` | `public IFormationUnit Vanguard` | 属性 |
| `ColumnCount` | `public int ColumnCount` | 属性 |
| `FileCount` | `protected int FileCount` | 属性 |
| `RankCount` | `public int RankCount` | 属性 |
| `VanguardFileIndex` | `public int VanguardFileIndex` | 属性 |
| `Distance` | `protected float Distance` | 属性 |
| `DistanceMultiplier` | `public float DistanceMultiplier` | 属性 |
| `Interval` | `protected float Interval` | 属性 |
| `IntervalMultiplier` | `public float IntervalMultiplier` | 属性 |
| `ColumnFormation` | `public ColumnFormation(IFormation ownerFormation, IFormationUnit vanguard = null, int columnCount = 1)` | 构造函数 |
| `Clone` | `public IFormationArrangement Clone(IFormation formation)` | 方法 |
| `DeepCopyFrom` | `public void DeepCopyFrom(IFormationArrangement arrangement)` | 方法 |
| `Width` | `public float Width` | 属性 |
| `FlankWidth` | `public float FlankWidth` | 属性 |
| `List` | `public List<Vec2>UnitPositionsOnVanguardFileIndex` | 属性 |
| `Depth` | `public float Depth` | 属性 |
| `RankDepth` | `public float RankDepth` | 属性 |
| `MinimumWidth` | `public float MinimumWidth` | 属性 |
| `GetPlayerUnit` | `public IFormationUnit GetPlayerUnit()` | 方法 |
| `MaximumWidth` | `public float MaximumWidth` | 属性 |
| `MinimumFlankWidth` | `public float MinimumFlankWidth` | 属性 |
| `MBReadOnlyList` | `public MBReadOnlyList<IFormationUnit>GetAllUnits()` | 方法 |
| `GetAllUnits` | `public void GetAllUnits(in MBList<IFormationUnit>allUnitsListToBeFilledIn)` | 方法 |
| `MBList` | `public MBList<IFormationUnit>GetUnpositionedUnits()` | 方法 |
| `IsLoose` | `public bool? IsLoose` | 属性 |
| `AddUnit` | `public bool AddUnit(IFormationUnit unit)` | 方法 |
| `RemoveUnit` | `public void RemoveUnit(IFormationUnit unit)` | 方法 |
| `GetUnit` | `public IFormationUnit GetUnit(int fileIndex, int rankIndex)` | 方法 |
| `OnBatchRemoveStart` | `public void OnBatchRemoveStart()` | 方法 |
| `OnBatchRemoveEnd` | `public void OnBatchRemoveEnd()` | 方法 |
| `GetLocalPositionOfUnitOrDefault` | `public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)` | 方法 |
| `GetLocalDirectionOfUnitOrDefault` | `public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)` | 方法 |
| `GetWorldPositionOfUnitOrDefault` | `public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)` | 方法 |
| `GetLocalPositionOfUnitOrDefault` | `public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)` | 方法 |
| `GetLocalPositionOfUnitOrDefaultWithAdjustment` | `public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)` | 方法 |
| `GetWorldPositionOfUnitOrDefault` | `public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)` | 方法 |
| `GetLocalDirectionOfUnitOrDefault` | `public Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)` | 方法 |
| `List` | `public List<IFormationUnit>GetUnitsToPop(int count)` | 方法 |
| `List` | `public List<IFormationUnit>GetUnitsToPop(int count, Vec3 targetPosition)` | 方法 |
| `IEnumerable` | `public IEnumerable<IFormationUnit>GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool>currentCondition)` | 方法 |
| `SwitchUnitLocations` | `public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)` | 方法 |
| `SwitchUnitLocationsWithUnpositionedUnit` | `public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)` | 方法 |
| `SwitchUnitLocationsWithBackMostUnit` | `public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)` | 方法 |
| `GetUnitsDistanceToFrontLine` | `public float GetUnitsDistanceToFrontLine(IFormationUnit unit)` | 方法 |
| `GetLocalDirectionOfRelativeFormationLocation` | `public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)` | 方法 |
| `GetLocalWallDirectionOfRelativeFormationLocation` | `public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)` | 方法 |
| `IEnumerable` | `public IEnumerable<Vec2>GetUnavailableUnitPositions()` | 方法 |
| `GetOccupationWidth` | `public float GetOccupationWidth(int unitCount)` | 方法 |
| `CreateNewPosition` | `public Vec2? CreateNewPosition(int unitIndex)` | 方法 |
| `InvalidateCacheOfUnitAux` | `public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)` | 方法 |
| `BeforeFormationFrameChange` | `public void BeforeFormationFrameChange()` | 方法 |
| `OnFormationFrameChanged` | `public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)` | 方法 |
| `OnUnitLostMount` | `public void OnUnitLostMount(IFormationUnit unit)` | 方法 |
| `IsTurnBackwardsNecessary` | `public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)` | 方法 |
| `TurnBackwards` | `public void TurnBackwards()` | 方法 |
| `OnFormationDispersed` | `public void OnFormationDispersed()` | 方法 |
| `Reset` | `public void Reset()` | 方法 |
| `OnWidthChanged;` | `public event Action OnWidthChanged;` | 事件 |
| `OnShapeChanged;` | `public event Action OnShapeChanged;` | 事件 |
| `RearrangeFrom` | `public virtual void RearrangeFrom(IFormationArrangement arrangement)` | 方法 |
| `RearrangeTo` | `public virtual void RearrangeTo(IFormationArrangement arrangement)` | 方法 |
| `RearrangeTransferUnits` | `public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)` | 方法 |
| `UnitCount` | `public int UnitCount` | 属性 |
| `PositionedUnitCount` | `public int PositionedUnitCount` | 属性 |
| `GetUnitCountWithOverride` | `protected int GetUnitCountWithOverride()` | 方法 |
| `FormFromWidth` | `public void FormFromWidth(float width)` | 方法 |
| `GetNeighborUnitOfLeftSide` | `public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)` | 方法 |
| `GetNeighborUnitOfRightSide` | `public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)` | 方法 |
| `ReserveMiddleFrontUnitPosition` | `public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)` | 方法 |
| `ReleaseMiddleFrontUnitPosition` | `public void ReleaseMiddleFrontUnitPosition()` | 方法 |
| `GetLocalPositionOfReservedUnitPosition` | `public Vec2 GetLocalPositionOfReservedUnitPosition()` | 方法 |
| `OnTickOccasionallyOfUnit` | `public void OnTickOccasionallyOfUnit(IFormationUnit unit, bool arrangementChangeAllowed)` | 方法 |
| `OnTickOccasionally` | `public void OnTickOccasionally()` | 方法 |
| `GetDirectionChangeTendencyOfUnit` | `public float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)` | 方法 |
| `IEnumerable` | `public IEnumerable<T>GetUnitsAtVanguardFile<T>() where T : IFormationUnit` | 方法 |
| `UpdateLocalPositionErrors` | `public void UpdateLocalPositionErrors(bool recalculateErrors)` | 方法 |
| `List` | `public List<Vec2>GetUnitPositionsOnVanguardFileIndex()` | 方法 |
| `ArrangementAspectRatio` | `public static readonly int ArrangementAspectRatio` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 IFormationArrangement](../IFormationArrangement)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
