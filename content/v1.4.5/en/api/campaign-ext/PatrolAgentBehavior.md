---
title: "PatrolAgentBehavior"
description: "Auto-generated class reference for PatrolAgentBehavior."
---
# PatrolAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class PatrolAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/PatrolAgentBehavior.cs`

## Overview

`PatrolAgentBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetDynamicPatrolArea
`public void SetDynamicPatrolArea(GameEntity parentPatrolPoint)`

**Purpose:** **Purpose:** Assigns a new value to dynamic patrol area and updates the object's internal state.

```csharp
// Obtain an instance of PatrolAgentBehavior from the subsystem API first
PatrolAgentBehavior patrolAgentBehavior = ...;
patrolAgentBehavior.SetDynamicPatrolArea(parentPatrolPoint);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of PatrolAgentBehavior from the subsystem API first
PatrolAgentBehavior patrolAgentBehavior = ...;
patrolAgentBehavior.Tick(0, false);
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** **Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of PatrolAgentBehavior from the subsystem API first
PatrolAgentBehavior patrolAgentBehavior = ...;
var result = patrolAgentBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** **Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of PatrolAgentBehavior from the subsystem API first
PatrolAgentBehavior patrolAgentBehavior = ...;
var result = patrolAgentBehavior.GetDebugInfo();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PatrolAgentBehavior patrolAgentBehavior = ...;
patrolAgentBehavior.SetDynamicPatrolArea(parentPatrolPoint);
```

## See Also

- [Area Index](../)