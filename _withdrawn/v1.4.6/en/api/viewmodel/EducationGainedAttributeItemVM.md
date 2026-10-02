---
title: "EducationGainedAttributeItemVM"
description: "EducationGainedAttributeItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Education, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EducationGainedAttributeItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationGainedAttributeItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EducationGainedAttributeItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EducationGainedAttributeItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationGainedAttributeItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education`, inheritance chain EducationGainedAttributeItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedAttributeItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EducationGainedAttributeItemVM` | `public EducationGainedAttributeItemVM(CharacterAttribute attributeObj)` | constructor |
| `SetValue` | `public void SetValue(int gainedFromOtherStages, int gainedFromCurrentStage)` | method |
| `Hint` | `public BasicTooltipViewModel Hint` | property |
| `NameText` | `public string NameText` | property |
| `HasIncreasedInCurrentStage` | `public bool HasIncreasedInCurrentStage` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EducationGainedPropertiesVM](../EducationGainedPropertiesVM/)
- [same namespace EducationGainedSkillItemVM](../EducationGainedSkillItemVM/)
- [same namespace EducationGainGroupItemVM](../EducationGainGroupItemVM/)
- [same namespace EducationOptionVM](../EducationOptionVM/)
