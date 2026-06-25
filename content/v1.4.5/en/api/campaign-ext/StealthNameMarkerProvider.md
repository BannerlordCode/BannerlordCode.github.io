---
title: "StealthNameMarkerProvider"
description: "Auto-generated class reference for StealthNameMarkerProvider."
---
# StealthNameMarkerProvider

**Namespace:** SandBox.View.Missions.NameMarkers
**Module:** SandBox.View
**Type:** `public class StealthNameMarkerProvider : MissionNameMarkerProvider`
**Base:** `MissionNameMarkerProvider`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions.NameMarkers/StealthNameMarkerProvider.cs`

## Overview

`StealthNameMarkerProvider` lives in `SandBox.View.Missions.NameMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Missions.NameMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateMarkers
`public override void CreateMarkers(List<MissionNameMarkerTargetBaseVM> markers)`

**Purpose:** Constructs a new markers entity and returns it to the caller.

```csharp
// Obtain an instance of StealthNameMarkerProvider from the subsystem API first
StealthNameMarkerProvider stealthNameMarkerProvider = ...;
stealthNameMarkerProvider.CreateMarkers(markers);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
StealthNameMarkerProvider stealthNameMarkerProvider = ...;
stealthNameMarkerProvider.CreateMarkers(markers);
```

## See Also

- [Area Index](../)