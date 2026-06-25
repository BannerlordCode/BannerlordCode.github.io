---
title: "PointOfInterestScorePair"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PointOfInterestScorePair`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PointOfInterestScorePair

**命名空间:** SandBox.Missions.MissionLogics
**模块:** SandBox.Missions
**类型:** `public class PointOfInterestScorePair`
**领域:** campaign-ext

## 概述

`PointOfInterestScorePair` 位于 `SandBox.Missions.MissionLogics`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.Missions.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
// 先从游戏状态中拿到一个 PointOfInterestScorePair 实例，再调用它的公开方法
var value = new PointOfInterestScorePair();
value.ReverseClone();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
