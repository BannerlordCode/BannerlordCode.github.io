---
title: "CharacterCreationStageBaseVM"
description: "CharacterCreationStageBaseVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation, inheriting ViewModel; 14 exposed members (3 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationStageBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class CharacterCreationStageBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CharacterCreationStageBaseVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is CharacterCreationStageBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 3 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationStageBaseVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`, inheritance chain CharacterCreationStageBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/14, methods 3/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CharacterCreationStageBaseVM` | `protected CharacterCreationStageBaseVM(CharacterCreationManager characterCreationManager, Action affirmativeAction, TextObject affirmativeActionText, Action negativeAction, TextObject negativeActionText)` | constructor |
| `OnNextStage` | `public abstract void OnNextStage();` | method |
| `OnPreviousStage` | `public abstract void OnPreviousStage();` | method |
| `CanAdvanceToNextStage` | `public abstract bool CanAdvanceToNextStage();` | method |
| `Title` | `public string Title` | property |
| `Description` | `public string Description` | property |
| `SelectionText` | `public string SelectionText` | property |
| `NextStageText` | `public string NextStageText` | property |
| `PreviousStageText` | `public string PreviousStageText` | property |
| `TotalStageCount` | `public int TotalStageCount` | property |
| `FurthestIndex` | `public int FurthestIndex` | property |
| `CurrentStageIndex` | `public int CurrentStageIndex` | property |
| `AnyItemSelected` | `public bool AnyItemSelected` | property |
| `CanAdvance` | `public bool CanAdvance` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM/)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM/)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM/)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM/)
