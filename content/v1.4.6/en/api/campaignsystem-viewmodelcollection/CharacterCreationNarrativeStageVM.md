---
title: "CharacterCreationNarrativeStageVM"
description: "CharacterCreationNarrativeStageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CharacterCreationStageBaseVM; 14 exposed members (8 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationNarrativeStageVM.cs."
---
# CharacterCreationNarrativeStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationNarrativeStageVM : CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationNarrativeStageVM.cs`

## Overview

CharacterCreationNarrativeStageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationNarrativeStageVM.cs. It is a public class, implementing/inheriting CharacterCreationStageBaseVM; the inheritance chain is CharacterCreationNarrativeStageVM → CharacterCreationStageBaseVM → ViewModel. It exposes 14 public/protected members: 8 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationNarrativeStageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationNarrativeStageVM → CharacterCreationStageBaseVM → ViewModel. The surface is method-led (methods 8/14, properties 5/14), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationNarrativeStageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationNarrativeStageVM` | `public CharacterCreationNarrativeStageVM(CharacterCreationManager characterCreationManagerMenu, Action affirmativeAction, TextObject affirmativeActionText, Action negativeAction, TextObject negativeActionText, Action onMenuChanged) : base(characterCreationManagerMenu, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText)` | constructor |
| `RefreshMenu` | `public void RefreshMenu()` | method |
| `OnOptionSelected` | `public void OnOptionSelected(CharacterCreationOptionVM option)` | method |
| `OnNextStage` | `public override void OnNextStage()` | method |
| `OnPreviousStage` | `public override void OnPreviousStage()` | method |
| `CanAdvanceToNextStage` | `public override bool CanAdvanceToNextStage()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `GainedPropertiesController` | `public CharacterCreationGainedPropertiesVM GainedPropertiesController` | property |
| `SelectedOption` | `public CharacterCreationOptionVM SelectedOption` | property |
| `MBBindingList` | `public MBBindingList<CharacterCreationOptionVM>SelectionList` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CharacterCreationStageBaseVM](../CharacterCreationStageBaseVM)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM)
