---
title: "CPUBenchmarkMissionSpawnHandler"
description: "CPUBenchmarkMissionSpawnHandler — class in TaleWorlds.MountAndBlade.CustomBattle. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# CPUBenchmarkMissionSpawnHandler

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public class CPUBenchmarkMissionSpawnHandler : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs`

## Overview

`CPUBenchmarkMissionSpawnHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `CPUBenchmarkMissionSpawnHandler`, `CPUBenchmarkMissionSpawnHandler`.
- **Instance members** (2): `OnBehaviorInitialize`, `AfterStart`.
- **Extension points** (2): `OnBehaviorInitialize`, `AfterStart`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CPUBenchmarkMissionSpawnHandler` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `CPUBenchmarkMissionSpawnHandler` | ctor | Instance entry point. Takes 2 arguments: `CustomBattleCombatant defenderParty`, `CustomBattleCombatant attackerParty`. Returns ``. |

- Constructed as `public CPUBenchmarkMissionSpawnHandler()`.
- Constructed as `public CPUBenchmarkMissionSpawnHandler(CustomBattleCombatant defenderParty, CustomBattleCombatant attackerParty)`.

## Usage Example

```csharp
var cPUBenchmarkMissionSpawnHandler = new CPUBenchmarkMissionSpawnHandler();
cPUBenchmarkMissionSpawnHandler.OnBehaviorInitialize();
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/custombattle/](../) — the other types in this bucket.
