---
title: "MultiplayerStrikeMagnitudeModel"
description: "MultiplayerStrikeMagnitudeModel 的自动生成类参考。"
---
# MultiplayerStrikeMagnitudeModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade.Multiplayer.2
**Type:** `public class MultiplayerStrikeMagnitudeModel : StrikeMagnitudeCalculationModel `
**Base:** StrikeMagnitudeCalculationModel
**Source:** TaleWorlds.MountAndBlade.Multiplayer.2/TaleWorlds/MountAndBlade/MultiplayerStrikeMagnitudeModel.cs

## 概述

`MultiplayerStrikeMagnitudeModel` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade.Multiplayer.2/TaleWorlds/MountAndBlade/MultiplayerStrikeMagnitudeModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float missileSpeed) `

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float swingSpeed,float impactPoint,float extraLinearSpeed) `

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation,in AttackCollisionData collisionData,float progressEffect,float momentumRemaining) `

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation,in AttackCollisionData collisionData,in MissionWeapon weapon,float thrustWeaponSpeed,float extraLinearSpeed,bool isThrown = false) `

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType,float magnitude,float armorEffectiveness,float absorbedDamageRatio) `

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType) `

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject) `

### CalculateBaseBlowMagnitudeForPassiveUsage
`public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation,in AttackCollisionData collisionData,float extraLinearSpeed) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
