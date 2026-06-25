---
title: "LineFormation"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LineFormation`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LineFormation

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LineFormation : IFormationArrangement`
**Base:** `IFormationArrangement`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/LineFormation.cs`

## 概述

`LineFormation` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AreLocalPositionsDirty` | `public bool AreLocalPositionsDirty { get; set; }` |
| `Width` | `public virtual float Width { get; set; }` |
| `FlankWidth` | `public float FlankWidth { get; set; }` |
| `MaximumWidth` | `public virtual float MaximumWidth { get; }` |
| `IsStaggered` | `public bool IsStaggered { get; set; }` |
| `PostponeReconstructUnitsFromUnits2D` | `public bool PostponeReconstructUnitsFromUnits2D { get; set; }` |

## 主要方法

### GetFileCountFromWidth
`public int GetFileCountFromWidth(float width)`

**用途 / Purpose:** 获取 `file count from width` 的当前值。

### Clone
`public virtual IFormationArrangement Clone(IFormation formation)`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### DeepCopyFrom
`public virtual void DeepCopyFrom(IFormationArrangement arrangement)`

**用途 / Purpose:** 处理 `deep copy from` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### IsUnitPositionAvailable
`public bool IsUnitPositionAvailable(int fileIndex, int rankIndex)`

**用途 / Purpose:** 处理 `is unit position available` 相关逻辑。

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** 获取 `local position of unit or default` 的当前值。

### GetLocalDirectionOfUnitOrDefault
`public Vec2? GetLocalDirectionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** 获取 `local direction of unit or default` 的当前值。

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(int unitIndex)`

**用途 / Purpose:** 获取 `world position of unit or default` 的当前值。

### GetUnavailableUnitPositions
`public IEnumerable<Vec2> GetUnavailableUnitPositions()`

**用途 / Purpose:** 获取 `unavailable unit positions` 的当前值。

### AddUnit
`public bool AddUnit(IFormationUnit unit)`

**用途 / Purpose:** 向当前集合/状态中添加 `unit`。

### RemoveUnit
`public void RemoveUnit(IFormationUnit unit)`

**用途 / Purpose:** 从当前集合/状态中移除 `unit`。

### GetUnit
`public IFormationUnit GetUnit(int fileIndex, int rankIndex)`

**用途 / Purpose:** 获取 `unit` 的当前值。

### OnBatchRemoveStart
`public void OnBatchRemoveStart()`

**用途 / Purpose:** 当 `batch remove start` 事件触发时调用此方法。

### OnBatchRemoveEnd
`public void OnBatchRemoveEnd()`

**用途 / Purpose:** 当 `batch remove end` 事件触发时调用此方法。

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count)`

**用途 / Purpose:** 获取 `units to pop` 的当前值。

### GetUnitsToPopWithCondition
`public IEnumerable<IFormationUnit> GetUnitsToPopWithCondition(int count, Func<IFormationUnit, bool> currentCondition)`

**用途 / Purpose:** 获取 `units to pop with condition` 的当前值。

### GetUnitsToPop
`public List<IFormationUnit> GetUnitsToPop(int count, Vec3 targetPosition)`

**用途 / Purpose:** 获取 `units to pop` 的当前值。

### GetLocalPositionOfUnitOrDefault
`public Vec2? GetLocalPositionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** 获取 `local position of unit or default` 的当前值。

### GetLocalPositionOfUnitOrDefaultWithAdjustment
`public Vec2? GetLocalPositionOfUnitOrDefaultWithAdjustment(IFormationUnit unit, float distanceBetweenAgentsAdjustment)`

**用途 / Purpose:** 获取 `local position of unit or default with adjustment` 的当前值。

### GetLocalDirectionOfUnitOrDefault
`public virtual Vec2? GetLocalDirectionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** 获取 `local direction of unit or default` 的当前值。

### GetWorldPositionOfUnitOrDefault
`public WorldPosition? GetWorldPositionOfUnitOrDefault(IFormationUnit unit)`

**用途 / Purpose:** 获取 `world position of unit or default` 的当前值。

### GetPlayerUnit
`public IFormationUnit GetPlayerUnit()`

**用途 / Purpose:** 获取 `player unit` 的当前值。

### GetAllUnits
`public MBReadOnlyList<IFormationUnit> GetAllUnits()`

**用途 / Purpose:** 获取 `all units` 的当前值。

### GetAllUnits
`public void GetAllUnits(in MBList<IFormationUnit> allUnitsListToBeFilledIn)`

**用途 / Purpose:** 获取 `all units` 的当前值。

### GetUnpositionedUnits
`public MBList<IFormationUnit> GetUnpositionedUnits()`

**用途 / Purpose:** 获取 `unpositioned units` 的当前值。

### GetLocalDirectionOfRelativeFormationLocation
`public Vec2? GetLocalDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**用途 / Purpose:** 获取 `local direction of relative formation location` 的当前值。

### GetLocalWallDirectionOfRelativeFormationLocation
`public Vec2? GetLocalWallDirectionOfRelativeFormationLocation(IFormationUnit unit)`

**用途 / Purpose:** 获取 `local wall direction of relative formation location` 的当前值。

### GetFormationInfo
`public void GetFormationInfo(out int fileCount, out int rankCount)`

**用途 / Purpose:** 获取 `formation info` 的当前值。

### GetUnitsDistanceToFrontLine
`public float GetUnitsDistanceToFrontLine(IFormationUnit unit)`

**用途 / Purpose:** 获取 `units distance to front line` 的当前值。

### GetNeighborUnitOfLeftSide
`public IFormationUnit GetNeighborUnitOfLeftSide(IFormationUnit unit)`

**用途 / Purpose:** 获取 `neighbor unit of left side` 的当前值。

### GetNeighborUnitOfRightSide
`public IFormationUnit GetNeighborUnitOfRightSide(IFormationUnit unit)`

**用途 / Purpose:** 获取 `neighbor unit of right side` 的当前值。

### SwitchUnitLocationsWithUnpositionedUnit
`public void SwitchUnitLocationsWithUnpositionedUnit(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**用途 / Purpose:** 处理 `switch unit locations with unpositioned unit` 相关逻辑。

### SwitchUnitLocations
`public void SwitchUnitLocations(IFormationUnit firstUnit, IFormationUnit secondUnit)`

**用途 / Purpose:** 处理 `switch unit locations` 相关逻辑。

### SwitchUnitLocationsWithBackMostUnit
`public void SwitchUnitLocationsWithBackMostUnit(IFormationUnit unit)`

**用途 / Purpose:** 处理 `switch unit locations with back most unit` 相关逻辑。

### BeforeFormationFrameChange
`public void BeforeFormationFrameChange()`

**用途 / Purpose:** 处理 `before formation frame change` 相关逻辑。

### BatchUnitPositionAvailabilities
`public void BatchUnitPositionAvailabilities(bool isUpdatingCachedOrderedLocalPositions = true)`

**用途 / Purpose:** 处理 `batch unit position availabilities` 相关逻辑。

### OnFormationFrameChanged
`public void OnFormationFrameChanged(bool updateCachedOrderedLocalPositions = false)`

**用途 / Purpose:** 当 `formation frame changed` 事件触发时调用此方法。

### UpdateLocalPositionErrors
`public void UpdateLocalPositionErrors(bool recalculateErrors)`

**用途 / Purpose:** 更新 `local position errors` 的状态或数据。

### OnFormationDispersed
`public void OnFormationDispersed()`

**用途 / Purpose:** 当 `formation dispersed` 事件触发时调用此方法。

### OnUnitLostMount
`public void OnUnitLostMount(IFormationUnit unit)`

**用途 / Purpose:** 当 `unit lost mount` 事件触发时调用此方法。

### IsTurnBackwardsNecessary
`public bool IsTurnBackwardsNecessary(Vec2 previousPosition, WorldPosition? newPosition, Vec2 previousDirection, bool hasNewDirection, Vec2? newDirection)`

**用途 / Purpose:** 处理 `is turn backwards necessary` 相关逻辑。

### TurnBackwards
`public virtual void TurnBackwards()`

**用途 / Purpose:** 处理 `turn backwards` 相关逻辑。

### GetOccupationWidth
`public float GetOccupationWidth(int unitCount)`

**用途 / Purpose:** 获取 `occupation width` 的当前值。

### InvalidateCacheOfUnitAux
`public void InvalidateCacheOfUnitAux(Vec2 roundedLocalPosition)`

**用途 / Purpose:** 处理 `invalidate cache of unit aux` 相关逻辑。

### CreateNewPosition
`public Vec2? CreateNewPosition(int unitIndex)`

**用途 / Purpose:** 创建一个 `new position` 实例或对象。

### RearrangeFrom
`public virtual void RearrangeFrom(IFormationArrangement arrangement)`

**用途 / Purpose:** 处理 `rearrange from` 相关逻辑。

### RearrangeTo
`public virtual void RearrangeTo(IFormationArrangement arrangement)`

**用途 / Purpose:** 处理 `rearrange to` 相关逻辑。

### RearrangeTransferUnits
`public virtual void RearrangeTransferUnits(IFormationArrangement arrangement)`

**用途 / Purpose:** 处理 `rearrange transfer units` 相关逻辑。

### CalculateWidth
`public static float CalculateWidth(float interval, float unitDiameter, int unitCountOnLine)`

**用途 / Purpose:** 处理 `calculate width` 相关逻辑。

### FormFromFlankWidth
`public void FormFromFlankWidth(int unitCountOnLine, bool skipSingleFileChangesForPerformance = false)`

**用途 / Purpose:** 处理 `form from flank width` 相关逻辑。

### ReserveMiddleFrontUnitPosition
`public void ReserveMiddleFrontUnitPosition(IFormationUnit vanguard)`

**用途 / Purpose:** 处理 `reserve middle front unit position` 相关逻辑。

### ReleaseMiddleFrontUnitPosition
`public void ReleaseMiddleFrontUnitPosition()`

**用途 / Purpose:** 处理 `release middle front unit position` 相关逻辑。

### GetLocalPositionOfReservedUnitPosition
`public Vec2 GetLocalPositionOfReservedUnitPosition()`

**用途 / Purpose:** 获取 `local position of reserved unit position` 的当前值。

### OnTickOccasionally
`public void OnTickOccasionally()`

**用途 / Purpose:** 当 `tick occasionally` 事件触发时调用此方法。

### GetDirectionChangeTendencyOfUnit
`public virtual float GetDirectionChangeTendencyOfUnit(IFormationUnit unit)`

**用途 / Purpose:** 获取 `direction change tendency of unit` 的当前值。

### GetCachedOrderedAndAvailableUnitPositionIndicesCount
`public int GetCachedOrderedAndAvailableUnitPositionIndicesCount()`

**用途 / Purpose:** 获取 `cached ordered and available unit position indices count` 的当前值。

### GetCachedOrderedAndAvailableUnitPositionIndexAt
`public Vec2i GetCachedOrderedAndAvailableUnitPositionIndexAt(int i)`

**用途 / Purpose:** 获取 `cached ordered and available unit position index at` 的当前值。

### GetGlobalPositionAtIndex
`public WorldPosition GetGlobalPositionAtIndex(int indexX, int indexY)`

**用途 / Purpose:** 获取 `global position at index` 的当前值。

## 使用示例

```csharp
var value = new LineFormation();
value.GetFileCountFromWidth(0);
```

## 参见

- [完整类目录](../catalog)