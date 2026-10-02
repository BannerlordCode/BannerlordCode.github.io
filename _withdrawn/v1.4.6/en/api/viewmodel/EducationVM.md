---
title: "EducationVM"
description: "EducationVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Education, inheriting ViewModel; 22 exposed members (6 methods, 15 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EducationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Education`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EducationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EducationVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EducationVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 22 public/protected members: 6 methods, 15 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EducationVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Education`, inheritance chain EducationVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 15/22, methods 6/22), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Education/EducationVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EducationVM` | `public EducationVM(Hero child, Action<bool>onDone, Action<EducationCampaignBehavior.EducationCharacterProperties[]>onOptionSelect, Action<List<BasicCharacterObject>, List<Equipment>>sendPossibleCharactersAndEquipment)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteNextStage` | `public void ExecuteNextStage()` | method |
| `ExecutePreviousStage` | `public void ExecutePreviousStage()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `StageTitleText` | `public string StageTitleText` | property |
| `ChooseText` | `public string ChooseText` | property |
| `PageDescriptionText` | `public string PageDescriptionText` | property |
| `OptionEffectText` | `public string OptionEffectText` | property |
| `OptionDescriptionText` | `public string OptionDescriptionText` | property |
| `NextText` | `public string NextText` | property |
| `PreviousText` | `public string PreviousText` | property |
| `CanAdvance` | `public bool CanAdvance` | property |
| `CanGoBack` | `public bool CanGoBack` | property |
| `OnlyHasOneOption` | `public bool OnlyHasOneOption` | property |
| `MBBindingList` | `public MBBindingList<EducationOptionVM>Options` | property |
| `GainedPropertiesController` | `public EducationGainedPropertiesVM GainedPropertiesController` | property |
| `Review` | `public EducationReviewVM Review` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EducationGainedAttributeItemVM](../EducationGainedAttributeItemVM/)
- [same namespace EducationGainedPropertiesVM](../EducationGainedPropertiesVM/)
- [same namespace EducationGainedSkillItemVM](../EducationGainedSkillItemVM/)
- [same namespace EducationGainGroupItemVM](../EducationGainGroupItemVM/)
