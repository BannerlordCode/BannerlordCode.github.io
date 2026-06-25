---
title: "EscortAgentBehavior"
description: "Auto-generated class reference for EscortAgentBehavior."
---
# EscortAgentBehavior

**Namespace:** SandBox.Missions.AgentBehaviors
**Module:** SandBox.Missions
**Type:** `public class EscortAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/EscortAgentBehavior.cs`

## Overview

`EscortAgentBehavior` lives in `SandBox.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnTargetReachedDelegate
`public delegate bool OnTargetReachedDelegate(Agent agent, ref Agent escortedAgent, ref Agent targetAgent, ref UsableMachine targetMachine, ref Vec3? targetPosition)`

**Purpose:** **Purpose:** Invoked when the target reached delegate event is raised.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.OnTargetReachedDelegate(agent, escortedAgent, targetAgent, targetMachine, targetPosition);
```

### Initialize
`public void Initialize(Agent escortedAgent, Agent targetAgent, OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetAgent, null);
```

### Initialize
`public void Initialize(Agent escortedAgent, UsableMachine targetMachine, OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetMachine, null);
```

### Initialize
`public void Initialize(Agent escortedAgent, Vec3? targetPosition, OnTargetReachedDelegate onTargetReached = null)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Initialize(escortedAgent, targetPosition, null);
```

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.Tick(0, false);
```

### IsEscortFinished
`public bool IsEscortFinished()`

**Purpose:** **Purpose:** Determines whether the this instance is in the escort finished state or condition.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.IsEscortFinished();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** **Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.GetAvailability(false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** **Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of EscortAgentBehavior from the subsystem API first
EscortAgentBehavior escortAgentBehavior = ...;
var result = escortAgentBehavior.GetDebugInfo();
```

### AddEscortAgentBehavior
`public static void AddEscortAgentBehavior(Agent ownerAgent, Agent targetAgent, OnTargetReachedDelegate onTargetReached)`

**Purpose:** **Purpose:** Adds escort agent behavior to the current collection or state.

```csharp
// Static call; no instance required
EscortAgentBehavior.AddEscortAgentBehavior(ownerAgent, targetAgent, onTargetReached);
```

### RemoveEscortBehaviorOfAgent
`public static void RemoveEscortBehaviorOfAgent(Agent ownerAgent)`

**Purpose:** **Purpose:** Removes escort behavior of agent from the current collection or state.

```csharp
// Static call; no instance required
EscortAgentBehavior.RemoveEscortBehaviorOfAgent(ownerAgent);
```

### CheckIfAgentIsEscortedBy
`public static bool CheckIfAgentIsEscortedBy(Agent ownerAgent, Agent escortedAgent)`

**Purpose:** **Purpose:** Verifies whether if agent is escorted by holds true for the this instance.

```csharp
// Static call; no instance required
EscortAgentBehavior.CheckIfAgentIsEscortedBy(ownerAgent, escortedAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EscortAgentBehavior escortAgentBehavior = ...;
escortAgentBehavior.OnTargetReachedDelegate(agent, escortedAgent, targetAgent, targetMachine, targetPosition);
```

## See Also

- [Area Index](../)