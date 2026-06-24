<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionWeapon`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int attachmentIndex)`

**Purpose:** Gets the current value of `attached weapon`.

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int attachmentIndex)`

**Purpose:** Gets the current value of `attached weapon frame`.

### IsShield
`public bool IsShield()`

**Purpose:** Handles logic related to `is shield`.

### IsBanner
`public bool IsBanner()`

**Purpose:** Handles logic related to `is banner`.

### IsAnyAmmo
`public bool IsAnyAmmo()`

**Purpose:** Handles logic related to `is any ammo`.

### HasAnyUsageWithWeaponClass
`public bool HasAnyUsageWithWeaponClass(WeaponClass weaponClass)`

**Purpose:** Checks whether the current object has/contains `any usage with weapon class`.

### HasAnyUsageWithAmmoClass
`public bool HasAnyUsageWithAmmoClass(WeaponClass ammoClass)`

**Purpose:** Checks whether the current object has/contains `any usage with ammo class`.

### HasAllUsagesWithAnyWeaponFlag
`public bool HasAllUsagesWithAnyWeaponFlag(WeaponFlags flags)`

**Purpose:** Checks whether the current object has/contains `all usages with any weapon flag`.

### HasAnyUsageWithoutWeaponFlag
`public bool HasAnyUsageWithoutWeaponFlag(WeaponFlags flags)`

**Purpose:** Checks whether the current object has/contains `any usage without weapon flag`.

### GatherInformationFromWeapon
`public void GatherInformationFromWeapon(out bool weaponHasMelee, out bool weaponHasShield, out bool weaponHasPolearm, out bool weaponHasNonConsumableRanged, out bool weaponHasThrown, out WeaponClass rangedAmmoClass)`

**Purpose:** Handles logic related to `gather information from weapon`.

### GetConsumableIfAny
`public bool GetConsumableIfAny(out WeaponComponentData consumableWeapon)`

**Purpose:** Gets the current value of `consumable if any`.

### IsAnyConsumable
`public bool IsAnyConsumable()`

**Purpose:** Handles logic related to `is any consumable`.

### GetRangedUsageIndex
`public int GetRangedUsageIndex()`

**Purpose:** Gets the current value of `ranged usage index`.

### Consume
`public MissionWeapon Consume(short count)`

**Purpose:** Handles logic related to `consume`.

### ConsumeAmmo
`public void ConsumeAmmo(short count)`

**Purpose:** Handles logic related to `consume ammo`.

### SetAmmo
`public void SetAmmo(MissionWeapon ammoWeapon)`

**Purpose:** Sets the value or state of `ammo`.

### ReloadAmmo
`public void ReloadAmmo(MissionWeapon ammoWeapon, short reloadPhase)`

**Purpose:** Handles logic related to `reload ammo`.

### AttachWeapon
`public void AttachWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachFrame)`

**Purpose:** Handles logic related to `attach weapon`.

### RemoveAttachedWeapon
`public void RemoveAttachedWeapon(int attachmentIndex)`

**Purpose:** Removes `attached weapon` from the current collection or state.

### HasEnoughSpaceForAmount
`public bool HasEnoughSpaceForAmount(int amount)`

**Purpose:** Checks whether the current object has/contains `enough space for amount`.

### SetRandomGlossMultiplier
`public void SetRandomGlossMultiplier(int seed)`

**Purpose:** Sets the value or state of `random gloss multiplier`.

### AddExtraModifiedMaxValue
`public void AddExtraModifiedMaxValue(short extraValue)`

**Purpose:** Adds `extra modified max value` to the current collection or state.

### OnGetWeaponDataDelegate
`public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)`

**Purpose:** Called when the `get weapon data delegate` event is raised.

## Usage Example

```csharp
var value = new MissionWeapon();
value.GetModifiedItemName();
```

## See Also

- [Complete Class Catalog](../catalog)