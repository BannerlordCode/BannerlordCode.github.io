---
title: "StandingPointWithAgentLimit"
description: "StandingPoint specialization that admits only an explicitly maintained list of Agent instances."
---
# StandingPointWithAgentLimit

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class StandingPointWithAgentLimit : StandingPoint`  
**Base:** [`StandingPoint`](../StandingPoint)  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StandingPointWithAgentLimit.cs`

## One-line responsibility

This point adds an allow-list gate: only the exact live [`Agent`](../../mission/Agent) references added by the owner can pass the normal StandingPoint checks.

## Overview

`StandingPointWithAgentLimit` is useful for a machine whose position is reserved for a known set of actors, such as a scripted crew assignment. It does not define a numeric capacity and it does not copy Agent IDs. Its private list stores object references; `IsDisabledForAgent` first checks membership and delegates to the base point only for members.

## Mental model

The allow-list is an additional filter in front of the regular [`StandingPoint`](../StandingPoint) contract. `AddValidAgent` ignores `null` but does not remove duplicates, `ClearValidAgents` empties the list, and membership uses `List<Agent>.Contains`, therefore reference identity and current object lifetime matter. Side tags, occupancy, controller type, path distance, and deactivation are still enforced by the base class.

The owner should populate the list after the Mission has created the real Agents and clear it before those Agents or the point leave the Mission. This is an in-memory Mission rule, not save data.

## Dependencies

- [`StandingPoint`](../StandingPoint) still owns the target frame, reservation, score, and base availability checks.
- [`UsableMachine`](../UsableMachine) invokes `IsDisabledForAgent` during AI selection and detachment slot checks.
- [`Mission`](../../mission/Mission) and [`Agent`](../../mission/Agent) define the lifetime of the references stored by the allow-list.
- [`MissionBehavior`](../../mission/MissionBehavior) is a suitable owner for clearing the list at Mission end when the machine itself does not own the cleanup.

## When to use and when not to

**Use it when:**

- A scene machine should accept a known set of Agents rather than every Agent on a side.
- A scripted assignment changes over the lifetime of one Mission and can explicitly refresh the list.

**Do not use it when:**

- All members of a Team should be accepted; use [`StandingPointWithTeamLimit`](../StandingPointWithTeamLimit).
- Eligibility is based on a held weapon; use [`StandingPointWithWeaponRequirement`](../StandingPointWithWeaponRequirement).
- The assignment must survive a save or cross a Mission boundary. Store durable campaign data elsewhere and rebuild the allow-list.

## Key members and timing

- `AddValidAgent(Agent agent)` appends a non-null reference. It does not deduplicate or verify that the Agent belongs to the current Mission.
- `ClearValidAgents()` removes every reference and should be called when the assignment is replaced or the Mission ends.
- `IsDisabledForAgent(Agent agent)` returns `true` for every non-member; members still go through `base.IsDisabledForAgent(agent)`.

The class exposes no getter for the private list. Treat the two mutators as the complete synchronization boundary rather than attempting to infer list state from `IsDisabledForAgent` during an invalid lifecycle phase.

## Real acquisition and configuration example

The point is located through `Mission.Current`; the Agent argument is a real actor selected by the caller's Mission script:

```csharp
using TaleWorlds.MountAndBlade;

static void AssignCrewAgent(Agent crewAgent)
{
    Mission mission = Mission.Current;
    if (mission == null || crewAgent == null)
    {
        return;
    }

    foreach (StandingPointWithAgentLimit point in
             mission.ActiveMissionObjects.FindAllWithType<StandingPointWithAgentLimit>())
    {
        point.ClearValidAgents();
        point.AddValidAgent(crewAgent);
    }
}
```

This configures existing scene components only. The machine still decides when the Agent moves and calls the point's use lifecycle.

## Risks and crash boundaries

- Holding an Agent reference after death or removal can make later selection and cleanup operate on stale engine state. Clear the list in the same lifecycle owner that created the assignment.
- A `null` argument is silently ignored, so a failed Agent lookup can leave the point with no valid users rather than producing an obvious exception.
- Duplicate additions are accepted. Repeated assignment code should clear or otherwise control its own update cadence.
- The allow-list is not synchronized or serialized by this class. Rebuild it on every new Mission and keep campaign/save state separate.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Siblings: [StandingPoint](../StandingPoint) · [StandingPointWithTeamLimit](../StandingPointWithTeamLimit)
- Other constraints: [StandingPointWithWeaponRequirement](../StandingPointWithWeaponRequirement) · [StandingPointWithVolumeBox](../StandingPointWithVolumeBox)
- Host and lifetime: [UsableMachine](../UsableMachine) · [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- 中文/English: [StandingPointWithAgentLimit](../../../../zh/api/mission-ext/StandingPointWithAgentLimit)
