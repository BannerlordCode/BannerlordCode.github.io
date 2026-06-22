<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RangedSiegeWeapon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RangedSiegeWeapon

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`RangedSiegeWeapon` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
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

```csharp
public virtual void SetAmmo(int ammoLeft)
```

### SetStartAmmo

```csharp
public virtual void SetStartAmmo(int ammoLeft)
```

### ChangeProjectileEntityClient

```csharp
public void ChangeProjectileEntityClient(int index)
```

### WriteToNetwork

```csharp
public override void WriteToNetwork()
```

### IsInRangeToCheckAlternativePoints

```csharp
public override bool IsInRangeToCheckAlternativePoints(Agent agent)
```

### GetBestPointAlternativeTo

```csharp
public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### GiveInput

```csharp
public void GiveInput(float inputX, float inputY)
```

### GiveExactInput

```csharp
public void GiveExactInput(float targetX, float targetY)
```

### GetTargetReleaseAngle

```csharp
public virtual float GetTargetReleaseAngle(Vec3 target)
```

### AimAtThreat

```csharp
public virtual bool AimAtThreat(Threat threat)
```

### AimAtTarget

```csharp
public bool AimAtTarget(Vec3 target)
```

### CheckIsTargetReached

```csharp
public virtual bool CheckIsTargetReached(Vec3 target)
```

### GetEstimatedTargetGlobalPoint

```csharp
public Vec3 GetEstimatedTargetGlobalPoint(Threat threat)
```

### GetEstimatedTargetGlobalPointForAgent

```csharp
public Vec3 GetEstimatedTargetGlobalPointForAgent(Agent agent)
```

### AimAtRotation

```csharp
public virtual void AimAtRotation(float horizontalRotation, float verticalRotation)
```

### Shoot

```csharp
public bool Shoot()
```

### ManualReload

```csharp
public void ManualReload()
```

### AiRequestsShoot

```csharp
public void AiRequestsShoot()
```

### AiRequestsManualReload

```csharp
public void AiRequestsManualReload()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)