---
title: "EducationGainedSkillItemVM"
description: "EducationGainedSkillItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Education, inheriting ViewModel; 10 exposed members (2 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EducationGainedSkillItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationGainedSkillItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EducationGainedSkillItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EducationGainedSkillItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 2 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationGainedSkillItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education`, inheritance chain EducationGainedSkillItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/10, methods 2/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationGainedSkillItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SkillObj` | `public SkillObject SkillObj` | property |
| `EducationGainedSkillItemVM` | `public EducationGainedSkillItemVM(SkillObject skill)` | constructor |
| `SetFocusValue` | `public void SetFocusValue(int gainedFromOtherStages, int gainedFromCurrentStage)` | method |
| `SetSkillValue` | `public void SetSkillValue(int gaintedFromOtherStages, int gainedFromCurrentStage)` | method |
| `SkillId` | `public string SkillId` | property |
| `SkillValueInt` | `public int SkillValueInt` | property |
| `Skill` | `public EncyclopediaSkillVM Skill` | property |
| `HasFocusIncreasedInCurrentStage` | `public bool HasFocusIncreasedInCurrentStage` | property |
| `HasSkillValueIncreasedInCurrentStage` | `public bool HasSkillValueIncreasedInCurrentStage` | property |
| `MBBindingList` | `public MBBindingList<BoolItemWithActionVM>FocusPointGainList` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM/)
- [same namespace EducationGainedPropertiesVM](../EducationGainedPropertiesVM/)
- [same namespace EducationGainGroupItemVM](../EducationGainGroupItemVM/)
- [same namespace EducationOptionVM](../EducationOptionVM/)
