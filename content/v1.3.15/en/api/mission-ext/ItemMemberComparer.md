---
title: "ItemMemberComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemMemberComparer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemMemberComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemMemberComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase`
**Base:** `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase`
**Area:** mission-ext

## Overview

`ItemMemberComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingState` | `public int RemainingState { get; set; }` |
| `IsRemainingSelected` | `public bool IsRemainingSelected { get; set; }` |
| `KillState` | `public int KillState { get; set; }` |
| `IsKillSelected` | `public bool IsKillSelected { get; set; }` |
| `UpgradeState` | `public int UpgradeState { get; set; }` |
| `IsUpgradeSelected` | `public bool IsUpgradeSelected { get; set; }` |
| `DeadState` | `public int DeadState { get; set; }` |
| `IsDeadSelected` | `public bool IsDeadSelected { get; set; }` |
| `WoundedState` | `public int WoundedState { get; set; }` |
| `IsWoundedSelected` | `public bool IsWoundedSelected { get; set; }` |
| `RoutedState` | `public int RoutedState { get; set; }` |
| `IsRoutedSelected` | `public bool IsRoutedSelected { get; set; }` |

## Key Methods

### ExecuteSortByRemaining
`public void ExecuteSortByRemaining()`

**Purpose:** Executes the `sort by remaining` operation or workflow.

### ExecuteSortByKill
`public void ExecuteSortByKill()`

**Purpose:** Executes the `sort by kill` operation or workflow.

### ExecuteSortByUpgrade
`public void ExecuteSortByUpgrade()`

**Purpose:** Executes the `sort by upgrade` operation or workflow.

### ExecuteSortByDead
`public void ExecuteSortByDead()`

**Purpose:** Executes the `sort by dead` operation or workflow.

### ExecuteSortByWounded
`public void ExecuteSortByWounded()`

**Purpose:** Executes the `sort by wounded` operation or workflow.

### ExecuteSortByRouted
`public void ExecuteSortByRouted()`

**Purpose:** Executes the `sort by routed` operation or workflow.

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a ItemMemberComparer instance from game state, then call one of its public methods
var value = new ItemMemberComparer();
value.ExecuteSortByRemaining();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
