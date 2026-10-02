---
title: "ConversationViewManager"
description: "ConversationViewManager — class in SandBox.View.Conversation. 2 public members (1 static)."
---

<!-- v147-skeleton -->
# ConversationViewManager

**Namespace:** `SandBox.View.Conversation`  
**Module:** `SandBox.View`  
**Type:** `public class ConversationViewManager`  
**Source:** `SandBox.View/Conversation/ConversationViewManager.cs`

## Overview

`ConversationViewManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ConversationViewManager`.
- **Static entry points** (1): `Instance`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Instance` | property (static) | Static entry point `ConversationViewManager` property. Read it for current state; a declared setter writes that state in place. |
| `ConversationViewManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public ConversationViewManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var conversationViewManager = ConversationViewManager.Instance;
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `SandBox.View/Conversation/ConversationViewManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SandBoxViewSubModule](../SandBoxViewSubModule/) — `SandBox.View`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [ConversationViewEventHandlerDelegate](../ConversationViewEventHandlerDelegate/) — `SandBox.View.Conversation`.
- [ConversationViewEventHandler](../ConversationViewEventHandler/) — `SandBox.View.Conversation`.

Section: [api/sandbox/](../) — the other types in this bucket.
