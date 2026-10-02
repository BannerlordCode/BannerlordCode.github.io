---
title: "CharacterCreationOptionsStageVM"
description: "CharacterCreationOptionsStageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting CharacterCreationStageBaseVM; 16 exposed members (10 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/OptionsStage/CharacterCreationOptionsStageVM.cs."
---
# CharacterCreationOptionsStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationOptionsStageVM : CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/OptionsStage/CharacterCreationOptionsStageVM.cs`

## Overview

CharacterCreationOptionsStageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/OptionsStage/CharacterCreationOptionsStageVM.cs. It is a public class, implementing/inheriting CharacterCreationStageBaseVM; the inheritance chain is CharacterCreationOptionsStageVM → CharacterCreationStageBaseVM → ViewModel. It exposes 16 public/protected members: 10 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationOptionsStageVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage) the module directory; inheritance chain CharacterCreationOptionsStageVM → CharacterCreationStageBaseVM → ViewModel. The surface is method-led (methods 10/16, properties 5/16), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/OptionsStage/CharacterCreationOptionsStageVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationOptionsStageVM` | `public CharacterCreationOptionsStageVM(CharacterCreationManager characterCreationManager, Action affirmativeAction, TextObject affirmativeActionText, Action negativeAction, TextObject negativeActionText) : base(characterCreationManager, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `CanAdvanceToNextStage` | `public override bool CanAdvanceToNextStage()` | method |
| `OnNextStage` | `public override void OnNextStage()` | method |
| `OnPreviousStage` | `public override void OnPreviousStage()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(HotKey hotKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameKey gameKey)` | method |
| `AddCameraControlInputKey` | `public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)` | method |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `MBBindingList` | `public MBBindingList<InputKeyItemVM>CameraControlKeys` | property |
| `OptionsController` | `public CampaignOptionsControllerVM OptionsController` | property |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CharacterCreationStageBaseVM](../CharacterCreationStageBaseVM)
