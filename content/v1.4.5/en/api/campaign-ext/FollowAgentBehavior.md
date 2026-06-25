---
title: "FollowAgentBehavior"
description: "Auto-generated class reference for FollowAgentBehavior."
---
# FollowAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class FollowAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/FollowAgentBehavior.cs`

## Overview

`FollowAgentBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetTargetAgent
`public void SetTargetAgent(Agent agent)`

**Purpose:** Assigns a new value to target agent and updates the object's internal state.

```csharp
// Obtain an instance of FollowAgentBehavior from the subsystem API first
FollowAgentBehavior followAgentBehavior = ...;
followAgentBehavior.SetTargetAgent(agent);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of FollowAgentBehavior from the subsystem API first
FollowAgentBehavior followAgentBehavior = ...;
followAgentBehavior.Tick(0, false);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of FollowAgentBehavior from the subsystem API first
FollowAgentBehavior followAgentBehavior = ...;
followAgentBehavior.OnAgentRemoved(agent);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of FollowAgentBehavior from the subsystem API first
FollowAgentBehavior followAgentBehavior = ...;
var result = followAgentBehavior.GetDebugInfo();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of FollowAgentBehavior from the subsystem API first
FollowAgentBehavior followAgentBehavior = ...;
var result = followAgentBehavior.GetAvailability(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FollowAgentBehavior followAgentBehavior = ...;
followAgentBehavior.SetTargetAgent(agent);
```

## See Also

- [Area Index](../)