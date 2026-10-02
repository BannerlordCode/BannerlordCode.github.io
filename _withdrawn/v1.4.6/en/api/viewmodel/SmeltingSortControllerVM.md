---
title: "SmeltingSortControllerVM"
description: "SmeltingSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting, inheriting ViewModel; 24 exposed members (6 methods, 13 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SmeltingSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SmeltingSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

SmeltingSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SmeltingSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 24 public/protected members: 6 methods, 13 properties, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SmeltingSortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`, inheritance chain SmeltingSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 13/24, methods 6/24), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SmeltingSortControllerVM` | `public SmeltingSortControllerVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetListToControl` | `public void SetListToControl(MBBindingList<SmeltingItemVM>listToControl)` | method |
| `SortByCurrentState` | `public void SortByCurrentState()` | method |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | method |
| `ExecuteSortByYield` | `public void ExecuteSortByYield()` | method |
| `ExecuteSortByType` | `public void ExecuteSortByType()` | method |
| `NameState` | `public int NameState` | property |
| `TypeState` | `public int TypeState` | property |
| `YieldState` | `public int YieldState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsTypeSelected` | `public bool IsTypeSelected` | property |
| `IsYieldSelected` | `public bool IsYieldSelected` | property |
| `SortTypeText` | `public string SortTypeText` | property |
| `SortNameText` | `public string SortNameText` | property |
| `SortYieldText` | `public string SortYieldText` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<SmeltingItemVM>` | property |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : SmeltingSortControllerVM.ItemComparerBase` | property |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemYieldComparer : SmeltingSortControllerVM.ItemComparerBase` | property |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : SmeltingSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<SmeltingItemVM>` | nested type |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : SmeltingSortControllerVM.ItemComparerBase` | nested type |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemYieldComparer : SmeltingSortControllerVM.ItemComparerBase` | nested type |
| `SmeltingSortControllerVM.ItemComparerBase` | `public class ItemTypeComparer : SmeltingSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SmeltingItemVM](../SmeltingItemVM/)
- [same namespace SmeltingVM](../SmeltingVM/)
