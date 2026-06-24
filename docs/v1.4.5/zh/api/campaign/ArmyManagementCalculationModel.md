<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyManagementCalculationModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>`
**Base:** `MBGameModel<ArmyManagementCalculationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ArmyManagementCalculationModel.cs`

## 概述

`ArmyManagementCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ArmyManagementCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AIMobilePartySizeRatioToCallToArmy` | `public abstract float AIMobilePartySizeRatioToCallToArmy { get; }` |
| `PlayerMobilePartySizeRatioToCallToArmy` | `public abstract float PlayerMobilePartySizeRatioToCallToArmy { get; }` |
| `MinimumNeededFoodInDaysToCallToArmy` | `public abstract float MinimumNeededFoodInDaysToCallToArmy { get; }` |
| `MaximumDistanceToCallToArmy` | `public abstract float MaximumDistanceToCallToArmy { get; }` |
| `InfluenceValuePerGold` | `public abstract int InfluenceValuePerGold { get; }` |
| `AverageCallToArmyCost` | `public abstract int AverageCallToArmyCost { get; }` |
| `CohesionThresholdForDispersion` | `public abstract int CohesionThresholdForDispersion { get; }` |
| `MaximumWaitTime` | `public abstract float MaximumWaitTime { get; }` |

## 主要方法

### CanPlayerCreateArmy
`public abstract bool CanPlayerCreateArmy(out TextObject disabledReason)`

**用途 / Purpose:** 判断当前对象是否可以执行 `player create army`。

### CalculatePartyInfluenceCost
`public abstract int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**用途 / Purpose:** 处理 `calculate party influence cost` 相关逻辑。

### DailyBeingAtArmyInfluenceAward
`public abstract float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

**用途 / Purpose:** 处理 `daily being at army influence award` 相关逻辑。

### CanLordCreateArmy
`public abstract bool CanLordCreateArmy(MobileParty leaderParty, out MBList<MobileParty> possibleArmyMembers)`

**用途 / Purpose:** 判断当前对象是否可以执行 `lord create army`。

### CalculateTotalInfluenceCost
`public abstract int CalculateTotalInfluenceCost(Army army, float percentage)`

**用途 / Purpose:** 处理 `calculate total influence cost` 相关逻辑。

### GetPartySizeScore
`public abstract float GetPartySizeScore(MobileParty party)`

**用途 / Purpose:** 获取 `party size score` 的当前值。

### CheckPartyEligibility
`public abstract bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**用途 / Purpose:** 处理 `check party eligibility` 相关逻辑。

### GetPartyRelation
`public abstract int GetPartyRelation(Hero hero)`

**用途 / Purpose:** 获取 `party relation` 的当前值。

### CalculateDailyCohesionChange
`public abstract ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**用途 / Purpose:** 处理 `calculate daily cohesion change` 相关逻辑。

### CalculateNewCohesion
`public abstract int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**用途 / Purpose:** 处理 `calculate new cohesion` 相关逻辑。

### GetCohesionBoostInfluenceCost
`public abstract int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**用途 / Purpose:** 获取 `cohesion boost influence cost` 的当前值。

## 使用示例

```csharp
var implementation = new CustomArmyManagementCalculationModel();
```

## 参见

- [完整类目录](../catalog)