---
title: "DefaultBattleRewardModel"
description: "DefaultBattleRewardModel 的自动生成类参考。"
---
# DefaultBattleRewardModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBattleRewardModel.cs`

## 概述

`DefaultBattleRewardModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBattleRewardModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetPlayerGainedRelationAmount
`public override int GetPlayerGainedRelationAmount(MapEvent mapEvent, Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「player gained relation amount」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetPlayerGainedRelationAmount(mapEvent, hero);
```

### CalculateRenownGain
`public override ExplainedNumber CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)`

**用途 / Purpose:** 计算「renown gain」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateRenownGain(winnerParty, 0, 0, 0, false);
```

### CalculateInfluenceGain
`public override ExplainedNumber CalculateInfluenceGain(PartyBase winnerParty, float influenceValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float influenceMultiplierForWinnerSide, bool includeDescriptions)`

**用途 / Purpose:** 计算「influence gain」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateInfluenceGain(winnerParty, 0, 0, 0, false);
```

### CalculateMoraleGainVictory
`public override ExplainedNumber CalculateMoraleGainVictory(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, bool includeDescriptions)`

**用途 / Purpose:** 计算「morale gain victory」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateMoraleGainVictory(winnerParty, 0, 0, false);
```

### CalculateGoldLossAfterDefeat
`public override int CalculateGoldLossAfterDefeat(Hero partyLeaderHero)`

**用途 / Purpose:** 计算「gold loss after defeat」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateGoldLossAfterDefeat(partyLeaderHero);
```

### GetLootedItemFromTroop
`public override EquipmentElement GetLootedItemFromTroop(CharacterObject character, float targetValue)`

**用途 / Purpose:** 读取并返回当前对象中 「looted item from troop」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootedItemFromTroop(character, 0);
```

### GetExpectedLootedItemValueFromCasualty
`public override float GetExpectedLootedItemValueFromCasualty(Hero winnerPartyLeaderHero, CharacterObject casualtyCharacter)`

**用途 / Purpose:** 读取并返回当前对象中 「expected looted item value from casualty」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetExpectedLootedItemValueFromCasualty(winnerPartyLeaderHero, casualtyCharacter);
```

### GetAITradePenalty
`public override float GetAITradePenalty()`

**用途 / Purpose:** 读取并返回当前对象中 「a i trade penalty」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetAITradePenalty();
```

### GetMainPartyMemberScatterChance
`public override float GetMainPartyMemberScatterChance()`

**用途 / Purpose:** 读取并返回当前对象中 「main party member scatter chance」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetMainPartyMemberScatterChance();
```

### CalculatePlunderedGoldAmountFromDefeatedParty
`public override int CalculatePlunderedGoldAmountFromDefeatedParty(PartyBase defeatedParty)`

**用途 / Purpose:** 计算「plundered gold amount from defeated party」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculatePlunderedGoldAmountFromDefeatedParty(defeatedParty);
```

### GetLootGoldChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootGoldChances(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 读取并返回当前对象中 「loot gold chances」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootGoldChances(winnerParties);
```

### GetCaptureMemberChancesForWinnerParties
`public override void GetCaptureMemberChancesForWinnerParties(MapEvent endedMapEvent, MBReadOnlyList<MapEventParty> winnerParties, out MBList<KeyValuePair<MapEventParty, float>> woundedMemberChances, out MBList<KeyValuePair<MapEventParty, float>> healthyMemberChances)`

**用途 / Purpose:** 读取并返回当前对象中 「capture member chances for winner parties」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
defaultBattleRewardModel.GetCaptureMemberChancesForWinnerParties(endedMapEvent, winnerParties, mBList<KeyValuePair<MapEventParty, 0, mBList<KeyValuePair<MapEventParty, 0);
```

### GetLootPrisonerChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`

**用途 / Purpose:** 读取并返回当前对象中 「loot prisoner chances」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootPrisonerChances(winnerParties, prisonerElement);
```

### GetLootItemChancesForWinnerParties
`public override MBList<KeyValuePair<MapEventParty, float>> GetLootItemChancesForWinnerParties(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 读取并返回当前对象中 「loot item chances for winner parties」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootItemChancesForWinnerParties(winnerParties, defeatedParty);
```

### GetLootCasualtyChances
`public override MBReadOnlyList<KeyValuePair<MapEventParty, float>> GetLootCasualtyChances(MBReadOnlyList<MapEventParty> winnerParties, PartyBase defeatedParty)`

**用途 / Purpose:** 读取并返回当前对象中 「loot casualty chances」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetLootCasualtyChances(winnerParties, defeatedParty);
```

### CalculateShipDamageAfterDefeat
`public override float CalculateShipDamageAfterDefeat(Ship ship)`

**用途 / Purpose:** 计算「ship damage after defeat」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateShipDamageAfterDefeat(ship);
```

### DistributeDefeatedPartyShipsAmongWinners
`public override MBReadOnlyList<KeyValuePair<Ship, MapEventParty>> DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 处理与 「distribute defeated party ships among winners」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.DistributeDefeatedPartyShipsAmongWinners(mapEvent, shipsToLoot, winnerParties);
```

### GetBannerLootChanceFromDefeatedHero
`public override float GetBannerLootChanceFromDefeatedHero(Hero defeatedHero)`

**用途 / Purpose:** 读取并返回当前对象中 「banner loot chance from defeated hero」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetBannerLootChanceFromDefeatedHero(defeatedHero);
```

### GetBannerRewardForWinningMapEvent
`public override ItemObject GetBannerRewardForWinningMapEvent(MapEvent mapEvent)`

**用途 / Purpose:** 读取并返回当前对象中 「banner reward for winning map event」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetBannerRewardForWinningMapEvent(mapEvent);
```

### GetSunkenShipMoraleEffect
`public override float GetSunkenShipMoraleEffect(PartyBase shipOwner, Ship ship)`

**用途 / Purpose:** 读取并返回当前对象中 「sunken ship morale effect」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetSunkenShipMoraleEffect(shipOwner, ship);
```

### CalculateMoraleChangeOnRoundVictory
`public override float CalculateMoraleChangeOnRoundVictory(PartyBase party, MapEventSide partySide, BattleSideEnum roundWinner)`

**用途 / Purpose:** 计算「morale change on round victory」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CalculateMoraleChangeOnRoundVictory(party, partySide, roundWinner);
```

### GetShipSiegeEngineHitMoraleEffect
`public override float GetShipSiegeEngineHitMoraleEffect(Ship ship, SiegeEngineType siegeEngineType)`

**用途 / Purpose:** 读取并返回当前对象中 「ship siege engine hit morale effect」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetShipSiegeEngineHitMoraleEffect(ship, siegeEngineType);
```

### GetFigureheadLoot
`public override Figurehead GetFigureheadLoot(MBReadOnlyList<MapEventParty> defeatedParties, PartyBase defeatedSideLeaderParty)`

**用途 / Purpose:** 读取并返回当前对象中 「figurehead loot」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetFigureheadLoot(defeatedParties, defeatedSideLeaderParty);
```

### GetWinnerPartiesThatCanPlunderGoldFromShips
`public override MBReadOnlyList<MapEventParty> GetWinnerPartiesThatCanPlunderGoldFromShips(MBReadOnlyList<MapEventParty> winnerParties)`

**用途 / Purpose:** 读取并返回当前对象中 「winner parties that can plunder gold from ships」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.GetWinnerPartiesThatCanPlunderGoldFromShips(winnerParties);
```

### CanTroopBeTakenPrisoner
`public override bool CanTroopBeTakenPrisoner(CharacterObject troop)`

**用途 / Purpose:** 检查当前对象是否满足 「troop be taken prisoner」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultBattleRewardModel 实例
DefaultBattleRewardModel defaultBattleRewardModel = ...;
var result = defaultBattleRewardModel.CanTroopBeTakenPrisoner(troop);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBattleRewardModel>(new MyDefaultBattleRewardModel());
```

## 参见

- [本区域目录](../)