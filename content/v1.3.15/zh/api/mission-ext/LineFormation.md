---
title: "LineFormation"
description: "LineFormation 的自动生成类参考。"
---
# LineFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LineFormation : IFormationArrangement`
**Base:** `IFormationArrangement`
**File:** `TaleWorlds.MountAndBlade/LineFormation.cs`

## 概述

`LineFormation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RankCount` | `public int RankCount { get; set; }` |
| `AreLocalPositionsDirty` | `public bool AreLocalPositionsDirty { get; set; }` |
| `IntervalMultiplier` | `public virtual float IntervalMultiplier { get; }` |
| `DistanceMultiplier` | `public virtual float DistanceMultiplier { get; }` |
| `Width` | `public virtual float Width { get; set; }` |
| `Depth` | `public virtual float Depth { get; set; }` |
| `FlankWidth` | `public float FlankWidth { get; set; }` |
| `RankDepth` | `public float RankDepth { get; }` |
| `MinimumFlankWidth` | `public float MinimumFlankWidth { get; }` |
| `MinimumWidth` | `public virtual float MinimumWidth { get; }` |
| `MaximumWidth` | `public virtual float MaximumWidth { get; }` |
| `IsStaggered` | `public bool IsStaggered { get; set; }` |
| `IsLoose` | `public virtual bool? IsLoose { get; set; }` |
| `PostponeReconstructUnitsFromUnits2D` | `public bool PostponeReconstructUnitsFromUnits2D { get; set; }` |
| `UnitCount` | `public int UnitCount { get; }` |
| `PositionedUnitCount` | `public int PositionedUnitCount { get; }` |

## 主要方法

### GetFileCountFromWidth
`public int GetFileCountFromWidth(float width)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 file count from width 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetFileCountFromWidth(0);
```

### Clone
`public virtual IFormationArrangement Clone(IFormation formation)`

**用途 / Purpose:** **用途 / Purpose:** 复制当前对象的状态并返回一个新实例。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.Clone(formation);
```

### DeepCopyFrom
`public virtual void DeepCopyFrom(IFormationArrangement arrangement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DeepCopyFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.DeepCopyFrom(arrangement);
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.Reset();
```

### IsUnitPositionAvailable
`public bool IsUnitPositionAvailable(int fileIndex, int rankIndex)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 unit position available 状态或条件。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.IsUnitPositionAvailable(0, 0);
```

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local position of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalPositionOfUnitOrDefault(0);
```

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local direction of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalDirectionOfUnitOrDefault(0);
```

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 world position of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetWorldPositionOfUnitOrDefault(0);
```

### GetUnavailableUnitPositions
`public IEnumerable<Vec2> GetUnavailableUnitPositions()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unavailable unit positions 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetUnavailableUnitPositions();
```

### AddUnit
`public bool AddUnit(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 将 unit 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.AddUnit(unit);
```

### RemoveUnit
`public void RemoveUnit(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 unit。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.RemoveUnit(unit);
```

### GetUnit
`public IFormationUnit GetUnit(int fileIndex, int rankIndex)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unit 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetUnit(0, 0);
```

### OnBatchRemoveStart
`public void OnBatchRemoveStart()`

**用途 / Purpose:** **用途 / Purpose:** 在 batch remove start 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.OnBatchRemoveStart();
```

### OnBatchRemoveEnd
`public void OnBatchRemoveEnd()`

**用途 / Purpose:** **用途 / Purpose:** 在 batch remove end 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.OnBatchRemoveEnd();
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 units to pop 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetUnitsToPop(0);
```

### GetUnitsToPopWithCondition
`public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool> currentCondition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 units to pop with condition 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetUnitsToPopWithCondition(0, func<IFormationUnit, false);
```

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count, Vec3 targetPosition)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 units to pop 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetUnitsToPop(0, targetPosition);
```

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local position of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalPositionOfUnitOrDefault(unit);
```

### GetLocalPositionOfUnitOrDefaultWithAdjustment
`public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local position of unit or default with adjustment 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalPositionOfUnitOrDefaultWithAdjustment(unit, 0);
```

### GetLocalDirectionOfUnitOrDefault
`public virtual Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local direction of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalDirectionOfUnitOrDefault(unit);
```

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 world position of unit or default 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetWorldPositionOfUnitOrDefault(unit);
```

### GetPlayerUnit
`public IFormationUnit GetPlayerUnit()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 player unit 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetPlayerUnit();
```

### GetAllUnits
`public MBReadOnlyList<IFormationUnit> GetAllUnits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all units 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetAllUnits();
```

### GetAllUnits
`public void GetAllUnits(in MBList<IFormationUnit> allUnitsListToBeFilledIn)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 all units 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.GetAllUnits(allUnitsListToBeFilledIn);
```

### GetUnpositionedUnits
`public MBList<IFormationUnit> GetUnpositionedUnits()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 unpositioned units 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetUnpositionedUnits();
```

### GetLocalDirectionOfRelativeFormationLocation
`public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local direction of relative formation location 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalDirectionOfRelativeFormationLocation(unit);
```

### GetLocalWallDirectionOfRelativeFormationLocation
`public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local wall direction of relative formation location 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalWallDirectionOfRelativeFormationLocation(unit);
```

### GetFormationInfo
`public void GetFormationInfo(out int fileCount, out int rankCount)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 formation info 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.GetFormationInfo(fileCount, rankCount);
```

### GetUnitsDistanceToFrontLine
`public float GetUnitsDistanceToFrontLine(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 units distance to front line 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetUnitsDistanceToFrontLine(unit);
```

### GetNeighborUnitOfLeftSide
`public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 neighbor unit of left side 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetNeighborUnitOfLeftSide(unit);
```

### GetNeighborUnitOfRightSide
`public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 neighbor unit of right side 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetNeighborUnitOfRightSide(unit);
```

### SwitchUnitLocationsWithUnpositionedUnit
`public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SwitchUnitLocationsWithUnpositionedUnit 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.SwitchUnitLocationsWithUnpositionedUnit(firstUnit, secondUnit);
```

### SwitchUnitLocations
`public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SwitchUnitLocations 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.SwitchUnitLocations(firstUnit, secondUnit);
```

### SwitchUnitLocationsWithBackMostUnit
`public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 调用 SwitchUnitLocationsWithBackMostUnit 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.SwitchUnitLocationsWithBackMostUnit(unit);
```

### BeforeFormationFrameChange
`public void BeforeFormationFrameChange()`

**用途 / Purpose:** **用途 / Purpose:** 调用 BeforeFormationFrameChange 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.BeforeFormationFrameChange();
```

### BatchUnitPositionAvailabilities
`public void BatchUnitPositionAvailabilities(bool isUpdatingCachedOrderedLocalPositions = true)`

**用途 / Purpose:** **用途 / Purpose:** 调用 BatchUnitPositionAvailabilities 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.BatchUnitPositionAvailabilities(false);
```

### OnFormationFrameChanged
`public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)`

**用途 / Purpose:** **用途 / Purpose:** 在 formation frame changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.OnFormationFrameChanged(false);
```

### UpdateLocalPositionErrors
`public void UpdateLocalPositionErrors(bool recalculateErrors)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 local position errors 的最新表示。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.UpdateLocalPositionErrors(false);
```

### OnFormationDispersed
`public void OnFormationDispersed()`

**用途 / Purpose:** **用途 / Purpose:** 在 formation dispersed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.OnFormationDispersed();
```

### OnUnitLostMount
`public void OnUnitLostMount(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 在 unit lost mount 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.OnUnitLostMount(unit);
```

### IsTurnBackwardsNecessary
`public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 turn backwards necessary 状态或条件。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.IsTurnBackwardsNecessary(previousPosition, newPosition, previousDirection, false, newDirection);
```

### TurnBackwards
`public virtual void TurnBackwards()`

**用途 / Purpose:** **用途 / Purpose:** 调用 TurnBackwards 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.TurnBackwards();
```

### GetOccupationWidth
`public float GetOccupationWidth(int unitCount)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 occupation width 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetOccupationWidth(0);
```

### InvalidateCacheOfUnitAux
`public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)`

**用途 / Purpose:** **用途 / Purpose:** 调用 InvalidateCacheOfUnitAux 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.InvalidateCacheOfUnitAux(roundedLocalPosition);
```

### CreateNewPosition
`public Vec2? CreateNewPosition(int unitIndex)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 new position 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.CreateNewPosition(0);
```

### RearrangeFrom
`public virtual void RearrangeFrom(IFormationArrangement arrangement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RearrangeFrom 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.RearrangeFrom(arrangement);
```

### RearrangeTo
`public virtual void RearrangeTo(IFormationArrangement arrangement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RearrangeTo 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.RearrangeTo(arrangement);
```

### RearrangeTransferUnits
`public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)`

**用途 / Purpose:** **用途 / Purpose:** 调用 RearrangeTransferUnits 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.RearrangeTransferUnits(arrangement);
```

### CalculateWidth
`public static float CalculateWidth(float interval, float unitDiameter, int unitCountOnLine)`

**用途 / Purpose:** **用途 / Purpose:** 计算width的当前值或结果。

```csharp
// 静态调用，不需要实例
LineFormation.CalculateWidth(0, 0, 0);
```

### FormFromFlankWidth
`public void FormFromFlankWidth(int unitCountOnLine, bool skipSingleFileChangesForPerformance = false)`

**用途 / Purpose:** **用途 / Purpose:** 调用 FormFromFlankWidth 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.FormFromFlankWidth(0, false);
```

### ReserveMiddleFrontUnitPosition
`public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReserveMiddleFrontUnitPosition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.ReserveMiddleFrontUnitPosition(vanguard);
```

### ReleaseMiddleFrontUnitPosition
`public void ReleaseMiddleFrontUnitPosition()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ReleaseMiddleFrontUnitPosition 对应的操作。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.ReleaseMiddleFrontUnitPosition();
```

### GetLocalPositionOfReservedUnitPosition
`public Vec2 GetLocalPositionOfReservedUnitPosition()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 local position of reserved unit position 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetLocalPositionOfReservedUnitPosition();
```

### OnTickOccasionallyOfUnit
`public virtual void OnTickOccasionallyOfUnit(IFormationUnit unit, bool arrangementChangeAllowed)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick occasionally of unit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
lineFormation.OnTickOccasionallyOfUnit(unit, false);
```

### GetDirectionChangeTendencyOfUnit
`public virtual float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 direction change tendency of unit 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetDirectionChangeTendencyOfUnit(unit);
```

### GetCachedOrderedAndAvailableUnitPositionIndicesCount
`public int GetCachedOrderedAndAvailableUnitPositionIndicesCount()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached ordered and available unit position indices count 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetCachedOrderedAndAvailableUnitPositionIndicesCount();
```

### GetCachedOrderedAndAvailableUnitPositionIndexAt
`public Vec2i GetCachedOrderedAndAvailableUnitPositionIndexAt(int i)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cached ordered and available unit position index at 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetCachedOrderedAndAvailableUnitPositionIndexAt(0);
```

### GetGlobalPositionAtIndex
`public WorldPosition GetGlobalPositionAtIndex(int indexX, int indexY)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 global position at index 的结果。

```csharp
// 先通过子系统 API 拿到 LineFormation 实例
LineFormation lineFormation = ...;
var result = lineFormation.GetGlobalPositionAtIndex(0, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
LineFormation lineFormation = ...;
lineFormation.GetFileCountFromWidth(0);
```

## 参见

- [本区域目录](../)