---
title: "DefaultArmyManagementCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultArmyManagementCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
**Base:** `ArmyManagementCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`

## Overview

`DefaultArmyManagementCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultArmyManagementCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

**Purpose:** Handles logic related to `daily being at army influence award`.

### CalculatePartyInfluenceCost
`public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**Purpose:** Handles logic related to `calculate party influence cost`.

### GetMobilePartiesToCallToArmy
`public override List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)`

**Purpose:** Gets the current value of `mobile parties to call to army`.

### CalculateTotalInfluenceCost
`public override int CalculateTotalInfluenceCost(Army army, float percentage)`

**Purpose:** Handles logic related to `calculate total influence cost`.

### GetPartySizeScore
`public override float GetPartySizeScore(MobileParty party)`

**Purpose:** Gets the current value of `party size score`.

### CalculateDailyCohesionChange
`public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**Purpose:** Handles logic related to `calculate daily cohesion change`.

### CalculateNewCohesion
`public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**Purpose:** Handles logic related to `calculate new cohesion`.

### GetCohesionBoostInfluenceCost
`public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**Purpose:** Gets the current value of `cohesion boost influence cost`.

### GetPartyRelation
`public override int GetPartyRelation(Hero hero)`

**Purpose:** Gets the current value of `party relation`.

### CanPlayerCreateArmy
`public override bool CanPlayerCreateArmy(out TextObject disabledReason)`

**Purpose:** Checks whether the current object can `player create army`.

### CheckPartyEligibility
`public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**Purpose:** Handles logic related to `check party eligibility`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultArmyManagementCalculationModel>(new MyDefaultArmyManagementCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)