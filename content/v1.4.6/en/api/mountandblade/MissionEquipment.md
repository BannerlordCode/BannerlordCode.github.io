---
title: "MissionEquipment"
description: "MissionEquipment: a public class in TaleWorlds.MountAndBlade; 35 exposed members (31 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionEquipment.cs."
---
# MissionEquipment

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionEquipment`
**File:** `TaleWorlds.MountAndBlade/MissionEquipment.cs`

## Overview

MissionEquipment lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionEquipment.cs. It is a public class; the inheritance chain is MissionEquipment. It exposes 35 public/protected members: 31 methods, 2 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionEquipment is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionEquipment. The surface is method-led (methods 31/35, properties 0/35), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionEquipment.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionEquipment` | `public MissionEquipment()` | constructor |
| `MissionEquipment` | `public MissionEquipment(Equipment spawnEquipment, Banner banner) : this()` | constructor |
| `this[...]` | `public MissionWeapon this[int index]` | indexer |
| `this[...]` | `public MissionWeapon this[EquipmentIndex index]` | indexer |
| `FillFrom` | `public void FillFrom(MissionEquipment sourceEquipment)` | method |
| `FillFrom` | `public void FillFrom(Equipment sourceEquipment, Banner banner)` | method |
| `GetTotalWeightOfWeapons` | `public float GetTotalWeightOfWeapons()` | method |
| `SelectWeaponPickUpSlot` | `public static EquipmentIndex SelectWeaponPickUpSlot(Agent agentPickingUp, MissionWeapon weaponBeingPickedUp, bool isStuckMissile)` | method |
| `HasAmmo` | `public bool HasAmmo(EquipmentIndex equipmentIndex, out int rangedUsageIndex, out bool hasLoadedAmmo, out bool noAmmoInThisSlot)` | method |
| `GetAmmoAmount` | `public int GetAmmoAmount(EquipmentIndex weaponIndex)` | method |
| `GetMaxAmmo` | `public int GetMaxAmmo(EquipmentIndex weaponIndex)` | method |
| `GetAmmoCountAndIndexOfType` | `public void GetAmmoCountAndIndexOfType(ItemObject.ItemTypeEnum itemType, out int ammoCount, out EquipmentIndex eIndex, EquipmentIndex equippedIndex = EquipmentIndex.None)` | method |
| `DoesWeaponFitToSlot` | `public static bool DoesWeaponFitToSlot(EquipmentIndex slotIndex, MissionWeapon weapon)` | method |
| `CheckLoadedAmmos` | `public void CheckLoadedAmmos()` | method |
| `SetUsageIndexOfSlot` | `public void SetUsageIndexOfSlot(EquipmentIndex slotIndex, int usageIndex)` | method |
| `SetReloadPhaseOfSlot` | `public void SetReloadPhaseOfSlot(EquipmentIndex slotIndex, short reloadPhase)` | method |
| `SetAmountOfSlot` | `public void SetAmountOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxAmount = false)` | method |
| `SetHitPointsOfSlot` | `public void SetHitPointsOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxHitPoints = false)` | method |
| `SetReloadedAmmoOfSlot` | `public void SetReloadedAmmoOfSlot(EquipmentIndex slotIndex, EquipmentIndex ammoSlotIndex, short totalAmmo)` | method |
| `SetConsumedAmmoOfSlot` | `public void SetConsumedAmmoOfSlot(EquipmentIndex slotIndex, short count)` | method |
| `AttachWeaponToWeaponInSlot` | `public void AttachWeaponToWeaponInSlot(EquipmentIndex slotIndex, ref MissionWeapon weapon, ref MatrixFrame attachLocalFrame)` | method |
| `HasShield` | `public bool HasShield()` | method |
| `HasAnyWeapon` | `public bool HasAnyWeapon()` | method |
| `HasAnyWeaponWithFlags` | `public bool HasAnyWeaponWithFlags(WeaponFlags flags)` | method |
| `HasAnyWeaponWithItemUsageSetFlags` | `public bool HasAnyWeaponWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags)` | method |
| `GetBanner` | `public ItemObject GetBanner()` | method |
| `HasRangedWeapon` | `public bool HasRangedWeapon(WeaponClass requiredAmmoClass = WeaponClass.Undefined)` | method |
| `ContainsNonConsumableRangedWeaponWithAmmo` | `public bool ContainsNonConsumableRangedWeaponWithAmmo()` | method |
| `ContainsMeleeWeapon` | `public bool ContainsMeleeWeapon()` | method |
| `ContainsShield` | `public bool ContainsShield()` | method |
| `ContainsSpear` | `public bool ContainsSpear()` | method |
| `ContainsThrownWeapon` | `public bool ContainsThrownWeapon()` | method |
| `SetGlossMultipliersOfWeaponsRandomly` | `public void SetGlossMultipliersOfWeaponsRandomly(int seed)` | method |
| `CachedBool` | `public enum CachedBool` | nested type |
| `CachedFloat` | `public enum CachedFloat` | nested type |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
