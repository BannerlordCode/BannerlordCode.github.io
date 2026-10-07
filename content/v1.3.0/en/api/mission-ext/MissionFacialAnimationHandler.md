---
title: "MissionFacialAnimationHandler"
description: "Auto-generated class reference for MissionFacialAnimationHandler."
---
# MissionFacialAnimationHandler

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFacialAnimationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/MissionFacialAnimationHandler.cs`

## Overview

`MissionFacialAnimationHandler` is a `MissionLogic` whose entire observable behaviour is a no-op. The class body has four members and not one of them does anything: `EarlyStart` constructs a `Timer` and stores it (`MissionFacialAnimationHandler.cs:12`), `AfterStart` is empty (`MissionFacialAnimationHandler.cs:17`), `OnMissionTick` is empty (`MissionFacialAnimationHandler.cs:22`), and the only method with content — `SetDefaultFacialAnimationsForAllAgents` — is `private` and has **zero callers** anywhere in the tree (`MissionFacialAnimationHandler.cs:26`).

The one fact about it that matters operationally is that it *is* instantiated, extensively: `SandBoxMissions` adds `new MissionFacialAnimationHandler()` to many campaign mission behaviour lists (`SandBoxMissions.cs:109`, `SandBoxMissions.cs:192`, `SandBoxMissions.cs:274` and several more). So it costs a behaviour slot and one timer allocation per mission and produces nothing. It is a vestigial extension point, not a stub you are expected to fill in — and the private method tells you which is which: it was clearly intended to be driven by the timer that `EarlyStart` creates and that nothing ever reads.

`SetDefaultFacialAnimationsForAllAgents` is still worth reading, because it documents the intended shape. It iterates `base.Mission.Agents`, filters on `agent.IsActive() && agent.IsHuman`, and sets `agent.SetAgentFacialAnimation(Agent.FacialAnimChannel.Low, "idle_tired", true)` (`MissionFacialAnimationHandler.cs:28`, `MissionFacialAnimationHandler.cs:30`, `MissionFacialAnimationHandler.cs:32`). The third argument is a loop flag, so the intent was a periodic re-assert of a default expression, driven by `_animRefreshTimer` with the `5f` interval and `true` (repeating) flag from `MissionFacialAnimationHandler.cs:12`.

## Mental Model

Because `MissionLogic`'s end-of-mission and extra-equipment policies iterate the logic list, this type participates in them by contributing the base class's defaults: `MissionEnded` returns `false`, `OnEndMissionRequest` sets `canLeave = true` and returns a null `InquiryData` (`MissionLogic.cs:24`, `MissionLogic.cs:31`), and `GetExtraEquipmentElementsForCharacter` returns `null` (`MissionLogic.cs:62`). It can never veto a leave and can never end a mission. The one thing it *could* do — contribute equipment — it declines, and that is load-bearing: `Mission.GetExtraEquipmentElementsForCharacter` `AddRange`s every non-null return (`Mission.cs:4456`), so returning null is what keeps it out of the preload path.

The practical boundary for a modder is: **do not try to reuse this class to get facial animations working.** Overriding `OnMissionTick` in a subclass works — the base is empty, so there is nothing to call — but you must register your own instance, because the ones the game creates are the base type and will never dispatch to your overrides. Attribute-based registration plays no part either: the mission assembly writes `new MissionFacialAnimationHandler()` literally (`SandBoxMissions.cs:109`), so no factory or override table is consulted.

## How to use

**Getting it.** Register your own subclass as a mission behaviour; the game's instances are of the base type and are inert.

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.Source.Missions.Handlers;

public class MyFacialAnimations : MissionFacialAnimationHandler
{
    // The base OnMissionTick is empty (MissionFacialAnimationHandler.cs:22), so
    // there is nothing to call and nothing to break.
    public override void OnMissionTick(float dt)
    {
        foreach (Agent agent in Mission.Agents)
        {
            if (agent.IsActive() && agent.IsHuman)
            {
                agent.SetAgentFacialAnimation(Agent.FacialAnimChannel.Low, "idle_tired", true);
            }
        }
    }
}

// register it yourself -- the game's `new MissionFacialAnimationHandler()` instances
// are base-typed and will never reach the override above.
Mission.Current.AddMissionBehavior(new MyFacialAnimations());
```

If you want to drive the stock method you cannot: it is `private`, so there is no way to call it from a subclass without re-implementing it. Copying its four lines is cheaper than reflection.

**The mistake that produces a mod that appears to work and silently does not.** Subclassing `MissionFacialAnimationHandler`, overriding `OnMissionTick`, and assuming the game's existing instances pick it up. They do not: `SandBoxMissions` constructs the concrete base type directly (`SandBoxMissions.cs:109`), not through a factory or an override table, so your subclass is never instantiated anywhere unless you add it yourself. There is no error — the game's inert instances keep ticking exactly as before.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionFacialAnimationHandler from the subsystem API first
MissionFacialAnimationHandler missionFacialAnimationHandler = ...;
missionFacialAnimationHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionFacialAnimationHandler from the subsystem API first
MissionFacialAnimationHandler missionFacialAnimationHandler = ...;
missionFacialAnimationHandler.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionFacialAnimationHandler from the subsystem API first
MissionFacialAnimationHandler missionFacialAnimationHandler = ...;
missionFacialAnimationHandler.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionFacialAnimationHandler>();
```

## See Also

- [MissionLogic — the base class whose defaults this type inherits unchanged](../MissionLogic)
- [MissionHintLogic — another campaign logic that nothing ever drives](../MissionHintLogic)
- [HumanAIComponent — the behaviour that actually animates agents in this area](../HumanAIComponent)
- [Mission — behaviour list and the extra-equipment merge](../../mission/Mission)
- [Area Index](../)