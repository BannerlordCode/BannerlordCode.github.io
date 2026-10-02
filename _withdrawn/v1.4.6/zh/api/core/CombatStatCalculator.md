---
title: "CombatStatCalculator"
description: "CombatStatCalculator：TaleWorlds.Core 的 public 类；公开成员 12 个（方法 5、属性 0、字段 7）。源文件 TaleWorlds.Core/CombatStatCalculator.cs。"
---
# CombatStatCalculator

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class CombatStatCalculator`
**File:** `TaleWorlds.Core/CombatStatCalculator.cs`

## 概述

CombatStatCalculator 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/CombatStatCalculator.cs。它是一个 public 类，继承链为 CombatStatCalculator。public/protected 成员共 12 个：5 方法、7 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CombatStatCalculator 是 TaleWorlds.Core 的顶层类型，命名空间与模块目录一致，继承链 CombatStatCalculator。成员构成以方法为主（方法 5/12，属性 0/12），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/CombatStatCalculator.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateStrikeMagnitudeForSwing` | `public static float CalculateStrikeMagnitudeForSwing(float swingSpeed, float impactPointAsPercent, float weaponWeight, float weaponLength, float weaponInertia, float weaponCoM, float extraLinearSpeed)` | 方法 |
| `CalculateStrikeMagnitudeForThrust` | `public static float CalculateStrikeMagnitudeForThrust(float thrustWeaponSpeed, float weaponWeight, float extraLinearSpeed, bool isThrown)` | 方法 |
| `CalculateBaseBlowMagnitudeForSwing` | `public static float CalculateBaseBlowMagnitudeForSwing(float angularSpeed, float weaponReach, float weaponWeight, float weaponInertia, float weaponCoM, float impactPoint, float exraLinearSpeed)` | 方法 |
| `CalculateBaseBlowMagnitudeForThrust` | `public static float CalculateBaseBlowMagnitudeForThrust(float linearSpeed, float weaponWeight, float exraLinearSpeed)` | 方法 |
| `CalculateBaseBlowMagnitudeForPassiveUsage` | `public static float CalculateBaseBlowMagnitudeForPassiveUsage(float weaponWeight, float extraLinearSpeed)` | 方法 |
| `ReferenceSwingSpeed` | `public const float ReferenceSwingSpeed` | 字段 |
| `ReferenceThrustSpeed` | `public const float ReferenceThrustSpeed` | 字段 |
| `SwingSpeedConst` | `public const float SwingSpeedConst` | 字段 |
| `ThrustSpeedConst` | `public const float ThrustSpeedConst` | 字段 |
| `DefaultImpactDistanceFromTip` | `public const float DefaultImpactDistanceFromTip` | 字段 |
| `ArmLength` | `public const float ArmLength` | 字段 |
| `ArmWeight` | `public const float ArmWeight` | 字段 |

## 参见

- [↑ core 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionSetCode](../ActionSetCode)
- [同命名空间 AgentAttackType](../AgentAttackType)
- [同命名空间 AgentControllerType](../AgentControllerType)
- [同命名空间 AgentData](../AgentData)
