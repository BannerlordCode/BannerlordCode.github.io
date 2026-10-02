---
title: "PartySortControllerVM"
description: "PartySortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs."
---
# PartySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartySortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs`

## Overview

PartySortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartySortControllerVM → ViewModel. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartySortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Party) the module directory; inheritance chain PartySortControllerVM → ViewModel. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartySortControllerVM` | `public PartySortControllerVM(PartyScreenLogic.PartyRosterSide rosterSide, Action<PartyScreenLogic.PartyRosterSide, PartyScreenLogic.TroopSortType, bool>onSort)` | constructor |
| `SelectSortType` | `public void SelectSortType(PartyScreenLogic.TroopSortType sortType)` | method |
| `SortWith` | `public void SortWith(PartyScreenLogic.TroopSortType sortType, bool isAscending)` | method |
| `ExecuteToggleOrder` | `public void ExecuteToggleOrder()` | method |
| `IsAscending` | `public bool IsAscending` | property |
| `IsCustomSort` | `public bool IsCustomSort` | property |
| `SelectorVM` | `public SelectorVM<TroopSortSelectorItemVM>SortOptions` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace PartyCharacterVM](../PartyCharacterVM)
- [same namespace PartyCompositionVM](../PartyCompositionVM)
- [same namespace PartyTradeVM](../PartyTradeVM)
- [same namespace PartyVM](../PartyVM)
