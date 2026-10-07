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

`BattleMissionAgentInteractionLogic` is a `MissionLogic` that answers exactly one question — "may this
agent interact with that agent?" — by overriding `IsThereAgentAction`. It contains no other member: no
state, no fields, no other overrides. Despite the namespace
(`TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic`) it is not battle-specific logic in any deep
sense; it is a single mount-riding predicate.

The whole rule is one expression (`BattleMissionAgentInteractionLogic.cs:12`): the other agent must be a
mount, must be active, and then either already carries the user as its rider, or is riderless and the user
carries the `AgentFlag.CanRide` flag. Nothing else qualifies.

It is not an optional behaviour. `BannerlordMissions` adds a new instance to both the battle mission
initializer (`BannerlordMissions.cs:132`) and the siege mission initializer
(`BannerlordMissions.cs:277`), so every battle and siege mission has one already.

## Mental Model

Read it as an agent-to-agent interaction filter, and notice which side of the interaction it validates.
Three boundaries:

- **It validates the target, never the actor.** There is no `userAgent.IsActive()` check and no
  `userAgent.IsHuman` check. A dead or mounted *user* still gets `true`.
- **"Riderless mount" is the interesting half.** Once `otherAgent.RiderAgent == null`, the check collapses
  to a flag test on the user, with no range, line-of-sight or team condition. Any active unridden mount is
  mountable by any `CanRide` agent in the mission, which is exactly what makes it usable for the
  "mount a loose horse" prompt.
- **The flag test uses bitwise equality, not `HasAnyFlag`.**
  `(userAgent.GetAgentFlags() & AgentFlag.CanRide) == AgentFlag.CanRide` requires `CanRide` to be exactly
  representable as a set of bits; it works for a single flag but is not the idiomatic helper the rest of
  the codebase uses (`AgentFlag.CanWieldWeapon` is tested with `HasAnyFlag` at
  `AgentStatCalculateModel.cs:255`).
- Because it derives from `MissionLogic`, this class is also a reasonable place to hang other
  agent-interaction overrides — but subclassing it does not get you the behaviour, since
  `BannerlordMissions` constructs the base type directly.

## How to use

**Getting one.** Do not add your own — the stock instance is already in the mission. To inspect the same
condition from your own behaviour, call the interface method the mission calls, or reimplement the check.

**Typical use** — a behaviour that surfaces the mount prompt using the same predicate:

```csharp
public class MountPromptLogic : MissionLogic
{
    public override void OnMissionTick(int tick)
    {
        Agent player = Agent.Main;
        if (player == null || !player.IsActive()) { return; }

        foreach (Agent other in Mission.Current.Agents)
        {
            if (other == player) { continue; }

            // Exactly the stock rule (BattleMissionAgentInteractionLogic.cs:12)
            bool canMount = other.IsMount && other.IsActive()
                && (other.RiderAgent == player
                    || (other.RiderAgent == null
                        && (player.GetAgentFlags() & AgentFlag.CanRide) == AgentFlag.CanRide));

            if (canMount) { /* show the prompt for `other` */ }
        }
    }
}
```

**The mistake that bites.** Copying the expression and dropping the `otherAgent.IsActive()` term because
"a dead mount cannot be ridden anyway". It can: a riderless mount that has just been killed still satisfies
`IsMount`, and that term is the only thing stopping it. Remove it and the player can walk up to a horse
corpse and trigger the mount interaction.



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
- [BattleEndLogic](../BattleEndLogic)
- [MissionLogic](../MissionLogic)
- [CasualtyHandler](../CasualtyHandler)
- [中文页面](../../../../zh/api/mission-ext/BattleMissionAgentInteractionLogic)