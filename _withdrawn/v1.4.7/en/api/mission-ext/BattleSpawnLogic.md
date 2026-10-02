---
title: "BattleSpawnLogic"
description: "BattleSpawnLogic — class in TaleWorlds.MountAndBlade.Source.Missions. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# BattleSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class BattleSpawnLogic : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs`

## Overview

`BattleSpawnLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BattleSpawnLogic`.
- **Instance members** (1): `OnPreMissionTick`.
- **Extension points** (1): `OnPreMissionTick`.
- **Data and constants** (3): `BattleTag`, `SallyOutTag`, `ReliefForceAttackTag`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnPreMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BattleTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `ReliefForceAttackTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `SallyOutTag` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `BattleSpawnLogic` | ctor | Instance entry point. Takes 1 argument: `string selectedSpawnPointSetTag`. Returns ``. |

- Constructed as `public BattleSpawnLogic(string selectedSpawnPointSetTag)`.

## Usage Example

```csharp
public class MyBattleSpawnLogic : MissionLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyBattleSpawnLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Source/Missions/BattleSpawnLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
