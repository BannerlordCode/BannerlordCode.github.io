<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClientWebSocketHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ClientWebSocketHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ClientWebSocketHandler`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/ClientWebSocketHandler.cs`

## 概述

`ClientWebSocketHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `ClientWebSocketHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MessageReceivedDelegate
`public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket)`

**用途 / Purpose:** 处理 `message received delegate` 相关逻辑。

### OnErrorDelegate
`public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex)`

**用途 / Purpose:** 当 `error delegate` 事件触发时调用此方法。

### DisconnectedDelegate
`public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand)`

**用途 / Purpose:** 处理 `disconnected delegate` 相关逻辑。

### ConnectedDelegate
`public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)`

**用途 / Purpose:** 处理 `connected delegate` 相关逻辑。

### Connect
`public async Task Connect(string uri, string token, List<KeyValuePair<string, string>> headers = null)`

**用途 / Purpose:** 处理 `connect` 相关逻辑。

### Disconnect
`public async Task Disconnect(string reason, bool onDisconnectCommand)`

**用途 / Purpose:** 处理 `disconnect` 相关逻辑。

### SendTextMessage
`public void SendTextMessage(string postBoxId, string text)`

**用途 / Purpose:** 处理 `send text message` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new ClientWebSocketHandler());
```

## 参见

- [完整类目录](../catalog)