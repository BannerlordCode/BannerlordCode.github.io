<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImpactSoundModifier`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImpactSoundModifier

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ImpactSoundModifier`
**Area:** mission-ext

## Overview

`ImpactSoundModifier` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
`public TextObject GetModifiedItemName()`

**Purpose:** Gets the current value of `modified item name`.

### IsEqualTo
`public bool IsEqualTo(MissionWeapon other)`

**Purpose:** Handles logic related to `is equal to`.

### IsSameType
`public bool IsSameType(MissionWeapon other)`

**Purpose:** Handles logic related to `is same type`.

### GetWeight
`public float GetWeight()`

**Purpose:** Gets the current value of `weight`.

### GetWeaponComponentDataForUsage
`public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex)`

**Purpose:** Gets the current value of `weapon component data for usage`.

### GetGetModifiedArmorForCurrentUsage
`public int GetGetModifiedArmorForCurrentUsage()`

**Purpose:** Gets the current value of `get modified armor for current usage`.

### GetModifiedThrustDamageForCurrentUsage
`public int GetModifiedThrustDamageForCurrentUsage()`

**Purpose:** Gets the current value of `modified thrust damage for current usage`.

### GetModifiedSwingDamageForCurrentUsage
`public int GetModifiedSwingDamageForCurrentUsage()`

**Purpose:** Gets the current value of `modified swing damage for current usage`.

### GetModifiedMissileDamageForCurrentUsage
`public int GetModifiedMissileDamageForCurrentUsage()`

**Purpose:** Gets the current value of `modified missile damage for current usage`.

### GetModifiedThrustSpeedForCurrentUsage
`public int GetModifiedThrustSpeedForCurrentUsage()`

**Purpose:** Gets the current value of `modified thrust speed for current usage`.

### GetModifiedSwingSpeedForCurrentUsage
`public int GetModifiedSwingSpeedForCurrentUsage()`

**Purpose:** Gets the current value of `modified swing speed for current usage`.

### GetModifiedMissileSpeedForCurrentUsage
`public int GetModifiedMissileSpeedForCurrentUsage()`

**Purpose:** Gets the current value of `modified missile speed for current usage`.

### GetModifiedMissileSpeedForUsage
`public int GetModifiedMissileSpeedForUsage(int usageIndex)`

**Purpose:** Gets the current value of `modified missile speed for usage`.

### GetModifiedHandlingForCurrentUsage
`public int GetModifiedHandlingForCurrentUsage()`

**Purpose:** Gets the current value of `modified handling for current usage`.

### GetWeaponData
`public WeaponData GetWeaponData(bool needBatchedVersionForMeshes)`

**Purpose:** Gets the current value of `weapon data`.

### GetWeaponStatsData
`public WeaponStatsData GetWeaponStatsData()`

**Purpose:** Gets the current value of `weapon stats data`.

### GetWeaponStatsDataForUsage
`public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex)`

**Purpose:** Gets the current value of `weapon stats data for usage`.

### GetAmmoWeaponData
`public WeaponData GetAmmoWeaponData(bool needBatchedVersion)`

**Purpose:** Gets the current value of `ammo weapon data`.

### GetAmmoWeaponStatsData
`public WeaponStatsData GetAmmoWeaponStatsData()`

**Purpose:** Gets the current value of `ammo weapon stats data`.

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount()`

**Purpose:** Gets the current value of `attached weapons count`.

## Usage Example

```csharp
// First obtain a ImpactSoundModifier instance from game state, then call one of its public methods
var value = new ImpactSoundModifier();
value.GetModifiedItemName();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
