---
title: "CharacterDevelopmentModel"
description: "CharacterDevelopmentModel 的自动生成类参考。"
---
# CharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel> `
**Base:** MBGameModel<CharacterDevelopmentModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs

## 概述

`CharacterDevelopmentModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

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

## 参见

- [本区域目录](../)
- [API 参考](../../)
