---
title: "ScoreboardUnitItemComparerBase"
description: "Auto-generated class reference for ScoreboardUnitItemComparerBase."
---
# ScoreboardUnitItemComparerBase

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ScoreboardUnitItemComparerBase : IComparer<SPScoreboardUnitVM>`
**Base:** `IComparer<SPScoreboardUnitVM>`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs`

## Overview

`ScoreboardUnitItemComparerBase` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** **Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of ScoreboardUnitItemComparerBase from the subsystem API first
ScoreboardUnitItemComparerBase scoreboardUnitItemComparerBase = ...;
scoreboardUnitItemComparerBase.SetSortMode(false);
```

### Compare
`public abstract int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ScoreboardUnitItemComparerBase from the subsystem API first
ScoreboardUnitItemComparerBase scoreboardUnitItemComparerBase = ...;
var result = scoreboardUnitItemComparerBase.Compare(x, y);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ScoreboardUnitItemComparerBase instance = ...;
```

## See Also

- [Area Index](../)