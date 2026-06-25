---
title: "UsableMachineAIBase"
description: "Auto-generated class reference for UsableMachineAIBase."
---
# UsableMachineAIBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMachineAIBase`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/UsableMachineAIBase.cs`

## Overview

`UsableMachineAIBase` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasActionCompleted` | `public virtual bool HasActionCompleted { get; }` |

## Key Methods

### Tick
`public void Tick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of UsableMachineAIBase from the subsystem API first
UsableMachineAIBase usableMachineAIBase = ...;
usableMachineAIBase.Tick(agentToCompareTo, formationToCompareTo, potentialUsersTeam, 0);
```

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, IEnumerable<Agent> agents, List<Agent> usedAgents)`

**Purpose:** **Purpose:** Reads and returns the suitable agent for standing point value held by the this instance.

```csharp
// Static call; no instance required
UsableMachineAIBase.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, agents, usedAgents);
```

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, List<ValueTuple<Agent, float>> agents, List<Agent> usedAgents, float weight)`

**Purpose:** **Purpose:** Reads and returns the suitable agent for standing point value held by the this instance.

```csharp
// Static call; no instance required
UsableMachineAIBase.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, list<ValueTuple<Agent, 0, usedAgents, 0);
```

### TeleportUserAgentsToMachine
`public virtual void TeleportUserAgentsToMachine(List<Agent> agentList)`

**Purpose:** **Purpose:** Executes the TeleportUserAgentsToMachine logic.

```csharp
// Obtain an instance of UsableMachineAIBase from the subsystem API first
UsableMachineAIBase usableMachineAIBase = ...;
usableMachineAIBase.TeleportUserAgentsToMachine(agentList);
```

### StopUsingStandingPoint
`public void StopUsingStandingPoint(StandingPoint standingPoint)`

**Purpose:** **Purpose:** Stops the using standing point flow or state machine.

```csharp
// Obtain an instance of UsableMachineAIBase from the subsystem API first
UsableMachineAIBase usableMachineAIBase = ...;
usableMachineAIBase.StopUsingStandingPoint(standingPoint);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
UsableMachineAIBase instance = ...;
```

## See Also

- [Area Index](../)