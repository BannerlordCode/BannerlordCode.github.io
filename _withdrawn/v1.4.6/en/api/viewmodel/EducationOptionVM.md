---
title: "EducationOptionVM"
description: "EducationOptionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Education, inheriting StringItemWithActionVM; 10 exposed members (1 methods, 8 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EducationOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationOptionVM : StringItemWithActionVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EducationOptionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs. It is a public class, implementing/inheriting StringItemWithActionVM; the inheritance chain is EducationOptionVM → StringItemWithActionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationOptionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education`, inheritance chain EducationOptionVM → StringItemWithActionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationOptionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface StringItemWithActionVM](../StringItemWithActionVM/)
- [same namespace EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM/)
- [same namespace EducationGainedPropertiesVM](../EducationGainedPropertiesVM/)
- [same namespace EducationGainedSkillItemVM](../EducationGainedSkillItemVM/)
- [same namespace EducationGainGroupItemVM](../EducationGainGroupItemVM/)
