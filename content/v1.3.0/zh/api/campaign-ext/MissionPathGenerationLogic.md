---
title: "MissionPathGenerationLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionPathGenerationLogic`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionPathGenerationLogic

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionPathGenerationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionPathGenerationLogic.cs`

## 概述

`MissionPathGenerationLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `MissionPathGenerationLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Data` | `public List<MissionPathGenerationLogic.PointOfInterestBaseData> Data { get; }` |

## 主要方法

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object used` 事件触发时调用此方法。

### InitializeBehavior
`public void InitializeBehavior()`

**用途 / Purpose:** 初始化 `behavior` 的状态、资源或绑定。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### GetAllPossiblePaths
`public List<MissionPathGenerationLogic.PointOfInterestScorePair> GetAllPossiblePaths()`

**用途 / Purpose:** 获取 `all possible paths` 的当前值。

### IsOnLeftSide
`public bool IsOnLeftSide(Vec2 lineA, Vec2 lineB, Vec2 point)`

**用途 / Purpose:** 处理 `is on left side` 相关逻辑。

### ReverseClone
`public MissionPathGenerationLogic.NavigationPathData ReverseClone()`

**用途 / Purpose:** 处理 `reverse clone` 相关逻辑。

### InitializeUsablePoints
`public void InitializeUsablePoints(List<UsableMachine> allUsableMachines)`

**用途 / Purpose:** 初始化 `usable points` 的状态、资源或绑定。

### GetPointOfInterestType
`public abstract MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### GetPositionAndRadiusPairs
`public abstract List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**用途 / Purpose:** 获取 `position and radius pairs` 的当前值。

### IsInRadius
`public abstract bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public abstract float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**用途 / Purpose:** 获取 `position and radius pairs` 的当前值。

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**用途 / Purpose:** 获取 `position and radius pairs` 的当前值。

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**用途 / Purpose:** 获取 `position and radius pairs` 的当前值。

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### GetPointOfInterestType
`public override MissionPathGenerationLogic.PointOfInterests GetPointOfInterestType()`

**用途 / Purpose:** 获取 `point of interest type` 的当前值。

### GetPositionAndRadiusPairs
`public override List<ValueTuple<Vec2, float>> GetPositionAndRadiusPairs()`

**用途 / Purpose:** 获取 `position and radius pairs` 的当前值。

### IsInRadius
`public override bool IsInRadius(MissionPathGenerationLogic.PointOfInterestBaseData otherPointOfInterest)`

**用途 / Purpose:** 处理 `is in radius` 相关逻辑。

### GetLocationRatio
`public override float GetLocationRatio()`

**用途 / Purpose:** 获取 `location ratio` 的当前值。

### Clone
`public MissionPathGenerationLogic.PointOfInterestScorePair Clone()`

**用途 / Purpose:** 处理 `clone` 相关逻辑。

### AddToData
`public void AddToData(MissionPathGenerationLogic.PointOfInterestBaseData pointOfInterestToAdd)`

**用途 / Purpose:** 向当前集合/状态中添加 `to data`。

### IsDataEqualTo
`public bool IsDataEqualTo(MissionPathGenerationLogic.PointOfInterestScorePair other, MissionPathGenerationLogic.PointOfInterestBaseData newDataToAdd)`

**用途 / Purpose:** 处理 `is data equal to` 相关逻辑。

### IsBetterThan
`public bool IsBetterThan(MissionPathGenerationLogic.PointOfInterestScorePair other)`

**用途 / Purpose:** 处理 `is better than` 相关逻辑。

### IsSufficient
`public bool IsSufficient()`

**用途 / Purpose:** 处理 `is sufficient` 相关逻辑。

### ReOrderDataAccordingToPathRatios
`public void ReOrderDataAccordingToPathRatios()`

**用途 / Purpose:** 处理 `re order data according to path ratios` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionPathGenerationLogic());
```

## 参见

- [完整类目录](../catalog)