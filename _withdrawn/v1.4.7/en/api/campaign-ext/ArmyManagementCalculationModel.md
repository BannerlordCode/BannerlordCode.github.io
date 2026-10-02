---
title: "ArmyManagementCalculationModel"
description: "ArmyManagementCalculationModel — class in TaleWorlds.CampaignSystem.ComponentInterfaces. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# ArmyManagementCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs`

## Overview

`ArmyManagementCalculationModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. 8 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (19): `AIMobilePartySizeRatioToCallToArmy`, `PlayerMobilePartySizeRatioToCallToArmy`, `MinimumNeededFoodInDaysToCallToArmy`, `MaximumDistanceToCallToArmy`, `InfluenceValuePerGold`, `AverageCallToArmyCost`, ….
- **Extension points** (19): `AIMobilePartySizeRatioToCallToArmy`, `PlayerMobilePartySizeRatioToCallToArmy`, `MinimumNeededFoodInDaysToCallToArmy`, `MaximumDistanceToCallToArmy`, `InfluenceValuePerGold`, `AverageCallToArmyCost`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AIMobilePartySizeRatioToCallToArmy` | property (abstract) | Abstract — a subclass must supply it `float` property. Read it for current state; a declared setter writes that state in place. |
| `AverageCallToArmyCost` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `CalculateDailyCohesionChange` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Army army`, `bool includeDescriptions`. Returns `ExplainedNumber`. |
| `CalculateNewCohesion` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `Army army`, `PartyBase newParty`, `int calculatedCohesion`, `int sign`. Returns `int`. |
| `CalculatePartyInfluenceCost` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `MobileParty armyLeaderParty`, `MobileParty party`. Returns `int`. |
| `CalculateTotalInfluenceCost` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Army army`, `float percentage`. Returns `int`. |
| `CanLordCreateArmy` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `MobileParty leaderParty`, `out MBList<MobileParty> possibleArmyMembers`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CanPlayerCreateArmy` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `out TextObject disabledReason`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CheckPartyEligibility` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `MobileParty party`, `out TextObject explanation`. Returns `bool`. |
| `CohesionThresholdForDispersion` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `DailyBeingAtArmyInfluenceAward` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `MobileParty armyMemberParty`. Returns `float`. |
| `GetCohesionBoostInfluenceCost` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Army army`, `int percentageToBoost`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetPartyRelation` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Hero hero`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetPartySizeScore` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `MobileParty party`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `InfluenceValuePerGold` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |
| `MaximumDistanceToCallToArmy` | property (abstract) | Abstract — a subclass must supply it `float` property. Read it for current state; a declared setter writes that state in place. |
| `MaximumWaitTime` | property (abstract) | Abstract — a subclass must supply it `float` property. Read it for current state; a declared setter writes that state in place. |
| `MinimumNeededFoodInDaysToCallToArmy` | property (abstract) | Abstract — a subclass must supply it `float` property. Read it for current state; a declared setter writes that state in place. |
| `PlayerMobilePartySizeRatioToCallToArmy` | property (abstract) | Abstract — a subclass must supply it `float` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new ArmyManagementCalculationModel
{
    AIMobilePartySizeRatioToCallToArmy = 0,
    PlayerMobilePartySizeRatioToCallToArmy = 0,
    MinimumNeededFoodInDaysToCallToArmy = 0,
    MaximumDistanceToCallToArmy = 0,
    InfluenceValuePerGold = 0,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 19 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
