<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMachineAIBase`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `tick`.

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, IEnumerable<Agent> agents, List<Agent> usedAgents)`

**Purpose:** Gets the current value of `suitable agent for standing point`.

### GetSuitableAgentForStandingPoint
`public static Agent GetSuitableAgentForStandingPoint(UsableMachine usableMachine, StandingPoint standingPoint, List<ValueTuple<Agent, float>> agents, List<Agent> usedAgents, float weight)`

**Purpose:** Gets the current value of `suitable agent for standing point`.

### TeleportUserAgentsToMachine
`public virtual void TeleportUserAgentsToMachine(List<Agent> agentList)`

**Purpose:** Handles logic related to `teleport user agents to machine`.

### StopUsingStandingPoint
`public void StopUsingStandingPoint(StandingPoint standingPoint)`

**Purpose:** Handles logic related to `stop using standing point`.

## Usage Example

```csharp
var implementation = new CustomUsableMachineAIBase();
```

## See Also

- [Complete Class Catalog](../catalog)