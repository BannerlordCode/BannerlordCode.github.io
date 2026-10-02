---
title: "CharacterCreationReviewStageVM"
description: "CharacterCreationReviewStageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation, inheriting CharacterCreationStageBaseVM; 21 exposed members (10 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationReviewStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationReviewStageVM : CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CharacterCreationReviewStageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs. It is a public class, implementing/inheriting CharacterCreationStageBaseVM; the inheritance chain is CharacterCreationReviewStageVM → CharacterCreationStageBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 21 public/protected members: 10 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationReviewStageVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`, inheritance chain CharacterCreationReviewStageVM → CharacterCreationStageBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 10/21, properties 10/21), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CharacterCreationStageBaseVM](../CharacterCreationStageBaseVM/)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM/)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM/)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM/)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM/)
