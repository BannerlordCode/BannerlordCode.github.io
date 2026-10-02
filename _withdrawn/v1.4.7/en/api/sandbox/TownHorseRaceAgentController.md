---
title: "TownHorseRaceAgentController"
description: "TownHorseRaceAgentController — class in SandBox.Tournaments.AgentControllers. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# TownHorseRaceAgentController

**Namespace:** `SandBox.Tournaments.AgentControllers`  
**Module:** `SandBox`  
**Type:** `public class TownHorseRaceAgentController : AgentController`  
**Base:** `AgentController`  
**Source:** `SandBox/Tournaments/AgentControllers/TownHorseRaceAgentController.cs`

## Overview

`TownHorseRaceAgentController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends AgentController, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Instance members** (4): `OnInitialize`, `DisableMovement`, `Start`, `OnEnterCheckPoint`.
- **Extension points** (1): `OnInitialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `DisableMovement` | method | Instance entry point. Takes no arguments. |
| `OnEnterCheckPoint` | method | Instance entry point. Takes 1 argument: `VolumeBox checkPoint`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Start` | method | Instance entry point. Takes no arguments. |

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyTownHorseRaceAgentController : AgentController
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
- The declaration in `SandBox/Tournaments/AgentControllers/TownHorseRaceAgentController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TownHorseRaceMissionController](../TownHorseRaceMissionController/) — `SandBox.Tournaments.MissionLogics`.

Section: [api/sandbox/](../) — the other types in this bucket.
