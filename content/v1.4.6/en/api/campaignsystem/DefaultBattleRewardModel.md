---
title: "DefaultBattleRewardModel"
description: "DefaultBattleRewardModel: a public class in TaleWorlds.CampaignSystem, inheriting BattleRewardModel; 25 exposed members (25 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBattleRewardModel.cs."
---
# DefaultBattleRewardModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBattleRewardModel : BattleRewardModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBattleRewardModel.cs`

## Overview

DefaultBattleRewardModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBattleRewardModel.cs. It is a public class, implementing/inheriting BattleRewardModel; the inheritance chain is DefaultBattleRewardModel → BattleRewardModel → MBGameModel. It exposes 25 public/protected members: 25 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBattleRewardModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultBattleRewardModel → BattleRewardModel → MBGameModel. The surface is method-led (methods 25/25, properties 0/25), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBattleRewardModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPlayerGainedRelationAmount` | `public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)` | method |
| `CalculateRenownGain` | `public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)` | method |
| `CalculateInfluenceGain` | `public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions)` | method |
| `CalculateMoraleGainVictory` | `public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions)` | method |
| `CalculateGoldLossAfterDefeat` | `public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)` | method |
| `GetLootedItemFromTroop` | `public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)` | method |
| `GetExpectedLootedItemValueFromCasualty` | `public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)` | method |
| `GetAITradePenalty` | `public override float GetAITradePenalty()` | method |
| `GetMainPartyMemberScatterChance` | `public override float GetMainPartyMemberScatterChance()` | method |
| `CalculatePlunderedGoldAmountFromDefeatedParty` | `public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)` | method |
| `float>>GetLootGoldChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootGoldChances(MBReadOnlyList<MapEventParty>winnerParties)` | method |
| `GetCaptureMemberChancesForWinnerParties` | `public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty>winnerParties, out MBList<KeyValuePair<MapEventParty, float>>woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>>healthyMemberChances)` | method |
| `float>>GetLootPrisonerChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootPrisonerChances(MBReadOnlyList<MapEventParty>winnerParties, TroopRosterElement prisonerElement)` | method |
| `float>>GetLootItemChancesForWinnerParties` | `public override MBList<KeyValuePair<MapEventParty, float>>GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty)` | method |
| `float>>GetLootCasualtyChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootCasualtyChances(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty)` | method |
| `CalculateShipDamageAfterDefeat` | `public override float CalculateShipDamageAfterDefeat(Ship ship)` | method |
| `MapEventParty>>DistributeDefeatedPartyShipsAmongWinners` | `public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>>DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship>shipsToLoot, MBReadOnlyList<MapEventParty>winnerParties)` | method |
| `GetBannerLootChanceFromDefeatedHero` | `public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)` | method |
| `GetBannerRewardForWinningMapEvent` | `public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)` | method |
| `GetSunkenShipMoraleEffect` | `public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)` | method |
| `CalculateMoraleChangeOnRoundVictory` | `public override float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)` | method |
| `GetShipSiegeEngineHitMoraleEffect` | `public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)` | method |
| `GetFigureheadLoot` | `public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty>defeatedParties, PartyBase defeatedSideLeaderParty)` | method |
| `MBReadOnlyList` | `public override MBReadOnlyList<MapEventParty>GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty>winnerParties)` | method |
| `CanTroopBeTakenPrisoner` | `public override bool CanTroopBeTakenPrisoner(CharacterObject troop)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BattleRewardModel](../BattleRewardModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
