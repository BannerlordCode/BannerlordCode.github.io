---
title: "BattleRewardModel"
description: "BattleRewardModel 的自动生成类参考。"
---
# BattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleRewardModel : MBGameModel<BattleRewardModel> `
**Base:** MBGameModel<BattleRewardModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs

## 概述

`BattleRewardModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
