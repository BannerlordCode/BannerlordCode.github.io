---
title: "DefaultBattleRewardModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultBattleRewardModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultBattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBattleRewardModel.cs`

## 概述

`DefaultBattleRewardModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBattleRewardModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**用途 / Purpose:** 获取 `player gained relation amount` 的当前值。

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)`

**用途 / Purpose:** 处理 `calculate renown gain` 相关逻辑。

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions)`

**用途 / Purpose:** 处理 `calculate influence gain` 相关逻辑。

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions)`

**用途 / Purpose:** 处理 `calculate morale gain victory` 相关逻辑。

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**用途 / Purpose:** 处理 `calculate gold loss after defeat` 相关逻辑。

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**用途 / Purpose:** 获取 `looted item from troop` 的当前值。

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**用途 / Purpose:** 获取 `expected looted item value from casualty` 的当前值。

### GetAITradePenalty
`public override float GetAITradePenalty()`

**用途 / Purpose:** 获取 `a i trade penalty` 的当前值。

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**用途 / Purpose:** 获取 `main party member scatter chance` 的当前值。

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**用途 / Purpose:** 处理 `calculate plundered gold amount from defeated party` 相关逻辑。

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 获取 `loot gold chances` 的当前值。

### GetCaptureMemberChancesForWinnerParties
`public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty> winnerParties, out MBList<KeyValuePair<MapEventParty, float>> woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>> healthyMemberChances)`

**用途 / Purpose:** 获取 `capture member chances for winner parties` 的当前值。

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**用途 / Purpose:** 获取 `loot prisoner chances` 的当前值。

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 获取 `loot item chances for winner parties` 的当前值。

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 获取 `loot casualty chances` 的当前值。

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**用途 / Purpose:** 处理 `calculate ship damage after defeat` 相关逻辑。

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 处理 `distribute defeated party ships among winners` 相关逻辑。

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**用途 / Purpose:** 获取 `banner loot chance from defeated hero` 的当前值。

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**用途 / Purpose:** 获取 `banner reward for winning map event` 的当前值。

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**用途 / Purpose:** 获取 `sunken ship morale effect` 的当前值。

### CalculateMoraleChangeOnRoundVictory
`public override float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)`

**用途 / Purpose:** 处理 `calculate morale change on round victory` 相关逻辑。

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 获取 `ship siege engine hit morale effect` 的当前值。

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**用途 / Purpose:** 获取 `figurehead loot` 的当前值。

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 获取 `winner parties that can plunder gold from ships` 的当前值。

### CanTroopBeTakenPrisoner
`public override bool CanTroopBeTakenPrisoner(CharacterObject troop)`

**用途 / Purpose:** 判断当前对象是否可以执行 `troop be taken prisoner`。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBattleRewardModel>(new MyDefaultBattleRewardModel());
```

## 参见

- [完整类目录](../catalog)