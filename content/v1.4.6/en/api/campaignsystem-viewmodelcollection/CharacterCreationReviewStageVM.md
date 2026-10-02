---
title: "CharacterCreationReviewStageVM"
description: "CharacterCreationReviewStageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CharacterCreationStageBaseVM; 21 exposed members (10 methods, 10 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs."
---
# CharacterCreationReviewStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationReviewStageVM : CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs`

## Overview

CharacterCreationReviewStageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs. It is a public class, implementing/inheriting CharacterCreationStageBaseVM; the inheritance chain is CharacterCreationReviewStageVM → CharacterCreationStageBaseVM → ViewModel. It exposes 21 public/protected members: 10 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationReviewStageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationReviewStageVM → CharacterCreationStageBaseVM → ViewModel. The surface is method-led (methods 10/21, properties 10/21), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationReviewStageVM` | `public CharacterCreationReviewStageVM(CharacterCreationManager characterCreationManager, Action affirmativeAction, TextObject affirmativeActionText, Action negativeAction, TextObject negativeActionText, bool isBannerAndClanNameSet) : base(characterCreationManager, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText)` | constructor |
| `ExecuteRandomizeName` | `public void ExecuteRandomizeName()` | method |
| `OnNextStage` | `public override void OnNextStage()` | method |
| `OnPreviousStage` | `public override void OnPreviousStage()` | method |
| `CanAdvanceToNextStage` | `public override bool CanAdvanceToNextStage()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | property |
| `Name` | `public string Name` | property |
| `NameTextQuestion` | `public string NameTextQuestion` | property |
| `MBBindingList` | `public MBBindingList<CharacterCreationReviewStageItemVM>ReviewList` | property |
| `GainedPropertiesController` | `public CharacterCreationGainedPropertiesVM GainedPropertiesController` | property |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner` | property |
| `CannotAdvanceReasonHint` | `public HintViewModel CannotAdvanceReasonHint` | property |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CharacterCreationStageBaseVM](../CharacterCreationStageBaseVM)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM)
