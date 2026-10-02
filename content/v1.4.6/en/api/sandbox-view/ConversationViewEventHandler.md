---
title: "ConversationViewEventHandler"
description: "ConversationViewEventHandler: a public class in SandBox.View, inheriting Attribute; 5 exposed members (0 methods, 3 properties, 0 fields). Source: SandBox.View/Conversation/ConversationViewEventHandler.cs."
---
# ConversationViewEventHandler

**Namespace:** `SandBox.View.Conversation`
**Module:** `SandBox.View`
**Type:** `public class ConversationViewEventHandler : Attribute`
**File:** `SandBox.View/Conversation/ConversationViewEventHandler.cs`

## Overview

ConversationViewEventHandler lives in the SandBox.View module, source file SandBox.View/Conversation/ConversationViewEventHandler.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is ConversationViewEventHandler → Attribute. It exposes 5 public/protected members: 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationViewEventHandler is a top-level type in SandBox.View, namespace differing from (SandBox.View.Conversation) the module directory; inheritance chain ConversationViewEventHandler → Attribute. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. Attribute on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Conversation/ConversationViewEventHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public string Id` | property |
| `Type` | `public ConversationViewEventHandler.EventType Type` | property |
| `ConversationViewEventHandler` | `public ConversationViewEventHandler(string id, ConversationViewEventHandler.EventType type)` | constructor |
| `EventType` | `public enum EventType` | property |
| `EventType` | `public enum EventType` | nested type |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConversationViewEventHandlerDelegate](../ConversationViewEventHandlerDelegate)
- [same namespace ConversationViewManager](../ConversationViewManager)
