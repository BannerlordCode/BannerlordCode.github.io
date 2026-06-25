---
title: "DefaultStrikeMagnitudeModel"
description: "Auto-generated class reference for DefaultStrikeMagnitudeModel."
---
# DefaultStrikeMagnitudeModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs`

## Overview

`DefaultStrikeMagnitudeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultStrikeMagnitudeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**Purpose:** Calculates the current value or result of `strike magnitude for missile`.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForMissile(attackInformation, collisionData, weapon, 0);
```

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**Purpose:** Calculates the current value or result of `strike magnitude for swing`.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForSwing(attackInformation, collisionData, weapon, 0, 0, 0);
```

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**Purpose:** Calculates the current value or result of `strike magnitude for unarmed attack`.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForUnarmedAttack(attackInformation, collisionData, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)`

**Purpose:** Calculates the current value or result of `strike magnitude for thrust`.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForThrust(attackInformation, collisionData, weapon, 0, 0, false);
```

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.ComputeRawDamage(damageType, 0, 0, 0);
```

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**Purpose:** Reads and returns the `blunt damage factor by damage type` value held by the current object.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.GetBluntDamageFactorByDamageType(damageType);
```

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**Purpose:** Calculates the current value or result of `horse archery factor`.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateHorseArcheryFactor(characterObject);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultStrikeMagnitudeModel>(new MyDefaultStrikeMagnitudeModel());
```

## See Also

- [Area Index](../)