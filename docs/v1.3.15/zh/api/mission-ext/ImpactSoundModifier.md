<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ImpactSoundModifier`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ImpactSoundModifier

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`ImpactSoundModifier` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
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

```csharp
public TextObject GetModifiedItemName()
```

### IsEqualTo

```csharp
public bool IsEqualTo(MissionWeapon other)
```

### IsSameType

```csharp
public bool IsSameType(MissionWeapon other)
```

### GetWeight

```csharp
public float GetWeight()
```

### GetWeaponComponentDataForUsage

```csharp
public WeaponComponentData GetWeaponComponentDataForUsage(int usageIndex)
```

### GetGetModifiedArmorForCurrentUsage

```csharp
public int GetGetModifiedArmorForCurrentUsage()
```

### GetModifiedThrustDamageForCurrentUsage

```csharp
public int GetModifiedThrustDamageForCurrentUsage()
```

### GetModifiedSwingDamageForCurrentUsage

```csharp
public int GetModifiedSwingDamageForCurrentUsage()
```

### GetModifiedMissileDamageForCurrentUsage

```csharp
public int GetModifiedMissileDamageForCurrentUsage()
```

### GetModifiedThrustSpeedForCurrentUsage

```csharp
public int GetModifiedThrustSpeedForCurrentUsage()
```

### GetModifiedSwingSpeedForCurrentUsage

```csharp
public int GetModifiedSwingSpeedForCurrentUsage()
```

### GetModifiedMissileSpeedForCurrentUsage

```csharp
public int GetModifiedMissileSpeedForCurrentUsage()
```

### GetModifiedMissileSpeedForUsage

```csharp
public int GetModifiedMissileSpeedForUsage(int usageIndex)
```

### GetModifiedHandlingForCurrentUsage

```csharp
public int GetModifiedHandlingForCurrentUsage()
```

### GetWeaponData

```csharp
public WeaponData GetWeaponData(bool needBatchedVersionForMeshes)
```

### GetWeaponStatsData

```csharp
public WeaponStatsData GetWeaponStatsData()
```

### GetWeaponStatsDataForUsage

```csharp
public WeaponStatsData GetWeaponStatsDataForUsage(int usageIndex)
```

### GetAmmoWeaponData

```csharp
public WeaponData GetAmmoWeaponData(bool needBatchedVersion)
```

### GetAmmoWeaponStatsData

```csharp
public WeaponStatsData GetAmmoWeaponStatsData()
```

### GetAttachedWeaponsCount

```csharp
public int GetAttachedWeaponsCount()
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)