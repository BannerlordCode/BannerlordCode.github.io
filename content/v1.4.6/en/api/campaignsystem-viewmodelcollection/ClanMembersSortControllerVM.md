---
title: "ClanMembersSortControllerVM"
description: "ClanMembersSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 17 exposed members (4 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs."
---
# ClanMembersSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanMembersSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs`

## Overview

ClanMembersSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanMembersSortControllerVM → ViewModel. It exposes 17 public/protected members: 4 methods, 9 properties, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanMembersSortControllerVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories) the module directory; inheritance chain ClanMembersSortControllerVM → ViewModel. The surface is property-led (properties 9/17, methods 4/17), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ClanMembersSortControllerVM` | `public ClanMembersSortControllerVM(MBBindingList<MBBindingList<ClanLordItemVM>>listsToControl)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | method |
| `ExecuteSortByLocation` | `public void ExecuteSortByLocation()` | method |
| `ResetAllStates` | `public void ResetAllStates()` | method |
| `NameState` | `public int NameState` | property |
| `LocationState` | `public int LocationState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsLocationSelected` | `public bool IsLocationSelected` | property |
| `NameText` | `public string NameText` | property |
| `LocationText` | `public string LocationText` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanLordItemVM>` | property |
| `ClanMembersSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanMembersSortControllerVM.ItemComparerBase` | property |
| `ClanMembersSortControllerVM.ItemComparerBase` | `public class ItemLocationComparer : ClanMembersSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanLordItemVM>` | nested type |
| `ClanMembersSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanMembersSortControllerVM.ItemComparerBase` | nested type |
| `ClanMembersSortControllerVM.ItemComparerBase` | `public class ItemLocationComparer : ClanMembersSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM)
- [same namespace ClanFiefsVM](../ClanFiefsVM)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM)
- [same namespace ClanIncomeVM](../ClanIncomeVM)
