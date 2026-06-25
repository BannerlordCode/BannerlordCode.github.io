---
title: "PartyTrainingModel"
description: "PartyTrainingModel 的自动生成类参考。"
---
# PartyTrainingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTrainingModel : MBGameModel<PartyTrainingModel>`
**Base:** `MBGameModel<PartyTrainingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTrainingModel.cs`

## 概述

`PartyTrainingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyTrainingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GenerateSharedXp
`public abstract int GenerateSharedXp(CharacterObject troop, int xp, MobileParty mobileParty)`

**用途 / Purpose:** 生成shared xp的实例、数据或表示。

```csharp
// 先通过子系统 API 拿到 PartyTrainingModel 实例
PartyTrainingModel partyTrainingModel = ...;
var result = partyTrainingModel.GenerateSharedXp(troop, 0, mobileParty);
```

### CalculateXpGainFromBattles
`public abstract ExplainedNumber CalculateXpGainFromBattles(FlattenedTroopRosterElement troopRosterElement, PartyBase party)`

**用途 / Purpose:** 计算xp gain from battles的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PartyTrainingModel 实例
PartyTrainingModel partyTrainingModel = ...;
var result = partyTrainingModel.CalculateXpGainFromBattles(troopRosterElement, party);
```

### GetXpReward
`public abstract int GetXpReward(CharacterObject character)`

**用途 / Purpose:** 读取并返回当前对象中 xp reward 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTrainingModel 实例
PartyTrainingModel partyTrainingModel = ...;
var result = partyTrainingModel.GetXpReward(character);
```

### GetEffectiveDailyExperience
`public abstract ExplainedNumber GetEffectiveDailyExperience(MobileParty party, TroopRosterElement troop)`

**用途 / Purpose:** 读取并返回当前对象中 effective daily experience 的结果。

```csharp
// 先通过子系统 API 拿到 PartyTrainingModel 实例
PartyTrainingModel partyTrainingModel = ...;
var result = partyTrainingModel.GetEffectiveDailyExperience(party, troop);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyTrainingModel instance = ...;
```

## 参见

- [本区域目录](../)