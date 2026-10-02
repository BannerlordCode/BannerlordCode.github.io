---
title: "ClanPartiesVM"
description: "ClanPartiesVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories, inheriting ViewModel; 28 exposed members (8 methods, 19 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanPartiesVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanPartiesVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanPartiesVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ClanPartiesVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 28 public/protected members: 8 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanPartiesVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories`, inheritance chain ClanPartiesVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 19/28, methods 8/28), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ClanFiefsSortControllerVM](../ClanFiefsSortControllerVM/)
- [same namespace ClanFiefsVM](../ClanFiefsVM/)
- [same namespace ClanIncomeSortControllerVM](../ClanIncomeSortControllerVM/)
- [same namespace ClanIncomeVM](../ClanIncomeVM/)
