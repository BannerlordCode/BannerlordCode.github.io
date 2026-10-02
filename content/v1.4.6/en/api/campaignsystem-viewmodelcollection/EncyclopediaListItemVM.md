---
title: "EncyclopediaListItemVM"
description: "EncyclopediaListItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 14 exposed members (5 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs."
---
# EncyclopediaListItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs`

## Overview

EncyclopediaListItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaListItemVM → ViewModel. It exposes 14 public/protected members: 5 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List) the module directory; inheritance chain EncyclopediaListItemVM → ViewModel. The surface is property-led (properties 8/14, methods 5/14), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Object` | `public object Object` | property |
| `ListItem` | `public EncyclopediaListItem ListItem` | property |
| `EncyclopediaListItemVM` | `public EncyclopediaListItemVM(EncyclopediaListItem listItem)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Execute` | `public void Execute()` | method |
| `SetComparedValue` | `public void SetComparedValue(EncyclopediaListItemComparerBase comparer)` | method |
| `ExecuteBeginTooltip` | `public void ExecuteBeginTooltip()` | method |
| `ExecuteEndTooltip` | `public void ExecuteEndTooltip()` | method |
| `IsFiltered` | `public bool IsFiltered` | property |
| `PlayerCanSeeValues` | `public bool PlayerCanSeeValues` | property |
| `Id` | `public string Id` | property |
| `Name` | `public string Name` | property |
| `ComparedValue` | `public string ComparedValue` | property |
| `IsBookmarked` | `public bool IsBookmarked` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM)
- [same namespace EncyclopediaListFilterVM](../EncyclopediaListFilterVM)
- [same namespace EncyclopediaListItemComparer](../EncyclopediaListItemComparer)
- [same namespace EncyclopediaListSelectorItemVM](../EncyclopediaListSelectorItemVM)
