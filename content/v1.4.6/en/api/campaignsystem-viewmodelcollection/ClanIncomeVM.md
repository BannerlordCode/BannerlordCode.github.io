---
title: "ClanIncomeVM"
description: "ClanIncomeVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 26 exposed members (6 methods, 19 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs."
---
# ClanIncomeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanIncomeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs`

## Overview

ClanIncomeVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanIncomeVM → ViewModel. It exposes 26 public/protected members: 6 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanIncomeVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories) the module directory; inheritance chain ClanIncomeVM → ViewModel. The surface is property-led (properties 19/26, methods 6/26), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM)
- [same namespace ClanFiefsVM](../ClanFiefsVM)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM)
- [same namespace ClanMembersSortControllerVM](../ClanMembersSortControllerVM)
