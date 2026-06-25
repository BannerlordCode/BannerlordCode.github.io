---
title: "MissionWeapon"
description: "Auto-generated class reference for MissionWeapon."
---
# MissionWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionWeapon`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionWeapon.cs`

## Overview

`MissionWeapon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

**Purpose:** Reads and returns the modified item name value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedItemName();
```

### IsEqualTo
`public bool IsEqualTo(MissionWeapon other)`

**Purpose:** Determines whether the this instance is in the equal to state or condition.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsEqualTo(other);
```

### IsSameType
`public bool IsSameType(MissionWeapon other)`

**Purpose:** Determines whether the this instance is in the same type state or condition.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsSameType(other);
```

### GetWeight
`public float GetWeight()`

**Purpose:** Reads and returns the weight value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeight();
```

### GetWeaponComponentDataForUsage
`public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex)`

**Purpose:** Reads and returns the weapon component data for usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeaponComponentDataForUsage(0);
```

### GetGetModifiedArmorForCurrentUsage
`public int GetGetModifiedArmorForCurrentUsage()`

**Purpose:** Reads and returns the get modified armor for current usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetGetModifiedArmorForCurrentUsage();
```

### GetModifiedThrustDamageForCurrentUsage
`public int GetModifiedThrustDamageForCurrentUsage()`

**Purpose:** Reads and returns the modified thrust damage for current usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedThrustDamageForCurrentUsage();
```

### GetModifiedSwingDamageForCurrentUsage
`public int GetModifiedSwingDamageForCurrentUsage()`

**Purpose:** Reads and returns the modified swing damage for current usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedSwingDamageForCurrentUsage();
```

### GetModifiedMissileDamageForCurrentUsage
`public int GetModifiedMissileDamageForCurrentUsage()`

**Purpose:** Reads and returns the modified missile damage for current usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedMissileDamageForCurrentUsage();
```

### GetModifiedThrustSpeedForCurrentUsage
`public int GetModifiedThrustSpeedForCurrentUsage()`

**Purpose:** Reads and returns the modified thrust speed for current usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedThrustSpeedForCurrentUsage();
```

### GetModifiedSwingSpeedForCurrentUsage
`public int GetModifiedSwingSpeedForCurrentUsage()`

**Purpose:** Reads and returns the modified swing speed for current usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedSwingSpeedForCurrentUsage();
```

### GetModifiedMissileSpeedForCurrentUsage
`public int GetModifiedMissileSpeedForCurrentUsage()`

**Purpose:** Reads and returns the modified missile speed for current usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedMissileSpeedForCurrentUsage();
```

### GetModifiedMissileSpeedForUsage
`public int GetModifiedMissileSpeedForUsage(int usageIndex)`

**Purpose:** Reads and returns the modified missile speed for usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedMissileSpeedForUsage(0);
```

### GetModifiedHandlingForCurrentUsage
`public int GetModifiedHandlingForCurrentUsage()`

**Purpose:** Reads and returns the modified handling for current usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedHandlingForCurrentUsage();
```

### GetWeaponData
`public WeaponData GetWeaponData(bool needBatchedVersionForMeshes)`

**Purpose:** Reads and returns the weapon data value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeaponData(false);
```

### GetWeaponStatsData
`public WeaponStatsData GetWeaponStatsData()`

**Purpose:** Reads and returns the weapon stats data value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeaponStatsData();
```

### GetWeaponStatsDataForUsage
`public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex)`

**Purpose:** Reads and returns the weapon stats data for usage value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeaponStatsDataForUsage(0);
```

### GetAmmoWeaponData
`public WeaponData GetAmmoWeaponData(bool needBatchedVersion)`

**Purpose:** Reads and returns the ammo weapon data value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAmmoWeaponData(false);
```

### GetAmmoWeaponStatsData
`public WeaponStatsData GetAmmoWeaponStatsData()`

**Purpose:** Reads and returns the ammo weapon stats data value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAmmoWeaponStatsData();
```

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount()`

**Purpose:** Reads and returns the attached weapons count value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAttachedWeaponsCount();
```

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int attachmentIndex)`

**Purpose:** Reads and returns the attached weapon value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAttachedWeapon(0);
```

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int attachmentIndex)`

**Purpose:** Reads and returns the attached weapon frame value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAttachedWeaponFrame(0);
```

### IsShield
`public bool IsShield()`

**Purpose:** Determines whether the this instance is in the shield state or condition.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsShield();
```

### IsBanner
`public bool IsBanner()`

**Purpose:** Determines whether the this instance is in the banner state or condition.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsBanner();
```

### IsAnyAmmo
`public bool IsAnyAmmo()`

**Purpose:** Determines whether the this instance is in the any ammo state or condition.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsAnyAmmo();
```

### HasAnyUsageWithWeaponClass
`public bool HasAnyUsageWithWeaponClass(WeaponClass weaponClass)`

**Purpose:** Determines whether the this instance already holds any usage with weapon class.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasAnyUsageWithWeaponClass(weaponClass);
```

### HasAnyUsageWithAmmoClass
`public bool HasAnyUsageWithAmmoClass(WeaponClass ammoClass)`

**Purpose:** Determines whether the this instance already holds any usage with ammo class.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasAnyUsageWithAmmoClass(ammoClass);
```

### HasAllUsagesWithAnyWeaponFlag
`public bool HasAllUsagesWithAnyWeaponFlag(WeaponFlags flags)`

**Purpose:** Determines whether the this instance already holds all usages with any weapon flag.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasAllUsagesWithAnyWeaponFlag(flags);
```

### HasAnyUsageWithoutWeaponFlag
`public bool HasAnyUsageWithoutWeaponFlag(WeaponFlags flags)`

**Purpose:** Determines whether the this instance already holds any usage without weapon flag.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasAnyUsageWithoutWeaponFlag(flags);
```

### GatherInformationFromWeapon
`public void GatherInformationFromWeapon(out bool weaponHasMelee, out bool weaponHasShield, out bool weaponHasPolearm, out bool weaponHasNonConsumableRanged, out bool weaponHasThrown, out WeaponClass rangedAmmoClass)`

**Purpose:** Collects or aggregates information from weapon into the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.GatherInformationFromWeapon(weaponHasMelee, weaponHasShield, weaponHasPolearm, weaponHasNonConsumableRanged, weaponHasThrown, rangedAmmoClass);
```

### GetConsumableIfAny
`public bool GetConsumableIfAny(out WeaponComponentData consumableWeapon)`

**Purpose:** Reads and returns the consumable if any value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetConsumableIfAny(consumableWeapon);
```

### IsAnyConsumable
`public bool IsAnyConsumable()`

**Purpose:** Determines whether the this instance is in the any consumable state or condition.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsAnyConsumable();
```

### GetRangedUsageIndex
`public int GetRangedUsageIndex()`

**Purpose:** Reads and returns the ranged usage index value held by the this instance.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetRangedUsageIndex();
```

### Consume
`public MissionWeapon Consume(short count)`

**Purpose:** Executes the Consume logic.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.Consume(0);
```

### ConsumeAmmo
`public void ConsumeAmmo(short count)`

**Purpose:** Executes the ConsumeAmmo logic.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.ConsumeAmmo(0);
```

### SetAmmo
`public void SetAmmo(MissionWeapon ammoWeapon)`

**Purpose:** Assigns a new value to ammo and updates the object's internal state.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.SetAmmo(ammoWeapon);
```

### ReloadAmmo
`public void ReloadAmmo(MissionWeapon ammoWeapon, short reloadPhase)`

**Purpose:** Executes the ReloadAmmo logic.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.ReloadAmmo(ammoWeapon, 0);
```

### AttachWeapon
`public void AttachWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachFrame)`

**Purpose:** Executes the AttachWeapon logic.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.AttachWeapon(attachedWeapon, attachFrame);
```

### RemoveAttachedWeapon
`public void RemoveAttachedWeapon(int attachmentIndex)`

**Purpose:** Removes attached weapon from the current collection or state.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.RemoveAttachedWeapon(0);
```

### HasEnoughSpaceForAmount
`public bool HasEnoughSpaceForAmount(int amount)`

**Purpose:** Determines whether the this instance already holds enough space for amount.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasEnoughSpaceForAmount(0);
```

### SetRandomGlossMultiplier
`public void SetRandomGlossMultiplier(int seed)`

**Purpose:** Assigns a new value to random gloss multiplier and updates the object's internal state.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.SetRandomGlossMultiplier(0);
```

### AddExtraModifiedMaxValue
`public void AddExtraModifiedMaxValue(short extraValue)`

**Purpose:** Adds extra modified max value to the current collection or state.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.AddExtraModifiedMaxValue(0);
```

### OnGetWeaponDataDelegate
`public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)`

**Purpose:** Invoked when the get weapon data delegate event is raised.

```csharp
// Obtain an instance of MissionWeapon from the subsystem API first
MissionWeapon missionWeapon = ...;
missionWeapon.OnGetWeaponDataDelegate(weaponData, weapon, false, banner, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionWeapon missionWeapon = ...;
missionWeapon.GetModifiedItemName();
```

## See Also

- [Area Index](../)