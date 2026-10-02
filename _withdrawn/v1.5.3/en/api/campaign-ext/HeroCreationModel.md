---
title: "HeroCreationModel"
description: "Auto-generated class reference for HeroCreationModel."
---
# HeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel> `
**Base:** MBGameModel<HeroCreationModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs

## Overview

Auto-generated stub for `HeroCreationModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
