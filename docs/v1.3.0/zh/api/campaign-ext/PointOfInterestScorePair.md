<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PointOfInterestScorePair`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
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
// 先从游戏状态中拿到一个 PointOfInterestScorePair 实例，再调用它的公开方法
var value = new PointOfInterestScorePair();
value.OnObjectUsed(userAgent, usedObject);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
