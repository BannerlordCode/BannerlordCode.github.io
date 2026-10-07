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

`DefaultStrikeMagnitudeModel` is the shipped implementation of `StrikeMagnitudeCalculationModel` (`DefaultStrikeMagnitudeModel.cs:9`). It has two distinct jobs, and it is worth separating them because they work at completely different stages of a hit.

The first job is **magnitude**: how much force does this attack carry, before any armor is considered. That is `CalculateStrikeMagnitudeForSwing`, `...ForThrust`, `...ForMissile` and `...ForUnarmedAttack`. Swing and thrust simply forward to `CombatStatCalculator` with the weapon's weight, length, inertia and centre of mass; unarmed multiplies remaining momentum by a managed parameter.

The second job is **raw damage**: given that magnitude, how much of it survives armor. That is `ComputeRawDamage`, and it is the most interesting method in the class because the armor model is not a simple subtraction.

The model is reached through `MissionGameModels.Current.StrikeMagnitudeCalculationModel` and is a singleton for the process.

## Mental Model

`ComputeRawDamage` blends two different damage models rather than choosing one. Read it in this order.

First, `GetBluntDamageFactorByDamageType` returns how *blunt* the damage type is: Cut 0.1, Pierce 0.25, Blunt 0.6 (`DefaultStrikeMagnitudeModel.cs:72`, `DefaultStrikeMagnitudeModel.cs:78`, `DefaultStrikeMagnitudeModel.cs:81`, `DefaultStrikeMagnitudeModel.cs:84`). A cut is almost entirely governed by the sharp path; a blunt is mostly governed by the crush path.

Second, `50f / (50f + armorEffectiveness)` is the base armour divisor (`DefaultStrikeMagnitudeModel.cs:48`). The `50` is a soft scale constant, not armor units — armor approaches a 50% reduction asymptotically and never reaches it.

Third, the sharp path subtracts a *fraction of armor* rather than armor outright: Cut takes half of armor effectiveness, Pierce a third, Blunt a fifth (`DefaultStrikeMagnitudeModel.cs:55`, `DefaultStrikeMagnitudeModel.cs:58`, `DefaultStrikeMagnitudeModel.cs:61`), each floored at zero. So heavy armor can reduce a cut to nothing while leaving a meaningful fraction of a blunt.

Fourth, the two are recombined by the blunt factor: `bluntFactor * base + (1 - bluntFactor) * typed`, then scaled by `absorbedDamageRatio` (`DefaultStrikeMagnitudeModel.cs:67`, `DefaultStrikeMagnitudeModel.cs:68`).

Three boundaries follow from this. The `switch` on `DamageTypes` in `ComputeRawDamage` has only Cut, Pierce and Blunt; anything else hits `Debug.FailedAssert("Given damage type is invalid.", ...)` and **returns `0f`** (`DefaultStrikeMagnitudeModel.cs:64`) — a modded damage type deals nothing and, in a release build where the assert is compiled out, does so completely silently. Meanwhile `GetBluntDamageFactorByDamageType` has no assert at all and returns its initial `0f` for anything else, which would make the typed path count for full weight — the two methods disagree about how to handle an unknown type. `CalculateStrikeMagnitudeForMissile` divides `missileSpeed` by `MissileStartingBaseSpeed` with no zero guard (`DefaultStrikeMagnitudeModel.cs:18`), so a modded projectile with zero starting base speed yields a division by zero.

Unarmed damage is the one path a mod is expected to tune: it multiplies by `ManagedParameters.Instance.GetManagedParameter(ManagedParametersEnum.FistFightDamageMultiplier)` (`DefaultStrikeMagnitudeModel.cs:34`), so bare-fist damage responds to the managed-parameters difficulty setting while no other path here does. `CalculateHorseArcheryFactor` returns a flat `100f` in this implementation — a stub, not a computed penalty.

## How to use

**Getting it.** Through the model container, before the mission:

```csharp
StrikeMagnitudeCalculationModel model =
    MissionGameModels.Current.StrikeMagnitudeCalculationModel;
```

**Typical use** — asking what a blow is worth, keeping magnitude and damage separate:

```csharp
StrikeMagnitudeCalculationModel model =
    MissionGameModels.Current.StrikeMagnitudeCalculationModel;

float magnitude = model.CalculateStrikeMagnitudeForSwing(
    attackInfo, collisionData, weapon, swingSpeed, impactPointAsPercent, extraLinearSpeed);

// Magnitude is not damage yet — armor is applied afterwards.
float raw = model.ComputeRawDamage(
    damageType, magnitude, armorEffectiveness: armorRating, absorbedDamageRatio: 1f);
```

**Typical use** — making a modded damage type actually work, which means overriding both switches:

```csharp
public class ModStrikeModel : DefaultStrikeMagnitudeModel
{
    public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)
    {
        if (damageType == DamageTypes.Impact) return 0.45f;
        return base.GetBluntDamageFactorByDamageType(damageType);
    }

    public override float ComputeRawDamage(DamageTypes damageType, float magnitude,
        float armorEffectiveness, float absorbedDamageRatio)
    {
        if (damageType == DamageTypes.Impact)
        {
            float baseAmount = magnitude * (50f / (50f + armorEffectiveness));
            return MathF.Max(0f, baseAmount - armorEffectiveness * 0.25f) * absorbedDamageRatio;
        }
        // Anything else keeps the shipped behaviour rather than returning 0.
        return base.ComputeRawDamage(damageType, magnitude, armorEffectiveness, absorbedDamageRatio);
    }
}
```

**Most common mistake, and what it costs.** Adding a `DamageTypes` value and assuming `ComputeRawDamage` will treat it like the others. It will not: the switch has no case for it, the assert fires, and the method returns `0f` (`DefaultStrikeMagnitudeModel.cs:64`), so every hit of that type deals no damage at all while the battle continues normally — no crash in a release build, no error, just weapons that land and do nothing. The even quieter half is `GetBluntDamageFactorByDamageType`, which returns `0f` for the same unknown type without any assert, so if you only override that one you get the opposite failure: the sharp path at full weight with no armour subtraction at all. Override `ComputeRawDamage` and handle the new type explicitly.

## Key Methods

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**Purpose:** Calculates the current value or result of strike magnitude for missile.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForMissile(attackInformation, collisionData, weapon, 0);
```

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**Purpose:** Calculates the current value or result of strike magnitude for swing.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForSwing(attackInformation, collisionData, weapon, 0, 0, 0);
```

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**Purpose:** Calculates the current value or result of strike magnitude for unarmed attack.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForUnarmedAttack(attackInformation, collisionData, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)`

**Purpose:** Calculates the current value or result of strike magnitude for thrust.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForThrust(attackInformation, collisionData, weapon, 0, 0, false);
```

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**Purpose:** Executes the ComputeRawDamage logic.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.ComputeRawDamage(damageType, 0, 0, 0);
```

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**Purpose:** Reads and returns the blunt damage factor by damage type value held by the this instance.

```csharp
// Obtain an instance of DefaultStrikeMagnitudeModel from the subsystem API first
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.GetBluntDamageFactorByDamageType(damageType);
```

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**Purpose:** Calculates the current value or result of horse archery factor.

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
- [AttackCollisionData](../AttackCollisionData)
- [MissionGameModels](../MissionGameModels)
- [Agent](../../mission/Agent)
- [DefaultStrikeMagnitudeModel (中文页面)](../../../../zh/api/mission-ext/DefaultStrikeMagnitudeModel)