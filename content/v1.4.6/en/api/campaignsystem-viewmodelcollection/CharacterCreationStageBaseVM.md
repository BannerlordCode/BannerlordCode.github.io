---
title: "CharacterCreationStageBaseVM"
description: "CharacterCreationStageBaseVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 14 exposed members (3 methods, 10 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs."
---
# CharacterCreationStageBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class CharacterCreationStageBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs`

## Overview

CharacterCreationStageBaseVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is CharacterCreationStageBaseVM → ViewModel. It exposes 14 public/protected members: 3 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationStageBaseVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationStageBaseVM → ViewModel. The surface is property-led (properties 10/14, methods 3/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationStageBaseVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM)
