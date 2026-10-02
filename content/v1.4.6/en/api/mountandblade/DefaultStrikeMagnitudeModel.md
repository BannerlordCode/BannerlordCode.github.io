---
title: "DefaultStrikeMagnitudeModel"
description: "DefaultStrikeMagnitudeModel: a public class in TaleWorlds.MountAndBlade, inheriting StrikeMagnitudeCalculationModel; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs."
---
# DefaultStrikeMagnitudeModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**File:** `TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs`

## Overview

DefaultStrikeMagnitudeModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs. It is a public class, implementing/inheriting StrikeMagnitudeCalculationModel; the inheritance chain is DefaultStrikeMagnitudeModel → StrikeMagnitudeCalculationModel → MBGameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultStrikeMagnitudeModel is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DefaultStrikeMagnitudeModel → StrikeMagnitudeCalculationModel → MBGameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateStrikeMagnitudeForMissile` | `public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)` | method |
| `CalculateStrikeMagnitudeForSwing` | `public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)` | method |
| `CalculateStrikeMagnitudeForUnarmedAttack` | `public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)` | method |
| `CalculateStrikeMagnitudeForThrust` | `public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)` | method |
| `ComputeRawDamage` | `public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)` | method |
| `GetBluntDamageFactorByDamageType` | `public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)` | method |
| `CalculateHorseArcheryFactor` | `public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)` | method |
| `CalculateBaseBlowMagnitudeForPassiveUsage` | `public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface StrikeMagnitudeCalculationModel](../StrikeMagnitudeCalculationModel)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
