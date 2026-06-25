---
title: "DefaultPersuasionModel"
description: "DefaultPersuasionModel 的自动生成类参考。"
---
# DefaultPersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPersuasionModel : PersuasionModel`
**Base:** `PersuasionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs`

## 概述

`DefaultPersuasionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultPersuasionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSkillXpFromPersuasion
`public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill xp from persuasion 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPersuasionModel 实例
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.GetSkillXpFromPersuasion(difficulty, 0);
```

### GetChances
`public override void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 chances 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPersuasionModel 实例
DefaultPersuasionModel defaultPersuasionModel = ...;
defaultPersuasionModel.GetChances(optionArgs, successChance, critSuccessChance, critFailChance, failChance, 0);
```

### GetEffectChances
`public override void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effect chances 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPersuasionModel 实例
DefaultPersuasionModel defaultPersuasionModel = ...;
defaultPersuasionModel.GetEffectChances(option, moveToNextStageChance, blockRandomOptionChance, 0);
```

### GetArgumentStrengthBasedOnTargetTraits
`public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelations)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 argument strength based on target traits 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPersuasionModel 实例
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.GetArgumentStrengthBasedOnTargetTraits(character, tuple<TraitObject, 0);
```

### CalculateInitialPersuasionProgress
`public override float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)`

**用途 / Purpose:** **用途 / Purpose:** 计算initial persuasion progress的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPersuasionModel 实例
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.CalculateInitialPersuasionProgress(character, 0, 0);
```

### CalculatePersuasionGoalValue
`public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)`

**用途 / Purpose:** **用途 / Purpose:** 计算persuasion goal value的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultPersuasionModel 实例
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.CalculatePersuasionGoalValue(oneToOneConversationCharacter, 0);
```

### GetDifficulty
`public override float GetDifficulty(PersuasionDifficulty difficulty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultPersuasionModel 实例
DefaultPersuasionModel defaultPersuasionModel = ...;
var result = defaultPersuasionModel.GetDifficulty(difficulty);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPersuasionModel>(new MyDefaultPersuasionModel());
```

## 参见

- [本区域目录](../)