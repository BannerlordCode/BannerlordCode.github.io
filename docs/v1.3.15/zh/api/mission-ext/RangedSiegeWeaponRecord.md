<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RangedSiegeWeaponRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RangedSiegeWeaponRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct RangedSiegeWeaponRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**领域:** mission-ext

## 概述

`RangedSiegeWeaponRecord` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 RangedSiegeWeaponRecord 实例，再调用它的公开方法
var value = new RangedSiegeWeaponRecord();
value.SetAmmo(0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
