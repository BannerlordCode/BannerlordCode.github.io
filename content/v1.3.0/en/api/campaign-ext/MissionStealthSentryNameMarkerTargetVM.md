---
title: "MissionStealthSentryNameMarkerTargetVM"
description: "Auto-generated class reference for MissionStealthSentryNameMarkerTargetVM."
---
# MissionStealthSentryNameMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionStealthSentryNameMarkerTargetVM : MissionNameMarkerTargetVM<Agent>`
**Base:** `MissionNameMarkerTargetVM<Agent>`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthSentryNameMarkerTargetVM.cs`

## Overview

`MissionStealthSentryNameMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of position.

```csharp
// Obtain an instance of MissionStealthSentryNameMarkerTargetVM from the subsystem API first
MissionStealthSentryNameMarkerTargetVM missionStealthSentryNameMarkerTargetVM = ...;
missionStealthSentryNameMarkerTargetVM.UpdatePosition(missionCamera);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionStealthSentryNameMarkerTargetVM missionStealthSentryNameMarkerTargetVM = ...;
missionStealthSentryNameMarkerTargetVM.UpdatePosition(missionCamera);
```

## See Also

- [Area Index](../)