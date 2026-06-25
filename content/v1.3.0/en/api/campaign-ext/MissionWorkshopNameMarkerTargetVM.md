---
title: "MissionWorkshopNameMarkerTargetVM"
description: "Auto-generated class reference for MissionWorkshopNameMarkerTargetVM."
---
# MissionWorkshopNameMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionWorkshopNameMarkerTargetVM : MissionNameMarkerTargetVM<Workshop>`
**Base:** `MissionNameMarkerTargetVM<Workshop>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/MissionWorkshopNameMarkerTargetVM.cs`

## Overview

`MissionWorkshopNameMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**Purpose:** Recalculates and stores the latest representation of `position`.

```csharp
// Obtain an instance of MissionWorkshopNameMarkerTargetVM from the subsystem API first
MissionWorkshopNameMarkerTargetVM missionWorkshopNameMarkerTargetVM = ...;
missionWorkshopNameMarkerTargetVM.UpdatePosition(missionCamera);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionWorkshopNameMarkerTargetVM missionWorkshopNameMarkerTargetVM = ...;
missionWorkshopNameMarkerTargetVM.UpdatePosition(missionCamera);
```

## See Also

- [Area Index](../)