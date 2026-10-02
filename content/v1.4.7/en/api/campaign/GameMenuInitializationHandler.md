---
title: "GameMenuInitializationHandler"
description: "GameMenuInitializationHandler — class in TaleWorlds.CampaignSystem.GameMenus. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# GameMenuInitializationHandler

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class GameMenuInitializationHandler : Attribute`  
**Base:** `Attribute`  
**Source:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs`

## Overview

`GameMenuInitializationHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends Attribute, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameMenuInitializationHandler`.
- **Instance members** (1): `MenuId`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `MenuId` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `GameMenuInitializationHandler` | ctor | Instance entry point. Takes 1 argument: `string menuId`. Returns ``. |

- Constructed as `public GameMenuInitializationHandler(string menuId)`.

## Usage Example

```csharp
var gameMenuInitializationHandler = new GameMenuInitializationHandler(menuId);
// Read current state through gameMenuInitializationHandler.MenuId.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- The declaration in `TaleWorlds.CampaignSystem/GameMenus/GameMenuInitializationHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/campaign/](../) — the other types in this bucket.
