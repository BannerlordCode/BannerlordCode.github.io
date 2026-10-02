---
title: "MissionSiegeWeaponsController"
description: "MissionSiegeWeaponsController — class in TaleWorlds.MountAndBlade.Missions. 6 public members (1 static)."
---

<!-- v147-skeleton -->
# MissionSiegeWeaponsController

**Namespace:** `TaleWorlds.MountAndBlade.Missions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class MissionSiegeWeaponsController : IMissionSiegeWeaponsController`  
**Base:** `IMissionSiegeWeaponsController`  
**Source:** `TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs`

## Overview

`MissionSiegeWeaponsController` coordinates one flow: it receives input or notifications, decides what the next step is, and forwards the result to the systems that own the state. The state itself lives elsewhere.

It extends IMissionSiegeWeaponsController, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A controller is the decision point of a flow. Read it top to bottom as "input comes in → the controller validates it → a domain call happens → listeners are told". Keeping the decision here and the data elsewhere is what makes the flow re-enterable.

Because controllers are callback-driven, they must tolerate being called at awkward times; assume no particular ordering of the surrounding system.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionSiegeWeaponsController`.
- **Static entry points** (1): `GetWeaponType`.
- **Instance members** (4): `GetMaxDeployableWeaponCount`, `GetSiegeWeapons`, `OnWeaponDeployed`, `OnWeaponUndeployed`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetWeaponType` | method (static) | Static entry point. Takes 1 argument: `ScriptComponentBehavior weapon`. Returns `Type`. Read path: prefer it over reaching for the backing store. |
| `GetMaxDeployableWeaponCount` | method | Instance entry point. Takes 1 argument: `Type t`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetSiegeWeapons` | method | Instance entry point. Takes no arguments. Returns `IEnumerable<IMissionSiegeWeapon>`. Read path: prefer it over reaching for the backing store. |
| `OnWeaponDeployed` | method | Instance entry point. Takes 1 argument: `SiegeWeapon missionWeapon`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnWeaponUndeployed` | method | Instance entry point. Takes 1 argument: `SiegeWeapon missionWeapon`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MissionSiegeWeaponsController` | ctor | Instance entry point. Takes 2 arguments: `BattleSideEnum side`, `List<MissionSiegeWeapon> weapons`. Returns ``. |

- Constructed as `public MissionSiegeWeaponsController(BattleSideEnum side, List<MissionSiegeWeapon> weapons)`.

## Usage Example

```csharp
// Controllers are callback-driven: the engine owns the lifetime.
public class MyMissionSiegeWeaponsController : IMissionSiegeWeaponsController
{
    // Register from the game starter, exactly once.
    public override void RegisterEvents()
    {
        // forward the notification this controller reacts to
    }
}

// Static helpers: MissionSiegeWeaponsController.GetWeaponType(weapon);
```

## Risks and Boundaries

- Re-entrancy is the main hazard: a callback that comes back into the controller while it is mid-update can loop.
- Controllers hold no durable state — anything that must survive a save belongs on a saveable object.
- Assume callbacks arrive on the main thread; locking around them usually deadlocks the engine.
- The declaration in `TaleWorlds.MountAndBlade/Missions/MissionSiegeWeaponsController.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController/) — `TaleWorlds.MountAndBlade.Missions`.

Section: [api/mission-ext/](../) — the other types in this bucket.
