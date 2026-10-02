---
title: "BattleRewardModel"
description: "Auto-generated class reference for BattleRewardModel."
---
# BattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleRewardModel : MBGameModel<BattleRewardModel> `
**Base:** MBGameModel<BattleRewardModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs

## Overview

Auto-generated stub for `BattleRewardModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetBannerLootChanceFromDefeatedHero
`public abstract float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

### GetBannerRewardForWinningMapEvent
`public abstract ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

### GetPlayerGainedRelationAmount
`public abstract int GetPlayerGainedRelationAmount(MapEvent mapEvent,Hero hero)`

### CalculateRenownGain
`public abstract ExplainedNumber CalculateRenownGain(PartyBase winnerParty,float renownValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,float renownMultiplierForWinnerSide,bool includeDescriptions)`

### CalculateInfluenceGain
`public abstract ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty,float influenceValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,float influenceMultiplierForWinnerSide,bool includeDescriptions)`

### CalculateMoraleGainVictory
`public abstract ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty,float renownValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,bool includeDescriptions)`

### CalculateMoraleChangeOnRoundVictory
`public abstract float CalculateMoraleChangeOnRoundVictory(PartyBase party,MapEventSide partySide,BattleSideEnum roundWinner)`

### CalculateGoldLossAfterDefeat
`public abstract int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

### GetLootedItemFromTroop
`public abstract EquipmentElement GetLootedItemFromTroop(CharacterObject character,float targetValue)`

### GetExpectedLootedItemValueFromCasualty
`public abstract float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero,CharacterObject casualtyCharacter)`

### CalculatePlunderedGoldAmountFromDefeatedParty
`public abstract int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

### GetLootGoldChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

### GetMainPartyMemberScatterChance
`public abstract float GetMainPartyMemberScatterChance()`

### GetAITradePenalty
`public abstract float GetAITradePenalty()`

### GetCaptureMemberChancesForWinnerParties
`public abstract void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent,MBReadOnlyList<MapEventParty> winnerParties,out MBList<KeyValuePair<MapEventParty,float>> woundedMemberChances,out MBList<KeyValuePair<MapEventParty,float>> healthyMemberChances)`

### GetLootPrisonerChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties,TroopRosterElement prisonerElement)`

### GetLootItemChancesForWinnerParties
`public abstract MBList<KeyValuePair<MapEventParty,float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties,PartyBase defeatedParty)`

### GetLootCasualtyChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties,PartyBase defeatedParty)`

### CalculateShipDamageAfterDefeat
`public abstract float CalculateShipDamageAfterDefeat(Ship ship)`

### DistributeDefeatedPartyShipsAmongWinners
`public abstract MBReadOnlyList<KeyValuePair<Ship,MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent,MBReadOnlyList<Ship> shipsToLoot,MBReadOnlyList<MapEventParty> winnerParties)`

### GetSunkenShipMoraleEffect
`public abstract float GetSunkenShipMoraleEffect(PartyBase shipOwner,Ship ship)`

### GetShipSiegeEngineHitMoraleEffect
`public abstract float GetShipSiegeEngineHitMoraleEffect(Ship ship,SiegeEngineType siegeEngineType)`

### GetFigureheadLoot
`public abstract Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties,PartyBase defeatedSideLeaderParty)`

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public abstract MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

### CanTroopBeTakenPrisoner
`public abstract bool CanTroopBeTakenPrisoner(CharacterObject troop)`

## See Also

- [Section index](../)
