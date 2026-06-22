<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WeaponComponentData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponComponentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponComponentData`
**Base:** 无
**File:** `TaleWorlds.Core/WeaponComponentData.cs`

## 概述

`WeaponComponentData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `MissileDamage` | `public int MissileDamage { get { return this.ThrustDamage; }` |
| `IsMeleeWeapon` | `public bool IsMeleeWeapon { get { return this.WeaponFlags.HasAllFlags(WeaponFlags.MeleeWeapon); }` |
| `IsRangedWeapon` | `public bool IsRangedWeapon { get { return this.WeaponFlags.HasAllFlags(WeaponFlags.RangedWeapon); }` |
| `IsPolearm` | `public bool IsPolearm { get { return this.WeaponFlags.HasAllFlags(WeaponFlags.MeleeWeapon | WeaponFlags.WideGrip); }` |
| `IsConsumable` | `public bool IsConsumable { get { return this.WeaponFlags.HasAllFlags(WeaponFlags.Consumable); }` |
| `IsAmmo` | `public bool IsAmmo { get { return !this.WeaponFlags.HasAnyFlag(WeaponFlags.WeaponMask) && this.IsConsumable; }` |
| `IsShield` | `public bool IsShield { get { return !this.WeaponFlags.HasAnyFlag(WeaponFlags.WeaponMask) && this.WeaponFlags.HasAllFlags(WeaponFlags.HasHitPoints | WeaponFlags.CanBlockRanged); }` |
| `IsTwoHanded` | `public bool IsTwoHanded { get { return this.WeaponFlags.HasAllFlags(WeaponFlags.MeleeWeapon | WeaponFlags.NotUsableWithOneHand); }` |
| `IsOneHanded` | `public bool IsOneHanded { get { return this.WeaponFlags.HasAnyFlag(WeaponFlags.MeleeWeapon) && !this.IsTwoHanded; }` |
| `IsBow` | `public bool IsBow { get { return this.WeaponFlags.HasAllFlags((WeaponFlags)527360UL); }` |
| `IsCrossBow` | `public bool IsCrossBow { get { return this.WeaponFlags.HasAnyFlag(WeaponFlags.HasString) && !this.IsBow; }` |
| `RelevantSkill` | `public SkillObject RelevantSkill { get { return WeaponComponentData.GetRelevantSkillFromWeaponClass(this.WeaponClass); }` |
| `CanHitMultipleTargets` | `public bool CanHitMultipleTargets { get { return this.WeaponClass == WeaponClass.TwoHandedAxe || this.WeaponClass == WeaponClass.TwoHandedMace; }` |

## 主要方法

### Init
```csharp
public void Init(string weaponUsageName, string physicsMaterial, string itemUsage, DamageTypes thrustDamageType, DamageTypes swingDamageType, int bodyArmor, int weaponLength, float weaponBalance, float inertia, float centerOfMass, int handling, float swingDamageFactor, float thrustDamageFactor, short maxDataValue, string passBySoundCode, int accuracy, int missileSpeed, MatrixFrame stickingFrame, WeaponClass ammoClass, float sweetSpot, int swingSpeed, int swingDamage, int thrustSpeed, int thrustDamage, Vec3 rotationSpeed, WeaponComponentData.WeaponTiers tier, short reloadPhaseCount)
```

### SetFrame
```csharp
public void SetFrame(MatrixFrame frame)
```

### SetAmmoOffset
```csharp
public void SetAmmoOffset(Vec3 ammoOffset)
```

### GetRelevantSkillFromWeaponClass
```csharp
public static SkillObject GetRelevantSkillFromWeaponClass(WeaponClass weaponClass)
```

### GetItemTypeFromWeaponClass
```csharp
public static ItemObject.ItemTypeEnum GetItemTypeFromWeaponClass(WeaponClass weaponClass)
```

### Deserialize
```csharp
public void Deserialize(ItemObject item, XmlNode node)
```

### GetRealWeaponLength
```csharp
public float GetRealWeaponLength()
```

### GetMissileStartingFrame
```csharp
public MatrixFrame GetMissileStartingFrame()
```

## 使用示例

```csharp
// WeaponComponentData (Data) 的典型用法
new WeaponComponentData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)