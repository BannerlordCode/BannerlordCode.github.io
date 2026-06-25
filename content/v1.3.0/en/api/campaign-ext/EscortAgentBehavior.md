---
title: "EscortAgentBehavior"
description: "Auto-generated class reference for EscortAgentBehavior."
---
# EscortAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class EscortAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `SandBox/Missions/AgentBehaviors/EscortAgentBehavior.cs`

## Overview

`EscortAgentBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EscortedAgent` | `public Agent EscortedAgent { get; }` |
| `TargetAgent` | `public Agent TargetAgent { get; }` |

## Key Methods

### Initialize
`public void Initialize(Agent escortedAgent, Agent targetAgent, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetAgent, null);
```

### Initialize
`public void Initialize(Agent escortedAgent, UsableMachine targetMachine, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetMachine, null);
```

### Initialize
`public void Initialize(Agent escortedAgent, Vec3? targetPosition, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetPosition, null);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Tick(0, false);
```

### IsEscortFinished
`public bool IsEscortFinished()`

**Purpose:** Determines whether the current object is in the `escort finished` state or condition.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.IsEscortFinished();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** Reads and returns the `availability` value held by the current object.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** Reads and returns the `debug info` value held by the current object.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.GetDebugInfo();
```

### AddEscortAgentBehavior
`public static void AddEscortAgentBehavior(Agent ownerAgent, Agent targetAgent, EscortAgentBehavior.OnTargetReachedDelegate onTargetReached)`

**Purpose:** Adds `escort agent behavior` to the current collection or state.

```csharp
// Static call; no instance required
EscortAgentBehavior.AddEscortAgentBehavior(ownerAgent, targetAgent, onTargetReached);
```

### RemoveEscortBehaviorOfAgent
`public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent)`

**Purpose:** Removes `escort behavior of agent` from the current collection or state.

```csharp
// Static call; no instance required
EscortAgentBehavior.RemoveEscortBehaviorOfAgent(ownerAgent);
```

### CheckIfAgentIsEscortedBy
`public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent, Agent escortedAgent)`

**Purpose:** Verifies whether `if agent is escorted by` holds true for the current object.

```csharp
// Static call; no instance required
EscortAgentBehavior.CheckIfAgentIsEscortedBy(ownerAgent, escortedAgent);
```

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition)`

**Purpose:** Invoked when the `target reached delegate` event is raised.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.OnTargetReachedDelegate(agent, escortedAgent, targetAgent, targetMachine, targetPosition);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetAgent, null);
```

## See Also

- [Area Index](../)