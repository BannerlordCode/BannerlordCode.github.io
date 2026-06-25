---
title: "MovementOrder"
description: "MovementOrder 的自动生成类参考。"
---
# MovementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MovementOrder`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MovementOrder.cs`

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
| `MovementState` | `public MovementStateEnum MovementState { get; }` |

## 主要方法

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.GetHashCode();
```

### MovementOrderChargeToTarget
`public static MovementOrder MovementOrderChargeToTarget(Formation targetFormation)`

**用途 / Purpose:** 移动ment order charge to target到新的位置或状态。

```csharp
// 静态调用，不需要实例
MovementOrder.MovementOrderChargeToTarget(targetFormation);
```

### MovementOrderFollow
`public static MovementOrder MovementOrderFollow(Agent targetAgent)`

**用途 / Purpose:** 移动ment order follow到新的位置或状态。

```csharp
// 静态调用，不需要实例
MovementOrder.MovementOrderFollow(targetAgent);
```

### MovementOrderFollowEntity
`public static MovementOrder MovementOrderFollowEntity(GameEntity targetEntity)`

**用途 / Purpose:** 移动ment order follow entity到新的位置或状态。

```csharp
// 静态调用，不需要实例
MovementOrder.MovementOrderFollowEntity(targetEntity);
```

### MovementOrderMove
`public static MovementOrder MovementOrderMove(WorldPosition position)`

**用途 / Purpose:** 移动ment order move到新的位置或状态。

```csharp
// 静态调用，不需要实例
MovementOrder.MovementOrderMove(position);
```

### MovementOrderAttackEntity
`public static MovementOrder MovementOrderAttackEntity(GameEntity targetEntity, bool surroundEntity)`

**用途 / Purpose:** 移动ment order attack entity到新的位置或状态。

```csharp
// 静态调用，不需要实例
MovementOrder.MovementOrderAttackEntity(targetEntity, false);
```

### GetMovementOrderDefensiveness
`public static int GetMovementOrderDefensiveness(MovementOrderEnum orderEnum)`

**用途 / Purpose:** 读取并返回当前对象中 movement order defensiveness 的结果。

```csharp
// 静态调用，不需要实例
MovementOrder.GetMovementOrderDefensiveness(orderEnum);
```

### GetMovementOrderDefensivenessChange
`public static int GetMovementOrderDefensivenessChange(MovementOrderEnum previousOrderEnum, MovementOrderEnum nextOrderEnum)`

**用途 / Purpose:** 读取并返回当前对象中 movement order defensiveness change 的结果。

```csharp
// 静态调用，不需要实例
MovementOrder.GetMovementOrderDefensivenessChange(previousOrderEnum, nextOrderEnum);
```

### GetPosition
`public Vec2 GetPosition(Formation f)`

**用途 / Purpose:** 读取并返回当前对象中 position 的结果。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.GetPosition(f);
```

### GetTargetVelocity
`public Vec2 GetTargetVelocity()`

**用途 / Purpose:** 读取并返回当前对象中 target velocity 的结果。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.GetTargetVelocity();
```

### CreateNewOrderWorldPositionMT
`public WorldPosition CreateNewOrderWorldPositionMT(Formation f, WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)`

**用途 / Purpose:** 构建一个新的 new order world position m t 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.CreateNewOrderWorldPositionMT(f, worldPositionEnforcedCache);
```

### ResetPositionCache
`public void ResetPositionCache()`

**用途 / Purpose:** 将 position cache 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
movementOrder.ResetPositionCache();
```

### AreOrdersPracticallySame
`public bool AreOrdersPracticallySame(MovementOrder m1, MovementOrder m2, bool isAIControlled)`

**用途 / Purpose:** 调用 AreOrdersPracticallySame 对应的操作。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.AreOrdersPracticallySame(m1, m2, false);
```

### OnApply
`public void OnApply(Formation formation)`

**用途 / Purpose:** 在 apply 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
movementOrder.OnApply(formation);
```

### OnCancel
`public void OnCancel(Formation formation)`

**用途 / Purpose:** 在 cancel 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
movementOrder.OnCancel(formation);
```

### OnUnitJoinOrLeave
`public void OnUnitJoinOrLeave(Formation formation, Agent unit, bool isJoining)`

**用途 / Purpose:** 在 unit join or leave 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
movementOrder.OnUnitJoinOrLeave(formation, unit, false);
```

### IsApplicable
`public bool IsApplicable(Formation formation)`

**用途 / Purpose:** 判断当前对象是否处于 applicable 状态或条件。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.IsApplicable(formation);
```

### Tick
`public bool Tick(Formation formation)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.Tick(formation);
```

### OnArrangementChanged
`public void OnArrangementChanged(Formation formation)`

**用途 / Purpose:** 在 arrangement changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
movementOrder.OnArrangementChanged(formation);
```

### Advance
`public void Advance(Formation formation, float distance)`

**用途 / Purpose:** 调用 Advance 对应的操作。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
movementOrder.Advance(formation, 0);
```

### FallBack
`public void FallBack(Formation formation, float distance)`

**用途 / Purpose:** 调用 FallBack 对应的操作。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
movementOrder.FallBack(formation, 0);
```

### GetSubstituteOrder
`public MovementOrder GetSubstituteOrder(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 substitute order 的结果。

```csharp
// 先通过子系统 API 拿到 MovementOrder 实例
MovementOrder movementOrder = ...;
var result = movementOrder.GetSubstituteOrder(formation);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MovementOrder movementOrder = ...;
movementOrder.Equals(obj);
```

## 参见

- [本区域目录](../)