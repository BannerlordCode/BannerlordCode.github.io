---
title: "BehaviorShootFromCliff"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorShootFromCliff`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorShootFromCliff

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorShootFromCliff : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorShootFromCliff.cs`

## Overview

`BehaviorShootFromCliff` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetTacticalDefendPosition
`public void SetTacticalDefendPosition(TacticalPosition tacticalPosition)`

**Purpose:** Sets the value or state of `tactical defend position`.

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

### ResetBehavior
`public override void ResetBehavior()`

**Purpose:** Resets `behavior` to its initial state.

## Usage Example

```csharp
var value = new BehaviorShootFromCliff();
value.SetTacticalDefendPosition(tacticalPosition);
```

## See Also

- [Complete Class Catalog](../catalog)