<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StandingGuardSpawnData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StandingGuardSpawnData

**命名空间:** SandBox.Missions.MissionLogics
**模块:** SandBox.Missions
**类型:** `public class StandingGuardSpawnData : PointOfInterestBaseData`
**Base:** `PointOfInterestBaseData`
**领域:** campaign-ext

## 概述

`StandingGuardSpawnData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `StandingGuardSpawnData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ReverseClone
`public NavigationPathData ReverseClone()`

**用途 / Purpose:** 处理 `reverse clone` 相关逻辑。

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**用途 / Purpose:** 初始化 `usable points` 的状态、资源或绑定。

### GetPointOfInterestType
`public abstract PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### IsInRadius
`public abstract bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public abstract float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### GetPointOfInterestType
`public override PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### IsInRadius
`public override bool IsInRadius(PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### Clone
`public PointOfInterestScorePair Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### AddToData
`public void AddToData(PointOfInterestBaseData pointOfInterestToAdd)`

**用途 / Purpose:** 向当前集合/状态中添加 `to data`。

### IsDataEqualTo
`public bool IsDataEqualTo(PointOfInterestScorePair other, PointOfInterestBaseData newDataToAdd)`

**用途 / Purpose:** 处理 `is data equal to` 相关逻辑。

## 使用示例

```csharp
var value = new StandingGuardSpawnData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
