---
title: "IVehicleHandler"
description: "Auto-generated class reference for IVehicleHandler."
---
# IVehicleHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IVehicleHandler : IMissionBehavior`
**Base:** `IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IVehicleHandler.cs`

## Overview

`IVehicleHandler` is the narrowest interface in this area: a single predicate, `bool IsAgentInVehicle(Agent agent, out WeakGameEntity vehicleEntity)` (`IVehicleHandler.cs:10`), plus the inherited `IMissionBehavior` lifetime (`IVehicleHandler.cs:7`). It exists so that code which needs to know an agent's *physical* position — not its logical one — can ask whoever owns the vehicle system, without taking a dependency on that system.

In 1.3.0 this tree contains no implementation of it. A search for `IVehicleHandler` across `bannerlord-1.3.0` returns only the declaration itself and the three references inside `MissionBoundaryCrossingHandler`: the field (`MissionBoundaryCrossingHandler.cs:306`), the behaviour lookup in the constructor (`MissionBoundaryCrossingHandler.cs:49`), and the single guarded call (`MissionBoundaryCrossingHandler.cs:243`). The only consumer treats it as optional throughout, which is what makes the absence harmless rather than a bug — but it also means the vehicle-aware branch of that code is unreachable in a stock game.

## Mental Model

The single method hands back a `WeakGameEntity` by `out` parameter, and that choice carries the contract. A `WeakGameEntity` is an engine handle, not an object reference: it can be compared against null cheaply and it is the only thing that survives a scene change. The consumer uses it *only* for its position — `!base.Mission.IsPositionInsideBoundaries(weakGameEntity.GlobalPosition.AsVec2)` (`MissionBoundaryCrossingHandler.cs:245`). The returned entity is the vehicle body, not the agent, so its `GlobalPosition` is the hull's, which is exactly the point: a rider mounted inside a wagon that has rolled past the boundary is "outside" by the wagon's position even though the rider's own agent position may still be inside.

The `out` parameter is only assigned by the implementation. In C# an `out` parameter must be definitely assigned on every path that returns `true`, so the engine's convention is: assign the vehicle entity and return true when the agent is in a vehicle; return false and the `out` value is whatever the implementation chose. The consumer only dereferences it inside the `true` branch of a short-circuiting `&&` (`MissionBoundaryCrossingHandler.cs:243`), so the `false` path never touches it — but a handler that returns `true` without assigning the `out` argument will hand back a default `WeakGameEntity` whose `GlobalPosition` is meaningless, and the boundary check will be computed from garbage rather than throwing.

The `false` result is not "no vehicle system", it is "this agent is not in a vehicle". Those are different states and the caller collapses them: the else branch falls back to `Agent.Main.Position` (`MissionBoundaryCrossingHandler.cs:249`), which is the correct fallback for an unoccupied agent and also the fallback used when no handler is installed.

## How to use

**Getting it.** There is nothing to obtain from the shipped game — implement it. Because it extends `IMissionBehavior`, your implementation must also implement the behaviour interface, and it must be present in the mission's behaviour list before `MissionBoundaryCrossingHandler`'s constructor runs, because that constructor performs the lookup once and caches the result (`MissionBoundaryCrossingHandler.cs:49`). A behaviour added later is never seen.

```csharp
public class MyVehicleHandler : MissionBehavior, IVehicleHandler
{
    public bool IsAgentInVehicle(Agent agent, out WeakGameEntity vehicleEntity)
    {
        // MUST assign on every path that returns true, or the caller reads garbage.
        if (agent != null && agent.IsMount && agent.MountAgent != null)
        {
            vehicleEntity = agent.MountAgent.GetEntity();
            return true;
        }
        vehicleEntity = null;
        return false;
    }

    public override void MissionTick(float dt) { }
}

// add it to the mission before any boundary handler is constructed
Mission.Current.AddMissionBehavior(new MyVehicleHandler());
```

Read the result the same way the shipped consumer does — look the behaviour up, null-check, and only touch the `out` value when the call returned true:

```csharp
IVehicleHandler vehicles = Mission.Current.GetMissionBehavior<IVehicleHandler>();
WeakGameEntity hull;
if (vehicles != null && vehicles.IsAgentInVehicle(Agent.Main, out hull))
{
    Debug.Print("hull at " + hull.GlobalPosition, false);
}
```

**The mistake that produces a silently wrong boundary verdict.** Returning `true` and leaving the `out` parameter unset. It compiles, it passes the `!= null` check, and the caller goes on to test `weakGameEntity.GlobalPosition` (`MissionBoundaryCrossingHandler.cs:245`) against a default-constructed handle — so agents get flagged as having left the mission boundary at positions nobody chose, and the punishment timer that follows fires on innocent agents.

## How to use

The placeholder snippet previously on this page was doubly broken: its type name carried a doubled `I` prefix that names nothing, and it assigned an ellipsis as if a registry would supply the instance. In this tree nothing implements `IVehicleHandler`, so the correct "obtain" step is the implement-it-yourself direction shown above, and `Mission.Current.GetMissionBehavior<IVehicleHandler>()` returns null in a stock game.

## See Also

- [MissionBoundaryCrossingHandler — the only consumer, and it owns the cached lookup](../MissionBoundaryCrossingHandler)
- [IMissionSystemHandler — another single-purpose contract in this area](../IMissionSystemHandler)
- [IVehicleHandler consumers aside, MissionBehavior is what carries the lifetime](../../mission/MissionBehavior)
- [Mission — where behaviours are constructed and looked up](../../mission/Mission)
- [Area Index](../)