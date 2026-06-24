<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultStrikeMagnitudeModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate strike magnitude for missile`.

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**Purpose:** Handles logic related to `calculate strike magnitude for swing`.

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**Purpose:** Handles logic related to `calculate strike magnitude for unarmed attack`.

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)`

**Purpose:** Handles logic related to `calculate strike magnitude for thrust`.

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**Purpose:** Handles logic related to `compute raw damage`.

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**Purpose:** Gets the current value of `blunt damage factor by damage type`.

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**Purpose:** Handles logic related to `calculate horse archery factor`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultStrikeMagnitudeModel>(new MyDefaultStrikeMagnitudeModel());
```

## See Also

- [Complete Class Catalog](../catalog)