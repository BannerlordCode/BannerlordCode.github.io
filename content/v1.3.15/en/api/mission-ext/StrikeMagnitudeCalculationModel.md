---
title: "StrikeMagnitudeCalculationModel"
description: "Auto-generated class reference for StrikeMagnitudeCalculationModel."
---
# StrikeMagnitudeCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class StrikeMagnitudeCalculationModel : MBGameModel<StrikeMagnitudeCalculationModel>`
**Base:** `MBGameModel<StrikeMagnitudeCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs`

## Overview

`StrikeMagnitudeCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StrikeMagnitudeCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateStrikeMagnitudeForMissile
`public abstract float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**Purpose:** **Purpose:** Calculates the current value or result of strike magnitude for missile.

```csharp
// Obtain an instance of StrikeMagnitudeCalculationModel from the subsystem API first
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateStrikeMagnitudeForMissile(attackInformation, collisionData, weapon, 0);
```

### CalculateStrikeMagnitudeForSwing
`public abstract float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**Purpose:** **Purpose:** Calculates the current value or result of strike magnitude for swing.

```csharp
// Obtain an instance of StrikeMagnitudeCalculationModel from the subsystem API first
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateStrikeMagnitudeForSwing(attackInformation, collisionData, weapon, 0, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public abstract float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustSpeed, float extraLinearSpeed, bool isThrown = false)`

**Purpose:** **Purpose:** Calculates the current value or result of strike magnitude for thrust.

```csharp
// Obtain an instance of StrikeMagnitudeCalculationModel from the subsystem API first
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateStrikeMagnitudeForThrust(attackInformation, collisionData, weapon, 0, 0, false);
```

### ComputeRawDamage
`public abstract float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**Purpose:** **Purpose:** Executes the ComputeRawDamage logic.

```csharp
// Obtain an instance of StrikeMagnitudeCalculationModel from the subsystem API first
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.ComputeRawDamage(damageType, 0, 0, 0);
```

### CalculateStrikeMagnitudeForUnarmedAttack
`public abstract float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**Purpose:** **Purpose:** Calculates the current value or result of strike magnitude for unarmed attack.

```csharp
// Obtain an instance of StrikeMagnitudeCalculationModel from the subsystem API first
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateStrikeMagnitudeForUnarmedAttack(attackInformation, collisionData, 0, 0);
```

### GetBluntDamageFactorByDamageType
`public abstract float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**Purpose:** **Purpose:** Reads and returns the blunt damage factor by damage type value held by the this instance.

```csharp
// Obtain an instance of StrikeMagnitudeCalculationModel from the subsystem API first
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.GetBluntDamageFactorByDamageType(damageType);
```

### CalculateHorseArcheryFactor
`public abstract float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**Purpose:** **Purpose:** Calculates the current value or result of horse archery factor.

```csharp
// Obtain an instance of StrikeMagnitudeCalculationModel from the subsystem API first
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateHorseArcheryFactor(characterObject);
```

### CalculateAdjustedArmorForBlow
`public virtual float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**Purpose:** **Purpose:** Calculates the current value or result of adjusted armor for blow.

```csharp
// Obtain an instance of StrikeMagnitudeCalculationModel from the subsystem API first
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateAdjustedArmorForBlow(attackInformation, collisionData, 0, attackerCharacter, attackerCaptainCharacter, victimCharacter, victimCaptainCharacter, weaponComponent);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
StrikeMagnitudeCalculationModel instance = ...;
```

## See Also

- [Area Index](../)