---
title: "SiegeWeaponAutoDeployer"
description: "SiegeWeaponAutoDeployer — class in TaleWorlds.MountAndBlade.AI. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# SiegeWeaponAutoDeployer

**Namespace:** `TaleWorlds.MountAndBlade.AI`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class SiegeWeaponAutoDeployer`  
**Source:** `TaleWorlds.MountAndBlade/AI/SiegeWeaponAutoDeployer.cs`

## Overview

`SiegeWeaponAutoDeployer` is a named type in the TaleWorlds.MountAndBlade.AI namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SiegeWeaponAutoDeployer`.
- **Instance members** (2): `DeployAll`, `GetWeaponValue`.
- **Extension points** (1): `GetWeaponValue`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DeployAll` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. |
| `GetWeaponValue` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Type weaponType`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `SiegeWeaponAutoDeployer` | ctor | Instance entry point. Takes 2 arguments: `List<DeploymentPoint> deploymentPoints`, `IMissionSiegeWeaponsController weaponsController`. Returns ``. |

- Constructed as `public SiegeWeaponAutoDeployer(List<DeploymentPoint> deploymentPoints, IMissionSiegeWeaponsController weaponsController)`.

## Usage Example

```csharp
var siegeWeaponAutoDeployer = new SiegeWeaponAutoDeployer(deploymentPoints, weaponsController);
siegeWeaponAutoDeployer.DeployAll(side);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/AI/SiegeWeaponAutoDeployer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController/) — `TaleWorlds.MountAndBlade.Missions`.
- [MissionSiegeWeaponsController](../MissionSiegeWeaponsController/) — `TaleWorlds.MountAndBlade.Missions`.

Section: [api/mission-ext/](../) — the other types in this bucket.
