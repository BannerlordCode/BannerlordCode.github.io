<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultArmyManagementCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
**Base:** `ArmyManagementCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`

## 概述

`DefaultArmyManagementCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultArmyManagementCalculationModel>(new MyDefaultArmyManagementCalculationModel())` 注册，以改变其计算逻辑。

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
```csharp
public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)
```

### CalculatePartyInfluenceCost
```csharp
public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)
```

### GetMobilePartiesToCallToArmy
```csharp
public override List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)
```

### CalculateTotalInfluenceCost
```csharp
public override int CalculateTotalInfluenceCost(Army army, float percentage)
```

### GetPartySizeScore
```csharp
public override float GetPartySizeScore(MobileParty party)
```

### CalculateDailyCohesionChange
```csharp
public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)
```

### CalculateNewCohesion
```csharp
public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)
```

### GetCohesionBoostInfluenceCost
```csharp
public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)
```

### GetPartyRelation
```csharp
public override int GetPartyRelation(Hero hero)
```

### CanPlayerCreateArmy
```csharp
public override bool CanPlayerCreateArmy(out TextObject disabledReason)
```

### CheckPartyEligibility
```csharp
public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)
```

## 使用示例

```csharp
// DefaultArmyManagementCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultArmyManagementCalculationModel>(new MyDefaultArmyManagementCalculationModel());
```

## 参见

- [完整类目录](../catalog)