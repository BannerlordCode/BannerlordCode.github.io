<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClientWebSocketHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClientWebSocketHandler

**命名空间:** TaleWorlds.Network
**模块:** TaleWorlds.Network
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClientWebSocketHandler` 是 `TaleWorlds.Network` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsConnected` | `public bool IsConnected { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)