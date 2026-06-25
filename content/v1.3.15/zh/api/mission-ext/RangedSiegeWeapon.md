---
title: "RangedSiegeWeapon"
description: "RangedSiegeWeapon 的自动生成类参考。"
---
# RangedSiegeWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class RangedSiegeWeapon : SiegeWeapon`
**Base:** `SiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeapon.cs`

## 概述

`RangedSiegeWeapon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `MultipleFireProjectileId` | `public virtual string MultipleFireProjectileId { get; }` |
| `MultipleFireProjectileFlyingId` | `public virtual string MultipleFireProjectileFlyingId { get; }` |
| `MultipleProjectileId` | `public virtual string MultipleProjectileId { get; }` |
| `MultipleProjectileFlyingId` | `public virtual string MultipleProjectileFlyingId { get; }` |
| `SingleFireProjectileId` | `public virtual string SingleFireProjectileId { get; }` |
| `SingleFireProjectileFlyingId` | `public virtual string SingleFireProjectileFlyingId { get; }` |
| `SingleProjectileId` | `public virtual string SingleProjectileId { get; }` |
| `SingleProjectileFlyingId` | `public virtual string SingleProjectileFlyingId { get; }` |
| `State` | `public RangedSiegeWeapon.WeaponState State { get; set; }` |
| `CanShootAtPointCheckingOffset` | `public virtual Vec3 CanShootAtPointCheckingOffset { get; }` |
| `CameraHolder` | `public GameEntity CameraHolder { get; }` |
| `AmmoCount` | `public int AmmoCount { get; set; }` |
| `DirectionRestriction` | `public virtual float DirectionRestriction { get; }` |
| `PlayerForceUse` | `public bool PlayerForceUse { get; }` |
| `ProjectileEntityCurrentGlobalPosition` | `public virtual Vec3 ProjectileEntityCurrentGlobalPosition { get; }` |
| `Side` | `public override BattleSideEnum Side { get; }` |
| `State` | `public int State { get; }` |
| `TargetDirection` | `public float TargetDirection { get; }` |
| `TargetReleaseAngle` | `public float TargetReleaseAngle { get; }` |
| `AmmoCount` | `public int AmmoCount { get; }` |
| `ProjectileIndex` | `public int ProjectileIndex { get; }` |

## 主要方法

### SetAmmo
`public virtual void SetAmmo(int ammoLeft)`

**用途 / Purpose:** 为 「ammo」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.SetAmmo(0);
```

### SetStartAmmo
`public virtual void SetStartAmmo(int ammoLeft)`

**用途 / Purpose:** 为 「start ammo」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.SetStartAmmo(0);
```

### ChangeProjectileEntityClient
`public void ChangeProjectileEntityClient(int index)`

**用途 / Purpose:** 处理与 「change projectile entity client」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.ChangeProjectileEntityClient(0);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 将「to network」写入目标位置。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.WriteToNetwork();
```

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「in range to check alternative points」 状态或条件。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.IsInRangeToCheckAlternativePoints(agent);
```

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「best point alternative to」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetBestPointAlternativeTo(standingPoint, agent);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetTickRequirement();
```

### GiveInput
`public void GiveInput(float inputX, float inputY)`

**用途 / Purpose:** 处理与 「give input」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.GiveInput(0, 0);
```

### GiveExactInput
`public void GiveExactInput(float targetX, float targetY)`

**用途 / Purpose:** 处理与 「give exact input」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.GiveExactInput(0, 0);
```

### GetTargetReleaseAngle
`public virtual float GetTargetReleaseAngle(Vec3 target)`

**用途 / Purpose:** 读取并返回当前对象中 「target release angle」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetTargetReleaseAngle(target);
```

### AimAtThreat
`public virtual bool AimAtThreat(Threat threat)`

**用途 / Purpose:** 处理与 「aim at threat」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.AimAtThreat(threat);
```

### AimAtTarget
`public bool AimAtTarget(Vec3 target)`

**用途 / Purpose:** 处理与 「aim at target」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.AimAtTarget(target);
```

### CheckIsTargetReached
`public virtual bool CheckIsTargetReached(Vec3 target)`

**用途 / Purpose:** 检查「is target reached」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CheckIsTargetReached(target);
```

### GetEstimatedTargetGlobalPoint
`public Vec3 GetEstimatedTargetGlobalPoint(Threat threat)`

**用途 / Purpose:** 读取并返回当前对象中 「estimated target global point」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetEstimatedTargetGlobalPoint(threat);
```

### GetEstimatedTargetGlobalPointForAgent
`public Vec3 GetEstimatedTargetGlobalPointForAgent(Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「estimated target global point for agent」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetEstimatedTargetGlobalPointForAgent(agent);
```

### AimAtRotation
`public virtual void AimAtRotation(float horizontalRotation, float verticalRotation)`

**用途 / Purpose:** 处理与 「aim at rotation」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.AimAtRotation(0, 0);
```

### Shoot
`public bool Shoot()`

**用途 / Purpose:** 处理与 「shoot」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.Shoot();
```

### ManualReload
`public void ManualReload()`

**用途 / Purpose:** 处理与 「manual reload」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.ManualReload();
```

### AiRequestsShoot
`public void AiRequestsShoot()`

**用途 / Purpose:** 处理与 「ai requests shoot」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.AiRequestsShoot();
```

### AiRequestsManualReload
`public void AiRequestsManualReload()`

**用途 / Purpose:** 处理与 「ai requests manual reload」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.AiRequestsManualReload();
```

### GetSiegeEngineType
`public abstract override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine type」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetSiegeEngineType();
```

### CanShootAtBox
`public bool CanShootAtBox(Vec3 boxMin, Vec3 boxMax, uint attempts = 5U)`

**用途 / Purpose:** 检查当前对象是否满足 「shoot at box」 的前置条件。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CanShootAtBox(boxMin, boxMax, 0);
```

### CanShootAtThreat
`public bool CanShootAtThreat(Threat threat)`

**用途 / Purpose:** 检查当前对象是否满足 「shoot at threat」 的前置条件。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CanShootAtThreat(threat);
```

### GetEstimatedTargetMovementVector
`public virtual Vec3 GetEstimatedTargetMovementVector(Vec3 targetCurrentPosition, Vec3 targetVelocity)`

**用途 / Purpose:** 读取并返回当前对象中 「estimated target movement vector」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetEstimatedTargetMovementVector(targetCurrentPosition, targetVelocity);
```

### CanShootAtAgent
`public bool CanShootAtAgent(Agent agent)`

**用途 / Purpose:** 检查当前对象是否满足 「shoot at agent」 的前置条件。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CanShootAtAgent(agent);
```

### CanShootAtPoint
`public bool CanShootAtPoint(Vec3 target)`

**用途 / Purpose:** 检查当前对象是否满足 「shoot at point」 的前置条件。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.CanShootAtPoint(target);
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 「order」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetOrder(side);
```

### ProcessTargetValue
`public abstract float ProcessTargetValue(float baseValue, TargetFlags flags)`

**用途 / Purpose:** 处理与 「process target value」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.ProcessTargetValue(0, flags);
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 在 「after read from network」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### GetGlobalVelocity
`public virtual Vec3 GetGlobalVelocity()`

**用途 / Purpose:** 读取并返回当前对象中 「global velocity」 的结果。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.GetGlobalVelocity();
```

### SetPlayerForceUse
`public void SetPlayerForceUse(bool value)`

**用途 / Purpose:** 为 「player force use」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.SetPlayerForceUse(false);
```

### OnShipCaptured
`public override void OnShipCaptured(BattleSideEnum newDefaultSide)`

**用途 / Purpose:** 在 「ship captured」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.OnShipCaptured(newDefaultSide);
```

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「from network」的数据或状态。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
var result = rangedSiegeWeapon.ReadFromNetwork(bufferReadValid);
```

### OnSiegeWeaponReloadDone
`public delegate void OnSiegeWeaponReloadDone()`

**用途 / Purpose:** 在 「siege weapon reload done」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RangedSiegeWeapon 实例
RangedSiegeWeapon rangedSiegeWeapon = ...;
rangedSiegeWeapon.OnSiegeWeaponReloadDone();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
RangedSiegeWeapon instance = ...;
```

## 参见

- [本区域目录](../)