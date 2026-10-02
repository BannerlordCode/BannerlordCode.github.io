---
title: "AllianceModel"
description: "AllianceModel — class in TaleWorlds.CampaignSystem.ComponentInterfaces. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# AllianceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`  
**Base:** `MBGameModel`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs`

## Overview

`AllianceModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends MBGameModel, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (15): `MaxDurationOfAlliance`, `MaxDurationOfWarParticipation`, `MaxNumberOfAlliances`, `DurationForOffers`, `GetCallToWarCost`, `GetScoreOfStartingAlliance`, ….
- **Extension points** (15): `MaxDurationOfAlliance`, `MaxDurationOfWarParticipation`, `MaxNumberOfAlliances`, `DurationForOffers`, `GetCallToWarCost`, `GetScoreOfStartingAlliance`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CanMakeAlliance` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Kingdom kingdom`, `Kingdom targetKingdom`, `IFaction evaluatingFaction`, `out TextObject reason`, …. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DurationForOffers` | property (abstract) | Abstract — a subclass must supply it `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `GetAllianceFactorForDeclaringPeace` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `IFaction factionDeclaresPeace`, `IFaction factionDeclaredPeace`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetAllianceFactorForDeclaringWar` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `IFaction factionDeclaresWar`, `IFaction factionDeclaredWar`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetCallToWarCost` | method (abstract) | Abstract — a subclass must supply it. Takes 3 arguments: `Kingdom callingKingdom`, `Kingdom calledKingdom`, `Kingdom kingdomToCallToWarAgainst`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfCallingToWar` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Clan proposingClan`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetInfluenceCostOfProposingStartingAlliance` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `Clan proposingClan`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetProposerClanForAllianceDecision` | method (abstract) | Abstract — a subclass must supply it. Takes 2 arguments: `Kingdom proposerKingdom`, `Kingdom proposedKingdom`. Returns `Clan`. Read path: prefer it over reaching for the backing store. |
| `GetScoreOfCallingToWar` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Kingdom callingKingdom`, `Kingdom calledKingdom`, `Kingdom kingdomToCallToWarAgainst`, `IFaction evaluatingFaction`, …. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetScoreOfJoiningWar` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Kingdom offeringKingdom`, `Kingdom kingdomToOfferToJoinWarWith`, `Kingdom kingdomToOfferToJoinWarAgainst`, `IFaction evaluatingFaction`, …. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetScoreOfStartingAlliance` | method (abstract) | Abstract — a subclass must supply it. Takes 4 arguments: `Kingdom kingdomDeclaresAlliance`, `Kingdom kingdomDeclaredAlliance`, `out TextObject explanation`, `bool includeDescription`. Returns `ExplainedNumber`. Read path: prefer it over reaching for the backing store. |
| `GetSupportScoreOfStartingAllianceForClan` | method (abstract) | Abstract — a subclass must supply it. Takes 5 arguments: `Kingdom kingdomDeclaresAlliance`, `Kingdom kingdomDeclaredAlliance`, `Clan evaluatingClan`, `out TextObject explanation`, …. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `MaxDurationOfAlliance` | property (abstract) | Abstract — a subclass must supply it `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `MaxDurationOfWarParticipation` | property (abstract) | Abstract — a subclass must supply it `CampaignTime` property. Read it for current state; a declared setter writes that state in place. |
| `MaxNumberOfAlliances` | property (abstract) | Abstract — a subclass must supply it `int` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
var data = new AllianceModel
{
    MaxDurationOfAlliance = default,
    MaxDurationOfWarParticipation = default,
    MaxNumberOfAlliances = 0,
    DurationForOffers = default,
};
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 15 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
