---
title: "MarkerDistanceComparer"
description: "Auto-generated class reference for MarkerDistanceComparer."
---
# MarkerDistanceComparer

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MarkerDistanceComparer : IComparer<MissionMarkerTargetVM>`
**Base:** `IComparer<MissionMarkerTargetVM>`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker/MultiplayerMissionMarkerVM.cs`

## Overview

`MarkerDistanceComparer` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.FlagMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(MissionMarkerTargetVM x, MissionMarkerTargetVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MarkerDistanceComparer from the subsystem API first
MarkerDistanceComparer markerDistanceComparer = ...;
var result = markerDistanceComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MarkerDistanceComparer markerDistanceComparer = ...;
markerDistanceComparer.Compare(x, y);
```

## See Also

- [Area Index](../)