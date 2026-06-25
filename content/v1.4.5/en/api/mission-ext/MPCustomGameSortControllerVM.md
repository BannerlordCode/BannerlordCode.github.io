---
title: "MPCustomGameSortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPCustomGameSortControllerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPCustomGameSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameSortControllerVM.cs`

## Overview

`MPCustomGameSortControllerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentSortOption` | `public CustomServerSortOption? CurrentSortOption { get; }` |
| `IsPremadeMatchesList` | `public bool IsPremadeMatchesList { get; set; }` |
| `IsPingInfoAvailable` | `public bool IsPingInfoAvailable { get; set; }` |
| `CurrentSortState` | `public int CurrentSortState { get; set; }` |
| `IsFavoritesSelected` | `public bool IsFavoritesSelected { get; set; }` |
| `IsServerNameSelected` | `public bool IsServerNameSelected { get; set; }` |
| `IsPasswordSelected` | `public bool IsPasswordSelected { get; set; }` |
| `IsPlayerCountSelected` | `public bool IsPlayerCountSelected { get; set; }` |
| `IsFirstFactionSelected` | `public bool IsFirstFactionSelected { get; set; }` |
| `IsGameTypeSelected` | `public bool IsGameTypeSelected { get; set; }` |
| `IsSecondFactionSelected` | `public bool IsSecondFactionSelected { get; set; }` |
| `IsRegionSelected` | `public bool IsRegionSelected { get; set; }` |
| `IsPremadeMatchTypeSelected` | `public bool IsPremadeMatchTypeSelected { get; set; }` |
| `IsHostSelected` | `public bool IsHostSelected { get; set; }` |
| `IsPingSelected` | `public bool IsPingSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**Purpose:** Handles logic related to `compare`.

### InitializeWithSortState
`public void InitializeWithSortState(CustomServerSortOption? sortOption, SortState sortState = SortState.Default)`

**Purpose:** Initializes the state, resources, or bindings for `with sort state`.

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** Handles logic related to `sort by current state`.

### ExecuteSortByFavorites
`public void ExecuteSortByFavorites()`

**Purpose:** Executes the `sort by favorites` operation or workflow.

### ExecuteSortByServerName
`public void ExecuteSortByServerName()`

**Purpose:** Executes the `sort by server name` operation or workflow.

### ExecuteSortByGameType
`public void ExecuteSortByGameType()`

**Purpose:** Executes the `sort by game type` operation or workflow.

### ExecuteSortByPlayerCount
`public void ExecuteSortByPlayerCount()`

**Purpose:** Executes the `sort by player count` operation or workflow.

### ExecuteSortByPassword
`public void ExecuteSortByPassword()`

**Purpose:** Executes the `sort by password` operation or workflow.

### ExecuteSortByFirstFaction
`public void ExecuteSortByFirstFaction()`

**Purpose:** Executes the `sort by first faction` operation or workflow.

### ExecuteSortBySecondFaction
`public void ExecuteSortBySecondFaction()`

**Purpose:** Executes the `sort by second faction` operation or workflow.

### ExecuteSortByRegion
`public void ExecuteSortByRegion()`

**Purpose:** Executes the `sort by region` operation or workflow.

### ExecuteSortByPremadeMatchType
`public void ExecuteSortByPremadeMatchType()`

**Purpose:** Executes the `sort by premade match type` operation or workflow.

### ExecuteSortByHost
`public void ExecuteSortByHost()`

**Purpose:** Executes the `sort by host` operation or workflow.

### ExecuteSortByPing
`public void ExecuteSortByPing()`

**Purpose:** Executes the `sort by ping` operation or workflow.

## Usage Example

```csharp
var value = new MPCustomGameSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)