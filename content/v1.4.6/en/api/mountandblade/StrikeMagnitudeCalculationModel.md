---
title: "StrikeMagnitudeCalculationModel"
description: "StrikeMagnitudeCalculationModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<StrikeMagnitudeCalculationModel>; 9 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs."
---
# StrikeMagnitudeCalculationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class StrikeMagnitudeCalculationModel : MBGameModel<StrikeMagnitudeCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs`

## Overview

StrikeMagnitudeCalculationModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<StrikeMagnitudeCalculationModel>; the inheritance chain is StrikeMagnitudeCalculationModel → MBGameModel. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StrikeMagnitudeCalculationModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain StrikeMagnitudeCalculationModel → MBGameModel. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateStrikeMagnitudeForMissile` | `public abstract float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed);` | method |
| `CalculateStrikeMagnitudeForSwing` | `public abstract float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed);` | method |
| `CalculateStrikeMagnitudeForThrust` | `public abstract float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustSpeed, float extraLinearSpeed, bool isThrown = false);` | method |
| `CalculateBaseBlowMagnitudeForPassiveUsage` | `public abstract float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed);` | method |
| `ComputeRawDamage` | `public abstract float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio);` | method |
| `CalculateStrikeMagnitudeForUnarmedAttack` | `public abstract float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining);` | method |
| `GetBluntDamageFactorByDamageType` | `public abstract float GetBluntDamageFactorByDamageType(DamageTypes damageType);` | method |
| `CalculateHorseArcheryFactor` | `public abstract float CalculateHorseArcheryFactor(BasicCharacterObject characterObject);` | method |
| `CalculateAdjustedArmorForBlow` | `public virtual float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace AutoBlockModel](../AutoBlockModel)
