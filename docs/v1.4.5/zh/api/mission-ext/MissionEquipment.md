<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionEquipment`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionEquipment

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEquipment`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionEquipment.cs`

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

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### IsValid
`public bool IsValid(CachedBool queriedData)`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

### UpdateAndMarkValid
`public void UpdateAndMarkValid(CachedBool data, bool value)`

**用途 / Purpose:** 更新 `and mark valid` 的状态或数据。

### GetValue
`public bool GetValue(CachedBool data)`

**用途 / Purpose:** 获取 `value` 的当前值。

### IsValid
`public bool IsValid(CachedFloat queriedData)`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

### UpdateAndMarkValid
`public void UpdateAndMarkValid(CachedFloat data, float value)`

**用途 / Purpose:** 更新 `and mark valid` 的状态或数据。

### GetValue
`public float GetValue(CachedFloat data)`

**用途 / Purpose:** 获取 `value` 的当前值。

### InvalidateOnWeaponSlotUpdated
`public void InvalidateOnWeaponSlotUpdated()`

**用途 / Purpose:** 处理 `invalidate on weapon slot updated` 相关逻辑。

### InvalidateOnWeaponUsageIndexUpdated
`public void InvalidateOnWeaponUsageIndexUpdated()`

**用途 / Purpose:** 处理 `invalidate on weapon usage index updated` 相关逻辑。

### InvalidateOnWeaponAmmoUpdated
`public void InvalidateOnWeaponAmmoUpdated()`

**用途 / Purpose:** 处理 `invalidate on weapon ammo updated` 相关逻辑。

### InvalidateOnWeaponAmmoAvailabilityChanged
`public void InvalidateOnWeaponAmmoAvailabilityChanged()`

**用途 / Purpose:** 处理 `invalidate on weapon ammo availability changed` 相关逻辑。

### InvalidateOnWeaponHitPointsUpdated
`public void InvalidateOnWeaponHitPointsUpdated()`

**用途 / Purpose:** 处理 `invalidate on weapon hit points updated` 相关逻辑。

### InvalidateOnWeaponDestroyed
`public void InvalidateOnWeaponDestroyed()`

**用途 / Purpose:** 处理 `invalidate on weapon destroyed` 相关逻辑。

### FillFrom
`public void FillFrom(MissionEquipment sourceEquipment)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### FillFrom
`public void FillFrom(Equipment sourceEquipment, Banner banner)`

**用途 / Purpose:** 处理 `fill from` 相关逻辑。

### GetTotalWeightOfWeapons
`public float GetTotalWeightOfWeapons()`

**用途 / Purpose:** 获取 `total weight of weapons` 的当前值。

### SelectWeaponPickUpSlot
`public static EquipmentIndex SelectWeaponPickUpSlot(Agent agentPickingUp, MissionWeapon weaponBeingPickedUp, bool isStuckMissile)`

**用途 / Purpose:** 处理 `select weapon pick up slot` 相关逻辑。

### HasAmmo
`public bool HasAmmo(EquipmentIndex equipmentIndex, out int rangedUsageIndex, out bool hasLoadedAmmo, out bool noAmmoInThisSlot)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `ammo`。

### GetAmmoAmount
`public int GetAmmoAmount(EquipmentIndex weaponIndex)`

**用途 / Purpose:** 获取 `ammo amount` 的当前值。

### GetMaxAmmo
`public int GetMaxAmmo(EquipmentIndex weaponIndex)`

**用途 / Purpose:** 获取 `max ammo` 的当前值。

### GetAmmoCountAndIndexOfType
`public void GetAmmoCountAndIndexOfType(ItemObject.ItemTypeEnum itemType, out int ammoCount, out EquipmentIndex eIndex, EquipmentIndex equippedIndex = EquipmentIndex.None)`

**用途 / Purpose:** 获取 `ammo count and index of type` 的当前值。

### DoesWeaponFitToSlot
`public static bool DoesWeaponFitToSlot(EquipmentIndex slotIndex, MissionWeapon weapon)`

**用途 / Purpose:** 处理 `does weapon fit to slot` 相关逻辑。

### CheckLoadedAmmos
`public void CheckLoadedAmmos()`

**用途 / Purpose:** 处理 `check loaded ammos` 相关逻辑。

### SetUsageIndexOfSlot
`public void SetUsageIndexOfSlot(EquipmentIndex slotIndex, int usageIndex)`

**用途 / Purpose:** 设置 `usage index of slot` 的值或状态。

### SetReloadPhaseOfSlot
`public void SetReloadPhaseOfSlot(EquipmentIndex slotIndex, short reloadPhase)`

**用途 / Purpose:** 设置 `reload phase of slot` 的值或状态。

### SetAmountOfSlot
`public void SetAmountOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxAmount = false)`

**用途 / Purpose:** 设置 `amount of slot` 的值或状态。

### SetHitPointsOfSlot
`public void SetHitPointsOfSlot(EquipmentIndex slotIndex, short dataValue, bool addOverflowToMaxHitPoints = false)`

**用途 / Purpose:** 设置 `hit points of slot` 的值或状态。

### SetReloadedAmmoOfSlot
`public void SetReloadedAmmoOfSlot(EquipmentIndex slotIndex, EquipmentIndex ammoSlotIndex, short totalAmmo)`

**用途 / Purpose:** 设置 `reloaded ammo of slot` 的值或状态。

### SetConsumedAmmoOfSlot
`public void SetConsumedAmmoOfSlot(EquipmentIndex slotIndex, short count)`

**用途 / Purpose:** 设置 `consumed ammo of slot` 的值或状态。

### AttachWeaponToWeaponInSlot
`public void AttachWeaponToWeaponInSlot(EquipmentIndex slotIndex, ref MissionWeapon weapon, ref MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 处理 `attach weapon to weapon in slot` 相关逻辑。

### HasShield
`public bool HasShield()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `shield`。

### HasAnyWeapon
`public bool HasAnyWeapon()`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any weapon`。

### HasAnyWeaponWithFlags
`public bool HasAnyWeaponWithFlags(WeaponFlags flags)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any weapon with flags`。

### HasAnyWeaponWithItemUsageSetFlags
`public bool HasAnyWeaponWithItemUsageSetFlags(ItemObject.ItemUsageSetFlags flags)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any weapon with item usage set flags`。

### GetBanner
`public ItemObject GetBanner()`

**用途 / Purpose:** 获取 `banner` 的当前值。

### HasRangedWeapon
`public bool HasRangedWeapon(WeaponClass requiredAmmoClass = WeaponClass.Undefined)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `ranged weapon`。

### ContainsNonConsumableRangedWeaponWithAmmo
`public bool ContainsNonConsumableRangedWeaponWithAmmo()`

**用途 / Purpose:** 处理 `contains non consumable ranged weapon with ammo` 相关逻辑。

### ContainsMeleeWeapon
`public bool ContainsMeleeWeapon()`

**用途 / Purpose:** 处理 `contains melee weapon` 相关逻辑。

### ContainsShield
`public bool ContainsShield()`

**用途 / Purpose:** 处理 `contains shield` 相关逻辑。

### ContainsSpear
`public bool ContainsSpear()`

**用途 / Purpose:** 处理 `contains spear` 相关逻辑。

### ContainsThrownWeapon
`public bool ContainsThrownWeapon()`

**用途 / Purpose:** 处理 `contains thrown weapon` 相关逻辑。

### SetGlossMultipliersOfWeaponsRandomly
`public void SetGlossMultipliersOfWeaponsRandomly(int seed)`

**用途 / Purpose:** 设置 `gloss multipliers of weapons randomly` 的值或状态。

## 使用示例

```csharp
var value = new MissionEquipment();
value.Initialize();
```

## 参见

- [完整类目录](../catalog)