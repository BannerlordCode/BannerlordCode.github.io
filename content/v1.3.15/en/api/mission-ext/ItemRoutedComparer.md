---
title: "ItemRoutedComparer"
description: "Auto-generated class reference for ItemRoutedComparer."
---
# ItemRoutedComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemRoutedComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase`
**Base:** `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardSortControllerVM.cs`

## Overview

`ItemRoutedComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemRoutedComparer from the subsystem API first
ItemRoutedComparer itemRoutedComparer = ...;
var result = itemRoutedComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemRoutedComparer itemRoutedComparer = ...;
itemRoutedComparer.Compare(x, y);
```

## See Also

- [Area Index](../)