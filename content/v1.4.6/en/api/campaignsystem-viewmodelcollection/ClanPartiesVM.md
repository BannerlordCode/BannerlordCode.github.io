---
title: "ClanPartiesVM"
description: "ClanPartiesVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 28 exposed members (8 methods, 19 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs."
---
# ClanPartiesVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartiesVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs`

## Overview

ClanPartiesVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanPartiesVM → ViewModel. It exposes 28 public/protected members: 8 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPartiesVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories) the module directory; inheritance chain ClanPartiesVM → ViewModel. The surface is property-led (properties 19/28, methods 8/28), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TotalExpense` | `public int TotalExpense` | property |
| `TotalIncome` | `public int TotalIncome` | property |
| `ClanPartiesVM` | `public ClanPartiesVM(Action onExpenseChange, Action<Hero>openPartyAsManage, Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshTotalExpense` | `public void RefreshTotalExpense()` | method |
| `RefreshPartiesList` | `public void RefreshPartiesList()` | method |
| `ExecuteCreateNewParty` | `public void ExecuteCreateNewParty()` | method |
| `SelectParty` | `public void SelectParty(PartyBase party)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnShowNewPartyPopup` | `public void OnShowNewPartyPopup()` | method |
| `OnShowChangeLeaderPopup` | `public void OnShowChangeLeaderPopup()` | method |
| `CreateNewPartyActionHint` | `public HintViewModel CreateNewPartyActionHint` | property |
| `IsAnyValidPartySelected` | `public bool IsAnyValidPartySelected` | property |
| `NameText` | `public string NameText` | property |
| `CaravansText` | `public string CaravansText` | property |
| `GarrisonsText` | `public string GarrisonsText` | property |
| `PartiesText` | `public string PartiesText` | property |
| `MoraleText` | `public string MoraleText` | property |
| `LocationText` | `public string LocationText` | property |
| `CreateNewPartyText` | `public string CreateNewPartyText` | property |
| `SizeText` | `public string SizeText` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `CanCreateNewParty` | `public bool CanCreateNewParty` | property |
| `MBBindingList` | `public MBBindingList<ClanPartyItemVM>Parties` | property |
| `MBBindingList` | `public MBBindingList<ClanPartyItemVM>Caravans` | property |
| `MBBindingList` | `public MBBindingList<ClanPartyItemVM>Garrisons` | property |
| `CurrentSelectedParty` | `public ClanPartyItemVM CurrentSelectedParty` | property |
| `SortController` | `public ClanPartiesSortControllerVM SortController` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM)
- [same namespace ClanFiefsVM](../ClanFiefsVM)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM)
- [same namespace ClanIncomeVM](../ClanIncomeVM)
