<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AgentApplyDamageModel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `calculate damage` 相关逻辑。

### IsDamageIgnored
`public abstract bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)`

**用途 / Purpose:** 处理 `is damage ignored` 相关逻辑。

### ApplyDamageAmplifications
`public abstract float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 `damage amplifications` 应用到当前对象。

### ApplyDamageScaling
`public abstract float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 `damage scaling` 应用到当前对象。

### ApplyDamageReductions
`public abstract float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 `damage reductions` 应用到当前对象。

### ApplyGeneralDamageModifiers
`public abstract float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 将 `general damage modifiers` 应用到当前对象。

### DecideMissileWeaponFlags
`public abstract void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)`

**用途 / Purpose:** 处理 `decide missile weapon flags` 相关逻辑。

### CalculateDefendedBlowStunMultipliers
`public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)`

**用途 / Purpose:** 处理 `calculate defended blow stun multipliers` 相关逻辑。

### CalculateStaggerThresholdDamage
`public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)`

**用途 / Purpose:** 处理 `calculate stagger threshold damage` 相关逻辑。

### CalculateAlternativeAttackDamage
`public abstract float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)`

**用途 / Purpose:** 处理 `calculate alternative attack damage` 相关逻辑。

### CalculatePassiveAttackDamage
`public abstract float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)`

**用途 / Purpose:** 处理 `calculate passive attack damage` 相关逻辑。

### DecidePassiveAttackCollisionReaction
`public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)`

**用途 / Purpose:** 处理 `decide passive attack collision reaction` 相关逻辑。

### DecideWeaponCollisionReaction
`public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)`

**用途 / Purpose:** 处理 `decide weapon collision reaction` 相关逻辑。

### CalculateShieldDamage
`public abstract float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)`

**用途 / Purpose:** 处理 `calculate shield damage` 相关逻辑。

### CalculateSailFireDamage
`public abstract float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)`

**用途 / Purpose:** 处理 `calculate sail fire damage` 相关逻辑。

### CalculateHullFireDamage
`public abstract float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)`

**用途 / Purpose:** 处理 `calculate hull fire damage` 相关逻辑。

### GetDamageMultiplierForBodyPart
`public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)`

**用途 / Purpose:** 获取 `damage multiplier for body part` 的当前值。

### CanWeaponIgnoreFriendlyFireChecks
`public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

**用途 / Purpose:** 判断当前对象是否可以执行 `weapon ignore friendly fire checks`。

### CanWeaponDealSneakAttack
`public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)`

**用途 / Purpose:** 判断当前对象是否可以执行 `weapon deal sneak attack`。

### CanWeaponDismount
`public abstract bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 判断当前对象是否可以执行 `weapon dismount`。

### CanWeaponKnockback
`public abstract bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 判断当前对象是否可以执行 `weapon knockback`。

### CanWeaponKnockDown
`public abstract bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 判断当前对象是否可以执行 `weapon knock down`。

### DecideCrushedThrough
`public abstract bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsageHit)`

**用途 / Purpose:** 处理 `decide crushed through` 相关逻辑。

### CalculateRemainingMomentum
`public abstract float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)`

**用途 / Purpose:** 处理 `calculate remaining momentum` 相关逻辑。

### DecideAgentShrugOffBlow
`public abstract bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)`

**用途 / Purpose:** 处理 `decide agent shrug off blow` 相关逻辑。

### DecideAgentDismountedByBlow
`public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理 `decide agent dismounted by blow` 相关逻辑。

### DecideAgentKnockedBackByBlow
`public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理 `decide agent knocked back by blow` 相关逻辑。

### DecideAgentKnockedDownByBlow
`public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理 `decide agent knocked down by blow` 相关逻辑。

### DecideMountRearedByBlow
`public abstract bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)`

**用途 / Purpose:** 处理 `decide mount reared by blow` 相关逻辑。

### ShouldMissilePassThroughAfterShieldBreak
`public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)`

**用途 / Purpose:** 处理 `should missile pass through after shield break` 相关逻辑。

### GetDismountPenetration
`public abstract float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 获取 `dismount penetration` 的当前值。

### GetKnockBackPenetration
`public abstract float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 获取 `knock back penetration` 的当前值。

### GetKnockDownPenetration
`public abstract float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)`

**用途 / Purpose:** 获取 `knock down penetration` 的当前值。

### GetHorseChargePenetration
`public abstract float GetHorseChargePenetration()`

**用途 / Purpose:** 获取 `horse charge penetration` 的当前值。

## 使用示例

```csharp
var implementation = new CustomAgentApplyDamageModel();
```

## 参见

- [完整类目录](../catalog)