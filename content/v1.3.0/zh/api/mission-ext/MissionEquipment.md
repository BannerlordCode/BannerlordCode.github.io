---
title: "MissionEquipment"
description: "MissionEquipment 的自动生成类参考。"
---
# MissionEquipment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEquipment`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionEquipment.cs`

## 概述

`MissionEquipment` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `this` | `public MissionWeapon this { get; set; }` |
| `this` | `public MissionWeapon this { get; set; }` |

## 主要方法

### FillFrom
`public void FillFrom(MissionEquipment sourceEquipment)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.FillFrom(sourceEquipment);
```

### FillFrom
`public void FillFrom(Equipment sourceEquipment, Banner banner)`

**用途 / Purpose:** 处理与 「fill from」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.FillFrom(sourceEquipment, banner);
```

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

**用途 / Purpose:** 读取并返回当前对象中 「total weight of weapons」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetTotalWeightOfWeapons();
```

### SelectWeaponPickUpSlot
`public static EquipmentIndex SelectWeaponPickUpSlot(Agent agentPickingUp, MissionWeapon weaponBeingPickedUp, bool isStuckMissile)`

**用途 / Purpose:** 处理与 「select weapon pick up slot」 相关的逻辑。

```csharp
// 静态调用，不需要实例
MissionEquipment.SelectWeaponPickUpSlot(agentPickingUp, weaponBeingPickedUp, false);
```

### HasAmmo
`public bool HasAmmo(EquipmentIndex equipmentIndex, out int rangedUsageIndex, out bool hasLoadedAmmo, out bool noAmmoInThisSlot)`

**用途 / Purpose:** 判断当前对象是否已经持有 「ammo」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasAmmo(equipmentIndex, rangedUsageIndex, hasLoadedAmmo, noAmmoInThisSlot);
```

### GetAmmoAmount
`public int GetAmmoAmount(EquipmentIndex weaponIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「ammo amount」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetAmmoAmount(weaponIndex);
```

### GetMaxAmmo
`public int GetMaxAmmo(EquipmentIndex weaponIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「max ammo」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetMaxAmmo(weaponIndex);
```

### GetAmmoCountAndIndexOfType
`public void GetAmmoCountAndIndexOfType(ItemObject.ItemTypeEnum itemType, out int ammoCount, out EquipmentIndex eIndex, EquipmentIndex equippedIndex = EquipmentIndex.None)`

**用途 / Purpose:** 读取并返回当前对象中 「ammo count and index of type」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.GetAmmoCountAndIndexOfType(itemType, ammoCount, eIndex, equipmentIndex.None);
```

### DoesWeaponFitToSlot
`public static bool DoesWeaponFitToSlot(EquipmentIndex slotIndex, MissionWeapon weapon)`

**用途 / Purpose:** 返回「weapon fit to slot」对当前对象是否成立的布尔结果。

```csharp
// 静态调用，不需要实例
MissionEquipment.DoesWeaponFitToSlot(slotIndex, weapon);
```

### CheckLoadedAmmos
`public void CheckLoadedAmmos()`

**用途 / Purpose:** 检查「loaded ammos」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.CheckLoadedAmmos();
```

### SetUsageIndexOfSlot
`public void SetUsageIndexOfSlot(EquipmentIndex slotIndex, int usageIndex)`

**用途 / Purpose:** 为 「usage index of slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.SetUsageIndexOfSlot(slotIndex, 0);
```

### SetReloadPhaseOfSlot
`public void SetReloadPhaseOfSlot(EquipmentIndex slotIndex, short reloadPhase)`

**用途 / Purpose:** 为 「reload phase of slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.SetReloadPhaseOfSlot(slotIndex, 0);
```

### SetAmountOfSlot
`public void SetAmountOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxAmount = false)`

**用途 / Purpose:** 为 「amount of slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.SetAmountOfSlot(slotIndex, 0, false);
```

### SetHitPointsOfSlot
`public void SetHitPointsOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxHitPoints = false)`

**用途 / Purpose:** 为 「hit points of slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.SetHitPointsOfSlot(slotIndex, 0, false);
```

### SetReloadedAmmoOfSlot
`public void SetReloadedAmmoOfSlot(EquipmentIndex slotIndex, EquipmentIndex ammoSlotIndex, short totalAmmo)`

**用途 / Purpose:** 为 「reloaded ammo of slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.SetReloadedAmmoOfSlot(slotIndex, ammoSlotIndex, 0);
```

### SetConsumedAmmoOfSlot
`public void SetConsumedAmmoOfSlot(EquipmentIndex slotIndex, short count)`

**用途 / Purpose:** 为 「consumed ammo of slot」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.SetConsumedAmmoOfSlot(slotIndex, 0);
```

### AttachWeaponToWeaponInSlot
`public void AttachWeaponToWeaponInSlot(EquipmentIndex slotIndex, ref MissionWeapon weapon, ref MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 处理与 「attach weapon to weapon in slot」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.AttachWeaponToWeaponInSlot(slotIndex, weapon, attachLocalFrame);
```

### HasShield
`public bool HasShield()`

**用途 / Purpose:** 判断当前对象是否已经持有 「shield」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasShield();
```

### HasAnyWeapon
`public bool HasAnyWeapon()`

**用途 / Purpose:** 判断当前对象是否已经持有 「any weapon」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasAnyWeapon();
```

### HasAnyWeaponWithFlags
`public bool HasAnyWeaponWithFlags(WeaponFlags flags)`

**用途 / Purpose:** 判断当前对象是否已经持有 「any weapon with flags」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasAnyWeaponWithFlags(flags);
```

### GetBanner
`public ItemObject GetBanner()`

**用途 / Purpose:** 读取并返回当前对象中 「banner」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetBanner();
```

### HasRangedWeapon
`public bool HasRangedWeapon(WeaponClass requiredAmmoClass = WeaponClass.Undefined)`

**用途 / Purpose:** 判断当前对象是否已经持有 「ranged weapon」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.HasRangedWeapon(weaponClass.Undefined);
```

### ContainsNonConsumableRangedWeaponWithAmmo
`public bool ContainsNonConsumableRangedWeaponWithAmmo()`

**用途 / Purpose:** 判断当前对象是否包含「non consumable ranged weapon with ammo」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsNonConsumableRangedWeaponWithAmmo();
```

### ContainsMeleeWeapon
`public bool ContainsMeleeWeapon()`

**用途 / Purpose:** 判断当前对象是否包含「melee weapon」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsMeleeWeapon();
```

### ContainsShield
`public bool ContainsShield()`

**用途 / Purpose:** 判断当前对象是否包含「shield」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsShield();
```

### ContainsSpear
`public bool ContainsSpear()`

**用途 / Purpose:** 判断当前对象是否包含「spear」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsSpear();
```

### ContainsThrownWeapon
`public bool ContainsThrownWeapon()`

**用途 / Purpose:** 判断当前对象是否包含「thrown weapon」。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.ContainsThrownWeapon();
```

### SetGlossMultipliersOfWeaponsRandomly
`public void SetGlossMultipliersOfWeaponsRandomly(int seed)`

**用途 / Purpose:** 为 「gloss multipliers of weapons randomly」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.SetGlossMultipliersOfWeaponsRandomly(0);
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.Initialize();
```

### IsValid
`public bool IsValid(MissionEquipment.MissionEquipmentCache.CachedBool queriedData)`

**用途 / Purpose:** 判断当前对象是否处于 「valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.IsValid(queriedData);
```

### UpdateAndMarkValid
`public void UpdateAndMarkValid(MissionEquipment.MissionEquipmentCache.CachedBool data, bool value)`

**用途 / Purpose:** 重新计算并更新 「and mark valid」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.UpdateAndMarkValid(data, false);
```

### GetValue
`public bool GetValue(MissionEquipment.MissionEquipmentCache.CachedBool data)`

**用途 / Purpose:** 读取并返回当前对象中 「value」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetValue(data);
```

### IsValid
`public bool IsValid(MissionEquipment.MissionEquipmentCache.CachedFloat queriedData)`

**用途 / Purpose:** 判断当前对象是否处于 「valid」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.IsValid(queriedData);
```

### UpdateAndMarkValid
`public void UpdateAndMarkValid(MissionEquipment.MissionEquipmentCache.CachedFloat data, float value)`

**用途 / Purpose:** 重新计算并更新 「and mark valid」 的最新表示。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.UpdateAndMarkValid(data, 0);
```

### GetValue
`public float GetValue(MissionEquipment.MissionEquipmentCache.CachedFloat data)`

**用途 / Purpose:** 读取并返回当前对象中 「value」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
var result = missionEquipment.GetValue(data);
```

### InvalidateOnWeaponSlotUpdated
`public void InvalidateOnWeaponSlotUpdated()`

**用途 / Purpose:** 响应 「invalidate on weapon slot updated」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponSlotUpdated();
```

### InvalidateOnWeaponUsageIndexUpdated
`public void InvalidateOnWeaponUsageIndexUpdated()`

**用途 / Purpose:** 响应 「invalidate on weapon usage index updated」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponUsageIndexUpdated();
```

### InvalidateOnWeaponAmmoUpdated
`public void InvalidateOnWeaponAmmoUpdated()`

**用途 / Purpose:** 响应 「invalidate on weapon ammo updated」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponAmmoUpdated();
```

### InvalidateOnWeaponAmmoAvailabilityChanged
`public void InvalidateOnWeaponAmmoAvailabilityChanged()`

**用途 / Purpose:** 响应 「invalidate on weapon ammo availability changed」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponAmmoAvailabilityChanged();
```

### InvalidateOnWeaponHitPointsUpdated
`public void InvalidateOnWeaponHitPointsUpdated()`

**用途 / Purpose:** 响应 「invalidate on weapon hit points updated」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponHitPointsUpdated();
```

### InvalidateOnWeaponDestroyed
`public void InvalidateOnWeaponDestroyed()`

**用途 / Purpose:** 处理与 「invalidate on weapon destroyed」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MissionEquipment 实例
MissionEquipment missionEquipment = ...;
missionEquipment.InvalidateOnWeaponDestroyed();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionEquipment missionEquipment = ...;
missionEquipment.FillFrom(sourceEquipment);
```

## 参见

- [本区域目录](../)