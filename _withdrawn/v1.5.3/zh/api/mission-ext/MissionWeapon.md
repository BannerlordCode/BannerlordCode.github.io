---
title: "MissionWeapon"
description: "MissionWeapon 的自动生成类参考。"
---
# MissionWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionWeapon `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/MissionWeapon.cs

## 概述

`MissionWeapon` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionWeapon.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetModifiedItemName
`public TextObject GetModifiedItemName() `

### IsEqualTo
`public bool IsEqualTo(MissionWeapon other) `

### IsSameType
`public bool IsSameType(MissionWeapon other) `

### GetWeight
`public float GetWeight() `

### GetWeaponComponentDataForUsage
`public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex) `

### GetGetModifiedArmorForCurrentUsage
`public int GetGetModifiedArmorForCurrentUsage() `

### GetModifiedThrustDamageForCurrentUsage
`public int GetModifiedThrustDamageForCurrentUsage() `

### GetModifiedSwingDamageForCurrentUsage
`public int GetModifiedSwingDamageForCurrentUsage() `

### GetModifiedMissileDamageForCurrentUsage
`public int GetModifiedMissileDamageForCurrentUsage() `

### GetModifiedThrustSpeedForCurrentUsage
`public int GetModifiedThrustSpeedForCurrentUsage() `

### GetModifiedSwingSpeedForCurrentUsage
`public int GetModifiedSwingSpeedForCurrentUsage() `

### GetModifiedMissileSpeedForCurrentUsage
`public int GetModifiedMissileSpeedForCurrentUsage() `

### GetModifiedMissileSpeedForUsage
`public int GetModifiedMissileSpeedForUsage(int usageIndex) `

### GetModifiedHandlingForCurrentUsage
`public int GetModifiedHandlingForCurrentUsage() `

### GetWeaponData
`public WeaponData GetWeaponData(bool needBatchedVersionForMeshes) `

### GetWeaponStatsData
`public WeaponStatsData[] GetWeaponStatsData() `

### GetWeaponStatsDataForUsage
`public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex) `

### GetAmmoWeaponData
`public WeaponData GetAmmoWeaponData(bool needBatchedVersion) `

### GetAmmoWeaponStatsData
`public WeaponStatsData[] GetAmmoWeaponStatsData() `

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount() `

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int attachmentIndex) `

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int attachmentIndex) `

### IsShield
`public bool IsShield() `

### IsBanner
`public bool IsBanner() `

### IsAnyAmmo
`public bool IsAnyAmmo() `

### HasAnyUsageWithWeaponClass
`public bool HasAnyUsageWithWeaponClass(WeaponClass weaponClass) `

### HasAnyUsageWithAmmoClass
`public bool HasAnyUsageWithAmmoClass(WeaponClass ammoClass) `

### HasAllUsagesWithAnyWeaponFlag
`public bool HasAllUsagesWithAnyWeaponFlag(WeaponFlags flags) `

### HasAnyUsageWithoutWeaponFlag
`public bool HasAnyUsageWithoutWeaponFlag(WeaponFlags flags) `

### HasAnyUsageWithItemUsageSetFlags
`public bool HasAnyUsageWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags) `

### GatherInformationFromWeapon
`public void GatherInformationFromWeapon(out bool weaponHasMelee,out bool weaponHasShield,out bool weaponHasPolearm,out bool weaponHasNonConsumableRanged,out bool weaponHasThrown,out WeaponClass rangedAmmoClass) `

### GetConsumableIfAny
`public bool GetConsumableIfAny(out WeaponComponentData consumableWeapon) `

### IsAnyConsumable
`public bool IsAnyConsumable() `

### GetRangedUsageIndex
`public int GetRangedUsageIndex() `

### Consume
`public MissionWeapon Consume(short count) `

### ConsumeAmmo
`public void ConsumeAmmo(short count) `

### SetAmmo
`public void SetAmmo(MissionWeapon ammoWeapon) `

### ReloadAmmo
`public void ReloadAmmo(MissionWeapon ammoWeapon,short reloadPhase) `

### AttachWeapon
`public void AttachWeapon(MissionWeapon attachedWeapon,ref MatrixFrame attachFrame) `

### RemoveAttachedWeapon
`public void RemoveAttachedWeapon(int attachmentIndex) `

### HasEnoughSpaceForAmount
`public bool HasEnoughSpaceForAmount(int amount) `

### SetRandomGlossMultiplier
`public void SetRandomGlossMultiplier(int seed) `

### AddExtraModifiedMaxValue
`public void AddExtraModifiedMaxValue(short extraValue) `

### OnGetWeaponDataDelegate
`public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData,MissionWeapon weapon,bool isFemale,Banner banner,bool needBatchedVersion)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
