---
title: "Team"
description: "The runtime container for one Mission side: active agents, formations, side relations, order controllers, and team AI."
---
# Team

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class Team : IMissionTeam`  
**Base:** `IMissionTeam`  
**Source:** `TaleWorlds.MountAndBlade/Team.cs`

## Responsibility in one line

It organizes the agents, formations, order controllers, and team AI for one side inside the current Mission.

## Mental model

`Team` is a **Mission-scoped side container**, not a Campaign `Clan`, `Kingdom`, or party object.

- Mission creates teams and places them in `Mission.Teams`. Obtain them from `Mission.Current.PlayerTeam`, `PlayerEnemyTeam`, or the team collection; do not construct a normal Team yourself.
- `TeamAgents` contains registered Agents, while `ActiveAgents` contains units still active on the battlefield. When an Agent is removed, Team deactivates it first.
- `FormationsIncludingEmpty` and `FormationsIncludingSpecialAndEmpty` expose formation slots; `GetFormation(FormationClass)` selects one by semantic class.
- `Side` is the battle side. `IsPlayerTeam` and `IsPlayerAlly` are relative to the current Mission's player team; they are not campaign faction identity.

The native `MBTeam`, Team AI, QuerySystem, and OrderControllers all depend on the current Mission. Teardown clears teams and formations, so cross-scene state must be a stable campaign ID or value, never a Team reference.

## How to obtain a Team

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

`Team.Invalid` is an engine-provided invalid sentinel, not a normal team on which to issue orders or read formations. Check `IsValid` and avoid fixed indexes such as `Teams[0]`.

## When to use and when not to

**Use it for:** finding player/enemy sides, filtering Agents by side, accessing formations, setting Mission-local friend/enemy relations, reading the Team QuerySystem, or sending orders through the current controllers.

**Do not use it for:** replacing a Campaign party, caching a Team across Missions, directly changing campaign diplomacy, or bypassing the order controllers to rebuild native teams.

## Dependencies

- Upstream: [`Mission`](../Mission/) creates, owns, and clears the Team; [`Agent`](../Agent/) enters the scene through Team membership.
- Internal: [`Formation`](../Formation/) owns formation members and orders; `TeamAIComponent`, `TeamQuerySystem`, and `DetachmentManager` drive tactics.
- Downstream: [`MissionBehavior`](../MissionBehavior/) receives `OnAddTeam`/`AfterAddTeam`; [`MissionLogic`](../../mission-ext/MissionLogic/) can read Team state for an end condition.
- Related layer: Campaign `PartyBase`/`MobileParty` are campaign objects, not persistent replacements for a Team.

## Risks

1. **Invalid Team:** `Team.Invalid` or a Team after Mission end cannot safely service `GetFormation`, `ActiveAgents`, QuerySystem, or orders.
2. **Cross-Mission caching:** teardown runs the Team end path, clears formations, and releases the native object. Reading fields afterward can crash or touch an invalid handle.
3. **Wrong side assumptions:** there may be attacker/defender ally teams and collection order is not guaranteed. Use `PlayerTeam`, `Side`, and `IsEnemyOf`, not indexes.
4. **Agent death timing:** `Mission.OnAgentRemoved` calls `Team.DeactivateAgent` before notifying behaviors. Death callbacks must accept that the Agent is already absent from `ActiveAgents`.
5. **Shared order control:** replacing controllers or rearranging every Formation in one frame can interfere with vanilla Team AI. Issue orders only in a phase where the mod owns the control.

## Key members

| Member | When to use it | Effect |
|---|---|---|
| `Side`, `TeamSide` | Distinguish battle side and player-relative role | `TeamSide` depends on the current Mission's PlayerTeam |
| `IsPlayerTeam`, `IsPlayerAlly`, `IsAttacker`, `IsDefender` | Quickly filter tactical objects | Not campaign faction identity |
| `Mission`, `TeamIndex`, `IsValid` | Verify ownership and native validity | Team is unusable after teardown |
| `ActiveAgents`, `TeamAgents` | Read active members or all registered members | Removal, retreat, and deletion change the collections |
| `FormationsIncludingEmpty`, `FormationsIncludingSpecialAndEmpty` | Iterate normal and special formation slots | Use `FormationClass` for meaning rather than list order |
| `GetFormation(FormationClass)` | Obtain Infantry, Ranged, Cavalry, and other slots | The result remains owned by the current Mission |
| `MasterOrderController`, `PlayerOrderController` | Send orders through the existing system | Replacing them changes AI/player input paths |
| `QuerySystem`, `TeamAI`, `DetachmentManager` | Tactical queries, AI, and detach/attach management | Requires valid formation and Agent collections |
| `IsEnemyOf`, `IsFriendOf`, `SetIsEnemyOf` | Read or set Mission-local relations | Not campaign diplomacy; network/server boundaries still apply |
| `GeneralsFormation`, `BodyGuardFormation`, `GeneralAgent` | Maintain special role/formation associations | References must be maintained only within the current Mission |

## Real examples

### Read active Agents by enemy relation

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

### Obtain a formation and issue orders

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

This follows the source-backed Team → Formation → Order path. It does not construct a Team, use `Teams[0]`, or pretend that a campaign faction is a battle side.

## Lifetime and cleanup

- After Mission adds a Team, it notifies every `MissionBehavior.OnAddTeam` and then `AfterAddTeam`.
- Agent addition/removal changes `TeamAgents`/`ActiveAgents` and notifies each Formation's AI.
- Mission ending calls the Team's `OnMissionEnded`, then clears the Team, its formations, and the native `MBTeam`.
- Mods have no cross-Mission Team hook. Clear your own cached references from `MissionBehavior.OnEndMissionInternal` or `OnRemoveBehavior`.

## Cross-version notes

- 1.3.15 and 1.4.5 both support resolving player/enemy teams from `Mission.Current`, selecting formations with `Team.GetFormation`, and controlling them with Formation orders.
- 1.4.5 moves more network details into OrderController and Mission network components. Cross-version code should use public Team/Formation entry points rather than internal `MBTeam` state.

## Navigation

- [↑ Mission API module](./)
- [↔ Mission](../Mission/)
- [↔ MissionBehavior](../MissionBehavior/)
- [Child Formation](../Formation/) · [Child Agent](../Agent/)
- [MissionLogic](../../mission-ext/MissionLogic/)
- [Campaign layer](../../campaign/Campaign/)
