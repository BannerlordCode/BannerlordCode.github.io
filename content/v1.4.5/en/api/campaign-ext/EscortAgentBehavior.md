---
title: "EscortAgentBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EscortAgentBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EscortAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class EscortAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/EscortAgentBehavior.cs`

## Overview

`EscortAgentBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition)`

**Purpose:** Called when the `target reached delegate` event is raised.

### Initialize
`public void Initialize(Agent escortedAgent, Agent targetAgent, OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Initialize
`public void Initialize(Agent escortedAgent, UsableMachine targetMachine, OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Initialize
`public void Initialize(Agent escortedAgent, Vec3? targetPosition, OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Handles logic related to `tick`.

### IsEscortFinished
`public bool IsEscortFinished()`

**Purpose:** Handles logic related to `is escort finished`.

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Gets the current value of `availability`.

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Gets the current value of `debug info`.

### AddEscortAgentBehavior
`public static void AddEscortAgentBehavior(Agent ownerAgent, Agent targetAgent, OnTargetReachedDelegate onTargetReached)`

**Purpose:** Adds `escort agent behavior` to the current collection or state.

### RemoveEscortBehaviorOfAgent
`public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent)`

**Purpose:** Removes `escort behavior of agent` from the current collection or state.

### CheckIfAgentIsEscortedBy
`public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent, Agent escortedAgent)`

**Purpose:** Handles logic related to `check if agent is escorted by`.

## Usage Example

```csharp
var value = new EscortAgentBehavior();
value.OnTargetReachedDelegate(agent, escortedAgent, targetAgent, targetMachine, targetPosition);
```

## See Also

- [Complete Class Catalog](../catalog)