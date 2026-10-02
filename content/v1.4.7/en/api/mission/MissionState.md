---
title: "MissionState"
description: "The mission state machine: opens and closes a mission, keeps MissionState.Current and CurrentMission, and drives the combat tick, the end condition and replay recording. OpenNew is the only official way to start a mission."
---
# MissionState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionState : GameState`
**Base:** `TaleWorlds.Core.GameState`
**Source:** `TaleWorlds.MountAndBlade/MissionState.cs` (declaration at line 13)

## Overview

`MissionState` is the "mission" node in the [Game](../../core-extra/Game) state hierarchy. It derives from `GameState`, the base class of the game state machine, and it owns the whole lifetime of one mission: opening the scene, creating the [Mission](../Mission), ticking it every frame, deciding when it is over, cleaning up, and handing control back to whatever state was underneath.

It is also the only official way to start a mission. `static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)` creates the mission and returns it; the protected `HandleOpenNew` is its implementation. Reading the current one goes through `static MissionState Current` and the instance property `CurrentMission`.

Two static switches are worth knowing. `RecordMission` controls whether the mission is recorded for replay, and `IsRecordingActive()` reports the current state. Turning recording off while debugging a mission noticeably reduces overhead.

`FirstMissionTickAfterLoading` marks the single frame after entering a mission from a save. `MissionReplayStartTime` and `MissionEndTime` record replay timings while recording is on, and `BeginDelayedDisconnectFromMission()` starts the deferred teardown used to play out result animations.

## Mental Model

Think of `MissionState` as the director of one combat: it does not implement combat logic, it decides when to start, when to stop, and what to tear down.

**`OpenNew` is the entry point, and its flags are not cosmetic.** `addDefaultMissionBehaviors = true` installs the engine's default behaviours; without them you get a mission that runs but is missing its baseline logic. `needsMemoryCleanup = true` asks for the post-mission cleanup pass. `handler` is an `InitializeMissionBehaviorsDelegate` — note its signature is `IEnumerable<MissionBehavior> InitializeMissionBehaviorsDelegate(Mission mission)`, so it *returns* behaviours rather than registering them itself. Returning an empty collection and passing `addDefaultMissionBehaviors: true` is a normal way to say "defaults only".

**`Current` and `CurrentMission` become available at different moments.** `MissionState.Current` exists once the state machine has switched into the mission state. `CurrentMission` is only set once `OpenNew` has finished creating the mission object. Reading `CurrentMission` in `OnInitialize` or `OnActivate` will normally give you null — check both, in that order.

**Ending is not synchronous.** `BeginDelayedDisconnectFromMission()` starts a transition during which the scene still exists and `Mission.Current` may still be non-null, but nothing can be interacted with. Result animations and fade-outs happen here. Writing to the world in that window is at best ineffective.

**Entering from a save is a different entry.** `FirstMissionTickAfterLoading` is true for exactly the first tick after a load-in. Nothing in the "create a fresh mission" path runs, so anything your logic expects from a newly spawned world will not have happened. That flag is the switch to branch on.

**`RecordMission` is process-wide.** It is a static switch, so two mods that disagree about it interfere with each other.

**`HandleOpenNew` is the whole open path.** Overriding it replaces scene loading, mission creation and default-behaviour initialisation in one move. Unless you are deliberately replacing the entire chain, leave it alone.

## When to Use / When Not To Use

- **Use** `OpenNew` to start a mission. It is the only supported route.
- **Use** `MissionState.Current?.CurrentMission` to ask "am I in a mission, and which one".
- **Use** `BeginDelayedDisconnectFromMission` when the ending needs a visible beat.
- **Use** `FirstMissionTickAfterLoading` to distinguish a load-in from a fresh mission.
- **Use** `RecordMission = false` while debugging combat to cut overhead.
- **Do not** read `CurrentMission` in `OnInitialize` or `OnActivate`; it is not created yet.
- **Do not** use `MissionState` to persist anything; it is not saved.
- **Do not** write campaign state directly from mission-state code; go through campaign events or actions so the map and the battle stay consistent.
- **Do not** override `HandleOpenNew` unless you are replacing the whole open chain.

## Members

| Member | What it is for |
| --- | --- |
| `IMissionSystemHandler Handler { get; set; }` | The mission system handler — how a mission talks to the campaign and to multiplayer. **Writable**: replacing it takes over that communication. |
| `static MissionState Current { get; private set; }` | The active mission state, or null when not in a mission. |
| `Mission CurrentMission { get; private set; }` | The mission object. Still null until `OpenNew` has finished. |
| `string MissionName { get; private set; }` | The mission's name. Loading and diagnostics. |
| `bool FirstMissionTickAfterLoading { get; private set; }` | True only on the first tick after entering a mission from a save. |
| `bool Paused { get; set; }` | Whether the mission is paused. Writable. |
| `void BeginDelayedDisconnectFromMission()` | Starts the deferred teardown. The scene is still present but not interactive; result animations play here. |
| `static bool RecordMission` | Whether missions are recorded for replay. **Static and process-wide.** |
| `public float MissionReplayStartTime` | Replay start timestamp, meaningful while recording. |
| `public float MissionEndTime` | Replay end timestamp, meaningful while recording. |
| `static bool IsRecordingActive()` | Whether replay recording is currently active. |
| `static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)` | **The only official entry point.** Creates the mission and returns it. `addDefaultMissionBehaviors: false` yields a mission missing its baseline logic. |
| `protected Mission HandleOpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors, bool needsMemoryCleanup)` | The implementation behind `OpenNew`. **Overriding it takes over scene loading, mission creation and default-behaviour setup.** |
| `protected override void OnInitialize()` | State initialisation. `CurrentMission` is still null here. |
| `protected override void OnFinalize()` | State teardown. The place to release long-lived references. |
| `protected override void OnActivate()` / `OnDeactivate()` | State transitions. `CurrentMission` is not created yet at activation. |
| `protected override void OnTick(float realDt)` | The main tick: drives combat logic and the end condition. |
| `protected override void OnIdleTick(float dt)` | Idle tick, including an unfocused window. **Not for game logic.** |

## Examples

### Example 1: Open a mission correctly

The handler returns behaviours; it does not register them itself.

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static class MyMissionLauncher
{
    // The delegate signature is IEnumerable<MissionBehavior>(Mission)
    private static IEnumerable<MissionBehavior> BuildBehaviors(Mission mission)
    {
        List<MissionBehavior> behaviors = new List<MissionBehavior>();

        if (mission != null)
        {
            mission.SetInitialAgentCountForSide(BattleSideEnum.Attacker, 30);
            mission.SetInitialAgentCountForSide(BattleSideEnum.Defender, 30);

            behaviors.Add(new MyMissionBehavior());
        }

        return behaviors;
    }

    public static Mission Open(string sceneName)
    {
        MissionInitializerRecord record = new MissionInitializerRecord(sceneName);

        return MissionState.OpenNew(
            missionName: sceneName,
            rec: record,
            handler: BuildBehaviors,
            addDefaultMissionBehaviors: true,
            needsMemoryCleanup: true);
    }
}
```

### Example 2: Ask whether a mission is running, and whether it was loaded

Two checks, because the two properties are not populated at the same time.

```csharp
using TaleWorlds.MountAndBlade;

public static bool TryGetActiveMission(out Mission mission, out bool cameFromSave)
{
    mission = null;
    cameFromSave = false;

    MissionState state = MissionState.Current;
    if (state == null)
    {
        // Not in a mission state at all
        return false;
    }

    mission = state.CurrentMission;
    if (mission == null)
    {
        // State is active but the mission object has not been created yet
        return false;
    }

    cameFromSave = state.FirstMissionTickAfterLoading;
    return true;
}
```

### Example 3: Turn recording off while debugging

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyDebugSubModule : MBSubModuleBase
{
    protected override void OnGameInitializationFinished(Game game)
    {
        base.OnGameInitializationFinished(game);

        // Static and process-wide: other mods see this too
        MissionState.RecordMission = false;
    }

    public static bool RecordingIsOn()
    {
        return MissionState.IsRecordingActive();
    }
}
```

## Risks and Boundaries

- **`CurrentMission` has a null window.** It is null through `OnInitialize` and `OnActivate`. Only after `OpenNew` returns is it guaranteed.
- **The delayed-disconnect window is not interactive.** Between `BeginDelayedDisconnectFromMission()` and the teardown, the scene exists and `Mission.Current` may still resolve, but writes to the world do nothing or throw.
- **Ending is shared state.** `MissionIsEnding` on the mission and this class's teardown describe the same transition; writing during it is a bug on either side.
- **`FirstMissionTickAfterLoading` means the fresh-mission path did not run.** Anything that happens on normal mission creation is absent after a load-in.
- **`RecordMission` is a static, process-wide switch.** Two mods setting it differently will fight.
- **`HandleOpenNew` is expensive to override.** It is the entire open chain; replacing it means you own scene loading and default-behaviour initialisation too.
- **`OnIdleTick` is not the game tick.** It keeps running when the window is unfocused. Game logic there costs the player resources while they are away.
- **Nothing here is saved.** `MissionState` does not persist; cross-mission state belongs in the campaign layer.
- **Single-threaded, with native scene loading.** `OpenNew` triggers scene loading and native allocation. Call it on the main thread, at a point the state machine allows.

## Dependencies

- **Upstream / providers**
  - [Game](../../core-extra/Game)'s `GameStateManager` switches this state in and out.
  - [Module](../../core/Module)'s `GlobalGameStateManager` provides the same mechanism at the module layer.
- **Peers / downstream**
  - [Mission](../Mission) is created and driven by `OpenNew`, and destroyed with it.
  - [MissionBehavior](../MissionBehavior) is the extension point hung off the mission and forwarded by this tick.
  - [Agent](../Agent) is the operable unit inside the mission.
  - [MBSubModuleBase](../../core/MBSubModuleBase)'s `OnBeforeMissionBehaviorInitialize` / `OnMissionBehaviorInitialize` fire while this class opens the mission.
  - [Campaign](../../campaign/Campaign) reaches missions through `CampaignMissionManager`.

## See Also

- ↑ Parent: [mission index](../)
- ↔ Related: [Mission](../Mission) · [MissionBehavior](../MissionBehavior) · [Agent](../Agent) · [Game](../../core-extra/Game) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Campaign](../../campaign/Campaign) · [Chinese twin](../../../../zh/api/mission/MissionState)