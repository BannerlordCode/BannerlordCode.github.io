---
title: "PersuasionModel"
description: "Auto-generated class reference for PersuasionModel."
---
# PersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PersuasionModel : MBGameModel<PersuasionModel> `
**Base:** MBGameModel<PersuasionModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/PersuasionModel.cs

## Overview

Auto-generated stub for `PersuasionModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
