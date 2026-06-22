<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyManagementCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>`
**Base:** `MBGameModel<ArmyManagementCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs`

## 概述

`ArmyManagementCalculationModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<ArmyManagementCalculationModel>(new MyArmyManagementCalculationModel())` 注册，以改变其计算逻辑。

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
```csharp
public abstract bool CanPlayerCreateArmy(out TextObject disabledReason)
```

### CalculatePartyInfluenceCost
```csharp
public abstract int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)
```

### DailyBeingAtArmyInfluenceAward
```csharp
public abstract float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)
```

### GetMobilePartiesToCallToArmy
```csharp
public abstract List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)
```

### CalculateTotalInfluenceCost
```csharp
public abstract int CalculateTotalInfluenceCost(Army army, float percentage)
```

### GetPartySizeScore
```csharp
public abstract float GetPartySizeScore(MobileParty party)
```

### CheckPartyEligibility
```csharp
public abstract bool CheckPartyEligibility(MobileParty party, out TextObject explanation)
```

### GetPartyRelation
```csharp
public abstract int GetPartyRelation(Hero hero)
```

### CalculateDailyCohesionChange
```csharp
public abstract ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)
```

### CalculateNewCohesion
```csharp
public abstract int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)
```

### GetCohesionBoostInfluenceCost
```csharp
public abstract int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)
```

## 使用示例

```csharp
// ArmyManagementCalculationModel (Model) 的典型用法
Game.Current.ReplaceModel<ArmyManagementCalculationModel>(new MyArmyManagementCalculationModel());
```

## 参见

- [完整类目录](../catalog)