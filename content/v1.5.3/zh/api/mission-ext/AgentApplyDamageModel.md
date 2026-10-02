---
title: "AgentApplyDamageModel"
description: "AgentApplyDamageModel 的自动生成类参考。"
---
# AgentApplyDamageModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel> `
**Base:** MBGameModel<AgentApplyDamageModel>
**Source:** TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs

## 概述

`AgentApplyDamageModel` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateDamage
`public float CalculateDamage(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage) `

### IsDamageIgnored
`public abstract bool IsDamageIgnored(in AttackInformation attackInformation,in AttackCollisionData collisionData)`

### ApplyDamageAmplifications
`public abstract float ApplyDamageAmplifications(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### ApplyDamageScaling
`public abstract float ApplyDamageScaling(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### ApplyDamageReductions
`public abstract float ApplyDamageReductions(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### ApplyGeneralDamageModifiers
`public abstract float ApplyGeneralDamageModifiers(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### DecideMissileWeaponFlags
`public abstract void DecideMissileWeaponFlags(Agent attackerAgent,in MissionWeapon missileWeapon,ref WeaponFlags missileWeaponFlags)`

### CalculateDefendedBlowStunMultipliers
`public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent,Agent defenderAgent,CombatCollisionResult collisionResult,WeaponComponentData attackerWeapon,WeaponComponentData defenderWeapon,ref float attackerStunPeriod,ref float defenderStunPeriod)`

### CalculateStaggerThresholdDamage
`public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent,in Blow blow)`

### CalculateAlternativeAttackDamage
`public abstract float CalculateAlternativeAttackDamage(in AttackInformation attackInformation,in AttackCollisionData collisionData,WeaponComponentData weapon)`

### CalculatePassiveAttackDamage
`public abstract float CalculatePassiveAttackDamage(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### DecidePassiveAttackCollisionReaction
`public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker,Agent defender,bool isFatalHit)`

### DecideWeaponCollisionReaction
`public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow,in AttackCollisionData collisionData,Agent attacker,Agent defender,in MissionWeapon attackerWeapon,bool isFatalHit,bool isShruggedOff,float momentumRemaining,out MeleeCollisionReaction colReaction)`

### CalculateShieldDamage
`public abstract float CalculateShieldDamage(in AttackInformation attackInformation,float baseDamage)`

### CalculateSailFireDamage
`public abstract float CalculateSailFireDamage(Agent attackerAgent,IShipOrigin shipOrigin,float baseDamage,bool damageFromShipMachine)`

### CalculateHullFireDamage
`public abstract float CalculateHullFireDamage(float baseFireDamage,IShipOrigin shipOrigin)`

### GetDamageMultiplierForBodyPart
`public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart,DamageTypes type,bool isHuman,bool isMissile)`

### CanWeaponIgnoreFriendlyFireChecks
`public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

### CanWeaponDealSneakAttack
`public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation,WeaponComponentData weapon)`

### CanWeaponDismount
`public abstract bool CanWeaponDismount(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### CanWeaponKnockback
`public abstract bool CanWeaponKnockback(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### CanWeaponKnockDown
`public abstract bool CanWeaponKnockDown(Agent attackerAgent,Agent victimAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### DecideCrushedThrough
`public abstract bool DecideCrushedThrough(Agent attackerAgent,Agent defenderAgent,float totalAttackEnergy,Agent.UsageDirection attackDirection,StrikeType strikeType,WeaponComponentData defendItem,bool isPassiveUsageHit)`

### CalculateRemainingMomentum
`public abstract float CalculateRemainingMomentum(float originalMomentum,in Blow b,in AttackCollisionData collisionData,Agent attacker,Agent victim,in MissionWeapon attackerWeapon,bool isCrushThrough)`

### CalculateDefaultRemainingMomentum
`protected float CalculateDefaultRemainingMomentum(float originalMomentum,in Blow b,in AttackCollisionData collisionData,Agent attacker,Agent victim,in MissionWeapon attackerWeapon,bool isCrushThrough) `

### DecideAgentShrugOffBlow
`public abstract bool DecideAgentShrugOffBlow(Agent victimAgent,in AttackCollisionData collisionData,in Blow blow)`

### DecideAgentDismountedByBlow
`public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow)`

### DecideAgentKnockedBackByBlow
`public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow)`

### DecideAgentKnockedDownByBlow
`public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow)`

### DecideMountRearedByBlow
`public abstract bool DecideMountRearedByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow)`

### ShouldMissilePassThroughAfterShieldBreak
`public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent,WeaponComponentData attackerWeapon)`

### GetDismountPenetration
`public abstract float GetDismountPenetration(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### GetKnockBackPenetration
`public abstract float GetKnockBackPenetration(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### GetKnockDownPenetration
`public abstract float GetKnockDownPenetration(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### GetHorseChargePenetration
`public abstract float GetHorseChargePenetration()`

## 参见

- [本区域目录](../)
- [API 参考](../../)
