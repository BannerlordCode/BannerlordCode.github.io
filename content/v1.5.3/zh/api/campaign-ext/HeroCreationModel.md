---
title: "HeroCreationModel"
description: "HeroCreationModel 的自动生成类参考。"
---
# HeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel> `
**Base:** MBGameModel<HeroCreationModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs

## 概述

`HeroCreationModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetBirthAndDeathDay
`public abstract ValueTuple<CampaignTime,CampaignTime> GetBirthAndDeathDay(CharacterObject character,bool createAlive,int age)`

### GetBornSettlement
`public abstract Settlement GetBornSettlement(Hero character)`

### GetStaticBodyProperties
`public abstract StaticBodyProperties GetStaticBodyProperties(Hero character,bool isOffspring,float variationAmount = 0.2f)`

### GetPreferredUpgradeFormation
`public abstract FormationClass GetPreferredUpgradeFormation(Hero character)`

### GetClan
`public abstract Clan GetClan(Hero character)`

### GetCulture
`public abstract CultureObject GetCulture(Hero hero,Settlement bornSettlement,Clan clan)`

### GetRandomTemplateByOccupation
`public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation,Settlement settlement = null)`

### GetTraitsForHero
`public abstract List<ValueTuple<TraitObject,int>> GetTraitsForHero(Hero hero)`

### GetCivilianEquipment
`public abstract Equipment GetCivilianEquipment(Hero hero)`

### GetBattleEquipment
`public abstract Equipment GetBattleEquipment(Hero hero)`

### GetCharacterTemplateForOffspring
`public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother,Hero father,bool isOffspringFemale)`

### GenerateFirstAndFullName
`public abstract ValueTuple<TextObject,TextObject> GenerateFirstAndFullName(Hero hero)`

### GetDefaultSkillsForHero
`public abstract List<ValueTuple<SkillObject,int>> GetDefaultSkillsForHero(Hero hero)`

### GetInheritedSkillsForHero
`public abstract List<ValueTuple<SkillObject,int>> GetInheritedSkillsForHero(Hero hero)`

### IsHeroCombatant
`public abstract bool IsHeroCombatant(Hero hero)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
