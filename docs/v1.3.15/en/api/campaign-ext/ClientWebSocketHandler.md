<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClientWebSocketHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `connect`.

### Disconnect
`public Task Disconnect(string reason, bool onDisconnectCommand)`

**Purpose:** Handles logic related to `disconnect`.

### SendTextMessage
`public void SendTextMessage(string postBoxId, string text)`

**Purpose:** Handles logic related to `send text message`.

### MessageReceivedDelegate
`public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket)`

**Purpose:** Handles logic related to `message received delegate`.

### OnErrorDelegate
`public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex)`

**Purpose:** Called when the `error delegate` event is raised.

### DisconnectedDelegate
`public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand)`

**Purpose:** Handles logic related to `disconnected delegate`.

### ConnectedDelegate
`public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)`

**Purpose:** Handles logic related to `connected delegate`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new ClientWebSocketHandler());
```

## See Also

- [Complete Class Catalog](../catalog)