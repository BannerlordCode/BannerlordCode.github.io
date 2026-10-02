---
title: "CaravanBattleMissionHandler"
description: "CaravanBattleMissionHandler — class in TaleWorlds.MountAndBlade.Source.Missions. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# CaravanBattleMissionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class CaravanBattleMissionHandler : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade/Source/Missions/CaravanBattleMissionHandler.cs`

## Overview

`CaravanBattleMissionHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CaravanBattleMissionHandler`.
- **Instance members** (1): `AfterStart`.
- **Extension points** (1): `AfterStart`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `CaravanBattleMissionHandler` | ctor | Instance entry point. Takes 3 arguments: `int unitCount`, `bool isCamelCulture`, `bool isCaravan`. Returns ``. |

- Constructed as `public CaravanBattleMissionHandler(int unitCount, bool isCamelCulture, bool isCaravan)`.

## Usage Example

```csharp
var caravanBattleMissionHandler = new CaravanBattleMissionHandler(unitCount, isCamelCulture, isCaravan);
caravanBattleMissionHandler.AfterStart();
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Source/Missions/CaravanBattleMissionHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
