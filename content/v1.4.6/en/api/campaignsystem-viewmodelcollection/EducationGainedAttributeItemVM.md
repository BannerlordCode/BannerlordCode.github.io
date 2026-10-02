---
title: "EducationGainedAttributeItemVM"
description: "EducationGainedAttributeItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs."
---
# EducationGainedAttributeItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationGainedAttributeItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs`

## Overview

EducationGainedAttributeItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EducationGainedAttributeItemVM → ViewModel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationGainedAttributeItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Education) the module directory; inheritance chain EducationGainedAttributeItemVM → ViewModel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EducationGainedAttributeItemVM` | `public EducationGainedAttributeItemVM(CharacterAttribute attributeObj)` | constructor |
| `SetValue` | `public void SetValue(int gainedFromOtherStages, int gainedFromCurrentStage)` | method |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `NameText` | `public string NameText` | property |
| `HasIncreasedInCurrentStage` | `public bool HasIncreasedInCurrentStage` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EducationGainedPropertiesVM](../EducationGainedPropertiesVM)
- [same namespace EducationGainedSkillItemVM](../EducationGainedSkillItemVM)
- [same namespace EducationGainGroupItemVM](../EducationGainGroupItemVM)
- [same namespace EducationOptionVM](../EducationOptionVM)
