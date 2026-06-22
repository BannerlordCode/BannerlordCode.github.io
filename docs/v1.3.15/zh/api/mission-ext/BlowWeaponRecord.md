<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BlowWeaponRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BlowWeaponRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BlowWeaponRecord` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `IsMissile` | `public bool IsMissile { get; }` |
| `IsShield` | `public bool IsShield { get; }` |
| `IsRanged` | `public bool IsRanged { get; }` |
| `IsAmmo` | `public bool IsAmmo { get; }` |


## 主要方法

### FillAsMeleeBlow

```csharp
public void FillAsMeleeBlow(ItemObject item, WeaponComponentData weaponComponentData, int affectorWeaponSlot, sbyte weaponAttachBoneIndex)
```

### FillAsMissileBlow

```csharp
public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)
```

### HasWeapon

```csharp
public bool HasWeapon()
```

### GetHitSound

```csharp
public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)
```

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)