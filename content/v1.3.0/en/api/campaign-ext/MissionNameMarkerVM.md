---
title: "MissionNameMarkerVM"
description: "Auto-generated class reference for MissionNameMarkerVM."
---
# MissionNameMarkerVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionNameMarkerVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerVM.cs`

## Overview

`MissionNameMarkerVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTargetsAdded` | `public bool IsTargetsAdded { get; }` |
| `Targets` | `public MBBindingList<MissionNameMarkerTargetBaseVM> Targets { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionNameMarkerVM from the subsystem API first
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MissionNameMarkerVM from the subsystem API first
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.OnFinalize();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionNameMarkerVM from the subsystem API first
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.Tick(0);
```

### SetTargetsDirty
`public void SetTargetsDirty()`

**Purpose:** Assigns a new value to targets dirty and updates the object's internal state.

```csharp
// Obtain an instance of MissionNameMarkerVM from the subsystem API first
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.SetTargetsDirty();
```

### Compare
`public int Compare(MissionNameMarkerTargetBaseVM x, MissionNameMarkerTargetBaseVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of MissionNameMarkerVM from the subsystem API first
MissionNameMarkerVM missionNameMarkerVM = ...;
var result = missionNameMarkerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionNameMarkerVM missionNameMarkerVM = ...;
missionNameMarkerVM.RefreshValues();
```

## See Also

- [Area Index](../)