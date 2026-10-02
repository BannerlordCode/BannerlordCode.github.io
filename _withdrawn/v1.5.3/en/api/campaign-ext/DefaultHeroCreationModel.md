---
title: "DefaultHeroCreationModel"
description: "Auto-generated class reference for DefaultHeroCreationModel."
---
# DefaultHeroCreationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel `
**Base:** HeroCreationModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs

## Overview

Auto-generated stub for `DefaultHeroCreationModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetBirthAndDeathDay
`public override ValueTuple<CampaignTime,CampaignTime> GetBirthAndDeathDay(CharacterObject character,bool createAlive,int age)`

### GetBornSettlement
`public override Settlement GetBornSettlement(Hero hero)`

### GetStaticBodyProperties
`public override StaticBodyProperties GetStaticBodyProperties(Hero hero,bool isOffspring,float variationAmount = 0.2f)`

### GetPreferredUpgradeFormation
`public override FormationClass GetPreferredUpgradeFormation(Hero hero)`

### GetClan
`public override Clan GetClan(Hero hero)`

### GetCulture
`public override CultureObject GetCulture(Hero hero,Settlement bornSettlement,Clan clan)`

### GetRandomTemplateByOccupation
`public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation,Settlement settlement = null)`

### GetTraitsForHero
`public override List<ValueTuple<TraitObject,int>> GetTraitsForHero(Hero hero)`

### GetCivilianEquipment
`public override Equipment GetCivilianEquipment(Hero hero)`

### GetBattleEquipment
`public override Equipment GetBattleEquipment(Hero hero)`

### GetCharacterTemplateForOffspring
`public override CharacterObject GetCharacterTemplateForOffspring(Hero mother,Hero father,bool isOffspringFemale)`

### GenerateFirstAndFullName
`public override ValueTuple<TextObject,TextObject> GenerateFirstAndFullName(Hero hero)`

### GetDefaultSkillsForHero
`public override List<ValueTuple<SkillObject,int>> GetDefaultSkillsForHero(Hero hero)`

### GetInheritedSkillsForHero
`public override List<ValueTuple<SkillObject,int>> GetInheritedSkillsForHero(Hero hero)`

### IsHeroCombatant
`public override bool IsHeroCombatant(Hero hero)`

## See Also

- [Section index](../)
