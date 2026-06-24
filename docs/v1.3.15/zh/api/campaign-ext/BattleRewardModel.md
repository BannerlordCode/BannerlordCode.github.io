<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BattleRewardModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BattleRewardModel : MBGameModel<BattleRewardModel>`
**Base:** `MBGameModel<BattleRewardModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BattleRewardModel.cs`

## 概述

`BattleRewardModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BattleRewardModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetBannerLootChanceFromDefeatedHero
`public abstract float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**用途 / Purpose:** 获取 `banner loot chance from defeated hero` 的当前值。

### GetBannerRewardForWinningMapEvent
`public abstract ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**用途 / Purpose:** 获取 `banner reward for winning map event` 的当前值。

### GetPlayerGainedRelationAmount
`public abstract int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**用途 / Purpose:** 获取 `player gained relation amount` 的当前值。

### CalculateRenownGain
`public abstract ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**用途 / Purpose:** 处理 `calculate renown gain` 相关逻辑。

### CalculateInfluenceGain
`public abstract ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**用途 / Purpose:** 处理 `calculate influence gain` 相关逻辑。

### CalculateMoraleGainVictory
`public abstract ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**用途 / Purpose:** 处理 `calculate morale gain victory` 相关逻辑。

### CalculateMoraleChangeOnRoundVictory
`public abstract ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)`

**用途 / Purpose:** 处理 `calculate morale change on round victory` 相关逻辑。

### CalculateGoldLossAfterDefeat
`public abstract int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**用途 / Purpose:** 处理 `calculate gold loss after defeat` 相关逻辑。

### GetLootedItemFromTroop
`public abstract EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**用途 / Purpose:** 获取 `looted item from troop` 的当前值。

### GetExpectedLootedItemValueFromCasualty
`public abstract float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**用途 / Purpose:** 获取 `expected looted item value from casualty` 的当前值。

### CalculatePlunderedGoldAmountFromDefeatedParty
`public abstract int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**用途 / Purpose:** 处理 `calculate plundered gold amount from defeated party` 相关逻辑。

### GetLootGoldChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 获取 `loot gold chances` 的当前值。

### GetMainPartyMemberScatterChance
`public abstract float GetMainPartyMemberScatterChance()`

**用途 / Purpose:** 获取 `main party member scatter chance` 的当前值。

### GetAITradePenalty
`public abstract float GetAITradePenalty()`

**用途 / Purpose:** 获取 `a i trade penalty` 的当前值。

### GetLootMemberChancesForWinnerParties
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 获取 `loot member chances for winner parties` 的当前值。

### GetLootPrisonerChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**用途 / Purpose:** 获取 `loot prisoner chances` 的当前值。

### GetLootItemChancesForWinnerParties
`public abstract MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 获取 `loot item chances for winner parties` 的当前值。

### GetLootCasualtyChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 获取 `loot casualty chances` 的当前值。

### CalculateShipDamageAfterDefeat
`public abstract float CalculateShipDamageAfterDefeat(Ship ship)`

**用途 / Purpose:** 处理 `calculate ship damage after defeat` 相关逻辑。

### DistributeDefeatedPartyShipsAmongWinners
`public abstract MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 处理 `distribute defeated party ships among winners` 相关逻辑。

### GetSunkenShipMoraleEffect
`public abstract float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**用途 / Purpose:** 获取 `sunken ship morale effect` 的当前值。

### GetShipSiegeEngineHitMoraleEffect
`public abstract float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 获取 `ship siege engine hit morale effect` 的当前值。

### GetFigureheadLoot
`public abstract Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**用途 / Purpose:** 获取 `figurehead loot` 的当前值。

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public abstract MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 获取 `winner parties that can plunder gold from ships` 的当前值。

## 使用示例

```csharp
var implementation = new CustomBattleRewardModel();
```

## 参见

- [完整类目录](../catalog)