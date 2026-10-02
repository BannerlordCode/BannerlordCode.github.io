---
title: "EducationReviewVM"
description: "EducationReviewVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Education, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EducationReviewVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationReviewVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EducationReviewVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EducationReviewVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationReviewVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education`, inheritance chain EducationReviewVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EducationReviewVM` | `public EducationReviewVM(int pageCount)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetGainForStage` | `public void SetGainForStage(int pageIndex, string gainText)` | method |
| `SetCurrentPage` | `public void SetCurrentPage(int currentPageIndex)` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `StageCompleteText` | `public string StageCompleteText` | property |
| `MBBindingList` | `public MBBindingList<EducationReviewItemVM>ReviewList` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM/)
- [same namespace EducationGainedPropertiesVM](../EducationGainedPropertiesVM/)
- [same namespace EducationGainedSkillItemVM](../EducationGainedSkillItemVM/)
- [same namespace EducationGainGroupItemVM](../EducationGainGroupItemVM/)
