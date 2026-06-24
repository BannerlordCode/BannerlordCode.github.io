<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CheckPoint`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CheckPoint

**命名空间:** SandBox.Tournaments.MissionLogics
**模块:** SandBox.Tournaments
**类型:** `public class CheckPoint`
**领域:** campaign-ext

## 概述

`CheckPoint` 位于 `SandBox.Tournaments.MissionLogics`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `SandBox.Tournaments.MissionLogics` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `CheckPoints` | `public List<CheckPoint> CheckPoints { get; }` |

## 主要方法

### GetBestTargetPosition
`public Vec3 GetBestTargetPosition()`

**用途 / Purpose:** 获取 `best target position` 的当前值。

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**用途 / Purpose:** 向当前集合/状态中添加 `to check list`。

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**用途 / Purpose:** 从当前集合/状态中移除 `from check list`。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**用途 / Purpose:** 处理 `start match` 相关逻辑。

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**用途 / Purpose:** 处理 `skip match` 相关逻辑。

### IsMatchEnded
`public bool IsMatchEnded()`

**用途 / Purpose:** 处理 `is match ended` 相关逻辑。

### OnMatchEnded
`public void OnMatchEnded()`

**用途 / Purpose:** 当 `match ended` 事件触发时调用此方法。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 CheckPoint 实例，再调用它的公开方法
var value = new CheckPoint();
value.GetBestTargetPosition();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
