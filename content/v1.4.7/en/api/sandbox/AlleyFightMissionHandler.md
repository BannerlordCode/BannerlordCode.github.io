---
title: "AlleyFightMissionHandler"
description: "AlleyFightMissionHandler — class in SandBox.Missions.MissionLogics.Towns. 18 public members (0 static)."
---

<!-- v147-skeleton -->
# AlleyFightMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics.Towns`  
**Module:** `SandBox`  
**Type:** `public class AlleyFightMissionHandler : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`  
**Base:** `MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`  
**Source:** `SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs`

## Overview

`AlleyFightMissionHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AlleyFightMissionHandler`.
- **Instance members** (17): `PlayerSide`, `OnBehaviorInitialize`, `EarlyStart`, `OnAgentRemoved`, `AfterStart`, `OnEndMissionRequest`, ….
- **Extension points** (8): `OnBehaviorInitialize`, `EarlyStart`, `OnAgentRemoved`, `AfterStart`, `OnEndMissionRequest`, `OnRetreatMission`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `EarlyStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnAgentRemoved` | method (override) | Overrides the base member. Takes 4 arguments: `Agent affectedAgent`, `Agent affectorAgent`, `AgentState agentState`, `KillingBlow blow`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEndMissionRequest` | method (override) | Overrides the base member. Takes 1 argument: `out bool canLeave`. Returns `InquiryData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionStateFinalized` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRenderingStarted` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRetreatMission` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetAllTroopsForSide` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `IEnumerable<IAgentOriginBase>`. Read path: prefer it over reaching for the backing store. |
| `GetNumberOfPlayerControllableTroops` | method | Instance entry point. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetReinforcementInterval` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetSpawnHorses` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `IsSideDepleted` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsSideSpawnEnabled` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `PlayerSide` | property | Instance entry point `BattleSideEnum` property. Read it for current state; a declared setter writes that state in place. |
| `StartSpawner` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. |
| `StopSpawner` | method | Instance entry point. Takes 1 argument: `BattleSideEnum side`. |
| `AlleyFightMissionHandler` | ctor | Instance entry point. Takes 2 arguments: `TroopRoster playerSideTroops`, `TroopRoster rivalSideTroops`. Returns ``. |

- Constructed as `public AlleyFightMissionHandler(TroopRoster playerSideTroops, TroopRoster rivalSideTroops)`.

## Usage Example

```csharp
var alleyFightMissionHandler = new AlleyFightMissionHandler(playerSideTroops, rivalSideTroops);
alleyFightMissionHandler.OnBehaviorInitialize();
// Read current state through alleyFightMissionHandler.PlayerSide.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.
- [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin/) — `TaleWorlds.CampaignSystem.AgentOrigins`.

Section: [api/sandbox/](../) — the other types in this bucket.
