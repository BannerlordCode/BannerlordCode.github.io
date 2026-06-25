---
title: "MissionNameMarkerProvider"
description: "Auto-generated class reference for MissionNameMarkerProvider."
---
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

**Purpose:** Constructs a new markers entity and returns it to the caller.

```csharp
// Obtain an instance of MissionNameMarkerProvider from the subsystem API first
MissionNameMarkerProvider missionNameMarkerProvider = ...;
missionNameMarkerProvider.CreateMarkers(markers);
```

### Initialize
`public void Initialize(Mission mission, Action onSetMarkersDirty)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of MissionNameMarkerProvider from the subsystem API first
MissionNameMarkerProvider missionNameMarkerProvider = ...;
missionNameMarkerProvider.Initialize(mission, onSetMarkersDirty);
```

### Destroy
`public void Destroy(Mission mission)`

**Purpose:** Executes the Destroy logic.

```csharp
// Obtain an instance of MissionNameMarkerProvider from the subsystem API first
MissionNameMarkerProvider missionNameMarkerProvider = ...;
missionNameMarkerProvider.Destroy(mission);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MissionNameMarkerProvider from the subsystem API first
MissionNameMarkerProvider missionNameMarkerProvider = ...;
missionNameMarkerProvider.Tick(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionNameMarkerProvider instance = ...;
```

## See Also

- [Area Index](../)