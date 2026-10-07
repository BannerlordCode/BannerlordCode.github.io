---
title: "MissionAgentPanicHandler"
description: "Auto-generated class reference for MissionAgentPanicHandler."
---
# MissionAgentPanicHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentPanicHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionAgentPanicHandler.cs`

## Overview

`MissionAgentPanicHandler` is a `MissionLogic` that turns the mission's *panic notification* into *actual flight*. It does not detect panic — `CommonAIComponent.Panic()` raises `Mission.OnAgentPanicked`, and this behaviour is what subscribes to that and acts on it (`MissionAgentPanicHandler.cs:7`, `MissionAgentPanicHandler.cs:18`).

Because raising a panic and reacting to one are separate events, this class is the buffer between them. Agents that panic during mission logic or agent tick are accumulated into three pre-sized lists in the constructor — 256 agents, 24 formations, 2 teams (`MissionAgentPanicHandler.cs:12`, `MissionAgentPanicHandler.cs:13`, `MissionAgentPanicHandler.cs:14`) — and drained on the next `OnPreMissionTick`. The formation and team lists are deduplicated on insert, so N agents panicking on one formation produce one formation entry and one team entry.

The drain is deliberately ordered, and the order is the whole point of the class:

1. Each affected team refreshes its cached enemy data for fleeing.
2. Each affected formation opens a batch unit-removal window.
3. Each panicking agent has `CommonAIComponent.Retreat(false)` called on it and is announced via `Mission.Current.OnAgentFleeing`.
4. Each formation closes its batch window.
5. All three lists are cleared.

Step 2 wrapping step 3 is why the class exists as a separate behaviour rather than handling each panic inline: the whole cohort is mutated inside one batch, so formation state is recomputed once for the group instead of once per agent.

## Mental Model

Three details govern correct use, and all three are about what this class quietly tolerates.

**`Retreat(false)` means no caching.** The parameter disables `Formation.RetreatPositionCache` (`MissionAgentPanicHandler.cs:52`). A routing formation can send hundreds of agents away at once and they all compute individual flee positions from `GetClosestFleePositionForAgent`. That is the right call for panic — a panicking agent should not inherit a neighbour's escape route — but it is also why this is expensive in a mass rout.

**An agent without a `CommonAIComponent` is announced but never routed.** The `Retreat` call is inside a null check while `Mission.Current.OnAgentFleeing(agent)` is not (`MissionAgentPanicHandler.cs:52`, `MissionAgentPanicHandler.cs:54`). So the mission still receives the fleeing notification and your own `OnAgentFleeing` handlers still run, while the agent itself never starts retreating. Everything that reacts to the *event* behaves normally; everything that reacts to the agent's *movement* sees it standing still. Mounts are the usual case here.

**It reads `Mission.Current`, not `base.Mission`.** The announcement at `MissionAgentPanicHandler.cs:54` is bound to whatever mission is current at drain time, not to the mission this behaviour belongs to. In normal play they are the same object.

Also note the dedupe uses `List.Contains`, so insertion is a linear scan — fine at the intended cohort sizes, and the constructor capacities are hints rather than limits, since nothing caps growth.

## How to use

**Getting it.** It is a mission behaviour, so reach it from any other behaviour in the same mission:

```csharp
MissionAgentPanicHandler panicHandler = Mission.Current.GetMissionBehavior<MissionAgentPanicHandler>();
```

You rarely call it — you subclass it or observe its effect. The useful hooks are `OnAgentPanicked` and `OnPreMissionTick`, both `override`-able.

**Typical use** — reacting to panic at the point it becomes flight, rather than at the panic:

```csharp
public class PanicReporter : MissionLogic
{
    public override void AfterStart()
    {
        Mission.Current.OnAgentFleeing += (Agent agent) =>
        {
            // Fires during OnPreMissionTick, inside the formation batch window.
            MBDebug.Print(agent.Name + " is fleeing");
        };
    }
}
```

**Typical use** — forcing a rout without going through panic at all, which is the usual mod entry point:

```csharp
public class ForceRout : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        CommonAIComponent ai = someAgent.CommonAIComponent;
        if (ai == null) return;             // otherwise announced but never routed

        ai.Retreat(useCachingSystem: true); // opt into RetreatPositionCache for mass routs
    }
}
```

**Most common mistake, and what it costs.** Triggering panic in the belief that the agent will start running, and not checking for a `CommonAIComponent`. `Panic()` sets `IsPanicked` and raises the mission event unconditionally, so your `OnAgentPanicked` handler and any `OnAgentFleeing` handler you subscribed all fire, and the agent visibly does nothing — it stands at its post with full morale-failure behaviour already committed. Because every event-level hook behaved correctly, the bug is indistinguishable from "panic does not work in this mission". Check `agent.CommonAIComponent != null` before calling `Panic()`, and remember that a riderless AI mount always has one, while an agent whose components were replaced during a scene transition may not.

## Key Methods

### OnAgentPanicked
`public override void OnAgentPanicked(Agent agent)`

**Purpose:** Invoked when the agent panicked event is raised.

```csharp
// Obtain an instance of MissionAgentPanicHandler from the subsystem API first
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnAgentPanicked(agent);
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of MissionAgentPanicHandler from the subsystem API first
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnPreMissionTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionAgentPanicHandler from the subsystem API first
MissionAgentPanicHandler missionAgentPanicHandler = ...;
missionAgentPanicHandler.OnRemoveBehavior();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAgentPanicHandler>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [CommonAIComponent](../CommonAIComponent)
- [Agent](../../mission/Agent)
- [MissionAgentPanicHandler (中文页面)](../../../../zh/api/mission-ext/MissionAgentPanicHandler)