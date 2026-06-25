---
title: "MissionObjectiveMarkersVM"
description: "Auto-generated class reference for MissionObjectiveMarkersVM."
---
# MissionObjectiveMarkersVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionObjectiveMarkersVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective/MissionObjectiveMarkersVM.cs`

## Overview

`MissionObjectiveMarkersVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Targets` | `public MBBindingList<MissionObjectiveMarkerVM> Targets { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### Compare
`public int Compare(MissionObjectiveMarkerVM x, MissionObjectiveMarkerVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionObjectiveMarkersVM from the subsystem API first
MissionObjectiveMarkersVM missionObjectiveMarkersVM = ...;
var result = missionObjectiveMarkersVM.Compare(x, y);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionObjectiveMarkersVM from the subsystem API first
MissionObjectiveMarkersVM missionObjectiveMarkersVM = ...;
missionObjectiveMarkersVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionObjectiveMarkersVM from the subsystem API first
MissionObjectiveMarkersVM missionObjectiveMarkersVM = ...;
missionObjectiveMarkersVM.OnFinalize();
```

### UpdateObjective
`public void UpdateObjective(MissionObjective objective)`

**Purpose:** Recalculates and stores the latest representation of objective.

```csharp
// Obtain an instance of MissionObjectiveMarkersVM from the subsystem API first
MissionObjectiveMarkersVM missionObjectiveMarkersVM = ...;
missionObjectiveMarkersVM.UpdateObjective(objective);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionObjectiveMarkersVM from the subsystem API first
MissionObjectiveMarkersVM missionObjectiveMarkersVM = ...;
missionObjectiveMarkersVM.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionObjectiveMarkersVM missionObjectiveMarkersVM = ...;
missionObjectiveMarkersVM.Compare(x, y);
```

## See Also

- [Area Index](../)