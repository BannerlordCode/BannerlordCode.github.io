---
title: "StrikeMagnitudeCalculationModel"
description: "Auto-generated class reference for StrikeMagnitudeCalculationModel."
---
# StrikeMagnitudeCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class StrikeMagnitudeCalculationModel : MBGameModel<StrikeMagnitudeCalculationModel> `
**Base:** MBGameModel<StrikeMagnitudeCalculationModel>
**Source:** TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs

## Overview

Auto-generated stub for `StrikeMagnitudeCalculationModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CalculateStrikeMagnitudeForMissile
`public abstract float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float missileSpeed)`

### CalculateStrikeMagnitudeForSwing
`public abstract float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float swingSpeed,float impactPointAsPercent,float extraLinearSpeed)`

### CalculateStrikeMagnitudeForThrust
`public abstract float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float thrustSpeed,float extraLinearSpeed,bool isThrown = false)`

### CalculateBaseBlowMagnitudeForPassiveUsage
`public abstract float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation,in AttackCollisionData collisionData,float extraLinearSpeed)`

### ComputeRawDamage
`public abstract float ComputeRawDamage(DamageTypes damageType,float magnitude,float armorEffectiveness,float absorbedDamageRatio)`

### CalculateStrikeMagnitudeForUnarmedAttack
`public abstract float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation,in AttackCollisionData collisionData,float progressEffect,float momentumRemaining)`

### GetBluntDamageFactorByDamageType
`public abstract float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

### CalculateHorseArcheryFactor
`public abstract float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

### CalculateAdjustedArmorForBlow
`public virtual float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseArmor,BasicCharacterObject attackerCharacter,BasicCharacterObject attackerCaptainCharacter,BasicCharacterObject victimCharacter,BasicCharacterObject victimCaptainCharacter,WeaponComponentData weaponComponent)`

## See Also

- [Section index](../)
