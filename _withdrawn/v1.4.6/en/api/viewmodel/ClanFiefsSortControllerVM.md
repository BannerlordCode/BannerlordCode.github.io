---
title: "ClanFiefsSortControllerVM"
description: "ClanFiefsSortControllerVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories, inheriting ViewModel; 23 exposed members (5 methods, 13 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFiefsSortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFiefsSortControllerVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanFiefsSortControllerVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanFiefsSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 23 public/protected members: 5 methods, 13 properties, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFiefsSortControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, inheritance chain ClanFiefsSortControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 13/23, methods 5/23), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanFiefsSortControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanFiefsSortControllerVM` | `public ClanFiefsSortControllerVM(List<MBBindingList<ClanSettlementItemVM>>listsToControl)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteSortByName` | `public void ExecuteSortByName()` | method |
| `ExecuteSortByGovernor` | `public void ExecuteSortByGovernor()` | method |
| `ExecuteSortByProfit` | `public void ExecuteSortByProfit()` | method |
| `ResetAllStates` | `public void ResetAllStates()` | method |
| `NameState` | `public int NameState` | property |
| `GovernorState` | `public int GovernorState` | property |
| `ProfitState` | `public int ProfitState` | property |
| `IsNameSelected` | `public bool IsNameSelected` | property |
| `IsGovernorSelected` | `public bool IsGovernorSelected` | property |
| `IsProfitSelected` | `public bool IsProfitSelected` | property |
| `NameText` | `public string NameText` | property |
| `GovernorText` | `public string GovernorText` | property |
| `ProfitText` | `public string ProfitText` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanSettlementItemVM>` | property |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanFiefsSortControllerVM.ItemComparerBase` | property |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemGovernorComparer : ClanFiefsSortControllerVM.ItemComparerBase` | property |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemProfitComparer : ClanFiefsSortControllerVM.ItemComparerBase` | property |
| `IComparer` | `public abstract class ItemComparerBase : IComparer<ClanSettlementItemVM>` | nested type |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemNameComparer : ClanFiefsSortControllerVM.ItemComparerBase` | nested type |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemGovernorComparer : ClanFiefsSortControllerVM.ItemComparerBase` | nested type |
| `ClanFiefsSortControllerVM.ItemComparerBase` | `public class ItemProfitComparer : ClanFiefsSortControllerVM.ItemComparerBase` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClanFiefsVM](../ClanFiefsVM/)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM/)
- [same namespace ClanIncomeVM](../ClanIncomeVM/)
- [same namespace ClanMembersSortControllerVM](../ClanMembersSortControllerVM/)
