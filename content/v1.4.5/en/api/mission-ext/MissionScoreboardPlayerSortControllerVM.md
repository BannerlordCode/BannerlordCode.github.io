---
title: "MissionScoreboardPlayerSortControllerVM"
description: "Auto-generated class reference for MissionScoreboardPlayerSortControllerVM."
---
# MissionScoreboardPlayerSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionScoreboardPlayerSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerSortControllerVM.cs`

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

**Purpose:** **Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
var result = missionScoreboardPlayerSortControllerVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.RefreshValues();
```

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** **Purpose:** Executes the SortByCurrentState logic.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.SortByCurrentState();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by name.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByScore
`public void ExecuteSortByScore()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by score.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.ExecuteSortByScore();
```

### ExecuteSortByKill
`public void ExecuteSortByKill()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by kill.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.ExecuteSortByKill();
```

### ExecuteSortByAssist
`public void ExecuteSortByAssist()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by assist.

```csharp
// Obtain an instance of MissionScoreboardPlayerSortControllerVM from the subsystem API first
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.ExecuteSortByAssist();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionScoreboardPlayerSortControllerVM missionScoreboardPlayerSortControllerVM = ...;
missionScoreboardPlayerSortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)