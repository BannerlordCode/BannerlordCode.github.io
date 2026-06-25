---
title: "MissionObjectiveMarkerVM"
description: "Auto-generated class reference for MissionObjectiveMarkerVM."
---
# MissionObjectiveMarkerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective/MissionObjectiveMarkerVM.cs`

## Overview

`MissionObjectiveMarkerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `ObjectiveTypeId` | `public string ObjectiveTypeId { get; set; }` |
| `ObjectiveName` | `public string ObjectiveName { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionObjectiveMarkerVM from the subsystem API first
MissionObjectiveMarkerVM missionObjectiveMarkerVM = ...;
missionObjectiveMarkerVM.RefreshValues();
```

### UpdateActiveState
`public void UpdateActiveState()`

**Purpose:** Recalculates and stores the latest representation of active state.

```csharp
// Obtain an instance of MissionObjectiveMarkerVM from the subsystem API first
MissionObjectiveMarkerVM missionObjectiveMarkerVM = ...;
missionObjectiveMarkerVM.UpdateActiveState();
```

### UpdatePosition
`public void UpdatePosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of position.

```csharp
// Obtain an instance of MissionObjectiveMarkerVM from the subsystem API first
MissionObjectiveMarkerVM missionObjectiveMarkerVM = ...;
missionObjectiveMarkerVM.UpdatePosition(missionCamera);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionObjectiveMarkerVM missionObjectiveMarkerVM = ...;
missionObjectiveMarkerVM.RefreshValues();
```

## See Also

- [Area Index](../)