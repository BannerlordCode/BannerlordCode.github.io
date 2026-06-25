---
title: "FormationQuerySystem"
description: "Auto-generated class reference for FormationQuerySystem."
---
# FormationQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationQuerySystem`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/FormationQuerySystem.cs`

## Overview

`FormationQuerySystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Team` | `public TeamQuerySystem Team { get; }` |
| `FormationPower` | `public float FormationPower { get; }` |
| `FormationPowerReadOnly` | `public float FormationPowerReadOnly { get; }` |
| `FormationMeleeFightingPower` | `public float FormationMeleeFightingPower { get; }` |
| `FormationMeleeFightingPowerReadOnly` | `public float FormationMeleeFightingPowerReadOnly { get; }` |
| `EstimatedDirection` | `public Vec2 EstimatedDirection { get; }` |
| `EstimatedDirectionReadOnly` | `public Vec2 EstimatedDirectionReadOnly { get; }` |
| `EstimatedInterval` | `public float EstimatedInterval { get; }` |
| `EstimatedIntervalReadOnly` | `public float EstimatedIntervalReadOnly { get; }` |
| `AverageAllyPosition` | `public Vec2 AverageAllyPosition { get; }` |
| `AverageAllyPositionReadOnly` | `public Vec2 AverageAllyPositionReadOnly { get; }` |
| `IdealAverageDisplacement` | `public float IdealAverageDisplacement { get; }` |
| `IdealAverageDisplacementReadOnly` | `public float IdealAverageDisplacementReadOnly { get; }` |
| `LocalAllyUnits` | `public MBList<Agent> LocalAllyUnits { get; }` |
| `LocalAllyUnitsReadOnly` | `public MBList<Agent> LocalAllyUnitsReadOnly { get; }` |
| `LocalEnemyUnits` | `public MBList<Agent> LocalEnemyUnits { get; }` |
| `LocalEnemyUnitsReadOnly` | `public MBList<Agent> LocalEnemyUnitsReadOnly { get; }` |
| `MainClass` | `public FormationClass MainClass { get; }` |
| `MainClassReadOnly` | `public FormationClass MainClassReadOnly { get; }` |
| `InfantryUnitRatio` | `public float InfantryUnitRatio { get; }` |
| `InfantryUnitRatioReadOnly` | `public float InfantryUnitRatioReadOnly { get; }` |
| `HasShieldUnitRatio` | `public float HasShieldUnitRatio { get; }` |
| `HasShieldUnitRatioReadOnly` | `public float HasShieldUnitRatioReadOnly { get; }` |
| `HasThrowingUnitRatio` | `public float HasThrowingUnitRatio { get; }` |
| `HasThrowingUnitRatioReadOnly` | `public float HasThrowingUnitRatioReadOnly { get; }` |
| `RangedUnitRatio` | `public float RangedUnitRatio { get; }` |
| `RangedUnitRatioReadOnly` | `public float RangedUnitRatioReadOnly { get; }` |
| `InsideCastleUnitCountIncludingUnpositioned` | `public int InsideCastleUnitCountIncludingUnpositioned { get; }` |
| `InsideCastleUnitCountIncludingUnpositionedReadOnly` | `public int InsideCastleUnitCountIncludingUnpositionedReadOnly { get; }` |
| `InsideCastleUnitCountPositioned` | `public int InsideCastleUnitCountPositioned { get; }` |
| `InsideCastleUnitCountPositionedReadOnly` | `public int InsideCastleUnitCountPositionedReadOnly { get; }` |
| `CavalryUnitRatio` | `public float CavalryUnitRatio { get; }` |
| `CavalryUnitRatioReadOnly` | `public float CavalryUnitRatioReadOnly { get; }` |
| `RangedCavalryUnitRatio` | `public float RangedCavalryUnitRatio { get; }` |
| `RangedCavalryUnitRatioReadOnly` | `public float RangedCavalryUnitRatioReadOnly { get; }` |
| `IsMeleeFormation` | `public bool IsMeleeFormation { get; }` |
| `IsMeleeFormationReadOnly` | `public bool IsMeleeFormationReadOnly { get; }` |
| `IsInfantryFormation` | `public bool IsInfantryFormation { get; }` |
| `IsInfantryFormationReadOnly` | `public bool IsInfantryFormationReadOnly { get; }` |
| `HasShield` | `public bool HasShield { get; }` |
| `HasShieldReadOnly` | `public bool HasShieldReadOnly { get; }` |
| `HasThrowing` | `public bool HasThrowing { get; }` |
| `HasThrowingReadOnly` | `public bool HasThrowingReadOnly { get; }` |
| `IsRangedFormation` | `public bool IsRangedFormation { get; }` |
| `IsRangedFormationReadOnly` | `public bool IsRangedFormationReadOnly { get; }` |
| `IsCavalryFormation` | `public bool IsCavalryFormation { get; }` |
| `IsCavalryFormationReadOnly` | `public bool IsCavalryFormationReadOnly { get; }` |
| `IsRangedCavalryFormation` | `public bool IsRangedCavalryFormation { get; }` |
| `IsRangedCavalryFormationReadOnly` | `public bool IsRangedCavalryFormationReadOnly { get; }` |
| `MovementSpeedMaximum` | `public float MovementSpeedMaximum { get; }` |
| `MovementSpeedMaximumReadOnly` | `public float MovementSpeedMaximumReadOnly { get; }` |
| `MaximumMissileRange` | `public float MaximumMissileRange { get; }` |
| `MaximumMissileRangeReadOnly` | `public float MaximumMissileRangeReadOnly { get; }` |
| `MissileRangeAdjusted` | `public float MissileRangeAdjusted { get; }` |
| `MissileRangeAdjustedReadOnly` | `public float MissileRangeAdjustedReadOnly { get; }` |
| `LocalInfantryUnitRatio` | `public float LocalInfantryUnitRatio { get; }` |
| `LocalInfantryUnitRatioReadOnly` | `public float LocalInfantryUnitRatioReadOnly { get; }` |
| `LocalRangedUnitRatio` | `public float LocalRangedUnitRatio { get; }` |
| `LocalRangedUnitRatioReadOnly` | `public float LocalRangedUnitRatioReadOnly { get; }` |
| `LocalCavalryUnitRatio` | `public float LocalCavalryUnitRatio { get; }` |
| `LocalCavalryUnitRatioReadOnly` | `public float LocalCavalryUnitRatioReadOnly { get; }` |
| `LocalRangedCavalryUnitRatio` | `public float LocalRangedCavalryUnitRatio { get; }` |
| `LocalRangedCavalryUnitRatioReadOnly` | `public float LocalRangedCavalryUnitRatioReadOnly { get; }` |
| `LocalAllyPower` | `public float LocalAllyPower { get; }` |
| `LocalAllyPowerReadOnly` | `public float LocalAllyPowerReadOnly { get; }` |
| `LocalEnemyPower` | `public float LocalEnemyPower { get; }` |
| `LocalEnemyPowerReadOnly` | `public float LocalEnemyPowerReadOnly { get; }` |
| `LocalPowerRatio` | `public float LocalPowerRatio { get; }` |
| `LocalPowerRatioReadOnly` | `public float LocalPowerRatioReadOnly { get; }` |
| `CasualtyRatio` | `public float CasualtyRatio { get; }` |
| `CasualtyRatioReadOnly` | `public float CasualtyRatioReadOnly { get; }` |
| `IsUnderRangedAttack` | `public bool IsUnderRangedAttack { get; }` |
| `IsUnderRangedAttackReadOnly` | `public bool IsUnderRangedAttackReadOnly { get; }` |
| `UnderRangedAttackRatio` | `public float UnderRangedAttackRatio { get; }` |
| `UnderRangedAttackRatioReadOnly` | `public float UnderRangedAttackRatioReadOnly { get; }` |
| `MakingRangedAttackRatio` | `public float MakingRangedAttackRatio { get; }` |
| `MakingRangedAttackRatioReadOnly` | `public float MakingRangedAttackRatioReadOnly { get; }` |
| `MainFormation` | `public Formation MainFormation { get; }` |
| `MainFormationReadOnly` | `public Formation MainFormationReadOnly { get; }` |
| `MainFormationReliabilityFactor` | `public float MainFormationReliabilityFactor { get; }` |
| `MainFormationReliabilityFactorReadOnly` | `public float MainFormationReliabilityFactorReadOnly { get; }` |
| `WeightedAverageEnemyPosition` | `public Vec2 WeightedAverageEnemyPosition { get; }` |
| `WeightedAverageEnemyPositionReadOnly` | `public Vec2 WeightedAverageEnemyPositionReadOnly { get; }` |
| `ClosestEnemyAgent` | `public Agent ClosestEnemyAgent { get; }` |
| `ClosestEnemyAgentReadOnly` | `public Agent ClosestEnemyAgentReadOnly { get; }` |
| `ClosestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormation { get; }` |
| `ClosestSignificantlyLargeEnemyFormationReadOnly` | `public FormationQuerySystem ClosestSignificantlyLargeEnemyFormationReadOnly { get; }` |
| `FastestSignificantlyLargeEnemyFormation` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormation { get; }` |
| `FastestSignificantlyLargeEnemyFormationReadOnly` | `public FormationQuerySystem FastestSignificantlyLargeEnemyFormationReadOnly { get; }` |
| `HighGroundCloseToForeseenBattleGround` | `public Vec2 HighGroundCloseToForeseenBattleGround { get; }` |
| `HighGroundCloseToForeseenBattleGroundReadOnly` | `public Vec2 HighGroundCloseToForeseenBattleGroundReadOnly { get; }` |

## Key Methods

### EvaluateAllPreliminaryQueryData
`public void EvaluateAllPreliminaryQueryData()`

**Purpose:** **Purpose:** Executes the EvaluateAllPreliminaryQueryData logic.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.EvaluateAllPreliminaryQueryData();
```

### ForceExpireCavalryUnitRatio
`public void ForceExpireCavalryUnitRatio()`

**Purpose:** **Purpose:** Executes the ForceExpireCavalryUnitRatio logic.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.ForceExpireCavalryUnitRatio();
```

### Expire
`public void Expire()`

**Purpose:** **Purpose:** Executes the Expire logic.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.Expire();
```

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**Purpose:** **Purpose:** Executes the ExpireAfterUnitAddRemove logic.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.ExpireAfterUnitAddRemove();
```

### GetClassWeightedFactor
`public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)`

**Purpose:** **Purpose:** Reads and returns the class weighted factor value held by the this instance.

```csharp
// Obtain an instance of FormationQuerySystem from the subsystem API first
FormationQuerySystem formationQuerySystem = ...;
var result = formationQuerySystem.GetClassWeightedFactor(0, 0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationQuerySystem formationQuerySystem = ...;
formationQuerySystem.EvaluateAllPreliminaryQueryData();
```

## See Also

- [Area Index](../)