---
title: "MissionState"
description: "Auto-generated class reference for MissionState."
---
# MissionState

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionState : GameState`
**Base:** `GameState`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs`

## Overview

`MissionState` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Handler` | `public IMissionSystemHandler Handler { get; }` |
| `Current` | `public static MissionState Current { get; }` |
| `CurrentMission` | `public Mission CurrentMission { get; }` |
| `MissionName` | `public string MissionName { get; }` |
| `FirstMissionTickAfterLoading` | `public bool FirstMissionTickAfterLoading { get; }` |
| `Paused` | `public bool Paused { get; set; }` |

## Key Methods

### OpenNew
`public static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)`

**Purpose:** **Purpose:** Opens the resource or UI associated with new.

```csharp
// Static call; no instance required
MissionState.OpenNew("example", rec, handler, false, false);
```

### BeginDelayedDisconnectFromMission
`public void BeginDelayedDisconnectFromMission()`

**Purpose:** **Purpose:** Executes the BeginDelayedDisconnectFromMission logic.

```csharp
// Obtain an instance of MissionState from the subsystem API first
MissionState missionState = ...;
missionState.BeginDelayedDisconnectFromMission();
```

## Usage Example

```csharp
MissionState.OpenNew("example", rec, handler, false, false);
```

## See Also

- [Area Index](../)