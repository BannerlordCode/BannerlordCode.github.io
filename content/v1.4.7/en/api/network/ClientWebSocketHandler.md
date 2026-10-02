---
title: "ClientWebSocketHandler"
description: "ClientWebSocketHandler — class in TaleWorlds.Network. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# ClientWebSocketHandler

**Namespace:** `TaleWorlds.Network`  
**Module:** `TaleWorlds.Network`  
**Type:** `public class ClientWebSocketHandler`  
**Source:** `TaleWorlds.Network/ClientWebSocketHandler.cs`

## Overview

`ClientWebSocketHandler` is a handler or listener: it receives a notification from a publisher, filters or adapts it, and forwards it. The data it reacts to is owned by the publisher.

## Mental Model

Read a handler as a filter sitting between a publisher and its consumers. Keep the adaptation logic here and the decision logic in the system that owns the state, so the same notification can feed several consumers without being copied.

Registration is the fragile part: subscribe exactly once, unsubscribe when the owning object dies, and assume the publisher does not check whether anyone is listening.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ClientWebSocketHandler`.
- **Instance members** (8): `IsConnected`, `Connect`, `Disconnect`, `SendTextMessage`, `MessageReceivedDelegate`, `OnErrorDelegate`, ….
- **Data and constants** (4): `MessageReceived`, `OnError`, `Disconnected`, `Connected`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Connect` | method | Instance entry point. Takes 4 arguments: `string uri`, `string token`, `List<KeyValuePair<string`, `string>> headers`. Returns `Task`. |
| `ConnectedDelegate` | method | Instance entry point. Takes 1 argument: `ClientWebSocketHandler sender`. Returns `delegate Task`. |
| `Disconnect` | method | Instance entry point. Takes 2 arguments: `string reason`, `bool onDisconnectCommand`. Returns `Task`. |
| `DisconnectedDelegate` | method | Instance entry point. Takes 2 arguments: `ClientWebSocketHandler sender`, `bool onDisconnectCommand`. Returns `delegate Task`. |
| `IsConnected` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MessageReceivedDelegate` | method | Instance entry point. Takes 2 arguments: `WebSocketMessage message`, `ClientWebSocketHandler socket`. Returns `delegate void`. |
| `OnErrorDelegate` | method | Instance entry point. Takes 2 arguments: `ClientWebSocketHandler sender`, `Exception ex`. Returns `delegate void`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SendTextMessage` | method | Instance entry point. Takes 2 arguments: `string postBoxId`, `string text`. |
| `ClientWebSocketHandler` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `Connected` | field | Instance entry point `ClientWebSocketHandler.ConnectedDelegate` field — direct storage with no validation or notification. |
| `Disconnected` | field | Instance entry point `ClientWebSocketHandler.DisconnectedDelegate` field — direct storage with no validation or notification. |
| `MessageReceived` | field | Instance entry point `ClientWebSocketHandler.MessageReceivedDelegate` field — direct storage with no validation or notification. |
| `OnError` | field | Instance entry point `ClientWebSocketHandler.OnErrorDelegate` field — direct storage with no validation or notification. |

- Constructed as `public ClientWebSocketHandler()`.

## Usage Example

```csharp
var clientWebSocketHandler = new ClientWebSocketHandler();
clientWebSocketHandler.Connect(uri, token, theTarget, headers);
// Read current state through clientWebSocketHandler.IsConnected.
```

## Risks and Boundaries

- Missing unsubscribe is the dominant leak in this pattern.
- Handlers run inside the publisher’s call stack, so long or throwing handlers affect the publisher.
- Notifications can arrive during load, teardown and screen changes, when the referenced state does not exist yet.
- The declaration in `TaleWorlds.Network/ClientWebSocketHandler.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MessageType](../../engine/MessageType/) — `TaleWorlds.Diamond.Rest`.

Section: [api/network/](../) — the other types in this bucket.
