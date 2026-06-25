---
title: "ArmyManagementCalculationModel"
description: "Auto-generated class reference for ArmyManagementCalculationModel."
---
# ArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>`
**Base:** `MBGameModel<ArmyManagementCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs`

## Overview

`ArmyManagementCalculationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ArmyManagementCalculationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public abstract bool CanPlayerCreateArmy(out TextObject disabledReason)`

**Purpose:** Checks whether the current object meets the preconditions for `player create army`.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CanPlayerCreateArmy(disabledReason);
```

### CalculatePartyInfluenceCost
`public abstract int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**Purpose:** Calculates the current value or result of `party influence cost`.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CalculatePartyInfluenceCost(armyLeaderParty, party);
```

### DailyBeingAtArmyInfluenceAward
`public abstract float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.DailyBeingAtArmyInfluenceAward(armyMemberParty);
```

### GetMobilePartiesToCallToArmy
`public abstract List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)`

**Purpose:** Reads and returns the `mobile parties to call to army` value held by the current object.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.GetMobilePartiesToCallToArmy(leaderParty);
```

### CalculateTotalInfluenceCost
`public abstract int CalculateTotalInfluenceCost(Army army, float percentage)`

**Purpose:** Calculates the current value or result of `total influence cost`.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CalculateTotalInfluenceCost(army, 0);
```

### GetPartySizeScore
`public abstract float GetPartySizeScore(MobileParty party)`

**Purpose:** Reads and returns the `party size score` value held by the current object.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.GetPartySizeScore(party);
```

### CheckPartyEligibility
`public abstract bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**Purpose:** Verifies whether `party eligibility` holds true for the current object.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CheckPartyEligibility(party, explanation);
```

### GetPartyRelation
`public abstract int GetPartyRelation(Hero hero)`

**Purpose:** Reads and returns the `party relation` value held by the current object.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.GetPartyRelation(hero);
```

### CalculateDailyCohesionChange
`public abstract ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of `daily cohesion change`.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CalculateDailyCohesionChange(army, false);
```

### CalculateNewCohesion
`public abstract int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**Purpose:** Calculates the current value or result of `new cohesion`.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CalculateNewCohesion(army, newParty, 0, 0);
```

### GetCohesionBoostInfluenceCost
`public abstract int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**Purpose:** Reads and returns the `cohesion boost influence cost` value held by the current object.

```csharp
// Obtain an instance of ArmyManagementCalculationModel from the subsystem API first
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.GetCohesionBoostInfluenceCost(army, 0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ArmyManagementCalculationModel instance = ...;
```

## See Also

- [Area Index](../)