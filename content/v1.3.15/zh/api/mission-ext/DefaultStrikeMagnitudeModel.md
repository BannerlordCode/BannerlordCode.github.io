---
title: "DefaultStrikeMagnitudeModel"
description: "DefaultStrikeMagnitudeModel 的自动生成类参考。"
---
# DefaultStrikeMagnitudeModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `TaleWorlds.MountAndBlade/DefaultStrikeMagnitudeModel.cs`

## 概述

`DefaultStrikeMagnitudeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultStrikeMagnitudeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**用途 / Purpose:** 计算strike magnitude for missile的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultStrikeMagnitudeModel 实例
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForMissile(attackInformation, collisionData, weapon, 0);
```

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**用途 / Purpose:** 计算strike magnitude for swing的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultStrikeMagnitudeModel 实例
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForSwing(attackInformation, collisionData, weapon, 0, 0, 0);
```

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**用途 / Purpose:** 计算strike magnitude for unarmed attack的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultStrikeMagnitudeModel 实例
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForUnarmedAttack(attackInformation, collisionData, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)`

**用途 / Purpose:** 计算strike magnitude for thrust的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultStrikeMagnitudeModel 实例
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateStrikeMagnitudeForThrust(attackInformation, collisionData, weapon, 0, 0, false);
```

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**用途 / Purpose:** 调用 ComputeRawDamage 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultStrikeMagnitudeModel 实例
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.ComputeRawDamage(damageType, 0, 0, 0);
```

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**用途 / Purpose:** 读取并返回当前对象中 blunt damage factor by damage type 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultStrikeMagnitudeModel 实例
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.GetBluntDamageFactorByDamageType(damageType);
```

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**用途 / Purpose:** 计算horse archery factor的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultStrikeMagnitudeModel 实例
DefaultStrikeMagnitudeModel defaultStrikeMagnitudeModel = ...;
var result = defaultStrikeMagnitudeModel.CalculateHorseArcheryFactor(characterObject);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultStrikeMagnitudeModel>(new MyDefaultStrikeMagnitudeModel());
```

## 参见

- [本区域目录](../)