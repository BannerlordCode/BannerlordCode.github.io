---
title: "CharacterCreationCultureStageVM"
description: "CharacterCreationCultureStageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CharacterCreationStageBaseVM; 13 exposed members (7 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs."
---
# CharacterCreationCultureStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationCultureStageVM : CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs`

## Overview

CharacterCreationCultureStageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs. It is a public class, implementing/inheriting CharacterCreationStageBaseVM; the inheritance chain is CharacterCreationCultureStageVM → CharacterCreationStageBaseVM → ViewModel. It exposes 13 public/protected members: 7 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationCultureStageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationCultureStageVM → CharacterCreationStageBaseVM → ViewModel. The surface is method-led (methods 7/13, properties 5/13), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationCultureStageVM` | `public CharacterCreationCultureStageVM(CharacterCreationManager characterCreationManager, Action affirmativeAction, TextObject affirmativeActionText, Action negativeAction, TextObject negativeActionText, Action<CultureObject>onCultureSelected) : base(characterCreationManager, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText)` | constructor |
| `OnCultureSelection` | `public void OnCultureSelection(CharacterCreationCultureVM selectedCulture)` | method |
| `OnNextStage` | `public override void OnNextStage()` | method |
| `OnPreviousStage` | `public override void OnPreviousStage()` | method |
| `CanAdvanceToNextStage` | `public override bool CanAdvanceToNextStage()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `IsActive` | `public bool IsActive` | property |
| `MBBindingList` | `public MBBindingList<CharacterCreationCultureVM>Cultures` | property |
| `CurrentSelectedCulture` | `public CharacterCreationCultureVM CurrentSelectedCulture` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CharacterCreationStageBaseVM](../CharacterCreationStageBaseVM)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM)
- [same namespace CharacterCreationGainedAttributeItemVM](../CharacterCreationGainedAttributeItemVM)
