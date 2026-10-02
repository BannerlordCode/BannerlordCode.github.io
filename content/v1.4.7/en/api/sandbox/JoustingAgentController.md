---
title: "JoustingAgentController"
description: "JoustingAgentController — class in SandBox.Tournaments.AgentControllers. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# JoustingAgentController

**Namespace:** `SandBox.Tournaments.AgentControllers`  
**Module:** `SandBox`  
**Type:** `public class JoustingAgentController : AgentController`  
**Base:** `AgentController`  
**Source:** `SandBox/Tournaments/AgentControllers/JoustingAgentController.cs`

## Overview

`JoustingAgentController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends AgentController, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Instance members** (10): `State`, `JoustingMissionController`, `Opponent`, `PrepareEquipmentsAfterDismount`, `OnInitialize`, `UpdateState`, ….
- **Extension points** (1): `OnInitialize`.
- **Data and constants** (2): `CurrentCornerIndex`, `Score`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsRiding` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `JoustingAgentState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `JoustingMissionController` | property | Instance entry point `TournamentJoustingMissionController` property. Read it for current state; a declared setter writes that state in place. |
| `Opponent` | property | Instance entry point `Agent` property. Read it for current state; a declared setter writes that state in place. |
| `PrepareAgentToSwordDuel` | method | Instance entry point. Takes no arguments. |
| `PrepareEquipmentsAfterDismount` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `PrepareEquipmentsForSwordDuel` | method | Instance entry point. Takes no arguments. |
| `State` | property | Instance entry point `JoustingAgentController.JoustingAgentState` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateState` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CurrentCornerIndex` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `Score` | field | Instance entry point `int` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyJoustingAgentController : AgentController
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
- The declaration in `SandBox/Tournaments/AgentControllers/JoustingAgentController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TournamentJoustingMissionController](../TournamentJoustingMissionController/) — `SandBox.Tournaments.MissionLogics`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.

Section: [api/sandbox/](../) — the other types in this bucket.
