---
title: "DefaultHeroCreationModel"
description: "DefaultHeroCreationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting HeroCreationModel; 15 exposed members (15 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultHeroCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultHeroCreationModel : HeroCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultHeroCreationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs. It is a public class, implementing/inheriting HeroCreationModel; the inheritance chain is DefaultHeroCreationModel → HeroCreationModel → MBGameModel → GameModel. It exposes 15 public/protected members: 15 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultHeroCreationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultHeroCreationModel → HeroCreationModel → MBGameModel → GameModel. The surface is method-led (methods 15/15, properties 0/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultHeroCreationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface HeroCreationModel](../HeroCreationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
