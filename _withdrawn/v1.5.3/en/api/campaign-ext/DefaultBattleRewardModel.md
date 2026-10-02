---
title: "DefaultBattleRewardModel"
description: "Auto-generated class reference for DefaultBattleRewardModel."
---
# DefaultBattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleRewardModel : BattleRewardModel `
**Base:** BattleRewardModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultBattleRewardModel.cs

## Overview

Auto-generated stub for `DefaultBattleRewardModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent,Hero hero)`

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty,float renownValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,float renownMultiplierForWinnerSide,bool includeDescriptions)`

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty,float influenceValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,float influenceMultiplierForWinnerSide,bool includeDescriptions)`

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty,float renownValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,bool includeDescriptions)`

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character,float targetValue)`

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero,CharacterObject casualtyCharacter)`

### GetAITradePenalty
`public override float GetAITradePenalty()`

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

### GetCaptureMemberChancesForWinnerParties
`public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent,MBReadOnlyList<MapEventParty> winnerParties,out MBList<KeyValuePair<MapEventParty,float>> woundedMemberChances,out MBList<KeyValuePair<MapEventParty,float>> healthyMemberChances)`

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties,TroopRosterElement prisonerElement)`

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty,float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties,PartyBase defeatedParty)`

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties,PartyBase defeatedParty)`

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship,MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent,MBReadOnlyList<Ship> shipsToLoot,MBReadOnlyList<MapEventParty> winnerParties)`

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner,Ship ship)`

### CalculateMoraleChangeOnRoundVictory
`public override float CalculateMoraleChangeOnRoundVictory(PartyBase party,MapEventSide partySide,BattleSideEnum roundWinner)`

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship,SiegeEngineType siegeEngineType)`

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties,PartyBase defeatedSideLeaderParty)`

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

### CanTroopBeTakenPrisoner
`public override bool CanTroopBeTakenPrisoner(CharacterObject troop)`

## See Also

- [Section index](../)
