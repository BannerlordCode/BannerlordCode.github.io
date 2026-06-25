---
title: "MissionEquipment"
description: "Auto-generated class reference for MissionEquipment."
---
# MissionEquipment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEquipment`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionEquipment.cs`

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

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.Initialize();
```

### IsValid
`public bool IsValid(CachedBool queriedData)`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.IsValid(queriedData);
```

### UpdateAndMarkValid
`public void UpdateAndMarkValid(CachedBool data, bool value)`

**Purpose:** Recalculates and stores the latest representation of `and mark valid`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.UpdateAndMarkValid(data, false);
```

### GetValue
`public bool GetValue(CachedBool data)`

**Purpose:** Reads and returns the `value` value held by the current object.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetValue(data);
```

### IsValid
`public bool IsValid(CachedFloat queriedData)`

**Purpose:** Determines whether the current object is in the `valid` state or condition.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.IsValid(queriedData);
```

### UpdateAndMarkValid
`public void UpdateAndMarkValid(CachedFloat data, float value)`

**Purpose:** Recalculates and stores the latest representation of `and mark valid`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.UpdateAndMarkValid(data, 0);
```

### GetValue
`public float GetValue(CachedFloat data)`

**Purpose:** Reads and returns the `value` value held by the current object.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetValue(data);
```

### InvalidateOnWeaponSlotUpdated
`public void InvalidateOnWeaponSlotUpdated()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponSlotUpdated();
```

### InvalidateOnWeaponUsageIndexUpdated
`public void InvalidateOnWeaponUsageIndexUpdated()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponUsageIndexUpdated();
```

### InvalidateOnWeaponAmmoUpdated
`public void InvalidateOnWeaponAmmoUpdated()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponAmmoUpdated();
```

### InvalidateOnWeaponAmmoAvailabilityChanged
`public void InvalidateOnWeaponAmmoAvailabilityChanged()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponAmmoAvailabilityChanged();
```

### InvalidateOnWeaponHitPointsUpdated
`public void InvalidateOnWeaponHitPointsUpdated()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponHitPointsUpdated();
```

### InvalidateOnWeaponDestroyed
`public void InvalidateOnWeaponDestroyed()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponDestroyed();
```

### FillFrom
`public void FillFrom(MissionEquipment sourceEquipment)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.FillFrom(sourceEquipment);
```

### FillFrom
`public void FillFrom(Equipment sourceEquipment, Banner banner)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.FillFrom(sourceEquipment, banner);
```

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

**Purpose:** Reads and returns the `total weight of weapons` value held by the current object.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetTotalWeightOfWeapons();
```

### SelectWeaponPickUpSlot
`public static EquipmentIndex SelectWeaponPickUpSlot(Agent agentPickingUp, MissionWeapon weaponBeingPickedUp, bool isStuckMissile)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
MissionEquipment.SelectWeaponPickUpSlot(agentPickingUp, weaponBeingPickedUp, false);
```

### HasAmmo
`public bool HasAmmo(EquipmentIndex equipmentIndex, out int rangedUsageIndex, out bool hasLoadedAmmo, out bool noAmmoInThisSlot)`

**Purpose:** Determines whether the current object already holds `ammo`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasAmmo(equipmentIndex, rangedUsageIndex, hasLoadedAmmo, noAmmoInThisSlot);
```

### GetAmmoAmount
`public int GetAmmoAmount(EquipmentIndex weaponIndex)`

**Purpose:** Reads and returns the `ammo amount` value held by the current object.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetAmmoAmount(weaponIndex);
```

### GetMaxAmmo
`public int GetMaxAmmo(EquipmentIndex weaponIndex)`

**Purpose:** Reads and returns the `max ammo` value held by the current object.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetMaxAmmo(weaponIndex);
```

### GetAmmoCountAndIndexOfType
`public void GetAmmoCountAndIndexOfType(ItemObject.ItemTypeEnum itemType, out int ammoCount, out EquipmentIndex eIndex, EquipmentIndex equippedIndex = EquipmentIndex.None)`

**Purpose:** Reads and returns the `ammo count and index of type` value held by the current object.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.GetAmmoCountAndIndexOfType(itemType, ammoCount, eIndex, equipmentIndex.None);
```

### DoesWeaponFitToSlot
`public static bool DoesWeaponFitToSlot(EquipmentIndex slotIndex, MissionWeapon weapon)`

**Purpose:** Returns a boolean answer to whether `weapon fit to slot` is true for the current object.

```csharp
// Static call; no instance required
MissionEquipment.DoesWeaponFitToSlot(slotIndex, weapon);
```

### CheckLoadedAmmos
`public void CheckLoadedAmmos()`

**Purpose:** Verifies whether `loaded ammos` holds true for the current object.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.CheckLoadedAmmos();
```

### SetUsageIndexOfSlot
`public void SetUsageIndexOfSlot(EquipmentIndex slotIndex, int usageIndex)`

**Purpose:** Assigns a new value to `usage index of slot` and updates the object's internal state.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.SetUsageIndexOfSlot(slotIndex, 0);
```

### SetReloadPhaseOfSlot
`public void SetReloadPhaseOfSlot(EquipmentIndex slotIndex, short reloadPhase)`

**Purpose:** Assigns a new value to `reload phase of slot` and updates the object's internal state.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.SetReloadPhaseOfSlot(slotIndex, 0);
```

### SetAmountOfSlot
`public void SetAmountOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxAmount = false)`

**Purpose:** Assigns a new value to `amount of slot` and updates the object's internal state.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.SetAmountOfSlot(slotIndex, 0, false);
```

### SetHitPointsOfSlot
`public void SetHitPointsOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxHitPoints = false)`

**Purpose:** Assigns a new value to `hit points of slot` and updates the object's internal state.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.SetHitPointsOfSlot(slotIndex, 0, false);
```

### SetReloadedAmmoOfSlot
`public void SetReloadedAmmoOfSlot(EquipmentIndex slotIndex, EquipmentIndex ammoSlotIndex, short totalAmmo)`

**Purpose:** Assigns a new value to `reloaded ammo of slot` and updates the object's internal state.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.SetReloadedAmmoOfSlot(slotIndex, ammoSlotIndex, 0);
```

### SetConsumedAmmoOfSlot
`public void SetConsumedAmmoOfSlot(EquipmentIndex slotIndex, short count)`

**Purpose:** Assigns a new value to `consumed ammo of slot` and updates the object's internal state.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.SetConsumedAmmoOfSlot(slotIndex, 0);
```

### AttachWeaponToWeaponInSlot
`public void AttachWeaponToWeaponInSlot(EquipmentIndex slotIndex, ref MissionWeapon weapon, ref MatrixFrame attachLocalFrame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.AttachWeaponToWeaponInSlot(slotIndex, weapon, attachLocalFrame);
```

### HasShield
`public bool HasShield()`

**Purpose:** Determines whether the current object already holds `shield`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasShield();
```

### HasAnyWeapon
`public bool HasAnyWeapon()`

**Purpose:** Determines whether the current object already holds `any weapon`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasAnyWeapon();
```

### HasAnyWeaponWithFlags
`public bool HasAnyWeaponWithFlags(WeaponFlags flags)`

**Purpose:** Determines whether the current object already holds `any weapon with flags`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasAnyWeaponWithFlags(flags);
```

### HasAnyWeaponWithItemUsageSetFlags
`public bool HasAnyWeaponWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags)`

**Purpose:** Determines whether the current object already holds `any weapon with item usage set flags`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasAnyWeaponWithItemUsageSetFlags(flags);
```

### GetBanner
`public ItemObject GetBanner()`

**Purpose:** Reads and returns the `banner` value held by the current object.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetBanner();
```

### HasRangedWeapon
`public bool HasRangedWeapon(WeaponClass requiredAmmoClass = WeaponClass.Undefined)`

**Purpose:** Determines whether the current object already holds `ranged weapon`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasRangedWeapon(weaponClass.Undefined);
```

### ContainsNonConsumableRangedWeaponWithAmmo
`public bool ContainsNonConsumableRangedWeaponWithAmmo()`

**Purpose:** Indicates whether the current object contains `non consumable ranged weapon with ammo`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsNonConsumableRangedWeaponWithAmmo();
```

### ContainsMeleeWeapon
`public bool ContainsMeleeWeapon()`

**Purpose:** Indicates whether the current object contains `melee weapon`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsMeleeWeapon();
```

### ContainsShield
`public bool ContainsShield()`

**Purpose:** Indicates whether the current object contains `shield`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsShield();
```

### ContainsSpear
`public bool ContainsSpear()`

**Purpose:** Indicates whether the current object contains `spear`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsSpear();
```

### ContainsThrownWeapon
`public bool ContainsThrownWeapon()`

**Purpose:** Indicates whether the current object contains `thrown weapon`.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsThrownWeapon();
```

### SetGlossMultipliersOfWeaponsRandomly
`public void SetGlossMultipliersOfWeaponsRandomly(int seed)`

**Purpose:** Assigns a new value to `gloss multipliers of weapons randomly` and updates the object's internal state.

```csharp
// Obtain an instance of MissionEquipment from the subsystem API first
MissionEquipment missionEquipment = ...;
missionEquipment.SetGlossMultipliersOfWeaponsRandomly(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionEquipment missionEquipment = ...;
missionEquipment.Initialize();
```

## See Also

- [Area Index](../)