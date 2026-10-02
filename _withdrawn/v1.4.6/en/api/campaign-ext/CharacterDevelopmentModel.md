---
title: "CharacterDevelopmentModel"
description: "CharacterDevelopmentModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<CharacterDevelopmentModel>; 20 exposed members (12 methods, 8 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterDevelopmentModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CharacterDevelopmentModel : MBGameModel<CharacterDevelopmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

CharacterDevelopmentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CharacterDevelopmentModel>; the inheritance chain is CharacterDevelopmentModel → MBGameModel → GameModel. It exposes 20 public/protected members: 12 methods, 8 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterDevelopmentModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain CharacterDevelopmentModel → MBGameModel → GameModel. The surface is method-led (methods 12/20, properties 8/20), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterDevelopmentModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SkillsRequiredForLevel` | `public abstract int SkillsRequiredForLevel(int level);` | method |
| `GetMaxSkillPoint` | `public abstract int GetMaxSkillPoint();` | method |
| `GetXpRequiredForSkillLevel` | `public abstract int GetXpRequiredForSkillLevel(int skillLevel);` | method |
| `GetSkillLevelChange` | `public abstract int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp);` | method |
| `GetXpAmountForSkillLevelChange` | `public abstract int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange);` | method |
| `MaxAttribute` | `public abstract int MaxAttribute` | property |
| `MaxFocusPerSkill` | `public abstract int MaxFocusPerSkill` | property |
| `MaxSkillRequiredForEpicPerkBonus` | `public abstract int MaxSkillRequiredForEpicPerkBonus` | property |
| `MinSkillRequiredForEpicPerkBonus` | `public abstract int MinSkillRequiredForEpicPerkBonus` | property |
| `GetTraitLevelForTraitXp` | `public abstract void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int newValue, out int traitLevel, out int traitXp);` | method |
| `GetTraitXpRequiredForTraitLevel` | `public abstract int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel);` | method |
| `FocusPointsPerLevel` | `public abstract int FocusPointsPerLevel` | property |
| `FocusPointsAtStart` | `public abstract int FocusPointsAtStart` | property |
| `AttributePointsAtStart` | `public abstract int AttributePointsAtStart` | property |
| `LevelsPerAttributePoint` | `public abstract int LevelsPerAttributePoint` | property |
| `CalculateLearningLimit` | `public abstract ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false);` | method |
| `CalculateLearningRate` | `public abstract ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false);` | method |
| `GetNextSkillToAddFocus` | `public abstract SkillObject GetNextSkillToAddFocus(Hero hero);` | method |
| `GetNextAttributeToUpgrade` | `public abstract CharacterAttribute GetNextAttributeToUpgrade(Hero hero);` | method |
| `GetNextPerkToChoose` | `public abstract PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
