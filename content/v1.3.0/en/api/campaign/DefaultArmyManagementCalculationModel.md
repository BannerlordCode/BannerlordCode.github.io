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

`DefaultArmyManagementCalculationModel` is the army system's whole rulebook: who may join an army, what joining costs, and how the army's cohesion moves. The thresholds are explicit — an AI party must be at 60% of the army's size to be called, the player at 40% (`TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs:29`, `:39`), 15 days of food is required (`:49`), cohesion at or below 10 triggers dispersion (`:87`), and a member waits at most 3 hours before being processed (`:99`). The one threshold that is not a constant is `MaximumDistanceToCallToArmy`, which is computed as eight times the campaign's own average distance between the closest two towns (`:59`), so a larger map means a longer call range automatically. Cohesion bleeds at `-2` per day by default (`:324`), is clamped to 0–100 after any recalculation (`:388`, `:396`), and recomputes as a weighted average that always pulls one step toward 100 or 0 when a party joins or leaves (`:387`).

## Mental Model

Read the cohesion members as a feedback loop rather than independent getters, because they call each other and the campaign state. `Army.cs:97` reads `CalculateDailyCohesionChange` and `Army.cs:107` reads the same method with descriptions enabled, so the number is recomputed on every read rather than cached. `CalculateNewCohesion` deliberately biases the new value toward 100 when joining and toward 0 when leaving (`:386`, `:387`), which is why an army that repeatedly recruits and dismisses parties still drifts upward rather than averaging out. Influence pricing runs the other way and rewards scale: `CalculatePartyInfluenceCost` charges nothing at all when the two leaders share a clan (`:119`), and its size ratio term reads `PlayerMobilePartySizeRatioToCallToArmy` or `AIMobilePartySizeRatioToCallToArmy` depending on whether the leader is the main party (`:124`), so the model re-enters itself. Finally `CalculateTotalInfluenceCost` cuts every non-player army to a quarter of the computed cost (`:288`), which is a deliberate asymmetry a mod will otherwise read as a bug — and two members are player-facing gates that return a `TextObject` explaining the refusal: `CanPlayerCreateArmy` (`:420`) and `CheckPartyEligibility` (`:498`).

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
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.DailyBeingAtArmyInfluenceAward(armyMemberParty);
```

### CalculatePartyInfluenceCost
`public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**Purpose:** Calculates the current value or result of party influence cost.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculatePartyInfluenceCost(armyLeaderParty, party);
```

### GetMobilePartiesToCallToArmy
`public override List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)`

**Purpose:** Reads and returns the mobile parties to call to army value held by this instance.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetMobilePartiesToCallToArmy(leaderParty);
```

### CalculateTotalInfluenceCost
`public override int CalculateTotalInfluenceCost(Army army, float percentage)`

**Purpose:** Calculates the current value or result of total influence cost.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateTotalInfluenceCost(army, 0);
```

### GetPartySizeScore
`public override float GetPartySizeScore(MobileParty party)`

**Purpose:** Reads and returns the party size score value held by this instance.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetPartySizeScore(party);
```

### CalculateDailyCohesionChange
`public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**Purpose:** Calculates the current value or result of daily cohesion change.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateDailyCohesionChange(army, false);
```

### CalculateNewCohesion
`public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**Purpose:** Calculates the current value or result of new cohesion.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateNewCohesion(army, newParty, 0, 0);
```

### GetCohesionBoostInfluenceCost
`public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**Purpose:** Reads and returns the cohesion boost influence cost value held by this instance.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetCohesionBoostInfluenceCost(army, 0);
```

### GetPartyRelation
`public override int GetPartyRelation(Hero hero)`

**Purpose:** Reads and returns the party relation value held by this instance.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetPartyRelation(hero);
```

### CanPlayerCreateArmy
`public override bool CanPlayerCreateArmy(out TextObject disabledReason)`

**Purpose:** Checks whether this instance meets the preconditions for player create army.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CanPlayerCreateArmy(disabledReason);
```

### CheckPartyEligibility
`public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**Purpose:** Verifies whether party eligibility holds true for this instance.

```csharp
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CheckPartyEligibility(party, explanation);
```

## Usage Example

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    gameStarterObject.AddModel<ArmyManagementCalculationModel>(new DefaultArmyManagementCalculationModel());
}
```

`ArmyManagementCalculationModel` is declared as `MBGameModel<ArmyManagementCalculationModel>` (`ArmyManagementCalculationModel.cs:10`), so the generic `AddModel<T>` overload (`IGameStarter.cs:13`) accepts this instance. The stock game installs this same model through the same overload at `SandBoxManager.cs:261`.

## See Also

- [Area Index](../)