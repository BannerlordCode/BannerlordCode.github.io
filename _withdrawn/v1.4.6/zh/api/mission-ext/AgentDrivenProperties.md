---
title: "AgentDrivenProperties"
description: "AgentDrivenProperties：TaleWorlds.MountAndBlade 的 public 类；公开成员 100 个（方法 2、属性 97、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/AgentDrivenProperties.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgentDrivenProperties

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentDrivenProperties`
**File:** `TaleWorlds.MountAndBlade/AgentDrivenProperties.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

AgentDrivenProperties 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/AgentDrivenProperties.cs。它是一个 public 类，继承链为 AgentDrivenProperties。public/protected 成员共 100 个：2 方法、97 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgentDrivenProperties 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 AgentDrivenProperties。成员构成以属性为主（属性 97/100，方法 2/100），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/AgentDrivenProperties.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentDrivenProperties` | `public AgentDrivenProperties()` | 构造函数 |
| `GetStat` | `public float GetStat(DrivenProperty propertyEnum)` | 方法 |
| `SetStat` | `public void SetStat(DrivenProperty propertyEnum, float value)` | 方法 |
| `SwingSpeedMultiplier` | `public float SwingSpeedMultiplier` | 属性 |
| `ThrustOrRangedReadySpeedMultiplier` | `public float ThrustOrRangedReadySpeedMultiplier` | 属性 |
| `HandlingMultiplier` | `public float HandlingMultiplier` | 属性 |
| `ReloadSpeed` | `public float ReloadSpeed` | 属性 |
| `MissileSpeedMultiplier` | `public float MissileSpeedMultiplier` | 属性 |
| `WeaponInaccuracy` | `public float WeaponInaccuracy` | 属性 |
| `WeaponMaxMovementAccuracyPenalty` | `public float WeaponMaxMovementAccuracyPenalty` | 属性 |
| `WeaponMaxUnsteadyAccuracyPenalty` | `public float WeaponMaxUnsteadyAccuracyPenalty` | 属性 |
| `WeaponBestAccuracyWaitTime` | `public float WeaponBestAccuracyWaitTime` | 属性 |
| `WeaponUnsteadyBeginTime` | `public float WeaponUnsteadyBeginTime` | 属性 |
| `WeaponUnsteadyEndTime` | `public float WeaponUnsteadyEndTime` | 属性 |
| `WeaponRotationalAccuracyPenaltyInRadians` | `public float WeaponRotationalAccuracyPenaltyInRadians` | 属性 |
| `WeaponExternalAccelerationAccuracyPenalty` | `public float WeaponExternalAccelerationAccuracyPenalty` | 属性 |
| `ArmorEncumbrance` | `public float ArmorEncumbrance` | 属性 |
| `DamageMultiplierBonus` | `public float DamageMultiplierBonus` | 属性 |
| `ThrowingWeaponDamageMultiplierBonus` | `public float ThrowingWeaponDamageMultiplierBonus` | 属性 |
| `MeleeWeaponDamageMultiplierBonus` | `public float MeleeWeaponDamageMultiplierBonus` | 属性 |
| `ArmorPenetrationMultiplierCrossbow` | `public float ArmorPenetrationMultiplierCrossbow` | 属性 |
| `ArmorPenetrationMultiplierBow` | `public float ArmorPenetrationMultiplierBow` | 属性 |
| `WeaponsEncumbrance` | `public float WeaponsEncumbrance` | 属性 |
| `ArmorHead` | `public float ArmorHead` | 属性 |
| `ArmorTorso` | `public float ArmorTorso` | 属性 |
| `ArmorLegs` | `public float ArmorLegs` | 属性 |
| `ArmorArms` | `public float ArmorArms` | 属性 |
| `AttributeRiding` | `public float AttributeRiding` | 属性 |
| `AttributeShield` | `public float AttributeShield` | 属性 |
| `AttributeShieldMissileCollisionBodySizeAdder` | `public float AttributeShieldMissileCollisionBodySizeAdder` | 属性 |
| `ShieldBashStunDurationMultiplier` | `public float ShieldBashStunDurationMultiplier` | 属性 |
| `KickStunDurationMultiplier` | `public float KickStunDurationMultiplier` | 属性 |
| `ReloadMovementPenaltyFactor` | `public float ReloadMovementPenaltyFactor` | 属性 |
| `TopSpeedReachDuration` | `public float TopSpeedReachDuration` | 属性 |
| `MaxSpeedMultiplier` | `public float MaxSpeedMultiplier` | 属性 |
| `CombatMaxSpeedMultiplier` | `public float CombatMaxSpeedMultiplier` | 属性 |
| `CrouchedSpeedMultiplier` | `public float CrouchedSpeedMultiplier` | 属性 |
| `AttributeHorseArchery` | `public float AttributeHorseArchery` | 属性 |
| `AttributeCourage` | `public float AttributeCourage` | 属性 |
| `MountManeuver` | `public float MountManeuver` | 属性 |
| `MountSpeed` | `public float MountSpeed` | 属性 |
| `MountDashAccelerationMultiplier` | `public float MountDashAccelerationMultiplier` | 属性 |
| `MountChargeDamage` | `public float MountChargeDamage` | 属性 |
| `MountDifficulty` | `public float MountDifficulty` | 属性 |
| `BipedalRangedReadySpeedMultiplier` | `public float BipedalRangedReadySpeedMultiplier` | 属性 |
| `BipedalRangedReloadSpeedMultiplier` | `public float BipedalRangedReloadSpeedMultiplier` | 属性 |
| `AiShooterErrorWoRangeUpdate` | `public float AiShooterErrorWoRangeUpdate` | 属性 |
| `AiRangedHorsebackMissileRange` | `public float AiRangedHorsebackMissileRange` | 属性 |
| `AiFacingMissileWatch` | `public float AiFacingMissileWatch` | 属性 |
| `AiFlyingMissileCheckRadius` | `public float AiFlyingMissileCheckRadius` | 属性 |
| `AiShootFreq` | `public float AiShootFreq` | 属性 |
| `AiWaitBeforeShootFactor` | `public float AiWaitBeforeShootFactor` | 属性 |
| `AIBlockOnDecideAbility` | `public float AIBlockOnDecideAbility` | 属性 |
| `AIParryOnDecideAbility` | `public float AIParryOnDecideAbility` | 属性 |
| `AiTryChamberAttackOnDecide` | `public float AiTryChamberAttackOnDecide` | 属性 |
| `AIAttackOnParryChance` | `public float AIAttackOnParryChance` | 属性 |
| `AiAttackOnParryTiming` | `public float AiAttackOnParryTiming` | 属性 |
| `AIDecideOnAttackChance` | `public float AIDecideOnAttackChance` | 属性 |
| `AIParryOnAttackAbility` | `public float AIParryOnAttackAbility` | 属性 |
| `AiKick` | `public float AiKick` | 属性 |
| `AiAttackCalculationMaxTimeFactor` | `public float AiAttackCalculationMaxTimeFactor` | 属性 |
| `AiDecideOnAttackWhenReceiveHitTiming` | `public float AiDecideOnAttackWhenReceiveHitTiming` | 属性 |
| `AiDecideOnAttackContinueAction` | `public float AiDecideOnAttackContinueAction` | 属性 |
| `AiDecideOnAttackingContinue` | `public float AiDecideOnAttackingContinue` | 属性 |
| `AIParryOnAttackingContinueAbility` | `public float AIParryOnAttackingContinueAbility` | 属性 |
| `AIDecideOnRealizeEnemyBlockingAttackAbility` | `public float AIDecideOnRealizeEnemyBlockingAttackAbility` | 属性 |
| `AIRealizeBlockingFromIncorrectSideAbility` | `public float AIRealizeBlockingFromIncorrectSideAbility` | 属性 |
| `AiAttackingShieldDefenseChance` | `public float AiAttackingShieldDefenseChance` | 属性 |
| `AiAttackingShieldDefenseTimer` | `public float AiAttackingShieldDefenseTimer` | 属性 |
| `AiCheckApplyMovementInterval` | `public float AiCheckApplyMovementInterval` | 属性 |
| `AiCheckCalculateMovementInterval` | `public float AiCheckCalculateMovementInterval` | 属性 |
| `AiCheckDecideSimpleBehaviorInterval` | `public float AiCheckDecideSimpleBehaviorInterval` | 属性 |
| `AiCheckDoSimpleBehaviorInterval` | `public float AiCheckDoSimpleBehaviorInterval` | 属性 |
| `AiMovementDelayFactor` | `public float AiMovementDelayFactor` | 属性 |
| `AiParryDecisionChangeValue` | `public float AiParryDecisionChangeValue` | 属性 |
| `AiDefendWithShieldDecisionChanceValue` | `public float AiDefendWithShieldDecisionChanceValue` | 属性 |
| `AiMoveEnemySideTimeValue` | `public float AiMoveEnemySideTimeValue` | 属性 |
| `AiMinimumDistanceToContinueFactor` | `public float AiMinimumDistanceToContinueFactor` | 属性 |
| `AiChargeHorsebackTargetDistFactor` | `public float AiChargeHorsebackTargetDistFactor` | 属性 |
| `AiRangerLeadErrorMin` | `public float AiRangerLeadErrorMin` | 属性 |
| `AiRangerLeadErrorMax` | `public float AiRangerLeadErrorMax` | 属性 |
| `AiRangerVerticalErrorMultiplier` | `public float AiRangerVerticalErrorMultiplier` | 属性 |
| `AiRangerHorizontalErrorMultiplier` | `public float AiRangerHorizontalErrorMultiplier` | 属性 |
| `AIAttackOnDecideChance` | `public float AIAttackOnDecideChance` | 属性 |
| `AiRaiseShieldDelayTimeBase` | `public float AiRaiseShieldDelayTimeBase` | 属性 |
| `AiUseShieldAgainstEnemyMissileProbability` | `public float AiUseShieldAgainstEnemyMissileProbability` | 属性 |
| `AiSpeciesIndex` | `public int AiSpeciesIndex` | 属性 |
| `AiRandomizedDefendDirectionChance` | `public float AiRandomizedDefendDirectionChance` | 属性 |
| `AiShooterError` | `public float AiShooterError` | 属性 |
| `AiWeaponFavorMultiplierMelee` | `public float AiWeaponFavorMultiplierMelee` | 属性 |
| `AiWeaponFavorMultiplierRanged` | `public float AiWeaponFavorMultiplierRanged` | 属性 |
| `AiWeaponFavorMultiplierPolearm` | `public float AiWeaponFavorMultiplierPolearm` | 属性 |
| `AISetNoAttackTimerAfterBeingHitAbility` | `public float AISetNoAttackTimerAfterBeingHitAbility` | 属性 |
| `AISetNoAttackTimerAfterBeingParriedAbility` | `public float AISetNoAttackTimerAfterBeingParriedAbility` | 属性 |
| `AISetNoDefendTimerAfterHittingAbility` | `public float AISetNoDefendTimerAfterHittingAbility` | 属性 |
| `AISetNoDefendTimerAfterParryingAbility` | `public float AISetNoDefendTimerAfterParryingAbility` | 属性 |
| `AIEstimateStunDurationPrecision` | `public float AIEstimateStunDurationPrecision` | 属性 |
| `AIHoldingReadyMaxDuration` | `public float AIHoldingReadyMaxDuration` | 属性 |
| `AIHoldingReadyVariationPercentage` | `public float AIHoldingReadyVariationPercentage` | 属性 |
| `OffhandWeaponDefendSpeedMultiplier` | `public float OffhandWeaponDefendSpeedMultiplier` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
