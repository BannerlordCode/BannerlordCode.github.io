---
title: "DefencePoint"
description: "Auto-generated class reference for DefencePoint."
---
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

**Purpose:** **Purpose:** Adds defender to the current collection or state.

```csharp
// Obtain an instance of DefencePoint from the subsystem API first
DefencePoint defencePoint = ...;
defencePoint.AddDefender(defender);
```

### RemoveDefender
`public bool RemoveDefender(Agent defender)`

**Purpose:** **Purpose:** Removes defender from the current collection or state.

```csharp
// Obtain an instance of DefencePoint from the subsystem API first
DefencePoint defencePoint = ...;
var result = defencePoint.RemoveDefender(defender);
```

### PurgeInactiveDefenders
`public void PurgeInactiveDefenders()`

**Purpose:** **Purpose:** Executes the PurgeInactiveDefenders logic.

```csharp
// Obtain an instance of DefencePoint from the subsystem API first
DefencePoint defencePoint = ...;
defencePoint.PurgeInactiveDefenders();
```

### GetVacantPosition
`public MatrixFrame GetVacantPosition(Agent a)`

**Purpose:** **Purpose:** Reads and returns the vacant position value held by the this instance.

```csharp
// Obtain an instance of DefencePoint from the subsystem API first
DefencePoint defencePoint = ...;
var result = defencePoint.GetVacantPosition(a);
```

### CountOccupiedDefenderPositions
`public int CountOccupiedDefenderPositions()`

**Purpose:** **Purpose:** Executes the CountOccupiedDefenderPositions logic.

```csharp
// Obtain an instance of DefencePoint from the subsystem API first
DefencePoint defencePoint = ...;
var result = defencePoint.CountOccupiedDefenderPositions();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefencePoint defencePoint = ...;
defencePoint.AddDefender(defender);
```

## See Also

- [Area Index](../)