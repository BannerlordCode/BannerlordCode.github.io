---
title: "TournamentLeaderboardSortControllerVM"
description: "Auto-generated class reference for TournamentLeaderboardSortControllerVM."
---
# TournamentLeaderboardSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentLeaderboardSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TournamentLeaderboard/TournamentLeaderboardSortControllerVM.cs`

## Overview

`TournamentLeaderboardSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameState` | `public int NameState { get; set; }` |
| `VictoriesState` | `public int VictoriesState { get; set; }` |
| `PrizeState` | `public int PrizeState { get; set; }` |
| `PlacementState` | `public int PlacementState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsPrizeSelected` | `public bool IsPrizeSelected { get; set; }` |
| `IsPlacementSelected` | `public bool IsPlacementSelected { get; set; }` |
| `IsVictoriesSelected` | `public bool IsVictoriesSelected { get; set; }` |

## Key Methods

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Runs the operation or workflow associated with `sort by name`.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByPrize
`public void ExecuteSortByPrize()`

**Purpose:** Runs the operation or workflow associated with `sort by prize`.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByPrize();
```

### ExecuteSortByPlacement
`public void ExecuteSortByPlacement()`

**Purpose:** Runs the operation or workflow associated with `sort by placement`.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByPlacement();
```

### ExecuteSortByVictories
`public void ExecuteSortByVictories()`

**Purpose:** Runs the operation or workflow associated with `sort by victories`.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByVictories();
```

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of TournamentLeaderboardSortControllerVM from the subsystem API first
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
var result = tournamentLeaderboardSortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentLeaderboardSortControllerVM tournamentLeaderboardSortControllerVM = ...;
tournamentLeaderboardSortControllerVM.ExecuteSortByName();
```

## See Also

- [Area Index](../)