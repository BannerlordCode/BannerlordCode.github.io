---
title: "EncyclopediaListVM"
description: "EncyclopediaListVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting EncyclopediaPageVM; 14 exposed members (6 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs."
---
# EncyclopediaListVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListVM : EncyclopediaPageVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs`

## Overview

EncyclopediaListVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs. It is a public class, implementing/inheriting EncyclopediaPageVM; the inheritance chain is EncyclopediaListVM → EncyclopediaPageVM → ViewModel. It exposes 14 public/protected members: 6 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List) the module directory; inheritance chain EncyclopediaListVM → EncyclopediaPageVM → ViewModel. The surface is property-led (properties 7/14, methods 6/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaListVM` | `public EncyclopediaListVM(EncyclopediaPageArgs args) : base(args)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `GetName` | `public override string GetName()` | method |
| `GetNavigationBarURL` | `public override string GetNavigationBarURL()` | method |
| `CopyFiltersFrom` | `public void CopyFiltersFrom(Dictionary<EncyclopediaFilterItem, bool>filters)` | method |
| `Refresh` | `public override void Refresh()` | method |
| `EmptyListText` | `public string EmptyListText` | property |
| `LastSelectedItemId` | `public string LastSelectedItemId` | property |
| `MBBindingList` | `public override MBBindingList<EncyclopediaListItemVM>Items` | property |
| `SortController` | `public override EncyclopediaListSortControllerVM SortController` | property |
| `IsInitializationOver` | `public bool IsInitializationOver` | property |
| `IsFilterHighlightEnabled` | `public bool IsFilterHighlightEnabled` | property |
| `MBBindingList` | `public override MBBindingList<EncyclopediaFilterGroupVM>FilterGroups` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EncyclopediaPageVM](../EncyclopediaPageVM)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM)
- [same namespace EncyclopediaListFilterVM](../EncyclopediaListFilterVM)
- [same namespace EncyclopediaListItemComparer](../EncyclopediaListItemComparer)
- [same namespace EncyclopediaListItemVM](../EncyclopediaListItemVM)
