---
title: "StoryModeBattleRewardModel"
description: "StoryModeBattleRewardModel 的自动生成类参考。"
---
# StoryModeBattleRewardModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `StoryMode/GameComponents/StoryModeBattleRewardModel.cs`

## 概述

`StoryModeBattleRewardModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeBattleRewardModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**用途 / Purpose:** 计算gold loss after defeat的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**用途 / Purpose:** 计算influence gain的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateInfluenceGain(party, 0, 0);
```

### CalculateMoraleChangeOnRoundVictory
`public override ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, BattleSideEnum partySide, BattleSideEnum roundWinner)`

**用途 / Purpose:** 计算morale change on round victory的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**用途 / Purpose:** 计算morale gain victory的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleGainVictory(party, 0, 0, battle);
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**用途 / Purpose:** 计算plundered gold amount from defeated party的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**用途 / Purpose:** 计算renown gain的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateRenownGain(party, 0, 0);
```

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**用途 / Purpose:** 计算ship damage after defeat的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 调用 DistributeDefeatedPartyShipsAmongWinners 对应的操作。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.DistributeDefeatedPartyShipsAmongWinners(shipsToLoot, winnerParties);
```

### GetAITradePenalty
`public override float GetAITradePenalty()`

**用途 / Purpose:** 读取并返回当前对象中 a i trade penalty 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetAITradePenalty();
```

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**用途 / Purpose:** 读取并返回当前对象中 banner loot chance from defeated hero 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 banner reward for winning map event 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 expected looted item value from casualty 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**用途 / Purpose:** 读取并返回当前对象中 figurehead loot 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 读取并返回当前对象中 loot casualty chances 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**用途 / Purpose:** 读取并返回当前对象中 looted item from troop 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 读取并返回当前对象中 loot gold chances 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootGoldChances(winnerParties);
```

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 读取并返回当前对象中 loot item chances for winner parties 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetLootMemberChancesForWinnerParties
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 读取并返回当前对象中 loot member chances for winner parties 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootMemberChancesForWinnerParties(winnerParties);
```

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**用途 / Purpose:** 读取并返回当前对象中 loot prisoner chances 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**用途 / Purpose:** 读取并返回当前对象中 main party member scatter chance 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetMainPartyMemberScatterChance();
```

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 player gained relation amount 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 读取并返回当前对象中 ship siege engine hit morale effect 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 sunken ship morale effect 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeBattleRewardModel>(new MyStoryModeBattleRewardModel());
```

## 参见

- [本区域目录](../)