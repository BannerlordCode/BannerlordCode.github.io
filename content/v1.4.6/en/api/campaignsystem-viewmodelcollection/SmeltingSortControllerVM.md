---
title: "SmeltingSortControllerVM"
description: "SmeltingSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 24 exposed members (6 methods, 13 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs."
---
# SmeltingSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SmeltingSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs`

## Overview

SmeltingSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SmeltingSortControllerVM → ViewModel. It exposes 24 public/protected members: 6 methods, 13 properties, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SmeltingSortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting) the module directory; inheritance chain SmeltingSortControllerVM → ViewModel. The surface is property-led (properties 13/24, methods 6/24), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingSortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SmeltingItemVM](../SmeltingItemVM)
- [same namespace SmeltingVM](../SmeltingVM)
