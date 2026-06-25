---
title: "ClientWebSocketHandler"
description: "Auto-generated class reference for ClientWebSocketHandler."
---
# ClientWebSocketHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ClientWebSocketHandler`
**Base:** none
**File:** `TaleWorlds.Network/ClientWebSocketHandler.cs`

## Overview

`ClientWebSocketHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `ClientWebSocketHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsConnected` | `public bool IsConnected { get; }` |

## Key Methods

### Connect
`public Task Connect(string uri, string token, List<KeyValuePair<string, string>> headers = null)`

**Purpose:** Executes the Connect logic.

```csharp
// Obtain an instance of ClientWebSocketHandler from the subsystem API first
ClientWebSocketHandler clientWebSocketHandler = ...;
var result = clientWebSocketHandler.Connect("example", "example", list<KeyValuePair<string, "example");
```

### Disconnect
`public Task Disconnect(string reason, bool onDisconnectCommand)`

**Purpose:** Executes the Disconnect logic.

```csharp
// Obtain an instance of ClientWebSocketHandler from the subsystem API first
ClientWebSocketHandler clientWebSocketHandler = ...;
var result = clientWebSocketHandler.Disconnect("example", false);
```

### SendTextMessage
`public void SendTextMessage(string postBoxId, string text)`

**Purpose:** Executes the SendTextMessage logic.

```csharp
// Obtain an instance of ClientWebSocketHandler from the subsystem API first
ClientWebSocketHandler clientWebSocketHandler = ...;
clientWebSocketHandler.SendTextMessage("example", "example");
```

### MessageReceivedDelegate
`public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket)`

**Purpose:** Executes the MessageReceivedDelegate logic.

```csharp
// Obtain an instance of ClientWebSocketHandler from the subsystem API first
ClientWebSocketHandler clientWebSocketHandler = ...;
clientWebSocketHandler.MessageReceivedDelegate(message, socket);
```

### OnErrorDelegate
`public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex)`

**Purpose:** Invoked when the error delegate event is raised.

```csharp
// Obtain an instance of ClientWebSocketHandler from the subsystem API first
ClientWebSocketHandler clientWebSocketHandler = ...;
clientWebSocketHandler.OnErrorDelegate(sender, ex);
```

### DisconnectedDelegate
`public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand)`

**Purpose:** Executes the DisconnectedDelegate logic.

```csharp
// Obtain an instance of ClientWebSocketHandler from the subsystem API first
ClientWebSocketHandler clientWebSocketHandler = ...;
var result = clientWebSocketHandler.DisconnectedDelegate(sender, false);
```

### ConnectedDelegate
`public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)`

**Purpose:** Executes the ConnectedDelegate logic.

```csharp
// Obtain an instance of ClientWebSocketHandler from the subsystem API first
ClientWebSocketHandler clientWebSocketHandler = ...;
var result = clientWebSocketHandler.ConnectedDelegate(sender);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<ClientWebSocketHandler>();
```

## See Also

- [Area Index](../)