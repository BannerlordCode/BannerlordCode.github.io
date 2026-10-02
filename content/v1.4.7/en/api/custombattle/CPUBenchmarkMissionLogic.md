---
title: "CPUBenchmarkMissionLogic"
description: "CPUBenchmarkMissionLogic — class in TaleWorlds.MountAndBlade.CustomBattle. 8 public members (1 static)."
---

<!-- v147-skeleton -->
# CPUBenchmarkMissionLogic

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public class CPUBenchmarkMissionLogic : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs`

## Overview

`CPUBenchmarkMissionLogic` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CPUBenchmarkMissionLogic`.
- **Static entry points** (1): `OpenCPUBenchmarkMission`.
- **Instance members** (6): `OnBehaviorInitialize`, `AfterStart`, `OnMissionTick`, `OnEndMission`, `OnPreMissionTick`, `OnAgentRemoved`.
- **Extension points** (6): `OnBehaviorInitialize`, `AfterStart`, `OnMissionTick`, `OnEndMission`, `OnPreMissionTick`, `OnAgentRemoved`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow blow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPreMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OpenCPUBenchmarkMission` | method (static) | Static entry point. Takes 1 argument: `string scene`. Returns `Mission`. |
| `OnEndMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CPUBenchmarkMissionLogic` | ctor | Instance entry point. Takes 5 arguments: `int attackerInfCount`, `int attackerRangedCount`, `int attackerCavCount`, `int defenderInfCount`, …. Returns ``. |

- Constructed as `public CPUBenchmarkMissionLogic(int attackerInfCount, int attackerRangedCount, int attackerCavCount, int defenderInfCount, int defenderCavCount)`.

## Usage Example

```csharp
public class MyCPUBenchmarkMissionLogic : MissionLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyCPUBenchmarkMissionLogic());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.
- [SiegeDeploymentHandler](../../mission-ext/SiegeDeploymentHandler/) — `TaleWorlds.MountAndBlade.Missions.Handlers`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [CommandLineFunctionality](../../core-extra/CommandLineFunctionality/) — `TaleWorlds.Library`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler/) — `TaleWorlds.MountAndBlade.CustomBattle`.

Section: [api/custombattle/](../) — the other types in this bucket.
