---
title: "WorkshopMissionHandler"
description: "WorkshopMissionHandler — class in SandBox.Missions.MissionLogics.Towns. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# WorkshopMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics.Towns`  
**Module:** `SandBox`  
**Type:** `public class WorkshopMissionHandler : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs`

## Overview

`WorkshopMissionHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `WorkshopMissionHandler`.
- **Instance members** (3): `OnBehaviorInitialize`, `EarlyStart`, `AfterStart`.
- **Extension points** (3): `OnBehaviorInitialize`, `EarlyStart`, `AfterStart`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `EarlyStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnBehaviorInitialize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `WorkshopMissionHandler` | ctor | Instance entry point. Takes 1 argument: `Settlement settlement`. Returns ``. |

- Constructed as `public WorkshopMissionHandler(Settlement settlement)`.

## Usage Example

```csharp
var workshopMissionHandler = new WorkshopMissionHandler(settlement);
workshopMissionHandler.OnBehaviorInitialize();
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Missions/MissionLogics/Towns/WorkshopMissionHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Workshop](../../campaign/Workshop/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.
- [WorkshopAreaMarker](../WorkshopAreaMarker/) — `SandBox.Objects.AreaMarkers`.
- [Town](../../campaign/Town/) — `TaleWorlds.CampaignSystem.Settlements`.
- [WorkshopType](../../campaign/WorkshopType/) — `TaleWorlds.CampaignSystem.Settlements.Workshops`.

Section: [api/sandbox/](../) — the other types in this bucket.
