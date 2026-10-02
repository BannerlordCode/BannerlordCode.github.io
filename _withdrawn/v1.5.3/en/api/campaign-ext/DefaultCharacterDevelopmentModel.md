---
title: "DefaultCharacterDevelopmentModel"
description: "Auto-generated class reference for DefaultCharacterDevelopmentModel."
---
# DefaultCharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel `
**Base:** CharacterDevelopmentModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs

## Overview

Auto-generated stub for `DefaultCharacterDevelopmentModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### InitializeSkillsRequiredForLevel
`public void InitializeSkillsRequiredForLevel()`

### InitializeXpRequiredForSkillLevel
`public void InitializeXpRequiredForSkillLevel()`

### SkillsRequiredForLevel
`public override int SkillsRequiredForLevel(int level)`

### GetMaxSkillPoint
`public override int GetMaxSkillPoint()`

### GetXpRequiredForSkillLevel
`public override int GetXpRequiredForSkillLevel(int skillLevel)`

### GetSkillLevelChange
`public override int GetSkillLevelChange(Hero hero,SkillObject skill,float skillXp)`

### GetXpAmountForSkillLevelChange
`public override int GetXpAmountForSkillLevelChange(Hero hero,SkillObject skill,int skillLevelChange)`

### GetTraitLevelForTraitXp
`public override void GetTraitLevelForTraitXp(Hero hero,TraitObject trait,int xpValue,out int traitLevel,out int clampedTraitXp)`

### GetTraitXpRequiredForTraitLevel
`public override int GetTraitXpRequiredForTraitLevel(TraitObject trait,int traitLevel)`

### CalculateLearningLimit
`public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes,int focusValue,SkillObject skill,bool includeDescriptions = false)`

### CalculateLearningRate
`public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes,int focusValue,int skillValue,SkillObject skill,bool includeDescriptions = false)`

### GetNextSkillToAddFocus
`public override SkillObject GetNextSkillToAddFocus(Hero hero)`

### GetNextAttributeToUpgrade
`public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

### GetNextPerkToChoose
`public override PerkObject GetNextPerkToChoose(Hero hero,PerkObject perk)`

## See Also

- [Section index](../)
