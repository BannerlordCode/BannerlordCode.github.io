<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultStrikeMagnitudeModel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultStrikeMagnitudeModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs`

## Overview

`DefaultStrikeMagnitudeModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultStrikeMagnitudeModel>(new MyDefaultStrikeMagnitudeModel())` to change how it computes.

## Key Methods

### CalculateStrikeMagnitudeForMissile
```csharp
public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)
```

### CalculateStrikeMagnitudeForSwing
```csharp
public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)
```

### CalculateStrikeMagnitudeForUnarmedAttack
```csharp
public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)
```

### CalculateStrikeMagnitudeForThrust
```csharp
public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)
```

### ComputeRawDamage
```csharp
public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)
```

### GetBluntDamageFactorByDamageType
```csharp
public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)
```

### CalculateHorseArcheryFactor
```csharp
public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)
```

## Usage Example

```csharp
// Typical usage of DefaultStrikeMagnitudeModel (Model)
Game.Current.ReplaceModel<DefaultStrikeMagnitudeModel>(new MyDefaultStrikeMagnitudeModel());
```

## See Also

- [Complete Class Catalog](../catalog)