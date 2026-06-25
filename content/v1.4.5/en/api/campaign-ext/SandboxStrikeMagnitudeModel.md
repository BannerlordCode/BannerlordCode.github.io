---
title: "SandboxStrikeMagnitudeModel"
description: "Auto-generated class reference for SandboxStrikeMagnitudeModel."
---
# SandboxStrikeMagnitudeModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxStrikeMagnitudeModel.cs`

## Overview

`SandboxStrikeMagnitudeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxStrikeMagnitudeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**Purpose:** **Purpose:** Calculates the current value or result of horse archery factor.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateHorseArcheryFactor(characterObject);
```

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**Purpose:** **Purpose:** Calculates the current value or result of strike magnitude for missile.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForMissile(attackInformation, collisionData, weapon, 0);
```

### CalculateBaseBlowMagnitudeForPassiveUsage
`public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)`

**Purpose:** **Purpose:** Calculates the current value or result of base blow magnitude for passive usage.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateBaseBlowMagnitudeForPassiveUsage(attackInformation, collisionData, 0);
```

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**Purpose:** **Purpose:** Calculates the current value or result of strike magnitude for swing.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForSwing(attackInformation, collisionData, weapon, 0, 0, 0);
```

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**Purpose:** **Purpose:** Calculates the current value or result of strike magnitude for unarmed attack.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForUnarmedAttack(attackInformation, collisionData, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)`

**Purpose:** **Purpose:** Calculates the current value or result of strike magnitude for thrust.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForThrust(attackInformation, collisionData, weapon, 0, 0, false);
```

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**Purpose:** **Purpose:** Executes the ComputeRawDamage logic.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.ComputeRawDamage(damageType, 0, 0, 0);
```

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**Purpose:** **Purpose:** Reads and returns the blunt damage factor by damage type value held by the this instance.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.GetBluntDamageFactorByDamageType(damageType);
```

### CalculateAdjustedArmorForBlow
`public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**Purpose:** **Purpose:** Calculates the current value or result of adjusted armor for blow.

```csharp
// Obtain an instance of SandboxStrikeMagnitudeModel from the subsystem API first
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateAdjustedArmorForBlow(attackInformation, collisionData, 0, attackerCharacter, attackerCaptainCharacter, victimCharacter, victimCaptainCharacter, weaponComponent);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxStrikeMagnitudeModel>(new MySandboxStrikeMagnitudeModel());
```

## See Also

- [Area Index](../)