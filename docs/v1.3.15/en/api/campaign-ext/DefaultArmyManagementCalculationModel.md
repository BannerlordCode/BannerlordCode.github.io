<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultArmyManagementCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
**Base:** `ArmyManagementCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`

## Overview

`DefaultArmyManagementCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<DefaultArmyManagementCalculationModel>(new MyDefaultArmyManagementCalculationModel())` to change how it computes.

## Key Properties

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

## Key Methods

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

## Usage Example

```csharp
// Typical usage of DefaultArmyManagementCalculationModel (Model)
Game.Current.ReplaceModel<DefaultArmyManagementCalculationModel>(new MyDefaultArmyManagementCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)