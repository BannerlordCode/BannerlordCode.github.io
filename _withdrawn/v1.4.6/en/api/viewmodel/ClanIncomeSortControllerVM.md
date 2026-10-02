---
title: "ClanIncomeSortControllerVM"
description: "ClanIncomeSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories, inheriting ViewModel; 37 exposed members (5 methods, 20 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanIncomeSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanIncomeSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanIncomeSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanIncomeSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 37 public/protected members: 5 methods, 20 properties, 1 constructors, 11 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanIncomeSortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, inheritance chain ClanIncomeSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 20/37, methods 5/37), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanIncomeSortControllerVM` | `public ClanIncomeSortControllerVM(MBBindingList<ClanFinanceWorkshopItemVM>workshopList, MBBindingList<ClanSupporterGroupVM>supporterList, MBBindingList<ClanFinanceAlleyItemVM>alleyList)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | method |
| `ExecuteSortByLocation` | `public void ExecuteSortByLocation()` | method |
| `ExecuteSortByIncome` | `public void ExecuteSortByIncome()` | method |
| `ResetAllStates` | `public void ResetAllStates()` | method |
| `NameState` | `public int NameState` | property |
| `LocationState` | `public int LocationState` | property |
| `IncomeState` | `public int IncomeState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsLocationSelected` | `public bool IsLocationSelected` | property |
| `IsIncomeSelected` | `public bool IsIncomeSelected` | property |
| `NameText` | `public string NameText` | property |
| `LocationText` | `public string LocationText` | property |
| `IncomeText` | `public string IncomeText` | property |
| `IComparer` | `public abstract class WorkshopItemComparerBase : IComparer<ClanFinanceWorkshopItemVM>` | property |
| `IComparer` | `public abstract class SupporterItemComparerBase : IComparer<ClanSupporterGroupVM>` | property |
| `IComparer` | `public abstract class AlleyItemComparerBase : IComparer<ClanFinanceAlleyItemVM>` | property |
| `ClanIncomeSortControllerVM.WorkshopItemComparerBase` | `public class WorkshopItemNameComparer : ClanIncomeSortControllerVM.WorkshopItemComparerBase` | property |
| `ClanIncomeSortControllerVM.SupporterItemComparerBase` | `public class SupporterItemNameComparer : ClanIncomeSortControllerVM.SupporterItemComparerBase` | property |
| `ClanIncomeSortControllerVM.AlleyItemComparerBase` | `public class AlleyItemNameComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase` | property |
| `ClanIncomeSortControllerVM.WorkshopItemComparerBase` | `public class WorkshopItemLocationComparer : ClanIncomeSortControllerVM.WorkshopItemComparerBase` | property |
| `ClanIncomeSortControllerVM.AlleyItemComparerBase` | `public class AlleyItemLocationComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase` | property |
| `ClanIncomeSortControllerVM.WorkshopItemComparerBase` | `public class WorkshopItemIncomeComparer : ClanIncomeSortControllerVM.WorkshopItemComparerBase` | property |
| `ClanIncomeSortControllerVM.SupporterItemComparerBase` | `public class SupporterItemIncomeComparer : ClanIncomeSortControllerVM.SupporterItemComparerBase` | property |
| `ClanIncomeSortControllerVM.AlleyItemComparerBase` | `public class AlleyItemIncomeComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase` | property |
| `IComparer` | `public abstract class WorkshopItemComparerBase : IComparer<ClanFinanceWorkshopItemVM>` | nested type |
| `IComparer` | `public abstract class SupporterItemComparerBase : IComparer<ClanSupporterGroupVM>` | nested type |
| `IComparer` | `public abstract class AlleyItemComparerBase : IComparer<ClanFinanceAlleyItemVM>` | nested type |
| `ClanIncomeSortControllerVM.WorkshopItemComparerBase` | `public class WorkshopItemNameComparer : ClanIncomeSortControllerVM.WorkshopItemComparerBase` | nested type |
| `ClanIncomeSortControllerVM.SupporterItemComparerBase` | `public class SupporterItemNameComparer : ClanIncomeSortControllerVM.SupporterItemComparerBase` | nested type |
| `ClanIncomeSortControllerVM.AlleyItemComparerBase` | `public class AlleyItemNameComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase` | nested type |
| `ClanIncomeSortControllerVM.WorkshopItemComparerBase` | `public class WorkshopItemLocationComparer : ClanIncomeSortControllerVM.WorkshopItemComparerBase` | nested type |
| `ClanIncomeSortControllerVM.AlleyItemComparerBase` | `public class AlleyItemLocationComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase` | nested type |
| `ClanIncomeSortControllerVM.WorkshopItemComparerBase` | `public class WorkshopItemIncomeComparer : ClanIncomeSortControllerVM.WorkshopItemComparerBase` | nested type |
| `ClanIncomeSortControllerVM.SupporterItemComparerBase` | `public class SupporterItemIncomeComparer : ClanIncomeSortControllerVM.SupporterItemComparerBase` | nested type |
| `ClanIncomeSortControllerVM.AlleyItemComparerBase` | `public class AlleyItemIncomeComparer : ClanIncomeSortControllerVM.AlleyItemComparerBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM/)
- [same namespace ClanFiefsVM](../ClanFiefsVM/)
- [same namespace ClanIncomeVM](../ClanIncomeVM/)
- [same namespace ClanMembersSortControllerVM](../ClanMembersSortControllerVM/)
