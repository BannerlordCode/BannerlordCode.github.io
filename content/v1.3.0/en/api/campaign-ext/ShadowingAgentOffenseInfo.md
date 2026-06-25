---
title: "ShadowingAgentOffenseInfo"
description: "Auto-generated class reference for ShadowingAgentOffenseInfo."
---
# ShadowingAgentOffenseInfo

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class ShadowingAgentOffenseInfo`
**Base:** none
**File:** `SandBox/Missions/MissionLogics/DisguiseMissionLogic.cs`

## Overview

`ShadowingAgentOffenseInfo` lives in `SandBox.Missions.MissionLogics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Agent` | `public Agent Agent { get; }` |
| `CanPlayerCameraSeeTheAgent` | `public bool CanPlayerCameraSeeTheAgent { get; }` |
| `OffenseType` | `public StealthOffenseTypes OffenseType { get; }` |

## Key Methods

### SetCanPlayerCameraSeeTheAgent
`public void SetCanPlayerCameraSeeTheAgent(bool value)`

**Purpose:** Assigns a new value to `can player camera see the agent` and updates the object's internal state.

```csharp
// Obtain an instance of ShadowingAgentOffenseInfo from the subsystem API first
ShadowingAgentOffenseInfo shadowingAgentOffenseInfo = ...;
shadowingAgentOffenseInfo.SetCanPlayerCameraSeeTheAgent(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShadowingAgentOffenseInfo shadowingAgentOffenseInfo = ...;
shadowingAgentOffenseInfo.SetCanPlayerCameraSeeTheAgent(false);
```

## See Also

- [Area Index](../)