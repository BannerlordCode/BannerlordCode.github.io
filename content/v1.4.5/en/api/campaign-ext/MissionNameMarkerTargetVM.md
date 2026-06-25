---
title: "MissionNameMarkerTargetVM"
description: "Auto-generated class reference for MissionNameMarkerTargetVM."
---
# MissionNameMarkerTargetVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerTargetVM<T> : MissionNameMarkerTargetBaseVM`
**Base:** `MissionNameMarkerTargetBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection.Missions.NameMarker/MissionNameMarkerTargetVM.cs`

## Overview

`MissionNameMarkerTargetVM` lives in `SandBox.ViewModelCollection.Missions.NameMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection.Missions.NameMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Target` | `public T Target { get; }` |

## Key Methods

### Equals
`public override bool Equals(MissionNameMarkerTargetBaseVM other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of MissionNameMarkerTargetVM from the subsystem API first
MissionNameMarkerTargetVM missionNameMarkerTargetVM = ...;
var result = missionNameMarkerTargetVM.Equals(other);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionNameMarkerTargetVM instance = ...;
```

## See Also

- [Area Index](../)