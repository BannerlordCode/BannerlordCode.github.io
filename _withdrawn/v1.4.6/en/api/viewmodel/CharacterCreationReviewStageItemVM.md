---
title: "CharacterCreationReviewStageItemVM"
description: "CharacterCreationReviewStageItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation, inheriting ViewModel; 7 exposed members (0 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationReviewStageItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationReviewStageItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

CharacterCreationReviewStageItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterCreationReviewStageItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationReviewStageItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`, inheritance chain CharacterCreationReviewStageItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/7, methods 0/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationReviewStageItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CharacterCreationReviewStageItemVM` | `public CharacterCreationReviewStageItemVM(BannerImageIdentifierVM imageIdentifier, string title, string text, string description) : this(title, text, description)` | constructor |
| `CharacterCreationReviewStageItemVM` | `public CharacterCreationReviewStageItemVM(string title, string text, string description)` | constructor |
| `HasImage` | `public bool HasImage` | property |
| `ImageIdentifier` | `public BannerImageIdentifierVM ImageIdentifier` | property |
| `Title` | `public string Title` | property |
| `Text` | `public string Text` | property |
| `Description` | `public string Description` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM/)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM/)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM/)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM/)
