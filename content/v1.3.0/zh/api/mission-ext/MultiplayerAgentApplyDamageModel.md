---
title: "MultiplayerAgentApplyDamageModel"
description: "MultiplayerAgentApplyDamageModel 的自动生成类参考。"
---
# MultiplayerAgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAgentApplyDamageModel : AgentApplyDamageModel`
**Base:** `AgentApplyDamageModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerAgentApplyDamageModel.cs`

## 概述

`MultiplayerAgentApplyDamageModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MultiplayerAgentApplyDamageModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsDamageIgnored
`public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**用途 / Purpose:** 判断当前对象是否处于 「damage ignored」 状态或条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.IsDamageIgnored(attackInformation, collisionData);
```

### ApplyDamageAmplifications
`public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 「damage amplifications」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageAmplifications(attackInformation, collisionData, 0);
```

### ApplyDamageScaling
`public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 「damage scaling」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageScaling(attackInformation, collisionData, 0);
```

### ApplyDamageReductions
`public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 「damage reductions」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyDamageReductions(attackInformation, collisionData, 0);
```

### ApplyGeneralDamageModifiers
`public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 「general damage modifiers」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ApplyGeneralDamageModifiers(attackInformation, collisionData, 0);
```

### DecideMissileWeaponFlags
`public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**用途 / Purpose:** 处理与 「decide missile weapon flags」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.DecideMissileWeaponFlags(attackerAgent, missileWeapon, missileWeaponFlags);
```

### DecideCrushedThrough
`public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)`

**用途 / Purpose:** 处理与 「decide crushed through」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideCrushedThrough(attackerAgent, defenderAgent, 0, attackDirection, strikeType, defendItem, false);
```

### CanWeaponDealSneakAttack
`public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon deal sneak attack」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponDealSneakAttack(attackInformation, weapon);
```

### CanWeaponDismount
`public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon dismount」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponDismount(attackerAgent, attackerWeapon, blow, collisionData);
```

### CalculateDefendedBlowStunMultipliers
`public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**用途 / Purpose:** 计算「defended blow stun multipliers」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.CalculateDefendedBlowStunMultipliers(attackerAgent, defenderAgent, collisionResult, attackerWeapon, defenderWeapon, attackerStunPeriod, defenderStunPeriod);
```

### CanWeaponKnockback
`public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon knockback」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponKnockback(attackerAgent, attackerWeapon, blow, collisionData);
```

### CanWeaponKnockDown
`public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon knock down」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponKnockDown(attackerAgent, victimAgent, attackerWeapon, blow, collisionData);
```

### GetDismountPenetration
`public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 读取并返回当前对象中 「dismount penetration」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetDismountPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetKnockBackPenetration
`public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 读取并返回当前对象中 「knock back penetration」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetKnockBackPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetKnockDownPenetration
`public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 读取并返回当前对象中 「knock down penetration」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetKnockDownPenetration(attackerAgent, attackerWeapon, blow, attackCollisionData);
```

### GetHorseChargePenetration
`public override float GetHorseChargePenetration()`

**用途 / Purpose:** 读取并返回当前对象中 「horse charge penetration」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetHorseChargePenetration();
```

### CalculateStaggerThresholdDamage
`public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**用途 / Purpose:** 计算「stagger threshold damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateStaggerThresholdDamage(defenderAgent, blow);
```

### CalculateAlternativeAttackDamage
`public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**用途 / Purpose:** 计算「alternative attack damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateAlternativeAttackDamage(attackInformation, collisionData, weapon);
```

### CalculatePassiveAttackDamage
`public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 计算「passive attack damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculatePassiveAttackDamage(attackerCharacter, collisionData, 0);
```

### DecidePassiveAttackCollisionReaction
`public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**用途 / Purpose:** 处理与 「decide passive attack collision reaction」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecidePassiveAttackCollisionReaction(attacker, defender, false);
```

### CalculateShieldDamage
`public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**用途 / Purpose:** 计算「shield damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateShieldDamage(attackInformation, 0);
```

### CalculateSailFireDamage
`public override float CalculateSailFireDamage(Agent attackerAgent, float baseDamage, bool damageFromShipMachine)`

**用途 / Purpose:** 计算「sail fire damage」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateSailFireDamage(attackerAgent, 0, false);
```

### GetDamageMultiplierForBodyPart
`public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**用途 / Purpose:** 读取并返回当前对象中 「damage multiplier for body part」 的结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.GetDamageMultiplierForBodyPart(bodyPart, type, false, false);
```

### CanWeaponIgnoreFriendlyFireChecks
`public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**用途 / Purpose:** 检查当前对象是否满足 「weapon ignore friendly fire checks」 的前置条件。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CanWeaponIgnoreFriendlyFireChecks(weapon);
```

### DecideAgentShrugOffBlow
`public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**用途 / Purpose:** 处理与 「decide agent shrug off blow」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentShrugOffBlow(victimAgent, collisionData, blow);
```

### DecideAgentDismountedByBlow
`public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理与 「decide agent dismounted by blow」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentDismountedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedBackByBlow
`public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理与 「decide agent knocked back by blow」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentKnockedBackByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideAgentKnockedDownByBlow
`public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理与 「decide agent knocked down by blow」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideAgentKnockedDownByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideMountRearedByBlow
`public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理与 「decide mount reared by blow」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.DecideMountRearedByBlow(attackerAgent, victimAgent, collisionData, attackerWeapon, blow);
```

### DecideWeaponCollisionReaction
`public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**用途 / Purpose:** 处理与 「decide weapon collision reaction」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
multiplayerAgentApplyDamageModel.DecideWeaponCollisionReaction(registeredBlow, collisionData, attacker, defender, attackerWeapon, false, false, 0, colReaction);
```

### ShouldMissilePassThroughAfterShieldBreak
`public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**用途 / Purpose:** 处理与 「should missile pass through after shield break」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.ShouldMissilePassThroughAfterShieldBreak(attackerAgent, attackerWeapon);
```

### CalculateRemainingMomentum
`public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**用途 / Purpose:** 计算「remaining momentum」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 MultiplayerAgentApplyDamageModel 实例
MultiplayerAgentApplyDamageModel multiplayerAgentApplyDamageModel = ...;
var result = multiplayerAgentApplyDamageModel.CalculateRemainingMomentum(0, b, collisionData, attacker, victim, attackerWeapon, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<MultiplayerAgentApplyDamageModel>(new MyMultiplayerAgentApplyDamageModel());
```

## 参见

- [本区域目录](../)