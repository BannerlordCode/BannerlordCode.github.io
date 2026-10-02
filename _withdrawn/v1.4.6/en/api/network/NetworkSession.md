---
title: "NetworkSession"
description: "NetworkSession: a public class in TaleWorlds.Network; 18 exposed members (11 methods, 4 properties, 1 fields). Canonical bucket network. Source: TaleWorlds.Network/NetworkSession.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NetworkSession

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class NetworkSession`
**File:** `TaleWorlds.Network/NetworkSession.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

NetworkSession lives in the TaleWorlds.Network module, source file TaleWorlds.Network/NetworkSession.cs. It is a public class (abstract); the inheritance chain is NetworkSession. It exposes 18 public/protected members: 11 methods, 4 properties, 1 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NetworkSession lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain NetworkSession. The surface is method-led (methods 11/18, properties 4/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/NetworkSession.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NetworkSession` | `protected NetworkSession()` | constructor |
| `SendDisconnectMessage` | `public void SendDisconnectMessage()` | method |
| `OnConnected` | `protected internal virtual void OnConnected()` | method |
| `OnSocketSet` | `protected internal virtual void OnSocketSet()` | method |
| `OnDisconnected` | `protected internal virtual void OnDisconnected()` | method |
| `OnCantConnect` | `protected internal virtual void OnCantConnect()` | method |
| `OnMessageReceived` | `protected internal virtual void OnMessageReceived(INetworkMessageReader networkMessage)` | method |
| `Tick` | `public virtual void Tick()` | method |
| `AddMessageHandler` | `public void AddMessageHandler<T>(MessageContractHandlerDelegate<T>handler) where T : MessageContract` | method |
| `SendMessage` | `public void SendMessage(MessageContract message)` | method |
| `SendPlainMessage` | `protected void SendPlainMessage(MessageContract message)` | method |
| `IsActive` | `public bool IsActive` | property |
| `Address` | `public string Address` | property |
| `LastMessageSentTime` | `public int LastMessageSentTime` | property |
| `IsConnected` | `public bool IsConnected` | property |
| `AliveMessageIntervalInSecs` | `public const double AliveMessageIntervalInSecs` | field |
| `ComponentMessageHandlerDelegate` | `public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage);` | method |
| `ComponentMessageHandlerDelegate` | `public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
