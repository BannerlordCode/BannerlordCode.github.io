---
title: "SandboxAgentApplyDamageModel"
description: "SandboxAgentApplyDamageModel 的自动生成类参考。"
---
# SandboxAgentApplyDamageModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox.GameComponents
**Type:** `public class SandboxAgentApplyDamageModel : AgentApplyDamageModel`
**Base:** `AgentApplyDamageModel`
**File:** `Modules.SandBox/SandBox/SandBox.GameComponents/SandboxAgentApplyDamageModel.cs`

## 概述

`SandboxAgentApplyDamageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `SandboxAgentApplyDamageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsDamageIgnored
`public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 damage ignored 状态或条件。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData);
```

### ApplyDamageAmplifications
`public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** **用途 / Purpose:** 将 damage amplifications 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, 0);
```

### ApplyDamageScaling
`public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** **用途 / Purpose:** 将 damage scaling 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, 0);
```

### ApplyDamageReductions
`public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** **用途 / Purpose:** 将 damage reductions 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, 0);
```

### ApplyGeneralDamageModifiers
`public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** **用途 / Purpose:** 将 general damage modifiers 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, 0);
```

### DecideCrushedThrough
`public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideCrushedThrough 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideCrushedThrough(attackerAgent, defenderAgent, 0, attackDirection, strikeType, defendItem, false);
```

### DecideMissileWeaponFlags
`public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideMissileWeaponFlags 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
sandboxAgentApplyDamageModel.DecideMissileWeaponFlags(attackerAgent, missileWeapon, missileWeaponFlags);
```

### CanWeaponIgnoreFriendlyFireChecks
`public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 weapon ignore friendly fire checks 的前置条件。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponIgnoreFriendlyFireChecks(weapon);
```

### CanWeaponDealSneakAttack
`public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 weapon deal sneak attack 的前置条件。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponDealSneakAttack(attackInformation, weapon);
```

### CanWeaponDismount
`public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 weapon dismount 的前置条件。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponDismount(attackerAgent, attackerWeapon, blow, collisionData);
```

### CalculateDefendedBlowStunMultipliers
`public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**用途 / Purpose:** **用途 / Purpose:** 计算defended blow stun multipliers的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
sandboxAgentApplyDamageModel.CalculateDefendedBlowStunMultipliers(attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon, attackerStunPeriod, defenderStunPeriod);
```

### CanWeaponKnockback
`public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 weapon knockback 的前置条件。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponKnockback(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockDown
`public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 weapon knock down 的前置条件。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CanWeaponKnockDown(attackerAgent, victimAgent, attackerWeapon, blow, collisionData);
```

### GetDismountPenetration
`public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 dismount penetration 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetDismountPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetKnockBackPenetration
`public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 knock back penetration 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetKnockBackPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetKnockDownPenetration
`public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 knock down penetration 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetKnockDownPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetHorseChargePenetration
`public override float GetHorseChargePenetration()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 horse charge penetration 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetHorseChargePenetration();
```

### CalculateStaggerThresholdDamage
`public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**用途 / Purpose:** **用途 / Purpose:** 计算stagger threshold damage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateStaggerThresholdDamage(defenderAgent, blow);
```

### CalculateAlternativeAttackDamage
`public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**用途 / Purpose:** **用途 / Purpose:** 计算alternative attack damage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateAlternativeAttackDamage(attackInformation, collisionData, weapon);
```

### CalculatePassiveAttackDamage
`public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** **用途 / Purpose:** 计算passive attack damage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculatePassiveAttackDamage(attackerCharacter, collisionData, 0);
```

### DecidePassiveAttackCollisionReaction
`public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecidePassiveAttackCollisionReaction 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecidePassiveAttackCollisionReaction(attacker, defender, false);
```

### CalculateShieldDamage
`public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**用途 / Purpose:** **用途 / Purpose:** 计算shield damage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateShieldDamage(attackInformation, 0);
```

### CalculateSailFireDamage
`public override float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)`

**用途 / Purpose:** **用途 / Purpose:** 计算sail fire damage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateSailFireDamage(attackerAgent, shipOrigin, 0, false);
```

### CalculateHullFireDamage
`public override float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)`

**用途 / Purpose:** **用途 / Purpose:** 计算hull fire damage的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateHullFireDamage(0, shipOrigin);
```

### GetDamageMultiplierForBodyPart
`public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 damage multiplier for body part 的结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.GetDamageMultiplierForBodyPart(bodyPart, type, false, false);
```

### DecideAgentShrugOffBlow
`public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideAgentShrugOffBlow 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideAgentDismountedByBlow 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideAgentKnockedBackByBlow 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideAgentKnockedDownByBlow 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideMountRearedByBlow 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideWeaponCollisionReaction
`public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideWeaponCollisionReaction 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
sandboxAgentApplyDamageModel.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### ShouldMissilePassThroughAfterShieldBreak
`public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldMissilePassThroughAfterShieldBreak 对应的操作。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.ShouldMissilePassThroughAfterShieldBreak(attackerAgent, attackerWeapon);
```

### CalculateRemainingMomentum
`public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**用途 / Purpose:** **用途 / Purpose:** 计算remaining momentum的当前值或结果。

```csharp
// 先通过子系统 API 拿到 SandboxAgentApplyDamageModel 实例
SandboxAgentApplyDamageModel sandboxAgentApplyDamageModel = ...;
var result = sandboxAgentApplyDamageModel.CalculateRemainingMomentum(0, b, collisionData, attacker, victim, attackerWeapon, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<SandboxAgentApplyDamageModel>(new MySandboxAgentApplyDamageModel());
```

## 参见

- [本区域目录](../)