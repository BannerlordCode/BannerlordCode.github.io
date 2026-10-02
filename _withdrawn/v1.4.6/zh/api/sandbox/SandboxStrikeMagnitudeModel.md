---
title: "SandboxStrikeMagnitudeModel"
description: "SandboxStrikeMagnitudeModel：SandBox.GameComponents 的 public 类，继承 StrikeMagnitudeCalculationModel；公开成员 9 个（方法 9、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandboxStrikeMagnitudeModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**File:** `SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandboxStrikeMagnitudeModel 位于 SandBox 模块，源文件 SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs。它是一个 public 类，实现/继承 StrikeMagnitudeCalculationModel，继承链为 SandboxStrikeMagnitudeModel → StrikeMagnitudeCalculationModel → MBGameModel → GameModel。public/protected 成员共 9 个：9 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxStrikeMagnitudeModel 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GameComponents`，继承链 SandboxStrikeMagnitudeModel → StrikeMagnitudeCalculationModel → MBGameModel → GameModel。成员构成以方法为主（方法 9/9，属性 0/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/GameComponents/SandboxStrikeMagnitudeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateHorseArcheryFactor` | `public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)` | 方法 |
| `CalculateStrikeMagnitudeForMissile` | `public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)` | 方法 |
| `CalculateBaseBlowMagnitudeForPassiveUsage` | `public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)` | 方法 |
| `CalculateStrikeMagnitudeForSwing` | `public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)` | 方法 |
| `CalculateStrikeMagnitudeForUnarmedAttack` | `public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)` | 方法 |
| `CalculateStrikeMagnitudeForThrust` | `public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)` | 方法 |
| `ComputeRawDamage` | `public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)` | 方法 |
| `GetBluntDamageFactorByDamageType` | `public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)` | 方法 |
| `CalculateAdjustedArmorForBlow` | `public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 StrikeMagnitudeCalculationModel](../../mission-ext/StrikeMagnitudeCalculationModel/)
- [同命名空间 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler/)
- [同命名空间 SandboxAgentApplyDamageModel](../SandboxAgentApplyDamageModel/)
- [同命名空间 SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel/)
- [同命名空间 SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel/)
