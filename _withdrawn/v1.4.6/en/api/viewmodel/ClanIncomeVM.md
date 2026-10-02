---
title: "ClanIncomeVM"
description: "ClanIncomeVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories, inheriting ViewModel; 26 exposed members (6 methods, 19 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanIncomeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanIncomeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanIncomeVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanIncomeVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 26 public/protected members: 6 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanIncomeVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, inheritance chain ClanIncomeVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 19/26, methods 6/26), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TotalIncome` | `public int TotalIncome` | property |
| `ClanIncomeVM` | `public ClanIncomeVM(Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshList` | `public void RefreshList()` | method |
| `SelectWorkshop` | `public void SelectWorkshop(Workshop workshop)` | method |
| `SelectAlley` | `public void SelectAlley(Alley alley)` | method |
| `RefreshTotalIncome` | `public void RefreshTotalIncome()` | method |
| `OnRefresh` | `public void OnRefresh()` | method |
| `CurrentSelectedAlley` | `public ClanFinanceAlleyItemVM CurrentSelectedAlley` | property |
| `CurrentSelectedIncome` | `public ClanFinanceWorkshopItemVM CurrentSelectedIncome` | property |
| `CurrentSelectedSupporterGroup` | `public ClanSupporterGroupVM CurrentSelectedSupporterGroup` | property |
| `IsAnyValidAlleySelected` | `public bool IsAnyValidAlleySelected` | property |
| `IsAnyValidIncomeSelected` | `public bool IsAnyValidIncomeSelected` | property |
| `IsAnyValidSupporterSelected` | `public bool IsAnyValidSupporterSelected` | property |
| `IncomeText` | `public string IncomeText` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `NameText` | `public string NameText` | property |
| `LocationText` | `public string LocationText` | property |
| `WorkshopText` | `public string WorkshopText` | property |
| `SupportersText` | `public string SupportersText` | property |
| `AlleysText` | `public string AlleysText` | property |
| `NoAdditionalIncomesText` | `public string NoAdditionalIncomesText` | property |
| `MBBindingList` | `public MBBindingList<ClanFinanceWorkshopItemVM>Incomes` | property |
| `MBBindingList` | `public MBBindingList<ClanSupporterGroupVM>SupporterGroups` | property |
| `MBBindingList` | `public MBBindingList<ClanFinanceAlleyItemVM>Alleys` | property |
| `SortController` | `public ClanIncomeSortControllerVM SortController` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM/)
- [same namespace ClanFiefsVM](../ClanFiefsVM/)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM/)
- [same namespace ClanMembersSortControllerVM](../ClanMembersSortControllerVM/)
