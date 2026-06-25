---
title: "ItemMemberComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemMemberComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemMemberComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemMemberComparer : ScoreboardUnitItemComparerBase`
**Base:** `ScoreboardUnitItemComparerBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSortControllerVM.cs`

## Overview

`ItemMemberComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new ItemMemberComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)