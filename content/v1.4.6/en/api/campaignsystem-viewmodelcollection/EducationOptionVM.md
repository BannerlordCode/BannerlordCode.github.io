---
title: "EducationOptionVM"
description: "EducationOptionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting StringItemWithActionVM; 10 exposed members (1 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs."
---
# EducationOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationOptionVM : StringItemWithActionVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs`

## Overview

EducationOptionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs. It is a public class, implementing/inheriting StringItemWithActionVM; the inheritance chain is EducationOptionVM → StringItemWithActionVM. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationOptionVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Education) the module directory; inheritance chain EducationOptionVM → StringItemWithActionVM. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. StringItemWithActionVM on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OptionEffect` | `public string OptionEffect` | property |
| `OptionDescription` | `public string OptionDescription` | property |
| `EducationCampaignBehavior.EducationCharacterProperties[]CharacterProperties` | `public EducationCampaignBehavior.EducationCharacterProperties[]CharacterProperties` | property |
| `ActionID` | `public string ActionID` | property |
| `int>[]OptionAttributes` | `public ValueTuple<CharacterAttribute, int>[]OptionAttributes` | property |
| `int>[]OptionSkills` | `public ValueTuple<SkillObject, int>[]OptionSkills` | property |
| `int>[]OptionFocusPoints` | `public ValueTuple<SkillObject, int>[]OptionFocusPoints` | property |
| `EducationOptionVM` | `public EducationOptionVM(Action<object>onExecute, string optionId, TextObject optionText, TextObject optionDescription, TextObject optionEffect, bool isSelected, ValueTuple<CharacterAttribute, int>[]optionAttributes, ValueTuple<SkillObject, int>[]optionSkills, ValueTuple<SkillObject, int>[]optionFocusPoints, EducationCampaignBehavior.EducationCharacterProperties[]characterProperties) : base(onExecute, optionText.ToString(), optionId)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsSelected` | `public bool IsSelected` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM)
- [same namespace EducationGainedPropertiesVM](../EducationGainedPropertiesVM)
- [same namespace EducationGainedSkillItemVM](../EducationGainedSkillItemVM)
- [same namespace EducationGainGroupItemVM](../EducationGainGroupItemVM)
