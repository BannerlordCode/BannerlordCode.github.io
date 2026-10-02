---
title: "CharacterCreationReviewStageItemVM"
description: "CharacterCreationReviewStageItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (0 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs."
---
# CharacterCreationReviewStageItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationReviewStageItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs`

## Overview

CharacterCreationReviewStageItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterCreationReviewStageItemVM → ViewModel. It exposes 7 public/protected members: 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationReviewStageItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationReviewStageItemVM → ViewModel. The surface is property-led (properties 5/7, methods 0/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationReviewStageItemVM` | `public CharacterCreationReviewStageItemVM(BannerImageIdentifierVM imageIdentifier, string title, string text, string description) : this(title, text, description)` | constructor |
| `CharacterCreationReviewStageItemVM` | `public CharacterCreationReviewStageItemVM(string title, string text, string description)` | constructor |
| `HasImage` | `public bool HasImage` | property |
| `ImageIdentifier` | `public BannerImageIdentifierVM ImageIdentifier` | property |
| `Title` | `public string Title` | property |
| `Text` | `public string Text` | property |
| `Description` | `public string Description` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM)
