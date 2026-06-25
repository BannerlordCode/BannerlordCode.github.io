---
title: "ClanPartiesVM"
description: "Auto-generated class reference for ClanPartiesVM."
---
# ClanPartiesVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ClanPartiesVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanPartiesVM.cs`

## Overview

`ClanPartiesVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalExpense` | `public int TotalExpense { get; }` |
| `TotalIncome` | `public int TotalIncome { get; }` |
| `CreateNewPartyActionHint` | `public HintViewModel CreateNewPartyActionHint { get; set; }` |
| `IsAnyValidPartySelected` | `public bool IsAnyValidPartySelected { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CaravansText` | `public string CaravansText { get; set; }` |
| `GarrisonsText` | `public string GarrisonsText { get; set; }` |
| `PartiesText` | `public string PartiesText { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CreateNewPartyText` | `public string CreateNewPartyText { get; set; }` |
| `SizeText` | `public string SizeText { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `CanCreateNewParty` | `public bool CanCreateNewParty { get; set; }` |
| `Parties` | `public MBBindingList<ClanPartyItemVM> Parties { get; set; }` |
| `Caravans` | `public MBBindingList<ClanPartyItemVM> Caravans { get; set; }` |
| `Garrisons` | `public MBBindingList<ClanPartyItemVM> Garrisons { get; set; }` |
| `CurrentSelectedParty` | `public ClanPartyItemVM CurrentSelectedParty { get; set; }` |
| `SortController` | `public ClanPartiesSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ClanPartiesVM from the subsystem API first
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshValues();
```

### RefreshTotalExpense
`public void RefreshTotalExpense()`

**Purpose:** Keeps the display or cache of total expense in sync with the underlying state.

```csharp
// Obtain an instance of ClanPartiesVM from the subsystem API first
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshTotalExpense();
```

### RefreshPartiesList
`public void RefreshPartiesList()`

**Purpose:** Keeps the display or cache of parties list in sync with the underlying state.

```csharp
// Obtain an instance of ClanPartiesVM from the subsystem API first
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshPartiesList();
```

### ExecuteCreateNewParty
`public void ExecuteCreateNewParty()`

**Purpose:** Runs the operation or workflow associated with create new party.

```csharp
// Obtain an instance of ClanPartiesVM from the subsystem API first
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.ExecuteCreateNewParty();
```

### SelectParty
`public void SelectParty(PartyBase party)`

**Purpose:** Executes the SelectParty logic.

```csharp
// Obtain an instance of ClanPartiesVM from the subsystem API first
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.SelectParty(party);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ClanPartiesVM from the subsystem API first
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnFinalize();
```

### OnShowNewPartyPopup
`public void OnShowNewPartyPopup()`

**Purpose:** Invoked when the show new party popup event is raised.

```csharp
// Obtain an instance of ClanPartiesVM from the subsystem API first
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnShowNewPartyPopup();
```

### OnShowChangeLeaderPopup
`public void OnShowChangeLeaderPopup()`

**Purpose:** Invoked when the show change leader popup event is raised.

```csharp
// Obtain an instance of ClanPartiesVM from the subsystem API first
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.OnShowChangeLeaderPopup();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ClanPartiesVM clanPartiesVM = ...;
clanPartiesVM.RefreshValues();
```

## See Also

- [Area Index](../)