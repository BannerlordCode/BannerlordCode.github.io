---
title: "CharacterCreationOptionVM"
description: "CharacterCreationOptionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs."
---
# CharacterCreationOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationOptionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs`

## Overview

CharacterCreationOptionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterCreationOptionVM → ViewModel. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationOptionVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationOptionVM → ViewModel. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationOptionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationOptionVM` | `public CharacterCreationOptionVM(Action<CharacterCreationOptionVM>onSelect, NarrativeMenuOption option)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSelect` | `public void ExecuteSelect()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `ActionText` | `public string ActionText` | property |
| `PositiveEffectText` | `public string PositiveEffectText` | property |
| `NegativeEffectText` | `public string NegativeEffectText` | property |
| `DescriptionText` | `public string DescriptionText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM)
