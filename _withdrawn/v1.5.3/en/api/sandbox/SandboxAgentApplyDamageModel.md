---
title: "SandboxAgentApplyDamageModel"
description: "Auto-generated class reference for SandboxAgentApplyDamageModel."
---
# SandboxAgentApplyDamageModel

**Namespace:** SandBox.GameComponents
**Module:** SandBox
**Type:** `public class SandboxAgentApplyDamageModel : AgentApplyDamageModel `
**Base:** AgentApplyDamageModel
**Source:** SandBox/GameComponents/SandboxAgentApplyDamageModel.cs

## Overview

Auto-generated stub for `SandboxAgentApplyDamageModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### IsDamageIgnored
`public override bool IsDamageIgnored(in AttackInformation attackInformation,in AttackCollisionData collisionData)`

### ApplyDamageAmplifications
`public override float ApplyDamageAmplifications(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### ApplyDamageScaling
`public override float ApplyDamageScaling(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### ApplyDamageReductions
`public override float ApplyDamageReductions(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### ApplyGeneralDamageModifiers
`public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### DecideCrushedThrough
`public override bool DecideCrushedThrough(Agent attackerAgent,Agent defenderAgent,float totalAttackEnergy,Agent.UsageDirection attackDirection,StrikeType strikeType,WeaponComponentData defendItem,bool isPassiveUsage)`

### DecideMissileWeaponFlags
`public override void DecideMissileWeaponFlags(Agent attackerAgent,in MissionWeapon missileWeapon,ref WeaponFlags missileWeaponFlags)`

### CanWeaponIgnoreFriendlyFireChecks
`public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)`

### CanWeaponDealSneakAttack
`public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation,WeaponComponentData weapon)`

### CanWeaponDismount
`public override bool CanWeaponDismount(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### CalculateDefendedBlowStunMultipliers
`public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent,Agent defenderAgent,CombatCollisionResult collisionResult,WeaponComponentData attackerWeapon,WeaponComponentData defenderWeapon,ref float attackerStunPeriod,ref float defenderStunPeriod)`

### CanWeaponKnockback
`public override bool CanWeaponKnockback(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### CanWeaponKnockDown
`public override bool CanWeaponKnockDown(Agent attackerAgent,Agent victimAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### GetDismountPenetration
`public override float GetDismountPenetration(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### GetKnockBackPenetration
`public override float GetKnockBackPenetration(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### GetKnockDownPenetration
`public override float GetKnockDownPenetration(Agent attackerAgent,WeaponComponentData attackerWeapon,in Blow blow,in AttackCollisionData collisionData)`

### GetHorseChargePenetration
`public override float GetHorseChargePenetration()`

### CalculateStaggerThresholdDamage
`public override float CalculateStaggerThresholdDamage(Agent defenderAgent,in Blow blow)`

### CalculateAlternativeAttackDamage
`public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation,in AttackCollisionData collisionData,WeaponComponentData weapon)`

### CalculatePassiveAttackDamage
`public override float CalculatePassiveAttackDamage(in AttackInformation attackInformation,in AttackCollisionData collisionData,float baseDamage)`

### DecidePassiveAttackCollisionReaction
`public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker,Agent defender,bool isFatalHit)`

### CalculateShieldDamage
`public override float CalculateShieldDamage(in AttackInformation attackInformation,float baseDamage)`

### CalculateSailFireDamage
`public override float CalculateSailFireDamage(Agent attackerAgent,IShipOrigin shipOrigin,float baseDamage,bool damageFromShipMachine)`

### CalculateHullFireDamage
`public override float CalculateHullFireDamage(float baseFireDamage,IShipOrigin shipOrigin)`

### GetDamageMultiplierForBodyPart
`public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart,DamageTypes type,bool isHuman,bool isMissile)`

### DecideAgentShrugOffBlow
`public override bool DecideAgentShrugOffBlow(Agent victimAgent,in AttackCollisionData collisionData,in Blow blow)`

### DecideAgentDismountedByBlow
`public override bool DecideAgentDismountedByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow)`

### DecideAgentKnockedBackByBlow
`public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow)`

### DecideAgentKnockedDownByBlow
`public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow)`

### DecideMountRearedByBlow
`public override bool DecideMountRearedByBlow(Agent attackerAgent,Agent victimAgent,in AttackCollisionData collisionData,WeaponComponentData attackerWeapon,in Blow blow)`

### DecideWeaponCollisionReaction
`public override void DecideWeaponCollisionReaction(in Blow registeredBlow,in AttackCollisionData collisionData,Agent attacker,Agent defender,in MissionWeapon attackerWeapon,bool isFatalHit,bool isShruggedOff,float momentumRemaining,out MeleeCollisionReaction colReaction)`

### ShouldMissilePassThroughAfterShieldBreak
`public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent,WeaponComponentData attackerWeapon)`

### CalculateRemainingMomentum
`public override float CalculateRemainingMomentum(float originalMomentum,in Blow b,in AttackCollisionData collisionData,Agent attacker,Agent victim,in MissionWeapon attackerWeapon,bool isCrushThrough)`

## See Also

- [Section index](../)
