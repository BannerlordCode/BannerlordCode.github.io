---
title: "SandboxStrikeMagnitudeModel"
description: "SandboxStrikeMagnitudeModel: a public class in SandBox.GameComponents, inheriting StrikeMagnitudeCalculationModel; 9 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxStrikeMagnitudeModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**File:** `SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SandboxStrikeMagnitudeModel lives in the SandBox module, source file SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs. It is a public class, implementing/inheriting StrikeMagnitudeCalculationModel; the inheritance chain is SandboxStrikeMagnitudeModel → StrikeMagnitudeCalculationModel → MBGameModel → GameModel. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxStrikeMagnitudeModel lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GameComponents`, inheritance chain SandboxStrikeMagnitudeModel → StrikeMagnitudeCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateHorseArcheryFactor` | `public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)` | method |
| `CalculateStrikeMagnitudeForMissile` | `public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)` | method |
| `CalculateBaseBlowMagnitudeForPassiveUsage` | `public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)` | method |
| `CalculateStrikeMagnitudeForSwing` | `public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)` | method |
| `CalculateStrikeMagnitudeForUnarmedAttack` | `public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)` | method |
| `CalculateStrikeMagnitudeForThrust` | `public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)` | method |
| `ComputeRawDamage` | `public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)` | method |
| `GetBluntDamageFactorByDamageType` | `public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)` | method |
| `CalculateAdjustedArmorForBlow` | `public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface StrikeMagnitudeCalculationModel](../../mission-ext/StrikeMagnitudeCalculationModel/)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [same namespace SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel/)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/)
