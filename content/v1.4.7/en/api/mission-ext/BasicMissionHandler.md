---
title: "BasicMissionHandler"
description: "BasicMissionHandler — class in TaleWorlds.MountAndBlade.Source.Missions.Handlers. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# BasicMissionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Source.Missions.Handlers`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class BasicMissionHandler : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs`

## Overview

`BasicMissionHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionLogic, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Instance members** (3): `IsWarningWidgetOpened`, `OnBehaviorInitialize`, `CreateWarningWidgetForResult`.
- **Extension points** (1): `OnBehaviorInitialize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CreateWarningWidgetForResult` | method | Instance entry point. Takes 1 argument: `BattleEndLogic.ExitResult result`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `IsWarningWidgetOpened` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

## Usage Example

```csharp
// BasicMissionHandler is read through its properties:
//   IsWarningWidgetOpened : bool
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade/Source/Missions/Handlers/BasicMissionHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/mission-ext/](../) — the other types in this bucket.
