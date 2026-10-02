---
title: "StoryModeBattleRewardModel"
description: "StoryModeBattleRewardModel: a public class in StoryMode.GameComponents, inheriting BattleRewardModel; 25 exposed members (25 methods, 0 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModeBattleRewardModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeBattleRewardModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`
**File:** `StoryMode/GameComponents/StoryModeBattleRewardModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeBattleRewardModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeBattleRewardModel.cs. It is a public class, implementing/inheriting BattleRewardModel; the inheritance chain is StoryModeBattleRewardModel → BattleRewardModel → MBGameModel → GameModel. It exposes 25 public/protected members: 25 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeBattleRewardModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModeBattleRewardModel → BattleRewardModel → MBGameModel → GameModel. The surface is method-led (methods 25/25, properties 0/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeBattleRewardModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateGoldLossAfterDefeat` | `public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)` | method |
| `CalculateInfluenceGain` | `public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions)` | method |
| `CalculateMoraleChangeOnRoundVictory` | `public override float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)` | method |
| `CalculateMoraleGainVictory` | `public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions)` | method |
| `CalculatePlunderedGoldAmountFromDefeatedParty` | `public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)` | method |
| `CalculateRenownGain` | `public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)` | method |
| `CalculateShipDamageAfterDefeat` | `public override float CalculateShipDamageAfterDefeat(Ship ship)` | method |
| `MapEventParty>>DistributeDefeatedPartyShipsAmongWinners` | `public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>>DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship>shipsToLoot, MBReadOnlyList<MapEventParty>winnerParties)` | method |
| `GetAITradePenalty` | `public override float GetAITradePenalty()` | method |
| `GetBannerLootChanceFromDefeatedHero` | `public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)` | method |
| `GetBannerRewardForWinningMapEvent` | `public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)` | method |
| `GetExpectedLootedItemValueFromCasualty` | `public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)` | method |
| `GetFigureheadLoot` | `public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty>defeatedParties, PartyBase defeatedSideLeaderParty)` | method |
| `float>>GetLootCasualtyChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootCasualtyChances(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty)` | method |
| `GetLootedItemFromTroop` | `public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)` | method |
| `float>>GetLootGoldChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootGoldChances(MBReadOnlyList<MapEventParty>winnerParties)` | method |
| `float>>GetLootItemChancesForWinnerParties` | `public override MBList<KeyValuePair<MapEventParty, float>>GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty)` | method |
| `GetCaptureMemberChancesForWinnerParties` | `public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty>winnerParties, out MBList<KeyValuePair<MapEventParty, float>>woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>>healthyMemberChances)` | method |
| `float>>GetLootPrisonerChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootPrisonerChances(MBReadOnlyList<MapEventParty>winnerParties, TroopRosterElement prisonerElement)` | method |
| `GetMainPartyMemberScatterChance` | `public override float GetMainPartyMemberScatterChance()` | method |
| `GetPlayerGainedRelationAmount` | `public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)` | method |
| `GetShipSiegeEngineHitMoraleEffect` | `public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)` | method |
| `GetSunkenShipMoraleEffect` | `public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)` | method |
| `MBReadOnlyList` | `public override MBReadOnlyList<MapEventParty>GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty>winnerParties)` | method |
| `CanTroopBeTakenPrisoner` | `public override bool CanTroopBeTakenPrisoner(CharacterObject troop)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BattleRewardModel](../../campaign-ext/BattleRewardModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [same namespace StoryModeCombatXpModel](../StoryModeCombatXpModel/)
