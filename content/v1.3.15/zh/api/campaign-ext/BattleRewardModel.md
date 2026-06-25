---
title: "BattleRewardModel"
description: "BattleRewardModel 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「banner loot chance from defeated hero」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public abstract ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「banner reward for winning map event」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetPlayerGainedRelationAmount
`public abstract int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「player gained relation amount」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### CalculateRenownGain
`public abstract ExplainedNumber CalculateRenownGain(PartyBase party, float renownValueOfBattle, float contributionShare)`

**用途 / Purpose:** 计算「renown gain」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateRenownGain(party, 0, 0);
```

### CalculateInfluenceGain
`public abstract ExplainedNumber CalculateInfluenceGain(PartyBase party, float influenceValueOfBattle, float contributionShare)`

**用途 / Purpose:** 计算「influence gain」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateInfluenceGain(party, 0, 0);
```

### CalculateMoraleGainVictory
`public abstract ExplainedNumber CalculateMoraleGainVictory(PartyBase party, float renownValueOfBattle, float contributionShare, MapEvent battle)`

**用途 / Purpose:** 计算「morale gain victory」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateMoraleGainVictory(party, 0, 0, battle);
```

### CalculateMoraleChangeOnRoundVictory
`public abstract ExplainedNumber CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)`

**用途 / Purpose:** 计算「morale change on round victory」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### CalculateGoldLossAfterDefeat
`public abstract int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**用途 / Purpose:** 计算「gold loss after defeat」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### GetLootedItemFromTroop
`public abstract EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**用途 / Purpose:** 读取并返回当前对象中 「looted item from troop」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetExpectedLootedItemValueFromCasualty
`public abstract float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 「expected looted item value from casualty」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public abstract int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**用途 / Purpose:** 计算「plundered gold amount from defeated party」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### GetLootGoldChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 读取并返回当前对象中 「loot gold chances」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootGoldChances(winnerParties);
```

### GetMainPartyMemberScatterChance
`public abstract float GetMainPartyMemberScatterChance()`

**用途 / Purpose:** 读取并返回当前对象中 「main party member scatter chance」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetMainPartyMemberScatterChance();
```

### GetAITradePenalty
`public abstract float GetAITradePenalty()`

**用途 / Purpose:** 读取并返回当前对象中 「a i trade penalty」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetAITradePenalty();
```

### GetLootMemberChancesForWinnerParties
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootMemberChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 读取并返回当前对象中 「loot member chances for winner parties」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootMemberChancesForWinnerParties(winnerParties);
```

### GetLootPrisonerChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**用途 / Purpose:** 读取并返回当前对象中 「loot prisoner chances」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetLootItemChancesForWinnerParties
`public abstract MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 读取并返回当前对象中 「loot item chances for winner parties」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetLootCasualtyChances
`public abstract MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 读取并返回当前对象中 「loot casualty chances」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### CalculateShipDamageAfterDefeat
`public abstract float CalculateShipDamageAfterDefeat(Ship ship)`

**用途 / Purpose:** 计算「ship damage after defeat」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public abstract MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.DistributeDefeatedPartyShipsAmongWinners(mapEvent, shipsToLoot, winnerParties);
```

### GetSunkenShipMoraleEffect
`public abstract float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 「sunken ship morale effect」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

### GetShipSiegeEngineHitMoraleEffect
`public abstract float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 读取并返回当前对象中 「ship siege engine hit morale effect」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetFigureheadLoot
`public abstract Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**用途 / Purpose:** 读取并返回当前对象中 「figurehead loot」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public abstract MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 读取并返回当前对象中 「winner parties that can plunder gold from ships」 的结果。

```csharp
// 先通过子系统 API 拿到 BattleRewardModel 实例
BattleRewardModel battleRewardModel = ...;
var result = battleRewardModel.GetWinnerPartiesThatCanPlunderGoldFromShips(winnerParties);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BattleRewardModel instance = ...;
```

## 参见

- [本区域目录](../)