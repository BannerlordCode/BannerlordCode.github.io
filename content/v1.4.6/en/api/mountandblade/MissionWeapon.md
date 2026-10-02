---
title: "MissionWeapon"
description: "MissionWeapon: a public struct in TaleWorlds.MountAndBlade; 70 exposed members (44 methods, 19 properties, 2 fields). Source: TaleWorlds.MountAndBlade/MissionWeapon.cs."
---
# MissionWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct MissionWeapon`
**File:** `TaleWorlds.MountAndBlade/MissionWeapon.cs`

## Overview

MissionWeapon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionWeapon.cs. It is a public struct; the inheritance chain is MissionWeapon. It exposes 70 public/protected members: 44 methods, 19 properties, 2 fields, 3 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionWeapon is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionWeapon. The surface is method-led (methods 44/70, properties 19/70), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionWeapon.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Item` | `public ItemObject Item` | property |
| `ItemModifier` | `public ItemModifier ItemModifier` | property |
| `WeaponsCount` | `public int WeaponsCount` | property |
| `CurrentUsageItem` | `public WeaponComponentData CurrentUsageItem` | property |
| `ReloadPhase` | `public short ReloadPhase` | property |
| `ReloadPhaseCount` | `public short ReloadPhaseCount` | property |
| `IsReloading` | `public bool IsReloading` | property |
| `Banner` | `public Banner Banner` | property |
| `GlossMultiplier` | `public float GlossMultiplier` | property |
| `RawDataForNetwork` | `public short RawDataForNetwork` | property |
| `HitPoints` | `public short HitPoints` | property |
| `Amount` | `public short Amount` | property |
| `Ammo` | `public short Ammo` | property |
| `AmmoWeapon` | `public MissionWeapon AmmoWeapon` | property |
| `MaxAmmo` | `public short MaxAmmo` | property |
| `ModifiedMaxAmount` | `public short ModifiedMaxAmount` | property |
| `ModifiedMaxHitPoints` | `public short ModifiedMaxHitPoints` | property |
| `IsEmpty` | `public bool IsEmpty` | property |
| `MissionWeapon` | `public MissionWeapon(ItemObject item, ItemModifier itemModifier, Banner banner)` | constructor |
| `MissionWeapon` | `public MissionWeapon(ItemObject primaryItem, ItemModifier itemModifier, Banner banner, short dataValue)` | constructor |
| `MissionWeapon` | `public MissionWeapon(ItemObject primaryItem, ItemModifier itemModifier, Banner banner, short dataValue, short reloadPhase, MissionWeapon? ammoWeapon)` | constructor |
| `GetModifiedItemName` | `public TextObject GetModifiedItemName()` | method |
| `IsEqualTo` | `public bool IsEqualTo(MissionWeapon other)` | method |
| `IsSameType` | `public bool IsSameType(MissionWeapon other)` | method |
| `GetWeight` | `public float GetWeight()` | method |
| `GetWeaponComponentDataForUsage` | `public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex)` | method |
| `GetGetModifiedArmorForCurrentUsage` | `public int GetGetModifiedArmorForCurrentUsage()` | method |
| `GetModifiedThrustDamageForCurrentUsage` | `public int GetModifiedThrustDamageForCurrentUsage()` | method |
| `GetModifiedSwingDamageForCurrentUsage` | `public int GetModifiedSwingDamageForCurrentUsage()` | method |
| `GetModifiedMissileDamageForCurrentUsage` | `public int GetModifiedMissileDamageForCurrentUsage()` | method |
| `GetModifiedThrustSpeedForCurrentUsage` | `public int GetModifiedThrustSpeedForCurrentUsage()` | method |
| `GetModifiedSwingSpeedForCurrentUsage` | `public int GetModifiedSwingSpeedForCurrentUsage()` | method |
| `GetModifiedMissileSpeedForCurrentUsage` | `public int GetModifiedMissileSpeedForCurrentUsage()` | method |
| `GetModifiedMissileSpeedForUsage` | `public int GetModifiedMissileSpeedForUsage(int usageIndex)` | method |
| `GetModifiedHandlingForCurrentUsage` | `public int GetModifiedHandlingForCurrentUsage()` | method |
| `GetWeaponData` | `public WeaponData GetWeaponData(bool needBatchedVersionForMeshes)` | method |
| `WeaponStatsData[]GetWeaponStatsData` | `public WeaponStatsData[]GetWeaponStatsData()` | method |
| `GetWeaponStatsDataForUsage` | `public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex)` | method |
| `GetAmmoWeaponData` | `public WeaponData GetAmmoWeaponData(bool needBatchedVersion)` | method |
| `WeaponStatsData[]GetAmmoWeaponStatsData` | `public WeaponStatsData[]GetAmmoWeaponStatsData()` | method |
| `GetAttachedWeaponsCount` | `public int GetAttachedWeaponsCount()` | method |
| `GetAttachedWeapon` | `public MissionWeapon GetAttachedWeapon(int attachmentIndex)` | method |
| `GetAttachedWeaponFrame` | `public MatrixFrame GetAttachedWeaponFrame(int attachmentIndex)` | method |
| `IsShield` | `public bool IsShield()` | method |
| `IsBanner` | `public bool IsBanner()` | method |
| `IsAnyAmmo` | `public bool IsAnyAmmo()` | method |
| `HasAnyUsageWithWeaponClass` | `public bool HasAnyUsageWithWeaponClass(WeaponClass weaponClass)` | method |
| `HasAnyUsageWithAmmoClass` | `public bool HasAnyUsageWithAmmoClass(WeaponClass ammoClass)` | method |
| `HasAllUsagesWithAnyWeaponFlag` | `public bool HasAllUsagesWithAnyWeaponFlag(WeaponFlags flags)` | method |
| `HasAnyUsageWithoutWeaponFlag` | `public bool HasAnyUsageWithoutWeaponFlag(WeaponFlags flags)` | method |
| `HasAnyUsageWithItemUsageSetFlags` | `public bool HasAnyUsageWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags)` | method |
| `GatherInformationFromWeapon` | `public void GatherInformationFromWeapon(out bool weaponHasMelee, out bool weaponHasShield, out bool weaponHasPolearm, out bool weaponHasNonConsumableRanged, out bool weaponHasThrown, out WeaponClass rangedAmmoClass)` | method |
| `GetConsumableIfAny` | `public bool GetConsumableIfAny(out WeaponComponentData consumableWeapon)` | method |
| `IsAnyConsumable` | `public bool IsAnyConsumable()` | method |
| `GetRangedUsageIndex` | `public int GetRangedUsageIndex()` | method |
| `Consume` | `public MissionWeapon Consume(short count)` | method |
| `ConsumeAmmo` | `public void ConsumeAmmo(short count)` | method |
| `SetAmmo` | `public void SetAmmo(MissionWeapon ammoWeapon)` | method |
| `ReloadAmmo` | `public void ReloadAmmo(MissionWeapon ammoWeapon, short reloadPhase)` | method |
| `AttachWeapon` | `public void AttachWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachFrame)` | method |
| `RemoveAttachedWeapon` | `public void RemoveAttachedWeapon(int attachmentIndex)` | method |
| `HasEnoughSpaceForAmount` | `public bool HasEnoughSpaceForAmount(int amount)` | method |
| `SetRandomGlossMultiplier` | `public void SetRandomGlossMultiplier(int seed)` | method |
| `AddExtraModifiedMaxValue` | `public void AddExtraModifiedMaxValue(short extraValue)` | method |
| `ReloadPhaseCountMax` | `public const short ReloadPhaseCountMax` | field |
| `Invalid` | `public static readonly MissionWeapon Invalid` | field |
| `ImpactSoundModifier` | `public struct ImpactSoundModifier` | property |
| `OnGetWeaponDataDelegate` | `public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion);` | method |
| `ImpactSoundModifier` | `public struct ImpactSoundModifier` | nested type |
| `OnGetWeaponDataDelegate` | `public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
