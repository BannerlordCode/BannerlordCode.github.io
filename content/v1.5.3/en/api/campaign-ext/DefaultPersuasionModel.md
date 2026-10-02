---
title: "DefaultPersuasionModel"
description: "Auto-generated class reference for DefaultPersuasionModel."
---
# DefaultPersuasionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPersuasionModel : PersuasionModel `
**Base:** PersuasionModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultPersuasionModel.cs

## Overview

Auto-generated stub for `DefaultPersuasionModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSkillXpFromPersuasion
`public override int GetSkillXpFromPersuasion(PersuasionDifficulty difficulty,int argumentDifficultyBonusCoefficient)`

### GetChances
`public override void GetChances(PersuasionOptionArgs optionArgs,out float successChance,out float critSuccessChance,out float critFailChance,out float failChance,float difficultyMultiplier)`

### GetEffectChances
`public override void GetEffectChances(PersuasionOptionArgs option,out float moveToNextStageChance,out float blockRandomOptionChance,float difficultyMultiplier)`

### GetArgumentStrengthBasedOnTargetTraits
`public override PersuasionArgumentStrength GetArgumentStrengthBasedOnTargetTraits(CharacterObject character,Tuple<TraitObject,int>[] traitCorrelations)`

### CalculateInitialPersuasionProgress
`public override float CalculateInitialPersuasionProgress(CharacterObject character,float goalValue,float successValue)`

### CalculatePersuasionGoalValue
`public override float CalculatePersuasionGoalValue(CharacterObject oneToOneConversationCharacter,float successValue)`

### GetDifficulty
`public override float GetDifficulty(PersuasionDifficulty difficulty)`

## See Also

- [Section index](../)
