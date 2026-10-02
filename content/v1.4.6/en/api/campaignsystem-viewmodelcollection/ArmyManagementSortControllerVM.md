---
title: "ArmyManagementSortControllerVM"
description: "ArmyManagementSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 33 exposed members (6 methods, 19 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs."
---
# ArmyManagementSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs`

## Overview

ArmyManagementSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ArmyManagementSortControllerVM → ViewModel. It exposes 33 public/protected members: 6 methods, 19 properties, 1 constructors, 7 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyManagementSortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement) the module directory; inheritance chain ArmyManagementSortControllerVM → ViewModel. The surface is property-led (properties 19/33, methods 6/33), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyManagementSortControllerVM` | `public ArmyManagementSortControllerVM(MBBindingList<ArmyManagementItemVM>listToControl)` | constructor |
| `ExecuteSortByDistance` | `public void ExecuteSortByDistance()` | method |
| `ExecuteSortByCost` | `public void ExecuteSortByCost()` | method |
| `ExecuteSortByStrength` | `public void ExecuteSortByStrength()` | method |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | method |
| `ExecuteSortByClan` | `public void ExecuteSortByClan()` | method |
| `ExecuteSortByShipCount` | `public void ExecuteSortByShipCount()` | method |
| `DistanceState` | `public int DistanceState` | property |
| `CostState` | `public int CostState` | property |
| `StrengthState` | `public int StrengthState` | property |
| `NameState` | `public int NameState` | property |
| `ClanState` | `public int ClanState` | property |
| `ShipCountState` | `public int ShipCountState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsCostSelected` | `public bool IsCostSelected` | property |
| `IsStrengthSelected` | `public bool IsStrengthSelected` | property |
| `IsDistanceSelected` | `public bool IsDistanceSelected` | property |
| `IsClanSelected` | `public bool IsClanSelected` | property |
| `IsShipCountSelected` | `public bool IsShipCountSelected` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ArmyManagementItemVM>` | property |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemDistanceComparer : ArmyManagementSortControllerVM.ItemComparerBase` | property |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemCostComparer : ArmyManagementSortControllerVM.ItemComparerBase` | property |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemStrengthComparer : ArmyManagementSortControllerVM.ItemComparerBase` | property |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ArmyManagementSortControllerVM.ItemComparerBase` | property |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemClanComparer : ArmyManagementSortControllerVM.ItemComparerBase` | property |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemShipCountComparer : ArmyManagementSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ArmyManagementItemVM>` | nested type |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemDistanceComparer : ArmyManagementSortControllerVM.ItemComparerBase` | nested type |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemCostComparer : ArmyManagementSortControllerVM.ItemComparerBase` | nested type |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemStrengthComparer : ArmyManagementSortControllerVM.ItemComparerBase` | nested type |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ArmyManagementSortControllerVM.ItemComparerBase` | nested type |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemClanComparer : ArmyManagementSortControllerVM.ItemComparerBase` | nested type |
| `ArmyManagementSortControllerVM.ItemComparerBase` | `public class ItemShipCountComparer : ArmyManagementSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- [same namespace ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM)
- [same namespace ArmyManagementItemVM](../ArmyManagementItemVM)
- [same namespace ArmyManagementVM](../ArmyManagementVM)
