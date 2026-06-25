---
title: "ItemUpgradeComparer"
description: "Auto-generated class reference for ItemUpgradeComparer."
---
# ItemUpgradeComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemUpgradeComparer : ScoreboardUnitItemComparerBase`
**Base:** `ScoreboardUnitItemComparerBase`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSortControllerVM.cs`

## Overview

`ItemUpgradeComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ItemUpgradeComparer from the subsystem API first
ItemUpgradeComparer itemUpgradeComparer = ...;
var result = itemUpgradeComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemUpgradeComparer itemUpgradeComparer = ...;
itemUpgradeComparer.Compare(x, y);
```

## See Also

- [Area Index](../)