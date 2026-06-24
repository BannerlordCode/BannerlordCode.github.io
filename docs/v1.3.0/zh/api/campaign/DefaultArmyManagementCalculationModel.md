<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultArmyManagementCalculationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
**Base:** `ArmyManagementCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`

## 概述

`DefaultArmyManagementCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultArmyManagementCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AIMobilePartySizeRatioToCallToArmy` | `public override float AIMobilePartySizeRatioToCallToArmy { get; }` |
| `PlayerMobilePartySizeRatioToCallToArmy` | `public override float PlayerMobilePartySizeRatioToCallToArmy { get; }` |
| `MinimumNeededFoodInDaysToCallToArmy` | `public override float MinimumNeededFoodInDaysToCallToArmy { get; }` |
| `MaximumDistanceToCallToArmy` | `public override float MaximumDistanceToCallToArmy { get; }` |
| `InfluenceValuePerGold` | `public override int InfluenceValuePerGold { get; }` |
| `AverageCallToArmyCost` | `public override int AverageCallToArmyCost { get; }` |
| `CohesionThresholdForDispersion` | `public override int CohesionThresholdForDispersion { get; }` |
| `MaximumWaitTime` | `public override float MaximumWaitTime { get; }` |

## 主要方法

### DailyBeingAtArmyInfluenceAward
`public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

**用途 / Purpose:** 处理 `daily being at army influence award` 相关逻辑。

### CalculatePartyInfluenceCost
`public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**用途 / Purpose:** 处理 `calculate party influence cost` 相关逻辑。

### GetMobilePartiesToCallToArmy
`public override List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)`

**用途 / Purpose:** 获取 `mobile parties to call to army` 的当前值。

### CalculateTotalInfluenceCost
`public override int CalculateTotalInfluenceCost(Army army, float percentage)`

**用途 / Purpose:** 处理 `calculate total influence cost` 相关逻辑。

### GetPartySizeScore
`public override float GetPartySizeScore(MobileParty party)`

**用途 / Purpose:** 获取 `party size score` 的当前值。

### CalculateDailyCohesionChange
`public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate daily cohesion change` 相关逻辑。

### CalculateNewCohesion
`public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**用途 / Purpose:** 处理 `calculate new cohesion` 相关逻辑。

### GetCohesionBoostInfluenceCost
`public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**用途 / Purpose:** 获取 `cohesion boost influence cost` 的当前值。

### GetPartyRelation
`public override int GetPartyRelation(Hero hero)`

**用途 / Purpose:** 获取 `party relation` 的当前值。

### CanPlayerCreateArmy
`public override bool CanPlayerCreateArmy(out TextObject disabledReason)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player create army`。

### CheckPartyEligibility
`public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**用途 / Purpose:** 处理 `check party eligibility` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultArmyManagementCalculationModel>(new MyDefaultArmyManagementCalculationModel());
```

## 参见

- [完整类目录](../catalog)