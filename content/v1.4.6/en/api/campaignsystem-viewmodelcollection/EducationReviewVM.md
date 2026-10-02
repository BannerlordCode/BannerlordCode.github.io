---
title: "EducationReviewVM"
description: "EducationReviewVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs."
---
# EducationReviewVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationReviewVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs`

## Overview

EducationReviewVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EducationReviewVM → ViewModel. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationReviewVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Education) the module directory; inheritance chain EducationReviewVM → ViewModel. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationReviewVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EducationReviewVM` | `public EducationReviewVM(int pageCount)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetGainForStage` | `public void SetGainForStage(int pageIndex, string gainText)` | method |
| `SetCurrentPage` | `public void SetCurrentPage(int currentPageIndex)` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `StageCompleteText` | `public string StageCompleteText` | property |
| `MBBindingList` | `public MBBindingList<EducationReviewItemVM>ReviewList` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM)
- [same namespace EducationGainedPropertiesVM](../EducationGainedPropertiesVM)
- [same namespace EducationGainedSkillItemVM](../EducationGainedSkillItemVM)
- [same namespace EducationGainGroupItemVM](../EducationGainGroupItemVM)
