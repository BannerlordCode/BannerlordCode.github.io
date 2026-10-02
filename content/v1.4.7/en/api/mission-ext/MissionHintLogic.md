---
title: "MissionHintLogic"
description: "MissionHintLogic — class in TaleWorlds.MountAndBlade.Missions.MissionLogics. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionHintLogic

**Namespace:** `TaleWorlds.MountAndBlade.Missions.MissionLogics`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionHintLogic : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs`

## Overview

`MissionHintLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (4): `ActiveHint`, `SetActiveHint`, `Clear`, `MissionHintChangedDelegate`.
- **Data and constants** (1): `OnActiveHintChanged`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ActiveHint` | property | Instance entry point `MissionHint` property. Read it for current state; a declared setter writes that state in place. |
| `Clear` | method | Instance entry point. Takes no arguments. |
| `MissionHintChangedDelegate` | method | Instance entry point. Takes 2 arguments: `MissionHint previousHint`, `MissionHint newHint`. Returns `delegate void`. |
| `SetActiveHint` | method | Instance entry point. Takes 1 argument: `MissionHint hint`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnActiveHintChanged` | field | Instance entry point `MissionHintLogic.MissionHintChangedDelegate` field — direct storage with no validation or notification. |

## Usage Example

```csharp
public class MyMissionHintLogic : MissionLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyMissionHintLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- The declaration in `TaleWorlds.MountAndBlade/Missions/MissionLogics/MissionHintLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionHint](../MissionHint/) — `TaleWorlds.MountAndBlade.Missions.Hints`.

Section: [api/mission-ext/](../) — the other types in this bucket.
