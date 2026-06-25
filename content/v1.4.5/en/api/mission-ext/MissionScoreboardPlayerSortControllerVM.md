---
title: "MissionScoreboardPlayerSortControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionScoreboardPlayerSortControllerVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionScoreboardPlayerSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardPlayerSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerSortControllerVM.cs`

## Overview

`MissionScoreboardPlayerSortControllerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new MissionScoreboardPlayerSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)