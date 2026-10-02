---
title: "TroopSortSelectorItemVM"
description: "TroopSortSelectorItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Party, inheriting SelectorItemVM; 2 exposed members (0 methods, 1 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/TroopSortSelectorItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopSortSelectorItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TroopSortSelectorItemVM : SelectorItemVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/TroopSortSelectorItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

TroopSortSelectorItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/TroopSortSelectorItemVM.cs. It is a public class, implementing/inheriting SelectorItemVM; the inheritance chain is TroopSortSelectorItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 2 public/protected members: 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopSortSelectorItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party`, inheritance chain TroopSortSelectorItemVM → SelectorItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 1/2, methods 0/2), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/TroopSortSelectorItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SortType` | `public PartyScreenLogic.TroopSortType SortType` | property |
| `TroopSortSelectorItemVM` | `public TroopSortSelectorItemVM(TextObject s, PartyScreenLogic.TroopSortType sortType) : base(s)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SelectorItemVM](../SelectorItemVM/)
- [same namespace PartyCharacterVM](../PartyCharacterVM/)
- [same namespace PartyCompositionVM](../PartyCompositionVM/)
- [same namespace PartySortControllerVM](../PartySortControllerVM/)
- [same namespace PartyTradeVM](../PartyTradeVM/)
