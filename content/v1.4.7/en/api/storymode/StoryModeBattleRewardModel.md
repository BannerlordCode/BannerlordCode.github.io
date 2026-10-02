---
title: "StoryModeBattleRewardModel"
description: "StoryModeBattleRewardModel — class in StoryMode.GameComponents. 25 public members (0 static)."
---

<!-- v147-skeleton -->
# StoryModeBattleRewardModel

**Namespace:** `StoryMode.GameComponents`  
**Module:** `StoryMode`  
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`  
**Base:** `BattleRewardModel`  
**Source:** `StoryMode/GameComponents/StoryModeBattleRewardModel.cs`

## Overview

`StoryModeBattleRewardModel` is a data type: a record of values with little or no behaviour. It describes a thing the game measures — a stat, a spawn point, an option, a save header — and is read far more often than it is changed.

It extends BattleRewardModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Treat a model as a value object you fill in and then hand around. Its job is to give one concept a single, named shape so that producers and consumers agree on the fields.

Because models are copied and passed, mutating one after handing it over is a classic source of "the UI did not update" bugs: either change it in place before the handoff, or rebuild it.

Concretely, the surface breaks down like this:

- **Instance members** (25): `CalculateGoldLossAfterDefeat`, `CalculateInfluenceGain`, `CalculateMoraleChangeOnRoundVictory`, `CalculateMoraleGainVictory`, `CalculatePlunderedGoldAmountFromDefeatedParty`, `CalculateRenownGain`, ….
- **Extension points** (25): `CalculateGoldLossAfterDefeat`, `CalculateInfluenceGain`, `CalculateMoraleChangeOnRoundVictory`, `CalculateMoraleGainVictory`, `CalculatePlunderedGoldAmountFromDefeatedParty`, `CalculateRenownGain`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CalculateGoldLossAfterDefeat` | method (override) | Overrides the base member. Takes 1 argument: `Hero partyLeaderHero`. Returns `int`. |
| `CalculateInfluenceGain` | method (override) | Overrides the base member. Takes 5 arguments: `PartyBase winnerParty`, `float influenceValueOfBattleForWinnerSide`, `float contributionShareOfWinnerParty`, `float influenceMultiplierForWinnerSide`, …. Returns `ExplainedNumber`. |
| `CalculateMoraleChangeOnRoundVictory` | method (override) | Overrides the base member. Takes 3 arguments: `PartyBase party`, `MapEventSide partySide`, `BattleSideEnum roundWinner`. Returns `float`. |
| `CalculateMoraleGainVictory` | method (override) | Overrides the base member. Takes 4 arguments: `PartyBase winnerParty`, `float renownValueOfBattleForWinnerSide`, `float contributionShareOfWinnerParty`, `bool includeDescriptions`. Returns `ExplainedNumber`. |
| `CalculatePlunderedGoldAmountFromDefeatedParty` | method (override) | Overrides the base member. Takes 1 argument: `PartyBase defeatedParty`. Returns `int`. |
| `CalculateRenownGain` | method (override) | Overrides the base member. Takes 5 arguments: `PartyBase winnerParty`, `float renownValueOfBattleForWinnerSide`, `float contributionShareOfWinnerParty`, `float renownMultiplierForWinnerSide`, …. Returns `ExplainedNumber`. |
| `CalculateShipDamageAfterDefeat` | method (override) | Overrides the base member. Takes 1 argument: `Ship ship`. Returns `float`. |
| `CanTroopBeTakenPrisoner` | method (override) | Overrides the base member. Takes 1 argument: `CharacterObject troop`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `DistributeDefeatedPartyShipsAmongWinners` | method (override) | Overrides the base member. Takes 3 arguments: `MapEvent mapEvent`, `MBReadOnlyList<Ship> shipsToLoot`, `MBReadOnlyList<MapEventParty> winnerParties`. Returns `MBReadOnlyList<KeyValuePair<Ship, MapEventParty>>`. |
| `GetAITradePenalty` | method (override) | Overrides the base member. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetBannerLootChanceFromDefeatedHero` | method (override) | Overrides the base member. Takes 1 argument: `Hero defeatedHero`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetBannerRewardForWinningMapEvent` | method (override) | Overrides the base member. Takes 1 argument: `MapEvent mapEvent`. Returns `ItemObject`. Read path: prefer it over reaching for the backing store. |
| `GetCaptureMemberChancesForWinnerParties` | method (override) | Overrides the base member. Takes 6 arguments: `MapEvent endedMapEvent`, `MBReadOnlyList<MapEventParty> winnerParties`, `out MBList<KeyValuePair<MapEventParty`, `float>> woundedMemberChances`, …. Read path: prefer it over reaching for the backing store. |
| `GetExpectedLootedItemValueFromCasualty` | method (override) | Overrides the base member. Takes 2 arguments: `Hero winnerPartyLeaderHero`, `CharacterObject casualtyCharacter`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetFigureheadLoot` | method (override) | Overrides the base member. Takes 2 arguments: `MBReadOnlyList<MapEventParty> defeatedParties`, `PartyBase defeatedSideLeaderParty`. Returns `Figurehead`. Read path: prefer it over reaching for the backing store. |
| `GetLootCasualtyChances` | method (override) | Overrides the base member. Takes 2 arguments: `MBReadOnlyList<MapEventParty> winnerParties`, `PartyBase defeatedParty`. Returns `MBReadOnlyList<KeyValuePair<MapEventParty, float>>`. Read path: prefer it over reaching for the backing store. |
| `GetLootedItemFromTroop` | method (override) | Overrides the base member. Takes 2 arguments: `CharacterObject character`, `float targetValue`. Returns `EquipmentElement`. Read path: prefer it over reaching for the backing store. |
| `GetLootGoldChances` | method (override) | Overrides the base member. Takes 1 argument: `MBReadOnlyList<MapEventParty> winnerParties`. Returns `MBReadOnlyList<KeyValuePair<MapEventParty, float>>`. Read path: prefer it over reaching for the backing store. |
| `GetLootItemChancesForWinnerParties` | method (override) | Overrides the base member. Takes 2 arguments: `MBReadOnlyList<MapEventParty> winnerParties`, `PartyBase defeatedParty`. Returns `MBList<KeyValuePair<MapEventParty, float>>`. Read path: prefer it over reaching for the backing store. |
| `GetLootPrisonerChances` | method (override) | Overrides the base member. Takes 2 arguments: `MBReadOnlyList<MapEventParty> winnerParties`, `TroopRosterElement prisonerElement`. Returns `MBReadOnlyList<KeyValuePair<MapEventParty, float>>`. Read path: prefer it over reaching for the backing store. |
| `GetMainPartyMemberScatterChance` | method (override) | Overrides the base member. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetPlayerGainedRelationAmount` | method (override) | Overrides the base member. Takes 2 arguments: `MapEvent mapEvent`, `Hero hero`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetShipSiegeEngineHitMoraleEffect` | method (override) | Overrides the base member. Takes 2 arguments: `Ship ship`, `SiegeEngineType siegeEngineType`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetSunkenShipMoraleEffect` | method (override) | Overrides the base member. Takes 2 arguments: `PartyBase shipOwner`, `Ship ship`. Returns `float`. Read path: prefer it over reaching for the backing store. |

1 further public members follow the same patterns.
## Usage Example

```csharp
StoryModeBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

## Risks and Boundaries

- These types are often serialized directly; renaming or reordering fields breaks existing saves and save migrations.
- A default-constructed instance is not a valid value — check the required fields before use.
- Collection properties are usually null until initialised; a null check is cheaper than a null-reference crash mid-mission.
- 25 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `StoryMode/GameComponents/StoryModeBattleRewardModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [TutorialPhase](../TutorialPhase/) — `StoryMode.StoryModePhases`.
- [Ship](../../campaign/Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [Figurehead](../../campaign/Figurehead/) — `TaleWorlds.CampaignSystem.Naval`.

Section: [api/storymode/](../) — the other types in this bucket.
