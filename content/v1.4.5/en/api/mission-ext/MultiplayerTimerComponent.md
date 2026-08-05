---
title: "MultiplayerTimerComponent"
description: "A MissionTimer-backed multiplayer countdown behavior for server-owned phases and synchronized client reads in warmup, rounds, lobbies, and matches."
---

# MultiplayerTimerComponent

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MultiplayerTimerComponent : MissionNetwork`  
**Base:** [`MissionNetwork`](../MissionNetwork)  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerTimerComponent.cs`

## One-line responsibility

It wraps [`MissionTimer`](../MissionTimer) as a Mission behavior that lets the server start a countdown, lets clients rebuild it from an absolute server timestamp, and lets round or lobby logic read the remaining time.

## Mental model

This is a shared Mission behavior, not an Agent component or Campaign state. Multiplayer Mission creation adds one instance to the Mission, and other behaviors retrieve that same instance through `Mission.GetMissionBehavior<MultiplayerTimerComponent>()`. The server calls `StartTimerAsServer(duration)`, which creates a local `MissionTimer` from the current `MissionTime.Now`. A client receives an absolute Mission timestamp from a state message, calls `StartTimerAsClient(startTime, duration)`, and then uses `GetRemainingTime(true)` to apply the `MissionTimeTracker` synchronization difference.

The component stores only the current timer and `IsTimerRunning`. It does not broadcast state, advance the Mission, end the Mission, or reset itself when `CheckIfTimerPassed()` returns true. The owning phase controller, such as [`MultiplayerWarmupComponent`](../MultiplayerWarmupComponent), [`MultiplayerRoundController`](../MultiplayerRoundController), or [`MissionLobbyComponent`](../MissionLobbyComponent), performs the transition.

## When to use and when not to use

**Use it when:**

- A multiplayer Mission needs a warmup, round preparation, round limit, lobby, or post-match countdown.
- The server owns the timer origin while clients need a countdown aligned to the server.
- Several Mission behaviors must read one phase timer instead of creating independent timers that drift apart.

**Do not use it when:**

- Looking it up with `Agent.GetComponent<MultiplayerTimerComponent>()`; it is a Mission behavior and must be retrieved with `Mission.GetMissionBehavior<T>()`.
- Passing a local relative delay as `startTime` to `StartTimerAsClient`; the value must be an absolute Mission-second timestamp from the server.
- Calling `StartTimerAsServer` or `StartTimerAsClient` every frame; either call replaces the timer and restarts the countdown.
- Persisting the component in Campaign or save data, or retaining it after Mission teardown.
- Treating `CheckIfTimerPassed()` as an automatic Action; the authoritative phase owner must perform the transition.

## Dependencies

- **Host:** [`Mission`](../../mission/Mission) owns the component; [`MissionNetwork`](../MissionNetwork) supplies network-handler registration, connection lifecycle, and removal cleanup.
- **Timer core:** [`MissionTimer`](../MissionTimer) stores the start and duration; [`MissionTime`](../MissionTime) and [`MissionTimeTracker`](../MissionTimeTracker) provide the Mission clock and synchronization difference.
- **Server consumers:** `MultiplayerWarmupComponent`, `MultiplayerRoundController`, and `MissionLobbyComponent` call `StartTimerAsServer`, `GetRemainingTime(false)`, or `CheckIfTimerPassed`.
- **Client consumers:** `MultiplayerWarmupComponent`, `MultiplayerRoundComponent`, and `MissionLobbyComponent` pass a message's `StateStartTimeInSeconds` to `StartTimerAsClient`, then read synchronized remaining time.
- **Transport boundary:** [`MissionNetworkComponent`](../MissionNetworkComponent) handles the broader Mission message set. `SynchronizeMissionTimeTracker` synchronizes clock difference and does not replace the phase-start timestamp used by this component.

## Members and timing

| Member | Purpose, side effect, and timing |
|---|---|
| `IsTimerRunning` | Indicates whether a server or client start method has created the timer. Check it before reading the timer's start snapshot. |
| `StartTimerAsServer(float duration)` | Creates a `MissionTimer` at local `MissionTime.Now` and marks it running. Call it once when the server enters a phase; it does not send a network message itself. |
| `StartTimerAsClient(float startTime, float duration)` | Creates a synchronized client timer from an absolute Mission-second timestamp and marks it running. The timestamp should come from a server state message. |
| `GetRemainingTime(bool isSynched)` | Returns `0` before the timer starts; otherwise returns non-negative remaining seconds. When `true`, it uses the client/replay synchronization path and caps the result at the timer duration. |
| `CheckIfTimerPassed()` | Calls the inner `MissionTimer.Check()` while running. It returns `false` before start, does not reset the timer, and raises no event. |
| `GetCurrentTimerStartTime()` | Returns the inner timer's start snapshot for state messages such as the lobby state change. Before a start call, the inner reference is null and this method can throw. |

## Real acquisition and server example

This pattern follows the source behavior used by `MultiplayerWarmupComponent`, the multiplayer round controller, and the Mission lobby:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class RoundTimerReader : MissionLogic
{
    private MultiplayerTimerComponent _timerComponent;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();
        _timerComponent = Mission.GetMissionBehavior<MultiplayerTimerComponent>();
    }

    public override void OnPreDisplayMissionTick(float dt)
    {
        if (GameNetwork.IsServer && _timerComponent.IsTimerRunning &&
            _timerComponent.CheckIfTimerPassed())
        {
            // Perform the phase transition owned by this server behavior.
        }
    }
}
```

The server calls `StartTimerAsServer` when the phase begins. The corresponding client path reads `StateStartTimeInSeconds` from a `WarmupStateChange` or `MissionStateChange` and calls `StartTimerAsClient(stateStartTimeInSeconds, duration)`. Client display code should use `GetRemainingTime(isSynched: true)`.

## Risks and crash boundaries

1. The component has no default `_missionTimer`. Calling `GetCurrentTimerStartTime()` before either start method reaches a null reference; verify that the timer has started before encoding its start time into a message.
2. Both start methods replace the inner timer. Calling them from a per-frame tick or repeated state callback continually restarts the countdown.
3. Passing a local relative number instead of an absolute Mission-second timestamp makes the client start at the wrong point. The message timestamp must also use the same `MissionTimeTracker` semantics as the timer.
4. `GetRemainingTime(false)` reads the local clock on a client. Omitting `true` from a network countdown display causes drift; server phase decisions should not depend on client display values.
5. `CheckIfTimerPassed()` only checks a boolean condition. It does not broadcast, raise an event, call `EndMission`, or mutate Campaign state. Actions, Mission termination, and rewards must run on the authoritative side at the correct phase.
6. After the Mission removes the behavior, another behavior retaining and reading it carries short-lived state into the next Mission. Stop those references at the relevant removal/lifecycle boundary.

## Version note

This page follows v1.4.5 `MultiplayerTimerComponent.cs` and its warmup, round, and lobby call sites. The `MissionTimer` synchronization flag and the absolute-time meaning of `StateStartTimeInSeconds` are source contracts; recheck message fields and timer synchronization when porting to another version.

## Navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Same section: [`MissionNetwork`](../MissionNetwork) · [`MissionTimer`](../MissionTimer) · [`MissionTime`](../MissionTime) · [`MissionTimeTracker`](../MissionTimeTracker)
- Host: [`Mission`](../../mission/Mission) · [`MissionLogic`](../MissionLogic)
- Server consumers: [`MultiplayerWarmupComponent`](../MultiplayerWarmupComponent) · [`MultiplayerRoundController`](../MultiplayerRoundController) · [`MissionLobbyComponent`](../MissionLobbyComponent)
- Client consumers: [`MultiplayerRoundComponent`](../MultiplayerRoundComponent) · [`MissionNetworkComponent`](../MissionNetworkComponent)
- Transport: [`SynchronizeMissionTimeTracker`](../../campaign-ext/SynchronizeMissionTimeTracker)
- 中文/English: [MultiplayerTimerComponent](../../../../zh/api/mission-ext/MultiplayerTimerComponent)
