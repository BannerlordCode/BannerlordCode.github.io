---
title: "MultiplayerAgentApplyDamageModel"
description: "MultiplayerAgentApplyDamageModel：TaleWorlds.MountAndBlade 的 public 类，继承 AgentApplyDamageModel；公开成员 33 个（方法 33、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MultiplayerAgentApplyDamageModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerAgentApplyDamageModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerAgentApplyDamageModel : AgentApplyDamageModel`
**File:** `TaleWorlds.MountAndBlade/MultiplayerAgentApplyDamageModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerAgentApplyDamageModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MultiplayerAgentApplyDamageModel.cs。它是一个 public 类，实现/继承 AgentApplyDamageModel，继承链为 MultiplayerAgentApplyDamageModel → AgentApplyDamageModel → MBGameModel → GameModel。public/protected 成员共 33 个：33 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerAgentApplyDamageModel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MultiplayerAgentApplyDamageModel → AgentApplyDamageModel → MBGameModel → GameModel。成员构成以方法为主（方法 33/33，属性 0/33），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MultiplayerAgentApplyDamageModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDamageIgnored` | `public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)` | 方法 |
| `ApplyDamageAmplifications` | `public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `ApplyDamageScaling` | `public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `ApplyDamageReductions` | `public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `ApplyGeneralDamageModifiers` | `public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `DecideMissileWeaponFlags` | `public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)` | 方法 |
| `DecideCrushedThrough` | `public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)` | 方法 |
| `CanWeaponDealSneakAttack` | `public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)` | 方法 |
| `CanWeaponDismount` | `public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `CalculateDefendedBlowStunMultipliers` | `public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)` | 方法 |
| `CanWeaponKnockback` | `public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `CanWeaponKnockDown` | `public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | 方法 |
| `GetDismountPenetration` | `public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 方法 |
| `GetKnockBackPenetration` | `public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 方法 |
| `GetKnockDownPenetration` | `public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | 方法 |
| `GetHorseChargePenetration` | `public override float GetHorseChargePenetration()` | 方法 |
| `CalculateStaggerThresholdDamage` | `public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)` | 方法 |
| `CalculateAlternativeAttackDamage` | `public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)` | 方法 |
| `CalculatePassiveAttackDamage` | `public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `DecidePassiveAttackCollisionReaction` | `public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)` | 方法 |
| `CalculateShieldDamage` | `public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)` | 方法 |
| `CalculateSailFireDamage` | `public override float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)` | 方法 |
| `CalculateHullFireDamage` | `public override float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)` | 方法 |
| `GetDamageMultiplierForBodyPart` | `public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)` | 方法 |
| `CanWeaponIgnoreFriendlyFireChecks` | `public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)` | 方法 |
| `DecideAgentShrugOffBlow` | `public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)` | 方法 |
| `DecideAgentDismountedByBlow` | `public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 方法 |
| `DecideAgentKnockedBackByBlow` | `public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 方法 |
| `DecideAgentKnockedDownByBlow` | `public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 方法 |
| `DecideMountRearedByBlow` | `public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | 方法 |
| `DecideWeaponCollisionReaction` | `public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)` | 方法 |
| `ShouldMissilePassThroughAfterShieldBreak` | `public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)` | 方法 |
| `CalculateRemainingMomentum` | `public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgentApplyDamageModel](../AgentApplyDamageModel/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
