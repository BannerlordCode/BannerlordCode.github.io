---
title: "AgentHumanAILogic"
description: "Auto-generated class reference for AgentHumanAILogic."
---
# AgentHumanAILogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentHumanAILogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/AgentHumanAILogic.cs`

## Overview

The human-only counterpart to `AgentCommonAILogic`: a `MissionLogic` that attaches and detaches a `HumanAIComponent` on agents that are both human and AI-controlled, so that human-shaped agents (as opposed to mounts and animals) get soldier-grade AI. It adds one responsibility beyond its sibling: `OnAgentMount` (`AgentHumanAILogic.cs:38`) refreshes the mission's mount reservations whenever a rider mounts up (`AgentHumanAILogic.cs:41`).

## Mental Model

Two component lifecycle hooks plus one mount callback, and the gating differs between them in a way that matters. `OnAgentCreated` (`AgentHumanAILogic.cs:10`) requires **both** `IsAIControlled` and `IsHuman` (`AgentHumanAILogic.cs:13`). `OnAgentControllerChanged` (`AgentHumanAILogic.cs:20`) re-tests only `IsHuman` (`AgentHumanAILogic.cs:23`) and then branches on the controller value — adding on a transition to AI (`AgentHumanAILogic.cs:25`-`AgentHumanAILogic.cs:28`) and removing on a transition away (`AgentHumanAILogic.cs:30`-`AgentHumanAILogic.cs:33`). The mount callback is the odd one out: it is not gated on `IsHuman` or `IsAIControlled` at all, and it reaches for the static `Mission.Current` (`AgentHumanAILogic.cs:41`) instead of any instance state.

## How to use

**Getting one.** Like any `MissionLogic`, it is instantiated into a mission's logic list rather than pulled from a factory. The result is read back off the agent through the cached `HumanAIComponent` property that `Agent.AddComponent` maintains.

**Typical use.**

```csharp
// Creation path (AgentHumanAILogic.cs:10) - both conditions must hold.
AgentHumanAILogic logic = new AgentHumanAILogic();
logic.OnAgentCreated(agent);                              // AddComponent at AgentHumanAILogic.cs:15

// Read back; Agent.AddComponent (Agent.cs:4600) caches it at Agent.cs:4612.
if (agent.HumanAIComponent != null)
{
    agent.HumanAIComponent.DoSomething();
}

// Mount hook (AgentHumanAILogic.cs:38) refreshes reservations via Mission.Current (:41).
logic.OnAgentMount(agent);

// Removal mirrors AgentCommonAILogic.cs:30-32.
agent.RemoveComponent(agent.HumanAIComponent);            // Agent.cs:4617
```

**Watch out.** `Agent.AddComponent` appends without de-duplicating (`Agent.cs:4602`) and, in its `HumanAIComponent` special case, overwrites the cached `agent.HumanAIComponent` field (`Agent.cs:4610`-`Agent.cs:4612`). Both hooks add unconditionally, so adding a second `AgentHumanAILogic` to the same mission stacks two `HumanAIComponent` instances on one agent. The later `RemoveComponent` then only clears the cache when the instance being removed is the currently cached one (`Agent.cs:4628`), so the first component keeps running for the rest of the match with no diagnostic — and human agents are exactly where a doubled AI component is most visible.

## Key Methods

### OnAgentCreated
`public override void OnAgentCreated(Agent agent)`

**Purpose:** Invoked when the agent created event is raised.

```csharp
// Obtain an instance of AgentHumanAILogic from the subsystem API first
AgentHumanAILogic agentHumanAILogic = ...;
agentHumanAILogic.OnAgentCreated(agent);
```

### OnAgentMount
`public override void OnAgentMount(Agent agent)`

**Purpose:** Invoked when the agent mount event is raised.

```csharp
// Obtain an instance of AgentHumanAILogic from the subsystem API first
AgentHumanAILogic agentHumanAILogic = ...;
agentHumanAILogic.OnAgentMount(agent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AgentHumanAILogic>();
```

## See Also

- [Area Index](../)
- [HumanAIComponent](../HumanAIComponent)
- [Agent](../../mission/Agent)