---
title: "AgentBehavior"
description: "AgentBehavior — class in SandBox.Missions.AgentBehaviors. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# AgentBehavior

**Namespace:** `SandBox.Missions.AgentBehaviors`  
**Module:** `SandBox`  
**Type:** `public abstract class AgentBehavior`  
**Source:** `SandBox/Missions/AgentBehaviors/AgentBehavior.cs`

## Overview

`AgentBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AgentBehavior`.
- **Instance members** (15): `Navigator`, `IsActive`, `OwnerAgent`, `Mission`, `GetAvailability`, `Tick`, ….
- **Extension points** (10): `GetAvailability`, `Tick`, `ConversationTick`, `OnActivate`, `OnDeactivate`, `CheckStartWithBehavior`, ….
- **Data and constants** (1): `BehaviorGroup`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CheckStartWithBehavior` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. |
| `ConversationTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. |
| `GetAvailability` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool isSimulation`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetDebugInfo` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `OnAgentRemoved` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSpecialTargetChanged` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetCustomWanderTarget` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `UsableMachine customUsableMachine`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 2 arguments: `float dt`, `bool isSimulation`. Called from the owner’s update loop — do not assume a frame boundary. |
| `CheckTime` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IsActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Mission` | property | Instance entry point `Mission` property. Read it for current state; a declared setter writes that state in place. |
| `Navigator` | property | Instance entry point `AgentNavigator` property. Read it for current state; a declared setter writes that state in place. |
| `OnActivate` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeactivate` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OwnerAgent` | property | Instance entry point `Agent` property. Read it for current state; a declared setter writes that state in place. |
| `AgentBehavior` | ctor | Protected — for subclasses only. Takes 1 argument: `AgentBehaviorGroup behaviorGroup`. Returns ``. |
| `BehaviorGroup` | field | Protected — for subclasses only `AgentBehaviorGroup` field — direct storage with no validation or notification. |

- Constructed as `protected AgentBehavior(AgentBehaviorGroup behaviorGroup)`.

## Usage Example

```csharp
public class MyAgentBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyAgentBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 10 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/AgentBehaviors/AgentBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [AgentBehaviorGroup](../AgentBehaviorGroup/) — `SandBox.Missions.AgentBehaviors`.

Section: [api/sandbox/](../) — the other types in this bucket.
