<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClientWebSocketHandler`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClientWebSocketHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ClientWebSocketHandler` is a class in the `TaleWorlds.Network` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsConnected` | `public bool IsConnected { get; }` |


## Key Methods

### Connect

```csharp
public Task Connect(string uri, string token, List<KeyValuePair<string, string>> headers = null)
```

### Disconnect

```csharp
public Task Disconnect(string reason, bool onDisconnectCommand)
```

### SendTextMessage

```csharp
public void SendTextMessage(string postBoxId, string text)
```

### MessageReceivedDelegate

```csharp
public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket)
```

### OnErrorDelegate

```csharp
public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex)
```

### DisconnectedDelegate

```csharp
public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand)
```

### ConnectedDelegate

```csharp
public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)