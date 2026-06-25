---
title: "StrikeMagnitudeCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StrikeMagnitudeCalculationModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StrikeMagnitudeCalculationModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class StrikeMagnitudeCalculationModel : MBGameModel<StrikeMagnitudeCalculationModel>`
**Base:** `MBGameModel<StrikeMagnitudeCalculationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/StrikeMagnitudeCalculationModel.cs`

## 概述

`StrikeMagnitudeCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StrikeMagnitudeCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateStrikeMagnitudeForMissile
`public abstract float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**用途 / Purpose:** 处理 `calculate strike magnitude for missile` 相关逻辑。

### CalculateStrikeMagnitudeForSwing
`public abstract float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**用途 / Purpose:** 处理 `calculate strike magnitude for swing` 相关逻辑。

### CalculateStrikeMagnitudeForThrust
`public abstract float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustSpeed, float extraLinearSpeed, bool isThrown = false)`

**用途 / Purpose:** 处理 `calculate strike magnitude for thrust` 相关逻辑。

### ComputeRawDamage
`public abstract float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**用途 / Purpose:** 处理 `compute raw damage` 相关逻辑。

### CalculateStrikeMagnitudeForUnarmedAttack
`public abstract float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**用途 / Purpose:** 处理 `calculate strike magnitude for unarmed attack` 相关逻辑。

### GetBluntDamageFactorByDamageType
`public abstract float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**用途 / Purpose:** 获取 `blunt damage factor by damage type` 的当前值。

### CalculateHorseArcheryFactor
`public abstract float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**用途 / Purpose:** 处理 `calculate horse archery factor` 相关逻辑。

### CalculateAdjustedArmorForBlow
`public virtual float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**用途 / Purpose:** 处理 `calculate adjusted armor for blow` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomStrikeMagnitudeCalculationModel();
```

## 参见

- [完整类目录](../catalog)