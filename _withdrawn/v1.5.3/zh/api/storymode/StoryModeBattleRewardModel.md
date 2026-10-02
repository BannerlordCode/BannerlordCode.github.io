---
title: "StoryModeBattleRewardModel"
description: "StoryModeBattleRewardModel 的自动生成类参考。"
---
# StoryModeBattleRewardModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel `
**Base:** BattleRewardModel
**Source:** StoryMode/GameComponents/StoryModeBattleRewardModel.cs

## 概述

`StoryModeBattleRewardModel` 的自动生成类参考页面。声明来自 `StoryMode/GameComponents/StoryModeBattleRewardModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero) `

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty,float influenceValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,float influenceMultiplierForWinnerSide,bool includeDescriptions) `

### CalculateMoraleChangeOnRoundVictory
`public override float CalculateMoraleChangeOnRoundVictory(PartyBase party,MapEventSide partySide,BattleSideEnum roundWinner) `

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty,float renownValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,bool includeDescriptions) `

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty) `

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty,float renownValueOfBattleForWinnerSide,float contributionShareOfWinnerParty,float renownMultiplierForWinnerSide,bool includeDescriptions) `

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship) `

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship,MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent,MBReadOnlyList<Ship> shipsToLoot,MBReadOnlyList<MapEventParty> winnerParties) `

### GetAITradePenalty
`public override float GetAITradePenalty() `

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero) `

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent) `

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero,CharacterObject casualtyCharacter) `

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties,PartyBase defeatedSideLeaderParty) `

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties,PartyBase defeatedParty) `

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character,float targetValue) `

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties) `

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty,float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties,PartyBase defeatedParty) `

### GetCaptureMemberChancesForWinnerParties
`public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent,MBReadOnlyList<MapEventParty> winnerParties,out MBList<KeyValuePair<MapEventParty,float>> woundedMemberChances,out MBList<KeyValuePair<MapEventParty,float>> healthyMemberChances) `

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty,float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties,TroopRosterElement prisonerElement) `

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance() `

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent,Hero hero) `

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship,SiegeEngineType siegeEngineType) `

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner,Ship ship) `

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties) `

### CanTroopBeTakenPrisoner
`public override bool CanTroopBeTakenPrisoner(CharacterObject troop) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
