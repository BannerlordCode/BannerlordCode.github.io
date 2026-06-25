---
title: "MissionEquipment"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionEquipment`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionEquipment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEquipment`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionEquipment.cs`

## Overview

`MissionEquipment` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `this` | `public MissionWeapon this { get; set; }` |
| `this` | `public MissionWeapon this { get; set; }` |

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### IsValid
`public bool IsValid(CachedBool queriedData)`

**Purpose:** Handles logic related to `is valid`.

### UpdateAndMarkValid
`public void UpdateAndMarkValid(CachedBool data, bool value)`

**Purpose:** Updates the state or data of `and mark valid`.

### GetValue
`public bool GetValue(CachedBool data)`

**Purpose:** Gets the current value of `value`.

### IsValid
`public bool IsValid(CachedFloat queriedData)`

**Purpose:** Handles logic related to `is valid`.

### UpdateAndMarkValid
`public void UpdateAndMarkValid(CachedFloat data, float value)`

**Purpose:** Updates the state or data of `and mark valid`.

### GetValue
`public float GetValue(CachedFloat data)`

**Purpose:** Gets the current value of `value`.

### InvalidateOnWeaponSlotUpdated
`public void InvalidateOnWeaponSlotUpdated()`

**Purpose:** Handles logic related to `invalidate on weapon slot updated`.

### InvalidateOnWeaponUsageIndexUpdated
`public void InvalidateOnWeaponUsageIndexUpdated()`

**Purpose:** Handles logic related to `invalidate on weapon usage index updated`.

### InvalidateOnWeaponAmmoUpdated
`public void InvalidateOnWeaponAmmoUpdated()`

**Purpose:** Handles logic related to `invalidate on weapon ammo updated`.

### InvalidateOnWeaponAmmoAvailabilityChanged
`public void InvalidateOnWeaponAmmoAvailabilityChanged()`

**Purpose:** Handles logic related to `invalidate on weapon ammo availability changed`.

### InvalidateOnWeaponHitPointsUpdated
`public void InvalidateOnWeaponHitPointsUpdated()`

**Purpose:** Handles logic related to `invalidate on weapon hit points updated`.

### InvalidateOnWeaponDestroyed
`public void InvalidateOnWeaponDestroyed()`

**Purpose:** Handles logic related to `invalidate on weapon destroyed`.

### FillFrom
`public void FillFrom(MissionEquipment sourceEquipment)`

**Purpose:** Handles logic related to `fill from`.

### FillFrom
`public void FillFrom(Equipment sourceEquipment, Banner banner)`

**Purpose:** Handles logic related to `fill from`.

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

**Purpose:** Gets the current value of `total weight of weapons`.

### SelectWeaponPickUpSlot
`public static EquipmentIndex SelectWeaponPickUpSlot(Agent agentPickingUp, MissionWeapon weaponBeingPickedUp, bool isStuckMissile)`

**Purpose:** Handles logic related to `select weapon pick up slot`.

### HasAmmo
`public bool HasAmmo(EquipmentIndex equipmentIndex, out int rangedUsageIndex, out bool hasLoadedAmmo, out bool noAmmoInThisSlot)`

**Purpose:** Checks whether the current object has/contains `ammo`.

### GetAmmoAmount
`public int GetAmmoAmount(EquipmentIndex weaponIndex)`

**Purpose:** Gets the current value of `ammo amount`.

### GetMaxAmmo
`public int GetMaxAmmo(EquipmentIndex weaponIndex)`

**Purpose:** Gets the current value of `max ammo`.

### GetAmmoCountAndIndexOfType
`public void GetAmmoCountAndIndexOfType(ItemObject.ItemTypeEnum itemType, out int ammoCount, out EquipmentIndex eIndex, EquipmentIndex equippedIndex = EquipmentIndex.None)`

**Purpose:** Gets the current value of `ammo count and index of type`.

### DoesWeaponFitToSlot
`public static bool DoesWeaponFitToSlot(EquipmentIndex slotIndex, MissionWeapon weapon)`

**Purpose:** Handles logic related to `does weapon fit to slot`.

### CheckLoadedAmmos
`public void CheckLoadedAmmos()`

**Purpose:** Handles logic related to `check loaded ammos`.

### SetUsageIndexOfSlot
`public void SetUsageIndexOfSlot(EquipmentIndex slotIndex, int usageIndex)`

**Purpose:** Sets the value or state of `usage index of slot`.

### SetReloadPhaseOfSlot
`public void SetReloadPhaseOfSlot(EquipmentIndex slotIndex, short reloadPhase)`

**Purpose:** Sets the value or state of `reload phase of slot`.

### SetAmountOfSlot
`public void SetAmountOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxAmount = false)`

**Purpose:** Sets the value or state of `amount of slot`.

### SetHitPointsOfSlot
`public void SetHitPointsOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxHitPoints = false)`

**Purpose:** Sets the value or state of `hit points of slot`.

### SetReloadedAmmoOfSlot
`public void SetReloadedAmmoOfSlot(EquipmentIndex slotIndex, EquipmentIndex ammoSlotIndex, short totalAmmo)`

**Purpose:** Sets the value or state of `reloaded ammo of slot`.

### SetConsumedAmmoOfSlot
`public void SetConsumedAmmoOfSlot(EquipmentIndex slotIndex, short count)`

**Purpose:** Sets the value or state of `consumed ammo of slot`.

### AttachWeaponToWeaponInSlot
`public void AttachWeaponToWeaponInSlot(EquipmentIndex slotIndex, ref MissionWeapon weapon, ref MatrixFrame attachLocalFrame)`

**Purpose:** Handles logic related to `attach weapon to weapon in slot`.

### HasShield
`public bool HasShield()`

**Purpose:** Checks whether the current object has/contains `shield`.

### HasAnyWeapon
`public bool HasAnyWeapon()`

**Purpose:** Checks whether the current object has/contains `any weapon`.

### HasAnyWeaponWithFlags
`public bool HasAnyWeaponWithFlags(WeaponFlags flags)`

**Purpose:** Checks whether the current object has/contains `any weapon with flags`.

### HasAnyWeaponWithItemUsageSetFlags
`public bool HasAnyWeaponWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags)`

**Purpose:** Checks whether the current object has/contains `any weapon with item usage set flags`.

### GetBanner
`public ItemObject GetBanner()`

**Purpose:** Gets the current value of `banner`.

### HasRangedWeapon
`public bool HasRangedWeapon(WeaponClass requiredAmmoClass = WeaponClass.Undefined)`

**Purpose:** Checks whether the current object has/contains `ranged weapon`.

### ContainsNonConsumableRangedWeaponWithAmmo
`public bool ContainsNonConsumableRangedWeaponWithAmmo()`

**Purpose:** Handles logic related to `contains non consumable ranged weapon with ammo`.

### ContainsMeleeWeapon
`public bool ContainsMeleeWeapon()`

**Purpose:** Handles logic related to `contains melee weapon`.

### ContainsShield
`public bool ContainsShield()`

**Purpose:** Handles logic related to `contains shield`.

### ContainsSpear
`public bool ContainsSpear()`

**Purpose:** Handles logic related to `contains spear`.

### ContainsThrownWeapon
`public bool ContainsThrownWeapon()`

**Purpose:** Handles logic related to `contains thrown weapon`.

### SetGlossMultipliersOfWeaponsRandomly
`public void SetGlossMultipliersOfWeaponsRandomly(int seed)`

**Purpose:** Sets the value or state of `gloss multipliers of weapons randomly`.

## Usage Example

```csharp
var value = new MissionEquipment();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)