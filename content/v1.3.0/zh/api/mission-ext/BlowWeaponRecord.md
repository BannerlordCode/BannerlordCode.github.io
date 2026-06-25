---
title: "BlowWeaponRecord"
description: "BlowWeaponRecord 的自动生成类参考。"
---
# BlowWeaponRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BlowWeaponRecord`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BlowWeaponRecord.cs`

## 概述

`BlowWeaponRecord` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsMissile` | `public bool IsMissile { get; }` |
| `IsShield` | `public bool IsShield { get; }` |
| `IsRanged` | `public bool IsRanged { get; }` |
| `IsAmmo` | `public bool IsAmmo { get; }` |

## 主要方法

### FillAsMeleeBlow
`public void FillAsMeleeBlow(ItemObject item, WeaponComponentData weaponComponentData, int affectorWeaponSlot, sbyte weaponAttachBoneIndex)`

**用途 / Purpose:** 调用 FillAsMeleeBlow 对应的操作。

```csharp
// 先通过子系统 API 拿到 BlowWeaponRecord 实例
BlowWeaponRecord blowWeaponRecord = ...;
blowWeaponRecord.FillAsMeleeBlow(item, weaponComponentData, 0, 0);
```

### FillAsMissileBlow
`public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)`

**用途 / Purpose:** 调用 FillAsMissileBlow 对应的操作。

```csharp
// 先通过子系统 API 拿到 BlowWeaponRecord 实例
BlowWeaponRecord blowWeaponRecord = ...;
blowWeaponRecord.FillAsMissileBlow(item, weaponComponentData, 0, 0, startingPosition, currentPosition, velocity);
```

### HasWeapon
`public bool HasWeapon()`

**用途 / Purpose:** 判断当前对象是否已经持有 weapon。

```csharp
// 先通过子系统 API 拿到 BlowWeaponRecord 实例
BlowWeaponRecord blowWeaponRecord = ...;
var result = blowWeaponRecord.HasWeapon();
```

### GetHitSound
`public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)`

**用途 / Purpose:** 读取并返回当前对象中 hit sound 的结果。

```csharp
// 先通过子系统 API 拿到 BlowWeaponRecord 实例
BlowWeaponRecord blowWeaponRecord = ...;
var result = blowWeaponRecord.GetHitSound(false, false, false, false, attackType, damageType);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BlowWeaponRecord blowWeaponRecord = ...;
blowWeaponRecord.FillAsMeleeBlow(item, weaponComponentData, 0, 0);
```

## 参见

- [本区域目录](../)