---
title: "DefaultHeroCreationModel"
description: "DefaultHeroCreationModel: a public class in TaleWorlds.CampaignSystem, inheriting HeroCreationModel; 15 exposed members (15 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs."
---
# DefaultHeroCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`

## Overview

DefaultHeroCreationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs. It is a public class, implementing/inheriting HeroCreationModel; the inheritance chain is DefaultHeroCreationModel → HeroCreationModel → MBGameModel. It exposes 15 public/protected members: 15 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultHeroCreationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultHeroCreationModel → HeroCreationModel → MBGameModel. The surface is method-led (methods 15/15, properties 0/15), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CampaignTime>GetBirthAndDeathDay` | `public override ValueTuple<CampaignTime, CampaignTime>GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age)` | method |
| `GetBornSettlement` | `public override Settlement GetBornSettlement(Hero hero)` | method |
| `GetStaticBodyProperties` | `public override StaticBodyProperties GetStaticBodyProperties(Hero hero, bool isOffspring, float variationAmount = 0.35f)` | method |
| `GetPreferredUpgradeFormation` | `public override FormationClass GetPreferredUpgradeFormation(Hero hero)` | method |
| `GetClan` | `public override Clan GetClan(Hero hero)` | method |
| `GetCulture` | `public override CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan)` | method |
| `GetRandomTemplateByOccupation` | `public override CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null)` | method |
| `int>>GetTraitsForHero` | `public override List<ValueTuple<TraitObject, int>>GetTraitsForHero(Hero hero)` | method |
| `GetCivilianEquipment` | `public override Equipment GetCivilianEquipment(Hero hero)` | method |
| `GetBattleEquipment` | `public override Equipment GetBattleEquipment(Hero hero)` | method |
| `GetCharacterTemplateForOffspring` | `public override CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale)` | method |
| `TextObject>GenerateFirstAndFullName` | `public override ValueTuple<TextObject, TextObject>GenerateFirstAndFullName(Hero hero)` | method |
| `int>>GetDefaultSkillsForHero` | `public override List<ValueTuple<SkillObject, int>>GetDefaultSkillsForHero(Hero hero)` | method |
| `int>>GetInheritedSkillsForHero` | `public override List<ValueTuple<SkillObject, int>>GetInheritedSkillsForHero(Hero hero)` | method |
| `IsHeroCombatant` | `public override bool IsHeroCombatant(Hero hero)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface HeroCreationModel](../HeroCreationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
