---
title: "WeaponComponentData"
description: "Auto-generated class reference for WeaponComponentData."
---
# WeaponComponentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class WeaponComponentData`
**Base:** none
**File:** `TaleWorlds.Core/WeaponComponentData.cs`

## Overview

`WeaponComponentData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `WeaponComponentData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

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

## Key Methods

### Init
`public void Init(string weaponUsageName, string physicsMaterial, string itemUsage, DamageTypes thrustDamageType, DamageTypes swingDamageType, int bodyArmor, int weaponLength, float weaponBalance, float inertia, float centerOfMass, int handling, float swingDamageFactor, float thrustDamageFactor, short maxDataValue, string passBySoundCode, int accuracy, int missileSpeed, MatrixFrame stickingFrame, WeaponClass ammoClass, float sweetSpot, int swingSpeed, int swingDamage, int thrustSpeed, int thrustDamage, Vec3 rotationSpeed, WeaponComponentData.WeaponTiers tier, short reloadPhaseCount)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of WeaponComponentData from the subsystem API first
WeaponComponentData weaponComponentData = ...;
weaponComponentData.Init("example", "example", "example", thrustDamageType, swingDamageType, 0, 0, 0, 0, 0, 0, 0, 0, 0, "example", 0, 0, stickingFrame, ammoClass, 0, 0, 0, 0, 0, rotationSpeed, tier, 0);
```

### SetFrame
`public void SetFrame(MatrixFrame frame)`

**Purpose:** **Purpose:** Assigns a new value to frame and updates the object's internal state.

```csharp
// Obtain an instance of WeaponComponentData from the subsystem API first
WeaponComponentData weaponComponentData = ...;
weaponComponentData.SetFrame(frame);
```

### SetAmmoOffset
`public void SetAmmoOffset(Vec3 ammoOffset)`

**Purpose:** **Purpose:** Assigns a new value to ammo offset and updates the object's internal state.

```csharp
// Obtain an instance of WeaponComponentData from the subsystem API first
WeaponComponentData weaponComponentData = ...;
weaponComponentData.SetAmmoOffset(ammoOffset);
```

### GetRelevantSkillFromWeaponClass
`public static SkillObject GetRelevantSkillFromWeaponClass(WeaponClass weaponClass)`

**Purpose:** **Purpose:** Reads and returns the relevant skill from weapon class value held by the this instance.

```csharp
// Static call; no instance required
WeaponComponentData.GetRelevantSkillFromWeaponClass(weaponClass);
```

### GetItemTypeFromWeaponClass
`public static ItemObject.ItemTypeEnum GetItemTypeFromWeaponClass(WeaponClass weaponClass)`

**Purpose:** **Purpose:** Reads and returns the item type from weapon class value held by the this instance.

```csharp
// Static call; no instance required
WeaponComponentData.GetItemTypeFromWeaponClass(weaponClass);
```

### Deserialize
`public void Deserialize(ItemObject item, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of WeaponComponentData from the subsystem API first
WeaponComponentData weaponComponentData = ...;
weaponComponentData.Deserialize(item, node);
```

### GetRealWeaponLength
`public float GetRealWeaponLength()`

**Purpose:** **Purpose:** Reads and returns the real weapon length value held by the this instance.

```csharp
// Obtain an instance of WeaponComponentData from the subsystem API first
WeaponComponentData weaponComponentData = ...;
var result = weaponComponentData.GetRealWeaponLength();
```

### GetMissileStartingFrame
`public MatrixFrame GetMissileStartingFrame()`

**Purpose:** **Purpose:** Reads and returns the missile starting frame value held by the this instance.

```csharp
// Obtain an instance of WeaponComponentData from the subsystem API first
WeaponComponentData weaponComponentData = ...;
var result = weaponComponentData.GetMissileStartingFrame();
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
WeaponComponentData entry = ...;
```

## See Also

- [Area Index](../)