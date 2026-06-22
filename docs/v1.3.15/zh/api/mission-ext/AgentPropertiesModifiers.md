<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentPropertiesModifiers`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentPropertiesModifiers

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`AgentPropertiesModifiers` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
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

```csharp
public bool GetHasOnAiInputSetCallback()
```

### SetHasOnAiInputSetCallback

```csharp
public void SetHasOnAiInputSetCallback(bool value)
```

### GetMissileRangeWithHeightDifferenceAux

```csharp
public float GetMissileRangeWithHeightDifferenceAux(float targetZ)
```

### GetSoundAndCollisionInfoClassName

```csharp
public string GetSoundAndCollisionInfoClassName()
```

### UpdateAgentStats

```csharp
public void UpdateAgentStats()
```

### GetWeaponInaccuracy

```csharp
public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)
```

### DebugGetHealth

```csharp
public float DebugGetHealth()
```

### SetTargetPosition

```csharp
public void SetTargetPosition(Vec2 value)
```

### SetTargetZ

```csharp
public void SetTargetZ(float targetZ)
```

### SetTargetUp

```csharp
public void SetTargetUp(in Vec3 targetUp)
```

### SetCanLeadFormationsRemotely

```csharp
public void SetCanLeadFormationsRemotely(bool value)
```

### SetAveragePingInMilliseconds

```csharp
public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)
```

### SetTargetPositionAndDirection

```csharp
public void SetTargetPositionAndDirection(in Vec2 targetPosition, in Vec3 targetDirection)
```

### AddAcceleration

```csharp
public void AddAcceleration(in Vec3 acceleration)
```

### SetWeaponGuard

```csharp
public void SetWeaponGuard(Agent.UsageDirection direction)
```

### SetWatchState

```csharp
public void SetWatchState(Agent.WatchState watchState)
```

### IsAlarmStateNormal

```csharp
public bool IsAlarmStateNormal()
```

### IsCautious

```csharp
public bool IsCautious()
```

### IsPatrollingCautious

```csharp
public bool IsPatrollingCautious()
```

### IsAlarmed

```csharp
public bool IsAlarmed()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)