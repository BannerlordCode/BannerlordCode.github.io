---
title: "MessageServiceConnection"
description: "MessageServiceConnection: a public class in TaleWorlds.Network; 15 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/MessageServiceConnection.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MessageServiceConnection

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public abstract class MessageServiceConnection`
**File:** `TaleWorlds.Network/MessageServiceConnection.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

MessageServiceConnection lives in the TaleWorlds.Network module, source file TaleWorlds.Network/MessageServiceConnection.cs. It is a public class (abstract); the inheritance chain is MessageServiceConnection. It exposes 15 public/protected members: 9 methods, 1 properties, 2 events, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MessageServiceConnection lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain MessageServiceConnection. The surface is method-led (methods 9/15, properties 1/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/MessageServiceConnection.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MessageServiceConnection` | `public MessageServiceConnection()` | constructor |
| `SendAsync` | `public abstract Task SendAsync(string text);` | method |
| `Init` | `public abstract void Init(string address, string token);` | method |
| `Address` | `public string Address` | property |
| `Closed;` | `public event MessageServiceConnection.ClosedDelegate Closed;` | event |
| `StateChanged;` | `public event MessageServiceConnection.StateChangedDelegate StateChanged;` | event |
| `RegisterProxyClient` | `public abstract void RegisterProxyClient(string name, IMessageProxyClient playerClient);` | method |
| `StartAsync` | `public abstract Task StartAsync();` | method |
| `StopAsync` | `public abstract Task StopAsync();` | method |
| `InvokeClosed` | `protected void InvokeClosed()` | method |
| `InvokeStateChanged` | `protected void InvokeStateChanged(ConnectionState oldState, ConnectionState newState)` | method |
| `ClosedDelegate` | `public delegate Task ClosedDelegate();` | method |
| `StateChangedDelegate` | `public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState);` | method |
| `ClosedDelegate` | `public delegate Task ClosedDelegate()` | nested type |
| `StateChangedDelegate` | `public delegate void StateChangedDelegate(ConnectionState oldState, ConnectionState newState)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ClientWebSocketHandler](../ClientWebSocketHandler/)
- [same namespace ConnectionState](../ConnectionState/)
