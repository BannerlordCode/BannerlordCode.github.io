---
title: "PartySortControllerVM"
description: "PartySortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Party, inheriting ViewModel; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class PartySortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

PartySortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is PartySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartySortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party`, inheritance chain PartySortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PartySortControllerVM` | `public PartySortControllerVM(PartyScreenLogic.PartyRosterSide rosterSide, Action<PartyScreenLogic.PartyRosterSide, PartyScreenLogic.TroopSortType, bool>onSort)` | constructor |
| `SelectSortType` | `public void SelectSortType(PartyScreenLogic.TroopSortType sortType)` | method |
| `SortWith` | `public void SortWith(PartyScreenLogic.TroopSortType sortType, bool isAscending)` | method |
| `ExecuteToggleOrder` | `public void ExecuteToggleOrder()` | method |
| `IsAscending` | `public bool IsAscending` | property |
| `IsCustomSort` | `public bool IsCustomSort` | property |
| `SelectorVM` | `public SelectorVM<TroopSortSelectorItemVM>SortOptions` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace PartyCharacterVM](../PartyCharacterVM/)
- [same namespace PartyCompositionVM](../PartyCompositionVM/)
- [same namespace PartyTradeVM](../PartyTradeVM/)
- [same namespace PartyVM](../PartyVM/)
