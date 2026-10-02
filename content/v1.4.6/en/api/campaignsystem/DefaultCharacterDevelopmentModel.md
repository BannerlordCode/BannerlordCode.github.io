---
title: "DefaultCharacterDevelopmentModel"
description: "DefaultCharacterDevelopmentModel: a public class in TaleWorlds.CampaignSystem, inheriting CharacterDevelopmentModel; 23 exposed members (14 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs."
---
# DefaultCharacterDevelopmentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCharacterDevelopmentModel : CharacterDevelopmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs`

## Overview

DefaultCharacterDevelopmentModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs. It is a public class, implementing/inheriting CharacterDevelopmentModel; the inheritance chain is DefaultCharacterDevelopmentModel → CharacterDevelopmentModel → MBGameModel. It exposes 23 public/protected members: 14 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCharacterDevelopmentModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultCharacterDevelopmentModel → CharacterDevelopmentModel → MBGameModel. The surface is method-led (methods 14/23, properties 8/23), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterDevelopmentModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultCharacterDevelopmentModel` | `public DefaultCharacterDevelopmentModel()` | constructor |
| `InitializeSkillsRequiredForLevel` | `public void InitializeSkillsRequiredForLevel()` | method |
| `InitializeXpRequiredForSkillLevel` | `public void InitializeXpRequiredForSkillLevel()` | method |
| `MaxFocusPerSkill` | `public override int MaxFocusPerSkill` | property |
| `MaxAttribute` | `public override int MaxAttribute` | property |
| `SkillsRequiredForLevel` | `public override int SkillsRequiredForLevel(int level)` | method |
| `GetMaxSkillPoint` | `public override int GetMaxSkillPoint()` | method |
| `GetXpRequiredForSkillLevel` | `public override int GetXpRequiredForSkillLevel(int skillLevel)` | method |
| `GetSkillLevelChange` | `public override int GetSkillLevelChange(Hero hero, SkillObject skill, float skillXp)` | method |
| `GetXpAmountForSkillLevelChange` | `public override int GetXpAmountForSkillLevelChange(Hero hero, SkillObject skill, int skillLevelChange)` | method |
| `GetTraitLevelForTraitXp` | `public override void GetTraitLevelForTraitXp(Hero hero, TraitObject trait, int xpValue, out int traitLevel, out int clampedTraitXp)` | method |
| `GetTraitXpRequiredForTraitLevel` | `public override int GetTraitXpRequiredForTraitLevel(TraitObject trait, int traitLevel)` | method |
| `AttributePointsAtStart` | `public override int AttributePointsAtStart` | property |
| `LevelsPerAttributePoint` | `public override int LevelsPerAttributePoint` | property |
| `FocusPointsPerLevel` | `public override int FocusPointsPerLevel` | property |
| `FocusPointsAtStart` | `public override int FocusPointsAtStart` | property |
| `MaxSkillRequiredForEpicPerkBonus` | `public override int MaxSkillRequiredForEpicPerkBonus` | property |
| `MinSkillRequiredForEpicPerkBonus` | `public override int MinSkillRequiredForEpicPerkBonus` | property |
| `CalculateLearningLimit` | `public override ExplainedNumber CalculateLearningLimit(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, SkillObject skill, bool includeDescriptions = false)` | method |
| `CalculateLearningRate` | `public override ExplainedNumber CalculateLearningRate(IReadOnlyPropertyOwner<CharacterAttribute>characterAttributes, int focusValue, int skillValue, SkillObject skill, bool includeDescriptions = false)` | method |
| `GetNextSkillToAddFocus` | `public override SkillObject GetNextSkillToAddFocus(Hero hero)` | method |
| `GetNextAttributeToUpgrade` | `public override CharacterAttribute GetNextAttributeToUpgrade(Hero hero)` | method |
| `GetNextPerkToChoose` | `public override PerkObject GetNextPerkToChoose(Hero hero, PerkObject perk)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CharacterDevelopmentModel](../CharacterDevelopmentModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
