---
title: "FormationIntegrityDataGroup"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationIntegrityDataGroup`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationIntegrityDataGroup

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct FormationIntegrityDataGroup`
**领域:** mission-ext

## 概述

`FormationIntegrityDataGroup` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RetreatPositionCache` | `public Formation.RetreatPositionCacheSystem RetreatPositionCache { get; }` |
| `RepresentativeClass` | `public FormationClass RepresentativeClass { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `Direction` | `public Vec2 Direction { get; }` |
| `UnitSpacing` | `public int UnitSpacing { get; }` |
| `OrderPositionLock` | `public object OrderPositionLock { get; }` |
| `CountOfUnits` | `public int CountOfUnits { get; }` |
| `CountOfDetachedUnits` | `public int CountOfDetachedUnits { get; }` |
| `CountOfUndetachableNonPlayerUnits` | `public int CountOfUndetachableNonPlayerUnits { get; }` |
| `CountOfUnitsWithoutDetachedOnes` | `public int CountOfUnitsWithoutDetachedOnes { get; }` |
| `UnitsWithoutLooseDetachedOnes` | `public MBReadOnlyList<IFormationUnit> UnitsWithoutLooseDetachedOnes { get; }` |
| `CountOfUnitsWithoutLooseDetachedOnes` | `public int CountOfUnitsWithoutLooseDetachedOnes { get; }` |
| `CountOfDetachableNonPlayerUnits` | `public int CountOfDetachableNonPlayerUnits { get; }` |
| `OrderPosition` | `public Vec2 OrderPosition { get; }` |
| `OrderGroundPosition` | `public Vec3 OrderGroundPosition { get; }` |
| `OrderPositionIsValid` | `public bool OrderPositionIsValid { get; }` |
| `Depth` | `public float Depth { get; }` |
| `MinimumWidth` | `public float MinimumWidth { get; }` |
| `MaximumWidth` | `public float MaximumWidth { get; }` |
| `UnitDiameter` | `public float UnitDiameter { get; }` |

## 主要方法

### CreateNewOrderWorldPosition
`public WorldPosition CreateNewOrderWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**用途 / Purpose:** 创建一个 `new order world position` 实例或对象。

### SetMovementOrder
`public void SetMovementOrder(MovementOrder input)`

**用途 / Purpose:** 设置 `movement order` 的值或状态。

### SetFacingOrder
`public void SetFacingOrder(FacingOrder order)`

**用途 / Purpose:** 设置 `facing order` 的值或状态。

### SetArrangementOrder
`public void SetArrangementOrder(ArrangementOrder order)`

**用途 / Purpose:** 设置 `arrangement order` 的值或状态。

### SetFormOrder
`public void SetFormOrder(FormOrder order, bool updateDesiredFileCount = true)`

**用途 / Purpose:** 设置 `form order` 的值或状态。

### SetRidingOrder
`public void SetRidingOrder(RidingOrder order)`

**用途 / Purpose:** 设置 `riding order` 的值或状态。

### SetFiringOrder
`public void SetFiringOrder(FiringOrder order)`

**用途 / Purpose:** 设置 `firing order` 的值或状态。

### SetControlledByAI
`public void SetControlledByAI(bool isControlledByAI, bool enforceNotSplittableByAI = false)`

**用途 / Purpose:** 设置 `controlled by a i` 的值或状态。

### SetTargetFormation
`public void SetTargetFormation(Formation targetFormation)`

**用途 / Purpose:** 设置 `target formation` 的值或状态。

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### ResetArrangementOrderTickTimer
`public void ResetArrangementOrderTickTimer()`

**用途 / Purpose:** 将 `arrangement order tick timer` 重置为初始状态。

### SetPositioning
`public void SetPositioning(WorldPosition? position = null, Vec2? direction = null, int? unitSpacing = null)`

**用途 / Purpose:** 设置 `positioning` 的值或状态。

### GetCountOfUnitsWithCondition
`public int GetCountOfUnitsWithCondition(Func<Agent, bool> function)`

**用途 / Purpose:** 获取 `count of units with condition` 的当前值。

### GetReadonlyMovementOrderReference
`public readonly ref MovementOrder GetReadonlyMovementOrderReference()`

**用途 / Purpose:** 获取 `readonly movement order reference` 的当前值。

### GetFirstUnit
`public Agent GetFirstUnit()`

**用途 / Purpose:** 获取 `first unit` 的当前值。

### GetCountOfUnitsBelongingToLogicalClass
`public int GetCountOfUnitsBelongingToLogicalClass(FormationClass logicalClass)`

**用途 / Purpose:** 获取 `count of units belonging to logical class` 的当前值。

### GetCountOfUnitsBelongingToPhysicalClass
`public int GetCountOfUnitsBelongingToPhysicalClass(FormationClass physicalClass, bool excludeBannerBearers)`

**用途 / Purpose:** 获取 `count of units belonging to physical class` 的当前值。

### SetSpawnIndex
`public void SetSpawnIndex(int value = 0)`

**用途 / Purpose:** 设置 `spawn index` 的值或状态。

### GetNextSpawnIndex
`public int GetNextSpawnIndex()`

**用途 / Purpose:** 获取 `next spawn index` 的当前值。

### GetUnitWithIndex
`public Agent GetUnitWithIndex(int unitIndex)`

**用途 / Purpose:** 获取 `unit with index` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 FormationIntegrityDataGroup 实例，再调用它的公开方法
var value = new FormationIntegrityDataGroup();
value.CreateNewOrderWorldPosition(worldPositionEnforcedCache);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
