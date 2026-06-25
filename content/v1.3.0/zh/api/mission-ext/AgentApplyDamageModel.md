---
title: "AgentApplyDamageModel"
description: "AgentApplyDamageModel 的自动生成类参考。"
---
# AgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`
**Base:** `MBGameModel<AgentApplyDamageModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`

## 概述

`AgentApplyDamageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `AgentApplyDamageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateDamage
`public float CalculateDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 计算「damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateDamage(attackInformation, collisionData, 0);
```

### IsDamageIgnored
`public abstract bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**用途 / Purpose:** 判断当前对象是否处于 「damage ignored」 状态或条件。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData);
```

### ApplyDamageAmplifications
`public abstract float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 「damage amplifications」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, 0);
```

### ApplyDamageScaling
`public abstract float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 「damage scaling」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, 0);
```

### ApplyDamageReductions
`public abstract float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 「damage reductions」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, 0);
```

### ApplyGeneralDamageModifiers
`public abstract float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 「general damage modifiers」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, 0);
```

### DecideMissileWeaponFlags
`public abstract void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
agentApplyDamageModel.DecideMissileWeaponFlags(attackerAgent, missileWeapon, missileWeaponFlags);
```

### CalculateDefendedBlowStunMultipliers
`public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**用途 / Purpose:** 计算「defended blow stun multipliers」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
agentApplyDamageModel.CalculateDefendedBlowStunMultipliers(attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon, attackerStunPeriod, defenderStunPeriod);
```

### CalculateStaggerThresholdDamage
`public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**用途 / Purpose:** 计算「stagger threshold damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateStaggerThresholdDamage(defenderAgent, blow);
```

### CalculateAlternativeAttackDamage
`public abstract float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**用途 / Purpose:** 计算「alternative attack damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateAlternativeAttackDamage(attackInformation, collisionData, weapon);
```

### CalculatePassiveAttackDamage
`public abstract float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 计算「passive attack damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculatePassiveAttackDamage(attackerCharacter, collisionData, 0);
```

### DecidePassiveAttackCollisionReaction
`public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecidePassiveAttackCollisionReaction(attacker, defender, false);
```

### DecideWeaponCollisionReaction
`public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
agentApplyDamageModel.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### CalculateShieldDamage
`public abstract float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**用途 / Purpose:** 计算「shield damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateShieldDamage(attackInformation, 0);
```

### CalculateSailFireDamage
`public abstract float CalculateSailFireDamage(Agent attackerAgent, float baseDamage, bool damageFromShipMachine)`

**用途 / Purpose:** 计算「sail fire damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateSailFireDamage(attackerAgent, 0, false);
```

### GetDamageMultiplierForBodyPart
`public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**用途 / Purpose:** 读取并返回当前对象中 「damage multiplier for body part」 的结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetDamageMultiplierForBodyPart(bodyPart, type, false, false);
```

### CanWeaponIgnoreFriendlyFireChecks
`public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon ignore friendly fire checks」 的前置条件。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponIgnoreFriendlyFireChecks(weapon);
```

### CanWeaponDealSneakAttack
`public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon deal sneak attack」 的前置条件。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponDealSneakAttack(attackInformation, weapon);
```

### CanWeaponDismount
`public abstract bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon dismount」 的前置条件。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponDismount(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockback
`public abstract bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon knockback」 的前置条件。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponKnockback(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockDown
`public abstract bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon knock down」 的前置条件。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CanWeaponKnockDown(attackerAgent, victimAgent, attackerWeapon, blow, collisionData);
```

### DecideCrushedThrough
`public abstract bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsageHit)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideCrushedThrough(attackerAgent, defenderAgent, 0, attackDirection, strikeType, defendItem, false);
```

### CalculateRemainingMomentum
`public abstract float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**用途 / Purpose:** 计算「remaining momentum」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.CalculateRemainingMomentum(0, b, collisionData, attacker, victim, attackerWeapon, false);
```

### DecideAgentShrugOffBlow
`public abstract bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public abstract bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### ShouldMissilePassThroughAfterShieldBreak
`public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.ShouldMissilePassThroughAfterShieldBreak(attackerAgent, attackerWeapon);
```

### GetDismountPenetration
`public abstract float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 读取并返回当前对象中 「dismount penetration」 的结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetDismountPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetKnockBackPenetration
`public abstract float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 读取并返回当前对象中 「knock back penetration」 的结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetKnockBackPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetKnockDownPenetration
`public abstract float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 读取并返回当前对象中 「knock down penetration」 的结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetKnockDownPenetration(attackerAgent, attackerWeapon, blow, collisionData);
```

### GetHorseChargePenetration
`public abstract float GetHorseChargePenetration()`

**用途 / Purpose:** 读取并返回当前对象中 「horse charge penetration」 的结果。

```csharp
// 先通过子系统 API 拿到 AgentApplyDamageModel 实例
AgentApplyDamageModel agentApplyDamageModel = ...;
var result = agentApplyDamageModel.GetHorseChargePenetration();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AgentApplyDamageModel instance = ...;
```

## 参见

- [本区域目录](../)