---
title: "MissionDuelLandmarkMarkerVM"
description: "Auto-generated class reference for MissionDuelLandmarkMarkerVM."
---
# MissionDuelLandmarkMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionDuelLandmarkMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/MissionDuelLandmarkMarkerVM.cs`

## Overview

`MissionDuelLandmarkMarkerVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInScreenBoundaries` | `public bool IsInScreenBoundaries { get; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `TroopType` | `public int TroopType { get; set; }` |
| `ActionDescriptionText` | `public string ActionDescriptionText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionDuelLandmarkMarkerVM from the subsystem API first
MissionDuelLandmarkMarkerVM missionDuelLandmarkMarkerVM = ...;
missionDuelLandmarkMarkerVM.RefreshValues();
```

### UpdateScreenPosition
`public void UpdateScreenPosition(Camera missionCamera)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of screen position.

```csharp
// Obtain an instance of MissionDuelLandmarkMarkerVM from the subsystem API first
MissionDuelLandmarkMarkerVM missionDuelLandmarkMarkerVM = ...;
missionDuelLandmarkMarkerVM.UpdateScreenPosition(missionCamera);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionDuelLandmarkMarkerVM missionDuelLandmarkMarkerVM = ...;
missionDuelLandmarkMarkerVM.RefreshValues();
```

## See Also

- [Area Index](../)