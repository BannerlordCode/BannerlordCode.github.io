---
title: "MissionWeapon"
description: "MissionWeapon 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「modified item name」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedItemName();
```

### IsEqualTo
`public bool IsEqualTo(MissionWeapon other)`

**用途 / Purpose:** 判断当前对象是否处于 「equal to」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsEqualTo(other);
```

### IsSameType
`public bool IsSameType(MissionWeapon other)`

**用途 / Purpose:** 判断当前对象是否处于 「same type」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsSameType(other);
```

### GetWeight
`public float GetWeight()`

**用途 / Purpose:** 读取并返回当前对象中 「weight」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeight();
```

### GetWeaponComponentDataForUsage
`public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon component data for usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeaponComponentDataForUsage(0);
```

### GetGetModifiedArmorForCurrentUsage
`public int GetGetModifiedArmorForCurrentUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「get modified armor for current usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetGetModifiedArmorForCurrentUsage();
```

### GetModifiedThrustDamageForCurrentUsage
`public int GetModifiedThrustDamageForCurrentUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「modified thrust damage for current usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedThrustDamageForCurrentUsage();
```

### GetModifiedSwingDamageForCurrentUsage
`public int GetModifiedSwingDamageForCurrentUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「modified swing damage for current usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedSwingDamageForCurrentUsage();
```

### GetModifiedMissileDamageForCurrentUsage
`public int GetModifiedMissileDamageForCurrentUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「modified missile damage for current usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedMissileDamageForCurrentUsage();
```

### GetModifiedThrustSpeedForCurrentUsage
`public int GetModifiedThrustSpeedForCurrentUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「modified thrust speed for current usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedThrustSpeedForCurrentUsage();
```

### GetModifiedSwingSpeedForCurrentUsage
`public int GetModifiedSwingSpeedForCurrentUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「modified swing speed for current usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedSwingSpeedForCurrentUsage();
```

### GetModifiedMissileSpeedForCurrentUsage
`public int GetModifiedMissileSpeedForCurrentUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「modified missile speed for current usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedMissileSpeedForCurrentUsage();
```

### GetModifiedMissileSpeedForUsage
`public int GetModifiedMissileSpeedForUsage(int usageIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「modified missile speed for usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedMissileSpeedForUsage(0);
```

### GetModifiedHandlingForCurrentUsage
`public int GetModifiedHandlingForCurrentUsage()`

**用途 / Purpose:** 读取并返回当前对象中 「modified handling for current usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetModifiedHandlingForCurrentUsage();
```

### GetWeaponData
`public WeaponData GetWeaponData(bool needBatchedVersionForMeshes)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon data」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeaponData(false);
```

### GetWeaponStatsData
`public WeaponStatsData GetWeaponStatsData()`

**用途 / Purpose:** 读取并返回当前对象中 「weapon stats data」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeaponStatsData();
```

### GetWeaponStatsDataForUsage
`public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「weapon stats data for usage」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetWeaponStatsDataForUsage(0);
```

### GetAmmoWeaponData
`public WeaponData GetAmmoWeaponData(bool needBatchedVersion)`

**用途 / Purpose:** 读取并返回当前对象中 「ammo weapon data」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAmmoWeaponData(false);
```

### GetAmmoWeaponStatsData
`public WeaponStatsData GetAmmoWeaponStatsData()`

**用途 / Purpose:** 读取并返回当前对象中 「ammo weapon stats data」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAmmoWeaponStatsData();
```

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount()`

**用途 / Purpose:** 读取并返回当前对象中 「attached weapons count」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAttachedWeaponsCount();
```

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int attachmentIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「attached weapon」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAttachedWeapon(0);
```

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int attachmentIndex)`

**用途 / Purpose:** 读取并返回当前对象中 「attached weapon frame」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetAttachedWeaponFrame(0);
```

### IsShield
`public bool IsShield()`

**用途 / Purpose:** 判断当前对象是否处于 「shield」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsShield();
```

### IsBanner
`public bool IsBanner()`

**用途 / Purpose:** 判断当前对象是否处于 「banner」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsBanner();
```

### IsAnyAmmo
`public bool IsAnyAmmo()`

**用途 / Purpose:** 判断当前对象是否处于 「any ammo」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsAnyAmmo();
```

### HasAnyUsageWithWeaponClass
`public bool HasAnyUsageWithWeaponClass(WeaponClass weaponClass)`

**用途 / Purpose:** 判断当前对象是否已经持有 「any usage with weapon class」。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasAnyUsageWithWeaponClass(weaponClass);
```

### HasAnyUsageWithAmmoClass
`public bool HasAnyUsageWithAmmoClass(WeaponClass ammoClass)`

**用途 / Purpose:** 判断当前对象是否已经持有 「any usage with ammo class」。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasAnyUsageWithAmmoClass(ammoClass);
```

### HasAllUsagesWithAnyWeaponFlag
`public bool HasAllUsagesWithAnyWeaponFlag(WeaponFlags flags)`

**用途 / Purpose:** 判断当前对象是否已经持有 「all usages with any weapon flag」。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasAllUsagesWithAnyWeaponFlag(flags);
```

### HasAnyUsageWithoutWeaponFlag
`public bool HasAnyUsageWithoutWeaponFlag(WeaponFlags flags)`

**用途 / Purpose:** 判断当前对象是否已经持有 「any usage without weapon flag」。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasAnyUsageWithoutWeaponFlag(flags);
```

### GatherInformationFromWeapon
`public void GatherInformationFromWeapon(out bool weaponHasMelee, out bool weaponHasShield, out bool weaponHasPolearm, out bool weaponHasNonConsumableRanged, out bool weaponHasThrown, out WeaponClass rangedAmmoClass)`

**用途 / Purpose:** 收集或汇总「information from weapon」到当前对象。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.GatherInformationFromWeapon(weaponHasMelee, weaponHasShield, weaponHasPolearm, weaponHasNonConsumableRanged, weaponHasThrown, rangedAmmoClass);
```

### GetConsumableIfAny
`public bool GetConsumableIfAny(out WeaponComponentData consumableWeapon)`

**用途 / Purpose:** 读取并返回当前对象中 「consumable if any」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetConsumableIfAny(consumableWeapon);
```

### IsAnyConsumable
`public bool IsAnyConsumable()`

**用途 / Purpose:** 判断当前对象是否处于 「any consumable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.IsAnyConsumable();
```

### GetRangedUsageIndex
`public int GetRangedUsageIndex()`

**用途 / Purpose:** 读取并返回当前对象中 「ranged usage index」 的结果。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.GetRangedUsageIndex();
```

### Consume
`public MissionWeapon Consume(short count)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.Consume(0);
```

### ConsumeAmmo
`public void ConsumeAmmo(short count)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.ConsumeAmmo(0);
```

### SetAmmo
`public void SetAmmo(MissionWeapon ammoWeapon)`

**用途 / Purpose:** 为 「ammo」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.SetAmmo(ammoWeapon);
```

### ReloadAmmo
`public void ReloadAmmo(MissionWeapon ammoWeapon, short reloadPhase)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.ReloadAmmo(ammoWeapon, 0);
```

### AttachWeapon
`public void AttachWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachFrame)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.AttachWeapon(attachedWeapon, attachFrame);
```

### RemoveAttachedWeapon
`public void RemoveAttachedWeapon(int attachmentIndex)`

**用途 / Purpose:** 从当前容器或状态中移除 「attached weapon」。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.RemoveAttachedWeapon(0);
```

### HasEnoughSpaceForAmount
`public bool HasEnoughSpaceForAmount(int amount)`

**用途 / Purpose:** 判断当前对象是否已经持有 「enough space for amount」。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
var result = missionWeapon.HasEnoughSpaceForAmount(0);
```

### SetRandomGlossMultiplier
`public void SetRandomGlossMultiplier(int seed)`

**用途 / Purpose:** 为 「random gloss multiplier」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.SetRandomGlossMultiplier(0);
```

### AddExtraModifiedMaxValue
`public void AddExtraModifiedMaxValue(short extraValue)`

**用途 / Purpose:** 将 「extra modified max value」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.AddExtraModifiedMaxValue(0);
```

### OnGetWeaponDataDelegate
`public delegate void OnGetWeaponDataDelegate(ref WeaponData weaponData, MissionWeapon weapon, bool isFemale, Banner banner, bool needBatchedVersion)`

**用途 / Purpose:** 在 「get weapon data delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionWeapon 实例
MissionWeapon missionWeapon = ...;
missionWeapon.OnGetWeaponDataDelegate(weaponData, weapon, false, banner, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MissionWeapon missionWeapon = ...;
missionWeapon.GetModifiedItemName();
```

## 参见

- [本区域目录](../)