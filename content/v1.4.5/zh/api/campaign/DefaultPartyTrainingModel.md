---
title: "DefaultPartyTrainingModel"
description: "DefaultPartyTrainingModel 的自动生成类参考。"
---
# DefaultPartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyTrainingModel : PartyTrainingModel`
**Base:** `PartyTrainingModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTrainingModel.cs`

## 概述

`DefaultPartyTrainingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPartyTrainingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetXpReward
`public override int GetXpReward(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 「xp reward」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTrainingModel 实例
DefaultPartyTrainingModel defaultPartyTrainingModel = ...;
var result = defaultPartyTrainingModel.GetXpReward(character);
```

### GetEffectiveDailyExperience
`public override ExplainedNumber GetEffectiveDailyExperience(MobileParty mobileParty, TroopRosterElement troop)`

**用途 / Purpose:** 读取并返回当前对象中 「effective daily experience」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTrainingModel 实例
DefaultPartyTrainingModel defaultPartyTrainingModel = ...;
var result = defaultPartyTrainingModel.GetEffectiveDailyExperience(mobileParty, troop);
```

### GenerateSharedXp
`public override int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

**用途 / Purpose:** 生成「shared xp」的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTrainingModel 实例
DefaultPartyTrainingModel defaultPartyTrainingModel = ...;
var result = defaultPartyTrainingModel.GenerateSharedXp(troop, 0, mobileParty);
```

### CalculateXpGainFromBattles
`public override ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

**用途 / Purpose:** 计算「xp gain from battles」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPartyTrainingModel 实例
DefaultPartyTrainingModel defaultPartyTrainingModel = ...;
var result = defaultPartyTrainingModel.CalculateXpGainFromBattles(troopRosterElement, party);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPartyTrainingModel>(new MyDefaultPartyTrainingModel());
```

## 参见

- [本区域目录](../)