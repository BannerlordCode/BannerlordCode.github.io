---
title: "MessageContract"
description: "MessageContract: a public class in TaleWorlds.Network; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/MessageContract.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MessageContract

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class MessageContract`
**File:** `TaleWorlds.Network/MessageContract.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

MessageContract lives in the TaleWorlds.Network module, source file TaleWorlds.Network/MessageContract.cs. It is a public class (abstract); the inheritance chain is MessageContract. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MessageContract lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain MessageContract. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/MessageContract.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MessageId` | `public byte MessageId` | property |
| `MessageContract` | `protected MessageContract()` | constructor |
| `CreateMessageContract` | `public static MessageContract CreateMessageContract(Type messageContractType)` | method |
| `SerializeToNetworkMessage` | `public abstract void SerializeToNetworkMessage(INetworkMessageWriter networkMessage);` | method |
| `DeserializeFromNetworkMessage` | `public abstract void DeserializeFromNetworkMessage(INetworkMessageReader networkMessage);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
