<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionWeapon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `MissionWeapon` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Item` | `public ItemObject Item { get; }` |
| `ItemModifier` | `public ItemModifier ItemModifier { get; }` |
| `WeaponsCount` | `public int WeaponsCount { get; }` |
| `CurrentUsageItem` | `public WeaponComponentData CurrentUsageItem { get; set; }` |
| `ReloadPhase` | `public short ReloadPhase { get; set; }` |
| `ReloadPhaseCount` | `public short ReloadPhaseCount { get; }` |
| `IsReloading` | `public bool IsReloading { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `GlossMultiplier` | `public float GlossMultiplier { get; }` |
| `RawDataForNetwork` | `public short RawDataForNetwork { get; set; }` |
| `HitPoints` | `public short HitPoints { get; set; }` |
| `Amount` | `public short Amount { get; set; }` |
| `Ammo` | `public short Ammo { get; }` |
| `AmmoWeapon` | `public MissionWeapon AmmoWeapon { get; }` |
| `MaxAmmo` | `public short MaxAmmo { get; }` |
| `ModifiedMaxAmount` | `public short ModifiedMaxAmount { get; }` |
| `ModifiedMaxHitPoints` | `public short ModifiedMaxHitPoints { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Value` | `public MissionWeapon Value { get; }` |


## Key Methods

### GetModifiedItemName

```csharp
public TextObject GetModifiedItemName()
```

### IsEqualTo

```csharp
public bool IsEqualTo(MissionWeapon other)
```

### IsSameType

```csharp
public bool IsSameType(MissionWeapon other)
```

### GetWeight

```csharp
public float GetWeight()
```

### GetWeaponComponentDataForUsage

```csharp
public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex)
```

### GetGetModifiedArmorForCurrentUsage

```csharp
public int GetGetModifiedArmorForCurrentUsage()
```

### GetModifiedThrustDamageForCurrentUsage

```csharp
public int GetModifiedThrustDamageForCurrentUsage()
```

### GetModifiedSwingDamageForCurrentUsage

```csharp
public int GetModifiedSwingDamageForCurrentUsage()
```

### GetModifiedMissileDamageForCurrentUsage

```csharp
public int GetModifiedMissileDamageForCurrentUsage()
```

### GetModifiedThrustSpeedForCurrentUsage

```csharp
public int GetModifiedThrustSpeedForCurrentUsage()
```

### GetModifiedSwingSpeedForCurrentUsage

```csharp
public int GetModifiedSwingSpeedForCurrentUsage()
```

### GetModifiedMissileSpeedForCurrentUsage

```csharp
public int GetModifiedMissileSpeedForCurrentUsage()
```

### GetModifiedMissileSpeedForUsage

```csharp
public int GetModifiedMissileSpeedForUsage(int usageIndex)
```

### GetModifiedHandlingForCurrentUsage

```csharp
public int GetModifiedHandlingForCurrentUsage()
```

### GetWeaponData

```csharp
public WeaponData GetWeaponData(bool needBatchedVersionForMeshes)
```

### GetWeaponStatsData

```csharp
public WeaponStatsData GetWeaponStatsData()
```

### GetWeaponStatsDataForUsage

```csharp
public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex)
```

### GetAmmoWeaponData

```csharp
public WeaponData GetAmmoWeaponData(bool needBatchedVersion)
```

### GetAmmoWeaponStatsData

```csharp
public WeaponStatsData GetAmmoWeaponStatsData()
```

### GetAttachedWeaponsCount

```csharp
public int GetAttachedWeaponsCount()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)