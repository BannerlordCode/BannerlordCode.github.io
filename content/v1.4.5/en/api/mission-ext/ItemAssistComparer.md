---
title: "ItemAssistComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemAssistComparer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemAssistComparer

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemAssistComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**Area:** mission-ext

## Overview

`ItemAssistComparer` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `ScoreText` | `public string ScoreText { get; set; }` |
| `KillText` | `public string KillText { get; set; }` |
| `AssistText` | `public string AssistText { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `ScoreState` | `public int ScoreState { get; set; }` |
| `KillState` | `public int KillState { get; set; }` |
| `AssistState` | `public int AssistState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsScoreSelected` | `public bool IsScoreSelected { get; set; }` |
| `IsKillSelected` | `public bool IsKillSelected { get; set; }` |
| `IsAssistSelected` | `public bool IsAssistSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** Handles logic related to `compare`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** Handles logic related to `sort by current state`.

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Executes the `sort by name` operation or workflow.

### ExecuteSortByScore
`public void ExecuteSortByScore()`

**Purpose:** Executes the `sort by score` operation or workflow.

### ExecuteSortByKill
`public void ExecuteSortByKill()`

**Purpose:** Executes the `sort by kill` operation or workflow.

### ExecuteSortByAssist
`public void ExecuteSortByAssist()`

**Purpose:** Executes the `sort by assist` operation or workflow.

## Usage Example

```csharp
// First obtain a ItemAssistComparer instance from game state, then call one of its public methods
var value = new ItemAssistComparer();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
