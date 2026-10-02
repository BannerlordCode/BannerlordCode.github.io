---
title: "SandboxStrikeMagnitudeModel"
description: "Auto-generated class reference for SandboxStrikeMagnitudeModel."
---
# SandboxStrikeMagnitudeModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel `
**Base:** StrikeMagnitudeCalculationModel
**Source:** SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs

## Overview

Auto-generated stub for `SandboxStrikeMagnitudeModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float missileSpeed)`

### CalculateBaseBlowMagnitudeForPassiveUsage
`public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation,in AttackCollisionData collisionData,float extraLinearSpeed)`

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float swingSpeed,float impactPointAsPercent,float extraLinearSpeed)`

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation,in AttackCollisionData collisionData,float progressEffect,float momentumRemaining)`

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float thrustWeaponSpeed,float extraLinearSpeed,bool isThrown = false)`

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType,float magnitude,float armorEffectiveness,float absorbedDamageRatio)`

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

### CalculateAdjustedArmorForBlow
`public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseArmor,BasicCharacterObject attackerCharacter,BasicCharacterObject attackerCaptainCharacter,BasicCharacterObject victimCharacter,BasicCharacterObject victimCaptainCharacter,WeaponComponentData weaponComponent)`

## See Also

- [Section index](../)
