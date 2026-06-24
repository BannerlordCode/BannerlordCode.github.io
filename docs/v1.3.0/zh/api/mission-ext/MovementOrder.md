<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MovementOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MovementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MovementOrder`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MovementOrder.cs`

## 概述

`MovementOrder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TargetFormation` | `public Formation TargetFormation { get; }` |
| `_targetAgent` | `public Agent _targetAgent { get; }` |
| `OrderType` | `public OrderType OrderType { get; }` |
| `MovementState` | `public MovementOrder.MovementStateEnum MovementState { get; }` |

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### MovementOrderChargeToTarget
`public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation)`

**用途 / Purpose:** 处理 `movement order charge to target` 相关逻辑。

### MovementOrderFollow
`public static MovementOrder MovementOrderFollow(Agent targetAgent)`

**用途 / Purpose:** 处理 `movement order follow` 相关逻辑。

### MovementOrderFollowEntity
`public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity)`

**用途 / Purpose:** 处理 `movement order follow entity` 相关逻辑。

### MovementOrderMove
`public static MovementOrder MovementOrderMove(WorldPosition position)`

**用途 / Purpose:** 处理 `movement order move` 相关逻辑。

### MovementOrderAttackEntity
`public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity, bool surroundEntity)`

**用途 / Purpose:** 处理 `movement order attack entity` 相关逻辑。

### GetMovementOrderDefensiveness
`public static int GetMovementOrderDefensiveness(MovementOrder.MovementOrderEnum orderEnum)`

**用途 / Purpose:** 获取 `movement order defensiveness` 的当前值。

### GetMovementOrderDefensivenessChange
`public static int GetMovementOrderDefensivenessChange(MovementOrder.MovementOrderEnum previousOrderEnum, MovementOrder.MovementOrderEnum nextOrderEnum)`

**用途 / Purpose:** 获取 `movement order defensiveness change` 的当前值。

### GetPosition
`public Vec2 GetPosition(Formation f)`

**用途 / Purpose:** 获取 `position` 的当前值。

### GetTargetVelocity
`public Vec2 GetTargetVelocity()`

**用途 / Purpose:** 获取 `target velocity` 的当前值。

### CreateNewOrderWorldPositionMT
`public WorldPosition CreateNewOrderWorldPositionMT(Formation f, WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**用途 / Purpose:** 创建一个 `new order world position m t` 实例或对象。

### ResetPositionCache
`public void ResetPositionCache()`

**用途 / Purpose:** 将 `position cache` 重置为初始状态。

### AreOrdersPracticallySame
`public bool AreOrdersPracticallySame(MovementOrder m1, MovementOrder m2, bool isAIControlled)`

**用途 / Purpose:** 处理 `are orders practically same` 相关逻辑。

### OnApply
`public void OnApply(Formation formation)`

**用途 / Purpose:** 当 `apply` 事件触发时调用此方法。

### OnCancel
`public void OnCancel(Formation formation)`

**用途 / Purpose:** 当 `cancel` 事件触发时调用此方法。

### OnUnitJoinOrLeave
`public void OnUnitJoinOrLeave(Formation formation, Agent unit, bool isJoining)`

**用途 / Purpose:** 当 `unit join or leave` 事件触发时调用此方法。

### IsApplicable
`public bool IsApplicable(Formation formation)`

**用途 / Purpose:** 处理 `is applicable` 相关逻辑。

### Tick
`public bool Tick(Formation formation)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnArrangementChanged
`public void OnArrangementChanged(Formation formation)`

**用途 / Purpose:** 当 `arrangement changed` 事件触发时调用此方法。

### Advance
`public void Advance(Formation formation, float distance)`

**用途 / Purpose:** 处理 `advance` 相关逻辑。

### FallBack
`public void FallBack(Formation formation, float distance)`

**用途 / Purpose:** 处理 `fall back` 相关逻辑。

### GetSubstituteOrder
`public MovementOrder GetSubstituteOrder(Formation formation)`

**用途 / Purpose:** 获取 `substitute order` 的当前值。

## 使用示例

```csharp
var value = new MovementOrder();
value.Equals(obj);
```

## 参见

- [完整类目录](../catalog)