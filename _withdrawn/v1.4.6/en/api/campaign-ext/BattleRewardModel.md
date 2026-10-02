---
title: "BattleRewardModel"
description: "BattleRewardModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<BattleRewardModel>; 25 exposed members (25 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleRewardModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BattleRewardModel : MBGameModel<BattleRewardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

BattleRewardModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BattleRewardModel>; the inheritance chain is BattleRewardModel → MBGameModel → GameModel. It exposes 25 public/protected members: 25 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleRewardModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain BattleRewardModel → MBGameModel → GameModel. The surface is method-led (methods 25/25, properties 0/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetBannerLootChanceFromDefeatedHero` | `public abstract float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero);` | method |
| `GetBannerRewardForWinningMapEvent` | `public abstract ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent);` | method |
| `GetPlayerGainedRelationAmount` | `public abstract int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero);` | method |
| `CalculateRenownGain` | `public abstract ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions);` | method |
| `CalculateInfluenceGain` | `public abstract ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions);` | method |
| `CalculateMoraleGainVictory` | `public abstract ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions);` | method |
| `CalculateMoraleChangeOnRoundVictory` | `public abstract float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner);` | method |
| `CalculateGoldLossAfterDefeat` | `public abstract int CalculateGoldLossAfterDefeat(Hero partyLeaderHero);` | method |
| `GetLootedItemFromTroop` | `public abstract EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue);` | method |
| `GetExpectedLootedItemValueFromCasualty` | `public abstract float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter);` | method |
| `CalculatePlunderedGoldAmountFromDefeatedParty` | `public abstract int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty);` | method |
| `float>>GetLootGoldChances` | `public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootGoldChances(MBReadOnlyList<MapEventParty>winnerParties);` | method |
| `GetMainPartyMemberScatterChance` | `public abstract float GetMainPartyMemberScatterChance();` | method |
| `GetAITradePenalty` | `public abstract float GetAITradePenalty();` | method |
| `GetCaptureMemberChancesForWinnerParties` | `public abstract void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty>winnerParties, out MBList<KeyValuePair<MapEventParty, float>>woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>>healthyMemberChances);` | method |
| `float>>GetLootPrisonerChances` | `public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootPrisonerChances(MBReadOnlyList<MapEventParty>winnerParties, TroopRosterElement prisonerElement);` | method |
| `float>>GetLootItemChancesForWinnerParties` | `public abstract MBList<KeyValuePair<MapEventParty, float>>GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty);` | method |
| `float>>GetLootCasualtyChances` | `public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootCasualtyChances(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty);` | method |
| `CalculateShipDamageAfterDefeat` | `public abstract float CalculateShipDamageAfterDefeat(Ship ship);` | method |
| `MapEventParty>>DistributeDefeatedPartyShipsAmongWinners` | `public abstract MBReadOnlyList<KeyValuePair<Ship, MapEventParty>>DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship>shipsToLoot, MBReadOnlyList<MapEventParty>winnerParties);` | method |
| `GetSunkenShipMoraleEffect` | `public abstract float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship);` | method |
| `GetShipSiegeEngineHitMoraleEffect` | `public abstract float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType);` | method |
| `GetFigureheadLoot` | `public abstract Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty>defeatedParties, PartyBase defeatedSideLeaderParty);` | method |
| `MBReadOnlyList` | `public abstract MBReadOnlyList<MapEventParty>GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty>winnerParties);` | method |
| `CanTroopBeTakenPrisoner` | `public abstract bool CanTroopBeTakenPrisoner(CharacterObject troop);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
