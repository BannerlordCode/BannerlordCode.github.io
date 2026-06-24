<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandboxStrikeMagnitudeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandboxStrikeMagnitudeModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxStrikeMagnitudeModel : StrikeMagnitudeCalculationModel`
**Base:** `StrikeMagnitudeCalculationModel`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.GameComponents/SandboxStrikeMagnitudeModel.cs`

## 概述

`SandboxStrikeMagnitudeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxStrikeMagnitudeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateHorseArcheryFactor
`public override float CalculateHorseArcheryFactor(BasicCharacterObject characterObject)`

**用途 / Purpose:** 处理 `calculate horse archery factor` 相关逻辑。

### CalculateStrikeMagnitudeForMissile
`public override float CalculateStrikeMagnitudeForMissile(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float missileSpeed)`

**用途 / Purpose:** 处理 `calculate strike magnitude for missile` 相关逻辑。

### CalculateBaseBlowMagnitudeForPassiveUsage
`public override float CalculateBaseBlowMagnitudeForPassiveUsage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float extraLinearSpeed)`

**用途 / Purpose:** 处理 `calculate base blow magnitude for passive usage` 相关逻辑。

### CalculateStrikeMagnitudeForSwing
`public override float CalculateStrikeMagnitudeForSwing(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float swingSpeed, float impactPointAsPercent, float extraLinearSpeed)`

**用途 / Purpose:** 处理 `calculate strike magnitude for swing` 相关逻辑。

### CalculateStrikeMagnitudeForUnarmedAttack
`public override float CalculateStrikeMagnitudeForUnarmedAttack(in AttackInformation attackInformation, in AttackCollisionData collisionData, float progressEffect, float momentumRemaining)`

**用途 / Purpose:** 处理 `calculate strike magnitude for unarmed attack` 相关逻辑。

### CalculateStrikeMagnitudeForThrust
`public override float CalculateStrikeMagnitudeForThrust(in AttackInformation attackInformation, in AttackCollisionData collisionData, in MissionWeapon weapon, float thrustWeaponSpeed, float extraLinearSpeed, bool isThrown = false)`

**用途 / Purpose:** 处理 `calculate strike magnitude for thrust` 相关逻辑。

### ComputeRawDamage
`public override float ComputeRawDamage(DamageTypes damageType, float magnitude, float armorEffectiveness, float absorbedDamageRatio)`

**用途 / Purpose:** 处理 `compute raw damage` 相关逻辑。

### GetBluntDamageFactorByDamageType
`public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)`

**用途 / Purpose:** 获取 `blunt damage factor by damage type` 的当前值。

### CalculateAdjustedArmorForBlow
`public override float CalculateAdjustedArmorForBlow(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseArmor, BasicCharacterObject attackerCharacter, BasicCharacterObject attackerCaptainCharacter, BasicCharacterObject victimCharacter, BasicCharacterObject victimCaptainCharacter, WeaponComponentData weaponComponent)`

**用途 / Purpose:** 处理 `calculate adjusted armor for blow` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxStrikeMagnitudeModel>(new MySandboxStrikeMagnitudeModel());
```

## 参见

- [完整类目录](../catalog)