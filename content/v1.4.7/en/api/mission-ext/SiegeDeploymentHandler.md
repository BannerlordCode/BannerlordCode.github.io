---
title: "SiegeDeploymentHandler"
description: "SiegeDeploymentHandler — class in TaleWorlds.MountAndBlade.Missions.Handlers. 18 public members (0 static)."
---

<!-- v147-skeleton -->
# SiegeDeploymentHandler

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Handlers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class SiegeDeploymentHandler : BattleDeploymentHandler`  
**Base:** `BattleDeploymentHandler`  
**Source:** `TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs`

## Overview

`SiegeDeploymentHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends BattleDeploymentHandler, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SiegeDeploymentHandler`.
- **Instance members** (17): `PlayerDeploymentPoints`, `AllDeploymentPoints`, `OnBehaviorInitialize`, `OnRemoveBehavior`, `AfterStart`, `FinishDeployment`, ….
- **Extension points** (4): `OnBehaviorInitialize`, `OnRemoveBehavior`, `AfterStart`, `FinishDeployment`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `FinishDeployment` | method (override) | Overrides the base member. Takes no arguments. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRemoveBehavior` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AllDeploymentPoints` | property | Instance entry point `IEnumerable<DeploymentPoint>` property. Read it for current state; a declared setter writes that state in place. |
| `AutoAssignDetachmentsForDeployment` | method | Instance entry point. Takes 1 argument: `Team team`. |
| `AutoDeployTeamUsingTeamAI` | method | Instance entry point. Takes 2 arguments: `Team team`, `bool autoAssignDetachments`. |
| `DeployAllSiegeWeaponsOfAi` | method | Instance entry point. Takes no arguments. |
| `DeployAllSiegeWeaponsOfPlayer` | method | Instance entry point. Takes no arguments. |
| `GetDeployableWeaponCountOfPlayer` | method | Instance entry point. Takes 1 argument: `Type weapon`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetEstimatedAverageDefenderPosition` | method | Instance entry point. Takes no arguments. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `GetMaxDeployableWeaponCountOfPlayer` | method | Instance entry point. Takes 1 argument: `Type weapon`. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `PlayerDeploymentPoints` | property | Instance entry point `IEnumerable<DeploymentPoint>` property. Read it for current state; a declared setter writes that state in place. |
| `RemoveDeploymentPoints` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Removes from or clears the collection this type owns. |
| `RemoveUnavailableDeploymentPoints` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Removes from or clears the collection this type owns. |
| `UnHideDeploymentPoints` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. |
| `Mission_IsFormationUnitPositionAvailable_AdditionalCondition` | method | Protected — for subclasses only. Takes 2 arguments: `WorldPosition position`, `Team team`. Returns `bool`. |
| `SiegeDeploymentHandler` | ctor | Instance entry point. Takes 1 argument: `bool isPlayerAttacker`. Returns ``. |

- Constructed as `public SiegeDeploymentHandler(bool isPlayerAttacker)`.

## Usage Example

```csharp
var siegeDeploymentHandler = new SiegeDeploymentHandler(isPlayerAttacker);
siegeDeploymentHandler.OnBehaviorInitialize();
// Read current state through siegeDeploymentHandler.PlayerDeploymentPoints.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Missions/Handlers/SiegeDeploymentHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BattleDeploymentHandler](../BattleDeploymentHandler/) — `TaleWorlds.MountAndBlade.Missions.Handlers`.
- [SiegeWeaponAutoDeployer](../SiegeWeaponAutoDeployer/) — `TaleWorlds.MountAndBlade.AI`.
- [IMissionSiegeWeaponsController](../IMissionSiegeWeaponsController/) — `TaleWorlds.MountAndBlade.Missions`.
- [MissionSiegeWeaponsController](../MissionSiegeWeaponsController/) — `TaleWorlds.MountAndBlade.Missions`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/mission-ext/](../) — the other types in this bucket.
