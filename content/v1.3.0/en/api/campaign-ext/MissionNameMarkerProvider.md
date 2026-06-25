---
title: "MissionNameMarkerProvider"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionNameMarkerProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerProvider

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerProvider`
**Base:** none
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs`

## Overview

`MissionNameMarkerProvider` lives in `SandBox.ViewModelCollection.Missions.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateMarkers
`public abstract void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**Purpose:** Creates a new `markers` instance or object.

### Initialize
`public void Initialize(Mission mission, Action onSetMarkersDirty)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Destroy
`public void Destroy(Mission mission)`

**Purpose:** Handles logic related to `destroy`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var implementation = new CustomMissionNameMarkerProvider();
```

## See Also

- [Complete Class Catalog](../catalog)