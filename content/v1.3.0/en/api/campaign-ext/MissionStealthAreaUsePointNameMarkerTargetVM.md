---
title: "MissionStealthAreaUsePointNameMarkerTargetVM"
description: "Auto-generated class reference for MissionStealthAreaUsePointNameMarkerTargetVM."
---
# MissionStealthAreaUsePointNameMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionStealthAreaUsePointNameMarkerTargetVM : MissionNameMarkerTargetBaseVM`
**Base:** `MissionNameMarkerTargetBaseVM`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/Targets/Hideout/MissionStealthAreaUsePointNameMarkerTargetVM.cs`

## Overview

`MissionStealthAreaUsePointNameMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets.Hideout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public override bool Equals(MissionNameMarkerTargetBaseVM other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MissionStealthAreaUsePointNameMarkerTargetVM from the subsystem API first
MissionStealthAreaUsePointNameMarkerTargetVM missionStealthAreaUsePointNameMarkerTargetVM = ...;
var result = missionStealthAreaUsePointNameMarkerTargetVM.Equals(other);
```

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of position.

```csharp
// Obtain an instance of MissionStealthAreaUsePointNameMarkerTargetVM from the subsystem API first
MissionStealthAreaUsePointNameMarkerTargetVM missionStealthAreaUsePointNameMarkerTargetVM = ...;
missionStealthAreaUsePointNameMarkerTargetVM.UpdatePosition(missionCamera);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionStealthAreaUsePointNameMarkerTargetVM missionStealthAreaUsePointNameMarkerTargetVM = ...;
missionStealthAreaUsePointNameMarkerTargetVM.Equals(other);
```

## See Also

- [Area Index](../)