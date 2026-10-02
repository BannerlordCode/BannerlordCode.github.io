---
title: "MissionEquipment"
description: "MissionEquipment 的自动生成类参考。"
---
# MissionEquipment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEquipment `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MissionEquipment.cs

## 概述

`MissionEquipment` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionEquipment.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### FillFrom
`public void FillFrom(MissionEquipment sourceEquipment) `
`public void FillFrom(Equipment sourceEquipment,Banner banner) `

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons() `

### SelectWeaponPickUpSlot
`public static EquipmentIndex SelectWeaponPickUpSlot(Agent agentPickingUp,MissionWeapon weaponBeingPickedUp,bool isStuckMissile) `

### HasAmmo
`public bool HasAmmo(EquipmentIndex equipmentIndex,out int rangedUsageIndex,out bool hasLoadedAmmo,out bool noAmmoInThisSlot) `

### GetAmmoAmount
`public int GetAmmoAmount(EquipmentIndex weaponIndex) `

### GetMaxAmmo
`public int GetMaxAmmo(EquipmentIndex weaponIndex) `

### GetAmmoCountAndIndexOfType
`public void GetAmmoCountAndIndexOfType(ItemObject.ItemTypeEnum itemType,out int ammoCount,out EquipmentIndex eIndex,EquipmentIndex equippedIndex = EquipmentIndex.None) `

### DoesWeaponFitToSlot
`public static bool DoesWeaponFitToSlot(EquipmentIndex slotIndex,MissionWeapon weapon) `

### CheckLoadedAmmos
`public void CheckLoadedAmmos() `

### SetUsageIndexOfSlot
`public void SetUsageIndexOfSlot(EquipmentIndex slotIndex,int usageIndex) `

### SetReloadPhaseOfSlot
`public void SetReloadPhaseOfSlot(EquipmentIndex slotIndex,short reloadPhase) `

### SetAmountOfSlot
`public void SetAmountOfSlot(EquipmentIndex slotIndex,short dataValue,bool addOverflowToMaxAmount = false) `

### SetHitPointsOfSlot
`public void SetHitPointsOfSlot(EquipmentIndex slotIndex,short dataValue,bool addOverflowToMaxHitPoints = false) `

### SetReloadedAmmoOfSlot
`public void SetReloadedAmmoOfSlot(EquipmentIndex slotIndex,EquipmentIndex ammoSlotIndex,short totalAmmo) `

### SetConsumedAmmoOfSlot
`public void SetConsumedAmmoOfSlot(EquipmentIndex slotIndex,short count) `

### AttachWeaponToWeaponInSlot
`public void AttachWeaponToWeaponInSlot(EquipmentIndex slotIndex,ref MissionWeapon weapon,ref MatrixFrame attachLocalFrame) `

### HasShield
`public bool HasShield() `

### HasAnyWeapon
`public bool HasAnyWeapon() `

### HasAnyWeaponWithFlags
`public bool HasAnyWeaponWithFlags(WeaponFlags flags) `

### HasAnyWeaponWithItemUsageSetFlags
`public bool HasAnyWeaponWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags) `

### GetBanner
`public ItemObject GetBanner() `

### HasRangedWeapon
`public bool HasRangedWeapon(WeaponClass requiredAmmoClass = WeaponClass.Undefined) `

### ContainsNonConsumableRangedWeaponWithAmmo
`public bool ContainsNonConsumableRangedWeaponWithAmmo() `

### ContainsMeleeWeapon
`public bool ContainsMeleeWeapon() `

### ContainsShield
`public bool ContainsShield() `

### ContainsSpear
`public bool ContainsSpear() `

### ContainsThrownWeapon
`public bool ContainsThrownWeapon() `

### SetGlossMultipliersOfWeaponsRandomly
`public void SetGlossMultipliersOfWeaponsRandomly(int seed) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
