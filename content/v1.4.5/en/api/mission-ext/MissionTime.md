---
title: "MissionTime"
description: "A Mission-time value type backed by MissionTimeTracker ticks; it creates future points, compares timing, and converts ticks to seconds, minutes, and hours."
---

# MissionTime

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public struct MissionTime : IComparable<MissionTime>`  
**Base:** `IComparable<MissionTime>`  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTime.cs`

## Responsibility

It represents a Mission time point as an immutable long-tick snapshot and provides current time, future points, elapsed-time calculations, and unit conversions so behaviors can compare timing without maintaining their own floating-point clock.

## Mental model

`MissionTime` is a time-point value, not a timer that advances itself. `MissionTimeTracker` is advanced by `Mission` each frame; `MissionTime.Now` and `MissionTime.DeltaTime` read snapshots from that tracker. `SecondsFromNow` and `MillisecondsFromNow` add an offset to the current Mission time, while `Seconds`, `Minutes`, and `Hours` construct a value from zero.

`IsFuture`, `IsPast`, `IsNow`, and `ElapsedSeconds` read the active Mission tracker again, so they only have a valid runtime meaning while a Mission is active. `NumberOfTicks` and `ToSeconds` are value reads that can be passed or compared, but an arbitrary long tick value is not Campaign time or save-game time.

## When to use it

Use it in a Mission behavior to store a next-check point with `MissionTime.SecondsFromNow` and test `IsPast` from a Mission tick. Use it for ordering Mission time points, calculating `ElapsedSeconds`, or sharing the same tick clock with [`MissionTimer`](../MissionTimer).

Do not call `Now`, `DeltaTime`, `SecondsFromNow`, `IsPast`, or `ElapsedSeconds` without an active `Mission.Current`. Do not treat it as CampaignTime, wall-clock time, or a persistent cross-Mission clock. Do not increment `NumberOfTicks`; [`MissionTimeTracker`](../MissionTimeTracker) and `Mission` own that progression.

## Members

| Member | Purpose, side effect, and timing |
|---|---|
| `NumberOfTicks` | Read-only internal tick value; one second is `10,000,000` ticks. |
| `Now` / `DeltaTime` | Snapshots of current Mission time and the latest tracker delta; require an active Mission. |
| `Zero` | Zero-tick value; it does not mean that a Mission has started. |
| `IsFuture` / `IsPast` / `IsNow` | Compare the snapshot with current Mission time; access depends on `Mission.Current`. |
| `ElapsedHours` / `ElapsedSeconds` / `ElapsedMilliseconds` | Current Mission time minus this snapshot; not valid across Missions. |
| `ToHours` / `ToMinutes` / `ToSeconds` / `ToMilliseconds` | Convert this value's own ticks without reading current Mission time. |
| `MillisecondsFromNow(float)` / `SecondsFromNow(float)` | Create future points relative to the active Mission; require an active Mission. |
| `Milliseconds(float)` / `Seconds(float)` / `Minutes(float)` / `Hours(float)` | Construct unit values from zero for arithmetic with other `MissionTime` values. |
| `CompareTo`, comparison operators, `Equals` | Compare tick ordering/equality without advancing time. |
| `MissionTime(long)` | Construct from raw ticks; use only when the tick contract is known. |

## Dependencies

- **Clock owner:** [`Mission`](../../mission/Mission) creates and advances [`MissionTimeTracker`](../MissionTimeTracker).
- **Reads:** `Now` and `DeltaTime` read the tracker directly; `IsPast` and `ElapsedSeconds` read the active Mission indirectly.
- **Timer consumers:** [`MissionTimer`](../MissionTimer) stores a `MissionTime` start point; short elapsed windows can instead use [`BasicMissionTimer`](../BasicMissionTimer).
- **Lifecycle boundary:** [`MissionBehavior`](../../mission/MissionBehavior) initialization and tick callbacks are common acquisition points; Campaign save systems do not own this runtime value.

## Real example

This follows the source pattern of using `MissionTime.SecondsFromNow` and `IsPast` inside a Mission behavior:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class NextCheckBehavior : MissionBehavior
{
    private MissionTime _nextCheck;

    public override void OnBehaviorInitialize()
    {
        _nextCheck = MissionTime.SecondsFromNow(10f);
    }

    public override void OnMissionTick(float dt)
    {
        if (_nextCheck.IsPast)
        {
            _nextCheck = MissionTime.SecondsFromNow(10f);
        }
    }
}
```

When the code needs the latest Mission-frame delta rather than a future point, it can read `MissionTime.DeltaTime.ToSeconds` in the same Mission tick. Campaign time must not replace Mission ticks here.

## Version note

The public time units and factories retain the same core meaning in 1.3.15 and 1.4.5: `10,000,000` ticks per second, with `Now`, `SecondsFromNow`, unit constructors, and comparison operators. The 1.4.5 lifecycle boundaries on this page follow the current `Mission` and `MissionTimeTracker` call sites.

## Risks

1. Static `Now`, `DeltaTime`, and `SecondsFromNow`, plus `IsPast`/`ElapsedSeconds`, indirectly access `Mission.Current`; calling them on the map, during module loading, or after Mission cleanup can throw a null reference.
2. `DeltaTime` is the latest tracker delta, not real-world frame time. Reading it in the wrong lifecycle phase can return an old value.
3. `MissionTime` is not automatically saved or restored across scenes. Putting it in a Campaign singleton or save object leaks short-lived Mission timing into long-lived state.
4. Do not confuse `Seconds(10f)` with `SecondsFromNow(10f)`: the former is a zero-based duration value, while the latter is a future point relative to the active Mission.
5. The tick field is a long, but unit conversions return float/double. For long Missions or precise ordering, retain ticks or use the appropriate conversion rather than repeatedly round-tripping through floating-point seconds.

## Navigation

- Parent: [Mission-ext index](../)
- Siblings: [`BasicMissionTimer`](../BasicMissionTimer) · [`MissionTimer`](../MissionTimer) · [`MissionTimeTracker`](../MissionTimeTracker)
- Host: [`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior)
- Architecture: [developer roadmap](../../../architecture/developer-roadmap) · [crash boundaries](../../../architecture/crash-boundary)
- Contract: [documentation contract](../../../architecture/doc-contract)
- Chinese/English: [`MissionTime`](../../../../zh/api/mission-ext/MissionTime)
