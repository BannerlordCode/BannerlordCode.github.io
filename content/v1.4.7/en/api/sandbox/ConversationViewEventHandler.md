---
title: "ConversationViewEventHandler"
description: "ConversationViewEventHandler — class in SandBox.View.Conversation. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# ConversationViewEventHandler

**Namespace:** `SandBox.View.Conversation`  
**Module:** `SandBox.View`  
**Type:** `public class ConversationViewEventHandler : Attribute`  
**Base:** `Attribute`  
**Source:** `SandBox.View/Conversation/ConversationViewEventHandler.cs`

## Overview

`ConversationViewEventHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

It extends Attribute, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ConversationViewEventHandler`.
- **Instance members** (3): `Id`, `Type`, `EventType`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `EventType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `Id` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `ConversationViewEventHandler.EventType` property. Read it for current state; a declared setter writes that state in place. |
| `ConversationViewEventHandler` | ctor | Instance entry point. Takes 2 arguments: `string id`, `ConversationViewEventHandler.EventType type`. Returns ``. |

- Constructed as `public ConversationViewEventHandler(string id, ConversationViewEventHandler.EventType type)`.

## Usage Example

```csharp
var conversationViewEventHandler = new ConversationViewEventHandler(id, type);
// Read current state through conversationViewEventHandler.Id.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- The declaration in `SandBox.View/Conversation/ConversationViewEventHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
