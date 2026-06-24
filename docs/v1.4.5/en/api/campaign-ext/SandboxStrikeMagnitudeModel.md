<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandboxStrikeMagnitudeModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxStrikeMagnitudeModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.GameComponents/SandboxStrikeMagnitudeModel.cs`

## Overview

`SandboxStrikeMagnitudeModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SandboxStrikeMagnitudeModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**Purpose:** Handles logic related to `calculate horse archery factor`.

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**Purpose:** Handles logic related to `calculate strike magnitude for missile`.

### CalculateBaseBlowMagnitudeForPassiveUsage
`public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)`

**Purpose:** Handles logic related to `calculate base blow magnitude for passive usage`.

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

### CalculateAdjustedArmorForBlow
`public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**Purpose:** Handles logic related to `calculate adjusted armor for blow`.

## Usage Example

```csharp
Game.Current.ReplaceModel<SandboxStrikeMagnitudeModel>(new MySandboxStrikeMagnitudeModel());
```

## See Also

- [Complete Class Catalog](../catalog)