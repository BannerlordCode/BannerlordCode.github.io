---
title: "AgentCommonAILogic"
description: "Auto-generated class reference for AgentCommonAILogic."
---
# AgentCommonAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentCommonAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentCommonAILogic.cs`

## Overview

A 35-line `MissionLogic` whose entire job is keeping a `CommonAIComponent` attached to every AI-controlled agent. Two overrides do all of it. `OnAgentCreated` (`AgentCommonAILogic.cs:10`) adds the component when the agent is already AI-controlled (`AgentCommonAILogic.cs:13`-`AgentCommonAILogic.cs:15`). `OnAgentControllerChanged` (`AgentCommonAILogic.cs:20`) adds it on a transition *to* AI (`AgentCommonAILogic.cs:23`-`AgentCommonAILogic.cs:26`) and removes it on a transition *away* from AI (`AgentCommonAILogic.cs:28`-`AgentCommonAILogic.cs:31`).

## Mental Model

Read this as an installer, not a behaviour. It owns no state and makes no decisions — every call is `agent.AddComponent(new CommonAIComponent(agent))` or `agent.RemoveComponent(...)`, and all the thinking happens inside `CommonAIComponent` once it is attached. The two hooks overlap on purpose: an agent that spawns already AI-controlled never raises a controller change, so the creation hook covers it; an agent that starts under player control and is handed to the AI later only ever raises a change, so the transition hook covers that. Note the asymmetry that makes this fragile — `AddComponent` is called unconditionally on both paths, with no check that a component is already present.

## How to use

**Getting one.** You do not call a factory. `MissionLogic` instances are added to a mission's logic list when the mission is created, and the engine instantiates this one itself; a subclass is used the same way. Read the result back off the agent through the cached `CommonAIComponent` property (`Agent.cs:481`).

**Typical use.**

```csharp
// The creation hook (AgentCommonAILogic.cs:10) is the whole add path.
AgentCommonAILogic logic = new AgentCommonAILogic();
logic.OnAgentCreated(agent);                          // -> AddComponent at AgentCommonAILogic.cs:15

// Adding it yourself is safe only if you check first; Agent.AddComponent
// (Agent.cs:4600) appends without de-duplicating.
if (agent.CommonAIComponent == null)                  // property at Agent.cs:481
{
    agent.AddComponent(new CommonAIComponent(agent));  // AgentCommonAILogic.cs:15
}

// The removal branch reads the cached field before removing (AgentCommonAILogic.cs:28-30).
bool removed = agent.RemoveComponent(agent.CommonAIComponent);  // Agent.cs:4617
```

**Watch out.** `Agent.AddComponent` appends to the agent's component list with no duplicate check and, in its `CommonAIComponent` special case, overwrites the cached `CommonAIComponent` field (`Agent.cs:4600`-`Agent.cs:4606`). Because both hooks add unconditionally, a mod that puts a second `AgentCommonAILogic` on the same mission stacks two `CommonAIComponent` instances on one agent: both tick, and `RemoveComponent(agent.CommonAIComponent)` only removes the most recently cached one, so the first keeps driving that agent's AI for the rest of the battle with nothing logged.

## Key Methods

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** Invoked when the agent created event is raised.

```csharp
// Obtain an instance of AgentCommonAILogic from the subsystem API first
AgentCommonAILogic agentCommonAILogic = ...;
agentCommonAILogic.OnAgentCreated(agent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentCommonAILogic>();
```

## See Also

- [Area Index](../)
- [CommonAIComponent](../CommonAIComponent)
- [Agent](../../mission/Agent)