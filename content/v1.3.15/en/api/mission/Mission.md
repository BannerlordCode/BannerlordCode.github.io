---
title: "Mission"
description: "The short-lived runtime container for the active battle or scene: agents, teams, formations, behaviors, and teardown."
---
# Mission

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public sealed class Mission : DotNetObject, IMission`  
**Base:** `DotNetObject`, `IMission`  
**Source:** `TaleWorlds.MountAndBlade/Mission.cs`

## Responsibility in one line

It binds the native scene resources, runtime state, and all scene objects for one running battle, arena, town scene, or other mission.

## Mental model

`Mission` is the **short-lived runtime container for the Mission layer**. It is not the campaign world object and it is not a service that should hold persistent state.

- The engine creates a mission through `MissionState.OpenNew`, using the behavior factory's returned `MissionBehavior` collection. A mod normally does not call `new Mission`.
- `Mission.Initialize` makes the instance available as `Mission.Current`. Entering another scene creates another instance; the old one is cleaned through `EndMissionInternal` and `OnMissionStateFinalize`.
- `MissionBehaviors` contains every attached behavior. A behavior with `BehaviorType == Logic` is also placed in `MissionLogics` and participates in end-condition polling.
- `Agent`, `Team`, and `Formation` belong to the active scene. They expose live state, but none should be cached across Missions.

The campaign layer (`Campaign`, `MapEvent`, and `Hero`) can explain why a battle exists, but it does not own the temporary scene agents. Data that must survive a scene belongs in campaign objects or the save system, not in a Mission field.

## Access and state boundary

```csharp
Mission mission = Mission.Current;
if (mission == null || mission.CurrentState != Mission.State.Continuing)
{
    return;
}

Agent mainAgent = mission.MainAgent;
Team playerTeam = mission.PlayerTeam;
if (mainAgent == null || playerTeam == null || !mainAgent.IsActive())
{
    return;
}

MissionBehavior behavior = mission.GetMissionBehavior<MyMissionBehavior>();
```

`Mission.Current` answers whether the current frame has a usable scene. Menus, the campaign map, loading, and mission-ending callbacks may expose `null` or an instance already moving through teardown. Capture the local `mission` once and use it for one operation instead of repeatedly reading the static entry point across a possible scene transition.

## Key members and timing

| Member | When to use it | Side effect or boundary |
|---|---|---|
| `Current` | In a MissionBehavior callback, a mission-scoped UI callback, or another confirmed Mission scope | It may be `null`; never treat it as a campaign-lifetime singleton |
| `CurrentState`, `Mode`, `CurrentTime` | Distinguish initialization, deployment, continuation, ending, and mode changes | `CurrentTime` is Mission time, not campaign time |
| `Agents`, `AllAgents` | `Agents` is the active set; `AllAgents` is the set still tracked by the Mission | Agents can later become removed/deleted; do not pass their references to the next Mission |
| `Teams`, `PlayerTeam`, `PlayerEnemyTeam` | Resolve current sides and their formations | Teardown clears teams and formations; do not guess sides by list index |
| `MissionBehaviors`, `MissionLogics` | Inspect registered behaviors or understand end-check order | Mutating either collection during callbacks changes later notifications; register early when possible |
| `GetMissionBehavior<T>()` | Find a registered behavior on the current Mission | It returns `null` when absent; a `MissionObject` is not a behavior |
| `AddMissionBehavior`, `RemoveMissionBehavior` | Use only when runtime insertion/removal is genuinely required | Add sets the behavior's `Mission` and calls `OnCreated`; remove calls `OnRemoveBehavior` and then clears `Mission` |
| `EndMission`, `EndMissionAsVictorious`, `EndMissionAsDefeated` | Use after a custom objective is truly complete | Ending is a state transition, not immediate destruction; result callbacks and cleanup still follow |

## Real behavior registration path

The source method `SandBoxMissions.OpenTownCenterMission` uses `MissionState.OpenNew` and returns a `MissionBehavior` array from an `InitializeMissionBehaviorsDelegate`. A custom mission follows the same path:

```csharp
Mission mission = MissionState.OpenNew(
    "TownCenter",
    SandBoxMissions.CreateSandBoxMissionInitializerRecord(
        scene,
        "",
        doNotUseLoadingScreen: false,
        (DecalAtlasGroup)3),
    (Mission currentMission) => new MissionBehavior[]
    {
        new CampaignMissionComponent(),
        new BasicLeaveMissionLogic(),
        new MyMissionBehavior()
    },
    addDefaultMissionBehaviors: true,
    needsMemoryCleanup: true);
```

When already inside a scene, the runtime entry used by the source is:

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.CurrentState == Mission.State.Continuing)
{
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

`MissionGameStarter` is not a Mission registration type in the inspected `TaleWorlds.MountAndBlade` source. Do not copy the campaign `CampaignGameStarter.AddBehavior` example into Mission documentation. Runtime insertion also does not replay the complete startup phases, so a behavior that depends on `OnBehaviorInitialize` should be supplied by the `OpenNew` factory.

## Dependencies: agents, teams, and scene objects

- [`Agent`](../Agent/) is one scene unit, driven by Mission creation and removal.
- [`Team`](../Team/) is a side container owning formations, order controllers, and team AI.
- [`Formation`](../Formation/) is the team-local unit arrangement and order boundary.
- [`MissionBehavior`](../MissionBehavior/) receives Mission agent, team, tick, and teardown callbacks.
- [`MissionLogic`](../../mission-ext/MissionLogic/) is the behavior subclass that participates in Mission-end decisions.
- [`MissionObject`](../../mission-ext/MissionObject/) represents doors, siege engines, triggers, and other scene objects; it is not retrieved with `GetMissionBehavior<T>`.

## Risks and teardown

1. **Null entry:** Reading `Scene`, `Teams`, or `MainAgent` while `Mission.Current` is `null` can crash; during ending/loading also check `CurrentState`.
2. **Stale references:** `EndMissionInternal` notifies behaviors, removes agents, clears teams and mission objects, and finally releases the native Mission. Accessing an old Agent, Team, Formation, or Scene afterward can crash or touch an invalid native handle.
3. **Death callback timing:** `OnAgentRemoved` runs after the affected Agent has been deactivated from its Team. Read the identity and side information immediately; do not retain the removed Agent as long-lived state.
4. **End race:** `EndMission` only advances the ending state. Do not add behaviors, create objects tied to the old Scene, or write scene objects into campaign save state from `OnEndMissionInternal`.
5. **Collection mutation:** Tick and agent notifications iterate `MissionBehaviors`. Adding or removing multiple behaviors from a callback can change the current iteration; register behavior in the creation factory when possible.

## Cross-version notes

- 1.3.15 and 1.4.5 both use `Mission.Current`, `MissionState.OpenNew`, `AddMissionBehavior`, and `InitializeStartingBehaviors` for the core path.
- The 1.4.5 source makes the teardown order explicit: agents, teams, mission objects, behaviors, and the native Mission are released, and the current Mission is cleared. Treat references as single-scene resources in both versions.
- Depend on public `Mission` and `MissionBehavior` APIs rather than private fields or native pointers exposed by decompilation.

## Navigation

- [↑ Mission API module](./)
- [↔ MissionBehavior](../MissionBehavior/)
- [↔ Agent](../Agent/) · [Team](../Team/) · [Formation](../Formation/)
- [↓ MissionLogic](../../mission-ext/MissionLogic/)
- [Architecture: crash and save boundaries](../../../architecture/crash-boundaries/)
