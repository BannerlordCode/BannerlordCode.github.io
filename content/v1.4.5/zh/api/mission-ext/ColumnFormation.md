---
title: "ColumnFormation"
description: "ColumnFormation 的自动生成类参考。"
---
# ColumnFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ColumnFormation : IFormationArrangement`
**Base:** `IFormationArrangement`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ColumnFormation.cs`

## 概述

`ColumnFormation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Vanguard` | `public IFormationUnit Vanguard { get; }` |
| `ColumnCount` | `public int ColumnCount { get; set; }` |
| `VanguardFileIndex` | `public int VanguardFileIndex { get; }` |
| `Width` | `public float Width { get; set; }` |
| `FlankWidth` | `public float FlankWidth { get; set; }` |
| `UnitPositionsOnVanguardFileIndex` | `public List<Vec2> UnitPositionsOnVanguardFileIndex { get; }` |

## 主要方法

### Clone
`public IFormationArrangement Clone(IFormation formation)`

**用途 / Purpose:** **用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.Clone(formation);
```

### DeepCopyFrom
`public void DeepCopyFrom(IFormationArrangement arrangement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeepCopyFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.DeepCopyFrom(arrangement);
```

### GetPlayerUnit
`public IFormationUnit GetPlayerUnit()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 player unit 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetPlayerUnit();
```

### GetAllUnits
`public MBReadOnlyList<IFormationUnit> GetAllUnits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all units 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetAllUnits();
```

### GetAllUnits
`public void GetAllUnits(in MBList<IFormationUnit> allUnitsListToBeFilledIn)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all units 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.GetAllUnits(allUnitsListToBeFilledIn);
```

### GetUnpositionedUnits
`public MBList<IFormationUnit> GetUnpositionedUnits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unpositioned units 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnpositionedUnits();
```

### AddUnit
`public bool AddUnit(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 将 unit 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.AddUnit(unit);
```

### RemoveUnit
`public void RemoveUnit(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 unit。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.RemoveUnit(unit);
```

### GetUnit
`public IFormationUnit GetUnit(int fileIndex, int rankIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unit 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnit(0, 0);
```

### OnBatchRemoveStart
`public void OnBatchRemoveStart()`

**用途 / Purpose:** **用途 / Purpose:** 在 batch remove start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.OnBatchRemoveStart();
```

### OnBatchRemoveEnd
`public void OnBatchRemoveEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 batch remove end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.OnBatchRemoveEnd();
```

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local position of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalPositionOfUnitOrDefault(0);
```

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local direction of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalDirectionOfUnitOrDefault(0);
```

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 world position of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetWorldPositionOfUnitOrDefault(0);
```

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local position of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalPositionOfUnitOrDefault(unit);
```

### GetLocalPositionOfUnitOrDefaultWithAdjustment
`public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local position of unit or default with adjustment 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalPositionOfUnitOrDefaultWithAdjustment(unit, 0);
```

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 world position of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetWorldPositionOfUnitOrDefault(unit);
```

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local direction of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalDirectionOfUnitOrDefault(unit);
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 units to pop 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitsToPop(0);
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count, Vec3 targetPosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 units to pop 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitsToPop(0, targetPosition);
```

### GetUnitsToPopWithCondition
`public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool> currentCondition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 units to pop with condition 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitsToPopWithCondition(0, func<IFormationUnit, false);
```

### SwitchUnitLocations
`public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SwitchUnitLocations 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.SwitchUnitLocations(firstUnit, secondUnit);
```

### SwitchUnitLocationsWithUnpositionedUnit
`public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SwitchUnitLocationsWithUnpositionedUnit 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.SwitchUnitLocationsWithUnpositionedUnit(firstUnit, secondUnit);
```

### SwitchUnitLocationsWithBackMostUnit
`public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SwitchUnitLocationsWithBackMostUnit 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.SwitchUnitLocationsWithBackMostUnit(unit);
```

### GetUnitsDistanceToFrontLine
`public float GetUnitsDistanceToFrontLine(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 units distance to front line 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitsDistanceToFrontLine(unit);
```

### GetLocalDirectionOfRelativeFormationLocation
`public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local direction of relative formation location 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalDirectionOfRelativeFormationLocation(unit);
```

### GetLocalWallDirectionOfRelativeFormationLocation
`public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local wall direction of relative formation location 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalWallDirectionOfRelativeFormationLocation(unit);
```

### GetUnavailableUnitPositions
`public IEnumerable<Vec2> GetUnavailableUnitPositions()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unavailable unit positions 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnavailableUnitPositions();
```

### GetOccupationWidth
`public float GetOccupationWidth(int unitCount)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 occupation width 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetOccupationWidth(0);
```

### CreateNewPosition
`public Vec2? CreateNewPosition(int unitIndex)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 new position 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.CreateNewPosition(0);
```

### InvalidateCacheOfUnitAux
`public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 InvalidateCacheOfUnitAux 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.InvalidateCacheOfUnitAux(roundedLocalPosition);
```

### BeforeFormationFrameChange
`public void BeforeFormationFrameChange()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeforeFormationFrameChange 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.BeforeFormationFrameChange();
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)`

**用途 / Purpose:** **用途 / Purpose:** 在 formation frame changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.OnFormationFrameChanged(false);
```

### OnUnitLostMount
`public void OnUnitLostMount(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 在 unit lost mount 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.OnUnitLostMount(unit);
```

### IsTurnBackwardsNecessary
`public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 turn backwards necessary 状态或条件。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.IsTurnBackwardsNecessary(previousPosition, newPosition, previousDirection, false, newDirection);
```

### TurnBackwards
`public void TurnBackwards()`

**用途 / Purpose:** **用途 / Purpose:** 调用 TurnBackwards 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.TurnBackwards();
```

### OnFormationDispersed
`public void OnFormationDispersed()`

**用途 / Purpose:** **用途 / Purpose:** 在 formation dispersed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.OnFormationDispersed();
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.Reset();
```

### RearrangeFrom
`public virtual void RearrangeFrom(IFormationArrangement arrangement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RearrangeFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.RearrangeFrom(arrangement);
```

### RearrangeTo
`public virtual void RearrangeTo(IFormationArrangement arrangement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RearrangeTo 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.RearrangeTo(arrangement);
```

### RearrangeTransferUnits
`public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RearrangeTransferUnits 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.RearrangeTransferUnits(arrangement);
```

### FormFromWidth
`public void FormFromWidth(float width)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FormFromWidth 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.FormFromWidth(0);
```

### GetNeighborUnitOfLeftSide
`public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 neighbor unit of left side 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetNeighborUnitOfLeftSide(unit);
```

### GetNeighborUnitOfRightSide
`public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 neighbor unit of right side 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetNeighborUnitOfRightSide(unit);
```

### ReserveMiddleFrontUnitPosition
`public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReserveMiddleFrontUnitPosition 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.ReserveMiddleFrontUnitPosition(vanguard);
```

### ReleaseMiddleFrontUnitPosition
`public void ReleaseMiddleFrontUnitPosition()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReleaseMiddleFrontUnitPosition 对应的操作。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.ReleaseMiddleFrontUnitPosition();
```

### GetLocalPositionOfReservedUnitPosition
`public Vec2 GetLocalPositionOfReservedUnitPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local position of reserved unit position 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetLocalPositionOfReservedUnitPosition();
```

### OnTickOccasionallyOfUnit
`public void OnTickOccasionallyOfUnit(IFormationUnit unit, bool arrangementChangeAllowed)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick occasionally of unit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.OnTickOccasionallyOfUnit(unit, false);
```

### OnTickOccasionally
`public void OnTickOccasionally()`

**用途 / Purpose:** **用途 / Purpose:** 在 tick occasionally 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.OnTickOccasionally();
```

### GetDirectionChangeTendencyOfUnit
`public float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 direction change tendency of unit 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetDirectionChangeTendencyOfUnit(unit);
```

### UpdateLocalPositionErrors
`public void UpdateLocalPositionErrors(bool recalculateErrors)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 local position errors 的最新表示。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
columnFormation.UpdateLocalPositionErrors(false);
```

### GetUnitPositionsOnVanguardFileIndex
`public List<Vec2> GetUnitPositionsOnVanguardFileIndex()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unit positions on vanguard file index 的结果。

```csharp
// 先通过子系统 API 拿到 ColumnFormation 实例
ColumnFormation columnFormation = ...;
var result = columnFormation.GetUnitPositionsOnVanguardFileIndex();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ColumnFormation columnFormation = ...;
columnFormation.Clone(formation);
```

## 参见

- [本区域目录](../)