---
title: "PersuasionModel"
description: "PersuasionModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<PersuasionModel>；公开成员 7 个（方法 7、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs。"
---
# PersuasionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs`

## 概述

PersuasionModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<PersuasionModel>，继承链为 PersuasionModel → MBGameModel。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PersuasionModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 PersuasionModel → MBGameModel。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSkillXpFromPersuasion` | `public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty, int argumentDifficultyBonusCoefficient);` | 方法 |
| `GetChances` | `public abstract void GetChances(PersuasionOptionArgs optionArgs, out float successChance, out float critSuccessChance, out float critFailChance, out float failChance, float difficultyMultiplier);` | 方法 |
| `GetEffectChances` | `public abstract void GetEffectChances(PersuasionOptionArgs option, out float moveToNextStageChance, out float blockRandomOptionChance, float difficultyMultiplier);` | 方法 |
| `GetArgumentStrengthBasedOnTargetTraits` | `public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character, Tuple<TraitObject, int>[]traitCorrelation);` | 方法 |
| `GetDifficulty` | `public abstract float GetDifficulty(PersuasionDifficulty difficulty);` | 方法 |
| `CalculateInitialPersuasionProgress` | `public abstract float CalculateInitialPersuasionProgress(CharacterObject character, float goalValue, float successValue);` | 方法 |
| `CalculatePersuasionGoalValue` | `public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter, float successValue);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
