---
title: "CivilianPortShipSpawnMissionLogic"
description: "CivilianPortShipSpawnMissionLogic — class in SandBox.Missions. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# CivilianPortShipSpawnMissionLogic

**Namespace:** `SandBox.Missions`  
**Module:** `SandBox`  
**Type:** `public class CivilianPortShipSpawnMissionLogic : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs`

## Overview

`CivilianPortShipSpawnMissionLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CivilianPortShipSpawnMissionLogic`.
- **Instance members** (3): `OnBehaviorInitialize`, `EarlyStart`, `OnMissionTick`.
- **Extension points** (3): `OnBehaviorInitialize`, `EarlyStart`, `OnMissionTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `EarlyStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CivilianPortShipSpawnMissionLogic` | ctor | Instance entry point. Takes 2 arguments: `List<Ship> mainPartyShips`, `List<Ship> townLordShips`. Returns ``. |

- Constructed as `public CivilianPortShipSpawnMissionLogic(List<Ship> mainPartyShips, List<Ship> townLordShips)`.

## Usage Example

```csharp
public class MyCivilianPortShipSpawnMissionLogic : MissionLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyCivilianPortShipSpawnMissionLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Ship](../../campaign/Ship/) — `TaleWorlds.CampaignSystem.Naval`.

Section: [api/sandbox/](../) — the other types in this bucket.
