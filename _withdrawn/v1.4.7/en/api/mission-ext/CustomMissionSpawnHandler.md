---
title: "CustomMissionSpawnHandler"
description: "CustomMissionSpawnHandler — class in TaleWorlds.MountAndBlade.MissionSpawnHandlers. 3 public members (1 static)."
---

<!-- v147-skeleton -->
# CustomMissionSpawnHandler

**Namespace:** `TaleWorlds.MountAndBlade.MissionSpawnHandlers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class CustomMissionSpawnHandler : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomMissionSpawnHandler.cs`

## Overview

`CustomMissionSpawnHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `CreateCustomBattleWaveSpawnSettings`.
- **Instance members** (1): `OnBehaviorInitialize`.
- **Extension points** (1): `OnBehaviorInitialize`.
- **Data and constants** (1): `_missionAgentSpawnLogic`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CreateCustomBattleWaveSpawnSettings` | method (static) | Protected — for subclasses only. Takes no arguments. Returns `MissionSpawnSettings`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `_missionAgentSpawnLogic` | field | Protected — for subclasses only `DefaultBattleMissionAgentSpawnLogic` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Static entry points on CustomMissionSpawnHandler:
CustomMissionSpawnHandler.CreateCustomBattleWaveSpawnSettings();
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/MissionSpawnHandlers/CustomMissionSpawnHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
