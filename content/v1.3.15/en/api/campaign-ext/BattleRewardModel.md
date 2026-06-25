---
title: "BattleRewardModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleRewardModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleRewardModel : MBGameModel<BattleRewardModel>`
**Base:** `MBGameModel<BattleRewardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs`

## Overview

`BattleRewardModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `BattleRewardModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetBannerLootChanceFromDefeatedHero
`public abstract float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**Purpose:** Gets the current value of `banner loot chance from defeated hero`.

### GetBannerRewardForWinningMapEvent
`public abstract ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**Purpose:** Gets the current value of `banner reward for winning map event`.

### GetPlayerGainedRelationAmount
`public abstract int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**Purpose:** Gets the current value of `player gained relation amount`.

### CalculateRenownGain
`public abstract ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**Purpose:** Handles logic related to `calculate renown gain`.

### CalculateInfluenceGain
`public abstract ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**Purpose:** Handles logic related to `calculate influence gain`.

### CalculateMoraleGainVictory
`public abstract ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**Purpose:** Handles logic related to `calculate morale gain victory`.

### CalculateMoraleChangeOnRoundVictory
`public abstract ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)`

**Purpose:** Handles logic related to `calculate morale change on round victory`.

### CalculateGoldLossAfterDefeat
`public abstract int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**Purpose:** Handles logic related to `calculate gold loss after defeat`.

### GetLootedItemFromTroop
`public abstract EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**Purpose:** Gets the current value of `looted item from troop`.

### GetExpectedLootedItemValueFromCasualty
`public abstract float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**Purpose:** Gets the current value of `expected looted item value from casualty`.

### CalculatePlunderedGoldAmountFromDefeatedParty
`public abstract int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**Purpose:** Handles logic related to `calculate plundered gold amount from defeated party`.

### GetLootGoldChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Gets the current value of `loot gold chances`.

### GetMainPartyMemberScatterChance
`public abstract float GetMainPartyMemberScatterChance()`

**Purpose:** Gets the current value of `main party member scatter chance`.

### GetAITradePenalty
`public abstract float GetAITradePenalty()`

**Purpose:** Gets the current value of `a i trade penalty`.

### GetLootMemberChancesForWinnerParties
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Gets the current value of `loot member chances for winner parties`.

### GetLootPrisonerChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**Purpose:** Gets the current value of `loot prisoner chances`.

### GetLootItemChancesForWinnerParties
`public abstract MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Gets the current value of `loot item chances for winner parties`.

### GetLootCasualtyChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**Purpose:** Gets the current value of `loot casualty chances`.

### CalculateShipDamageAfterDefeat
`public abstract float CalculateShipDamageAfterDefeat(Ship ship)`

**Purpose:** Handles logic related to `calculate ship damage after defeat`.

### DistributeDefeatedPartyShipsAmongWinners
`public abstract MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Handles logic related to `distribute defeated party ships among winners`.

### GetSunkenShipMoraleEffect
`public abstract float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**Purpose:** Gets the current value of `sunken ship morale effect`.

### GetShipSiegeEngineHitMoraleEffect
`public abstract float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**Purpose:** Gets the current value of `ship siege engine hit morale effect`.

### GetFigureheadLoot
`public abstract Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**Purpose:** Gets the current value of `figurehead loot`.

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public abstract MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

**Purpose:** Gets the current value of `winner parties that can plunder gold from ships`.

## Usage Example

```csharp
var implementation = new CustomBattleRewardModel();
```

## See Also

- [Complete Class Catalog](../catalog)