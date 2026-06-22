<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyManagementCalculationModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>`
**Base:** `MBGameModel<ArmyManagementCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs`

## Overview

`ArmyManagementCalculationModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<ArmyManagementCalculationModel>(new MyArmyManagementCalculationModel())` to change how it computes.

## Key Properties

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

## Key Methods

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

## Usage Example

```csharp
// Typical usage of ArmyManagementCalculationModel (Model)
Game.Current.ReplaceModel<ArmyManagementCalculationModel>(new MyArmyManagementCalculationModel());
```

## See Also

- [Complete Class Catalog](../catalog)