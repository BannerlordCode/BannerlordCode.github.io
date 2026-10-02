---
title: "CustomAgentApplyDamageModel"
description: "CustomAgentApplyDamageModel: a public class in TaleWorlds.MountAndBlade, inheriting AgentApplyDamageModel; 33 exposed members (33 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/CustomAgentApplyDamageModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomAgentApplyDamageModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomAgentApplyDamageModel : AgentApplyDamageModel`
**File:** `TaleWorlds.MountAndBlade/CustomAgentApplyDamageModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CustomAgentApplyDamageModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/CustomAgentApplyDamageModel.cs. It is a public class, implementing/inheriting AgentApplyDamageModel; the inheritance chain is CustomAgentApplyDamageModel → AgentApplyDamageModel → MBGameModel → GameModel. It exposes 33 public/protected members: 33 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomAgentApplyDamageModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain CustomAgentApplyDamageModel → AgentApplyDamageModel → MBGameModel → GameModel. The surface is method-led (methods 33/33, properties 0/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/CustomAgentApplyDamageModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsDamageIgnored` | `public override bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData)` | method |
| `ApplyDamageAmplifications` | `public override float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `ApplyDamageScaling` | `public override float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `ApplyDamageReductions` | `public override float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `ApplyGeneralDamageModifiers` | `public override float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `DecideMissileWeaponFlags` | `public override void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags)` | method |
| `DecideCrushedThrough` | `public override bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsage)` | method |
| `CanWeaponDealSneakAttack` | `public override bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon)` | method |
| `CanWeaponDismount` | `public override bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `CalculateDefendedBlowStunMultipliers` | `public override void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod)` | method |
| `CanWeaponKnockback` | `public override bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `CanWeaponKnockDown` | `public override bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData)` | method |
| `GetDismountPenetration` | `public override float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `GetKnockBackPenetration` | `public override float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `GetKnockDownPenetration` | `public override float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `GetHorseChargePenetration` | `public override float GetHorseChargePenetration()` | method |
| `CalculateStaggerThresholdDamage` | `public override float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow)` | method |
| `CalculateAlternativeAttackDamage` | `public override float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon)` | method |
| `CalculatePassiveAttackDamage` | `public override float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage)` | method |
| `DecidePassiveAttackCollisionReaction` | `public override MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit)` | method |
| `CalculateShieldDamage` | `public override float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage)` | method |
| `CalculateSailFireDamage` | `public override float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine)` | method |
| `CalculateHullFireDamage` | `public override float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin)` | method |
| `GetDamageMultiplierForBodyPart` | `public override float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile)` | method |
| `CanWeaponIgnoreFriendlyFireChecks` | `public override bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon)` | method |
| `DecideAgentShrugOffBlow` | `public override bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow)` | method |
| `DecideAgentDismountedByBlow` | `public override bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideAgentKnockedBackByBlow` | `public override bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideAgentKnockedDownByBlow` | `public override bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideMountRearedByBlow` | `public override bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow)` | method |
| `DecideWeaponCollisionReaction` | `public override void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction)` | method |
| `ShouldMissilePassThroughAfterShieldBreak` | `public override bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon)` | method |
| `CalculateRemainingMomentum` | `public override float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgentApplyDamageModel](../AgentApplyDamageModel/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
