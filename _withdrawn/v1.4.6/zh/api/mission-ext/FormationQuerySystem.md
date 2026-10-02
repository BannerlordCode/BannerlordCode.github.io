---
title: "FormationQuerySystem"
description: "FormationQuerySystem：TaleWorlds.MountAndBlade 的 public 类；公开成员 98 个（方法 5、属性 92、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/FormationQuerySystem.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FormationQuerySystem

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FormationQuerySystem`
**File:** `TaleWorlds.MountAndBlade/FormationQuerySystem.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

FormationQuerySystem 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/FormationQuerySystem.cs。它是一个 public 类，继承链为 FormationQuerySystem。public/protected 成员共 98 个：5 方法、92 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FormationQuerySystem 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 FormationQuerySystem。成员构成以属性为主（属性 92/98，方法 5/98），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/FormationQuerySystem.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Team` | `public TeamQuerySystem Team` | 属性 |
| `FormationPower` | `public float FormationPower` | 属性 |
| `FormationPowerReadOnly` | `public float FormationPowerReadOnly` | 属性 |
| `FormationMeleeFightingPower` | `public float FormationMeleeFightingPower` | 属性 |
| `FormationMeleeFightingPowerReadOnly` | `public float FormationMeleeFightingPowerReadOnly` | 属性 |
| `EstimatedDirection` | `public Vec2 EstimatedDirection` | 属性 |
| `EstimatedDirectionReadOnly` | `public Vec2 EstimatedDirectionReadOnly` | 属性 |
| `EstimatedInterval` | `public float EstimatedInterval` | 属性 |
| `EstimatedIntervalReadOnly` | `public float EstimatedIntervalReadOnly` | 属性 |
| `AverageAllyPosition` | `public Vec2 AverageAllyPosition` | 属性 |
| `AverageAllyPositionReadOnly` | `public Vec2 AverageAllyPositionReadOnly` | 属性 |
| `IdealAverageDisplacement` | `public float IdealAverageDisplacement` | 属性 |
| `IdealAverageDisplacementReadOnly` | `public float IdealAverageDisplacementReadOnly` | 属性 |
| `MBList` | `public MBList<Agent>LocalAllyUnits` | 属性 |
| `MBList` | `public MBList<Agent>LocalAllyUnitsReadOnly` | 属性 |
| `MBList` | `public MBList<Agent>LocalEnemyUnits` | 属性 |
| `MBList` | `public MBList<Agent>LocalEnemyUnitsReadOnly` | 属性 |
| `MainClass` | `public FormationClass MainClass` | 属性 |
| `MainClassReadOnly` | `public FormationClass MainClassReadOnly` | 属性 |
| `InfantryUnitRatio` | `public float InfantryUnitRatio` | 属性 |
| `InfantryUnitRatioReadOnly` | `public float InfantryUnitRatioReadOnly` | 属性 |
| `HasShieldUnitRatio` | `public float HasShieldUnitRatio` | 属性 |
| `HasShieldUnitRatioReadOnly` | `public float HasShieldUnitRatioReadOnly` | 属性 |
| `HasThrowingUnitRatio` | `public float HasThrowingUnitRatio` | 属性 |
| `HasThrowingUnitRatioReadOnly` | `public float HasThrowingUnitRatioReadOnly` | 属性 |
| `RangedUnitRatio` | `public float RangedUnitRatio` | 属性 |
| `RangedUnitRatioReadOnly` | `public float RangedUnitRatioReadOnly` | 属性 |
| `InsideCastleUnitCountIncludingUnpositioned` | `public int InsideCastleUnitCountIncludingUnpositioned` | 属性 |
| `InsideCastleUnitCountIncludingUnpositionedReadOnly` | `public int InsideCastleUnitCountIncludingUnpositionedReadOnly` | 属性 |
| `InsideCastleUnitCountPositioned` | `public int InsideCastleUnitCountPositioned` | 属性 |
| `InsideCastleUnitCountPositionedReadOnly` | `public int InsideCastleUnitCountPositionedReadOnly` | 属性 |
| `CavalryUnitRatio` | `public float CavalryUnitRatio` | 属性 |
| `CavalryUnitRatioReadOnly` | `public float CavalryUnitRatioReadOnly` | 属性 |
| `RangedCavalryUnitRatio` | `public float RangedCavalryUnitRatio` | 属性 |
| `RangedCavalryUnitRatioReadOnly` | `public float RangedCavalryUnitRatioReadOnly` | 属性 |
| `IsMeleeFormation` | `public bool IsMeleeFormation` | 属性 |
| `IsMeleeFormationReadOnly` | `public bool IsMeleeFormationReadOnly` | 属性 |
| `IsInfantryFormation` | `public bool IsInfantryFormation` | 属性 |
| `IsInfantryFormationReadOnly` | `public bool IsInfantryFormationReadOnly` | 属性 |
| `HasShield` | `public bool HasShield` | 属性 |
| `HasShieldReadOnly` | `public bool HasShieldReadOnly` | 属性 |
| `HasThrowing` | `public bool HasThrowing` | 属性 |
| `HasThrowingReadOnly` | `public bool HasThrowingReadOnly` | 属性 |
| `IsRangedFormation` | `public bool IsRangedFormation` | 属性 |
| `IsRangedFormationReadOnly` | `public bool IsRangedFormationReadOnly` | 属性 |
| `IsCavalryFormation` | `public bool IsCavalryFormation` | 属性 |
| `IsCavalryFormationReadOnly` | `public bool IsCavalryFormationReadOnly` | 属性 |
| `IsRangedCavalryFormation` | `public bool IsRangedCavalryFormation` | 属性 |
| `IsRangedCavalryFormationReadOnly` | `public bool IsRangedCavalryFormationReadOnly` | 属性 |
| `MovementSpeedMaximum` | `public float MovementSpeedMaximum` | 属性 |
| `MovementSpeedMaximumReadOnly` | `public float MovementSpeedMaximumReadOnly` | 属性 |
| `MaximumMissileRange` | `public float MaximumMissileRange` | 属性 |
| `MaximumMissileRangeReadOnly` | `public float MaximumMissileRangeReadOnly` | 属性 |
| `MissileRangeAdjusted` | `public float MissileRangeAdjusted` | 属性 |
| `MissileRangeAdjustedReadOnly` | `public float MissileRangeAdjustedReadOnly` | 属性 |
| `LocalInfantryUnitRatio` | `public float LocalInfantryUnitRatio` | 属性 |
| `LocalInfantryUnitRatioReadOnly` | `public float LocalInfantryUnitRatioReadOnly` | 属性 |
| `LocalRangedUnitRatio` | `public float LocalRangedUnitRatio` | 属性 |
| `LocalRangedUnitRatioReadOnly` | `public float LocalRangedUnitRatioReadOnly` | 属性 |
| `LocalCavalryUnitRatio` | `public float LocalCavalryUnitRatio` | 属性 |
| `LocalCavalryUnitRatioReadOnly` | `public float LocalCavalryUnitRatioReadOnly` | 属性 |
| `LocalRangedCavalryUnitRatio` | `public float LocalRangedCavalryUnitRatio` | 属性 |
| `LocalRangedCavalryUnitRatioReadOnly` | `public float LocalRangedCavalryUnitRatioReadOnly` | 属性 |
| `LocalAllyPower` | `public float LocalAllyPower` | 属性 |
| `LocalAllyPowerReadOnly` | `public float LocalAllyPowerReadOnly` | 属性 |
| `LocalEnemyPower` | `public float LocalEnemyPower` | 属性 |
| `LocalEnemyPowerReadOnly` | `public float LocalEnemyPowerReadOnly` | 属性 |
| `LocalPowerRatio` | `public float LocalPowerRatio` | 属性 |
| `LocalPowerRatioReadOnly` | `public float LocalPowerRatioReadOnly` | 属性 |
| `CasualtyRatio` | `public float CasualtyRatio` | 属性 |
| `CasualtyRatioReadOnly` | `public float CasualtyRatioReadOnly` | 属性 |
| `IsUnderRangedAttack` | `public bool IsUnderRangedAttack` | 属性 |
| `IsUnderRangedAttackReadOnly` | `public bool IsUnderRangedAttackReadOnly` | 属性 |
| `UnderRangedAttackRatio` | `public float UnderRangedAttackRatio` | 属性 |
| `UnderRangedAttackRatioReadOnly` | `public float UnderRangedAttackRatioReadOnly` | 属性 |
| `MakingRangedAttackRatio` | `public float MakingRangedAttackRatio` | 属性 |
| `MakingRangedAttackRatioReadOnly` | `public float MakingRangedAttackRatioReadOnly` | 属性 |
| `MainFormation` | `public Formation MainFormation` | 属性 |
| `MainFormationReadOnly` | `public Formation MainFormationReadOnly` | 属性 |
| `MainFormationReliabilityFactor` | `public float MainFormationReliabilityFactor` | 属性 |
| `MainFormationReliabilityFactorReadOnly` | `public float MainFormationReliabilityFactorReadOnly` | 属性 |
| `WeightedAverageEnemyPosition` | `public Vec2 WeightedAverageEnemyPosition` | 属性 |
| `WeightedAverageEnemyPositionReadOnly` | `public Vec2 WeightedAverageEnemyPositionReadOnly` | 属性 |
| `ClosestEnemyAgent` | `public Agent ClosestEnemyAgent` | 属性 |
| `ClosestEnemyAgentReadOnly` | `public Agent ClosestEnemyAgentReadOnly` | 属性 |
| `ClosestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormation` | 属性 |
| `ClosestSignificantlyLargeEnemyFormationReadOnly` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormationReadOnly` | 属性 |
| `FastestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormation` | 属性 |
| `FastestSignificantlyLargeEnemyFormationReadOnly` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormationReadOnly` | 属性 |
| `HighGroundCloseToForeseenBattleGround` | `public Vec2 HighGroundCloseToForeseenBattleGround` | 属性 |
| `HighGroundCloseToForeseenBattleGroundReadOnly` | `public Vec2 HighGroundCloseToForeseenBattleGroundReadOnly` | 属性 |
| `IsUnderCavalryChargeFromFront` | `public bool IsUnderCavalryChargeFromFront` | 属性 |
| `FormationQuerySystem` | `public FormationQuerySystem(Formation formation)` | 构造函数 |
| `EvaluateAllPreliminaryQueryData` | `public void EvaluateAllPreliminaryQueryData()` | 方法 |
| `ForceExpireCavalryUnitRatio` | `public void ForceExpireCavalryUnitRatio()` | 方法 |
| `Expire` | `public void Expire()` | 方法 |
| `ExpireAfterUnitAddRemove` | `public void ExpireAfterUnitAddRemove()` | 方法 |
| `GetClassWeightedFactor` | `public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
