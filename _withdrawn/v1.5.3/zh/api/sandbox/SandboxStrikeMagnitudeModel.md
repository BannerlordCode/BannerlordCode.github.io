---
title: "SandboxStrikeMagnitudeModel"
description: "SandboxStrikeMagnitudeModel 的自动生成类参考。"
---
# SandboxStrikeMagnitudeModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel `
**Base:** StrikeMagnitudeCalculationModel
**Source:** SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs

## 概述

`SandboxStrikeMagnitudeModel` 的自动生成类参考页面。声明来自 `SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject) `

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float missileSpeed) `

### CalculateBaseBlowMagnitudeForPassiveUsage
`public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation,in AttackCollisionData collisionData,float extraLinearSpeed) `

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float swingSpeed,float impactPointAsPercent,float extraLinearSpeed) `

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation,in AttackCollisionData collisionData,float progressEffect,float momentumRemaining) `

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float thrustWeaponSpeed,float extraLinearSpeed,bool isThrown = false) `

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType,float magnitude,float armorEffectiveness,float absorbedDamageRatio) `

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType) `

### CalculateAdjustedArmorForBlow
`public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseArmor,BasicCharacterObject attackerCharacter,BasicCharacterObject attackerCaptainCharacter,BasicCharacterObject victimCharacter,BasicCharacterObject victimCaptainCharacter,WeaponComponentData weaponComponent) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
