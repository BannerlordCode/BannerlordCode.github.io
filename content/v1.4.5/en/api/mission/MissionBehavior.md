---
title: "MissionBehavior"
description: "The Mount & Blade scene behavior base: owned by Mission and driven by lifecycle, Agent, Team, Formation, and tick callbacks."
---

# MissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class MissionBehavior : IMissionBehavior`  
**Base:** `IMissionBehavior`  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionBehavior.cs`

## One-line responsibility

`MissionBehavior` is a pluggable runtime behavior for a `Mission`: Mission creates, owns, and iterates it, while a derived class observes or changes the scene's `Agent`, `Team`, `Formation`, and tick state at the correct lifecycle point.

## Mental model

This is neither a freely callable service object nor a Campaign behavior. It is a lifecycle subscriber mounted on the **current scene simulation**. A Mission factory creates the behavior; `Mission.AddMissionBehavior` writes the back-reference to `Mission`, routes the behavior by `BehaviorType`, and calls `OnCreated`. The behavior may receive callbacks until the Mission ends or removes it.

Keep short-lived scene state in the derived behavior and treat `Mission` as host-owned context: it is usable after attachment and becomes `null` after removal. Do not make a behavior a cross-scene singleton, and do not assume that `Mission` exists in the constructor.

## When to use, when not to

**Use it for:**

- Observing `OnAgentCreated`, `OnAgentRemoved`, hit callbacks, team changes, or deployment callbacks.
- Running scene-synchronized work in `OnPreMissionTick`, `OnMissionTick`, or `OnFixedMissionTick`.
- Releasing event subscriptions, timers, and native-object references in `OnEndMissionInternal` / `OnRemoveBehavior`.

**Do not use it for:**

- Victory checks, `MissionResult` creation, retreat, or surrender; derive from [`MissionLogic`](../mission-ext/MissionLogic) and implement that contract.
- Campaign map mutations; return to Campaign behavior and the appropriate Action instead of changing save state in a Mission tick.
- Global lifecycle work outside a Mission; use the proper SubModule or Campaign event entry rather than substituting `Mission.Current`.

## The `BehaviorType` contract

`BehaviorType` is abstract and every derived class must implement it. In 1.4.5 the enum has only two values:

| Value | Mission handling | Use it for |
|---|---|---|
| `MissionBehaviorType.Logic` | Mission also casts the behavior to `MissionLogic` and puts it in `MissionLogics` | Rules, victory, results, retreat, and surrender flow; `MissionLogic` supplies this value automatically |
| `MissionBehaviorType.Other` | Mission puts it in the ordinary behavior collection | Observers, presentation, counters, cameras, and helpers that do not decide results |

Returning `Logic` from a class that is not a `MissionLogic` makes the `as MissionLogic` conversion null and breaks the Logic collection. Conversely, `MissionLogic` already fixes the value to `MissionBehaviorType.Logic`; do not override it to `Other`.

## Lifecycle and callback groups

### Creation and start

- `OnAfterMissionCreated` is the extension point after Mission creation, suitable for initialization that needs the Mission but precedes the running loop.
- `OnBehaviorInitialize` runs when the behavior is initialized by the Mission, suitable for registering Mission- or engine-owned listeners.
- `OnCreated` runs immediately from `AddMissionBehavior`, after the host has set `Mission`; it also runs when a behavior is attached dynamically.
- `EarlyStart` and `AfterStart` are the two start-phase hooks. Use the phase required by the derived behavior's scene dependencies instead of trying to access scene state from the constructor.

### Frames, Agents, and combat

- `OnPreMissionTick`, `OnPreDisplayMissionTick`, `OnMissionTick`, and `OnFixedMissionTick` target different tick phases and only run while the corresponding Mission lifecycle is active. Keep per-frame work bounded.
- `OnAgentCreated`, `OnAgentBuild`, `OnAgentTeamChanged`, and `OnAgentControllerSetToPlayer` cover Agent creation, equipment/visual preparation, team changes, and player-control changes.
- `OnEarlyAgentRemoved`, `OnAgentRemoved`, and `OnAgentDeleted` represent different removal stages. Read death information in `OnAgentRemoved` when appropriate; do not carry a removed Agent into another Mission.
- `OnMissileHit`, `OnMeleeHit`, `OnAgentHit`, `OnScoreHit`, and `OnRegisterBlow` observe hit and collision flow. They can be high-frequency callbacks, so avoid expensive Campaign work there.

### Teams, formations, and scene interaction

`OnAddTeam` / `AfterAddTeam`, `OnTeamDeployed`, `OnBattleSideDeployed`, and `OnDeploymentFinished` / `OnAfterDeploymentFinished` cover team and deployment stages. `OnAssignPlayerAsSergeantOfFormation` covers formation role changes. `OnFocusGained`, `OnObjectUsed`, `OnEntityRemoved`, and `OnClearScene` connect interaction objects and scene entities. Their parameters are current Mission objects whose lifetime remains owned by Mission or Agent.

### End and removal

- `OnEndMissionInternal` is the public internal-end hook; the base implementation continues into protected `OnEndMission`. Preserve `base.OnEndMissionInternal()` when overriding unless the derived class deliberately owns that chain.
- `OnRemoveBehavior` runs first inside `Mission.RemoveMissionBehavior`, before collection removal; use it to unsubscribe and clear fields.
- Once removal finishes, the `Mission` property is `null`. Cleanup code cannot use it to reach the scene, Agents, or Teams.

## Key members and timing

| Member | Purpose and boundary |
|---|---|
| `Mission` | Set internally by the host after attachment; the route to `Agents`, `Teams`, `PlayerTeam`, and other context. It is `null` after removal. |
| `BehaviorType` | Chooses the ordinary collection or `MissionLogics`. It is not a runtime mode switch and must not change with Mission state. |
| `DebugInput` | Exposes the debug input context; keep it for development behavior rather than treating it as the long-term player-input layer. |
| `OnAgentRemoved(...)` | The point to read `AgentState`, affector, and `KillingBlow`. Do not retain the removed `Agent` across frames. |
| `GetCompassTargets()` | Returns `null` by default. Only behaviors that actually provide compass targets should return a list; an empty list is not a substitute for another behavior's result. |
| `OnMissionStateActivated` / `OnMissionStateDeactivated` / `OnMissionStateFinalized` | Bridges outer MissionState activation, deactivation, and finalization; subscriptions must be cleaned symmetrically. |

## Dependencies

- **Host and upstream:** [`Mission`](./Mission) obtains the factory result from `MissionState.OpenNew` and calls `AddMissionBehavior`; [`Campaign`](../campaign/Campaign) or SandBox mission entry points decide when to open a Mission.
- **Scene objects:** [`Agent`](./Agent) drives creation, hit, and removal callbacks; [`Team`](../mission-ext/Team) and [`Formation`](./Formation) provide deployment, side, and formation context.
- **Rules downstream:** [`MissionLogic`](../mission-ext/MissionLogic) specializes Logic behaviors and participates in the `MissionLogics` result, retreat, and end flow.
- **Module entry:** [`MBSubModuleBase`](../core/MBSubModuleBase) is the mod's game-lifecycle entry point, but it does not replace Mission-level behavior registration.

## Risks and crash boundaries

1. **Wrong `BehaviorType`:** Returning `Logic` from an ordinary behavior, or treating `MissionLogic` as `Other`, leaves the Logic collection incomplete and can prevent result callbacks or produce a null cast.
2. **Wrong-phase access:** Using `Mission`, `Agent`, or `Team` from a constructor, before start, or after `OnRemoveBehavior` can produce null references or released engine objects.
3. **Post-death Agent references:** `OnAgentRemoved` is for immediately reading state and copying data into your own fields; long-lived `Agent` caches become invalid as deletion and cleanup continue.
4. **Repeated teardown:** `OnEndMissionInternal`, `OnRemoveBehavior`, and external events can occur in adjacent phases. Cleanup must be idempotent and must not unregister an already-removed handle twice.
5. **Wrong-layer tick mutations:** A Mission tick is not a Campaign save transaction. Directly changing map entities from a high-frequency callback can desynchronize state, corrupt saves, or expose stale references to the next Mission.

## Real registration example

The following matches the real factory shape of `SandBoxMissions.OpenBattleMission(MissionInitializerRecord rec)`: `rec` is the `MissionInitializerRecord` received by that entry point, the `InitializeMissionBehaviorsDelegate` returns the behavior array, and the engine attaches each item to the Mission.

```csharp
using TaleWorlds.MountAndBlade;

public sealed class EnemyRemovalCounter : MissionBehavior
{
    private int _enemyKills;

    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow blow)
    {
        if (agentState == AgentState.Killed &&
            Mission.PlayerTeam != null &&
            affectedAgent.Team != null &&
            affectedAgent.Team.IsEnemyOf(Mission.PlayerTeam))
        {
            _enemyKills++;
        }
    }
}

public static Mission OpenBattleWithCounter(MissionInitializerRecord rec)
{
    return MissionState.OpenNew(
        "Battle",
        rec,
        (Mission mission) => new MissionBehavior[]
        {
            new EnemyRemovalCounter(),
            new BattleEndLogic()
        },
        true,
        true);
}
```

Dynamic attachment is also a real path: StoryMode's `AchievementsCampaignBehavior.OnMissionStarted(IMission obj)` creates `AchievementMissionLogic` and calls `Mission.Current.AddMissionBehavior(...)`. Use that shape when a Mission is already open and a listener is needed only after the event fires.

## See also and bidirectional navigation

- ↑ Parent (module index): [Mission module home](./)
- ↔ Siblings: [Mission](./Mission) · [Agent](./Agent) · [Formation](./Formation)
- ↓ Specialized child: [MissionLogic](../mission-ext/MissionLogic)
- Upstream entries: [Campaign](../campaign/Campaign) · [MBSubModuleBase](../core/MBSubModuleBase)
- Writing contract: [Doc Contract](../../architecture/doc-contract)
