---
title: "Mission"
description: "The runtime container for the current battle or scene: manages Agents, Teams, Formations, MissionBehaviors, and scene cleanup."
---

# Mission

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class Mission : DotNetObject, IMission`
**Base:** `DotNetObject`, `IMission`
**Source:** `TaleWorlds.MountAndBlade/Mission.cs`

## One-line responsibility

It binds the native resources, runtime state, and all scene objects of a running battle, arena, town scene, or other mission scene together, and drives behaviors, units, teams, formations, and final cleanup within the `Mission.Current` scope.

## Mental Model

`Mission` is the **short-lived runtime container of the Mission layer**, not a campaign-world object, and not a long-lived saveable service.

- The engine creates a mission via `MissionState.OpenNew`, handing the `MissionBehavior` set returned by the behavior factory to the new Mission; mods should usually not `new Mission` themselves.
- `Mission.Initialize` sets the current instance as `Mission.Current`. After entering another scene a new instance appears, and the old one is cleaned up through `EndMissionInternal` and `OnMissionStateFinalize`.
- `MissionBehaviors` is the set of all attached behaviors; among them, `MissionLogic` with `BehaviorType == Logic` also enters `MissionLogics`, polled for end-of-mission judgment.
- `Agent`, `Team`, and `Formation` all belong to the current scene. They can read live state but must not be cached across Missions.

The campaign-layer `Campaign`, `MapEvent`, and `Hero` can decide *why* a battle is entered, but do not own the temporary Agents inside that battle. Data that must survive across scenes should be written back to campaign objects or the save system, not hung on the Mission.

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

`Mission.Current` only answers "is there a usable scene this frame." Menus, the world map, loading phases, and post-mission callbacks may all yield `null` or an instance that is ending. Save a local `mission` first, then use it within the same operation, to avoid crossing a scene switch between multiple reads of the static entry.

## Key members and call timing

| Member | When to use | Important side effects / boundaries |
|---|---|---|
| `Current` | Get the current instance inside a MissionBehavior callback, a UI mission callback, or a confirmed Mission scope | May be `null`; do not keep it as a campaign-level singleton |
| `CurrentState`, `Mode`, `CurrentTime` | Judge init, deploy, continuing, end, and mode switches | `CurrentTime` is the current Mission time, not campaign time |
| `Agents`, `AllAgents` | `Agents` for the current active set; `AllAgents` for all Agents still recorded by the Mission | An Agent may then enter removed / deleted state; do not hand the reference to the next Mission when iterating |
| `Teams`, `PlayerTeam`, `PlayerEnemyTeam` | Find the current faction and its formations | Team / Formation are cleared on teardown; do not guess factions by fixed index |
| `MissionBehaviors`, `MissionLogics` | Query registered behaviors or understand end-judgment order | Modifying the set at runtime affects this-frame callbacks and end checks; prefer registering in the creation factory |
| `GetMissionBehavior<T>()` | Find a registered concrete behavior from the current Mission | Returns `null` when not found; cannot fetch a `MissionObject` as a behavior |
| `AddMissionBehavior`, `RemoveMissionBehavior` | Only when runtime plug / unplug is truly needed | Adding sets the behavior's `Mission` and calls `OnCreated`; removing calls `OnRemoveBehavior`, then nulls the `Mission` |
| `EndMission`, `EndMissionAsVictorious`, `EndMissionAsDefeated` | Use when the mission objective is done or the scene must clearly end | Ending is a state transition, not an immediate destroy; logic results, behavior cleanup, and native resource release still follow |

## The real behavior registration path

`SandBoxMissions.OpenTownCenterMission` in source uses `MissionState.OpenNew`, passing the `MissionBehavior` array as the `InitializeMissionBehaviorsDelegate` return value. A custom Mission can follow the same path:

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

If you are already in a scene, the runtime entry used in source is:

```csharp
Mission mission = Mission.Current;
if (mission != null && mission.CurrentState == Mission.State.Continuing)
{
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

`MissionGameStarter` is not a Mission registration type in the `TaleWorlds.MountAndBlade` source; do not copy the campaign's `CampaignGameStarter.AddBehavior` example onto the Mission page. Runtime-added behaviors also do not replay already-missed full startup phases, so behaviors relying on `OnBehaviorInitialize` should go through the `OpenNew` factory.

## Dependencies

`Mission` itself holds no persistent state; it organizes scene objects, behaviors, and end adjudication in the current frame. The core collaborators:

- [`Agent`](../Agent/) is a single unit in the scene, driven by the Mission's create and remove flow.
- [`Team`](../Team/) is the faction container; it owns the `Formation` set, OrderController, and Team AI.
- [`Formation`](../Formation/) is the formation state and command boundary inside a Team.
- [`MissionBehavior`](../MissionBehavior/) receives the Mission's Agent, Team, tick, and teardown callbacks.
- [`MissionLogic`](../../mission-ext/MissionLogic/) is the behavior subclass that participates in Mission end adjudication.
- [`MissionObject`](../../mission-ext/MissionObject/) is scene objects like doors, siege engines, triggers; should not be fetched via `GetMissionBehavior<T>`.

## Risks and teardown

1. **Null-entry risk:** reading `Scene`, `Teams`, or `MainAgent` when `Mission.Current == null` crashes; during end / load phases also check `CurrentState`.
2. **Stale-reference risk:** `EndMissionInternal` notifies behaviors, removes Agents, cleans up Team and MissionObject, and finally releases the native Mission; continuing to access old Agent, Team, Formation, or Scene after cleanup may crash or read an invalid native handle.
3. **Death-callback risk:** `OnAgentRemoved` fires after the Agent has already been deactivated from the active Team set. Read the identity / faction info you need immediately; do not keep the removed Agent as long-lived state.
4. **End race:** `EndMission` only advances the state into the ending flow. Do not re-add behaviors in `OnEndMissionInternal`, create objects depending on the old Scene, or write scene objects into the Campaign save.
5. **Collection-modification risk:** tick and Agent notifications are traversing `MissionBehaviors`. Directly adding / removing multiple behaviors in a callback may change the same-frame call set; behaviors that can be registered in the creation factory should not be deferred to runtime.

## Cross-version notes

- Both 1.3.15 and 1.4.5 use the core path `Mission.Current`, `MissionState.OpenNew`, `AddMissionBehavior`, and `InitializeStartingBehaviors`.
- The 1.4.5 `Mission` source explicitly shows that on ending it cleans up Agents, Team, MissionObject, and nulls the current Mission; cross-version code should treat references as "single-scene, short-lived."
- Business code should rely on the public `Mission` / `MissionBehavior` API, not on private fields or native pointers from decompiled files.

## Navigation

- [↑ Mission API module](../)
- [↔ MissionBehavior](../MissionBehavior/)
- [↔ Agent](../Agent/) · [Team](../Team/) · [Formation](../Formation/)
- [↓ MissionLogic](../../mission-ext/MissionLogic/)
- [Architecture: crash & save boundaries](../../../architecture/crash-boundaries/)
