---
title: "SandboxAgentApplyDamageModel"
description: "SandboxAgentApplyDamageModel：SandBox 的 public 类，继承 AgentApplyDamageModel；公开成员 33 个（方法 33、属性 0、字段 0）。源文件 SandBox/GameComponents/SandboxAgentApplyDamageModel.cs。"
---
# SandboxAgentApplyDamageModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxAgentApplyDamageModel : AgentApplyDamageModel`
**File:** `SandBox/GameComponents/SandboxAgentApplyDamageModel.cs`

## 概述

SandboxAgentApplyDamageModel 位于 SandBox 模块，源文件 SandBox/GameComponents/SandboxAgentApplyDamageModel.cs。它是一个 public 类，实现/继承 AgentApplyDamageModel，继承链为 SandboxAgentApplyDamageModel → AgentApplyDamageModel。public/protected 成员共 33 个：33 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandboxAgentApplyDamageModel 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.GameComponents），继承链 SandboxAgentApplyDamageModel → AgentApplyDamageModel。成员构成以方法为主（方法 33/33，属性 0/33），对外主要以操作入口暴露。继承链上的 AgentApplyDamageModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/GameComponents/SandboxAgentApplyDamageModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDamageIgnored` | `public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)` | 方法 |
| `ApplyDamageAmplifications` | `public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `ApplyDamageScaling` | `public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `ApplyDamageReductions` | `public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `ApplyGeneralDamageModifiers` | `public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `DecideCrushedThrough` | `public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)` | 方法 |
| `DecideMissileWeaponFlags` | `public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)` | 方法 |
| `CanWeaponIgnoreFriendlyFireChecks` | `public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)` | 方法 |
| `CanWeaponDealSneakAttack` | `public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)` | 方法 |
| `CanWeaponDismount` | `public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `CalculateDefendedBlowStunMultipliers` | `public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)` | 方法 |
| `CanWeaponKnockback` | `public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `CanWeaponKnockDown` | `public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `GetDismountPenetration` | `public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `GetKnockBackPenetration` | `public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `GetKnockDownPenetration` | `public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `GetHorseChargePenetration` | `public override float GetHorseChargePenetration()` | 方法 |
| `CalculateStaggerThresholdDamage` | `public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)` | 方法 |
| `CalculateAlternativeAttackDamage` | `public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)` | 方法 |
| `CalculatePassiveAttackDamage` | `public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `DecidePassiveAttackCollisionReaction` | `public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)` | 方法 |
| `CalculateShieldDamage` | `public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)` | 方法 |
| `CalculateSailFireDamage` | `public override float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)` | 方法 |
| `CalculateHullFireDamage` | `public override float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)` | 方法 |
| `GetDamageMultiplierForBodyPart` | `public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)` | 方法 |
| `DecideAgentShrugOffBlow` | `public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)` | 方法 |
| `DecideAgentDismountedByBlow` | `public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 方法 |
| `DecideAgentKnockedBackByBlow` | `public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 方法 |
| `DecideAgentKnockedDownByBlow` | `public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 方法 |
| `DecideMountRearedByBlow` | `public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 方法 |
| `DecideWeaponCollisionReaction` | `public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)` | 方法 |
| `ShouldMissilePassThroughAfterShieldBreak` | `public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)` | 方法 |
| `CalculateRemainingMomentum` | `public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)` | 方法 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [同命名空间 SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel)
- [同命名空间 SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
- [同命名空间 SandboxApplyWeatherEffectsModel](../SandboxApplyWeatherEffectsModel)
