---
title: "AgentApplyDamageModel"
description: "AgentApplyDamageModel：TaleWorlds.MountAndBlade.ComponentInterfaces 的 public 类，继承 MBGameModel<AgentApplyDamageModel>；公开成员 35 个（方法 35、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentApplyDamageModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AgentApplyDamageModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<AgentApplyDamageModel>，继承链为 AgentApplyDamageModel → MBGameModel → GameModel。public/protected 成员共 35 个：35 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentApplyDamageModel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.ComponentInterfaces`，继承链 AgentApplyDamageModel → MBGameModel → GameModel。成员构成以方法为主（方法 35/35，属性 0/35），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateDamage` | `public float CalculateDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | 方法 |
| `IsDamageIgnored` | `public abstract bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData);` | 方法 |
| `ApplyDamageAmplifications` | `public abstract float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage);` | 方法 |
| `ApplyDamageScaling` | `public abstract float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage);` | 方法 |
| `ApplyDamageReductions` | `public abstract float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage);` | 方法 |
| `ApplyGeneralDamageModifiers` | `public abstract float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage);` | 方法 |
| `DecideMissileWeaponFlags` | `public abstract void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags);` | 方法 |
| `CalculateDefendedBlowStunMultipliers` | `public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod);` | 方法 |
| `CalculateStaggerThresholdDamage` | `public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow);` | 方法 |
| `CalculateAlternativeAttackDamage` | `public abstract float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon);` | 方法 |
| `CalculatePassiveAttackDamage` | `public abstract float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage);` | 方法 |
| `DecidePassiveAttackCollisionReaction` | `public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit);` | 方法 |
| `DecideWeaponCollisionReaction` | `public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction);` | 方法 |
| `CalculateShieldDamage` | `public abstract float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage);` | 方法 |
| `CalculateSailFireDamage` | `public abstract float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine);` | 方法 |
| `CalculateHullFireDamage` | `public abstract float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin);` | 方法 |
| `GetDamageMultiplierForBodyPart` | `public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile);` | 方法 |
| `CanWeaponIgnoreFriendlyFireChecks` | `public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon);` | 方法 |
| `CanWeaponDealSneakAttack` | `public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon);` | 方法 |
| `CanWeaponDismount` | `public abstract bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | 方法 |
| `CanWeaponKnockback` | `public abstract bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | 方法 |
| `CanWeaponKnockDown` | `public abstract bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | 方法 |
| `DecideCrushedThrough` | `public abstract bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsageHit);` | 方法 |
| `CalculateRemainingMomentum` | `public abstract float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough);` | 方法 |
| `CalculateDefaultRemainingMomentum` | `protected float CalculateDefaultRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)` | 方法 |
| `DecideAgentShrugOffBlow` | `public abstract bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow);` | 方法 |
| `DecideAgentDismountedByBlow` | `public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow);` | 方法 |
| `DecideAgentKnockedBackByBlow` | `public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow);` | 方法 |
| `DecideAgentKnockedDownByBlow` | `public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow);` | 方法 |
| `DecideMountRearedByBlow` | `public abstract bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow);` | 方法 |
| `ShouldMissilePassThroughAfterShieldBreak` | `public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon);` | 方法 |
| `GetDismountPenetration` | `public abstract float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | 方法 |
| `GetKnockBackPenetration` | `public abstract float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | 方法 |
| `GetKnockDownPenetration` | `public abstract float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | 方法 |
| `GetHorseChargePenetration` | `public abstract float GetHorseChargePenetration();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [同命名空间 ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [同命名空间 AutoBlockModel](../AutoBlockModel/)
- [同命名空间 BattleBannerBearersModel](../BattleBannerBearersModel/)
