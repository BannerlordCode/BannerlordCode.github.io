---
title: "DefaultCharacterDevelopmentModel"
description: "DefaultCharacterDevelopmentModel 的自动生成类参考。"
---
# DefaultCharacterDevelopmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel `
**Base:** CharacterDevelopmentModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs

## 概述

`DefaultCharacterDevelopmentModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### InitializeSkillsRequiredForLevel
`public void InitializeSkillsRequiredForLevel() `

### InitializeXpRequiredForSkillLevel
`public void InitializeXpRequiredForSkillLevel() `

### SkillsRequiredForLevel
`public override int SkillsRequiredForLevel(int level) `

### GetMaxSkillPoint
`public override int GetMaxSkillPoint() `

### GetXpRequiredForSkillLevel
`public override int GetXpRequiredForSkillLevel(int skillLevel) `

### GetSkillLevelChange
`public override int GetSkillLevelChange(Hero hero,SkillObject skill,float skillXp) `

### GetXpAmountForSkillLevelChange
`public override int GetXpAmountForSkillLevelChange(Hero hero,SkillObject skill,int skillLevelChange) `

### GetTraitLevelForTraitXp
`public override void GetTraitLevelForTraitXp(Hero hero,TraitObject trait,int xpValue,out int traitLevel,out int clampedTraitXp) `

### GetTraitXpRequiredForTraitLevel
`public override int GetTraitXpRequiredForTraitLevel(TraitObject trait,int traitLevel) `

### CalculateLearningLimit
`public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes,int focusValue,SkillObject skill,bool includeDescriptions = false) `

### CalculateLearningRate
`public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute> characterAttributes,int focusValue,int skillValue,SkillObject skill,bool includeDescriptions = false) `

### GetNextSkillToAddFocus
`public override SkillObject GetNextSkillToAddFocus(Hero hero) `

### GetNextAttributeToUpgrade
`public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero) `

### GetNextPerkToChoose
`public override PerkObject GetNextPerkToChoose(Hero hero,PerkObject perk) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
