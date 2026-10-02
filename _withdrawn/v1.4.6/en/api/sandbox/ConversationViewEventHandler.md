---
title: "ConversationViewEventHandler"
description: "ConversationViewEventHandler: a public class in SandBox.View.Conversation, inheriting Attribute; 5 exposed members (0 methods, 3 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.View/Conversation/ConversationViewEventHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ConversationViewEventHandler

**Namespace:** `SandBox.View.Conversation`
**Module:** `SandBox.View`
**Type:** `public class ConversationViewEventHandler : Attribute`
**File:** `SandBox.View/Conversation/ConversationViewEventHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ConversationViewEventHandler lives in the SandBox.View module, source file SandBox.View/Conversation/ConversationViewEventHandler.cs. It is a public class, implementing/inheriting Attribute; the inheritance chain is ConversationViewEventHandler → Attribute. It exposes 5 public/protected members: 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationViewEventHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.View.Conversation`, inheritance chain ConversationViewEventHandler → Attribute. The surface is property-led (properties 3/5, methods 0/5), so it mostly exposes state for reading. Attribute on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/Conversation/ConversationViewEventHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Id` | `public string Id` | property |
| `Type` | `public ConversationViewEventHandler.EventType Type` | property |
| `ConversationViewEventHandler` | `public ConversationViewEventHandler(string id, ConversationViewEventHandler.EventType type)` | constructor |
| `EventType` | `public enum EventType` | property |
| `EventType` | `public enum EventType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ConversationViewEventHandlerDelegate](../ConversationViewEventHandlerDelegate/)
- [same namespace ConversationViewManager](../ConversationViewManager/)
