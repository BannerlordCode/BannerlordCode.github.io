---
title: "MissionWeapon"
description: "MissionWeapon：TaleWorlds.MountAndBlade 的 public 结构体；公开成员 70 个（方法 44、属性 19、字段 2）。源文件 TaleWorlds.MountAndBlade/MissionWeapon.cs。"
---
# MissionWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MissionWeapon`
**File:** `TaleWorlds.MountAndBlade/MissionWeapon.cs`

## 概述

MissionWeapon 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MissionWeapon.cs。它是一个 public 结构体，继承链为 MissionWeapon。public/protected 成员共 70 个：44 方法、19 属性、2 字段、3 构造函数、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionWeapon 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 MissionWeapon。成员构成以方法为主（方法 44/70，属性 19/70），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MissionWeapon.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Item` | `public ItemObject Item` | 属性 |
| `ItemModifier` | `public ItemModifier ItemModifier` | 属性 |
| `WeaponsCount` | `public int WeaponsCount` | 属性 |
| `CurrentUsageItem` | `public WeaponComponentData CurrentUsageItem` | 属性 |
| `ReloadPhase` | `public short ReloadPhase` | 属性 |
| `ReloadPhaseCount` | `public short ReloadPhaseCount` | 属性 |
| `IsReloading` | `public bool IsReloading` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `GlossMultiplier` | `public float GlossMultiplier` | 属性 |
| `RawDataForNetwork` | `public short RawDataForNetwork` | 属性 |
| `HitPoints` | `public short HitPoints` | 属性 |
| `Amount` | `public short Amount` | 属性 |
| `Ammo` | `public short Ammo` | 属性 |
| `AmmoWeapon` | `public MissionWeapon AmmoWeapon` | 属性 |
| `MaxAmmo` | `public short MaxAmmo` | 属性 |
| `ModifiedMaxAmount` | `public short ModifiedMaxAmount` | 属性 |
| `ModifiedMaxHitPoints` | `public short ModifiedMaxHitPoints` | 属性 |
| `IsEmpty` | `public bool IsEmpty` | 属性 |
| `MissionWeapon` | `public MissionWeapon(ItemObject item, ItemModifier itemModifier, Banner banner)` | 构造函数 |
| `MissionWeapon` | `public MissionWeapon(ItemObject primaryItem, ItemModifier itemModifier, Banner banner, short dataValue)` | 构造函数 |
| `MissionWeapon` | `public MissionWeapon(ItemObject primaryItem, ItemModifier itemModifier, Banner banner, short dataValue, short reloadPhase, MissionWeapon? ammoWeapon)` | 构造函数 |
| `GetModifiedItemName` | `public TextObject GetModifiedItemName()` | 方法 |
| `IsEqualTo` | `public bool IsEqualTo(MissionWeapon other)` | 方法 |
| `IsSameType` | `public bool IsSameType(MissionWeapon other)` | 方法 |
| `GetWeight` | `public float GetWeight()` | 方法 |
| `GetWeaponComponentDataForUsage` | `public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex)` | 方法 |
| `GetGetModifiedArmorForCurrentUsage` | `public int GetGetModifiedArmorForCurrentUsage()` | 方法 |
| `GetModifiedThrustDamageForCurrentUsage` | `public int GetModifiedThrustDamageForCurrentUsage()` | 方法 |
| `GetModifiedSwingDamageForCurrentUsage` | `public int GetModifiedSwingDamageForCurrentUsage()` | 方法 |
| `GetModifiedMissileDamageForCurrentUsage` | `public int GetModifiedMissileDamageForCurrentUsage()` | 方法 |
| `GetModifiedThrustSpeedForCurrentUsage` | `public int GetModifiedThrustSpeedForCurrentUsage()` | 方法 |
| `GetModifiedSwingSpeedForCurrentUsage` | `public int GetModifiedSwingSpeedForCurrentUsage()` | 方法 |
| `GetModifiedMissileSpeedForCurrentUsage` | `public int GetModifiedMissileSpeedForCurrentUsage()` | 方法 |
| `GetModifiedMissileSpeedForUsage` | `public int GetModifiedMissileSpeedForUsage(int usageIndex)` | 方法 |
| `GetModifiedHandlingForCurrentUsage` | `public int GetModifiedHandlingForCurrentUsage()` | 方法 |
| `GetWeaponData` | `public WeaponData GetWeaponData(bool needBatchedVersionForMeshes)` | 方法 |
| `WeaponStatsData[]GetWeaponStatsData` | `public WeaponStatsData[]GetWeaponStatsData()` | 方法 |
| `GetWeaponStatsDataForUsage` | `public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex)` | 方法 |
| `GetAmmoWeaponData` | `public WeaponData GetAmmoWeaponData(bool needBatchedVersion)` | 方法 |
| `WeaponStatsData[]GetAmmoWeaponStatsData` | `public WeaponStatsData[]GetAmmoWeaponStatsData()` | 方法 |
| `GetAttachedWeaponsCount` | `public int GetAttachedWeaponsCount()` | 方法 |
| `GetAttachedWeapon` | `public MissionWeapon GetAttachedWeapon(int attachmentIndex)` | 方法 |
| `GetAttachedWeaponFrame` | `public MatrixFrame GetAttachedWeaponFrame(int attachmentIndex)` | 方法 |
| `IsShield` | `public bool IsShield()` | 方法 |
| `IsBanner` | `public bool IsBanner()` | 方法 |
| `IsAnyAmmo` | `public bool IsAnyAmmo()` | 方法 |
| `HasAnyUsageWithWeaponClass` | `public bool HasAnyUsageWithWeaponClass(WeaponClass weaponClass)` | 方法 |
| `HasAnyUsageWithAmmoClass` | `public bool HasAnyUsageWithAmmoClass(WeaponClass ammoClass)` | 方法 |
| `HasAllUsagesWithAnyWeaponFlag` | `public bool HasAllUsagesWithAnyWeaponFlag(WeaponFlags flags)` | 方法 |
| `HasAnyUsageWithoutWeaponFlag` | `public bool HasAnyUsageWithoutWeaponFlag(WeaponFlags flags)` | 方法 |
| `HasAnyUsageWithItemUsageSetFlags` | `public bool HasAnyUsageWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags)` | 方法 |
| `GatherInformationFromWeapon` | `public void GatherInformationFromWeapon(out bool weaponHasMelee, out bool weaponHasShield, out bool weaponHasPolearm, out bool weaponHasNonConsumableRanged, out bool weaponHasThrown, out WeaponClass rangedAmmoClass)` | 方法 |
| `GetConsumableIfAny` | `public bool GetConsumableIfAny(out WeaponComponentData consumableWeapon)` | 方法 |
| `IsAnyConsumable` | `public bool IsAnyConsumable()` | 方法 |
| `GetRangedUsageIndex` | `public int GetRangedUsageIndex()` | 方法 |
| `Consume` | `public MissionWeapon Consume(short count)` | 方法 |
| `ConsumeAmmo` | `public void ConsumeAmmo(short count)` | 方法 |
| `SetAmmo` | `public void SetAmmo(MissionWeapon ammoWeapon)` | 方法 |
| `ReloadAmmo` | `public void ReloadAmmo(MissionWeapon ammoWeapon, short reloadPhase)` | 方法 |
| `AttachWeapon` | `public void AttachWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachFrame)` | 方法 |
| `RemoveAttachedWeapon` | `public void RemoveAttachedWeapon(int attachmentIndex)` | 方法 |
| `HasEnoughSpaceForAmount` | `public bool HasEnoughSpaceForAmount(int amount)` | 方法 |
| `SetRandomGlossMultiplier` | `public void SetRandomGlossMultiplier(int seed)` | 方法 |
| `AddExtraModifiedMaxValue` | `public void AddExtraModifiedMaxValue(short extraValue)` | 方法 |
| `ReloadPhaseCountMax` | `public const short ReloadPhaseCountMax` | 字段 |
| `Invalid` | `public static readonly MissionWeapon Invalid` | 字段 |
| `ImpactSoundModifier` | `public struct ImpactSoundModifier` | 属性 |
| `OnGetWeaponDataDelegate` | `public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion);` | 方法 |
| `ImpactSoundModifier` | `public struct ImpactSoundModifier` | 嵌套类型 |
| `OnGetWeaponDataDelegate` | `public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)` | 嵌套类型 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
