---
title: "StoryModeBattleRewardModel"
description: "StoryModeBattleRewardModel 的自动生成类参考。"
---
# StoryModeBattleRewardModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeBattleRewardModel.cs`

## 概述

`StoryModeBattleRewardModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeBattleRewardModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**用途 / Purpose:** **用途 / Purpose:** 计算gold loss after defeat的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions)`

**用途 / Purpose:** **用途 / Purpose:** 计算influence gain的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateInfluenceGain(winnerParty, 0, 0, 0, false);
```

### CalculateMoraleChangeOnRoundVictory
`public override float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)`

**用途 / Purpose:** **用途 / Purpose:** 计算morale change on round victory的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions)`

**用途 / Purpose:** **用途 / Purpose:** 计算morale gain victory的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateMoraleGainVictory(winnerParty, 0, 0, false);
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**用途 / Purpose:** **用途 / Purpose:** 计算plundered gold amount from defeated party的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)`

**用途 / Purpose:** **用途 / Purpose:** 计算renown gain的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateRenownGain(winnerParty, 0, 0, 0, false);
```

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**用途 / Purpose:** **用途 / Purpose:** 计算ship damage after defeat的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DistributeDefeatedPartyShipsAmongWinners 对应的操作。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.DistributeDefeatedPartyShipsAmongWinners(mapEvent, shipsToLoot, winnerParties);
```

### GetAITradePenalty
`public override float GetAITradePenalty()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 a i trade penalty 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetAITradePenalty();
```

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 banner loot chance from defeated hero 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 banner reward for winning map event 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 expected looted item value from casualty 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 figurehead loot 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 loot casualty chances 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 looted item from troop 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 loot gold chances 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootGoldChances(winnerParties);
```

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 loot item chances for winner parties 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetCaptureMemberChancesForWinnerParties
`public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty> winnerParties, out MBList<KeyValuePair<MapEventParty, float>> woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>> healthyMemberChances)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 capture member chances for winner parties 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
storyModeBattleRewardModel.GetCaptureMemberChancesForWinnerParties(endedMapEvent, winnerParties, mBList<KeyValuePair<MapEventParty, 0, mBList<KeyValuePair<MapEventParty, 0);
```

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 loot prisoner chances 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 main party member scatter chance 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetMainPartyMemberScatterChance();
```

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 player gained relation amount 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ship siege engine hit morale effect 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 sunken ship morale effect 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 winner parties that can plunder gold from ships 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.GetWinnerPartiesThatCanPlunderGoldFromShips(winnerParties);
```

### CanTroopBeTakenPrisoner
`public override bool CanTroopBeTakenPrisoner(CharacterObject troop)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 troop be taken prisoner 的前置条件。

```csharp
// 先通过子系统 API 拿到 StoryModeBattleRewardModel 实例
StoryModeBattleRewardModel storyModeBattleRewardModel = ...;
var result = storyModeBattleRewardModel.CanTroopBeTakenPrisoner(troop);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeBattleRewardModel>(new MyStoryModeBattleRewardModel());
```

## 参见

- [本区域目录](../)