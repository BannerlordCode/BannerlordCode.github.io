---
title: "ArenaAgentStateDeciderLogic"
description: "ArenaAgentStateDeciderLogic — class in SandBox.Missions.MissionLogics.Arena. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# ArenaAgentStateDeciderLogic

**Namespace:** `SandBox.Missions.MissionLogics.Arena`  
**Module:** `SandBox`  
**Type:** `public class ArenaAgentStateDeciderLogic : MissionLogic, IAgentStateDecider, IMissionBehavior`  
**Base:** `MissionLogic, IAgentStateDecider, IMissionBehavior`  
**Source:** `SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs`

## Overview

`ArenaAgentStateDeciderLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, IAgentStateDecider, IMissionBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (1): `GetAgentState`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetAgentState` | method | Instance entry point. Takes 3 arguments: `Agent effectedAgent`, `float deathProbability`, `out bool usedSurgery`. Returns `AgentState`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
public class MyArenaAgentStateDeciderLogic : MissionLogic, IAgentStateDecider, IMissionBehavior
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyArenaAgentStateDeciderLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- The declaration in `SandBox/Missions/MissionLogics/Arena/ArenaAgentStateDeciderLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
