---
title: "MissionGenericMarkerTargetVM"
description: "Auto-generated class reference for MissionGenericMarkerTargetVM."
---
# MissionGenericMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionGenericMarkerTargetVM : MissionNameMarkerTargetBaseVM`
**Base:** `MissionNameMarkerTargetBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker.Targets/MissionGenericMarkerTargetVM.cs`

## Overview

`MissionGenericMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public override bool Equals(MissionNameMarkerTargetBaseVM other)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of MissionGenericMarkerTargetVM from the subsystem API first
MissionGenericMarkerTargetVM missionGenericMarkerTargetVM = ...;
var result = missionGenericMarkerTargetVM.Equals(other);
```

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of `position`.

```csharp
// Obtain an instance of MissionGenericMarkerTargetVM from the subsystem API first
MissionGenericMarkerTargetVM missionGenericMarkerTargetVM = ...;
missionGenericMarkerTargetVM.UpdatePosition(missionCamera);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGenericMarkerTargetVM missionGenericMarkerTargetVM = ...;
missionGenericMarkerTargetVM.Equals(other);
```

## See Also

- [Area Index](../)