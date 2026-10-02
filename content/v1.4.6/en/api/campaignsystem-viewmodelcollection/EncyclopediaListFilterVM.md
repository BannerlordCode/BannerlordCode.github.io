---
title: "EncyclopediaListFilterVM"
description: "EncyclopediaListFilterVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 6 exposed members (3 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs."
---
# EncyclopediaListFilterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListFilterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs`

## Overview

EncyclopediaListFilterVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaListFilterVM → ViewModel. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListFilterVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List) the module directory; inheritance chain EncyclopediaListFilterVM → ViewModel. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaListFilterVM` | `public EncyclopediaListFilterVM(EncyclopediaFilterItem filter, Action<EncyclopediaListFilterVM>UpdateFilters)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `CopyFilterFrom` | `public void CopyFilterFrom(Dictionary<EncyclopediaFilterItem, bool>filters)` | method |
| `ExecuteOnFilterActivated` | `public void ExecuteOnFilterActivated()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM)
- [same namespace EncyclopediaListItemComparer](../EncyclopediaListItemComparer)
- [same namespace EncyclopediaListItemVM](../EncyclopediaListItemVM)
- [same namespace EncyclopediaListSelectorItemVM](../EncyclopediaListSelectorItemVM)
