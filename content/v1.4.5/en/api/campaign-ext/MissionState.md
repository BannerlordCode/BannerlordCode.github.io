---
title: "MissionState"
description: "MissionState is the GameState wrapper that creates, loads, ticks, activates, and finalizes the current Mission."
---
# MissionState

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionState : GameState`  
**Base:** [GameState](../../core-extra/GameState)  
**Source file:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionState.cs`

## One-sentence responsibility

It is the game-state lifecycle owner around a [Mission](../../mission/Mission), from `OpenNew` and loading through tick dispatch and finalization.

## Mental Model

`MissionState` is not the simulation object itself. `OpenNew` creates a `MissionState`, asks it to create a `Mission`, composes the supplied behaviors with default behaviors, and pushes the state into `GameStateManager`. `OnInitialize` publishes `MissionState.Current` and starts the loading window; `LoadMission` calls the mission's preload hooks and `Initialize`; `FinishMissionLoading` runs the start sequence; `OnTick` routes loading, fast-forward, pause, network, and normal mission ticks; `OnFinalize` finalizes the Mission and clears both static/current references.

`Handler` is an optional `IMissionSystemHandler` integration point. It can add behaviors and observe before/after/loading callbacks, but it does not replace the Mission behavior list supplied to `OpenNew`. `CurrentMission` is private-set and only meaningful while this state is active.

## When to use and when not to use

- Use `MissionState.OpenNew` when implementing a mission factory that owns a valid `MissionInitializerRecord` and behavior callback.
- Read `MissionState.Current` or `CurrentMission` from mission-state-aware code during an active state; use `Mission.Current` for the simulation object itself.
- Do not instantiate `MissionState` with `new` or set `CurrentMission` directly; the game-state manager owns creation and transitions.
- Do not use `Paused` as a campaign pause flag; it changes the simulation delta sent by `TickMission`.
- Do not omit required behaviors or use a stale initializer record merely because `OpenNew` returns a `Mission` immediately; loading and behavior initialization happen afterward.

## Dependencies

```text
MissionState.OpenNew
  -> GameStateManager.CreateState<MissionState>()
  -> HandleOpenNew / Mission constructor
  -> behavior composition and InitializeStartingBehaviors
  -> PushState
  -> loading -> active ticks -> OnFinalize
```

- Simulation owner: [Mission](../../mission/Mission) holds the scene, Agents, behaviors, and current state.
- Behavior contract: [MissionBehavior](../../mission/MissionBehavior) supplies callbacks inserted by the initializer delegate.
- Logic base: [MissionLogic](../../mission-ext/MissionLogic) is grouped into the mission's logic behavior list.
- Campaign bridge: [CampaignMission](../../campaign/CampaignMission) is one of the behaviors installed by campaign/SandBox factories.

## Lifecycle and public state

| Member or phase | Source-backed meaning | Safe boundary |
| --- | --- | --- |
| `Current` | Static active `MissionState`; set in `OnInitialize`, cleared in `OnFinalize`. | Only while this game state is active. |
| `CurrentMission` | The Mission created by `HandleOpenNew`. | After creation and before finalization. |
| `MissionName` | Name passed to `OpenNew`, used by mission metadata and handlers. | Set during `HandleOpenNew`. |
| `Handler` | Optional system integration for behavior injection and tick/loading notifications. | Configure before the relevant lifecycle callbacks. |
| `FirstMissionTickAfterLoading` | Starts true and becomes false after the first active tick. | Useful for client loading boundaries. |
| `Paused` | Makes the simulation delta zero in `TickMission`; it does not stop all state callbacks. | Toggle only for the active state. |
| `OpenNew` | Creates, composes, and pushes the state; returns the created Mission. | Requires a valid record and behavior delegate. |
| `BeginDelayedDisconnectFromMission` | Requests a multiplayer lobby disconnect on a later active tick. | Multiplayer teardown path only. |

## Real example

This uses the same creation boundary used by SandBox factories. The caller owns the real initializer record and supplies a concrete behavior list; the state owns loading and pushing.

```csharp
using TaleWorlds.MountAndBlade;

public sealed class MissionTelemetryLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        if (Mission.Current != null && MissionState.Current != null)
        {
            // MissionState and Mission are both valid during the active tick.
        }
    }
}

public static Mission OpenTelemetryMission(MissionInitializerRecord record)
{
    return MissionState.OpenNew(
        "TelemetryMission",
        record,
        mission => new MissionBehavior[]
        {
            new MissionTelemetryLogic()
        },
        addDefaultMissionBehaviors: true,
        needsMemoryCleanup: true);
}
```

The returned `Mission` is created before loading completes. Code that needs scene entities or initialized behavior state should run from the appropriate mission callback, not immediately after the return statement.

## Risks and boundaries

- `OnFinalize` calls `CurrentMission.OnMissionStateFinalize(...)`; finalization assumes the state created a Mission and must not be duplicated by mod code.
- `OpenNew` pushes a new game state and can replace the active UI/mission context. Do not retain old `Mission`, Agent, scene, or view references across it.
- Loading callbacks and active ticks are distinct. `Handler.RenderIsReady()` can gate active ticking, while loading still follows the `Mission` state machine.
- Fast-forward, replay, fixed delta, pause, and network client/server branches alter tick timing; do not assume `realDt` equals the simulation delta.
- `MissionEndTime` can call `CurrentMission.EndMission()` before the normal pop; result and cleanup observers must respect Mission lifecycle callbacks.

## Version note

This page follows v1.4.5 `MissionState.cs`, including the loading sequence, default behavior insertion, handler callbacks, and static cleanup. Recheck these ordering details when targeting another version.

## Navigation

- Parent: [Mission extension API](../)
- Siblings: [MissionAgentHandler](../MissionAgentHandler) · [MissionManager](../../mission-ext/MissionManager)
- Related: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [CampaignMission](../../campaign/CampaignMission)
