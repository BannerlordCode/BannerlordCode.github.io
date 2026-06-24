<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CrossRoadScoreData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CrossRoadScoreData

**命名空间:** SandBox.Missions.MissionLogics
**模块:** SandBox.Missions
**类型:** `public class CrossRoadScoreData : MissionPathGenerationLogic.PointOfInterestBaseData`
**Base:** `MissionPathGenerationLogic.PointOfInterestBaseData`
**领域:** campaign-ext

## 概述

`CrossRoadScoreData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CrossRoadScoreData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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

## 使用示例

```csharp
var value = new CrossRoadScoreData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
