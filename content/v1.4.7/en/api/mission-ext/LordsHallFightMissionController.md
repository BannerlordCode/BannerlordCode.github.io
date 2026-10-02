---
title: "LordsHallFightMissionController"
description: "LordsHallFightMissionController — class in TaleWorlds.MountAndBlade.Source.Missions.Handlers. 15 public members (0 static)."
---

<!-- v147-skeleton -->
# LordsHallFightMissionController

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class LordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`  
**Base:** `MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`  
**Source:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs`

## Overview

`LordsHallFightMissionController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `LordsHallFightMissionController`.
- **Instance members** (14): `PlayerSide`, `OnBehaviorInitialize`, `OnMissionStateFinalized`, `OnCreated`, `OnMissionTick`, `OnAgentRemoved`, ….
- **Extension points** (5): `OnBehaviorInitialize`, `OnMissionStateFinalized`, `OnCreated`, `OnMissionTick`, `OnAgentRemoved`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow blow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCreated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionStateFinalized` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetAllTroopsForSide` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `IEnumerable<IAgentOriginBase>`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfPlayerControllableTroops` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetReinforcementInterval` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetSpawnHorses` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `IsSideDepleted` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsSideSpawnEnabled` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `PlayerSide` | property | Instance entry point `BattleSideEnum` property. Read it for current state; a declared setter writes that state in place. |
| `StartSpawner` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. |
| `StopSpawner` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. |
| `LordsHallFightMissionController` | ctor | Instance entry point. Takes 6 arguments: `IMissionTroopSupplier[] suppliers`, `float areaLostRatio`, `float attackerDefenderTroopCountRatio`, `int attackerSideTroopCountMax`, …. Returns ``. |

- Constructed as `public LordsHallFightMissionController(IMissionTroopSupplier[] suppliers, float areaLostRatio, float attackerDefenderTroopCountRatio, int attackerSideTroopCountMax, int defenderSideTroopCountMax, BattleSideEnum playerSide)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyLordsHallFightMissionController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior
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
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Source/Missions/Handlers/LordsHallFightMissionController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [FightAreaMarker](../FightAreaMarker/) — `TaleWorlds.MountAndBlade.Objects`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/mission-ext/](../) — the other types in this bucket.
