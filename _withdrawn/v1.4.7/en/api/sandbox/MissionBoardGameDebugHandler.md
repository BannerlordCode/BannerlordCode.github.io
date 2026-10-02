---
title: "MissionBoardGameDebugHandler"
description: "MissionBoardGameDebugHandler — class in SandBox.BoardGames.MissionLogics. No public members of its own."
---

<!-- v147-skeleton -->
# MissionBoardGameDebugHandler

**Namespace:** `SandBox.BoardGames.MissionLogics`  
**Module:** `SandBox`  
**Type:** `public class MissionBoardGameDebugHandler : MissionLogic`  
**Base:** `MissionLogic`  
**Source:** `SandBox/BoardGames/MissionLogics/MissionBoardGameDebugHandler.cs`

## Overview

`MissionBoardGameDebugHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends MissionLogic, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- The type contributes no public members of its own; everything you use comes from the members it inherits or from the code that owns it.

## Key Members

No public members are declared on MissionBoardGameDebugHandler itself in `SandBox.BoardGames.MissionLogics`; consumers use it through the subsystem that owns it.
## Usage Example

```csharp
// MissionBoardGameDebugHandler exposes no public members in SandBox.BoardGames.MissionLogics.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- The declaration in `SandBox/BoardGames/MissionLogics/MissionBoardGameDebugHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
