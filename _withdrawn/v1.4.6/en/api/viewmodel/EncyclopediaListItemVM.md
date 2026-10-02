---
title: "EncyclopediaListItemVM"
description: "EncyclopediaListItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List, inheriting ViewModel; 14 exposed members (5 methods, 8 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaListItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaListItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaListItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 5 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`, inheritance chain EncyclopediaListItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/14, methods 5/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM/)
- [same namespace EncyclopediaListFilterVM](../EncyclopediaListFilterVM/)
- [same namespace EncyclopediaListItemComparer](../EncyclopediaListItemComparer/)
- [same namespace EncyclopediaListSelectorItemVM](../EncyclopediaListSelectorItemVM/)
