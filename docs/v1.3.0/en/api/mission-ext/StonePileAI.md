<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StonePileAI`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StonePileAI

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePileAI : UsableMachineAIBase`
**Base:** `UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/StonePileAI.cs`

## Overview

`StonePileAI` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(StonePile usableMachine, StandingPoint standingPoint, List<Agent> agents, List<Agent> usedAgents)`

**Purpose:** Gets the current value of `suitable agent for standing point`.

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(StonePile stonePile, StandingPoint standingPoint, List<ValueTuple<Agent, float>> agents, List<Agent> usedAgents, float weight)`

**Purpose:** Gets the current value of `suitable agent for standing point`.

### IsAgentAssignable
`public static bool IsAgentAssignable(Agent agent)`

**Purpose:** Handles logic related to `is agent assignable`.

## Usage Example

```csharp
StonePileAI.GetSuitableAgentForStandingPoint(usableMachine, standingPoint, agents, usedAgents);
```

## See Also

- [Complete Class Catalog](../catalog)