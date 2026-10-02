---
title: "CautiousBehavior"
description: "CautiousBehavior — class in SandBox.Missions.AgentBehaviors. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# CautiousBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`  
**Module:** `SandBox`  
**Type:** `public class CautiousBehavior : AgentBehavior`  
**Base:** `AgentBehavior`  
**Source:** `SandBox/Missions/AgentBehaviors/CautiousBehavior.cs`

## Overview

`CautiousBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends AgentBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CautiousBehavior`.
- **Instance members** (5): `Tick`, `GetAvailability`, `OnDeactivate`, `OnActivate`, `GetDebugInfo`.
- **Extension points** (5): `Tick`, `GetAvailability`, `OnDeactivate`, `OnActivate`, `GetDebugInfo`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetAvailability` | method (override) | Overrides the base member. Takes 1 argument: `bool isSimulation`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDebugInfo` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `Tick` | method (override) | Overrides the base member. Takes 2 arguments: `float dt`, `bool isSimulation`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnActivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CautiousBehavior` | ctor | Instance entry point. Takes 1 argument: `AgentBehaviorGroup behaviorGroup`. Returns ``. |

- Constructed as `public CautiousBehavior(AgentBehaviorGroup behaviorGroup)`.

## Usage Example

```csharp
public class MyCautiousBehavior : AgentBehavior
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyCautiousBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/AgentBehaviors/CautiousBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentBehavior](../AgentBehavior/) — `SandBox.Missions.AgentBehaviors`.
- [AgentBehaviorGroup](../AgentBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.

Section: [api/sandbox/](../) — the other types in this bucket.
