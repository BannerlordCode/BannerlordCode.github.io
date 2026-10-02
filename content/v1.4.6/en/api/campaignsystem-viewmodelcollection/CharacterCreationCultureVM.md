---
title: "CharacterCreationCultureVM"
description: "CharacterCreationCultureVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 10 exposed members (1 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs."
---
# CharacterCreationCultureVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationCultureVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs`

## Overview

CharacterCreationCultureVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterCreationCultureVM → ViewModel. It exposes 10 public/protected members: 1 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationCultureVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationCultureVM → ViewModel. The surface is property-led (properties 8/10, methods 1/10), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Culture` | `public CultureObject Culture` | property |
| `CharacterCreationCultureVM` | `public CharacterCreationCultureVM(CultureObject culture, Action<CharacterCreationCultureVM>onSelection)` | constructor |
| `ExecuteSelectCulture` | `public void ExecuteSelectCulture()` | method |
| `CultureID` | `public string CultureID` | property |
| `CultureColor1` | `public Color CultureColor1` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `NameText` | `public string NameText` | property |
| `ShortenedNameText` | `public string ShortenedNameText` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `MBBindingList` | `public MBBindingList<CharacterCreationCultureFeatVM>Feats` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [same namespace CharacterCreationGainedAttributeItemVM](../CharacterCreationGainedAttributeItemVM)
