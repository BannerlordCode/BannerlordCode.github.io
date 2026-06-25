---
title: "MissionTimeTracker"
description: "Auto-generated class reference for MissionTimeTracker."
---
# MissionTimeTracker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionTimeTracker`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MissionTimeTracker.cs`

## Overview

`MissionTimeTracker` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumberOfTicks` | `public long NumberOfTicks { get; }` |
| `DeltaTimeInTicks` | `public long DeltaTimeInTicks { get; }` |

## Key Methods

### Tick
`public void Tick(float seconds)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionTimeTracker from the subsystem API first
MissionTimeTracker missionTimeTracker = ...;
missionTimeTracker.Tick(0);
```

### UpdateSync
`public void UpdateSync(float newValue)`

**Purpose:** Recalculates and stores the latest representation of `sync`.

```csharp
// Obtain an instance of MissionTimeTracker from the subsystem API first
MissionTimeTracker missionTimeTracker = ...;
missionTimeTracker.UpdateSync(0);
```

### GetLastSyncDifference
`public float GetLastSyncDifference()`

**Purpose:** Reads and returns the `last sync difference` value held by the current object.

```csharp
// Obtain an instance of MissionTimeTracker from the subsystem API first
MissionTimeTracker missionTimeTracker = ...;
var result = missionTimeTracker.GetLastSyncDifference();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionTimeTracker missionTimeTracker = ...;
missionTimeTracker.Tick(0);
```

## See Also

- [Area Index](../)