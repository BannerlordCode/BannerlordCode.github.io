---
title: "MissionPeerMarkerTargetVM"
description: "Auto-generated class reference for MissionPeerMarkerTargetVM."
---
# MissionPeerMarkerTargetVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionPeerMarkerTargetVM : MissionMarkerTargetVM`
**Base:** `MissionMarkerTargetVM`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets/MissionPeerMarkerTargetVM.cs`

## Overview

`MissionPeerMarkerTargetVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TargetPeer` | `public MissionPeer TargetPeer { get; }` |
| `WorldPosition` | `public override Vec3 WorldPosition { get; }` |

## Key Methods

### UpdateScreenPosition
`public override void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of screen position.

```csharp
// Obtain an instance of MissionPeerMarkerTargetVM from the subsystem API first
MissionPeerMarkerTargetVM missionPeerMarkerTargetVM = ...;
missionPeerMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionPeerMarkerTargetVM missionPeerMarkerTargetVM = ...;
missionPeerMarkerTargetVM.UpdateScreenPosition(missionCamera);
```

## See Also

- [Area Index](../)