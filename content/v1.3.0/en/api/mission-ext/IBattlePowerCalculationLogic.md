---
title: "IBattlePowerCalculationLogic"
description: "Auto-generated class reference for IBattlePowerCalculationLogic."
---
# IBattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IBattlePowerCalculationLogic : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IBattlePowerCalculationLogic.cs`

## Overview

`IBattlePowerCalculationLogic` is a one-method seam: `float GetTotalTeamPower(Team team)` (`IBattlePowerCalculationLogic.cs:9`). It extends `IMissionBehavior` (`IBattlePowerCalculationLogic.cs:6`), which is what makes it a mission behaviour you can look up rather than a service you have to construct.

Exactly one implementation ships in 1.3.0: `BattlePowerCalculationLogic`, declared as `MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior` (`BattlePowerCalculationLogic.cs:8`). Callers reach it through `TeamQuerySystem.BattlePowerLogic` (`TeamQuerySystem.cs:276`), which resolves it lazily with `Mission.GetMissionBehavior<IBattlePowerCalculationLogic>()` (`TeamQuerySystem.cs:282`) — an interface-typed behaviour lookup, so your own implementation is found by the same call with no registration.

What the number means is decided by the implementation. The shipped one keeps a two-element array of dictionaries, `_sidePowerData[side][team]` (`BattlePowerCalculationLogic.cs:18`), computes the whole set once in `CalculateTeamPowers()` (`BattlePowerCalculationLogic.cs:37`), and gates that on an `IsTeamPowersCalculated` flag (`BattlePowerCalculationLogic.cs:29`).

## Mental Model

The interface says nothing about *when* the power is computed, and that is the whole design risk. The shipped implementation returns a cached figure: on the first call it runs the full calculation for both sides, then every later call is a dictionary read (`BattlePowerCalculationLogic.cs:33`). If your implementation computes live instead, a caller polling in a tight loop pays for it every time, and any caller that assumes stability across the battle gets different behaviour from the same interface.

`GetTotalTeamPower` takes a `Team`, not a `BattleSideEnum`, and the shipped implementation indexes by `(int)team.Side` and then by team (`BattlePowerCalculationLogic.cs:33`) — a two-level lookup with a hard-coded outer size of 2. That outer size is a battle-only assumption baked into the implementation rather than the interface, so a third side would throw `IndexOutOfRangeException` there and not at your call site.

The mission-behaviour lifetime is the boundary. Because the lookup is by interface (`TeamQuerySystem.cs:282`), whoever constructs the mission decides whether this exists. A mission without one leaves `TeamQuerySystem.BattlePowerLogic` null, and every caller that dereferences it without a check fails later rather than at setup. Register yours with `Mission.AddMissionBehavior(...)` before the mission starts, alongside the rest of the behaviours.

There is no `OnAgentRemoved`-style invalidation on the interface. Nothing tells the model that an agent died, so any implementation that wants fresh numbers must either recompute internally or hook mission events itself.

## How to use

**Getting one.** Do not construct it: `TeamQuerySystem` resolves it from the mission. To supply your own, implement the interface, add it as a mission behaviour, and callers find it through the same interface-typed lookup.

**Typical use** — reading team power, and supplying a custom model:

```csharp
using System.Collections.Generic;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyBattlePowerLogic : MissionLogic, IBattlePowerCalculationLogic
{
    private readonly Dictionary<Team, float> _power = new Dictionary<Team, float>();

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        // The interface has no invalidation hook, so drop the cache yourself.
        Team team = affectedAgent?.Team;
        if (team != null)
        {
            _power.Remove(team);
        }
    }

    public float GetTotalTeamPower(Team team)
    {
        if (team == null)
        {
            return 0f;
        }

        float power;
        if (_power.TryGetValue(team, out power))
        {
            return power;
        }

        power = ComputeLive(team);
        _power[team] = power;
        return power;
    }

    private static float ComputeLive(Team team)
    {
        float total = 0f;
        foreach (Agent agent in team.ActiveAgents)
        {
            if (agent.IsActive() && agent.Character != null)
            {
                total += agent.Character.GetPower();
            }
        }
        return total;
    }
}

// Register before the mission starts; the interface-typed lookup finds it.
mission.AddMissionBehavior(new MyBattlePowerLogic());

// Read it back:
IBattlePowerCalculationLogic logic = Mission.Current.GetMissionBehavior<IBattlePowerCalculationLogic>();
float attackerPower = logic != null ? logic.GetTotalTeamPower(Mission.Current.AttackerTeam) : 0f;
```

`Team.ActiveAgents`, `BasicCharacterObject.GetPower()` and `Mission.GetMissionBehavior<T>()` are the real members; the last is what `TeamQuerySystem.cs:282` uses.

**Most common mistake:** replacing the shipped logic and assuming the cached value keeps updating.

```csharp
// Looks like a drop-in; is not.
public class MyPower : IBattlePowerCalculationLogic
{
    public float GetTotalTeamPower(Team team) { return 100f; }   // constant
}
```

The interface exposes no notification when agents die, so any stability in the shipped numbers came from its own caching strategy — the interface itself guarantees nothing about freshness. A constant, or a value computed once and never invalidated, looks correct until a battle where your numbers stop tracking reality, with no error to trace. Either recompute on every call, or invalidate from `OnAgentRemoved` as the example does.

Treat `IBattlePowerCalculationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## See Also

- [Area Index](../)
- [BattlePowerCalculationLogic — the only shipped implementation](../BattlePowerCalculationLogic)
- [TeamQuerySystem — publishes it as `BattlePowerLogic`](../TeamQuerySystem)
- [中文页面](../../../../zh/api/mission-ext/IBattlePowerCalculationLogic)