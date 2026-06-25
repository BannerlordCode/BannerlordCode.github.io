---
title: "MissionNameMarkerToggleEvent"
description: "Auto-generated class reference for MissionNameMarkerToggleEvent."
---
# MissionNameMarkerToggleEvent

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public class MissionNameMarkerToggleEvent : EventBase`
**Base:** `EventBase`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerToggleEvent.cs`

## Overview

`MissionNameMarkerToggleEvent` lives in `SandBox.ViewModelCollection.Missions.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NewState` | `public bool NewState { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
MissionNameMarkerToggleEvent instance = ...;
```

## See Also

- [Area Index](../)