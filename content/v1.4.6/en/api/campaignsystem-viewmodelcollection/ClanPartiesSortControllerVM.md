---
title: "ClanPartiesSortControllerVM"
description: "ClanPartiesSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 29 exposed members (6 methods, 17 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesSortControllerVM.cs."
---
# ClanPartiesSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartiesSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesSortControllerVM.cs`

## Overview

ClanPartiesSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanPartiesSortControllerVM → ViewModel. It exposes 29 public/protected members: 6 methods, 17 properties, 1 constructors, 5 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPartiesSortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories) the module directory; inheritance chain ClanPartiesSortControllerVM → ViewModel. The surface is property-led (properties 17/29, methods 6/29), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesSortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanPartiesSortControllerVM` | `public ClanPartiesSortControllerVM(MBBindingList<MBBindingList<ClanPartyItemVM>>listsToControl)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | method |
| `ExecuteSortByLocation` | `public void ExecuteSortByLocation()` | method |
| `ExecuteSortBySize` | `public void ExecuteSortBySize()` | method |
| `ExecuteSortByShipCount` | `public void ExecuteSortByShipCount()` | method |
| `ResetAllStates` | `public void ResetAllStates()` | method |
| `NameState` | `public int NameState` | property |
| `LocationState` | `public int LocationState` | property |
| `SizeState` | `public int SizeState` | property |
| `ShipCountState` | `public int ShipCountState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsLocationSelected` | `public bool IsLocationSelected` | property |
| `IsSizeSelected` | `public bool IsSizeSelected` | property |
| `IsShipCountSelected` | `public bool IsShipCountSelected` | property |
| `NameText` | `public string NameText` | property |
| `LocationText` | `public string LocationText` | property |
| `SizeText` | `public string SizeText` | property |
| `ShipCountText` | `public string ShipCountText` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanPartyItemVM>` | property |
| `ClanPartiesSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanPartiesSortControllerVM.ItemComparerBase` | property |
| `ClanPartiesSortControllerVM.ItemComparerBase` | `public class ItemLocationComparer : ClanPartiesSortControllerVM.ItemComparerBase` | property |
| `ClanPartiesSortControllerVM.ItemComparerBase` | `public class ItemSizeComparer : ClanPartiesSortControllerVM.ItemComparerBase` | property |
| `ClanPartiesSortControllerVM.ItemComparerBase` | `public class ItemShipCountComparer : ClanPartiesSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanPartyItemVM>` | nested type |
| `ClanPartiesSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanPartiesSortControllerVM.ItemComparerBase` | nested type |
| `ClanPartiesSortControllerVM.ItemComparerBase` | `public class ItemLocationComparer : ClanPartiesSortControllerVM.ItemComparerBase` | nested type |
| `ClanPartiesSortControllerVM.ItemComparerBase` | `public class ItemSizeComparer : ClanPartiesSortControllerVM.ItemComparerBase` | nested type |
| `ClanPartiesSortControllerVM.ItemComparerBase` | `public class ItemShipCountComparer : ClanPartiesSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM)
- [same namespace ClanFiefsVM](../ClanFiefsVM)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM)
- [same namespace ClanIncomeVM](../ClanIncomeVM)
