---
title: "IQueryData"
description: "Auto-generated class reference for IQueryData."
---
# IQueryData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IQueryData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IQueryData.cs`

## Overview

`IQueryData` is a three-member cache protocol, not a data container — despite the name, it exposes no properties and no way to read a value. It declares `void Expire()` (`IQueryData.cs:9`), `void Evaluate(float currentTime)` (`IQueryData.cs:12`) and `void SetSyncGroup(IQueryData[] syncGroup)` (`IQueryData.cs:15`).

The shipped implementation is the generic `QueryData<T>`, declared `class QueryData<T> : IQueryData` (`QueryData.cs:7`). Its constructor takes a `Func<T>` and a lifetime: `QueryData(Func<T> valueFunc, float lifetime)` (`QueryData.cs:10`), caching `default(T)` and zero expiry initially (`QueryData.cs:12`). So the value is produced by a delegate on demand, and this interface is the machinery that decides *when* to call it.

`SetSyncGroup` takes an array of `IQueryData` — the group is a set of queries that must be evaluated together so they see a consistent world, which is why it is an array of the interface rather than of the generic type.

## Mental Model

`Evaluate(float currentTime)` is the only member that can produce a value, and it takes the current time explicitly. Nothing on the interface tells you what the time means — mission time, wall clock, or an accumulator — and the shipped constructor stores it as a plain `float` lifetime (`QueryData.cs:10`). The time base is therefore agreed out of band between whoever ticks the queries and whoever created them; mixing bases produces a cache that either never expires or expires immediately, with no error.

`Expire()` is the manual invalidation. It is the only way to force a re-evaluation other than waiting for the lifetime, so it is the member your mod calls when it knows the world changed.

The three members form a state machine you drive from outside. `SetSyncGroup` establishes grouping, `Evaluate` advances and possibly refreshes, `Expire` invalidates. The interface exposes no state, so a caller cannot ask whether a value is currently cached or stale — which is why a caller that needs the value must call `Evaluate` and trust that the implementation refreshed if it needed to.

A sync group is a plain array with no membership check here, and nothing on the interface prevents the same query appearing twice or a group containing a query that is not in it. Grouping is a convention the implementations share, not something the interface enforces.

## How to use

**Getting one.** Construct `QueryData<T>` with a producer delegate and a lifetime; it implements this interface, so anything holding an `IQueryData` accepts it.

**Typical use** — a cached, expiring query driven by your own ticker:

```csharp
using System;
using TaleWorlds.MountAndBlade;

public class MyAgentCache : MissionLogic
{
    private readonly QueryData<Agent> _nearestEnemy;
    private readonly IQueryData[] _syncGroup;

    private Agent _result;

    public MyAgentCache(Mission mission)
    {
        // Producer delegate + lifetime in seconds. The time base is agreed
        // between this constructor and the Evaluate calls below.
        _nearestEnemy = new QueryData<Agent>(() => FindNearestEnemy(mission), 0.25f);

        // Grouping so related queries evaluate against the same world state.
        _syncGroup = new IQueryData[] { _nearestEnemy };
        _nearestEnemy.SetSyncGroup(_syncGroup);
    }

    public override void OnMissionTick(float dt)
    {
        float now = MBCommon.GetTotalMissionTime();
        _nearestEnemy.Evaluate(now);

        // No value getter on the interface: hold the concrete type to read it.
        _result = _nearestEnemy.GetCachedValue();
    }

    public void Invalidate()
    {
        _nearestEnemy.Expire();
    }

    private static Agent FindNearestEnemy(Mission mission)
    {
        Agent best = null;
        float bestDistance = float.MaxValue;

        foreach (Agent agent in mission.Agents)
        {
            if (agent != null && agent.IsEnemyOf(Agent.Main))
            {
                float distance = agent.Position.Distance(Agent.Main.Position);
                if (distance < bestDistance)
                {
                    bestDistance = distance;
                    best = agent;
                }
            }
        }

        return best;
    }
}
```

`QueryData<T>`'s constructor signature `QueryData(Func<T> valueFunc, float lifetime)` (`QueryData.cs:10`) and `MBCommon.GetTotalMissionTime()` are the real members. Read the value from the concrete `QueryData<T>`, not from the interface — the interface has no getter.

**Most common mistake:** expecting to read the value through the interface.

```csharp
IQueryData q = new QueryData<Agent>(() => agent, 1f);
Agent a = q.GetValue();          // no such member exists
```

All three members are `void` (`IQueryData.cs:9`); the interface is a control protocol, not an accessor. The value lives on the concrete type as `GetCachedValue()` (`QueryData.cs:43`) — or `GetCachedValueUnlessTooOld()` (`QueryData.cs:49`) if you want the age check at the call site. Depend on `IQueryData` for the invalidation protocol and on `QueryData<T>` for the value, exactly as the example does.

## See Also

- [Area Index](../)
- [QueryData — the generic implementation, and where the value lives](../QueryData)
- [MBCommon — the mission-time clock an `Evaluate` time base comes from](../MBCommon)
- [中文页面](../../../../zh/api/mission-ext/IQueryData)