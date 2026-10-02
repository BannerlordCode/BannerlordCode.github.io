---
title: "EncyclopediaTraitItemVM"
description: "EncyclopediaTraitItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 5 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTraitItemVM.cs."
---
# EncyclopediaTraitItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaTraitItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTraitItemVM.cs`

## Overview

EncyclopediaTraitItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTraitItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaTraitItemVM → ViewModel. It exposes 5 public/protected members: 3 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaTraitItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Items) the module directory; inheritance chain EncyclopediaTraitItemVM → ViewModel. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/Items/EncyclopediaTraitItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaTraitItemVM` | `public EncyclopediaTraitItemVM(TraitObject traitObj, int value)` | constructor |
| `EncyclopediaTraitItemVM` | `public EncyclopediaTraitItemVM(TraitObject traitObj, Hero hero) : this(traitObj, hero.GetTraitLevel(traitObj))` | constructor |
| `TraitId` | `public string TraitId` | property |
| `Hint` | `public HintViewModel Hint` | property |
| `Value` | `public int Value` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaDwellingVM](../EncyclopediaDwellingVM)
- [same namespace EncyclopediaFactionVM](../EncyclopediaFactionVM)
- [same namespace EncyclopediaFamilyMemberVM](../EncyclopediaFamilyMemberVM)
- [same namespace EncyclopediaHistoryEventVM](../EncyclopediaHistoryEventVM)
