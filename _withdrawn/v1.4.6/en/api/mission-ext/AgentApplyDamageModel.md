---
title: "AgentApplyDamageModel"
description: "AgentApplyDamageModel: a public class in TaleWorlds.MountAndBlade.ComponentInterfaces, inheriting MBGameModel<AgentApplyDamageModel>; 35 exposed members (35 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentApplyDamageModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AgentApplyDamageModel : MBGameModel<AgentApplyDamageModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentApplyDamageModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<AgentApplyDamageModel>; the inheritance chain is AgentApplyDamageModel → MBGameModel → GameModel. It exposes 35 public/protected members: 35 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentApplyDamageModel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.ComponentInterfaces`, inheritance chain AgentApplyDamageModel → MBGameModel → GameModel. The surface is method-led (methods 35/35, properties 0/35), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/AgentApplyDamageModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateDamage` | `public float CalculateDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage)` | method |
| `IsDamageIgnored` | `public abstract bool IsDamageIgnored(in AttackInformation attackInformation, in AttackCollisionData collisionData);` | method |
| `ApplyDamageAmplifications` | `public abstract float ApplyDamageAmplifications(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage);` | method |
| `ApplyDamageScaling` | `public abstract float ApplyDamageScaling(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage);` | method |
| `ApplyDamageReductions` | `public abstract float ApplyDamageReductions(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage);` | method |
| `ApplyGeneralDamageModifiers` | `public abstract float ApplyGeneralDamageModifiers(in AttackInformation attackInformation, in AttackCollisionData collisionData, float baseDamage);` | method |
| `DecideMissileWeaponFlags` | `public abstract void DecideMissileWeaponFlags(Agent attackerAgent, in MissionWeapon missileWeapon, ref WeaponFlags missileWeaponFlags);` | method |
| `CalculateDefendedBlowStunMultipliers` | `public abstract void CalculateDefendedBlowStunMultipliers(Agent attackerAgent, Agent defenderAgent, CombatCollisionResult collisionResult, WeaponComponentData attackerWeapon, WeaponComponentData defenderWeapon, ref float attackerStunPeriod, ref float defenderStunPeriod);` | method |
| `CalculateStaggerThresholdDamage` | `public abstract float CalculateStaggerThresholdDamage(Agent defenderAgent, in Blow blow);` | method |
| `CalculateAlternativeAttackDamage` | `public abstract float CalculateAlternativeAttackDamage(in AttackInformation attackInformation, in AttackCollisionData collisionData, WeaponComponentData weapon);` | method |
| `CalculatePassiveAttackDamage` | `public abstract float CalculatePassiveAttackDamage(BasicCharacterObject attackerCharacter, in AttackCollisionData collisionData, float baseDamage);` | method |
| `DecidePassiveAttackCollisionReaction` | `public abstract MeleeCollisionReaction DecidePassiveAttackCollisionReaction(Agent attacker, Agent defender, bool isFatalHit);` | method |
| `DecideWeaponCollisionReaction` | `public abstract void DecideWeaponCollisionReaction(in Blow registeredBlow, in AttackCollisionData collisionData, Agent attacker, Agent defender, in MissionWeapon attackerWeapon, bool isFatalHit, bool isShruggedOff, float momentumRemaining, out MeleeCollisionReaction colReaction);` | method |
| `CalculateShieldDamage` | `public abstract float CalculateShieldDamage(in AttackInformation attackInformation, float baseDamage);` | method |
| `CalculateSailFireDamage` | `public abstract float CalculateSailFireDamage(Agent attackerAgent, IShipOrigin shipOrigin, float baseDamage, bool damageFromShipMachine);` | method |
| `CalculateHullFireDamage` | `public abstract float CalculateHullFireDamage(float baseFireDamage, IShipOrigin shipOrigin);` | method |
| `GetDamageMultiplierForBodyPart` | `public abstract float GetDamageMultiplierForBodyPart(BoneBodyPartType bodyPart, DamageTypes type, bool isHuman, bool isMissile);` | method |
| `CanWeaponIgnoreFriendlyFireChecks` | `public abstract bool CanWeaponIgnoreFriendlyFireChecks(WeaponComponentData weapon);` | method |
| `CanWeaponDealSneakAttack` | `public abstract bool CanWeaponDealSneakAttack(in AttackInformation attackInformation, WeaponComponentData weapon);` | method |
| `CanWeaponDismount` | `public abstract bool CanWeaponDismount(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | method |
| `CanWeaponKnockback` | `public abstract bool CanWeaponKnockback(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | method |
| `CanWeaponKnockDown` | `public abstract bool CanWeaponKnockDown(Agent attackerAgent, Agent victimAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | method |
| `DecideCrushedThrough` | `public abstract bool DecideCrushedThrough(Agent attackerAgent, Agent defenderAgent, float totalAttackEnergy, Agent.UsageDirection attackDirection, StrikeType strikeType, WeaponComponentData defendItem, bool isPassiveUsageHit);` | method |
| `CalculateRemainingMomentum` | `public abstract float CalculateRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough);` | method |
| `CalculateDefaultRemainingMomentum` | `protected float CalculateDefaultRemainingMomentum(float originalMomentum, in Blow b, in AttackCollisionData collisionData, Agent attacker, Agent victim, in MissionWeapon attackerWeapon, bool isCrushThrough)` | method |
| `DecideAgentShrugOffBlow` | `public abstract bool DecideAgentShrugOffBlow(Agent victimAgent, in AttackCollisionData collisionData, in Blow blow);` | method |
| `DecideAgentDismountedByBlow` | `public abstract bool DecideAgentDismountedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow);` | method |
| `DecideAgentKnockedBackByBlow` | `public abstract bool DecideAgentKnockedBackByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow);` | method |
| `DecideAgentKnockedDownByBlow` | `public abstract bool DecideAgentKnockedDownByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow);` | method |
| `DecideMountRearedByBlow` | `public abstract bool DecideMountRearedByBlow(Agent attackerAgent, Agent victimAgent, in AttackCollisionData collisionData, WeaponComponentData attackerWeapon, in Blow blow);` | method |
| `ShouldMissilePassThroughAfterShieldBreak` | `public abstract bool ShouldMissilePassThroughAfterShieldBreak(Agent attackerAgent, WeaponComponentData attackerWeapon);` | method |
| `GetDismountPenetration` | `public abstract float GetDismountPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | method |
| `GetKnockBackPenetration` | `public abstract float GetKnockBackPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | method |
| `GetKnockDownPenetration` | `public abstract float GetKnockDownPenetration(Agent attackerAgent, WeaponComponentData attackerWeapon, in Blow blow, in AttackCollisionData collisionData);` | method |
| `GetHorseChargePenetration` | `public abstract float GetHorseChargePenetration();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [same namespace AutoBlockModel](../AutoBlockModel/)
- [same namespace BattleBannerBearersModel](../BattleBannerBearersModel/)
