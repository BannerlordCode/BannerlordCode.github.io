---
title: "StoryModeBattleRewardModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeBattleRewardModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeBattleRewardModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeBattleRewardModel.cs`

## Overview

`StoryModeBattleRewardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeBattleRewardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**Purpose:** Handles logic related to `calculate gold loss after defeat`.

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions)`

**Purpose:** Handles logic related to `calculate influence gain`.

### CalculateMoraleChangeOnRoundVictory
`public override float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)`

**Purpose:** Handles logic related to `calculate morale change on round victory`.

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions)`

**Purpose:** Handles logic related to `calculate morale gain victory`.

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**Purpose:** Handles logic related to `calculate plundered gold amount from defeated party`.

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)`

**Purpose:** Handles logic related to `calculate renown gain`.

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**Purpose:** Handles logic related to `calculate ship damage after defeat`.

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Handles logic related to `distribute defeated party ships among winners`.

### GetAITradePenalty
`public override float GetAITradePenalty()`

**Purpose:** Gets the current value of `a i trade penalty`.

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**Purpose:** Gets the current value of `banner loot chance from defeated hero`.

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**Purpose:** Gets the current value of `banner reward for winning map event`.

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**Purpose:** Gets the current value of `expected looted item value from casualty`.

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**Purpose:** Gets the current value of `figurehead loot`.

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Gets the current value of `loot casualty chances`.

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**Purpose:** Gets the current value of `looted item from troop`.

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Gets the current value of `loot gold chances`.

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Gets the current value of `loot item chances for winner parties`.

### GetCaptureMemberChancesForWinnerParties
`public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty> winnerParties, out MBList<KeyValuePair<MapEventParty, float>> woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>> healthyMemberChances)`

**Purpose:** Gets the current value of `capture member chances for winner parties`.

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**Purpose:** Gets the current value of `loot prisoner chances`.

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**Purpose:** Gets the current value of `main party member scatter chance`.

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**Purpose:** Gets the current value of `player gained relation amount`.

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**Purpose:** Gets the current value of `ship siege engine hit morale effect`.

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**Purpose:** Gets the current value of `sunken ship morale effect`.

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Gets the current value of `winner parties that can plunder gold from ships`.

### CanTroopBeTakenPrisoner
`public override bool CanTroopBeTakenPrisoner(CharacterObject troop)`

**Purpose:** Checks whether the current object can `troop be taken prisoner`.

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeBattleRewardModel>(new MyStoryModeBattleRewardModel());
```

## See Also

- [Complete Class Catalog](../catalog)