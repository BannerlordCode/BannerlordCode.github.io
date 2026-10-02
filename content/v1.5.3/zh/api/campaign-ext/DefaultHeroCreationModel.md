---
title: "DefaultHeroCreationModel"
description: "DefaultHeroCreationModel 的自动生成类参考。"
---
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel `
**Base:** HeroCreationModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs

## 概述

`DefaultHeroCreationModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetBirthAndDeathDay
`public override ValueTuple<CampaignTime,CampaignTime> GetBirthAndDeathDay(CharacterObject character,bool createAlive,int age) `

### GetBornSettlement
`public override Settlement GetBornSettlement(Hero hero) `

### GetStaticBodyProperties
`public override StaticBodyProperties GetStaticBodyProperties(Hero hero,bool isOffspring,float variationAmount = 0.2f) `

### GetPreferredUpgradeFormation
`public override FormationClass GetPreferredUpgradeFormation(Hero hero) `

### GetClan
`public override Clan GetClan(Hero hero) `

### GetCulture
`public override CultureObject GetCulture(Hero hero,Settlement bornSettlement,Clan clan) `

### GetRandomTemplateByOccupation
`public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation,Settlement settlement = null) `

### GetTraitsForHero
`public override List<ValueTuple<TraitObject,int>> GetTraitsForHero(Hero hero) `

### GetCivilianEquipment
`public override Equipment GetCivilianEquipment(Hero hero) `

### GetBattleEquipment
`public override Equipment GetBattleEquipment(Hero hero) `

### GetCharacterTemplateForOffspring
`public override CharacterObject GetCharacterTemplateForOffspring(Hero mother,Hero father,bool isOffspringFemale) `

### GenerateFirstAndFullName
`public override ValueTuple<TextObject,TextObject> GenerateFirstAndFullName(Hero hero) `

### GetDefaultSkillsForHero
`public override List<ValueTuple<SkillObject,int>> GetDefaultSkillsForHero(Hero hero) `

### GetInheritedSkillsForHero
`public override List<ValueTuple<SkillObject,int>> GetInheritedSkillsForHero(Hero hero) `

### IsHeroCombatant
`public override bool IsHeroCombatant(Hero hero) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
