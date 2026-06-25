---
title: "SiegeEngineMarkerDistanceComparer"
description: "Auto-generated class reference for SiegeEngineMarkerDistanceComparer."
---
# SiegeEngineMarkerDistanceComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeEngineMarkerDistanceComparer : IComparer<MissionSiegeEngineMarkerTargetVM>`
**Base:** `IComparer<MissionSiegeEngineMarkerTargetVM>`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker/MissionSiegeEngineMarkerVM.cs`

## Overview

`SiegeEngineMarkerDistanceComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(MissionSiegeEngineMarkerTargetVM x, MissionSiegeEngineMarkerTargetVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SiegeEngineMarkerDistanceComparer from the subsystem API first
SiegeEngineMarkerDistanceComparer siegeEngineMarkerDistanceComparer = ...;
var result = siegeEngineMarkerDistanceComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeEngineMarkerDistanceComparer siegeEngineMarkerDistanceComparer = ...;
siegeEngineMarkerDistanceComparer.Compare(x, y);
```

## See Also

- [Area Index](../)