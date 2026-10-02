---
title: "HeroCreationModel"
description: "HeroCreationModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<HeroCreationModel>; 15 exposed members (15 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HeroCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class HeroCreationModel : MBGameModel<HeroCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

HeroCreationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<HeroCreationModel>; the inheritance chain is HeroCreationModel → MBGameModel → GameModel. It exposes 15 public/protected members: 15 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroCreationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain HeroCreationModel → MBGameModel → GameModel. The surface is method-led (methods 15/15, properties 0/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/HeroCreationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CampaignTime>GetBirthAndDeathDay` | `public abstract ValueTuple<CampaignTime, CampaignTime>GetBirthAndDeathDay(CharacterObject character, bool createAlive, int age);` | method |
| `GetBornSettlement` | `public abstract Settlement GetBornSettlement(Hero character);` | method |
| `GetStaticBodyProperties` | `public abstract StaticBodyProperties GetStaticBodyProperties(Hero character, bool isOffspring, float variationAmount = 0.35f);` | method |
| `GetPreferredUpgradeFormation` | `public abstract FormationClass GetPreferredUpgradeFormation(Hero character);` | method |
| `GetClan` | `public abstract Clan GetClan(Hero character);` | method |
| `GetCulture` | `public abstract CultureObject GetCulture(Hero hero, Settlement bornSettlement, Clan clan);` | method |
| `GetRandomTemplateByOccupation` | `public abstract CharacterObject GetRandomTemplateByOccupation(Occupation occupation, Settlement settlement = null);` | method |
| `int>>GetTraitsForHero` | `public abstract List<ValueTuple<TraitObject, int>>GetTraitsForHero(Hero hero);` | method |
| `GetCivilianEquipment` | `public abstract Equipment GetCivilianEquipment(Hero hero);` | method |
| `GetBattleEquipment` | `public abstract Equipment GetBattleEquipment(Hero hero);` | method |
| `GetCharacterTemplateForOffspring` | `public abstract CharacterObject GetCharacterTemplateForOffspring(Hero mother, Hero father, bool isOffspringFemale);` | method |
| `TextObject>GenerateFirstAndFullName` | `public abstract ValueTuple<TextObject, TextObject>GenerateFirstAndFullName(Hero hero);` | method |
| `int>>GetDefaultSkillsForHero` | `public abstract List<ValueTuple<SkillObject, int>>GetDefaultSkillsForHero(Hero hero);` | method |
| `int>>GetInheritedSkillsForHero` | `public abstract List<ValueTuple<SkillObject, int>>GetInheritedSkillsForHero(Hero hero);` | method |
| `IsHeroCombatant` | `public abstract bool IsHeroCombatant(Hero hero);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
