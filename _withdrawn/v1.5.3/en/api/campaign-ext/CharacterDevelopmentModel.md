---
title: "CharacterDevelopmentModel"
description: "Auto-generated class reference for CharacterDevelopmentModel."
---
# CharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel> `
**Base:** MBGameModel<CharacterDevelopmentModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs

## Overview

Auto-generated stub for `CharacterDevelopmentModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SkillsRequiredForLevel
`public abstract int SkillsRequiredForLevel(int level)`

### GetMaxSkillPoint
`public abstract int GetMaxSkillPoint()`

### GetXpRequiredForSkillLevel
`public abstract int GetXpRequiredForSkillLevel(int skillLevel)`

### GetSkillLevelChange
`public abstract int GetSkillLevelChange(Hero hero,SkillObject skill,float skillXp)`

### GetXpAmountForSkillLevelChange
`public abstract int GetXpAmountForSkillLevelChange(Hero hero,SkillObject skill,int skillLevelChange)`

### GetTraitLevelForTraitXp
`public abstract void GetTraitLevelForTraitXp(Hero hero,TraitObject trait,int newValue,out int traitLevel,out int traitXp)`

### GetTraitXpRequiredForTraitLevel
`public abstract int GetTraitXpRequiredForTraitLevel(TraitObject trait,int traitLevel)`

### CalculateLearningLimit
`public abstract ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes,int focusValue,SkillObject skill,bool includeDescriptions = false)`

### CalculateLearningRate
`public abstract ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes,int focusValue,int skillValue,SkillObject skill,bool includeDescriptions = false)`

### GetNextSkillToAddFocus
`public abstract SkillObject GetNextSkillToAddFocus(Hero hero)`

### GetNextAttributeToUpgrade
`public abstract CharacterAttribute GetNextAttributeToUpgrade(Hero hero)`

### GetNextPerkToChoose
`public abstract PerkObject GetNextPerkToChoose(Hero hero,PerkObject perk)`

## See Also

- [Section index](../)
