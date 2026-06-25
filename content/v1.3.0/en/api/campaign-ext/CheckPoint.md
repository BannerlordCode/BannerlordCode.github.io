---
title: "CheckPoint"
description: "Auto-generated class reference for CheckPoint."
---
# CheckPoint

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class CheckPoint`
**Base:** none
**File:** `SandBox/Tournaments/MissionLogics/TownHorseRaceMissionController.cs`

## Overview

`CheckPoint` lives in `SandBox.Tournaments.MissionLogics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Tournaments.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |

## Key Methods

### GetBestTargetPosition
`public Vec3 GetBestTargetPosition()`

**Purpose:** Reads and returns the `best target position` value held by the current object.

```csharp
// Obtain an instance of CheckPoint from the subsystem API first
CheckPoint checkPoint = ...;
var result = checkPoint.GetBestTargetPosition();
```

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**Purpose:** Adds `to check list` to the current collection or state.

```csharp
// Obtain an instance of CheckPoint from the subsystem API first
CheckPoint checkPoint = ...;
checkPoint.AddToCheckList(agent);
```

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**Purpose:** Removes `from check list` from the current collection or state.

```csharp
// Obtain an instance of CheckPoint from the subsystem API first
CheckPoint checkPoint = ...;
checkPoint.RemoveFromCheckList(agent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CheckPoint checkPoint = ...;
checkPoint.GetBestTargetPosition();
```

## See Also

- [Area Index](../)