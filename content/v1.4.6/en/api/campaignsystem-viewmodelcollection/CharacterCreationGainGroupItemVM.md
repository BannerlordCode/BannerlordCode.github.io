---
title: "CharacterCreationGainGroupItemVM"
description: "CharacterCreationGainGroupItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs."
---
# CharacterCreationGainGroupItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class CharacterCreationGainGroupItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs`

## Overview

CharacterCreationGainGroupItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CharacterCreationGainGroupItemVM → ViewModel. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationGainGroupItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation) the module directory; inheritance chain CharacterCreationGainGroupItemVM → ViewModel. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationGainGroupItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AttributeObj` | `public CharacterAttribute AttributeObj` | property |
| `CharacterCreationGainGroupItemVM` | `public CharacterCreationGainGroupItemVM(CharacterAttribute attributeObj)` | constructor |
| `ResetValues` | `public void ResetValues()` | method |
| `MBBindingList` | `public MBBindingList<CharacterCreationGainedSkillItemVM>Skills` | property |
| `Attribute` | `public CharacterCreationGainedAttributeItemVM Attribute` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationClanNamingStageVM](../CharacterCreationClanNamingStageVM)
- [same namespace CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM)
- [same namespace CharacterCreationCultureStageVM](../CharacterCreationCultureStageVM)
- [same namespace CharacterCreationCultureVM](../CharacterCreationCultureVM)
