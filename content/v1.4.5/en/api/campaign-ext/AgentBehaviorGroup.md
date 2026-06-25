---
title: "AgentBehaviorGroup"
description: "Auto-generated class reference for AgentBehaviorGroup."
---
# AgentBehaviorGroup

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public abstract class AgentBehaviorGroup`
**Base:** none
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/AgentBehaviorGroup.cs`

## Overview

`AgentBehaviorGroup` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScriptedBehavior` | `public AgentBehavior ScriptedBehavior { get; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Mission` | `public Mission Mission { get; }` |

## Key Methods

### DisableScriptedBehavior
`public void DisableScriptedBehavior()`

**Purpose:** Executes the DisableScriptedBehavior logic.

```csharp
// Obtain an instance of AgentBehaviorGroup from the subsystem API first
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.DisableScriptedBehavior();
```

### DisableAllBehaviors
`public void DisableAllBehaviors()`

**Purpose:** Executes the DisableAllBehaviors logic.

```csharp
// Obtain an instance of AgentBehaviorGroup from the subsystem API first
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.DisableAllBehaviors();
```

### GetActiveBehavior
`public AgentBehavior GetActiveBehavior()`

**Purpose:** Reads and returns the active behavior value held by the this instance.

```csharp
// Obtain an instance of AgentBehaviorGroup from the subsystem API first
AgentBehaviorGroup agentBehaviorGroup = ...;
var result = agentBehaviorGroup.GetActiveBehavior();
```

### Tick
`public virtual void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of AgentBehaviorGroup from the subsystem API first
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.Tick(0, false);
```

### ConversationTick
`public virtual void ConversationTick()`

**Purpose:** Executes the ConversationTick logic.

```csharp
// Obtain an instance of AgentBehaviorGroup from the subsystem API first
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.ConversationTick();
```

### OnAgentRemoved
`public virtual void OnAgentRemoved(Agent agent)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of AgentBehaviorGroup from the subsystem API first
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.OnAgentRemoved(agent);
```

### GetScore
`public virtual float GetScore(bool isSimulation)`

**Purpose:** Reads and returns the score value held by the this instance.

```csharp
// Obtain an instance of AgentBehaviorGroup from the subsystem API first
AgentBehaviorGroup agentBehaviorGroup = ...;
var result = agentBehaviorGroup.GetScore(false);
```

### ForceThink
`public virtual void ForceThink(float inSeconds)`

**Purpose:** Executes the ForceThink logic.

```csharp
// Obtain an instance of AgentBehaviorGroup from the subsystem API first
AgentBehaviorGroup agentBehaviorGroup = ...;
agentBehaviorGroup.ForceThink(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
AgentBehaviorGroup instance = ...;
```

## See Also

- [Area Index](../)