---
title: "BoardGameAgentBehavior"
description: "Auto-generated class reference for BoardGameAgentBehavior."
---
# BoardGameAgentBehavior

**Namespace:** SandBox.Source.Missions.AgentBehaviors
**Module:** SandBox.Source
**Type:** `public class BoardGameAgentBehavior : AgentBehavior`
**Base:** `AgentBehavior`
**File:** `SandBox/Source/Missions/AgentBehaviors/BoardGameAgentBehavior.cs`

## Overview

`BoardGameAgentBehavior` lives in `SandBox.Source.Missions.AgentBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Source.Missions.AgentBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public override void Tick(float dt, bool isSimulation)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of BoardGameAgentBehavior from the subsystem API first
BoardGameAgentBehavior boardGameAgentBehavior = ...;
boardGameAgentBehavior.Tick(0, false);
```

### GetDebugInfo
`public override string GetDebugInfo()`

**Purpose:** **Purpose:** Reads and returns the debug info value held by the this instance.

```csharp
// Obtain an instance of BoardGameAgentBehavior from the subsystem API first
BoardGameAgentBehavior boardGameAgentBehavior = ...;
var result = boardGameAgentBehavior.GetDebugInfo();
```

### GetAvailability
`public override float GetAvailability(bool isSimulation)`

**Purpose:** **Purpose:** Reads and returns the availability value held by the this instance.

```csharp
// Obtain an instance of BoardGameAgentBehavior from the subsystem API first
BoardGameAgentBehavior boardGameAgentBehavior = ...;
var result = boardGameAgentBehavior.GetAvailability(false);
```

### AddTargetChair
`public static void AddTargetChair(Agent ownerAgent, Chair chair)`

**Purpose:** **Purpose:** Adds target chair to the current collection or state.

```csharp
// Static call; no instance required
BoardGameAgentBehavior.AddTargetChair(ownerAgent, chair);
```

### RemoveBoardGameBehaviorOfAgent
`public static void RemoveBoardGameBehaviorOfAgent(Agent ownerAgent)`

**Purpose:** **Purpose:** Removes board game behavior of agent from the current collection or state.

```csharp
// Static call; no instance required
BoardGameAgentBehavior.RemoveBoardGameBehaviorOfAgent(ownerAgent);
```

### IsAgentMovingToChair
`public static bool IsAgentMovingToChair(Agent ownerAgent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent moving to chair state or condition.

```csharp
// Static call; no instance required
BoardGameAgentBehavior.IsAgentMovingToChair(ownerAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BoardGameAgentBehavior boardGameAgentBehavior = ...;
boardGameAgentBehavior.Tick(0, false);
```

## See Also

- [Area Index](../)