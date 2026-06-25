---
title: "SandboxStrikeMagnitudeModel"
description: "SandboxStrikeMagnitudeModel 的自动生成类参考。"
---
# SandboxStrikeMagnitudeModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxStrikeMagnitudeModel.cs`

## 概述

`SandboxStrikeMagnitudeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxStrikeMagnitudeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**用途 / Purpose:** 计算「horse archery factor」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateHorseArcheryFactor(characterObject);
```

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**用途 / Purpose:** 计算「strike magnitude for missile」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForMissile(attackInformation, collisionData, weapon, 0);
```

### CalculateBaseBlowMagnitudeForPassiveUsage
`public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)`

**用途 / Purpose:** 计算「base blow magnitude for passive usage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateBaseBlowMagnitudeForPassiveUsage(attackInformation, collisionData, 0);
```

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**用途 / Purpose:** 计算「strike magnitude for swing」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForSwing(attackInformation, collisionData, weapon, 0, 0, 0);
```

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**用途 / Purpose:** 计算「strike magnitude for unarmed attack」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForUnarmedAttack(attackInformation, collisionData, 0, 0);
```

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)`

**用途 / Purpose:** 计算「strike magnitude for thrust」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateStrikeMagnitudeForThrust(attackInformation, collisionData, weapon, 0, 0, false);
```

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.ComputeRawDamage(damageType, 0, 0, 0);
```

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**用途 / Purpose:** 读取并返回当前对象中 「blunt damage factor by damage type」 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.GetBluntDamageFactorByDamageType(damageType);
```

### CalculateAdjustedArmorForBlow
`public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**用途 / Purpose:** 计算「adjusted armor for blow」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxStrikeMagnitudeModel 实例
SandboxStrikeMagnitudeModel sandboxStrikeMagnitudeModel = ...;
var result = sandboxStrikeMagnitudeModel.CalculateAdjustedArmorForBlow(attackInformation, collisionData, 0, attackerCharacter, attackerCaptainCharacter, victimCharacter, victimCaptainCharacter, weaponComponent);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxStrikeMagnitudeModel>(new MySandboxStrikeMagnitudeModel());
```

## 参见

- [本区域目录](../)