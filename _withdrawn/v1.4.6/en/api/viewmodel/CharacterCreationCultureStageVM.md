---
title: "CharacterCreationCultureStageVM"
description: "CharacterCreationCultureStageVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation, inheriting CharacterCreationStageBaseVM; 13 exposed members (7 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationCultureStageVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationCultureStageVM : CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CharacterCreationCultureStageVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs. It is a public class, implementing/inheriting CharacterCreationStageBaseVM; the inheritance chain is CharacterCreationCultureStageVM → CharacterCreationStageBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 13 public/protected members: 7 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationCultureStageVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`, inheritance chain CharacterCreationCultureStageVM → CharacterCreationStageBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 7/13, properties 5/13), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CharacterCreationStageBaseVM](../CharacterCreationStageBaseVM/)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM/)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM/)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM/)
- [same namespace CharacterCreationGainedAttributeItemVM](../CharacterCreationGainedAttributeItemVM/)
