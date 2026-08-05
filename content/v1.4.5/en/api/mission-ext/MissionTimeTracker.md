---
title: "MissionTimeTracker"
description: "Mission's tick clock and network-offset tracker, advanced by Mission and consumed by MissionTime and synchronized timers."
---
# MissionTimeTracker

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionTimeTracker`  
**Base:** none  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTimeTracker.cs`

## One-line responsibility

`MissionTimeTracker` is Mission's **monotonic tick clock**: it accumulates Mission seconds each frame and separately records server-versus-local clock difference for [`MissionTime`](../MissionTime), [`MissionTimer`](../MissionTimer), and network logic.

## Mental model

`Mission` constructs the tracker, and each Mission tick converts `dt` into `10,000,000` ticks per second before adding it to `NumberOfTicks`. `DeltaTimeInTicks` is only the last increment. A mod normally reads `Mission.Current.MissionTimeTracker`; it must not call `Tick` itself because that advances the entire Mission clock twice.

Network synchronization does not overwrite the local clock. The server sends an absolute Mission-second value, the client calls `UpdateSync(newValue)` to calculate `_lastSyncDifference`, and `GetLastSyncDifference()` exposes the difference in seconds. `MissionTimer.GetRemainingTimeInSeconds(synched: true)` consumes that difference; ordinary `MissionTime.Now` and unsynchronized timers still use local `NumberOfTicks`.

## Dependencies

- **Owner:** [`Mission`](../../mission/Mission) constructs the tracker and calls `Tick(dt)` in its tick flow.
- **Readers:** [`MissionTime`](../MissionTime) `Now` / `DeltaTime`, [`MissionTimer`](../MissionTimer), and MissionBehaviors.
- **Sync upstream:** `SynchronizeMissionTimeTracker` is received by `MissionNetworkComponent`, which calls `UpdateSync`.
- **Boundary:** This is temporary Mission state, not CampaignTime or a save field. It is discarded with the Mission and must not be retained across Missions.

## Members and timing

| Member | Purpose and side effect |
|---|---|
| `NumberOfTicks` | Absolute tick count of the current Mission clock; read-only and incremented by `Tick`. |
| `DeltaTimeInTicks` | Increment produced by the most recent `Tick(seconds)`; it is not total time or render `realDt`. |
| `MissionTimeTracker()` | Creates a tracker at zero; normally used by `Mission`, not used to replace its instance from a mod. |
| `MissionTimeTracker(MissionTime initialMapTime)` | Starts from `initialMapTime.NumberOfTicks`, for engine paths that need an existing time origin. |
| `Tick(float seconds)` | Stores the delta and advances total ticks; `Mission` calls it each frame, and a mod must not repeat it in behavior tick. |
| `UpdateSync(float newValue)` | Calculates offset from an authority's absolute seconds; it does not rewrite `NumberOfTicks`. |
| `GetLastSyncDifference()` | Returns the latest offset in seconds; it is zero before any synchronization. |

## Real read example

Read the tracker from a running Mission behavior without driving it directly:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class MissionClockReader : MissionBehavior
{
    public override void OnMissionTick(float dt)
    {
        Mission mission = Mission.Current;
        if (mission == null || mission.CurrentState != Mission.State.Continuing)
            return;

        MissionTimeTracker tracker = mission.MissionTimeTracker;
        long currentTicks = tracker.NumberOfTicks;
        float frameSeconds =
            tracker.DeltaTimeInTicks /
            (float)MissionTime.TimeTicksPerSecond;
        float networkOffset = tracker.GetLastSyncDifference();

        // currentTicks is local Mission time; frameSeconds is the last increment.
    }
}
```

In multiplayer, `MissionNetworkComponent` calls `UpdateSync` after receiving `SynchronizeMissionTimeTracker`; the client should let `MissionTimer` consume the offset through `synched: true` instead of changing `NumberOfTicks` locally.

## When to use and when not to

**Use it when:**

- Reading monotonic Mission ticks, calculating Mission seconds for the current frame, or diagnosing a network clock offset.
- Writing Mission-time-based timer, replay, or network behavior while allowing existing `MissionTime` / `MissionTimer` abstractions to consume the tracker.

**Do not use it when:**

- Calling `Tick` manually from `OnMissionTick`; Mission already advances it.
- Treating it as Campaign time or save progress; it belongs only to the current Mission.
- Using `UpdateSync` as a direct clock correction; it records an offset and leaves the choice of consumption to synchronized timers.
- Accessing it, or static `MissionTime.Now`, without an active `Mission.Current`; check the Mission lifecycle first.

## Version note

The public members and core semantics are the same in 1.3.15 and 1.4.5: both accumulate `10,000,000` ticks per second and use `_lastSyncDifference` for network timer correction. This page follows the 1.4.5 decompiled source and current `Mission` call sites; do not depend on decompiler token IDs or line numbers.

## Risks and crash boundaries

- Accessing `Mission.Current.MissionTimeTracker` before Mission creation or after teardown throws; `MissionTime.Now` reaches the same handle indirectly.
- Calling `Tick` twice advances `MissionTime.Now`, every timer, and replay time too quickly, causing early endings, network drift, or wrong result timing.
- `UpdateSync` does not jump the local tracker to server time. Treating `newValue` as a delta instead of absolute seconds creates a wrong offset.
- `DeltaTimeInTicks` is the most recent tracker delta. It can be stale when read outside the tick that updated it and must not be reused as an assumed current-frame delta.
- This is a short-lived runtime object. Do not put it in a Campaign singleton, save object, or static collection for the next Mission.
- Client-side correction belongs to synchronized timer display/reading paths; do not use it to submit battle results or Campaign mutations from a client.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Same section: [MissionTime](../MissionTime) · [MissionTimer](../MissionTimer) · [BasicMissionTimer](../BasicMissionTimer)
- Owner: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior)
- Sync: [SynchronizeMissionTimeTracker](../../campaign-ext/SynchronizeMissionTimeTracker)
- Related result: [MissionResult](../../core-extra/MissionResult)
- Contract: [Doc Contract](../../../architecture/doc-contract)
- 中文/English: [MissionTimeTracker](../../../../zh/api/mission-ext/MissionTimeTracker)
