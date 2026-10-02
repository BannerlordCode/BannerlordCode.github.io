---
title: "EncyclopediaListSortControllerVM"
description: "EncyclopediaListSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List, inheriting ViewModel; 14 exposed members (6 methods, 7 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaListSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaListSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaListSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 6 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListSortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`, inheritance chain EncyclopediaListSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/14, methods 6/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListSortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaListSortControllerVM` | `public EncyclopediaListSortControllerVM(EncyclopediaPage page, MBBindingList<EncyclopediaListItemVM>items)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetSortSelection` | `public void SetSortSelection(int index)` | method |
| `ExecuteSwitchSortOrder` | `public void ExecuteSwitchSortOrder()` | method |
| `SetSortOrder` | `public void SetSortOrder(bool isAscending)` | method |
| `GetSortOrder` | `public bool GetSortOrder()` | method |
| `SortSelection` | `public EncyclopediaListSelectorVM SortSelection` | property |
| `NameLabel` | `public string NameLabel` | property |
| `SortedValueLabelText` | `public string SortedValueLabelText` | property |
| `SortByLabel` | `public string SortByLabel` | property |
| `AlternativeSortState` | `public int AlternativeSortState` | property |
| `IsAlternativeSortVisible` | `public bool IsAlternativeSortVisible` | property |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM/)
- [same namespace EncyclopediaListFilterVM](../EncyclopediaListFilterVM/)
- [same namespace EncyclopediaListItemComparer](../EncyclopediaListItemComparer/)
- [same namespace EncyclopediaListItemVM](../EncyclopediaListItemVM/)
