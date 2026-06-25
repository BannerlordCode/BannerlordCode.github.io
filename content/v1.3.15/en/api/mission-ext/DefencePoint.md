---
title: "DefencePoint"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefencePoint`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefencePoint

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefencePoint : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/DefencePoint.cs`

## Overview

`DefencePoint` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Defenders` | `public IEnumerable<Agent> Defenders { get; }` |

## Key Methods

### AddDefender
`public void AddDefender(Agent defender)`

**Purpose:** Adds `defender` to the current collection or state.

### RemoveDefender
`public bool RemoveDefender(Agent defender)`

**Purpose:** Removes `defender` from the current collection or state.

### PurgeInactiveDefenders
`public void PurgeInactiveDefenders()`

**Purpose:** Handles logic related to `purge inactive defenders`.

### GetVacantPosition
`public MatrixFrame GetVacantPosition(Agent a)`

**Purpose:** Gets the current value of `vacant position`.

### CountOccupiedDefenderPositions
`public int CountOccupiedDefenderPositions()`

**Purpose:** Handles logic related to `count occupied defender positions`.

## Usage Example

```csharp
var value = new DefencePoint();
value.AddDefender(defender);
```

## See Also

- [Complete Class Catalog](../catalog)