---
title: "BattleMissionAgentInteractionLogic"
description: "Auto-generated class reference for BattleMissionAgentInteractionLogic."
---
# BattleMissionAgentInteractionLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleMissionAgentInteractionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/BattleMissionAgentInteractionLogic.cs`

## Overview

`BattleMissionAgentInteractionLogic` is the smallest kind of mission behaviour there is: a single override that decides whether one agent may take an action on another agent by walking up to it. The whole class is nine lines of behaviour plus a class declaration (`BattleMissionAgentInteractionLogic.cs:7`, `BattleMissionAgentInteractionLogic.cs:10`).

The predicate is mount-specific. It returns true when the *other* agent is an active mount, and either the user already owns that mount (`otherAgent.RiderAgent == userAgent`) or the mount is riderless and the user carries the `AgentFlag.CanRide` flag (`BattleMissionAgentInteractionLogic.cs:12`). Nothing else is interactable here — no chest, no prisoner, no ballista. If you want to know why an interaction prompt does not appear for some non-mount prop, this class is not the reason; some other behaviour implements `IsThereAgentAction` for it.

Its lifetime is the mission's behaviour list, like any `MissionLogic`. It holds no fields, so there is nothing to configure and nothing to reset between missions.

## Mental Model

Think of it as the *interaction gate for mounts only*, and note which half of the check is the surprising one.

`otherAgent.RiderAgent == userAgent` means "you are already on it". That case exists so that pressing the action key while mounted resolves to a dismount/mount-related action on your own horse rather than being filtered out. The second disjunct — `otherAgent.RiderAgent == null && userAgent.GetAgentFlags().HasFlag(AgentFlag.CanRide)` — is the "get on" case, and it depends on the *user's* flag, not the target's.

So the class never returns true for a horse that belongs to somebody else. Walking up to an enemy cavalryman and pressing the action key gives you no prompt here, no matter how permissive your own agent flags are; the third condition that might have allowed it — some check that the rider is your enemy — is absent. That is deliberate, not an oversight: mount stealing is not modelled here.

`IsActive()` on the target matters because a mount being deleted at the end of the scene is still briefly present in the agent list. Without it you can be offered an action against a horse that is already being torn down.

## How to use

**Getting it.** Reach it through the mission behaviour list like any other `MissionLogic`:

```csharp
BattleMissionAgentInteractionLogic mounts = Mission.Current.GetMissionBehavior<BattleMissionAgentInteractionLogic>();
```

To change the rule, subclass it and register your subclass in place of the shipped one in the mission behaviour array. The override is not virtual-only-to-base in a useful way: you either replace the behaviour or call the base and add to it.

**Typical use** — ask the behaviour whether a riderless mount is mountable, then act:

```csharp
public class MyMountProbe : MissionLogic
{
    public override void OnAgentInteraction(Agent userAgent, Agent otherAgent)
    {
        BattleMissionAgentInteractionLogic mounts =
            Mission.Current.GetMissionBehavior<BattleMissionAgentInteractionLogic>();

        // Same predicate the engine uses to decide whether to show the action prompt.
        if (mounts != null && mounts.IsThereAgentAction(userAgent, otherAgent)
            && otherAgent.RiderAgent == null)
        {
            Debug.Print(otherAgent.Monster != null
                ? otherAgent.Monster.MonsterType.ToString()
                : "horse");
        }
    }
}
```

**Most common mistake, and what it costs.** Reading it as a general "can I interact with this agent" oracle. It answers only for mounts, and its `true` for `otherAgent.RiderAgent == userAgent` is not a promise that a *new* mount is available — it is the already-mounted case. The cost shows up in mod AI that gates behaviour on this predicate: an agent standing next to a riderless warhorse gets `true` only if it carries `AgentFlag.CanRide`, so a footman (or any agent whose flag set you have customised without `CanRide`) is told the horse is not interactable and will walk past a perfectly serviceable mount forever, while a friendly's already-mounted horse reports `true` and looks like a valid target to the same code.

## Key Methods

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of BattleMissionAgentInteractionLogic from the subsystem API first
BattleMissionAgentInteractionLogic battleMissionAgentInteractionLogic = ...;
var result = battleMissionAgentInteractionLogic.IsThereAgentAction(userAgent, otherAgent);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleMissionAgentInteractionLogic>();
```

## See Also

- [Area Index](../)
- [MissionLogic](../MissionLogic)
- [Agent](../../mission/Agent)
- [ScriptedMovementComponent](../ScriptedMovementComponent)