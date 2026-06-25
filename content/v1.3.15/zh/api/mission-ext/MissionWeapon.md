---
title: "MissionWeapon"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionWeapon`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionWeapon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct MissionWeapon`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/MissionWeapon.cs`

## 概述

`MissionWeapon` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Item` | `public ItemObject Item { get; }` |
| `ItemModifier` | `public ItemModifier ItemModifier { get; }` |
| `WeaponsCount` | `public int WeaponsCount { get; }` |
| `CurrentUsageItem` | `public WeaponComponentData CurrentUsageItem { get; set; }` |
| `ReloadPhase` | `public short ReloadPhase { get; set; }` |
| `ReloadPhaseCount` | `public short ReloadPhaseCount { get; }` |
| `IsReloading` | `public bool IsReloading { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `GlossMultiplier` | `public float GlossMultiplier { get; }` |
| `RawDataForNetwork` | `public short RawDataForNetwork { get; set; }` |
| `HitPoints` | `public short HitPoints { get; set; }` |
| `Amount` | `public short Amount { get; set; }` |
| `Ammo` | `public short Ammo { get; }` |
| `AmmoWeapon` | `public MissionWeapon AmmoWeapon { get; }` |
| `MaxAmmo` | `public short MaxAmmo { get; }` |
| `ModifiedMaxAmount` | `public short ModifiedMaxAmount { get; }` |
| `ModifiedMaxHitPoints` | `public short ModifiedMaxHitPoints { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Value` | `public MissionWeapon Value { get; }` |

## 主要方法

### GetModifiedItemName
`public TextObject GetModifiedItemName()`

**用途 / Purpose:** 获取 `modified item name` 的当前值。

### IsEqualTo
`public bool IsEqualTo(MissionWeapon other)`

**用途 / Purpose:** 处理 `is equal to` 相关逻辑。

### IsSameType
`public bool IsSameType(MissionWeapon other)`

**用途 / Purpose:** 处理 `is same type` 相关逻辑。

### GetWeight
`public float GetWeight()`

**用途 / Purpose:** 获取 `weight` 的当前值。

### GetWeaponComponentDataForUsage
`public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex)`

**用途 / Purpose:** 获取 `weapon component data for usage` 的当前值。

### GetGetModifiedArmorForCurrentUsage
`public int GetGetModifiedArmorForCurrentUsage()`

**用途 / Purpose:** 获取 `get modified armor for current usage` 的当前值。

### GetModifiedThrustDamageForCurrentUsage
`public int GetModifiedThrustDamageForCurrentUsage()`

**用途 / Purpose:** 获取 `modified thrust damage for current usage` 的当前值。

### GetModifiedSwingDamageForCurrentUsage
`public int GetModifiedSwingDamageForCurrentUsage()`

**用途 / Purpose:** 获取 `modified swing damage for current usage` 的当前值。

### GetModifiedMissileDamageForCurrentUsage
`public int GetModifiedMissileDamageForCurrentUsage()`

**用途 / Purpose:** 获取 `modified missile damage for current usage` 的当前值。

### GetModifiedThrustSpeedForCurrentUsage
`public int GetModifiedThrustSpeedForCurrentUsage()`

**用途 / Purpose:** 获取 `modified thrust speed for current usage` 的当前值。

### GetModifiedSwingSpeedForCurrentUsage
`public int GetModifiedSwingSpeedForCurrentUsage()`

**用途 / Purpose:** 获取 `modified swing speed for current usage` 的当前值。

### GetModifiedMissileSpeedForCurrentUsage
`public int GetModifiedMissileSpeedForCurrentUsage()`

**用途 / Purpose:** 获取 `modified missile speed for current usage` 的当前值。

### GetModifiedMissileSpeedForUsage
`public int GetModifiedMissileSpeedForUsage(int usageIndex)`

**用途 / Purpose:** 获取 `modified missile speed for usage` 的当前值。

### GetModifiedHandlingForCurrentUsage
`public int GetModifiedHandlingForCurrentUsage()`

**用途 / Purpose:** 获取 `modified handling for current usage` 的当前值。

### GetWeaponData
`public WeaponData GetWeaponData(bool needBatchedVersionForMeshes)`

**用途 / Purpose:** 获取 `weapon data` 的当前值。

### GetWeaponStatsData
`public WeaponStatsData GetWeaponStatsData()`

**用途 / Purpose:** 获取 `weapon stats data` 的当前值。

### GetWeaponStatsDataForUsage
`public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex)`

**用途 / Purpose:** 获取 `weapon stats data for usage` 的当前值。

### GetAmmoWeaponData
`public WeaponData GetAmmoWeaponData(bool needBatchedVersion)`

**用途 / Purpose:** 获取 `ammo weapon data` 的当前值。

### GetAmmoWeaponStatsData
`public WeaponStatsData GetAmmoWeaponStatsData()`

**用途 / Purpose:** 获取 `ammo weapon stats data` 的当前值。

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount()`

**用途 / Purpose:** 获取 `attached weapons count` 的当前值。

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int attachmentIndex)`

**用途 / Purpose:** 获取 `attached weapon` 的当前值。

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int attachmentIndex)`

**用途 / Purpose:** 获取 `attached weapon frame` 的当前值。

### IsShield
`public bool IsShield()`

**用途 / Purpose:** 处理 `is shield` 相关逻辑。

### IsBanner
`public bool IsBanner()`

**用途 / Purpose:** 处理 `is banner` 相关逻辑。

### IsAnyAmmo
`public bool IsAnyAmmo()`

**用途 / Purpose:** 处理 `is any ammo` 相关逻辑。

### HasAnyUsageWithWeaponClass
`public bool HasAnyUsageWithWeaponClass(WeaponClass weaponClass)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any usage with weapon class`。

### HasAnyUsageWithAmmoClass
`public bool HasAnyUsageWithAmmoClass(WeaponClass ammoClass)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any usage with ammo class`。

### HasAllUsagesWithAnyWeaponFlag
`public bool HasAllUsagesWithAnyWeaponFlag(WeaponFlags flags)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `all usages with any weapon flag`。

### HasAnyUsageWithoutWeaponFlag
`public bool HasAnyUsageWithoutWeaponFlag(WeaponFlags flags)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `any usage without weapon flag`。

### GatherInformationFromWeapon
`public void GatherInformationFromWeapon(out bool weaponHasMelee, out bool weaponHasShield, out bool weaponHasPolearm, out bool weaponHasNonConsumableRanged, out bool weaponHasThrown, out WeaponClass rangedAmmoClass)`

**用途 / Purpose:** 处理 `gather information from weapon` 相关逻辑。

### GetConsumableIfAny
`public bool GetConsumableIfAny(out WeaponComponentData consumableWeapon)`

**用途 / Purpose:** 获取 `consumable if any` 的当前值。

### IsAnyConsumable
`public bool IsAnyConsumable()`

**用途 / Purpose:** 处理 `is any consumable` 相关逻辑。

### GetRangedUsageIndex
`public int GetRangedUsageIndex()`

**用途 / Purpose:** 获取 `ranged usage index` 的当前值。

### Consume
`public MissionWeapon Consume(short count)`

**用途 / Purpose:** 处理 `consume` 相关逻辑。

### ConsumeAmmo
`public void ConsumeAmmo(short count)`

**用途 / Purpose:** 处理 `consume ammo` 相关逻辑。

### SetAmmo
`public void SetAmmo(MissionWeapon ammoWeapon)`

**用途 / Purpose:** 设置 `ammo` 的值或状态。

### ReloadAmmo
`public void ReloadAmmo(MissionWeapon ammoWeapon, short reloadPhase)`

**用途 / Purpose:** 处理 `reload ammo` 相关逻辑。

### AttachWeapon
`public void AttachWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachFrame)`

**用途 / Purpose:** 处理 `attach weapon` 相关逻辑。

### RemoveAttachedWeapon
`public void RemoveAttachedWeapon(int attachmentIndex)`

**用途 / Purpose:** 从当前集合/状态中移除 `attached weapon`。

### HasEnoughSpaceForAmount
`public bool HasEnoughSpaceForAmount(int amount)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `enough space for amount`。

### SetRandomGlossMultiplier
`public void SetRandomGlossMultiplier(int seed)`

**用途 / Purpose:** 设置 `random gloss multiplier` 的值或状态。

### AddExtraModifiedMaxValue
`public void AddExtraModifiedMaxValue(short extraValue)`

**用途 / Purpose:** 向当前集合/状态中添加 `extra modified max value`。

### OnGetWeaponDataDelegate
`public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)`

**用途 / Purpose:** 当 `get weapon data delegate` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionWeapon();
value.GetModifiedItemName();
```

## 参见

- [完整类目录](../catalog)