<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StrikeMagnitudeCalculationModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StrikeMagnitudeCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class StrikeMagnitudeCalculationModel : MBGameModel<StrikeMagnitudeCalculationModel>`
**Base:** `MBGameModel<StrikeMagnitudeCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs`

## Overview

`StrikeMagnitudeCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<StrikeMagnitudeCalculationModel>(new MyStrikeMagnitudeCalculationModel())` to change how it computes.

## Key Methods

### CalculateStrikeMagnitudeForMissile
```csharp
public abstract float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)
```

### CalculateStrikeMagnitudeForSwing
```csharp
public abstract float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)
```

### CalculateStrikeMagnitudeForThrust
```csharp
public abstract float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustSpeed, float extraLinearSpeed, bool isThrown = false)
```

### ComputeRawDamage
```csharp
public abstract float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)
```

### CalculateStrikeMagnitudeForUnarmedAttack
```csharp
public abstract float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)
```

### GetBluntDamageFactorByDamageType
```csharp
public abstract float GetBluntDamageFactorByDamageType(DamageTypes damageType)
```

### CalculateHorseArcheryFactor
```csharp
public abstract float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)
```

### CalculateAdjustedArmorForBlow
```csharp
public virtual float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)
```

## Usage Example

```csharp
// Typical usage of StrikeMagnitudeCalculationModel (Model)
Game.Current.ReplaceModel<StrikeMagnitudeCalculationModel>(new MyStrikeMagnitudeCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)