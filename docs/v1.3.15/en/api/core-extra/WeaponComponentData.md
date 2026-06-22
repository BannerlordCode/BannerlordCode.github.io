<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponComponentData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponComponentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponComponentData`
**Base:** none
**File:** `TaleWorlds.Core/WeaponComponentData.cs`

## Overview

`WeaponComponentData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Properties

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

## Key Methods

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

## Usage Example

```csharp
// Typical usage of WeaponComponentData (Data)
new WeaponComponentData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)