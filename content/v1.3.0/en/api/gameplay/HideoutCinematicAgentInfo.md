---
title: "HideoutCinematicAgentInfo"
description: "Auto-generated class reference for HideoutCinematicAgentInfo."
---
# HideoutCinematicAgentInfo

**Namespace:** SandBox.Missions.MissionLogics.Hideout
**Module:** SandBox.Missions
**Type:** `struct HideoutCinematicAgentInfo`
**Base:** none
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushBossFightCinematicController.cs`

## Overview

`HideoutCinematicAgentInfo` lives in `SandBox.Missions.MissionLogics.Hideout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics.Hideout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasReachedTarget
`public bool HasReachedTarget(float proximityThreshold = 0.5f)`

**Purpose:** Determines whether the current object already holds `reached target`.

```csharp
// Obtain an instance of HideoutCinematicAgentInfo from the subsystem API first
HideoutCinematicAgentInfo hideoutCinematicAgentInfo = ...;
var result = hideoutCinematicAgentInfo.HasReachedTarget(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HideoutCinematicAgentInfo hideoutCinematicAgentInfo = ...;
hideoutCinematicAgentInfo.HasReachedTarget(0);
```

## See Also

- [Area Index](../../)