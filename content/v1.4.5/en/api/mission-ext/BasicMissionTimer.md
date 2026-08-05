---
title: "BasicMissionTimer"
description: "A lightweight elapsed-time timer backed by MBCommon's Mission total clock; useful for short Mission behavior delays and polling, without MissionTime network-sync semantics."
---

# BasicMissionTimer

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class BasicMissionTimer`  
**Base:** none  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BasicMissionTimer.cs`

## Responsibility

It records `MBCommon.GetTotalMissionTime()` at construction and reports elapsed seconds from that point, giving Mission behaviors a small timer for short delays, polling loops, and cooldown checks.

## Mental model

`BasicMissionTimer` is a small “start point plus elapsed time” object. The constructor and `Reset()` store the current total Mission time in private `_startTime`. `ElapsedTime` subtracts that start point from the current total time on every read. `Set(newElapsedTime)` moves the start point backward so the next read begins at the requested elapsed value.

It does not own or advance the Mission clock, store a duration, or correct network skew. The Mission runtime advances the total clock; this object only reads it. Use it for short-lived Mission behavior windows such as arena end delays, post-hit protection windows, or periodic checks. Use [`MissionTime`](../MissionTime) and [`MissionTimer`](../MissionTimer) when you need absolute Mission time, a future point, a remaining duration, or network synchronization.

## When to use it

Use it inside a `MissionBehavior` or `MissionLogic` after the behavior has entered the Mission lifecycle, when the only question is “how many seconds have elapsed since this reset?”. Read `ElapsedTime` from `OnMissionTick` and call `Reset()` when a periodic window fires.

Do not use it as Campaign time, save-game time, or a timer that survives Missions. Do not substitute it for `MissionTime.Now`, `SecondsFromNow`, `IsFuture`/`IsPast`, or synchronized client timing. Its implementation directly depends on `MBCommon.GetTotalMissionTime()` and has no standalone Campaign meaning.

## Members

| Member | Purpose, side effect, and timing |
|---|---|
| `BasicMissionTimer()` | Starts at the current `MBCommon.GetTotalMissionTime()`; create it after the Mission behavior exists. |
| `ElapsedTime` | Returns current total Mission time minus the start point; read-only and does not advance or reset anything. |
| `Reset()` | Moves the start point to the current total Mission time for the next period. |
| `Set(float newElapsedTime)` | Moves the start point so `ElapsedTime` is approximately the supplied value; it does not set a duration. |

## Dependencies

- **Clock source:** The constructor, `ElapsedTime`, `Reset`, and `Set` all read `MBCommon.GetTotalMissionTime()`.
- **Host:** [`Mission`](../../mission/Mission) owns the scene lifecycle; [`MissionBehavior`](../../mission/MissionBehavior) and [`MissionLogic`](../MissionLogic) commonly hold the timer.
- **Alternatives:** [`MissionTime`](../MissionTime) provides tick values and future points; [`MissionTimer`](../MissionTimer) provides duration, remaining seconds, and synchronized reads.
- **Consumers:** Arena, tournament, Agent, and Mission logic use `ElapsedTime` for short windows. The timer never calls `EndMission` or raises an event itself.

## Real example

Arena and tournament Mission logic in the source keep `BasicMissionTimer` fields and read `ElapsedTime` from Mission ticks. This is the same acquisition path in a minimal behavior:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class RepeatingWindowBehavior : MissionBehavior
{
    private BasicMissionTimer _windowTimer;

    public override void OnBehaviorInitialize()
    {
        _windowTimer = new BasicMissionTimer();
    }

    public override void OnMissionTick(float dt)
    {
        if (_windowTimer.ElapsedTime > 4f)
        {
            _windowTimer.Reset();
        }
    }
}
```

`Reset()` here is the behavior's period boundary. It does not alter the global Mission clock or reset another behavior's timer.

## Risks

1. The start point is a floating-point total-time snapshot, not a Campaign save field. Persisting it in a long-lived object or reusing it across Missions gives it stale time semantics.
2. `Set(4f)` makes `ElapsedTime` appear to have already advanced by about four seconds; it does not mean “wait four more seconds”. Use `MissionTime.SecondsFromNow(4f)` for a future point.
3. Reaching a threshold raises no callback. The owning behavior must perform the follow-up action during a valid Mission lifecycle callback.
4. Do not place the timer in a static collection after Mission end or behavior removal; that leaks short-lived scene state into the next Mission.
5. This timer does not apply `MissionTimeTracker.GetLastSyncDifference()`. Network outcomes or client countdowns must not rely on it alone.

## Navigation

- Parent: [Mission-ext index](../)
- Siblings: [`MissionTime`](../MissionTime) · [`MissionTimer`](../MissionTimer) · [`MissionTimeTracker`](../MissionTimeTracker)
- Host: [`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior) · [`MissionLogic`](../MissionLogic)
- Architecture: [developer roadmap](../../../architecture/developer-roadmap) · [crash boundaries](../../../architecture/crash-boundary)
- Contract: [documentation contract](../../../architecture/doc-contract)
- Chinese/English: [BasicMissionTimer](../../../../zh/api/mission-ext/BasicMissionTimer)
