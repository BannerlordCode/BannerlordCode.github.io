---
title: "SocketMessage"
description: "SocketMessage: a public class in TaleWorlds.Diamond.Socket, inheriting MessageContract; 5 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket engine. Source: TaleWorlds.Diamond/Socket/SocketMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SocketMessage

**Namespace:** `TaleWorlds.Diamond.Socket`
**Module:** `TaleWorlds.Diamond`
**Type:** `public class SocketMessage : MessageContract`
**File:** `TaleWorlds.Diamond/Socket/SocketMessage.cs`
**Bucket:** `engine` (rule:TaleWorlds.Diamond)

## Overview

SocketMessage lives in the TaleWorlds.Diamond module, source file TaleWorlds.Diamond/Socket/SocketMessage.cs. It is a public class, implementing/inheriting MessageContract; the inheritance chain is SocketMessage → MessageContract. It exposes 5 public/protected members: 2 methods, 1 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SocketMessage lands in canonical bucket `engine` (matched rule `rule:TaleWorlds.Diamond`), namespace `TaleWorlds.Diamond.Socket`, inheritance chain SocketMessage → MessageContract. The surface is method-led (methods 2/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Diamond/Socket/SocketMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Message` | `public Message Message` | property |
| `SocketMessage` | `public SocketMessage()` | constructor |
| `SocketMessage` | `public SocketMessage(Message message)` | constructor |
| `SerializeToNetworkMessage` | `public override void SerializeToNetworkMessage(INetworkMessageWriter networkMessage)` | method |
| `DeserializeFromNetworkMessage` | `public override void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MessageContract](../../network/MessageContract/)
- [same namespace ClientSocketSession](../ClientSocketSession/)
