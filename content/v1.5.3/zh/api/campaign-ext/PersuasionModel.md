---
title: "PersuasionModel"
description: "PersuasionModel 的自动生成类参考。"
---
# PersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel> `
**Base:** MBGameModel<PersuasionModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs

## 概述

`PersuasionModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSkillXpFromPersuasion
`public abstract int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty,int argumentDifficultyBonusCoefficient)`

### GetChances
`public abstract void GetChances(PersuasionOptionArgs optionArgs,out float successChance,out float critSuccessChance,out float critFailChance,out float failChance,float difficultyMultiplier)`

### GetEffectChances
`public abstract void GetEffectChances(PersuasionOptionArgs option,out float moveToNextStageChance,out float blockRandomOptionChance,float difficultyMultiplier)`

### GetArgumentStrengthBasedOnTargetTraits
`public abstract PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character,Tuple<TraitObject,int>[] traitCorrelation)`

### GetDifficulty
`public abstract float GetDifficulty(PersuasionDifficulty difficulty)`

### CalculateInitialPersuasionProgress
`public abstract float CalculateInitialPersuasionProgress(CharacterObject character,float goalValue,float successValue)`

### CalculatePersuasionGoalValue
`public abstract float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter,float successValue)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
