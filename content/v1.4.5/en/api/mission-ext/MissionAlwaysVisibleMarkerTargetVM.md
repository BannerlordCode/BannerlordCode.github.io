---
title: "MissionAlwaysVisibleMarkerTargetVM"
description: "Auto-generated class reference for MissionAlwaysVisibleMarkerTargetVM."
---
# MissionAlwaysVisibleMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAlwaysVisibleMarkerTargetVM : MissionMarkerTargetVM`
**Base:** `MissionMarkerTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionAlwaysVisibleMarkerTargetVM.cs`

## Overview

`MissionAlwaysVisibleMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetPeer` | `public MissionPeer TargetPeer { get; }` |

## Key Methods

### ExecuteRemove
`public void ExecuteRemove()`

**Purpose:** Runs the operation or workflow associated with `remove`.

```csharp
// Obtain an instance of MissionAlwaysVisibleMarkerTargetVM from the subsystem API first
MissionAlwaysVisibleMarkerTargetVM missionAlwaysVisibleMarkerTargetVM = ...;
missionAlwaysVisibleMarkerTargetVM.ExecuteRemove();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionAlwaysVisibleMarkerTargetVM missionAlwaysVisibleMarkerTargetVM = ...;
missionAlwaysVisibleMarkerTargetVM.ExecuteRemove();
```

## See Also

- [Area Index](../)