<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponComponentData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WeaponComponentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponComponentData`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/WeaponComponentData.cs`

## Overview

`WeaponComponentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `WeaponComponentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponTier` | `public WeaponTiers WeaponTier { get; }` |
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
| `IsAmmo` | `public bool IsAmmo { get; }` |
| `IsShield` | `public bool IsShield { get; }` |
| `IsOneHanded` | `public bool IsOneHanded { get; }` |
| `IsCrossBow` | `public bool IsCrossBow { get; }` |
| `CanHitMultipleTargets` | `public bool CanHitMultipleTargets { get; }` |

## Key Methods

### Init
`public void Init(string weaponUsageName, string physicsMaterial, string itemUsage, DamageTypes thrustDamageType, DamageTypes swingDamageType, int bodyArmor, int weaponLength, float weaponBalance, float inertia, float centerOfMass, int handling, float swingDamageFactor, float thrustDamageFactor, short maxDataValue, string passBySoundCode, int accuracy, int missileSpeed, MatrixFrame stickingFrame, WeaponClass ammoClass, float sweetSpot, int swingSpeed, int swingDamage, int thrustSpeed, int thrustDamage, Vec3 rotationSpeed, WeaponTiers tier, short reloadPhaseCount)`

**Purpose:** Initializes the state, resources, or bindings for `init`.

### SetFrame
`public void SetFrame(MatrixFrame frame)`

**Purpose:** Sets the value or state of `frame`.

### SetAmmoOffset
`public void SetAmmoOffset(Vec3 ammoOffset)`

**Purpose:** Sets the value or state of `ammo offset`.

### GetRelevantSkillFromWeaponClass
`public static SkillObject GetRelevantSkillFromWeaponClass(WeaponClass weaponClass)`

**Purpose:** Gets the current value of `relevant skill from weapon class`.

### GetItemTypeFromWeaponClass
`public static ItemObject.ItemTypeEnum GetItemTypeFromWeaponClass(WeaponClass weaponClass)`

**Purpose:** Gets the current value of `item type from weapon class`.

### Deserialize
`public void Deserialize(ItemObject item, XmlNode node)`

**Purpose:** Handles logic related to `deserialize`.

### GetRealWeaponLength
`public float GetRealWeaponLength()`

**Purpose:** Gets the current value of `real weapon length`.

### GetMissileStartingFrame
`public MatrixFrame GetMissileStartingFrame()`

**Purpose:** Gets the current value of `missile starting frame`.

## Usage Example

```csharp
var value = new WeaponComponentData();
```

## See Also

- [Complete Class Catalog](../catalog)