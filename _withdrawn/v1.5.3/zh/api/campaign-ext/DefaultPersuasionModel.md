---
title: "DefaultPersuasionModel"
description: "DefaultPersuasionModel 的自动生成类参考。"
---
# DefaultPersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPersuasionModel : PersuasionModel `
**Base:** PersuasionModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs

## 概述

`DefaultPersuasionModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSkillXpFromPersuasion
`public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty,int argumentDifficultyBonusCoefficient) `

### GetChances
`public override void GetChances(PersuasionOptionArgs optionArgs,out float successChance,out float critSuccessChance,out float critFailChance,out float failChance,float difficultyMultiplier) `

### GetEffectChances
`public override void GetEffectChances(PersuasionOptionArgs option,out float moveToNextStageChance,out float blockRandomOptionChance,float difficultyMultiplier) `

### GetArgumentStrengthBasedOnTargetTraits
`public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character,Tuple<TraitObject,int>[] traitCorrelations) `

### CalculateInitialPersuasionProgress
`public override float CalculateInitialPersuasionProgress(CharacterObject character,float goalValue,float successValue) `

### CalculatePersuasionGoalValue
`public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter,float successValue) `

### GetDifficulty
`public override float GetDifficulty(PersuasionDifficulty difficulty) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
