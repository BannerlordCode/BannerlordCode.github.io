---
title: "ConversationViewEventHandler"
description: "Auto-generated class reference for ConversationViewEventHandler."
---
# ConversationViewEventHandler

**Namespace:** SandBox.View.Conversation
**Module:** SandBox.View
**Type:** `public class ConversationViewEventHandler : Attribute`
**Base:** `Attribute`
**File:** `SandBox.View/Conversation/ConversationViewEventHandler.cs`

## Overview

`ConversationViewEventHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ConversationViewEventHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `Type` | `public ConversationViewEventHandler.EventType Type { get; }` |

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<ConversationViewEventHandler>();
```

## See Also

- [Area Index](../)