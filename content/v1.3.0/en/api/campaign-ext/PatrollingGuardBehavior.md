---
title: "PatrollingGuardBehavior"
description: "Auto-generated class reference for PatrollingGuardBehavior."
---
# PatrollingGuardBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class PatrollingGuardBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/PatrollingGuardBehavior.cs`

## Overview

`PatrollingGuardBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of PatrollingGuardBehavior from the subsystem API first
PatrollingGuardBehavior patrollingGuardBehavior = ...;
patrollingGuardBehavior.Tick(0, false);
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** **Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of PatrollingGuardBehavior from the subsystem API first
PatrollingGuardBehavior patrollingGuardBehavior = ...;
var result = patrollingGuardBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** **Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of PatrollingGuardBehavior from the subsystem API first
PatrollingGuardBehavior patrollingGuardBehavior = ...;
var result = patrollingGuardBehavior.GetDebugInfo();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PatrollingGuardBehavior patrollingGuardBehavior = ...;
patrollingGuardBehavior.Tick(0, false);
```

## See Also

- [Area Index](../)