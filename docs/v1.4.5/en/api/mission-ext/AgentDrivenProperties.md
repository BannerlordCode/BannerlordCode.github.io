<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentDrivenProperties`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentDrivenProperties

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentDrivenProperties`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentDrivenProperties.cs`

## Overview

`AgentDrivenProperties` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SwingSpeedMultiplier` | `public float SwingSpeedMultiplier { get; set; }` |
| `ThrustOrRangedReadySpeedMultiplier` | `public float ThrustOrRangedReadySpeedMultiplier { get; set; }` |
| `HandlingMultiplier` | `public float HandlingMultiplier { get; set; }` |
| `ReloadSpeed` | `public float ReloadSpeed { get; set; }` |
| `MissileSpeedMultiplier` | `public float MissileSpeedMultiplier { get; set; }` |
| `WeaponInaccuracy` | `public float WeaponInaccuracy { get; set; }` |
| `WeaponMaxMovementAccuracyPenalty` | `public float WeaponMaxMovementAccuracyPenalty { get; set; }` |
| `WeaponMaxUnsteadyAccuracyPenalty` | `public float WeaponMaxUnsteadyAccuracyPenalty { get; set; }` |
| `WeaponBestAccuracyWaitTime` | `public float WeaponBestAccuracyWaitTime { get; set; }` |
| `WeaponUnsteadyBeginTime` | `public float WeaponUnsteadyBeginTime { get; set; }` |
| `WeaponUnsteadyEndTime` | `public float WeaponUnsteadyEndTime { get; set; }` |
| `WeaponRotationalAccuracyPenaltyInRadians` | `public float WeaponRotationalAccuracyPenaltyInRadians { get; set; }` |
| `WeaponExternalAccelerationAccuracyPenalty` | `public float WeaponExternalAccelerationAccuracyPenalty { get; set; }` |
| `ArmorEncumbrance` | `public float ArmorEncumbrance { get; set; }` |
| `DamageMultiplierBonus` | `public float DamageMultiplierBonus { get; set; }` |
| `ThrowingWeaponDamageMultiplierBonus` | `public float ThrowingWeaponDamageMultiplierBonus { get; set; }` |
| `MeleeWeaponDamageMultiplierBonus` | `public float MeleeWeaponDamageMultiplierBonus { get; set; }` |
| `ArmorPenetrationMultiplierCrossbow` | `public float ArmorPenetrationMultiplierCrossbow { get; set; }` |
| `ArmorPenetrationMultiplierBow` | `public float ArmorPenetrationMultiplierBow { get; set; }` |
| `WeaponsEncumbrance` | `public float WeaponsEncumbrance { get; set; }` |
| `ArmorHead` | `public float ArmorHead { get; set; }` |
| `ArmorTorso` | `public float ArmorTorso { get; set; }` |
| `ArmorLegs` | `public float ArmorLegs { get; set; }` |
| `ArmorArms` | `public float ArmorArms { get; set; }` |
| `AttributeRiding` | `public float AttributeRiding { get; set; }` |
| `AttributeShield` | `public float AttributeShield { get; set; }` |
| `AttributeShieldMissileCollisionBodySizeAdder` | `public float AttributeShieldMissileCollisionBodySizeAdder { get; set; }` |
| `ShieldBashStunDurationMultiplier` | `public float ShieldBashStunDurationMultiplier { get; set; }` |
| `KickStunDurationMultiplier` | `public float KickStunDurationMultiplier { get; set; }` |
| `ReloadMovementPenaltyFactor` | `public float ReloadMovementPenaltyFactor { get; set; }` |
| `TopSpeedReachDuration` | `public float TopSpeedReachDuration { get; set; }` |
| `MaxSpeedMultiplier` | `public float MaxSpeedMultiplier { get; set; }` |
| `CombatMaxSpeedMultiplier` | `public float CombatMaxSpeedMultiplier { get; set; }` |
| `CrouchedSpeedMultiplier` | `public float CrouchedSpeedMultiplier { get; set; }` |
| `AttributeHorseArchery` | `public float AttributeHorseArchery { get; set; }` |
| `AttributeCourage` | `public float AttributeCourage { get; set; }` |
| `MountManeuver` | `public float MountManeuver { get; set; }` |
| `MountSpeed` | `public float MountSpeed { get; set; }` |
| `MountDashAccelerationMultiplier` | `public float MountDashAccelerationMultiplier { get; set; }` |
| `MountChargeDamage` | `public float MountChargeDamage { get; set; }` |
| `MountDifficulty` | `public float MountDifficulty { get; set; }` |
| `BipedalRangedReadySpeedMultiplier` | `public float BipedalRangedReadySpeedMultiplier { get; set; }` |
| `BipedalRangedReloadSpeedMultiplier` | `public float BipedalRangedReloadSpeedMultiplier { get; set; }` |
| `AiShooterErrorWoRangeUpdate` | `public float AiShooterErrorWoRangeUpdate { get; set; }` |
| `AiRangedHorsebackMissileRange` | `public float AiRangedHorsebackMissileRange { get; set; }` |
| `AiFacingMissileWatch` | `public float AiFacingMissileWatch { get; set; }` |
| `AiFlyingMissileCheckRadius` | `public float AiFlyingMissileCheckRadius { get; set; }` |
| `AiShootFreq` | `public float AiShootFreq { get; set; }` |
| `AiWaitBeforeShootFactor` | `public float AiWaitBeforeShootFactor { get; set; }` |
| `AIBlockOnDecideAbility` | `public float AIBlockOnDecideAbility { get; set; }` |
| `AIParryOnDecideAbility` | `public float AIParryOnDecideAbility { get; set; }` |
| `AiTryChamberAttackOnDecide` | `public float AiTryChamberAttackOnDecide { get; set; }` |
| `AIAttackOnParryChance` | `public float AIAttackOnParryChance { get; set; }` |
| `AiAttackOnParryTiming` | `public float AiAttackOnParryTiming { get; set; }` |
| `AIDecideOnAttackChance` | `public float AIDecideOnAttackChance { get; set; }` |
| `AIParryOnAttackAbility` | `public float AIParryOnAttackAbility { get; set; }` |
| `AiKick` | `public float AiKick { get; set; }` |
| `AiAttackCalculationMaxTimeFactor` | `public float AiAttackCalculationMaxTimeFactor { get; set; }` |
| `AiDecideOnAttackWhenReceiveHitTiming` | `public float AiDecideOnAttackWhenReceiveHitTiming { get; set; }` |
| `AiDecideOnAttackContinueAction` | `public float AiDecideOnAttackContinueAction { get; set; }` |
| `AiDecideOnAttackingContinue` | `public float AiDecideOnAttackingContinue { get; set; }` |
| `AIParryOnAttackingContinueAbility` | `public float AIParryOnAttackingContinueAbility { get; set; }` |
| `AIDecideOnRealizeEnemyBlockingAttackAbility` | `public float AIDecideOnRealizeEnemyBlockingAttackAbility { get; set; }` |
| `AIRealizeBlockingFromIncorrectSideAbility` | `public float AIRealizeBlockingFromIncorrectSideAbility { get; set; }` |
| `AiAttackingShieldDefenseChance` | `public float AiAttackingShieldDefenseChance { get; set; }` |
| `AiAttackingShieldDefenseTimer` | `public float AiAttackingShieldDefenseTimer { get; set; }` |
| `AiCheckApplyMovementInterval` | `public float AiCheckApplyMovementInterval { get; set; }` |
| `AiCheckCalculateMovementInterval` | `public float AiCheckCalculateMovementInterval { get; set; }` |
| `AiCheckDecideSimpleBehaviorInterval` | `public float AiCheckDecideSimpleBehaviorInterval { get; set; }` |
| `AiCheckDoSimpleBehaviorInterval` | `public float AiCheckDoSimpleBehaviorInterval { get; set; }` |
| `AiMovementDelayFactor` | `public float AiMovementDelayFactor { get; set; }` |
| `AiParryDecisionChangeValue` | `public float AiParryDecisionChangeValue { get; set; }` |
| `AiDefendWithShieldDecisionChanceValue` | `public float AiDefendWithShieldDecisionChanceValue { get; set; }` |
| `AiMoveEnemySideTimeValue` | `public float AiMoveEnemySideTimeValue { get; set; }` |
| `AiMinimumDistanceToContinueFactor` | `public float AiMinimumDistanceToContinueFactor { get; set; }` |
| `AiChargeHorsebackTargetDistFactor` | `public float AiChargeHorsebackTargetDistFactor { get; set; }` |
| `AiRangerLeadErrorMin` | `public float AiRangerLeadErrorMin { get; set; }` |
| `AiRangerLeadErrorMax` | `public float AiRangerLeadErrorMax { get; set; }` |
| `AiRangerVerticalErrorMultiplier` | `public float AiRangerVerticalErrorMultiplier { get; set; }` |
| `AiRangerHorizontalErrorMultiplier` | `public float AiRangerHorizontalErrorMultiplier { get; set; }` |
| `AIAttackOnDecideChance` | `public float AIAttackOnDecideChance { get; set; }` |
| `AiRaiseShieldDelayTimeBase` | `public float AiRaiseShieldDelayTimeBase { get; set; }` |
| `AiUseShieldAgainstEnemyMissileProbability` | `public float AiUseShieldAgainstEnemyMissileProbability { get; set; }` |
| `AiSpeciesIndex` | `public int AiSpeciesIndex { get; set; }` |
| `AiRandomizedDefendDirectionChance` | `public float AiRandomizedDefendDirectionChance { get; set; }` |
| `AiShooterError` | `public float AiShooterError { get; set; }` |
| `AiWeaponFavorMultiplierMelee` | `public float AiWeaponFavorMultiplierMelee { get; set; }` |
| `AiWeaponFavorMultiplierRanged` | `public float AiWeaponFavorMultiplierRanged { get; set; }` |
| `AiWeaponFavorMultiplierPolearm` | `public float AiWeaponFavorMultiplierPolearm { get; set; }` |
| `AISetNoAttackTimerAfterBeingHitAbility` | `public float AISetNoAttackTimerAfterBeingHitAbility { get; set; }` |
| `AISetNoAttackTimerAfterBeingParriedAbility` | `public float AISetNoAttackTimerAfterBeingParriedAbility { get; set; }` |
| `AISetNoDefendTimerAfterHittingAbility` | `public float AISetNoDefendTimerAfterHittingAbility { get; set; }` |
| `AISetNoDefendTimerAfterParryingAbility` | `public float AISetNoDefendTimerAfterParryingAbility { get; set; }` |
| `AIEstimateStunDurationPrecision` | `public float AIEstimateStunDurationPrecision { get; set; }` |
| `AIHoldingReadyMaxDuration` | `public float AIHoldingReadyMaxDuration { get; set; }` |
| `AIHoldingReadyVariationPercentage` | `public float AIHoldingReadyVariationPercentage { get; set; }` |
| `OffhandWeaponDefendSpeedMultiplier` | `public float OffhandWeaponDefendSpeedMultiplier { get; set; }` |

## Key Methods

### GetStat
`public float GetStat(DrivenProperty propertyEnum)`

**Purpose:** Gets the current value of `stat`.

### SetStat
`public void SetStat(DrivenProperty propertyEnum, float value)`

**Purpose:** Sets the value or state of `stat`.

## Usage Example

```csharp
var value = new AgentDrivenProperties();
value.GetStat(propertyEnum);
```

## See Also

- [Complete Class Catalog](../catalog)