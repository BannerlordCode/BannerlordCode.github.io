---
title: "WeaponComponentData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponComponentData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 初始化 `init` 的状态、资源或绑定。

### SetFrame
`public void SetFrame(MatrixFrame frame)`

**用途 / Purpose:** 设置 `frame` 的值或状态。

### SetAmmoOffset
`public void SetAmmoOffset(Vec3 ammoOffset)`

**用途 / Purpose:** 设置 `ammo offset` 的值或状态。

### GetRelevantSkillFromWeaponClass
`public static SkillObject GetRelevantSkillFromWeaponClass(WeaponClass weaponClass)`

**用途 / Purpose:** 获取 `relevant skill from weapon class` 的当前值。

### GetItemTypeFromWeaponClass
`public static ItemObject.ItemTypeEnum GetItemTypeFromWeaponClass(WeaponClass weaponClass)`

**用途 / Purpose:** 获取 `item type from weapon class` 的当前值。

### Deserialize
`public void Deserialize(ItemObject item, XmlNode node)`

**用途 / Purpose:** 处理 `deserialize` 相关逻辑。

### GetRealWeaponLength
`public float GetRealWeaponLength()`

**用途 / Purpose:** 获取 `real weapon length` 的当前值。

### GetMissileStartingFrame
`public MatrixFrame GetMissileStartingFrame()`

**用途 / Purpose:** 获取 `missile starting frame` 的当前值。

## 使用示例

```csharp
var value = new WeaponComponentData();
```

## 参见

- [完整类目录](../catalog)