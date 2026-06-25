---
title: "StrikeMagnitudeCalculationModel"
description: "StrikeMagnitudeCalculationModel 的自动生成类参考。"
---
# StrikeMagnitudeCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class StrikeMagnitudeCalculationModel : MBGameModel<StrikeMagnitudeCalculationModel>`
**Base:** `MBGameModel<StrikeMagnitudeCalculationModel>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/StrikeMagnitudeCalculationModel.cs`

## 概述

`StrikeMagnitudeCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StrikeMagnitudeCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateStrikeMagnitudeForMissile
`public abstract float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**用途 / Purpose:** 计算strike magnitude for missile的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateStrikeMagnitudeForMissile(attackInformation, collisionData, weapon, 0);
```

### CalculateStrikeMagnitudeForSwing
`public abstract float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**用途 / Purpose:** 计算strike magnitude for swing的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateStrikeMagnitudeForSwing(attackInformation, collisionData, weapon, 0, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public abstract float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustSpeed, float extraLinearSpeed, bool isThrown = false)`

**用途 / Purpose:** 计算strike magnitude for thrust的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateStrikeMagnitudeForThrust(attackInformation, collisionData, weapon, 0, 0, false);
```

### CalculateBaseBlowMagnitudeForPassiveUsage
`public abstract float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)`

**用途 / Purpose:** 计算base blow magnitude for passive usage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateBaseBlowMagnitudeForPassiveUsage(attackInformation, collisionData, 0);
```

### ComputeRawDamage
`public abstract float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**用途 / Purpose:** 调用 ComputeRawDamage 对应的操作。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.ComputeRawDamage(damageType, 0, 0, 0);
```

### CalculateStrikeMagnitudeForUnarmedAttack
`public abstract float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**用途 / Purpose:** 计算strike magnitude for unarmed attack的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateStrikeMagnitudeForUnarmedAttack(attackInformation, collisionData, 0, 0);
```

### GetBluntDamageFactorByDamageType
`public abstract float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**用途 / Purpose:** 读取并返回当前对象中 blunt damage factor by damage type 的结果。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.GetBluntDamageFactorByDamageType(damageType);
```

### CalculateHorseArcheryFactor
`public abstract float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**用途 / Purpose:** 计算horse archery factor的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateHorseArcheryFactor(characterObject);
```

### CalculateAdjustedArmorForBlow
`public virtual float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**用途 / Purpose:** 计算adjusted armor for blow的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StrikeMagnitudeCalculationModel 实例
StrikeMagnitudeCalculationModel strikeMagnitudeCalculationModel = ...;
var result = strikeMagnitudeCalculationModel.CalculateAdjustedArmorForBlow(attackInformation, collisionData, 0, attackerCharacter, attackerCaptainCharacter, victimCharacter, victimCaptainCharacter, weaponComponent);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
StrikeMagnitudeCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)