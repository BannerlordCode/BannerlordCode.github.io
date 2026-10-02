---
title: "MissionState"
description: "The GameState that owns a mission's whole lifecycle: creation, behaviour partition, loading, per-frame ticking, fast-forward, and teardown."
---
# MissionState

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionState : GameState`
**Base:** `GameState`
**Source:** `TaleWorlds.MountAndBlade/MissionState.cs`

## Overview

`MissionState` is the [GameState](../../core-extra/GameState/) that owns a running battle from start to finish. Everything about a mission's lifecycle funnels through it: `static MissionState.OpenNew(...)` creates the state, builds the [Mission](../../mission/Mission/), calls your behavior initializer, partitions the returned behaviours into `MissionLogic` / `MissionBehavior` / `MissionNetwork` arrays and installs them; `OnTick` then drives mission creation, the loading sequence, `TickMission` (including fast-forward), the end-time check and the state pop. `OnFinalize` tears everything down.

It is the object the engine's global state stack owns, which is why `MissionState.Current` is a static set in `OnInitialize` and cleared in `OnFinalize`, and why `CurrentMission` is exposed with a private setter. Two behaviours matter for mods: the `IMissionSystemHandler Handler` slot lets a system (multiplayer, the editor, the ladder) intercept loading and behaviour addition, and the two public timing fields `MissionReplayStartTime` / `MissionEndTime` let a caller fast-forward a replay to a point or end the mission after N seconds of mission time.

## Mental Model

Treat it as **"the game-state machine around a single battle: open it, tick it, close it"**:

- **Typical call order in a mod.** From an [MBSubModuleBase](../../core/MBSubModuleBase/) hook or a campaign flow, call `MissionState.OpenNew(missionName, record, mission => new MyBehavior())`. The engine pushes the state; the state runs; when the mission ends, `OnTick` sees `CurrentMission.CurrentState == Mission.State.Over` and pops itself. You never subclass it and never push it yourself.
- **The behaviour partition is the interesting part.** `AddBehaviorsToMission` splits the enumerable three ways: `MissionLogic[]` = `OfType<MissionLogic>` excluding `MissionNetwork`; `MissionBehavior[]` = everything non-null that is neither a `MissionNetwork` nor a `MissionLogic`; `MissionNetwork[]` = `OfType<MissionNetwork>`. The three arrays are handed to `Mission.InitializeStartingBehaviors` and are ticked differently afterwards.
- **Order inside `HandleOpenNew` matters.** Behaviour initializer delegate → filter nulls → prepend/append the default set (`MissionNetworkComponent`, `RecordMissionLogic`, `BasicMissionHandler`, `CasualtyHandler`, `AgentCommonAILogic`) when requested → `OnAfterMissionCreated()` on each → install → then the handler's `OnAddBehaviors` list → install again. So `OnAfterMissionCreated` runs **before** the handler contributes anything.
- **Trap: `_missionTickCount > 2` gates the real tick.** `TickMissionAux` calls `CurrentMission.Tick(dt)` always, but only calls `OnTick(dt, realDt, updateCamera, asyncAITick)` once the counter exceeds 2. Code that assumes `OnMissionTick` fires on the very first frames is wrong for the first three.
- **Trap: `Paused` and `MBCommon.IsPaused` collapse dt to zero.** Either one makes `num = 0f`, and then the mission tick runs with a zero delta. Pausing is not a freeze of your behaviour's *own* timers.
- **Trap: `Mission.Current` and `MissionState.Current` are different things.** `MissionState.Current` is the game state; `Mission.Current` is the battle itself, assigned inside `CreateMission`. Code that null-checks one is not checking the other.
- **Trap: `OnFinalize` dereferences `CurrentMission` unguarded.** It calls `this.CurrentMission.OnMissionStateFinalize(...)` before setting `CurrentMission = null`. A state finalized before a mission was created throws.

### When to Use

**Use `MissionState` when:**
- You need to start a battle from mod code (a custom encounter, a duel, a practice fight): `static MissionState.OpenNew(...)`.
- You need to influence loading or behaviour addition through a system handler: `Handler`.
- You want a mission to end after a fixed amount of mission time, or to skip a replay forward: `MissionEndTime`, `MissionReplayStartTime`.
- You want to record a mission: `static RecordMission` plus the `IsRecordingActive` conditions.

**Do NOT use `MissionState` when:**
- You want to react to mission events. That is a [MissionBehavior](../../mission/MissionBehavior/) — `OnMissionTick`, `OnAgentHit`, `OnEndMissionInternal`, `OnMissionStateActivated`.
- You want to change spawn counts, formations or AI decisions. Those are [MissionLogic](../MissionLogic/) and mission model hooks.
- You want to end a mission immediately by force. `MissionEndTime` is checked during `OnTick` and only ends it when `CurrentMission.CurrentTime` passes it; the deterministic route is `Mission.Current.EndMission()` through the appropriate flow.
- You want campaign-side persistence. That is [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) and `SyncData` — a mission is not saved.
- You want to push or pop game states yourself. `GameStateManager` owns that; `OpenNew` already does it.

## Dependencies

- [GameState](../../core-extra/GameState/) — the base class providing `OnInitialize` / `OnActivate` / `OnDeactivate` / `OnTick` / `OnIdleTick` / `OnFinalize`, driven by the game's global state stack.
- [Mission](../../mission/Mission/) — the battle object itself: `CurrentMission`, `InitializeStartingBehaviors`, `AfterStart`, `EndMission`, `CurrentTime`, `CurrentState`, `FixedDeltaTimeMode`, `Scene`.
- [MissionBehavior](../../mission/MissionBehavior/) — the abstract base of the behaviour set, and the source of the `OnAfterMissionCreated` / `OnMissionScreenPreLoad` / `OnMissionStateFinalize` callbacks the state calls.
- [MissionLogic](../MissionLogic/) — the first partition array; logics are ticked on a different path from plain behaviours.
- [MissionNetwork](../MissionNetwork/) — the third partition array; networked components.
- [IMissionBehavior](../IMissionBehavior/) — the marker every behaviour implements, and the constraint behind `GetMissionBehavior<T>`.
- [MissionNetworkComponent](../MissionNetworkComponent/) — one of the defaults added by `AddDefaultMissionBehaviorsTo` when a session or replay is active.
- [MissionBehaviorType](../MissionBehaviorType/) — the classification the behaviour partition effectively performs.
- [MissionMultiplayerSiege](../MissionMultiplayerSiege/) — a concrete mission built through this same `OpenNew` path, useful as a lifecycle reference.
- [Agent](../../mission/Agent/) — the entity the mission behaviours and AI logic act on.
- [MBSubModuleBase](../../core/MBSubModuleBase/) — where mod code typically hooks in to start a mission.
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — the campaign-side analogue, for contrast; a mission does not persist.

## Key members

#### `public static Mission OpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors = true, bool needsMemoryCleanup = true)`

The public entry point: create the state, build the mission, push it.
- **Algorithm:** debug-print the mission name and scenes; when not a client/replay/server set `MBCommon.CurrentGameType` to `SingleRecord` or `Single` based on `IsRecordingActive()`; call `Game.Current.OnMissionIsStarting(missionName, rec)`; `Game.Current.GameStateManager.CreateState<MissionState>()`; `missionState.HandleOpenNew(...)`; `PushState(missionState, 0)`; return the mission.
- **Return-value semantics:** the live `Mission` object, already created but **not** yet loaded. Loading happens across subsequent `OnTick` calls.
- **`handler`:** the behaviour initializer delegate. It is invoked with the new mission and must return the behaviour sequence; `null` entries in its result are filtered out.
- **`addDefaultMissionBehaviors`:** when `true`, `MissionNetworkComponent` / `RecordMissionLogic` / `BasicMissionHandler` / `CasualtyHandler` / `AgentCommonAILogic` are prepended to the list. Passing `false` means you own the whole list — and you almost certainly do not.
- **`needsMemoryCleanup`:** forwarded into the `Mission` constructor and later into `ClearUnreferencedResources`.
- **Trap:** the `PushState` uses transition time `0`. Any code that expects to run "before the mission starts" must do it before calling `OpenNew`, not after.

#### `protected Mission HandleOpenNew(string missionName, MissionInitializerRecord rec, InitializeMissionBehaviorsDelegate handler, bool addDefaultMissionBehaviors, bool needsMemoryCleanup)`

The actual construction sequence, exposed as `protected` for subclasses.
- **Algorithm:** set `MissionName`; `CreateMission(rec, needsMemoryCleanup)`; run `handler(CurrentMission)`; filter nulls; if requested prepend the defaults via `AddDefaultMissionBehaviorsTo`; call `OnAfterMissionCreated()` on every behaviour; `AddBehaviorsToMission(...)`; then, if `Handler != null`, run `Handler.OnAddBehaviors(emptyArray, CurrentMission, missionName, addDefaultMissionBehaviors)` and install that result too; on a dedicated server set `GameNetwork.SetServerFrameRate(Module.CurrentModule.StartupInfo.ServerTickRate)`; return `CurrentMission`.
- **Trap:** `OnAfterMissionCreated` runs **before** the handler contributes behaviours, so a behaviour introduced by the handler never receives that callback.
- **Trap:** the handler's list is installed as a *second* batch, so ordering across the two batches is not alphabetical and not stable across versions.

#### `private void AddBehaviorsToMission(IEnumerable<MissionBehavior> behaviors)`

The three-way partition, and the single most useful thing to understand here.
- **Algorithm:** `MissionLogic[]` = `OfType<MissionLogic>` filtered to exclude `MissionNetwork`; `MissionBehavior[]` = every non-null behaviour that is neither a `MissionNetwork` nor a `MissionLogic`; `MissionNetwork[]` = `OfType<MissionNetwork>`; then `CurrentMission.InitializeStartingBehaviors(array, array2, array3)`.
- **Return value:** none. **Side effect:** the three lists on the mission are replaced.
- **Trap:** a class deriving from `MissionNetwork` **and** `MissionLogic` lands only in the `MissionNetwork[]` array, because the logic filter explicitly excludes network instances.
- **Trap:** `null` behaviours are dropped only from the plain-behaviour array; a `null` cannot be `OfType<>` anything so it is dropped from all three, but a *null inside a filtered cast* would still be a problem.

#### `protected static bool IsRecordingActive()`

Whether this process is recording the mission.
- **Algorithm:** on a server, `MultiplayerOptions.OptionType.EnableMissionRecording.GetBoolValue(MultiplayerOptions.MultiplayerOptionsAccessMode.CurrentMapOptions)`; otherwise `MissionState.RecordMission && Game.Current.GameType.IsCoreOnlyGameMode`.
- **Return-value semantics:** a `bool`. Note the asymmetry: the server path does **not** consult `RecordMission` at all.
- **Trap:** the client/single-player path requires `Game.Current.GameType.IsCoreOnlyGameMode`, so setting `RecordMission = true` in a custom game mode does nothing.

#### `private void LoadMission()`

The first half of the loading sequence, driven from `TickLoading`.
- **Algorithm:** call `OnMissionScreenPreLoad()` on every `CurrentMission.MissionBehaviors`; `Utilities.ClearOldResourcesAndObjects()`; set `_missionInitializing = true`; `CurrentMission.Initialize()`.
- **Trap:** `OnMissionScreenPreLoad` is the *earliest* behaviour callback in the mission — earlier than `OnAfterMissionCreated`? No: `OnAfterMissionCreated` fires during `HandleOpenNew`, before any tick. `OnMissionScreenPreLoad` therefore fires strictly after it, and only on the first `TickLoading` pass.

#### `private void FinishMissionLoading()`

The second half of the loading sequence.
- **Algorithm:** `_missionInitializing = false`; `CurrentMission.Scene.SetOwnerThread()`; step the loading percentage to 0.4; run two `CurrentMission.Tick(0.001f)` priming ticks; 0.42; `Handler?.OnMissionAfterStarting(CurrentMission)`; 0.48; `CurrentMission.AfterStart()`; 0.56; `Handler?.OnMissionLoadingFinished(CurrentMission)`; 0.62; `CurrentMission.Scene.ResumeLoadingRenderings()`.
- **Trap:** `AfterStart()` runs *after* `OnMissionAfterStarting` and *before* `OnMissionLoadingFinished`. Behaviour code that assumes "mission started" means `OnMissionAfterStarting` is wrong by two steps.
- **Trap:** the loading percentages are hard-coded fractions of the global loading window.

#### `private void TickMission(float realDt)`

The per-frame mission tick, including the pause, fast-forward and network-load-confirmation logic.
- **Algorithm:** on a **client** whose `FirstMissionTickAfterLoading` is set and whose mission is `Continuing`, print the load index and send a `FinishedLoading(currentBattleIndex)` network message plus `SyncRelevantGameOptionsToServer()`; `Handler?.BeforeMissionTick(CurrentMission, realDt)`; set `PauseAITick` when a session is active and the clear-scene timer has elapsed; compute `num` as `realDt`, zeroed if `Paused || MBCommon.IsPaused`, or `FixedDeltaTime` if `FixedDeltaTimeMode`, then multiplied by `Mission.Scene.TimeSpeed` outside a network session; clear agent actions when the clear-scene timer is below −0.3; then either the fast-forward sub-stepping loop or a single `TickMissionAux`; `Handler?.AfterMissionTick(...)`; clear `FirstMissionTickAfterLoading`; increment `_missionTickCount`.
- **Trap:** `IsSessionActive` guards the `TimeSpeed` multiplication, so the effective delta differs between a local mission and a networked one.
- **Trap:** `Paused` only zeroes the delta fed to the mission; behaviours with their own wall-clock timers keep running.

#### `private void TickMissionAux(float dt, float realDt, bool updateCamera, bool asyncAITick)`

The innermost two calls.
- **Algorithm:** `CurrentMission.Tick(dt)`; then, **only if** `_missionTickCount > 2`, `CurrentMission.OnTick(dt, realDt, updateCamera, asyncAITick)`.
- **Trap:** the `_missionTickCount > 2` gate means the first three frames skip `OnTick` entirely. Any behaviour that latches state on "the first tick" sees a gap.

#### `protected override void OnTick(float realDt)` / `OnIdleTick(float dt)`

The state machine driver.
- `OnTick` phases: a delayed disconnect calls `BannerlordNetwork.EndMultiplayerLobbyMission()`; returns if `CurrentMission` is null; in `NewlyCreated`/`Initializing` clears unreferenced resources (only on `NewlyCreated`) and runs `TickLoading`; in `Continuing` or when `MissionEnded`, applies `MissionReplayStartTime` via `SkipForwardMissionReplay` once, checks `MissionEndTime` against `CurrentMission.CurrentTime` and calls `EndMission()` when exceeded, otherwise runs `TickMission` when the handler reports `RenderIsReady()` or is absent; in the editor with a pending end it calls `MBEditor.LeaveEditMissionMode()` and ticks once more; finally, in `Over`, calls `GameStateManager.CleanStates(0)` when `MBGameManager.Current.IsEnding`, otherwise `PopState(0)`.
- `OnIdleTick` forwards to `CurrentMission.IdleTick(dt)` only while the mission is `Continuing`.
- **Trap:** `TickMission` is skipped entirely while `Handler != null && !Handler.RenderIsReady()` — during a blocked render, the mission does not advance even though `OnTick` keeps firing.
- **Trap:** `MissionEndTime` is compared against `Mission.CurrentTime` (mission time), not real time, so pausing stretches it out.

#### `protected override void OnInitialize()` / `OnActivate()` / `OnDeactivate()` / `OnFinalize()`

The four state-stack hooks.
- `OnInitialize` sets `MissionState.Current = this`, `FirstMissionTickAfterLoading = true`, and enables the global loading window.
- `OnActivate` / `OnDeactivate` forward straight to `CurrentMission.OnMissionStateActivate()` / `OnMissionStateDeactivate()`.
- `OnFinalize` calls `CurrentMission.OnMissionStateFinalize(CurrentMission.NeedsMemoryCleanup)`, then nulls `CurrentMission` and `MissionState.Current`.
- **Trap:** all four dereference `CurrentMission` — `OnActivate` before any tick, `OnFinalize` unconditionally. If the state is activated or finalized without a mission, they throw.
- **Trap:** `MissionState.Current` is static, so re-entering a second mission replaces it. Code holding the old `MissionState.Current` reads the new battle.

#### `public void BeginDelayedDisconnectFromMission()`

Sets the private `_isDelayedDisconnecting` flag; the next `OnTick` calls `BannerlordNetwork.EndMultiplayerLobbyMission()`.
- **Use:** only for multiplayer lobby shutdown. In a single-player mission the flag is set but the effect is a no-op path you never need.

#### `public IMissionSystemHandler Handler { get; set; }`

The system interception slot — multiplayer, the editor, and the ladder all use it.
- **Effect:** `BeforeMissionTick` / `AfterMissionTick` wrap every mission tick; `OnAddBehaviors` contributes an extra behaviour batch; `OnMissionAfterStarting` and `OnMissionLoadingFinished` bracket `AfterStart()`; `RenderIsReady()` gates whether `TickMission` runs at all.
- **Trap:** only one handler is held, last assignment wins. Setting it from a mod can displace a real system handler and break mission ticking or multiplayer loading.

#### `public static MissionState Current { get; private set; }` / `public Mission CurrentMission { get; private set; }` / `public string MissionName { get; private set; }` / `public bool FirstMissionTickAfterLoading { get; private set; }` / `public bool Paused { get; set; }`

The public surface of state.
- `Current` is the active game state (set in `OnInitialize`, cleared in `OnFinalize`); `CurrentMission` is the battle (set in `CreateMission`, cleared in `OnFinalize`); `MissionName` is the string passed to `OpenNew`; `FirstMissionTickAfterLoading` is true until the first successful `TickMission`; `Paused` is the only publicly writable one.
- **Trap:** all have private setters. You cannot substitute a mission or rename the state from outside.
- **Trap:** `MissionState.Current` and `Mission.Current` are different objects with different lifetimes; code that null-checks one is not checking the other.

#### `public static bool RecordMission` / `public float MissionReplayStartTime` / `public float MissionEndTime`

Three public fields that let callers steer recording and timing.
- `RecordMission` gates the single-player recording path in `IsRecordingActive`; `MissionReplayStartTime` triggers exactly one `SkipForwardMissionReplay(time, 0.033f)` in `OnTick` and is then zeroed; `MissionEndTime` ends the mission once `CurrentMission.CurrentTime` exceeds it.
- **Trap:** `MissionReplayStartTime` is consumed on the first tick where the mission reaches `Continuing`/`MissionEnded`. Setting it earlier is fine; setting it after that point may never be read.
- **Trap:** `RecordMission` is static and never reset — it leaks across missions in the same process.

## Examples

### Example 1 — starting a custom battle from mod code

```csharp
public void StartCustomSkirmish(MissionInitializerRecord record)
{
    // The initializer delegate supplies the behaviours; nulls are filtered out.
    Mission mission = MissionState.OpenNew(
        missionName: "my_mod_skirmish",
        rec: record,
        handler: m => new MissionBehavior[]
        {
            new SpawnMissionBehavior(),
            new MySkirmishRulesBehavior(),
        },
        addDefaultMissionBehaviors: true,   // keep BasicMissionHandler/CasualtyHandler
        needsMemoryCleanup: true);

    // The mission exists but is not loaded yet - loading happens over ticks.
    Debug.Print($"opened {mission} via {MissionState.Current.MissionName}");
}
```

### Example 2 — reacting to mission lifecycle with a behaviour instead

```csharp
public class MySkirmishRulesBehavior : MissionBehavior
{
    public override void OnMissionBehaviorAdded()
    {
        Debug.Print($"behaviour attached to {MissionState.Current.MissionName}");
    }

    public override void OnMissionStateActivated()
    {
        Debug.Print("mission state activated");
    }

    public override void OnMissionTick(float dt)
    {
        // Note: OnTick on the mission is skipped for the first 3 frames,
        // but behaviour ticks start immediately.
    }

    public override void OnEndMissionInternal()
    {
        Debug.Print("mission ending");
    }

    public override void OnMissionStateFinalized()
    {
        Debug.Print("mission state finalized - MissionState.Current is about to be null");
    }
}
```

### Example 3 — ending a mission after a fixed amount of mission time

```csharp
public void EndAfterTenSeconds()
{
    var state = MissionState.Current;
    if (state == null || state.CurrentMission == null)
    {
        return;
    }
    // Compared against Mission.CurrentTime (mission time), not wall clock.
    state.MissionEndTime = state.CurrentMission.CurrentTime + 10f;
}
```

### Example 4 — pausing without losing behaviour timers

```csharp
public void TogglePause()
{
    var state = MissionState.Current;
    if (state == null)
    {
        return;
    }
    // Paused only zeroes the delta fed into the mission. Anything with its own
    // wall-clock timer keeps running, so guard those yourself.
    state.Paused = !state.Paused;
}
```

### Example 5 — reading another system's component from the mission

```csharp
public bool HasStateDecider(Mission mission)
{
    // IMissionBehavior is the marker constraint; misses return null.
    return mission.GetMissionBehavior<IAgentStateDecider>() != null;
}
```

## Risks and crash boundaries

- **Crash boundary — `OnFinalize` and `OnActivate` dereference `CurrentMission` unguarded.** Both call into it before any null check. A state that is activated or finalized without a mission throws inside the state stack. This is also why you must not push a `MissionState` yourself.
- **Crash boundary — `Handler.RenderIsReady()` gates the tick.** If a handler is installed but never reports ready, the mission never advances and never ends: `OnTick` keeps firing, `TickMission` never does. If your mod sets `Handler`, you own that responsibility completely.
- **Only one `Handler` slot.** Installing your own displaces whatever system handler was there. In multiplayer this breaks load confirmation and mission ticking; in the editor it breaks edit-mode teardown.
- **The `_missionTickCount > 2` gate hides the first frames.** `Mission.Tick(dt)` runs but `Mission.OnTick(...)` does not for the first three ticks. Behaviour code and anything reading mission state at "tick 0" sees a world that has not been ticked yet.
- **Fast-forward sub-steps.** When `CurrentMission.IsFastForward` is set, `TickMission` splits the frame into ≤0.1 s chunks and then a final remainder ≥0.0033 s, calling `TickMissionAux` repeatedly. Per-frame caches that assume "one call per frame" will be invalidated, and any behaviour counting ticks sees a burst.
- **Delta semantics differ by session.** `Paused` or `MBCommon.IsPaused` → `0f`; `FixedDeltaTimeMode` → the fixed step; outside a network session → multiplied by `Mission.Scene.TimeSpeed`; inside a session → not multiplied. The same behaviour therefore sees different effective dt in local versus multiplayer missions.
- **Cross-domain dependency.** The type lives in `TaleWorlds.MountAndBlade` but reaches into `TaleWorlds.Core` (`GameState`, `Game`, `GameNetwork`, `MBCommon`, `MBGameManager`), `TaleWorlds.Library` (collections, `Debug`) and `NetworkMessages.FromClient`. It also depends on the native scene via `Mission.Scene` calls (`SetOwnerThread`, `ResumeLoadingRenderings`). A mod touching this surface must reference all of those assemblies.
- **Load-order dependency.** `OpenNew` is only safe once `Game.Current` and the `GameStateManager` exist. Calling it from a submodule constructor or before the game type is set gives you a state stack that never ticks.
- **Not save-serialized, and it must not be.** Nothing on this class persists. Anything you need across a mission must live in a [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) with `SyncData([IDataStore](../../campaign-ext/IDataStore/))`, or be re-derived from `MissionName` when the mission starts.
- **Static leakage.** `MissionState.Current` is static, and `RecordMission` is a public static field that is never reset. Two sequential missions in one process replace `Current` and carry `RecordMission` into the second mission.
- **ID stability.** `MissionName` is the only string you can key on, and it is whatever the caller passed — a mod that renames its mission silently breaks its own `MissionName`-keyed behaviour. Prefer a constant per mission kind and treat it as a save-stable contract only within your own mod.

## Cross-Version Notes

- **v1.3.x (this page):** the member set above matches 1.3.15, including `Paused`, `MissionReplayStartTime`, `MissionEndTime`, `RecordMission`, and the `AddDefaultMissionBehaviorsTo` list of `MissionNetworkComponent` / `RecordMissionLogic` / `BasicMissionHandler` / `CasualtyHandler` / `AgentCommonAILogic`.
- **v1.4.x:** the lifecycle shape is stable. `MissionGameStarter`-equivalent registration for missions changed in some builds, but `OpenNew` with an `InitializeMissionBehaviorsDelegate` remains the entry point described here. The default-behaviour list can gain entries between versions — do not assert its exact contents.
- **v1.5.x:** expect more handler implementations (new mission systems) and possibly additional mission phases alongside `NewlyCreated` / `Initializing` / `Continuing` / `Over`. Write behaviour that branches on `Mission.CurrentState` rather than assuming four values, and keep using `MissionState.OpenNew` rather than constructing the state yourself.

## See Also

- ↑ Parent bucket: [Mission-Ext API index](./)
- ↑ GameState base: [GameState](../../core-extra/GameState/) — the `OnInitialize`/`OnTick`/`OnFinalize` contract
- ↑ Mission: [Mission](../../mission/Mission/) — the battle object this state owns
- ↑ MissionBehavior: [MissionBehavior](../../mission/MissionBehavior/) — the behaviours it partitions and drives
- ↔ Sibling: [MissionLogic](../MissionLogic/) — the first partition array
- ↔ Sibling: [MissionNetwork](../MissionNetwork/) — the third partition array
- ↔ Sibling: [IMissionBehavior](../IMissionBehavior/) — the marker every behaviour implements
- ↔ Sibling: [MissionNetworkComponent](../MissionNetworkComponent/) — a default behaviour added for sessions and replays
- ↔ Sibling: [MissionDifficultyModel](../MissionDifficultyModel/) — the mission model registration path, distinct from behaviours
- ↔ Sibling: [MissionMultiplayerSiege](../MissionMultiplayerSiege/) — a concrete mission built through this path
- ↑ Agent: [Agent](../../mission/Agent/)
- ↑ Campaign-side analogue: [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/)