---
title: "StoryModeBattleRewardModel"
description: "Auto-generated class reference for StoryModeBattleRewardModel."
---
# StoryModeBattleRewardModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel `
**Base:** BattleRewardModel
**Source:** StoryMode/GameComponents/StoryModeBattleRewardModel.cs

## Overview

Auto-generated stub for `StoryModeBattleRewardModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty,float influenceValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,float influenceMultiplierForWinnerSide,bool includeDescriptions)`

### CalculateMoraleChangeOnRoundVictory
`public override float CalculateMoraleChangeOnRoundVictory(PartyBase party,MapEventSide partySide,BattleSideEnum roundWinner)`

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty,float renownValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,bool includeDescriptions)`

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty,float renownValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,float renownMultiplierForWinnerSide,bool includeDescriptions)`

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship,MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent,MBReadOnlyList<Ship> shipsToLoot,MBReadOnlyList<MapEventParty> winnerParties)`

### GetAITradePenalty
`public override float GetAITradePenalty()`

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero,CharacterObject casualtyCharacter)`

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties,PartyBase defeatedSideLeaderParty)`

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties,PartyBase defeatedParty)`

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character,float targetValue)`

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty,float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties,PartyBase defeatedParty)`

### GetCaptureMemberChancesForWinnerParties
`public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent,MBReadOnlyList<MapEventParty> winnerParties,out MBList<KeyValuePair<MapEventParty,float>> woundedMemberChances,out MBList<KeyValuePair<MapEventParty,float>> healthyMemberChances)`

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties,TroopRosterElement prisonerElement)`

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent,Hero hero)`

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship,SiegeEngineType siegeEngineType)`

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner,Ship ship)`

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

### CanTroopBeTakenPrisoner
`public override bool CanTroopBeTakenPrisoner(CharacterObject troop)`

## See Also

- [Section index](../)
