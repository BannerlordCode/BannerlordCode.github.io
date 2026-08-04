---
title: "Team"
description: "The Mission-scoped battle team that owns Agents, Formations, faction relations, and command state; it is a runtime boundary, not saved campaign data."
---

# Team

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class Team : IMissionTeam`  
**Contract:** [`IMissionTeam`](../../core-extra/IMissionTeam)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Team.cs`

## One-line responsibility

Inside one Mission, `Team` organizes the Agents, Formations, orders, AI, team relations, and tactical queries that belong to one battle side.

## Mental model

`Team` belongs to the Mission layer. `Mission.Teams` creates and owns it for an attacker, defender, player, enemy, ally, or scenario-specific group; Campaign and the save system do not own it. Team creation establishes the native `MBTeam`, initializes normal and special Formations, and assigns attacker/defender, player, and enemy roles. When the Mission ends, the team collection clears the Formations and native handles, so a Team is valid only during its host Mission.

Think of it as one level in the runtime ownership tree: Team owns Agent and Formation collections, Formation groups those Agents, and TeamAI, `QuerySystem`, and `DetachmentManager` maintain tactical state around that tree. It is not a persistent `Kingdom` or `Clan`, and constructing a Team yourself does not replace `Mission.Teams.Add` because that bypasses Mission-level initialization.

## When to use it, and when not to

**Use it when:**

- A `MissionBehavior` needs the player, enemy, attacker, or defender Team during initialization, ticks, or Agent callbacks.
- Code must inspect sides, team relationships, Formations, order controllers, or tactical query data.
- A live Mission already exposes the desired object through `Mission.PlayerTeam`, `PlayerEnemyTeam`, `AttackerTeam`, or `DefenderTeam`.

**Do not use it when:**

- Persisting campaign state. Save stable character, faction, or formation intent identifiers and reacquire runtime teams in the next Mission.
- Editing `ActiveAgents`, `TeamAgents`, or Formation lists directly. `Agent.SetTeam` and the `Agent.Formation` setter maintain reverse references, native state, and cache invalidation.
- Ticking, clearing, or migrating a Team after its Mission has ended, without a valid Mission, or from a background thread.
- Applying campaign diplomacy. War, relation, and gold changes belong to Campaign Actions and Behaviors, not Team.

## Creation, ownership, and teardown

Mission components create teams through `Mission.Teams.Add(BattleSideEnum.Attacker, ...)` or the defender equivalent. `TeamCollection.Add` creates the native team, constructs the managed object, initializes Formations, and runs Mission callbacks such as `OnAddTeam` and `AfterAddTeam`. The public constructor is not the normal mod entry point because direct construction skips the collection and relation setup.

During `Mission.EndMission`, `Teams.Clear()` clears Formations, role references, and native team state. `Team.Invalid` is a sentinel for “no valid team” used by the engine and Agent build paths; it is not a normal battle team. Check `team != null && team.IsValid` before using a Team and let the current Mission own its lifetime.

## Key members and side effects

### Identity, side, and relations

- `Mission` is the host; `Side`, `IsAttacker`, `IsDefender`, and `TeamSide` describe the battle role, not a Campaign faction identity.
- `IsPlayerTeam`, `IsPlayerAlly`, `IsPlayerGeneral`, and `IsPlayerSergeant` describe the current Mission's player role and can change with scenario setup.
- `IsEnemyOf` and `IsFriendOf` read relationships. `SetIsEnemyOf` changes them and performs the required multiplayer synchronization when applicable; do not update only a local cache.
- `Color`, `Color2`, and `Banner` are scene-facing identity data, not persistent Campaign ownership.

### Agent and Formation ownership

- `ActiveAgents` contains Agents still active in the Mission; death, removal, and team changes alter it.
- `TeamAgents` is the registered team collection and does not have the same lifetime or count as `ActiveAgents`.
- `FormationsIncludingEmpty` includes ordinary Formations even when empty; `FormationsIncludingSpecialAndEmpty` also includes special Formations.
- `GetFormation(FormationClass)` retrieves an existing Formation by class. Do not infer a scenario's meaning from a hard-coded index.
- `Leader`, `Heroes`, `GeneralAgent`, `GeneralsFormation`, and `BodyGuardFormation` are meaningful only after their corresponding role has been assigned and can become null or stale during teardown.

### Orders, AI, and queries

- `MasterOrderController`, `PlayerOrderController`, and `SetCustomOrderController` define where orders come from. Replacing a controller changes order dispatch and can affect multiplayer behavior.
- `TeamAI`, `AddTeamAI`, `DelegateCommandToAI`, and `ResetTactic` control AI ownership. Do not add the same AI component repeatedly from a tick.
- `QuerySystem` exposes unit counts, positions, power, ally/enemy ratios, and casualty-related tactical data. Its `QueryData` values are cached with expiry rules, not thread-safe per-frame snapshots.
- `DetachmentManager` tracks detached units and targets. Agent and Formation movement must go through the callbacks that keep detachment state current.

### Timing and cleanup

- `Tick(float dt)` is called by Mission's update order. Do not call it manually to compensate for a missed frame; Mission processes Agents before teams and Formations.
- `OnAgentRemoved`, `OnMissionEnded`, `Reset`, and `Clear` are cleanup boundaries. Do not put old Agents or Formations into a collection that survives the Mission.
- `OnFormationsChanged`, `OnFormationsChangedInDeployment`, and `OnFormationAIActiveBehaviorChanged` are observation points; external subscribers must release their own references before Mission teardown.

## Dependency graph

- **Host and upstream:** [`Mission`](../../mission/Mission) creates and owns Team; [`MissionBehavior`](../../mission/MissionBehavior) is the usual mod timing boundary.
- **Runtime children:** [`Agent`](../../mission/Agent) joins or leaves through `SetTeam`; [`Formation`](../../mission/Formation) groups Agents and consumes Team orders.
- **Tactical systems:** [`TeamQuerySystem`](../TeamQuerySystem), [`TeamAIComponent`](../TeamAIComponent), and [`TeamCollection`](../TeamCollection) provide query, AI, and collection behavior.
- **Rule consumer:** [`MissionLogic`](../MissionLogic) can use Team and Formation state for victory, retreat, and result decisions; Team should not end the Campaign itself.
- **Module boundary:** [`MBSubModuleBase`](../../core/MBSubModuleBase) owns module lifecycle, but it cannot provide a valid Team before a Mission exists.

## Real acquisition examples

This MissionBehavior reads the real player Team and infantry Formation after Mission initialization. It does not construct Team or edit Agent collections; it changes AI control once during the Mission setup window.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public sealed class TeamInspectionBehavior : MissionBehavior
{
    protected override void OnBehaviorInitialize()
    {
        Team playerTeam = Mission.PlayerTeam;
        if (playerTeam == null || !playerTeam.IsValid)
        {
            return;
        }

        Formation infantry = playerTeam.GetFormation(FormationClass.Infantry);
        if (infantry != null && infantry.IsAIControlled)
        {
            infantry.SetControlledByAI(false);
        }
    }
}
```

For an in-Mission observer, acquire both sides from the host and use the relationship API rather than reconstructing the relation:

```csharp
public sealed class EnemyTeamObserver : MissionBehavior
{
    protected override void OnMissionTick(float dt)
    {
        Team playerTeam = Mission.PlayerTeam;
        Team enemyTeam = Mission.PlayerEnemyTeam;
        if (playerTeam != null && enemyTeam != null && playerTeam.IsEnemyOf(enemyTeam))
        {
            int activeEnemies = enemyTeam.ActiveAgents.Count;
            if (activeEnemies == 0)
            {
                OnEnemyTeamDepleted();
            }
        }
    }

    private void OnEnemyTeamDepleted()
    {
    }
}
```

## Risks and crash boundaries

1. **Cross-Mission references:** Team, Agent, Formation, native `MBTeam`, and QuerySystem are Mission runtime objects. Save or Campaign code should store stable identifiers and reacquire them after a new Mission opens.
2. **Wrong construction boundary:** `new Team(...)` skips TeamCollection's native handle, Formation, relation, and role setup and can leave managed and native state inconsistent.
3. **Bypassing reverse references:** Writing team or Formation lists directly skips `Agent.SetTeam`, `Agent.Formation`, detachment updates, QuerySystem expiry, and network synchronization. Use the supported setters and Team/Formation operations.
4. **Wrong-phase ticks:** Calling `Tick`, `Clear`, or QuerySystem members after Mission teardown can touch cleared native state. Keep work inside the MissionBehavior lifecycle.
5. **Thread and network rules:** Some Agent work is parallelized, but Team and Formation updates remain constrained by Mission's update thread and native state. Cross-thread relation changes or missing multiplayer sync can diverge peers.
6. **Cached queries:** QuerySystem expiry means repeated reads may return cached data. Do not treat it as an exact death event or synchronously write Team state from a query callback.

## Version note

In 1.4.5, Team remains a `TaleWorlds.MountAndBlade` Mission runtime object. 1.3.15 uses the same Team/Formation/Agent boundary, but TeamAI, query-cache, and multiplayer event members can differ. Compile against the target version's `Team.cs` and Mission factory; do not substitute a persistent Campaign object for Team.

## See also and bidirectional navigation

- ↑ Parent module: [Mission extensions API](../)
- ↔ Siblings: [TeamQuerySystem](../TeamQuerySystem) · [TeamCollection](../TeamCollection) · [TeamAIComponent](../TeamAIComponent)
- ↓ Formation and members: [Formation](../../mission/Formation) · [Agent](../../mission/Agent)
- Upstream/timing: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionLogic](../MissionLogic)
- Module entry: [MBSubModuleBase](../../core/MBSubModuleBase)
- Writing contract: [Doc Contract](../../../architecture/doc-contract)
