---
title: "FormationQuerySystem"
description: "FormationQuerySystem: a public class in TaleWorlds.MountAndBlade; 98 exposed members (5 methods, 92 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/FormationQuerySystem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FormationQuerySystem

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FormationQuerySystem`
**File:** `TaleWorlds.MountAndBlade/FormationQuerySystem.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FormationQuerySystem lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FormationQuerySystem.cs. It is a public class; the inheritance chain is FormationQuerySystem. It exposes 98 public/protected members: 5 methods, 92 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationQuerySystem lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain FormationQuerySystem. The surface is property-led (properties 92/98, methods 5/98), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FormationQuerySystem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Team` | `public TeamQuerySystem Team` | property |
| `FormationPower` | `public float FormationPower` | property |
| `FormationPowerReadOnly` | `public float FormationPowerReadOnly` | property |
| `FormationMeleeFightingPower` | `public float FormationMeleeFightingPower` | property |
| `FormationMeleeFightingPowerReadOnly` | `public float FormationMeleeFightingPowerReadOnly` | property |
| `EstimatedDirection` | `public Vec2 EstimatedDirection` | property |
| `EstimatedDirectionReadOnly` | `public Vec2 EstimatedDirectionReadOnly` | property |
| `EstimatedInterval` | `public float EstimatedInterval` | property |
| `EstimatedIntervalReadOnly` | `public float EstimatedIntervalReadOnly` | property |
| `AverageAllyPosition` | `public Vec2 AverageAllyPosition` | property |
| `AverageAllyPositionReadOnly` | `public Vec2 AverageAllyPositionReadOnly` | property |
| `IdealAverageDisplacement` | `public float IdealAverageDisplacement` | property |
| `IdealAverageDisplacementReadOnly` | `public float IdealAverageDisplacementReadOnly` | property |
| `MBList` | `public MBList<Agent>LocalAllyUnits` | property |
| `MBList` | `public MBList<Agent>LocalAllyUnitsReadOnly` | property |
| `MBList` | `public MBList<Agent>LocalEnemyUnits` | property |
| `MBList` | `public MBList<Agent>LocalEnemyUnitsReadOnly` | property |
| `MainClass` | `public FormationClass MainClass` | property |
| `MainClassReadOnly` | `public FormationClass MainClassReadOnly` | property |
| `InfantryUnitRatio` | `public float InfantryUnitRatio` | property |
| `InfantryUnitRatioReadOnly` | `public float InfantryUnitRatioReadOnly` | property |
| `HasShieldUnitRatio` | `public float HasShieldUnitRatio` | property |
| `HasShieldUnitRatioReadOnly` | `public float HasShieldUnitRatioReadOnly` | property |
| `HasThrowingUnitRatio` | `public float HasThrowingUnitRatio` | property |
| `HasThrowingUnitRatioReadOnly` | `public float HasThrowingUnitRatioReadOnly` | property |
| `RangedUnitRatio` | `public float RangedUnitRatio` | property |
| `RangedUnitRatioReadOnly` | `public float RangedUnitRatioReadOnly` | property |
| `InsideCastleUnitCountIncludingUnpositioned` | `public int InsideCastleUnitCountIncludingUnpositioned` | property |
| `InsideCastleUnitCountIncludingUnpositionedReadOnly` | `public int InsideCastleUnitCountIncludingUnpositionedReadOnly` | property |
| `InsideCastleUnitCountPositioned` | `public int InsideCastleUnitCountPositioned` | property |
| `InsideCastleUnitCountPositionedReadOnly` | `public int InsideCastleUnitCountPositionedReadOnly` | property |
| `CavalryUnitRatio` | `public float CavalryUnitRatio` | property |
| `CavalryUnitRatioReadOnly` | `public float CavalryUnitRatioReadOnly` | property |
| `RangedCavalryUnitRatio` | `public float RangedCavalryUnitRatio` | property |
| `RangedCavalryUnitRatioReadOnly` | `public float RangedCavalryUnitRatioReadOnly` | property |
| `IsMeleeFormation` | `public bool IsMeleeFormation` | property |
| `IsMeleeFormationReadOnly` | `public bool IsMeleeFormationReadOnly` | property |
| `IsInfantryFormation` | `public bool IsInfantryFormation` | property |
| `IsInfantryFormationReadOnly` | `public bool IsInfantryFormationReadOnly` | property |
| `HasShield` | `public bool HasShield` | property |
| `HasShieldReadOnly` | `public bool HasShieldReadOnly` | property |
| `HasThrowing` | `public bool HasThrowing` | property |
| `HasThrowingReadOnly` | `public bool HasThrowingReadOnly` | property |
| `IsRangedFormation` | `public bool IsRangedFormation` | property |
| `IsRangedFormationReadOnly` | `public bool IsRangedFormationReadOnly` | property |
| `IsCavalryFormation` | `public bool IsCavalryFormation` | property |
| `IsCavalryFormationReadOnly` | `public bool IsCavalryFormationReadOnly` | property |
| `IsRangedCavalryFormation` | `public bool IsRangedCavalryFormation` | property |
| `IsRangedCavalryFormationReadOnly` | `public bool IsRangedCavalryFormationReadOnly` | property |
| `MovementSpeedMaximum` | `public float MovementSpeedMaximum` | property |
| `MovementSpeedMaximumReadOnly` | `public float MovementSpeedMaximumReadOnly` | property |
| `MaximumMissileRange` | `public float MaximumMissileRange` | property |
| `MaximumMissileRangeReadOnly` | `public float MaximumMissileRangeReadOnly` | property |
| `MissileRangeAdjusted` | `public float MissileRangeAdjusted` | property |
| `MissileRangeAdjustedReadOnly` | `public float MissileRangeAdjustedReadOnly` | property |
| `LocalInfantryUnitRatio` | `public float LocalInfantryUnitRatio` | property |
| `LocalInfantryUnitRatioReadOnly` | `public float LocalInfantryUnitRatioReadOnly` | property |
| `LocalRangedUnitRatio` | `public float LocalRangedUnitRatio` | property |
| `LocalRangedUnitRatioReadOnly` | `public float LocalRangedUnitRatioReadOnly` | property |
| `LocalCavalryUnitRatio` | `public float LocalCavalryUnitRatio` | property |
| `LocalCavalryUnitRatioReadOnly` | `public float LocalCavalryUnitRatioReadOnly` | property |
| `LocalRangedCavalryUnitRatio` | `public float LocalRangedCavalryUnitRatio` | property |
| `LocalRangedCavalryUnitRatioReadOnly` | `public float LocalRangedCavalryUnitRatioReadOnly` | property |
| `LocalAllyPower` | `public float LocalAllyPower` | property |
| `LocalAllyPowerReadOnly` | `public float LocalAllyPowerReadOnly` | property |
| `LocalEnemyPower` | `public float LocalEnemyPower` | property |
| `LocalEnemyPowerReadOnly` | `public float LocalEnemyPowerReadOnly` | property |
| `LocalPowerRatio` | `public float LocalPowerRatio` | property |
| `LocalPowerRatioReadOnly` | `public float LocalPowerRatioReadOnly` | property |
| `CasualtyRatio` | `public float CasualtyRatio` | property |
| `CasualtyRatioReadOnly` | `public float CasualtyRatioReadOnly` | property |
| `IsUnderRangedAttack` | `public bool IsUnderRangedAttack` | property |
| `IsUnderRangedAttackReadOnly` | `public bool IsUnderRangedAttackReadOnly` | property |
| `UnderRangedAttackRatio` | `public float UnderRangedAttackRatio` | property |
| `UnderRangedAttackRatioReadOnly` | `public float UnderRangedAttackRatioReadOnly` | property |
| `MakingRangedAttackRatio` | `public float MakingRangedAttackRatio` | property |
| `MakingRangedAttackRatioReadOnly` | `public float MakingRangedAttackRatioReadOnly` | property |
| `MainFormation` | `public Formation MainFormation` | property |
| `MainFormationReadOnly` | `public Formation MainFormationReadOnly` | property |
| `MainFormationReliabilityFactor` | `public float MainFormationReliabilityFactor` | property |
| `MainFormationReliabilityFactorReadOnly` | `public float MainFormationReliabilityFactorReadOnly` | property |
| `WeightedAverageEnemyPosition` | `public Vec2 WeightedAverageEnemyPosition` | property |
| `WeightedAverageEnemyPositionReadOnly` | `public Vec2 WeightedAverageEnemyPositionReadOnly` | property |
| `ClosestEnemyAgent` | `public Agent ClosestEnemyAgent` | property |
| `ClosestEnemyAgentReadOnly` | `public Agent ClosestEnemyAgentReadOnly` | property |
| `ClosestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormation` | property |
| `ClosestSignificantlyLargeEnemyFormationReadOnly` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormationReadOnly` | property |
| `FastestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormation` | property |
| `FastestSignificantlyLargeEnemyFormationReadOnly` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormationReadOnly` | property |
| `HighGroundCloseToForeseenBattleGround` | `public Vec2 HighGroundCloseToForeseenBattleGround` | property |
| `HighGroundCloseToForeseenBattleGroundReadOnly` | `public Vec2 HighGroundCloseToForeseenBattleGroundReadOnly` | property |
| `IsUnderCavalryChargeFromFront` | `public bool IsUnderCavalryChargeFromFront` | property |
| `FormationQuerySystem` | `public FormationQuerySystem(Formation formation)` | constructor |
| `EvaluateAllPreliminaryQueryData` | `public void EvaluateAllPreliminaryQueryData()` | method |
| `ForceExpireCavalryUnitRatio` | `public void ForceExpireCavalryUnitRatio()` | method |
| `Expire` | `public void Expire()` | method |
| `ExpireAfterUnitAddRemove` | `public void ExpireAfterUnitAddRemove()` | method |
| `GetClassWeightedFactor` | `public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
