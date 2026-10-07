---
title: "ClearHandInverseKinematicsOnStopUsageComponent"
description: "Auto-generated class reference for ClearHandInverseKinematicsOnStopUsageComponent."
---
# ClearHandInverseKinematicsOnStopUsageComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClearHandInverseKinematicsOnStopUsageComponent : UsableMissionObjectComponent`
**Base:** `UsableMissionObjectComponent`
**File:** `TaleWorlds.MountAndBlade/ClearHandInverseKinematicsOnStopUsageComponent.cs`

## Overview

`ClearHandInverseKinematicsOnStopUsageComponent` is a 14-line `UsableMissionObjectComponent` that does one
thing: when an agent stops using a mission object, it clears that agent's hand inverse kinematics by calling
`Agent.ClearHandInverseKinematics()` (`ClearHandInverseKinematicsOnStopUsageComponent.cs:11`), which drops
straight through to the native `MBAPI.IMBAgent.ClearHandInverseKinematics` (`Agent.cs:4055`).

It is not a singleton — it is **attached to standing points**. The engine installs an instance on the crew
standing points of every crewed siege weapon: the ballista (`Ballista.cs:137`), the battering ram
(`BatteringRam.cs:213`), the mangonel (`Mangonel.cs:132`), the siege ladder (`SiegeLadder.cs:129`), the siege
tower (`SiegeTower.cs:664`), and — for every standing point a movable siege weapon owns —
`SiegeWeaponMovementComponent` itself (`SiegeWeaponMovementComponent.cs:50`). The trebuchet adds it per
standing point too (`Trebuchet.cs:166`). That is seven construction sites in the 1.3.15 tree.

The reason it exists is animation hygiene: a crewman animating a ballista or a ram has their hands driven
by the weapon's animation; without this component the last driven hand pose would persist after the crewman
disembarks.

## Mental Model

Read it as a one-line teardown hook, and note the two things it deliberately does *not* do. The boundaries:

- **It never calls `base.OnUseStopped`.** The override body is a single statement
  (`ClearHandInverseKinematicsOnStopUsageComponent.cs:11`); the base implementation at
  `UsableMissionObjectComponent.cs:56` is skipped entirely. A subclass of this class that also needs base
  behaviour must call it explicitly.
- **The `isSuccessful` flag is ignored.** The parameter exists in the signature with a default of `true` but
  is never read, so hand IK is cleared on an aborted use exactly as on a completed one. That is usually what
  you want, but it means you cannot use this component to distinguish the two cases.
- **It has no `OnUse` counterpart.** Clearing happens only on stop; nothing here re-establishes hand IK when
  a use begins. The siege weapon's own animation does that.
- Because it is attached to *standing points* rather than to agents, every agent who uses that object gets
  the teardown. Adding it to a standing point is the whole extension mechanism — there is no registry to
  hook into.

## How to use

**Getting one.** Construct it and attach it to a standing point, exactly as the siege weapons do, or add it
to the standing points of your own crewed mission object.

```csharp
public class CraneCrewTeardown
{
    // Exactly the call SiegeWeaponMovementComponent makes per standing point
    // (SiegeWeaponMovementComponent.cs:50).
    public void Attach(IEnumerable<StandingPoint> standingPoints)
    {
        foreach (StandingPoint point in standingPoints)
        {
            // Every agent who uses this point gets ClearHandInverseKinematics on stop
            // (ClearHandInverseKinematicsOnStopUsageComponent.cs:11).
            point.AddComponent(new ClearHandInverseKinematicsOnStopUsageComponent());
        }
    }
}
```

**The mistake that bites.** Subclassing it to add extra work on stop and forgetting to call through. Because
the override never invokes `base.OnUseStopped`
(`ClearHandInverseKinematicsOnStopUsageComponent.cs:11`), any `UsableMissionObjectComponent` behaviour the
base class provides is silently dropped for that object — the crewman stops animating cleanly but the base
use-cancellation bookkeeping never runs, and the object can stay latched as "in use" by the mission. Call
`base.OnUseStopped(userAgent, isSuccessful)` first in any subclass.



## Usage Example

```csharp
var component = agent.GetComponent<ClearHandInverseKinematicsOnStopUsageComponent>();
```

## See Also

- [Area Index](../)
- [CustomSiegeMissionSpawnHandler](../CustomSiegeMissionSpawnHandler)
- [MissionLogic](../MissionLogic)
- [CasualtyHandler](../CasualtyHandler)
- [中文页面](../../../../zh/api/mission-ext/ClearHandInverseKinematicsOnStopUsageComponent)