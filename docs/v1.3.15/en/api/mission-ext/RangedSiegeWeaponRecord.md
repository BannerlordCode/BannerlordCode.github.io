<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RangedSiegeWeaponRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RangedSiegeWeaponRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `RangedSiegeWeaponRecord` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

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


## Key Methods

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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)