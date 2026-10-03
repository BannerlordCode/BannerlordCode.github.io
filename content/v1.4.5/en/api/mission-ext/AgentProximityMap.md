---
title: "AgentProximityMap"
description: "The public face of the engine proximity grid: a resumable all-agents-within-radius iterator that degrades to a linear scan above the grid's maximum radius."
---

# AgentProximityMap

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentProximityMap`
**Base:** `object`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentProximityMap.cs`

## One-line responsibility

It hands out a cursor over "every agent within N metres of a point", using the engine's spatial grid when the radius fits inside it and a plain loop over `Mission.Agents` when it does not — and it hides that difference completely from the caller.

## Mental model

The mental model is a **stateful enumerator, not a query**. `BeginSearch` gives you a `ProximityMapSearchStruct`; you then call `FindNext` in a loop, and the struct's `LastFoundAgent` tells you what the current hit is. Nothing about this API is a LINQ-shaped "give me all agents near X" — you are driving a cursor, and forgetting to call `FindNext` gives you the first hit forever.

The interesting part is what happens under the hood. `BeginSearch` asks `mission.ProximityMapMaxSearchRadius()` for the grid's ceiling. If your radius fits, it calls `mission.ProximityMapBeginSearch(searchPos, searchRadius)` and hands the engine's opaque `ProximityMapSearchStructInternal` back to you, then fills `LastFoundAgent` from `CurrentElementIndex` via `mission.FindAgentWithIndex`. If your radius **exceeds** that ceiling, the whole thing silently switches to `LoopAllAgents = true` and iterates `mission.Agents` with `DistanceSquared` comparisons instead.

That silent switch is the thing to internalise. The result set is the same either way, but the cost is not: below the ceiling you get grid-accelerated lookup, above it you get an O(n) scan of every agent in the mission. A mod that searches a 200-metre radius once per frame has not written a spatial query, it has written an O(agents) query that happens to be spelled like a spatial query. `CanSearchRadius(searchRadius)` exists precisely so you can ask in advance — call it before you commit, not after you notice the frame cost.

Two more mechanical details. `extendRangeByBiggestAgentCollisionPadding: true` adds `mission.GetBiggestAgentCollisionPadding() + 1f` to your radius — it inflates the *search* radius so that an agent whose body extends toward you is found even when its centre is outside. It does not change which agents are valid results, only how many candidates are scanned. And `ProximityMapSearchStruct` is a **struct** holding an `internal` engine struct plus two `internal` fields; you pass it by `ref` to `FindNext`, which mutates it in place. Copy it and the cursor resets. `ProximityMapSearchStructInternal` is `internal` — you cannot construct one, and you should not be able to.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `BeginSearch` | `public static ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)` | Opens the cursor and primes `LastFoundAgent` with the first hit (or `null` if there is none). The `extendRangeByBiggestAgentCollisionPadding` flag widens the radius by the mission's largest agent collision padding plus one metre, so bodies that overlap your point are found by their centre. The returned struct must be kept and passed back by `ref` — do not let it go out of scope. |
| `FindNext` | `public static void FindNext(Mission mission, ref ProximityMapSearchStruct searchStruct)` | Advances the cursor in place and rewrites `LastFoundAgent`. Under the grid path this forwards to `mission.ProximityMapFindNext(ref ...internal)` and re-resolves the agent; over the loop path it bumps `LastAgentLoopIndex` and re-scans. Loop **until `LastFoundAgent == null`**, not a fixed count — agents die mid-iteration and the grid path will not tell you how many hits there were. |
| `CanSearchRadius` | `public static bool CanSearchRadius(float searchRadius)` | Answers "will this radius stay on the grid path?" by comparing against `mission.ProximityMapMaxSearchRadius()`. Returns `false` for the fallback case. It reads `Mission.Current` — it does **not** take a `Mission` parameter, so it is unusable outside a live mission and is the one member here that cannot be tested against a mock. |
| `ProximityMapSearchStruct.LastFoundAgent` | `public Agent LastFoundAgent { get; internal set; }` | The current hit. `null` means the cursor is exhausted. The setter is `internal`, so from a mod this is read-only; the cursor advances only through `FindNext`. |
| `RefreshLastFoundAgent` | `internal void RefreshLastFoundAgent(Mission mission)` | Internal glue that re-resolves `LastFoundAgent` from `CurrentElementIndex` through `mission.FindAgentWithIndex`. Not callable from a mod. It exists because the engine struct stores an *index*, and indexes shift when agents are removed. |
| `LoopAllAgents` / `LastAgentLoopIndex` / `SearchStructInternal` | `internal bool` / `internal int` / `internal struct` | All `internal`. `LoopAllAgents` is the branch flag; `LastAgentLoopIndex` is the cursor for the fallback path; `SearchStructInternal` is the engine's own search state. You can see them in a debugger, you cannot read them from another assembly. |

## Real example

The correct shape: ask first, then loop until null.

```csharp
public class MyCrowdSensor : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Agent self = Mission.Current.MainAgent;
        if (self == null || !self.IsActive())
        {
            return;
        }

        Vec2 origin = self.Position.AsVec2;
        float radius = 12f;

        if (!AgentProximityMap.CanSearchRadius(radius))
        {
            Debug.Print("radius exceeds the grid, falling back to a full scan", 0);
            return;
        }

        AgentProximityMap.ProximityMapSearchStruct cursor =
            AgentProximityMap.BeginSearch(Mission.Current, origin, radius);

        int contacts = 0;
        while (cursor.LastFoundAgent != null)
        {
            Agent neighbour = cursor.LastFoundAgent;
            if (neighbour != null && neighbour != self && neighbour.IsActive())
            {
                contacts++;
            }

            AgentProximityMap.FindNext(Mission.Current, ref cursor);
        }

        Debug.Print("contacts within " + radius + " = " + contacts, 0);
    }
}
```

Finding everything in a wide radius anyway, and accepting the linear cost knowingly:

```csharp
public class MyWideAlert : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Agent listener = Mission.Current.MainAgent;
        if (listener == null)
        {
            return;
        }

        Vec2 origin = listener.Position.AsVec2;
        float radius = 120f;

        AgentProximityMap.ProximityMapSearchStruct cursor =
            AgentProximityMap.BeginSearch(
                Mission.Current,
                origin,
                radius,
                extendRangeByBiggestAgentCollisionPadding: true);

        int scanned = 0;
        while (cursor.LastFoundAgent != null)
        {
            scanned++;
            AgentProximityMap.FindNext(Mission.Current, ref cursor);
        }

        Debug.Print("wide scan returned " + scanned + " agents", 0);
    }
}
```

Reusing one cursor across frames is safe only while nothing is removed; if an agent dies mid-iteration the index-based grid path re-resolves and can skip an entry. Restart the cursor after any agent removal:

```csharp
public class MySafeSensor : MissionLogic
{
    public override void OnAgentRemoved(
        Agent affectedAgent,
        Agent affectorAgent,
        AgentState agentState,
        KillingBlow killingBlow)
    {
        this.CursorIsStale = true;
    }

    public bool CursorIsStale;

    public override void OnMissionTick(float dt)
    {
        if (this.CursorIsStale)
        {
            this.CursorIsStale = false;
            return;
        }

        AgentProximityMap.ProximityMapSearchStruct cursor =
            AgentProximityMap.BeginSearch(Mission.Current, Mission.Current.MainAgent.Position.AsVec2, 8f);
        AgentProximityMap.FindNext(Mission.Current, ref cursor);
    }
}
```

## Risks and boundaries

1. **The cursor is a struct passed by `ref`.** Letting `ProximityMapSearchStruct` go out of scope, or copying it into a field, resets iteration. `FindNext` mutates in place — that is the contract, not an optimisation detail.
2. **Silent O(n) fallback.** Above `ProximityMapMaxSearchRadius()` the grid is bypassed entirely and every agent is distance-tested. Same answers, very different cost. `CanSearchRadius` is the only advance warning.
3. **`CanSearchRadius` reads `Mission.Current` statically.** It has no `Mission` parameter, so it cannot be called outside a live mission and cannot be pointed at a specific mission. In a mission-editor or cutscene context `Mission.Current` may be null.
4. **The search struct's guts are `internal`.** `LoopAllAgents`, `LastAgentLoopIndex`, `SearchStructInternal`, and the `LastFoundAgent` setter are all invisible outside the assembly. You cannot inspect *why* iteration behaved as it did, only *what* it returned.
5. **Index-based resolution can go stale.** `LastFoundAgent` is derived from `mission.FindAgentWithIndex(CurrentElementIndex)`. Removing agents mid-iteration invalidates the underlying indices; restart the cursor after any removal rather than trusting the remainder of the result set.
6. **Null agents in the result set are possible.** `FindNext` can produce a `LastFoundAgent` that no longer resolves. Null-check every hit — this is not defensive style, it is the documented behaviour of an index-resolved cursor.
7. **The fallback path snapshots `SearchDistSq` at `BeginSearch`.** Changing the radius mid-iteration has no effect on the loop path; the distance test uses the value captured when the cursor was opened.
8. **No `Dispose`, no finaliser, no lifetime hazard.** The struct owns only managed fields; there is nothing to leak. That also means there is no way to abandon a search other than dropping the struct.

## Dependencies

- **Mission surface:** [`Mission`](../../mission/Mission) owns the grid. `ProximityMapBeginSearch`, `ProximityMapFindNext`, `ProximityMapMaxSearchRadius`, `GetBiggestAgentCollisionPadding`, `FindAgentWithIndex`, and `Agents` are all declared on it — and the first three are `internal`, which is exactly why this wrapper class exists.
- **Engine backing:** the engine-side grid state lives in `ProximityMapSearchStructInternal`, marked `[EngineStruct("Managed_proximity_map_search_struct", false, null)]`.
- **Results:** [`Agent`](../../mission/Agent) objects come back through `AgentReadOnlyList`, and `IsActive()` is the filter you should apply.
- **Callers:** [`Formation`](../../mission/Formation) and the agent AI components use this same cursor; it is shared infrastructure, not a per-mission private index.
- **Sibling helper:** [`AgentVisualsData`](./AgentVisualsData) has nothing to do with this type despite the similar name — that one is about rendering, not proximity.
- Bucket home: [mission-ext API section](../)