---
title: "MissionEquipment"
description: "Auto-generated class reference for MissionEquipment."
---
# MissionEquipment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEquipment `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MissionEquipment.cs

## Overview

Auto-generated stub for `MissionEquipment`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### FillFrom
`public void FillFrom(MissionEquipment sourceEquipment)`

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

### SelectWeaponPickUpSlot
`public static EquipmentIndex SelectWeaponPickUpSlot(Agent agentPickingUp,MissionWeapon weaponBeingPickedUp,bool isStuckMissile)`

### HasAmmo
`public bool HasAmmo(EquipmentIndex equipmentIndex,out int rangedUsageIndex,out bool hasLoadedAmmo,out bool noAmmoInThisSlot)`

### GetAmmoAmount
`public int GetAmmoAmount(EquipmentIndex weaponIndex)`

### GetMaxAmmo
`public int GetMaxAmmo(EquipmentIndex weaponIndex)`

### GetAmmoCountAndIndexOfType
`public void GetAmmoCountAndIndexOfType(ItemObject.ItemTypeEnum itemType,out int ammoCount,out EquipmentIndex eIndex,EquipmentIndex equippedIndex = EquipmentIndex.None)`

### DoesWeaponFitToSlot
`public static bool DoesWeaponFitToSlot(EquipmentIndex slotIndex,MissionWeapon weapon)`

### CheckLoadedAmmos
`public void CheckLoadedAmmos()`

### SetUsageIndexOfSlot
`public void SetUsageIndexOfSlot(EquipmentIndex slotIndex,int usageIndex)`

### SetReloadPhaseOfSlot
`public void SetReloadPhaseOfSlot(EquipmentIndex slotIndex,short reloadPhase)`

### SetAmountOfSlot
`public void SetAmountOfSlot(EquipmentIndex slotIndex,short dataValue,bool addOverflowToMaxAmount = false)`

### SetHitPointsOfSlot
`public void SetHitPointsOfSlot(EquipmentIndex slotIndex,short dataValue,bool addOverflowToMaxHitPoints = false)`

### SetReloadedAmmoOfSlot
`public void SetReloadedAmmoOfSlot(EquipmentIndex slotIndex,EquipmentIndex ammoSlotIndex,short totalAmmo)`

### SetConsumedAmmoOfSlot
`public void SetConsumedAmmoOfSlot(EquipmentIndex slotIndex,short count)`

### AttachWeaponToWeaponInSlot
`public void AttachWeaponToWeaponInSlot(EquipmentIndex slotIndex,ref MissionWeapon weapon,ref MatrixFrame attachLocalFrame)`

### HasShield
`public bool HasShield()`

### HasAnyWeapon
`public bool HasAnyWeapon()`

### HasAnyWeaponWithFlags
`public bool HasAnyWeaponWithFlags(WeaponFlags flags)`

### HasAnyWeaponWithItemUsageSetFlags
`public bool HasAnyWeaponWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags)`

### GetBanner
`public ItemObject GetBanner()`

### HasRangedWeapon
`public bool HasRangedWeapon(WeaponClass requiredAmmoClass = WeaponClass.Undefined)`

### ContainsNonConsumableRangedWeaponWithAmmo
`public bool ContainsNonConsumableRangedWeaponWithAmmo()`

### ContainsMeleeWeapon
`public bool ContainsMeleeWeapon()`

### ContainsShield
`public bool ContainsShield()`

### ContainsSpear
`public bool ContainsSpear()`

### ContainsThrownWeapon
`public bool ContainsThrownWeapon()`

### SetGlossMultipliersOfWeaponsRandomly
`public void SetGlossMultipliersOfWeaponsRandomly(int seed)`

## See Also

- [Section index](../)
