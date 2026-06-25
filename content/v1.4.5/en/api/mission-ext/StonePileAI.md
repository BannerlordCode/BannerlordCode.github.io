---
title: "StonePileAI"
description: "Auto-generated class reference for StonePileAI."
---
# StonePileAI

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePileAI : UsableMachineAIBase`
**Base:** `UsableMachineAIBase`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StonePileAI.cs`

## Overview

`StonePileAI` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(StonePile usableMachine, StandingPoint standingPoint, List<Agent> agents, List<Agent> usedAgents)`

**Purpose:** Reads and returns the `suitable agent for standing point` value held by the current object.

```csharp
// Static call; no instance required
StonePileAI.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, agents, usedAgents);
```

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(StonePile stonePile, StandingPoint standingPoint, List<(Agent, float)> agents, List<Agent> usedAgents, float weight)`

**Purpose:** Reads and returns the `suitable agent for standing point` value held by the current object.

```csharp
// Static call; no instance required
StonePileAI.GetSuitableAgentForStandingPoint(stonePile, standingPoint, list<(Agent, 0, usedAgents, 0);
```

### IsAgentAssignable
`public static bool IsAgentAssignable(Agent agent)`

**Purpose:** Determines whether the current object is in the `agent assignable` state or condition.

```csharp
// Static call; no instance required
StonePileAI.IsAgentAssignable(agent);
```

## Usage Example

```csharp
StonePileAI.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, agents, usedAgents);
```

## See Also

- [Area Index](../)