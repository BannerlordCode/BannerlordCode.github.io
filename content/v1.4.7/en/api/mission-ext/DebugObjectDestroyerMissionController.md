---
title: "DebugObjectDestroyerMissionController"
description: "DebugObjectDestroyerMissionController — class in TaleWorlds.MountAndBlade.Source.Missions. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# DebugObjectDestroyerMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class DebugObjectDestroyerMissionController : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade/Source/Missions/DebugObjectDestroyerMissionController.cs`

## Overview

`DebugObjectDestroyerMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Instance members** (1): `OnMissionTick`.
- **Extension points** (1): `OnMissionTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyDebugObjectDestroyerMissionController : MissionLogic
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Source/Missions/DebugObjectDestroyerMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
