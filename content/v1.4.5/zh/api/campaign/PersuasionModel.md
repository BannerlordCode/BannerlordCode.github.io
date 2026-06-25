---
title: "PersuasionModel"
description: "PersuasionModel 的自动生成类参考。"
---
# PersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel>`
**Base:** `MBGameModel<PersuasionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PersuasionModel.cs`

## 概述

`PersuasionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PersuasionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSkillXpFromPersuasion
`public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 skill xp from persuasion 的结果。

```csharp
// 先通过子系统 API 拿到 PersuasionModel 实例
PersuasionModel persuasionModel = ...;
var result = persuasionModel.GetSkillXpFromPersuasion(difficulty, 0);
```

### GetChances
`public abstract void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 chances 的结果。

```csharp
// 先通过子系统 API 拿到 PersuasionModel 实例
PersuasionModel persuasionModel = ...;
persuasionModel.GetChances(optionArgs, successChance, critSuccessChance, critFailChance, failChance, 0);
```

### GetEffectChances
`public abstract void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 effect chances 的结果。

```csharp
// 先通过子系统 API 拿到 PersuasionModel 实例
PersuasionModel persuasionModel = ...;
persuasionModel.GetEffectChances(option, moveToNextStageChance, blockRandomOptionChance, 0);
```

### GetArgumentStrengthBasedOnTargetTraits
`public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelation)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 argument strength based on target traits 的结果。

```csharp
// 先通过子系统 API 拿到 PersuasionModel 实例
PersuasionModel persuasionModel = ...;
var result = persuasionModel.GetArgumentStrengthBasedOnTargetTraits(character, tuple<TraitObject, 0);
```

### GetDifficulty
`public abstract float GetDifficulty(PersuasionDifficulty difficulty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 difficulty 的结果。

```csharp
// 先通过子系统 API 拿到 PersuasionModel 实例
PersuasionModel persuasionModel = ...;
var result = persuasionModel.GetDifficulty(difficulty);
```

### CalculateInitialPersuasionProgress
`public abstract float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)`

**用途 / Purpose:** **用途 / Purpose:** 计算initial persuasion progress的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PersuasionModel 实例
PersuasionModel persuasionModel = ...;
var result = persuasionModel.CalculateInitialPersuasionProgress(character, 0, 0);
```

### CalculatePersuasionGoalValue
`public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)`

**用途 / Purpose:** **用途 / Purpose:** 计算persuasion goal value的当前值或结果。

```csharp
// 先通过子系统 API 拿到 PersuasionModel 实例
PersuasionModel persuasionModel = ...;
var result = persuasionModel.CalculatePersuasionGoalValue(oneToOneConversationCharacter, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PersuasionModel instance = ...;
```

## 参见

- [本区域目录](../)