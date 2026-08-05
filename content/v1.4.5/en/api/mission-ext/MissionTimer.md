---
title: "MissionTimer"
description: "A MissionTime-backed countdown timer with reset support and client/replay synchronization correction."
---
# MissionTimer

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionTimer`  
**Base:** none  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTimer.cs`

## One-line responsibility

`MissionTimer` records a start point and duration on the active Mission clock for scene logic that needs expiry, remaining seconds, or periodic resets; it is not Campaign time and not a background real-time thread.

## Mental model

`new MissionTimer(duration)` immediately reads `MissionTime.Now`, so it must be created while an active Mission exists and the code is inside its lifecycle. Each `GetRemainingTimeInSeconds` calculation uses `MissionTime` and clamps negative values to `0`; `Check()` only observes expiry, while `Check(reset: true)` moves the start point to now after expiry.

Normal single-player/server timers use the local Mission clock. A client or replay path must pass `synched: true` to apply `MissionTimeTracker.GetLastSyncDifference()`. `CreateSynchedTimerClient` is for a network-provided absolute start time, not a general replacement constructor.

## Dependencies

- **Clock upstream:** [`Mission`](../../mission/Mission) owns [`MissionTimeTracker`](../MissionTimeTracker), and [`MissionTime.Now`](../MissionTime) reads the tracker's current ticks.
- **Creation/owner:** MissionBehaviors, MissionLogic, or dedicated Mission components own the timer during Mission lifetime; the game's `SneakIntoTheVillaMissionController` and `MultiplayerTimerComponent` follow this pattern.
- **Network path:** `MissionNetworkComponent` synchronizes tracker time; clients use `CreateSynchedTimerClient` and then read synchronized remaining time.
- **Related result:** when a timer expires, the owning behavior decides whether to call [`Mission.EndMission`](../../mission/Mission); the timer is not an automatic end Action.

## When to use and when not to

**Use it when:**

- Battle logic needs a Mission-tick-driven countdown for a stealth window, boundary grace period, round, or multiplayer component.
- A periodic action should restart after every expiry through `Check(reset: true)`.
- A server creates the timer and clients display the same countdown from a server start timestamp.

**Do not use it when:**

- Measuring Campaign days, save time, or long-lived real-world time; use CampaignTime or a Campaign event contract.
- Calling `new MissionTimer(...)` unconditionally in a behavior constructor, module-loading phase, or after Mission teardown; those phases may not have `Mission.Current`.
- Changing duration with `Set`; `Set` moves the start point, while `SetDuration` changes duration.

## Members, timing, and side effects

| Member | Purpose, timing, and side effect |
|---|---|
| `MissionTimer(float duration)` | Starts at current `MissionTime.Now`; requires an active Mission, and a negative duration expires immediately. |
| `GetStartTime()` | Returns the start snapshot for reporting or UI; it does not advance time. |
| `GetTimerDuration()` | Returns the current duration; it does not reset the start point. |
| `GetRemainingTimeInSeconds(bool synched = false)` | Returns non-negative remaining seconds; the sync flag applies tracker skew only on client/replay paths. |
| `Check(bool reset = false)` | Tests expiry; `reset: true` resets the start point only when already expired. |
| `Reset()` | Resets the start point to current Mission time while keeping the duration. |
| `Set(float timeInSeconds)` | Sets the start point to “current time + timeInSeconds”; it is a start offset, not “set remaining seconds.” |
| `SetDuration(float duration)` | Replaces duration while keeping the existing start point, which may make the timer expire or become active immediately. |
| `CreateSynchedTimerClient(float startTimeInSeconds, float duration)` | Builds a client/replay timer from an absolute Mission-second timestamp; do not pass a local relative duration as the start time. |

## Real MissionBehavior example

Create the timer in `OnBehaviorInitialize` or another lifecycle callback after Mission setup, rather than in a field initializer or constructor that depends on `Mission.Current`:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class WindowBehavior : MissionBehavior
{
    private MissionTimer _windowTimer;

    public override void OnBehaviorInitialize()
    {
        Mission mission = Mission.Current;
        if (mission == null)
            return;

        _windowTimer = new MissionTimer(5f);
    }

    public override void OnMissionTick(float dt)
    {
        if (_windowTimer.Check(reset: true))
        {
            // A five-second periodic action owned by this behavior.
        }
    }
}
```

The game's multiplayer component uses the matching network pattern: the server calls `new MissionTimer(duration)`, the client receives `startTimeInSeconds` and calls `CreateSynchedTimerClient`, then reads `GetRemainingTimeInSeconds(synched: true)` for a shared countdown.

## Risks and crash boundaries

- The constructor, `Set`, and synchronized remaining-time path indirectly depend on `Mission.Current`; calling them outside Mission can throw a null-reference exception.
- Creating the timer during Mission construction can occur before `Mission.Current` is assigned; defer creation to `OnBehaviorInitialize`, `OnCreated`, or a confirmed running callback.
- `Check(reset: true)` restarts on every expiry check. For a one-shot action, use `Check()` and disable or clear the field yourself.
- A positive `Set` moves the start into the future, so remaining time can exceed duration; treating it as “set remaining” introduces a delayed-cycle bug.
- Pass `synched: true` only on the client synchronized read path; otherwise a network countdown uses local time and can drift.
- Expiry does not call `EndMission`, raise an event, or mutate Campaign state. The behavior must perform the follow-up at a valid Mission phase.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Same section: [MissionTime](../MissionTime) · [MissionTimeTracker](../MissionTimeTracker) · [BasicMissionTimer](../BasicMissionTimer)
- Host: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionLogic](../MissionLogic)
- Network: [SynchronizeMissionTimeTracker](../../campaign-ext/SynchronizeMissionTimeTracker) · [MissionResult](../../core-extra/MissionResult)
- Contract: [Doc Contract](../../../architecture/doc-contract)
- 中文/English: [MissionTimer](../../../../zh/api/mission-ext/MissionTimer)
