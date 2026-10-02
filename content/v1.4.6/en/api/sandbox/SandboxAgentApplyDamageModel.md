---
title: "SandboxAgentApplyDamageModel"
description: "SandboxAgentApplyDamageModel: a public class in SandBox, inheriting AgentApplyDamageModel; 33 exposed members (33 methods, 0 properties, 0 fields). Source: SandBox/GameComponents/SandboxAgentApplyDamageModel.cs."
---
# SandboxAgentApplyDamageModel

**Namespace:** `SandBox.GameComponents`
**Module:** `SandBox`
**Type:** `public class SandboxAgentApplyDamageModel : AgentApplyDamageModel`
**File:** `SandBox/GameComponents/SandboxAgentApplyDamageModel.cs`

## Overview

SandboxAgentApplyDamageModel lives in the SandBox module, source file SandBox/GameComponents/SandboxAgentApplyDamageModel.cs. It is a public class, implementing/inheriting AgentApplyDamageModel; the inheritance chain is SandboxAgentApplyDamageModel → AgentApplyDamageModel. It exposes 33 public/protected members: 33 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandboxAgentApplyDamageModel is a top-level type in SandBox, namespace differing from (SandBox.GameComponents) the module directory; inheritance chain SandboxAgentApplyDamageModel → AgentApplyDamageModel. The surface is method-led (methods 33/33, properties 0/33), so it mostly exposes operations. AgentApplyDamageModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/GameComponents/SandboxAgentApplyDamageModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsDamageIgnored` | `public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)` | method |
| `ApplyDamageAmplifications` | `public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `ApplyDamageScaling` | `public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `ApplyDamageReductions` | `public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `ApplyGeneralDamageModifiers` | `public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `DecideCrushedThrough` | `public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)` | method |
| `DecideMissileWeaponFlags` | `public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)` | method |
| `CanWeaponIgnoreFriendlyFireChecks` | `public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)` | method |
| `CanWeaponDealSneakAttack` | `public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)` | method |
| `CanWeaponDismount` | `public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `CalculateDefendedBlowStunMultipliers` | `public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)` | method |
| `CanWeaponKnockback` | `public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `CanWeaponKnockDown` | `public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `GetDismountPenetration` | `public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `GetKnockBackPenetration` | `public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `GetKnockDownPenetration` | `public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `GetHorseChargePenetration` | `public override float GetHorseChargePenetration()` | method |
| `CalculateStaggerThresholdDamage` | `public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)` | method |
| `CalculateAlternativeAttackDamage` | `public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)` | method |
| `CalculatePassiveAttackDamage` | `public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)` | method |
| `DecidePassiveAttackCollisionReaction` | `public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)` | method |
| `CalculateShieldDamage` | `public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)` | method |
| `CalculateSailFireDamage` | `public override float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)` | method |
| `CalculateHullFireDamage` | `public override float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)` | method |
| `GetDamageMultiplierForBodyPart` | `public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)` | method |
| `DecideAgentShrugOffBlow` | `public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)` | method |
| `DecideAgentDismountedByBlow` | `public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideAgentKnockedBackByBlow` | `public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideAgentKnockedDownByBlow` | `public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideMountRearedByBlow` | `public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideWeaponCollisionReaction` | `public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)` | method |
| `ShouldMissilePassThroughAfterShieldBreak` | `public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)` | method |
| `CalculateRemainingMomentum` | `public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace IMissionPlayerFollowerHandler](../IMissionPlayerFollowerHandler)
- [same namespace SandboxAgentDecideKilledOrUnconsciousModel](../SandboxAgentDecideKilledOrUnconsciousModel)
- [same namespace SandboxAgentStatCalculateModel](../SandboxAgentStatCalculateModel)
- [same namespace SandboxApplyWeatherEffectsModel](../SandboxApplyWeatherEffectsModel)
