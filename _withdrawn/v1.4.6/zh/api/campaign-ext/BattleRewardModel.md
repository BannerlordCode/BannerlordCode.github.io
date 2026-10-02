---
title: "BattleRewardModel"
description: "BattleRewardModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<BattleRewardModel>；公开成员 25 个（方法 25、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleRewardModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BattleRewardModel : MBGameModel<BattleRewardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

BattleRewardModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<BattleRewardModel>，继承链为 BattleRewardModel → MBGameModel → GameModel。public/protected 成员共 25 个：25 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleRewardModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 BattleRewardModel → MBGameModel → GameModel。成员构成以方法为主（方法 25/25，属性 0/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetBannerLootChanceFromDefeatedHero` | `public abstract float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero);` | 方法 |
| `GetBannerRewardForWinningMapEvent` | `public abstract ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent);` | 方法 |
| `GetPlayerGainedRelationAmount` | `public abstract int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero);` | 方法 |
| `CalculateRenownGain` | `public abstract ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions);` | 方法 |
| `CalculateInfluenceGain` | `public abstract ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions);` | 方法 |
| `CalculateMoraleGainVictory` | `public abstract ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions);` | 方法 |
| `CalculateMoraleChangeOnRoundVictory` | `public abstract float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner);` | 方法 |
| `CalculateGoldLossAfterDefeat` | `public abstract int CalculateGoldLossAfterDefeat(Hero partyLeaderHero);` | 方法 |
| `GetLootedItemFromTroop` | `public abstract EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue);` | 方法 |
| `GetExpectedLootedItemValueFromCasualty` | `public abstract float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter);` | 方法 |
| `CalculatePlunderedGoldAmountFromDefeatedParty` | `public abstract int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty);` | 方法 |
| `float>>GetLootGoldChances` | `public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootGoldChances(MBReadOnlyList<MapEventParty>winnerParties);` | 方法 |
| `GetMainPartyMemberScatterChance` | `public abstract float GetMainPartyMemberScatterChance();` | 方法 |
| `GetAITradePenalty` | `public abstract float GetAITradePenalty();` | 方法 |
| `GetCaptureMemberChancesForWinnerParties` | `public abstract void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty>winnerParties, out MBList<KeyValuePair<MapEventParty, float>>woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>>healthyMemberChances);` | 方法 |
| `float>>GetLootPrisonerChances` | `public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootPrisonerChances(MBReadOnlyList<MapEventParty>winnerParties, TroopRosterElement prisonerElement);` | 方法 |
| `float>>GetLootItemChancesForWinnerParties` | `public abstract MBList<KeyValuePair<MapEventParty, float>>GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty);` | 方法 |
| `float>>GetLootCasualtyChances` | `public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootCasualtyChances(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty);` | 方法 |
| `CalculateShipDamageAfterDefeat` | `public abstract float CalculateShipDamageAfterDefeat(Ship ship);` | 方法 |
| `MapEventParty>>DistributeDefeatedPartyShipsAmongWinners` | `public abstract MBReadOnlyList<KeyValuePair<Ship, MapEventParty>>DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship>shipsToLoot, MBReadOnlyList<MapEventParty>winnerParties);` | 方法 |
| `GetSunkenShipMoraleEffect` | `public abstract float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship);` | 方法 |
| `GetShipSiegeEngineHitMoraleEffect` | `public abstract float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType);` | 方法 |
| `GetFigureheadLoot` | `public abstract Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty>defeatedParties, PartyBase defeatedSideLeaderParty);` | 方法 |
| `MBReadOnlyList` | `public abstract MBReadOnlyList<MapEventParty>GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty>winnerParties);` | 方法 |
| `CanTroopBeTakenPrisoner` | `public abstract bool CanTroopBeTakenPrisoner(CharacterObject troop);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
