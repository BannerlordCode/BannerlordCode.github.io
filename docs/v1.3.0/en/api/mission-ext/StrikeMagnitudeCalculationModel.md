<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StrikeMagnitudeCalculationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `calculate strike magnitude for missile`.

### CalculateStrikeMagnitudeForSwing
`public abstract float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**Purpose:** Handles logic related to `calculate strike magnitude for swing`.

### CalculateStrikeMagnitudeForThrust
`public abstract float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustSpeed, float extraLinearSpeed, bool isThrown = false)`

**Purpose:** Handles logic related to `calculate strike magnitude for thrust`.

### ComputeRawDamage
`public abstract float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**Purpose:** Handles logic related to `compute raw damage`.

### CalculateStrikeMagnitudeForUnarmedAttack
`public abstract float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**Purpose:** Handles logic related to `calculate strike magnitude for unarmed attack`.

### GetBluntDamageFactorByDamageType
`public abstract float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**Purpose:** Gets the current value of `blunt damage factor by damage type`.

### CalculateHorseArcheryFactor
`public abstract float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**Purpose:** Handles logic related to `calculate horse archery factor`.

### CalculateAdjustedArmorForBlow
`public virtual float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**Purpose:** Handles logic related to `calculate adjusted armor for blow`.

## Usage Example

```csharp
var implementation = new CustomStrikeMagnitudeCalculationModel();
```

## See Also

- [Complete Class Catalog](../catalog)