---
title: "StrikeMagnitudeCalculationModel"
description: "StrikeMagnitudeCalculationModel：TaleWorlds.MountAndBlade.ComponentInterfaces 的 public 类，继承 MBGameModel<StrikeMagnitudeCalculationModel>；公开成员 9 个（方法 9、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StrikeMagnitudeCalculationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class StrikeMagnitudeCalculationModel : MBGameModel<StrikeMagnitudeCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

StrikeMagnitudeCalculationModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<StrikeMagnitudeCalculationModel>，继承链为 StrikeMagnitudeCalculationModel → MBGameModel → GameModel。public/protected 成员共 9 个：9 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StrikeMagnitudeCalculationModel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.ComponentInterfaces`，继承链 StrikeMagnitudeCalculationModel → MBGameModel → GameModel。成员构成以方法为主（方法 9/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateStrikeMagnitudeForMissile` | `public abstract float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed);` | 方法 |
| `CalculateStrikeMagnitudeForSwing` | `public abstract float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed);` | 方法 |
| `CalculateStrikeMagnitudeForThrust` | `public abstract float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustSpeed, float extraLinearSpeed, bool isThrown = false);` | 方法 |
| `CalculateBaseBlowMagnitudeForPassiveUsage` | `public abstract float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed);` | 方法 |
| `ComputeRawDamage` | `public abstract float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio);` | 方法 |
| `CalculateStrikeMagnitudeForUnarmedAttack` | `public abstract float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining);` | 方法 |
| `GetBluntDamageFactorByDamageType` | `public abstract float GetBluntDamageFactorByDamageType(DamageTypes damageType);` | 方法 |
| `CalculateHorseArcheryFactor` | `public abstract float CalculateHorseArcheryFactor(BasicCharacterObject characterObject);` | 方法 |
| `CalculateAdjustedArmorForBlow` | `public virtual float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgentApplyDamageModel](../AgentApplyDamageModel/)
- [同命名空间 AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [同命名空间 ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [同命名空间 AutoBlockModel](../AutoBlockModel/)
