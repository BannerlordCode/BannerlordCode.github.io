---
title: "ClanIncomeVM"
description: "Auto-generated class reference for ClanIncomeVM."
---
# ClanIncomeVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanIncomeVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeVM.cs`

## Overview

`ClanIncomeVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalIncome` | `public int TotalIncome { get; }` |
| `CurrentSelectedAlley` | `public ClanFinanceAlleyItemVM CurrentSelectedAlley { get; set; }` |
| `CurrentSelectedIncome` | `public ClanFinanceWorkshopItemVM CurrentSelectedIncome { get; set; }` |
| `CurrentSelectedSupporterGroup` | `public ClanSupporterGroupVM CurrentSelectedSupporterGroup { get; set; }` |
| `IsAnyValidAlleySelected` | `public bool IsAnyValidAlleySelected { get; set; }` |
| `IsAnyValidIncomeSelected` | `public bool IsAnyValidIncomeSelected { get; set; }` |
| `IsAnyValidSupporterSelected` | `public bool IsAnyValidSupporterSelected { get; set; }` |
| `IncomeText` | `public string IncomeText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `WorkshopText` | `public string WorkshopText { get; set; }` |
| `SupportersText` | `public string SupportersText { get; set; }` |
| `AlleysText` | `public string AlleysText { get; set; }` |
| `NoAdditionalIncomesText` | `public string NoAdditionalIncomesText { get; set; }` |
| `Incomes` | `public MBBindingList<ClanFinanceWorkshopItemVM> Incomes { get; set; }` |
| `SupporterGroups` | `public MBBindingList<ClanSupporterGroupVM> SupporterGroups { get; set; }` |
| `Alleys` | `public MBBindingList<ClanFinanceAlleyItemVM> Alleys { get; set; }` |
| `SortController` | `public ClanIncomeSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanIncomeVM from the subsystem API first
ClanIncomeVM clanIncomeVM = ...;
clanIncomeVM.RefreshValues();
```

### RefreshList
`public void RefreshList()`

**Purpose:** **Purpose:** Keeps the display or cache of list in sync with the underlying state.

```csharp
// Obtain an instance of ClanIncomeVM from the subsystem API first
ClanIncomeVM clanIncomeVM = ...;
clanIncomeVM.RefreshList();
```

### SelectWorkshop
`public void SelectWorkshop(Workshop workshop)`

**Purpose:** **Purpose:** Executes the SelectWorkshop logic.

```csharp
// Obtain an instance of ClanIncomeVM from the subsystem API first
ClanIncomeVM clanIncomeVM = ...;
clanIncomeVM.SelectWorkshop(workshop);
```

### SelectAlley
`public void SelectAlley(Alley alley)`

**Purpose:** **Purpose:** Executes the SelectAlley logic.

```csharp
// Obtain an instance of ClanIncomeVM from the subsystem API first
ClanIncomeVM clanIncomeVM = ...;
clanIncomeVM.SelectAlley(alley);
```

### RefreshTotalIncome
`public void RefreshTotalIncome()`

**Purpose:** **Purpose:** Keeps the display or cache of total income in sync with the underlying state.

```csharp
// Obtain an instance of ClanIncomeVM from the subsystem API first
ClanIncomeVM clanIncomeVM = ...;
clanIncomeVM.RefreshTotalIncome();
```

### OnRefresh
`public void OnRefresh()`

**Purpose:** **Purpose:** Invoked when the refresh event is raised.

```csharp
// Obtain an instance of ClanIncomeVM from the subsystem API first
ClanIncomeVM clanIncomeVM = ...;
clanIncomeVM.OnRefresh();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanIncomeVM clanIncomeVM = ...;
clanIncomeVM.RefreshValues();
```

## See Also

- [Area Index](../)