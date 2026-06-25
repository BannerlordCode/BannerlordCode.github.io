---
title: "MissionGenericMarkerTargetVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGenericMarkerTargetVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGenericMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker.Targets
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionGenericMarkerTargetVM : MissionNameMarkerTargetBaseVM`
**Base:** `MissionNameMarkerTargetBaseVM`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker.Targets/MissionGenericMarkerTargetVM.cs`

## Overview

`MissionGenericMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker.Targets` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker.Targets` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public override bool Equals(MissionNameMarkerTargetBaseVM other)`

**Purpose:** Handles logic related to `equals`.

### UpdatePosition
`public override void UpdatePosition(Camera missionCamera)`

**Purpose:** Updates the state or data of `position`.

## Usage Example

```csharp
var value = new MissionGenericMarkerTargetVM();
value.Equals(other);
```

## See Also

- [Complete Class Catalog](../catalog)