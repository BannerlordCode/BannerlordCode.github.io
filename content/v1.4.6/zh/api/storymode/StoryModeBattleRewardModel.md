---
title: "StoryModeBattleRewardModel"
description: "StoryModeBattleRewardModel：StoryMode 的 public 类，继承 BattleRewardModel；公开成员 25 个（方法 25、属性 0、字段 0）。源文件 StoryMode/GameComponents/StoryModeBattleRewardModel.cs。"
---
# StoryModeBattleRewardModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`
**File:** `StoryMode/GameComponents/StoryModeBattleRewardModel.cs`

## 概述

StoryModeBattleRewardModel 位于 StoryMode 模块，源文件 StoryMode/GameComponents/StoryModeBattleRewardModel.cs。它是一个 public 类，实现/继承 BattleRewardModel，继承链为 StoryModeBattleRewardModel → BattleRewardModel。public/protected 成员共 25 个：25 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeBattleRewardModel 是 StoryMode 的顶层类型，命名空间与模块目录不同（StoryMode.GameComponents），继承链 StoryModeBattleRewardModel → BattleRewardModel。成员构成以方法为主（方法 25/25，属性 0/25），对外主要以操作入口暴露。继承链上的 BattleRewardModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/GameComponents/StoryModeBattleRewardModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateGoldLossAfterDefeat` | `public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)` | 方法 |
| `CalculateInfluenceGain` | `public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions)` | 方法 |
| `CalculateMoraleChangeOnRoundVictory` | `public override float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)` | 方法 |
| `CalculateMoraleGainVictory` | `public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions)` | 方法 |
| `CalculatePlunderedGoldAmountFromDefeatedParty` | `public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)` | 方法 |
| `CalculateRenownGain` | `public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)` | 方法 |
| `CalculateShipDamageAfterDefeat` | `public override float CalculateShipDamageAfterDefeat(Ship ship)` | 方法 |
| `MapEventParty>>DistributeDefeatedPartyShipsAmongWinners` | `public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>>DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship>shipsToLoot, MBReadOnlyList<MapEventParty>winnerParties)` | 方法 |
| `GetAITradePenalty` | `public override float GetAITradePenalty()` | 方法 |
| `GetBannerLootChanceFromDefeatedHero` | `public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)` | 方法 |
| `GetBannerRewardForWinningMapEvent` | `public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)` | 方法 |
| `GetExpectedLootedItemValueFromCasualty` | `public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)` | 方法 |
| `GetFigureheadLoot` | `public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty>defeatedParties, PartyBase defeatedSideLeaderParty)` | 方法 |
| `float>>GetLootCasualtyChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootCasualtyChances(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty)` | 方法 |
| `GetLootedItemFromTroop` | `public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)` | 方法 |
| `float>>GetLootGoldChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootGoldChances(MBReadOnlyList<MapEventParty>winnerParties)` | 方法 |
| `float>>GetLootItemChancesForWinnerParties` | `public override MBList<KeyValuePair<MapEventParty, float>>GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty>winnerParties, PartyBase defeatedParty)` | 方法 |
| `GetCaptureMemberChancesForWinnerParties` | `public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty>winnerParties, out MBList<KeyValuePair<MapEventParty, float>>woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>>healthyMemberChances)` | 方法 |
| `float>>GetLootPrisonerChances` | `public override MBReadOnlyList<KeyValuePair<MapEventParty, float>>GetLootPrisonerChances(MBReadOnlyList<MapEventParty>winnerParties, TroopRosterElement prisonerElement)` | 方法 |
| `GetMainPartyMemberScatterChance` | `public override float GetMainPartyMemberScatterChance()` | 方法 |
| `GetPlayerGainedRelationAmount` | `public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)` | 方法 |
| `GetShipSiegeEngineHitMoraleEffect` | `public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)` | 方法 |
| `GetSunkenShipMoraleEffect` | `public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)` | 方法 |
| `MBReadOnlyList` | `public override MBReadOnlyList<MapEventParty>GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty>winnerParties)` | 方法 |
| `CanTroopBeTakenPrisoner` | `public override bool CanTroopBeTakenPrisoner(CharacterObject troop)` | 方法 |

## 参见

- [↑ storymode 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [同命名空间 StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [同命名空间 StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [同命名空间 StoryModeCombatXpModel](../StoryModeCombatXpModel)
