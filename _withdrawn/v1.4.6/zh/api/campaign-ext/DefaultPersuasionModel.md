---
title: "DefaultPersuasionModel"
description: "DefaultPersuasionModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 PersuasionModel；公开成员 7 个（方法 7、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPersuasionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPersuasionModel : PersuasionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultPersuasionModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs。它是一个 public 类，实现/继承 PersuasionModel，继承链为 DefaultPersuasionModel → PersuasionModel → MBGameModel → GameModel。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultPersuasionModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultPersuasionModel → PersuasionModel → MBGameModel → GameModel。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSkillXpFromPersuasion` | `public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient)` | 方法 |
| `GetChances` | `public override void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier)` | 方法 |
| `GetEffectChances` | `public override void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier)` | 方法 |
| `GetArgumentStrengthBasedOnTargetTraits` | `public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int>[]traitCorrelations)` | 方法 |
| `CalculateInitialPersuasionProgress` | `public override float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue)` | 方法 |
| `CalculatePersuasionGoalValue` | `public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue)` | 方法 |
| `GetDifficulty` | `public override float GetDifficulty(PersuasionDifficulty difficulty)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PersuasionModel](../PersuasionModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
