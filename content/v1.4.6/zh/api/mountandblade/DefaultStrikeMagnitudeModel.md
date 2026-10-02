---
title: "DefaultStrikeMagnitudeModel"
description: "DefaultStrikeMagnitudeModel：TaleWorlds.MountAndBlade 的 public 类，继承 StrikeMagnitudeCalculationModel；公开成员 8 个（方法 8、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs。"
---
# DefaultStrikeMagnitudeModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**File:** `TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs`

## 概述

DefaultStrikeMagnitudeModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs。它是一个 public 类，实现/继承 StrikeMagnitudeCalculationModel，继承链为 DefaultStrikeMagnitudeModel → StrikeMagnitudeCalculationModel → MBGameModel。public/protected 成员共 8 个：8 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultStrikeMagnitudeModel 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 DefaultStrikeMagnitudeModel → StrikeMagnitudeCalculationModel → MBGameModel。成员构成以方法为主（方法 8/8，属性 0/8），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateStrikeMagnitudeForMissile` | `public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)` | 方法 |
| `CalculateStrikeMagnitudeForSwing` | `public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)` | 方法 |
| `CalculateStrikeMagnitudeForUnarmedAttack` | `public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)` | 方法 |
| `CalculateStrikeMagnitudeForThrust` | `public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)` | 方法 |
| `ComputeRawDamage` | `public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)` | 方法 |
| `GetBluntDamageFactorByDamageType` | `public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)` | 方法 |
| `CalculateHorseArcheryFactor` | `public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)` | 方法 |
| `CalculateBaseBlowMagnitudeForPassiveUsage` | `public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 StrikeMagnitudeCalculationModel](../StrikeMagnitudeCalculationModel)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
