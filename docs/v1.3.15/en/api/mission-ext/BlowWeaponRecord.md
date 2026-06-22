<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BlowWeaponRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BlowWeaponRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BlowWeaponRecord` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsMissile` | `public bool IsMissile { get; }` |
| `IsShield` | `public bool IsShield { get; }` |
| `IsRanged` | `public bool IsRanged { get; }` |
| `IsAmmo` | `public bool IsAmmo { get; }` |


## Key Methods

### FillAsMeleeBlow

```csharp
public void FillAsMeleeBlow(ItemObject item, WeaponComponentData weaponComponentData, int affectorWeaponSlot, sbyte weaponAttachBoneIndex)
```

### FillAsMissileBlow

```csharp
public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)
```

### HasWeapon

```csharp
public bool HasWeapon()
```

### GetHitSound

```csharp
public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)