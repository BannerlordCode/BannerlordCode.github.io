---
title: "CombatStatCalculator"
description: "CombatStatCalculator 的自动生成类参考。"
---
# CombatStatCalculator

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class CombatStatCalculator`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/CombatStatCalculator.cs`

## 概述

`CombatStatCalculator` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CalculateStrikeMagnitudeForSwing
`public static float CalculateStrikeMagnitudeForSwing(float swingSpeed, float impactPointAsPercent, float weaponWeight, float weaponLength, float weaponInertia, float weaponCoM, float extraLinearSpeed)`

**用途 / Purpose:** 计算「strike magnitude for swing」的当前值或结果。

```csharp
// 静态调用，不需要实例
CombatStatCalculator.CalculateStrikeMagnitudeForSwing(0, 0, 0, 0, 0, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public static float CalculateStrikeMagnitudeForThrust(float thrustWeaponSpeed, float weaponWeight, float extraLinearSpeed, bool isThrown)`

**用途 / Purpose:** 计算「strike magnitude for thrust」的当前值或结果。

```csharp
// 静态调用，不需要实例
CombatStatCalculator.CalculateStrikeMagnitudeForThrust(0, 0, 0, false);
```

### CalculateBaseBlowMagnitudeForSwing
`public static float CalculateBaseBlowMagnitudeForSwing(float angularSpeed, float weaponReach, float weaponWeight, float weaponInertia, float weaponCoM, float impactPoint, float exraLinearSpeed)`

**用途 / Purpose:** 计算「base blow magnitude for swing」的当前值或结果。

```csharp
// 静态调用，不需要实例
CombatStatCalculator.CalculateBaseBlowMagnitudeForSwing(0, 0, 0, 0, 0, 0, 0);
```

### CalculateBaseBlowMagnitudeForThrust
`public static float CalculateBaseBlowMagnitudeForThrust(float linearSpeed, float weaponWeight, float exraLinearSpeed)`

**用途 / Purpose:** 计算「base blow magnitude for thrust」的当前值或结果。

```csharp
// 静态调用，不需要实例
CombatStatCalculator.CalculateBaseBlowMagnitudeForThrust(0, 0, 0);
```

### CalculateBaseBlowMagnitudeForPassiveUsage
`public static float CalculateBaseBlowMagnitudeForPassiveUsage(float weaponWeight, float extraLinearSpeed)`

**用途 / Purpose:** 计算「base blow magnitude for passive usage」的当前值或结果。

```csharp
// 静态调用，不需要实例
CombatStatCalculator.CalculateBaseBlowMagnitudeForPassiveUsage(0, 0);
```

## 使用示例

```csharp
CombatStatCalculator.CalculateStrikeMagnitudeForSwing(0, 0, 0, 0, 0, 0, 0);
```

## 参见

- [本区域目录](../)