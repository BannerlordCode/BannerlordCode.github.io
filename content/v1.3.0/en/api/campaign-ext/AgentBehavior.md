---
title: "AgentBehavior"
description: "Auto-generated class reference for AgentBehavior."
---
# AgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public abstract class AgentBehavior`
**Base:** none
**File:** `SandBox/Missions/AgentBehaviors/AgentBehavior.cs`

## Overview

`AgentBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Navigator` | `public AgentNavigator Navigator { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `OwnerAgent` | `public Agent OwnerAgent { get; }` |
| `Mission` | `public Mission Mission { get; }` |

## Key Methods

### GetAvailability
`public virtual float GetAvailability(bool isSimulation)`

**Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of AgentBehavior from the subsystem API first
AgentBehavior agentBehavior = ...;
var result = agentBehavior.GetAvailability(false);
```

### Tick
`public virtual void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of AgentBehavior from the subsystem API first
AgentBehavior agentBehavior = ...;
agentBehavior.Tick(0, false);
```

### ConversationTick
`public virtual void ConversationTick()`

**Purpose:** Executes the ConversationTick logic.

```csharp
// Obtain an instance of AgentBehavior from the subsystem API first
AgentBehavior agentBehavior = ...;
agentBehavior.ConversationTick();
```

### CheckStartWithBehavior
`public virtual bool CheckStartWithBehavior()`

**Purpose:** Verifies whether start with behavior holds true for the this instance.

```csharp
// Obtain an instance of AgentBehavior from the subsystem API first
AgentBehavior agentBehavior = ...;
var result = agentBehavior.CheckStartWithBehavior();
```

### OnSpecialTargetChanged
`public virtual void OnSpecialTargetChanged()`

**Purpose:** Invoked when the special target changed event is raised.

```csharp
// Obtain an instance of AgentBehavior from the subsystem API first
AgentBehavior agentBehavior = ...;
agentBehavior.OnSpecialTargetChanged();
```

### SetCustomWanderTarget
`public virtual void SetCustomWanderTarget(UsableMachine customUsableMachine)`

**Purpose:** Assigns a new value to custom wander target and updates the object's internal state.

```csharp
// Obtain an instance of AgentBehavior from the subsystem API first
AgentBehavior agentBehavior = ...;
agentBehavior.SetCustomWanderTarget(customUsableMachine);
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AgentBehavior from the subsystem API first
AgentBehavior agentBehavior = ...;
agentBehavior.OnAgentRemoved(agent);
```

### GetDebugInfo
`public abstract string GetDebugInfo()`

**Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of AgentBehavior from the subsystem API first
AgentBehavior agentBehavior = ...;
var result = agentBehavior.GetDebugInfo();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AgentBehavior instance = ...;
```

## See Also

- [Area Index](../)