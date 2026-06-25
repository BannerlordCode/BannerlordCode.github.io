---
title: "ScoreboardUnitItemComparerBase"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardUnitItemComparerBase`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ScoreboardUnitItemComparerBase

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ScoreboardUnitItemComparerBase : IComparer<SPScoreboardUnitVM>`
**Base:** `IComparer<SPScoreboardUnitVM>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSortControllerVM.cs`

## Overview

`ScoreboardUnitItemComparerBase` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var implementation = new CustomScoreboardUnitItemComparerBase();
```

## See Also

- [Complete Class Catalog](../catalog)