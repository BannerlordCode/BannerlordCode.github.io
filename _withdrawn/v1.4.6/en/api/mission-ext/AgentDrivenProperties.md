---
title: "AgentDrivenProperties"
description: "AgentDrivenProperties: a public class in TaleWorlds.MountAndBlade; 100 exposed members (2 methods, 97 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/AgentDrivenProperties.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentDrivenProperties

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentDrivenProperties`
**File:** `TaleWorlds.MountAndBlade/AgentDrivenProperties.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AgentDrivenProperties lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/AgentDrivenProperties.cs. It is a public class; the inheritance chain is AgentDrivenProperties. It exposes 100 public/protected members: 2 methods, 97 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentDrivenProperties lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain AgentDrivenProperties. The surface is property-led (properties 97/100, methods 2/100), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/AgentDrivenProperties.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AgentDrivenProperties` | `public AgentDrivenProperties()` | constructor |
| `GetStat` | `public float GetStat(DrivenProperty propertyEnum)` | method |
| `SetStat` | `public void SetStat(DrivenProperty propertyEnum, float value)` | method |
| `SwingSpeedMultiplier` | `public float SwingSpeedMultiplier` | property |
| `ThrustOrRangedReadySpeedMultiplier` | `public float ThrustOrRangedReadySpeedMultiplier` | property |
| `HandlingMultiplier` | `public float HandlingMultiplier` | property |
| `ReloadSpeed` | `public float ReloadSpeed` | property |
| `MissileSpeedMultiplier` | `public float MissileSpeedMultiplier` | property |
| `WeaponInaccuracy` | `public float WeaponInaccuracy` | property |
| `WeaponMaxMovementAccuracyPenalty` | `public float WeaponMaxMovementAccuracyPenalty` | property |
| `WeaponMaxUnsteadyAccuracyPenalty` | `public float WeaponMaxUnsteadyAccuracyPenalty` | property |
| `WeaponBestAccuracyWaitTime` | `public float WeaponBestAccuracyWaitTime` | property |
| `WeaponUnsteadyBeginTime` | `public float WeaponUnsteadyBeginTime` | property |
| `WeaponUnsteadyEndTime` | `public float WeaponUnsteadyEndTime` | property |
| `WeaponRotationalAccuracyPenaltyInRadians` | `public float WeaponRotationalAccuracyPenaltyInRadians` | property |
| `WeaponExternalAccelerationAccuracyPenalty` | `public float WeaponExternalAccelerationAccuracyPenalty` | property |
| `ArmorEncumbrance` | `public float ArmorEncumbrance` | property |
| `DamageMultiplierBonus` | `public float DamageMultiplierBonus` | property |
| `ThrowingWeaponDamageMultiplierBonus` | `public float ThrowingWeaponDamageMultiplierBonus` | property |
| `MeleeWeaponDamageMultiplierBonus` | `public float MeleeWeaponDamageMultiplierBonus` | property |
| `ArmorPenetrationMultiplierCrossbow` | `public float ArmorPenetrationMultiplierCrossbow` | property |
| `ArmorPenetrationMultiplierBow` | `public float ArmorPenetrationMultiplierBow` | property |
| `WeaponsEncumbrance` | `public float WeaponsEncumbrance` | property |
| `ArmorHead` | `public float ArmorHead` | property |
| `ArmorTorso` | `public float ArmorTorso` | property |
| `ArmorLegs` | `public float ArmorLegs` | property |
| `ArmorArms` | `public float ArmorArms` | property |
| `AttributeRiding` | `public float AttributeRiding` | property |
| `AttributeShield` | `public float AttributeShield` | property |
| `AttributeShieldMissileCollisionBodySizeAdder` | `public float AttributeShieldMissileCollisionBodySizeAdder` | property |
| `ShieldBashStunDurationMultiplier` | `public float ShieldBashStunDurationMultiplier` | property |
| `KickStunDurationMultiplier` | `public float KickStunDurationMultiplier` | property |
| `ReloadMovementPenaltyFactor` | `public float ReloadMovementPenaltyFactor` | property |
| `TopSpeedReachDuration` | `public float TopSpeedReachDuration` | property |
| `MaxSpeedMultiplier` | `public float MaxSpeedMultiplier` | property |
| `CombatMaxSpeedMultiplier` | `public float CombatMaxSpeedMultiplier` | property |
| `CrouchedSpeedMultiplier` | `public float CrouchedSpeedMultiplier` | property |
| `AttributeHorseArchery` | `public float AttributeHorseArchery` | property |
| `AttributeCourage` | `public float AttributeCourage` | property |
| `MountManeuver` | `public float MountManeuver` | property |
| `MountSpeed` | `public float MountSpeed` | property |
| `MountDashAccelerationMultiplier` | `public float MountDashAccelerationMultiplier` | property |
| `MountChargeDamage` | `public float MountChargeDamage` | property |
| `MountDifficulty` | `public float MountDifficulty` | property |
| `BipedalRangedReadySpeedMultiplier` | `public float BipedalRangedReadySpeedMultiplier` | property |
| `BipedalRangedReloadSpeedMultiplier` | `public float BipedalRangedReloadSpeedMultiplier` | property |
| `AiShooterErrorWoRangeUpdate` | `public float AiShooterErrorWoRangeUpdate` | property |
| `AiRangedHorsebackMissileRange` | `public float AiRangedHorsebackMissileRange` | property |
| `AiFacingMissileWatch` | `public float AiFacingMissileWatch` | property |
| `AiFlyingMissileCheckRadius` | `public float AiFlyingMissileCheckRadius` | property |
| `AiShootFreq` | `public float AiShootFreq` | property |
| `AiWaitBeforeShootFactor` | `public float AiWaitBeforeShootFactor` | property |
| `AIBlockOnDecideAbility` | `public float AIBlockOnDecideAbility` | property |
| `AIParryOnDecideAbility` | `public float AIParryOnDecideAbility` | property |
| `AiTryChamberAttackOnDecide` | `public float AiTryChamberAttackOnDecide` | property |
| `AIAttackOnParryChance` | `public float AIAttackOnParryChance` | property |
| `AiAttackOnParryTiming` | `public float AiAttackOnParryTiming` | property |
| `AIDecideOnAttackChance` | `public float AIDecideOnAttackChance` | property |
| `AIParryOnAttackAbility` | `public float AIParryOnAttackAbility` | property |
| `AiKick` | `public float AiKick` | property |
| `AiAttackCalculationMaxTimeFactor` | `public float AiAttackCalculationMaxTimeFactor` | property |
| `AiDecideOnAttackWhenReceiveHitTiming` | `public float AiDecideOnAttackWhenReceiveHitTiming` | property |
| `AiDecideOnAttackContinueAction` | `public float AiDecideOnAttackContinueAction` | property |
| `AiDecideOnAttackingContinue` | `public float AiDecideOnAttackingContinue` | property |
| `AIParryOnAttackingContinueAbility` | `public float AIParryOnAttackingContinueAbility` | property |
| `AIDecideOnRealizeEnemyBlockingAttackAbility` | `public float AIDecideOnRealizeEnemyBlockingAttackAbility` | property |
| `AIRealizeBlockingFromIncorrectSideAbility` | `public float AIRealizeBlockingFromIncorrectSideAbility` | property |
| `AiAttackingShieldDefenseChance` | `public float AiAttackingShieldDefenseChance` | property |
| `AiAttackingShieldDefenseTimer` | `public float AiAttackingShieldDefenseTimer` | property |
| `AiCheckApplyMovementInterval` | `public float AiCheckApplyMovementInterval` | property |
| `AiCheckCalculateMovementInterval` | `public float AiCheckCalculateMovementInterval` | property |
| `AiCheckDecideSimpleBehaviorInterval` | `public float AiCheckDecideSimpleBehaviorInterval` | property |
| `AiCheckDoSimpleBehaviorInterval` | `public float AiCheckDoSimpleBehaviorInterval` | property |
| `AiMovementDelayFactor` | `public float AiMovementDelayFactor` | property |
| `AiParryDecisionChangeValue` | `public float AiParryDecisionChangeValue` | property |
| `AiDefendWithShieldDecisionChanceValue` | `public float AiDefendWithShieldDecisionChanceValue` | property |
| `AiMoveEnemySideTimeValue` | `public float AiMoveEnemySideTimeValue` | property |
| `AiMinimumDistanceToContinueFactor` | `public float AiMinimumDistanceToContinueFactor` | property |
| `AiChargeHorsebackTargetDistFactor` | `public float AiChargeHorsebackTargetDistFactor` | property |
| `AiRangerLeadErrorMin` | `public float AiRangerLeadErrorMin` | property |
| `AiRangerLeadErrorMax` | `public float AiRangerLeadErrorMax` | property |
| `AiRangerVerticalErrorMultiplier` | `public float AiRangerVerticalErrorMultiplier` | property |
| `AiRangerHorizontalErrorMultiplier` | `public float AiRangerHorizontalErrorMultiplier` | property |
| `AIAttackOnDecideChance` | `public float AIAttackOnDecideChance` | property |
| `AiRaiseShieldDelayTimeBase` | `public float AiRaiseShieldDelayTimeBase` | property |
| `AiUseShieldAgainstEnemyMissileProbability` | `public float AiUseShieldAgainstEnemyMissileProbability` | property |
| `AiSpeciesIndex` | `public int AiSpeciesIndex` | property |
| `AiRandomizedDefendDirectionChance` | `public float AiRandomizedDefendDirectionChance` | property |
| `AiShooterError` | `public float AiShooterError` | property |
| `AiWeaponFavorMultiplierMelee` | `public float AiWeaponFavorMultiplierMelee` | property |
| `AiWeaponFavorMultiplierRanged` | `public float AiWeaponFavorMultiplierRanged` | property |
| `AiWeaponFavorMultiplierPolearm` | `public float AiWeaponFavorMultiplierPolearm` | property |
| `AISetNoAttackTimerAfterBeingHitAbility` | `public float AISetNoAttackTimerAfterBeingHitAbility` | property |
| `AISetNoAttackTimerAfterBeingParriedAbility` | `public float AISetNoAttackTimerAfterBeingParriedAbility` | property |
| `AISetNoDefendTimerAfterHittingAbility` | `public float AISetNoDefendTimerAfterHittingAbility` | property |
| `AISetNoDefendTimerAfterParryingAbility` | `public float AISetNoDefendTimerAfterParryingAbility` | property |
| `AIEstimateStunDurationPrecision` | `public float AIEstimateStunDurationPrecision` | property |
| `AIHoldingReadyMaxDuration` | `public float AIHoldingReadyMaxDuration` | property |
| `AIHoldingReadyVariationPercentage` | `public float AIHoldingReadyVariationPercentage` | property |
| `OffhandWeaponDefendSpeedMultiplier` | `public float OffhandWeaponDefendSpeedMultiplier` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
