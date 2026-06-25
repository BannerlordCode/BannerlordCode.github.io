---
title: "ItemComparerBase"
description: "Auto-generated class reference for ItemComparerBase."
---
# ItemComparerBase

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ItemComparerBase : IComparer<MissionScoreboardPlayerVM>`
**Base:** `IComparer<MissionScoreboardPlayerVM>`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard/MissionScoreboardPlayerSortControllerVM.cs`

## Overview

`ItemComparerBase` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of ItemComparerBase from the subsystem API first
ItemComparerBase itemComparerBase = ...;
itemComparerBase.SetSortMode(false);
```

### Compare
`public abstract int Compare(MissionScoreboardPlayerVM x, MissionScoreboardPlayerVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ItemComparerBase from the subsystem API first
ItemComparerBase itemComparerBase = ...;
var result = itemComparerBase.Compare(x, y);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ItemComparerBase instance = ...;
```

## See Also

- [Area Index](../)