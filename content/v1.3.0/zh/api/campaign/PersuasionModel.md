---
title: "PersuasionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PersuasionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# PersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel>`
**Base:** `MBGameModel<PersuasionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs`

## 概述

`PersuasionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PersuasionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetSkillXpFromPersuasion
`public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)`

**用途 / Purpose:** 获取 `skill xp from persuasion` 的当前值。

### GetChances
`public abstract void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)`

**用途 / Purpose:** 获取 `chances` 的当前值。

### GetEffectChances
`public abstract void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)`

**用途 / Purpose:** 获取 `effect chances` 的当前值。

### GetArgumentStrengthBasedOnTargetTraits
`public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelation)`

**用途 / Purpose:** 获取 `argument strength based on target traits` 的当前值。

### GetDifficulty
`public abstract float GetDifficulty(PersuasionDifficulty difficulty)`

**用途 / Purpose:** 获取 `difficulty` 的当前值。

### CalculateInitialPersuasionProgress
`public abstract float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)`

**用途 / Purpose:** 处理 `calculate initial persuasion progress` 相关逻辑。

### CalculatePersuasionGoalValue
`public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)`

**用途 / Purpose:** 处理 `calculate persuasion goal value` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomPersuasionModel();
```

## 参见

- [完整类目录](../catalog)