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

`AgentCommonAILogic` is a `MissionLogic` whose entire job is to keep `CommonAIComponent` attached to the
right agents. It owns no AI state and runs no decisions. On `OnAgentCreated` it attaches the component
when the new agent reports `IsAIControlled` (`AgentCommonAILogic.cs:10`); on
`OnAgentControllerChanged` it attaches the component when control moves *to* `AgentControllerType.AI` and
detaches it when control moves away from AI and the agent still carries one
(`AgentCommonAILogic.cs:20`).

It is not something a mission opts into. `MissionState.AddDefaultMissionBehaviorsTo` appends a new
instance to the behaviour list of every mission opened with default behaviours
(`MissionState.cs:346`), next to `BasicMissionHandler` and `CasualtyHandler`. A mission opened with
`addDefaultMissionBehaviors: false` never constructs it and therefore never gets common AI at all
(`MissionState.cs:276`).

## Mental Model

Read it as a two-way binding between "who is driving this agent" and "which component is on it", not as an
AI. The actual behaviour lives in `CommonAIComponent`; `Agent.AddComponent` special-cases that type and
caches it on `Agent.CommonAIComponent` (`Agent.cs:4654`), and `Agent.RemoveComponent` nulls the field again
(`Agent.cs:4673`) — that cached field is the handle this logic uses.

Two guard asymmetries are worth knowing before you extend it:

- `OnAgentCreated` tests only `IsAIControlled` (`AgentCommonAILogic.cs:13`), with no `IsActive()` check,
  while `OnAgentControllerChanged` wraps everything in `agent.IsActive()` (`AgentCommonAILogic.cs:23`).
  Control handed to an already-dead agent therefore installs nothing, whereas the same agent created dead
  but AI-controlled does get a component.
- The removal branch is guarded by `agent.CommonAIComponent != null`
  (`AgentCommonAILogic.cs:30`). That is what keeps an AI-to-player handover on an agent that never
  received a component from calling `RemoveComponent(null)`; conversely, a component you attached
  yourself is only detached if it went in through `Agent.AddComponent`.

`AgentControllerType` has exactly `None`, `AI` and `Player` (`AgentControllerType.cs:9`), so "changed to
AI" and "changed away from AI" between those two are the only transitions the two branches cover.

## How to use

**Getting one.** Never construct it. The stock instance is already in the mission's behaviour list by the
time your own behaviours run (`MissionState.cs:333`), and `Mission.Current.GetMissionBehavior<...>()` will
find it if you need to check that it is present. To add your own hook on the same events, subclass
`MissionLogic` and register the subclass through the mission initializer — that gives you the events
without a second `AgentCommonAILogic` fighting yours.

**Typical use** — a behaviour that mirrors the stock install/removal so its own component rides along:

```csharp
public class MyAgentAIBootstrap : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        if (agent.IsAIControlled)                            // AgentCommonAILogic.cs:13
        {
            agent.AddComponent(new CommonAIComponent(agent)); // ctor at CommonAIComponent.cs:63
        }
    }

    public override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        base.OnAgentControllerChanged(agent, oldController);
        if (agent.IsActive()                                 // AgentCommonAILogic.cs:23
            && oldController == AgentControllerType.AI
            && agent.CommonAIComponent != null)              // Agent.cs:491
        {
            agent.RemoveComponent(agent.CommonAIComponent);  // Agent.cs:4667
        }
    }
}
```

**The mistake that bites.** Attaching `CommonAIComponent` yourself in `OnAgentCreated` and never removing
it. `Agent.RemoveComponent` is the only path that drops it from the agent's component list, so once the
player takes control the common-AI component is still there and still being ticked on an agent whose
`Controller` is now `Player`.



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
- [AgentHumanAILogic](../AgentHumanAILogic)
- [CasualtyHandler](../CasualtyHandler)
- [BasicMissionHandler](../BasicMissionHandler)
- [MissionLogic](../MissionLogic)
- [中文页面](../../../../zh/api/mission-ext/AgentCommonAILogic)