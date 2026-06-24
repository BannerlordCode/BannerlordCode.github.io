<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderTroopPlacer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# OrderTroopPlacer

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopPlacer : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Order/OrderTroopPlacer.cs`

## 概述

`OrderTroopPlacer` 位于 `TaleWorlds.MountAndBlade.View.MissionViews.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.MissionViews.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SuspendTroopPlacer` | `public bool SuspendTroopPlacer { get; set; }` |
| `OrderFlag` | `public OrderFlag OrderFlag { get; }` |

## 主要方法

### GetGroundOrNormalCursor
`public CursorState GetGroundOrNormalCursor()`

**用途 / Purpose:** 获取 `ground or normal cursor` 的当前值。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### RestrictOrdersToDeploymentBoundaries
`public void RestrictOrdersToDeploymentBoundaries(bool enabled)`

**用途 / Purpose:** 处理 `restrict orders to deployment boundaries` 相关逻辑。

### UpdateFormationDrawing
`public void UpdateFormationDrawing(bool giveOrder)`

**用途 / Purpose:** 更新 `formation drawing` 的状态或数据。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new OrderTroopPlacer();
value.GetGroundOrNormalCursor();
```

## 参见

- [完整类目录](../catalog)