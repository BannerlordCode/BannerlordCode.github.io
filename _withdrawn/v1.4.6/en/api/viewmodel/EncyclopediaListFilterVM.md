---
title: "EncyclopediaListFilterVM"
description: "EncyclopediaListFilterVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List, inheriting ViewModel; 6 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaListFilterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class EncyclopediaListFilterVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

EncyclopediaListFilterVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is EncyclopediaListFilterVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EncyclopediaListFilterVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.List`, inheritance chain EncyclopediaListFilterVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Encyclopedia/List/EncyclopediaListFilterVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EncyclopediaListFilterVM` | `public EncyclopediaListFilterVM(EncyclopediaFilterItem filter, Action<EncyclopediaListFilterVM>UpdateFilters)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `CopyFilterFrom` | `public void CopyFilterFrom(Dictionary<EncyclopediaFilterItem, bool>filters)` | method |
| `ExecuteOnFilterActivated` | `public void ExecuteOnFilterActivated()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace EncyclopediaFilterGroupVM](../EncyclopediaFilterGroupVM/)
- [same namespace EncyclopediaListItemComparer](../EncyclopediaListItemComparer/)
- [same namespace EncyclopediaListItemVM](../EncyclopediaListItemVM/)
- [same namespace EncyclopediaListSelectorItemVM](../EncyclopediaListSelectorItemVM/)
