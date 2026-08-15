---
title: "Team"
description: "The runtime container of one battle-side in a Mission: active Agents, Formations, side relations, order controller, and Team AI."
---
# Team

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class Team : IMissionTeam`  
**Base:** `IMissionTeam`  
**Source:** `TaleWorlds.MountAndBlade/Team.cs`

## Overview

It organizes the Agents, Formations, OrderController, and Team AI of the same side in the current Mission into a queryable, orderable boundary, and coordinates active members, formation slots, friend/foe relations, and native resource cleanup during Mission teardown.

## Mental Model

`Team` is a **Mission-scoped side container**, not the Campaign's `Clan`, `Kingdom`, or party object.

- The Mission creates teams and puts them into `Mission.Teams`; obtain them via `Mission.Current.PlayerTeam`, `PlayerEnemyTeam`, or by iterating `Teams`; do not construct an ordinary Team yourself.
- `TeamAgents` are the registered Agents, `ActiveAgents` are the Agents still on the active battlefield; when an Agent is removed, the Team first deactivates it from the active set.
- `FormationsIncludingEmpty` and `FormationsIncludingSpecialAndEmpty` provide formation slots; `GetFormation(FormationClass)` gets a slot by category.
- `Side` is the battlefield side, `IsPlayerTeam` / `IsPlayerAlly` are relations relative to the current Mission's player team; do not treat them as campaign faction identity.

The Team's native `MBTeam`, Team AI, QuerySystem, and OrderController all depend on the current Mission. Mission end cleans up the Team and formations; cross-scene saving can only store a stable campaign ID or a result value.

## How to Obtain a Team

```csharp
Mission mission = Mission.Current;
if (mission == null || mission.CurrentState != Mission.State.Continuing)
{
    return;
}

Team player = mission.PlayerTeam;
Team enemy = mission.PlayerEnemyTeam;
foreach (Team team in mission.Teams)
{
    if (team.IsValid && team != player)
    {
        TeamSideEnum role = team.TeamSide;
        int activeCount = team.ActiveAgents.Count;
    }
}
```

`Team.Invalid` is an invalid sentinel provided by the engine, not a normal team you can order or read a Formation from. Check `IsValid` before use, and avoid fixed indices such as `Teams[0]`.

## When to Use / When Not to Use

**Good for:** finding the player/enemy team, filtering Agents by side, accessing formations, setting friend/foe relations, reading the Team QuerySystem, or handing orders to the current Team's controller.

**Not good for:** using Team to replace a Campaign party, caching `Team` across Missions, directly changing campaign relations, or rebuilding the native team while bypassing the OrderController.

## Dependencies

- Upstream: [`Mission`](../Mission/) creates, owns, and cleans up Team; [`Agent`](../Agent/) enters the scene through Team.
- Internal: [`Formation`](../Formation/) carries formation members and orders; `TeamAIComponent`, `TeamQuerySystem`, and `DetachmentManager` drive tactics.
- Downstream: [`MissionBehavior`](../MissionBehavior/) listens for team joins via `OnAddTeam` / `AfterAddTeam`; [`MissionLogic`](../../mission-ext/MissionLogic/) can read Team state to decide victory.
- Related layer: the Campaign's `PartyBase` / `MobileParty` are campaign objects, not a persistent substitute for Team.

## Risks

1. **Invalid Team:** `Team.Invalid`, or the `MBTeam` after a Mission ends, must not be used for `GetFormation`, `ActiveAgents`, QuerySystem, or orders.
2. **Caching across Missions:** Mission teardown calls the Team's end logic and cleans up Formations and native objects; continuing to use fields after cleanup may crash or read an invalid handle.
3. **Wrong side assumptions:** Attacker/Defender may each have ally teams, and the collection order is not guaranteed; use `PlayerTeam`, `Side`, and `IsEnemyOf`, do not guess indices.
4. **Agent death timing:** `Mission.OnAgentRemoved` first calls `Team.DeactivateAgent`, then notifies the behavior. When counting active members in a death callback, accept that the Agent is already out of `ActiveAgents`.
5. **Breaking shared orders:** directly replacing the OrderController or reordering all Formations in the same frame interferes with the vanilla Team AI; only issue orders in a Mission phase where you clearly own control.

## Member Reference

| Member | When to use | Effect |
|---|---|---|
| `Side`, `TeamSide` | Distinguish battlefield side and player-relative relation | `TeamSide` depends on the current Mission's PlayerTeam |
| `IsPlayerTeam`, `IsPlayerAlly`, `IsAttacker`, `IsDefender` | Quickly filter tactical objects | Not a Campaign faction identity |
| `Mission`, `TeamIndex`, `IsValid` | Check ownership and native validity | Cannot keep using the Team after end |
| `ActiveAgents`, `TeamAgents` | Read active members and full registered members respectively | Removal, retreat, deletion change the collection |
| `FormationsIncludingEmpty`, `FormationsIncludingSpecialAndEmpty` | Iterate available or special formation slots | Do not rely on list order for tactical meaning; use `FormationClass` |
| `GetFormation(FormationClass)` | Get slots such as Infantry, Ranged, Cavalry | The returned Formation still belongs to the current Mission |
| `MasterOrderController`, `PlayerOrderController` | Issue orders through the existing order system | Replacing the controller changes the player/AI input path |
| `QuerySystem`, `TeamAI`, `DetachmentManager` | Tactical query, AI, detach/attach management | Depends on formations and the Agent set being in a valid phase |
| `IsEnemyOf`, `IsFriendOf`, `SetIsEnemyOf` | Read or sync in-Mission friend/foe relations | Not the same as diplomacy; server/replay add network-sync boundaries |
| `GeneralsFormation`, `BodyGuardFormation`, `GeneralAgent` | Read/set special roles and formation associations | References must be maintained within the current Mission |

## Minimal Real Examples

### Read active Agents by friend/foe relation

```csharp
public override void OnMissionTick(float dt)
{
    Mission mission = Mission.Current;
    Team player = mission?.PlayerTeam;
    if (player == null || !player.IsValid)
    {
        return;
    }

    foreach (Team team in mission.Teams)
    {
        if (!team.IsValid || !team.IsEnemyOf(player))
        {
            continue;
        }

        foreach (Agent agent in team.ActiveAgents)
        {
            if (agent.IsActive() && agent.IsHuman)
            {
                ObserveEnemy(agent.Position);
            }
        }
    }
}
```

### Get a formation from the player team and issue orders

```csharp
Mission mission = Mission.Current;
Team player = mission?.PlayerTeam;
if (player == null || !player.IsValid)
{
    return;
}

Formation infantry = player.GetFormation(FormationClass.Infantry);
if (infantry.CountOfUnits > 0)
{
    infantry.SetArrangementOrder(ArrangementOrder.ArrangementOrderShieldWall);
    infantry.SetMovementOrder(MovementOrder.MovementOrderCharge);
}
```

This uses the real Team → Formation → Order chain from the source; no `Teams[0]`, no hand-built Team, no faked campaign side.

## Lifecycle and Cleanup

- After the Mission adds a Team, it notifies every `MissionBehavior.OnAddTeam`, then calls `AfterAddTeam`.
- Agent add/remove changes `TeamAgents` / `ActiveAgents`, and notifies each Formation's AI.
- At Mission end the Team's `OnMissionEnded` is called, then the Team, Formations, and native `MBTeam` are cleaned up.
- A mod has no Team hook that crosses Missions; when you need to clear a cache, do it in your own `MissionBehavior.OnEndMissionInternal` or `OnRemoveBehavior`.

## Cross-Version Notes

- Both 1.3.15 and 1.4.5 support getting the Player/Enemy Team from `Mission.Current`, getting formations from `Team.GetFormation`, and controlling them through Formation orders.
- 1.4.5 continues to hand some network-sync details to the OrderController and Mission network components; cross-version code should use the public Team/Formation entry points, not rely on internal `MBTeam` state.

## See Also

- [↑ Mission API module](./)
- [↔ Mission](../Mission/)
- [↔ MissionBehavior](../MissionBehavior/)
- [Child Formation](../Formation/) · [Child Agent](../Agent/)
- [MissionLogic](../../mission-ext/MissionLogic/)
- [Campaign-layer Campaign](../../campaign/Campaign/)
