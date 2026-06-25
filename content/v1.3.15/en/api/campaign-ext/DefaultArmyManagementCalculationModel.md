---
title: "DefaultArmyManagementCalculationModel"
description: "Auto-generated class reference for DefaultArmyManagementCalculationModel."
---
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

**Purpose:** Executes the DailyBeingAtArmyInfluenceAward logic.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.DailyBeingAtArmyInfluenceAward(armyMemberParty);
```

### CalculatePartyInfluenceCost
`public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**Purpose:** Calculates the current value or result of party influence cost.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculatePartyInfluenceCost(armyLeaderParty, party);
```

### GetMobilePartiesToCallToArmy
`public override List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)`

**Purpose:** Reads and returns the mobile parties to call to army value held by the this instance.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetMobilePartiesToCallToArmy(leaderParty);
```

### CalculateTotalInfluenceCost
`public override int CalculateTotalInfluenceCost(Army army, float percentage)`

**Purpose:** Calculates the current value or result of total influence cost.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateTotalInfluenceCost(army, 0);
```

### GetPartySizeScore
`public override float GetPartySizeScore(MobileParty party)`

**Purpose:** Reads and returns the party size score value held by the this instance.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetPartySizeScore(party);
```

### CalculateDailyCohesionChange
`public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of daily cohesion change.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateDailyCohesionChange(army, false);
```

### CalculateNewCohesion
`public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**Purpose:** Calculates the current value or result of new cohesion.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateNewCohesion(army, newParty, 0, 0);
```

### GetCohesionBoostInfluenceCost
`public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**Purpose:** Reads and returns the cohesion boost influence cost value held by the this instance.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetCohesionBoostInfluenceCost(army, 0);
```

### GetPartyRelation
`public override int GetPartyRelation(Hero hero)`

**Purpose:** Reads and returns the party relation value held by the this instance.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetPartyRelation(hero);
```

### CanPlayerCreateArmy
`public override bool CanPlayerCreateArmy(out TextObject disabledReason)`

**Purpose:** Checks whether the this instance meets the preconditions for player create army.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CanPlayerCreateArmy(disabledReason);
```

### CheckPartyEligibility
`public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**Purpose:** Verifies whether party eligibility holds true for the this instance.

```csharp
// Obtain an instance of DefaultArmyManagementCalculationModel from the subsystem API first
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CheckPartyEligibility(party, explanation);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultArmyManagementCalculationModel>(new MyDefaultArmyManagementCalculationModel());
```

## See Also

- [Area Index](../)