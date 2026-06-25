---
title: "WeaponComponentData"
description: "WeaponComponentData 的自动生成类参考。"
---
# WeaponComponentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponComponentData`
**Base:** 无
**File:** `TaleWorlds.Core/WeaponComponentData.cs`

## 概述

`WeaponComponentData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `WeaponComponentData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponTier` | `public WeaponComponentData.WeaponTiers WeaponTier { get; }` |
| `WeaponDescriptionId` | `public string WeaponDescriptionId { get; }` |
| `BodyArmor` | `public int BodyArmor { get; }` |
| `PhysicsMaterial` | `public string PhysicsMaterial { get; }` |
| `FlyingSoundCode` | `public string FlyingSoundCode { get; }` |
| `PassbySoundCode` | `public string PassbySoundCode { get; }` |
| `ItemUsage` | `public string ItemUsage { get; }` |
| `ThrustSpeed` | `public int ThrustSpeed { get; }` |
| `SwingSpeed` | `public int SwingSpeed { get; }` |
| `MissileSpeed` | `public int MissileSpeed { get; }` |
| `WeaponLength` | `public int WeaponLength { get; }` |
| `WeaponBalance` | `public float WeaponBalance { get; }` |
| `ThrustDamage` | `public int ThrustDamage { get; }` |
| `ThrustDamageType` | `public DamageTypes ThrustDamageType { get; }` |
| `SwingDamage` | `public int SwingDamage { get; }` |
| `SwingDamageType` | `public DamageTypes SwingDamageType { get; }` |
| `FireDamage` | `public int FireDamage { get; }` |
| `Accuracy` | `public int Accuracy { get; }` |
| `WeaponClass` | `public WeaponClass WeaponClass { get; }` |
| `AmmoClass` | `public WeaponClass AmmoClass { get; }` |
| `MissileDamage` | `public int MissileDamage { get; }` |
| `TotalInertia` | `public float TotalInertia { get; }` |
| `CenterOfMass` | `public float CenterOfMass { get; }` |
| `CenterOfMass3D` | `public Vec3 CenterOfMass3D { get; }` |
| `SwingDamageFactor` | `public float SwingDamageFactor { get; }` |
| `ThrustDamageFactor` | `public float ThrustDamageFactor { get; }` |
| `Handling` | `public int Handling { get; }` |
| `SweetSpotReach` | `public float SweetSpotReach { get; }` |
| `TrailParticleName` | `public string TrailParticleName { get; }` |
| `StickingFrame` | `public MatrixFrame StickingFrame { get; }` |
| `AmmoOffset` | `public Vec3 AmmoOffset { get; }` |
| `MaxDataValue` | `public short MaxDataValue { get; }` |
| `Frame` | `public MatrixFrame Frame { get; }` |
| `RotationSpeed` | `public Vec3 RotationSpeed { get; }` |
| `ReloadPhaseCount` | `public short ReloadPhaseCount { get; }` |
| `IsMeleeWeapon` | `public bool IsMeleeWeapon { get; }` |
| `IsRangedWeapon` | `public bool IsRangedWeapon { get; }` |
| `IsPolearm` | `public bool IsPolearm { get; }` |
| `IsConsumable` | `public bool IsConsumable { get; }` |
| `IsAmmo` | `public bool IsAmmo { get; }` |
| `IsShield` | `public bool IsShield { get; }` |
| `IsTwoHanded` | `public bool IsTwoHanded { get; }` |
| `IsOneHanded` | `public bool IsOneHanded { get; }` |
| `IsBow` | `public bool IsBow { get; }` |
| `IsCrossBow` | `public bool IsCrossBow { get; }` |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` |
| `CanHitMultipleTargets` | `public bool CanHitMultipleTargets { get; }` |

## 主要方法

### Init
`public void Init(string weaponUsageName, string physicsMaterial, string itemUsage, DamageTypes thrustDamageType, DamageTypes swingDamageType, int bodyArmor, int weaponLength, float weaponBalance, float inertia, float centerOfMass, int handling, float swingDamageFactor, float thrustDamageFactor, short maxDataValue, string passBySoundCode, int accuracy, int missileSpeed, MatrixFrame stickingFrame, WeaponClass ammoClass, float sweetSpot, int swingSpeed, int swingDamage, int thrustSpeed, int thrustDamage, Vec3 rotationSpeed, WeaponComponentData.WeaponTiers tier, short reloadPhaseCount)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 WeaponComponentData 实例
WeaponComponentData weaponComponentData = ...;
weaponComponentData.Init("example", "example", "example", thrustDamageType, swingDamageType, 0, 0, 0, 0, 0, 0, 0, 0, 0, "example", 0, 0, stickingFrame, ammoClass, 0, 0, 0, 0, 0, rotationSpeed, tier, 0);
```

### SetFrame
`public void SetFrame(MatrixFrame frame)`

**用途 / Purpose:** 为 「frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeaponComponentData 实例
WeaponComponentData weaponComponentData = ...;
weaponComponentData.SetFrame(frame);
```

### SetAmmoOffset
`public void SetAmmoOffset(Vec3 ammoOffset)`

**用途 / Purpose:** 为 「ammo offset」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 WeaponComponentData 实例
WeaponComponentData weaponComponentData = ...;
weaponComponentData.SetAmmoOffset(ammoOffset);
```

### GetRelevantSkillFromWeaponClass
`public static SkillObject GetRelevantSkillFromWeaponClass(WeaponClass weaponClass)`

**用途 / Purpose:** 读取并返回当前对象中 「relevant skill from weapon class」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentData.GetRelevantSkillFromWeaponClass(weaponClass);
```

### GetItemTypeFromWeaponClass
`public static ItemObject.ItemTypeEnum GetItemTypeFromWeaponClass(WeaponClass weaponClass)`

**用途 / Purpose:** 读取并返回当前对象中 「item type from weapon class」 的结果。

```csharp
// 静态调用，不需要实例
WeaponComponentData.GetItemTypeFromWeaponClass(weaponClass);
```

### Deserialize
`public void Deserialize(ItemObject item, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 WeaponComponentData 实例
WeaponComponentData weaponComponentData = ...;
weaponComponentData.Deserialize(item, node);
```

### GetRealWeaponLength
`public float GetRealWeaponLength()`

**用途 / Purpose:** 读取并返回当前对象中 「real weapon length」 的结果。

```csharp
// 先通过子系统 API 拿到 WeaponComponentData 实例
WeaponComponentData weaponComponentData = ...;
var result = weaponComponentData.GetRealWeaponLength();
```

### GetMissileStartingFrame
`public MatrixFrame GetMissileStartingFrame()`

**用途 / Purpose:** 读取并返回当前对象中 「missile starting frame」 的结果。

```csharp
// 先通过子系统 API 拿到 WeaponComponentData 实例
WeaponComponentData weaponComponentData = ...;
var result = weaponComponentData.GetMissileStartingFrame();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
WeaponComponentData entry = ...;
```

## 参见

- [本区域目录](../)