<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemPlacementComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemPlacementComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemPlacementComparer : TournamentLeaderboardSortControllerVM.ItemComparerBase`
**Base:** `TournamentLeaderboardSortControllerVM.ItemComparerBase`
**Area:** campaign-ext

## Overview

`ItemPlacementComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TournamentLeaderboard`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Executes the `sort by name` operation or workflow.

### ExecuteSortByPrize
`public void ExecuteSortByPrize()`

**Purpose:** Executes the `sort by prize` operation or workflow.

### ExecuteSortByPlacement
`public void ExecuteSortByPlacement()`

**Purpose:** Executes the `sort by placement` operation or workflow.

### ExecuteSortByVictories
`public void ExecuteSortByVictories()`

**Purpose:** Executes the `sort by victories` operation or workflow.

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(TournamentLeaderboardEntryItemVM x, TournamentLeaderboardEntryItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a ItemPlacementComparer instance from game state, then call one of its public methods
var value = new ItemPlacementComparer();
value.ExecuteSortByName();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
