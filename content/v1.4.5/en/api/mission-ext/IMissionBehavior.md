---
title: "IMissionBehavior"
description: "IMissionBehavior is the empty mission-behavior marker implemented by MissionBehavior so the mission can store and process behavior objects uniformly."
---
# IMissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public interface IMissionBehavior`  
**Base:** none  
**Source file:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMissionBehavior.cs`

## One-sentence responsibility

It marks an object as belonging to the mission-behavior family; the interface has no members, while the lifecycle contract lives on [MissionBehavior](../../mission/MissionBehavior).

## Mental Model

`IMissionBehavior` is a type-level boundary, not a service API and not a second way to receive mission callbacks. The concrete base class `MissionBehavior` implements it and supplies `Mission`, `BehaviorType`, creation, tick, Agent, rendering, and end hooks. `Mission` stores behavior objects as `MissionBehavior` instances and routes them through ordered logic/other/network collections. Therefore a mod should normally derive from `MissionLogic`, `MissionView`, or another `MissionBehavior` subclass; implementing the empty interface directly does not make an object runnable by the mission.

## When to use and when not to use

- Use it when an API needs to describe “any mission behavior” without requiring lifecycle members.
- Derive from [MissionLogic](../MissionLogic) or [MissionBehavior](../../mission/MissionBehavior) when the object must receive callbacks.
- Do not implement this interface alone and expect `OnMissionTick` or `OnEndMission` to run; those members are not declared here.
- Do not confuse it with [MissionView](../MissionView), whose view callbacks are driven by `MissionScreen`.

## Dependencies

```text
MissionState.OpenNew
  -> MissionBehavior collection
  -> MissionBehavior implements IMissionBehavior
  -> Mission routes lifecycle callbacks
```

- Runtime owner: [Mission](../../mission/Mission) owns the attached behavior instance.
- Lifecycle implementation: [MissionBehavior](../../mission/MissionBehavior) supplies the actual callback surface.
- Logic specialization: [MissionLogic](../MissionLogic) is the normal base for mission rules.
- View specialization: [MissionView](../MissionView) bridges mission state to the screen layer.

## Real example

This uses the real mission behavior insertion boundary. The object is a `MissionLogic`, so it receives callbacks through `MissionBehavior` while also satisfying `IMissionBehavior`:

```csharp
using TaleWorlds.MountAndBlade;

public sealed class MissionTelemetryLogic : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        if (Mission.Current != null && Mission.Current.CurrentTime > 10f)
        {
            // Record mission-local data here; do not retain Mission after the mission ends.
        }
    }
}

Mission mission = Mission.Current;
if (mission != null)
{
    mission.AddMissionBehavior(new MissionTelemetryLogic());
    IMissionBehavior behavior = mission.GetMissionBehavior<MissionTelemetryLogic>();
}
```

The interface variable is useful for generic ownership checks, but the typed `MissionBehavior` subclass is what provides meaningful callbacks and access to the current `Mission`.

## Risks and boundaries

- The empty interface does not validate that an object can be attached to a mission. Use a concrete `MissionBehavior` subclass.
- Behavior insertion is mission-scoped. A behavior reference becomes invalid for engine work after `OnEndMission`.
- Mission callback order is controlled by `Mission`; calling lifecycle methods manually can duplicate work or bypass behavior grouping.
- Persistent campaign data does not belong in this marker. Store durable state in a campaign behavior and synchronize it through the save contract.

## Version note

This page follows the v1.4.5 declaration, where `IMissionBehavior` has no members and `MissionBehavior` is its principal implementation. Recheck the base class and behavior storage if targeting another game version.

## Navigation

- Parent: [Mission extension API](../)
- Siblings: [MissionLogic](../MissionLogic) · [MissionView](../MissionView)
- Related: [Mission](../../mission/Mission) · [MissionBehavior](../../mission/MissionBehavior) · [MissionState](../../campaign-ext/MissionState)
