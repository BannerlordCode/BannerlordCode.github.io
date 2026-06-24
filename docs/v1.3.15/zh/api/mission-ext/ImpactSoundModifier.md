<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ImpactSoundModifier`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImpactSoundModifier

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct ImpactSoundModifier`
**领域:** mission-ext

## 概述

`ImpactSoundModifier` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ImpactSoundModifier 实例，再调用它的公开方法
var value = new ImpactSoundModifier();
value.GetModifiedItemName();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
