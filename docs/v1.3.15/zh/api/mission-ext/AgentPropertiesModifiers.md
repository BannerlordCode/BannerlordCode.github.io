<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentPropertiesModifiers`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentPropertiesModifiers

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct AgentPropertiesModifiers`
**领域:** mission-ext

## 概述

`AgentPropertiesModifiers` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Main` | `public static Agent Main { get; }` |
| `IsPlayerControlled` | `public bool IsPlayerControlled { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `IsMainAgent` | `public bool IsMainAgent { get; }` |
| `IsHuman` | `public bool IsHuman { get; }` |
| `IsMount` | `public bool IsMount { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `IsPlayerTroop` | `public bool IsPlayerTroop { get; }` |
| `IsUsingGameObject` | `public bool IsUsingGameObject { get; }` |
| `CanLeadFormationsRemotely` | `public bool CanLeadFormationsRemotely { get; }` |
| `IsDetachableFromFormation` | `public bool IsDetachableFromFormation { get; }` |
| `AgentScale` | `public float AgentScale { get; }` |
| `CrouchMode` | `public bool CrouchMode { get; }` |
| `WalkMode` | `public bool WalkMode { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `MovementMode` | `public AgentMovementMode MovementMode { get; }` |
| `VisualPosition` | `public Vec3 VisualPosition { get; }` |
| `MovementVelocity` | `public Vec2 MovementVelocity { get; }` |
| `AverageVelocity` | `public Vec3 AverageVelocity { get; }` |
| `MovementDirectionAsAngle` | `public float MovementDirectionAsAngle { get; }` |

## 主要方法

### GetHasOnAiInputSetCallback
`public bool GetHasOnAiInputSetCallback()`

**用途 / Purpose:** 获取 `has on ai input set callback` 的当前值。

### SetHasOnAiInputSetCallback
`public void SetHasOnAiInputSetCallback(bool value)`

**用途 / Purpose:** 设置 `has on ai input set callback` 的值或状态。

### GetMissileRangeWithHeightDifferenceAux
`public float GetMissileRangeWithHeightDifferenceAux(float targetZ)`

**用途 / Purpose:** 获取 `missile range with height difference aux` 的当前值。

### GetSoundAndCollisionInfoClassName
`public string GetSoundAndCollisionInfoClassName()`

**用途 / Purpose:** 获取 `sound and collision info class name` 的当前值。

### UpdateAgentStats
`public void UpdateAgentStats()`

**用途 / Purpose:** 更新 `agent stats` 的状态或数据。

### GetWeaponInaccuracy
`public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)`

**用途 / Purpose:** 获取 `weapon inaccuracy` 的当前值。

### DebugGetHealth
`public float DebugGetHealth()`

**用途 / Purpose:** 处理 `debug get health` 相关逻辑。

### SetTargetPosition
`public void SetTargetPosition(Vec2 value)`

**用途 / Purpose:** 设置 `target position` 的值或状态。

### SetTargetZ
`public void SetTargetZ(float targetZ)`

**用途 / Purpose:** 设置 `target z` 的值或状态。

### SetTargetUp
`public void SetTargetUp(in Vec3 targetUp)`

**用途 / Purpose:** 设置 `target up` 的值或状态。

### SetCanLeadFormationsRemotely
`public void SetCanLeadFormationsRemotely(bool value)`

**用途 / Purpose:** 设置 `can lead formations remotely` 的值或状态。

### SetAveragePingInMilliseconds
`public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)`

**用途 / Purpose:** 设置 `average ping in milliseconds` 的值或状态。

### SetTargetPositionAndDirection
`public void SetTargetPositionAndDirection(in Vec2 targetPosition, in Vec3 targetDirection)`

**用途 / Purpose:** 设置 `target position and direction` 的值或状态。

### AddAcceleration
`public void AddAcceleration(in Vec3 acceleration)`

**用途 / Purpose:** 向当前集合/状态中添加 `acceleration`。

### SetWeaponGuard
`public void SetWeaponGuard(Agent.UsageDirection direction)`

**用途 / Purpose:** 设置 `weapon guard` 的值或状态。

### SetWatchState
`public void SetWatchState(Agent.WatchState watchState)`

**用途 / Purpose:** 设置 `watch state` 的值或状态。

### IsAlarmStateNormal
`public bool IsAlarmStateNormal()`

**用途 / Purpose:** 处理 `is alarm state normal` 相关逻辑。

### IsCautious
`public bool IsCautious()`

**用途 / Purpose:** 处理 `is cautious` 相关逻辑。

### IsPatrollingCautious
`public bool IsPatrollingCautious()`

**用途 / Purpose:** 处理 `is patrolling cautious` 相关逻辑。

### IsAlarmed
`public bool IsAlarmed()`

**用途 / Purpose:** 处理 `is alarmed` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 AgentPropertiesModifiers 实例，再调用它的公开方法
var value = new AgentPropertiesModifiers();
value.GetHasOnAiInputSetCallback();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
