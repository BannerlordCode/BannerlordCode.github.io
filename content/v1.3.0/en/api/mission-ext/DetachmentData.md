---
title: "DetachmentData"
description: "Auto-generated class reference for DetachmentData."
---
# DetachmentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DetachmentData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/DetachmentData.cs`

## Overview

`DetachmentData` is the per-detachment bookkeeping record used by the AI when it pulls agents out of formations. `DetachmentManager` owns the instances: it creates one per detachment with `new DetachmentData()` (`DetachmentManager.cs:66`) and stores it in a dictionary keyed by `IDetachment` (`DetachmentManager.cs:27`), exposing them as `MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>>` (`DetachmentManager.cs:15`).

It is a plain mutable class with **public fields**, not properties — `joinedFormations`, `agentScores`, `MovingAgentCount`, `DefendingAgentCount` and `firstTime` (`DetachmentData.cs:47`). There is no encapsulation, no invariant enforcement, and no setter logic: the owner writes the fields directly. Its constructor stamps `firstTime` with `MBCommon.GetTotalMissionTime()` (`DetachmentData.cs:30`), so every instance is born with the mission time at which its detachment was created.

Two computed members sit on top. `AgentCount` (`DetachmentData.cs:12`) sums `CountOfDetachableNonPlayerUnits` across every joined formation and adds `MovingAgentCount` and `DefendingAgentCount`. `IsPrecalculated()` (`DetachmentData.cs:21`) answers whether the recorded scores already cover the current headcount. `RemoveScoreOfAgent(Agent)` (`DetachmentData.cs:34`) scans `agentScores` backwards and drops the first entry whose agent matches.

## Mental Model

`AgentCount` is live, not cached. Every read walks `joinedFormations` and reads `CountOfDetachableNonPlayerUnits` on each formation (`DetachmentData.cs:16`), so the number changes as agents detach, die, or become undetachable — without anything writing to this object. That is what makes `IsPrecalculated()` a moving target: it compares `agentScores.Count` against `AgentCount` (`DetachmentData.cs:24`), so if agents join after the scores were computed, the recorded count falls short and `IsPrecalculated()` flips back to `false` with no notification to anyone. Any code that caches the answer is caching something that can invalidate itself.

Read `IsPrecalculated()` as "at least one score exists and there are at least as many scores as there are agents". The `count > 0` half matters: an empty `agentScores` with an `AgentCount` of zero is reported as *not* precalculated (`DetachmentData.cs:24`), so a detachment with no agents never claims to have work cached.

`RemoveScoreOfAgent` removes exactly one entry. The loop runs from the end of the list and returns on the first match (`DetachmentData.cs:40`), so if the same agent somehow appears twice, only the last occurrence is dropped and the earlier one survives. It is also an O(n) linear scan, and it does nothing at all when the agent is absent — there is no return value telling you whether anything was removed.

`firstTime` is written once, in the constructor, and never updated. It records when the *record* was created, not when the detachment last changed, so it is a creation timestamp and nothing more — anything reading it as "when did this detachment last move" is reading a stale value from the moment the manager made the object.

## How to use

**Getting one.** `DetachmentManager` is a plain class, not a mission behaviour — one per team, constructed with the team and reached as `Team.DetachmentManager` (`DetachmentManager.cs:24`). Look your detachment up in its `Detachments` list. If you need a record for a custom detachment concept, constructing one directly is legal (the constructor is public and takes no arguments) but it will be invisible to the manager's dictionary and to everything the manager ticks.

**Typical use** — reading the ledger for an existing detachment:

```csharp
using TaleWorlds.MountAndBlade;

public static class MyDetachmentReporter
{
    public static void Report(Team team, IDetachment detachment)
    {
        DetachmentManager manager = team.DetachmentManager;
        if (manager == null)
        {
            return;
        }

        foreach (ValueTuple<IDetachment, DetachmentData> pair in manager.Detachments)
        {
            if (pair.Item1 != detachment)
            {
                continue;
            }

            DetachmentData data = pair.Item2;

            // AgentCount is computed live from the joined formations.
            int agentCount = data.AgentCount;

            // Recompute this every time: it flips when formations change.
            bool ready = data.IsPrecalculated();

            if (!ready && agentCount > 0)
            {
                MyAiThink.Recalculate(data);
            }

            MyLog.Write($"{pair.Item1}: {agentCount} agents, ready={ready}, created at {data.firstTime}");
        }
    }
}
```

`DetachmentManager.Detachments` is `MBReadOnlyList<ValueTuple<IDetachment, DetachmentData>>` (`DetachmentManager.cs:15`), which is why the pair is unpacked with `Item1`/`Item2`, and the manager itself is per team — its constructor takes the `Team` and subscribes to `team.OnFormationsChanged` (`DetachmentManager.cs:24`), which is the event that makes `AgentCount` move.

**Most common mistake:** treating `IsPrecalculated()` as a one-way latch.

```csharp
if (!data.IsPrecalculated())
{
    CalculateScores(data);
}
data.AgentCount;   // assumed stable from here on
```

The scores you just computed can stop being sufficient the moment a formation's detachable-unit count changes — `AgentCount` is derived from live formation state (`DetachmentData.cs:16`) while `IsPrecalculated()` compares against your stored list. The result is that the AI acts on a stale score list and pulls the wrong number of agents, with no exception and no re-check. Either call `IsPrecalculated()` immediately before you use the scores, or recompute them from `AgentCount` every time you read.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentCount` | `public int AgentCount { get; }` |

## Key Methods

### IsPrecalculated
`public bool IsPrecalculated()`

**Purpose:** Determines whether the this instance is in the precalculated state or condition.

```csharp
// Obtain an instance of DetachmentData from the subsystem API first
DetachmentData detachmentData = ...;
var result = detachmentData.IsPrecalculated();
```

### RemoveScoreOfAgent
`public void RemoveScoreOfAgent(Agent agent)`

**Purpose:** Removes score of agent from the current collection or state.

```csharp
// Obtain an instance of DetachmentData from the subsystem API first
DetachmentData detachmentData = ...;
detachmentData.RemoveScoreOfAgent(agent);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
DetachmentData entry = ...;
```

## See Also

- [Area Index](../)
- [DetachmentManager — creates and owns these records](../DetachmentManager)
- [IDetachment — the key each record is stored under](../IDetachment)
- [中文页面](../../../../zh/api/mission-ext/DetachmentData)