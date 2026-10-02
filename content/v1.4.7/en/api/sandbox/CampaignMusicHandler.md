---
title: "CampaignMusicHandler"
description: "CampaignMusicHandler — class in SandBox.View. 1 public member (1 static)."
---

<!-- v147-skeleton -->
# CampaignMusicHandler

**Namespace:** `SandBox.View`  
**Module:** `SandBox.View`  
**Type:** `public class CampaignMusicHandler : IMusicHandler`  
**Base:** `IMusicHandler`  
**Source:** `SandBox.View/CampaignMusicHandler.cs`

## Overview

`CampaignMusicHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends IMusicHandler, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `Create`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Create` | method (static) | Static entry point. Takes no arguments. |

## Usage Example

```csharp
// Static entry points on CampaignMusicHandler:
CampaignMusicHandler.Create();
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- The declaration in `SandBox.View/CampaignMusicHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/sandbox/](../) — the other types in this bucket.
