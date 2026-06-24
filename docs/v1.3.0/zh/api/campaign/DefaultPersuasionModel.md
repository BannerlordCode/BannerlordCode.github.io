<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPersuasionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `skill xp from persuasion` 的当前值。

### GetChances
`public override void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)`

**用途 / Purpose:** 获取 `chances` 的当前值。

### GetEffectChances
`public override void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)`

**用途 / Purpose:** 获取 `effect chances` 的当前值。

### GetArgumentStrengthBasedOnTargetTraits
`public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int> traitCorrelations)`

**用途 / Purpose:** 获取 `argument strength based on target traits` 的当前值。

### CalculateInitialPersuasionProgress
`public override float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)`

**用途 / Purpose:** 处理 `calculate initial persuasion progress` 相关逻辑。

### CalculatePersuasionGoalValue
`public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)`

**用途 / Purpose:** 处理 `calculate persuasion goal value` 相关逻辑。

### GetDifficulty
`public override float GetDifficulty(PersuasionDifficulty difficulty)`

**用途 / Purpose:** 获取 `difficulty` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultPersuasionModel>(new MyDefaultPersuasionModel());
```

## 参见

- [完整类目录](../catalog)