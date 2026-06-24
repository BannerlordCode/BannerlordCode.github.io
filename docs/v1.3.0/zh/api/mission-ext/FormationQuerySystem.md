<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationQuerySystem`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FormationQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationQuerySystem`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/FormationQuerySystem.cs`

## 概述

`FormationQuerySystem` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### EvaluateAllPreliminaryQueryData
`public void EvaluateAllPreliminaryQueryData()`

**用途 / Purpose:** 处理 `evaluate all preliminary query data` 相关逻辑。

### ForceExpireCavalryUnitRatio
`public void ForceExpireCavalryUnitRatio()`

**用途 / Purpose:** 处理 `force expire cavalry unit ratio` 相关逻辑。

### Expire
`public void Expire()`

**用途 / Purpose:** 处理 `expire` 相关逻辑。

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**用途 / Purpose:** 处理 `expire after unit add remove` 相关逻辑。

### GetClassWeightedFactor
`public float GetClassWeightedFactor(float infantryWeight, float rangedWeight, float cavalryWeight, float rangedCavalryWeight)`

**用途 / Purpose:** 获取 `class weighted factor` 的当前值。

## 使用示例

```csharp
var value = new FormationQuerySystem();
value.EvaluateAllPreliminaryQueryData();
```

## 参见

- [完整类目录](../catalog)