---
title: "AgentDrivenProperties"
description: "AgentDrivenProperties 的自动生成类参考。"
---
# AgentDrivenProperties

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentDrivenProperties`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentDrivenProperties.cs`

## 概述

`AgentDrivenProperties` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### GetStat
`public float GetStat(DrivenProperty propertyEnum)`

**用途 / Purpose:** 读取并返回当前对象中 stat 的结果。

```csharp
// 先通过子系统 API 拿到 AgentDrivenProperties 实例
AgentDrivenProperties agentDrivenProperties = ...;
var result = agentDrivenProperties.GetStat(propertyEnum);
```

### SetStat
`public void SetStat(DrivenProperty propertyEnum, float value)`

**用途 / Purpose:** 为 stat 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 AgentDrivenProperties 实例
AgentDrivenProperties agentDrivenProperties = ...;
agentDrivenProperties.SetStat(propertyEnum, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AgentDrivenProperties agentDrivenProperties = ...;
agentDrivenProperties.GetStat(propertyEnum);
```

## 参见

- [本区域目录](../)