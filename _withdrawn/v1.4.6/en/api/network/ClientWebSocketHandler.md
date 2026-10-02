---
title: "ClientWebSocketHandler"
description: "ClientWebSocketHandler: a public class in TaleWorlds.Network; 17 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket network. Source: TaleWorlds.Network/ClientWebSocketHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClientWebSocketHandler

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class ClientWebSocketHandler`
**File:** `TaleWorlds.Network/ClientWebSocketHandler.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## Overview

ClientWebSocketHandler lives in the TaleWorlds.Network module, source file TaleWorlds.Network/ClientWebSocketHandler.cs. It is a public class; the inheritance chain is ClientWebSocketHandler. It exposes 17 public/protected members: 7 methods, 1 properties, 4 events, 1 constructors, 4 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClientWebSocketHandler lands in canonical bucket `network` (matched rule `rule:TaleWorlds.Network`), namespace `TaleWorlds.Network`, inheritance chain ClientWebSocketHandler. The surface is method-led (methods 7/17, properties 1/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Network/ClientWebSocketHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MessageReceived;` | `public event ClientWebSocketHandler.MessageReceivedDelegate MessageReceived;` | event |
| `IsConnected` | `public bool IsConnected` | property |
| `OnError;` | `public event ClientWebSocketHandler.OnErrorDelegate OnError;` | event |
| `Disconnected;` | `public event ClientWebSocketHandler.DisconnectedDelegate Disconnected;` | event |
| `Connected;` | `public event ClientWebSocketHandler.ConnectedDelegate Connected;` | event |
| `ClientWebSocketHandler` | `public ClientWebSocketHandler()` | constructor |
| `Connect` | `public async Task Connect(string uri, string token, List<KeyValuePair<string, string>>headers = null)` | method |
| `Disconnect` | `public async Task Disconnect(string reason, bool onDisconnectCommand)` | method |
| `SendTextMessage` | `public void SendTextMessage(string postBoxId, string text)` | method |
| `MessageReceivedDelegate` | `public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket);` | method |
| `OnErrorDelegate` | `public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex);` | method |
| `DisconnectedDelegate` | `public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand);` | method |
| `ConnectedDelegate` | `public delegate Task ConnectedDelegate(ClientWebSocketHandler sender);` | method |
| `MessageReceivedDelegate` | `public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket)` | nested type |
| `OnErrorDelegate` | `public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex)` | nested type |
| `DisconnectedDelegate` | `public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand)` | nested type |
| `ConnectedDelegate` | `public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Authorize](../Authorize/)
- [same namespace ClientsideSession](../ClientsideSession/)
- [same namespace ConnectionState](../ConnectionState/)
- [same namespace Coroutine](../Coroutine/)
