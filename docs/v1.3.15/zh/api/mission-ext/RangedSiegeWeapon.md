<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RangedSiegeWeapon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 设置 `ammo` 的值或状态。

### SetStartAmmo
`public virtual void SetStartAmmo(int ammoLeft)`

**用途 / Purpose:** 设置 `start ammo` 的值或状态。

### ChangeProjectileEntityClient
`public void ChangeProjectileEntityClient(int index)`

**用途 / Purpose:** 处理 `change projectile entity client` 相关逻辑。

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 处理 `write to network` 相关逻辑。

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

**用途 / Purpose:** 处理 `is in range to check alternative points` 相关逻辑。

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**用途 / Purpose:** 获取 `best point alternative to` 的当前值。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### GiveInput
`public void GiveInput(float inputX, float inputY)`

**用途 / Purpose:** 处理 `give input` 相关逻辑。

### GiveExactInput
`public void GiveExactInput(float targetX, float targetY)`

**用途 / Purpose:** 处理 `give exact input` 相关逻辑。

### GetTargetReleaseAngle
`public virtual float GetTargetReleaseAngle(Vec3 target)`

**用途 / Purpose:** 获取 `target release angle` 的当前值。

### AimAtThreat
`public virtual bool AimAtThreat(Threat threat)`

**用途 / Purpose:** 处理 `aim at threat` 相关逻辑。

### AimAtTarget
`public bool AimAtTarget(Vec3 target)`

**用途 / Purpose:** 处理 `aim at target` 相关逻辑。

### CheckIsTargetReached
`public virtual bool CheckIsTargetReached(Vec3 target)`

**用途 / Purpose:** 处理 `check is target reached` 相关逻辑。

### GetEstimatedTargetGlobalPoint
`public Vec3 GetEstimatedTargetGlobalPoint(Threat threat)`

**用途 / Purpose:** 获取 `estimated target global point` 的当前值。

### GetEstimatedTargetGlobalPointForAgent
`public Vec3 GetEstimatedTargetGlobalPointForAgent(Agent agent)`

**用途 / Purpose:** 获取 `estimated target global point for agent` 的当前值。

### AimAtRotation
`public virtual void AimAtRotation(float horizontalRotation, float verticalRotation)`

**用途 / Purpose:** 处理 `aim at rotation` 相关逻辑。

### Shoot
`public bool Shoot()`

**用途 / Purpose:** 处理 `shoot` 相关逻辑。

### ManualReload
`public void ManualReload()`

**用途 / Purpose:** 处理 `manual reload` 相关逻辑。

### AiRequestsShoot
`public void AiRequestsShoot()`

**用途 / Purpose:** 处理 `ai requests shoot` 相关逻辑。

### AiRequestsManualReload
`public void AiRequestsManualReload()`

**用途 / Purpose:** 处理 `ai requests manual reload` 相关逻辑。

### GetSiegeEngineType
`public abstract override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 获取 `siege engine type` 的当前值。

### CanShootAtBox
`public bool CanShootAtBox(Vec3 boxMin, Vec3 boxMax, uint attempts = 5U)`

**用途 / Purpose:** 判断当前对象是否可以执行 `shoot at box`。

### CanShootAtThreat
`public bool CanShootAtThreat(Threat threat)`

**用途 / Purpose:** 判断当前对象是否可以执行 `shoot at threat`。

### GetEstimatedTargetMovementVector
`public virtual Vec3 GetEstimatedTargetMovementVector(Vec3 targetCurrentPosition, Vec3 targetVelocity)`

**用途 / Purpose:** 获取 `estimated target movement vector` 的当前值。

### CanShootAtAgent
`public bool CanShootAtAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否可以执行 `shoot at agent`。

### CanShootAtPoint
`public bool CanShootAtPoint(Vec3 target)`

**用途 / Purpose:** 判断当前对象是否可以执行 `shoot at point`。

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** 获取 `order` 的当前值。

### ProcessTargetValue
`public abstract float ProcessTargetValue(float baseValue, TargetFlags flags)`

**用途 / Purpose:** 处理 `process target value` 相关逻辑。

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 当 `after read from network` 事件触发时调用此方法。

### GetGlobalVelocity
`public virtual Vec3 GetGlobalVelocity()`

**用途 / Purpose:** 获取 `global velocity` 的当前值。

### SetPlayerForceUse
`public void SetPlayerForceUse(bool value)`

**用途 / Purpose:** 设置 `player force use` 的值或状态。

### OnShipCaptured
`public override void OnShipCaptured(BattleSideEnum newDefaultSide)`

**用途 / Purpose:** 当 `ship captured` 事件触发时调用此方法。

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read from network` 相关逻辑。

### OnSiegeWeaponReloadDone
`public delegate void OnSiegeWeaponReloadDone()`

**用途 / Purpose:** 当 `siege weapon reload done` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomRangedSiegeWeapon();
```

## 参见

- [完整类目录](../catalog)