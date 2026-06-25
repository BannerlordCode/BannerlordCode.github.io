---
title: "ClientWebSocketHandler"
description: "ClientWebSocketHandler 的自动生成类参考。"
---
# ClientWebSocketHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ClientWebSocketHandler`
**Base:** 无
**File:** `bin/TaleWorlds.Network/TaleWorlds.Network/ClientWebSocketHandler.cs`

## 概述

`ClientWebSocketHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `ClientWebSocketHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### MessageReceivedDelegate
`public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClientWebSocketHandler 实例
ClientWebSocketHandler clientWebSocketHandler = ...;
clientWebSocketHandler.MessageReceivedDelegate(message, socket);
```

### OnErrorDelegate
`public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex)`

**用途 / Purpose:** 在 「error delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ClientWebSocketHandler 实例
ClientWebSocketHandler clientWebSocketHandler = ...;
clientWebSocketHandler.OnErrorDelegate(sender, ex);
```

### DisconnectedDelegate
`public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClientWebSocketHandler 实例
ClientWebSocketHandler clientWebSocketHandler = ...;
var result = clientWebSocketHandler.DisconnectedDelegate(sender, false);
```

### ConnectedDelegate
`public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClientWebSocketHandler 实例
ClientWebSocketHandler clientWebSocketHandler = ...;
var result = clientWebSocketHandler.ConnectedDelegate(sender);
```

### Connect
`public async Task Connect(string uri, string token, List<KeyValuePair<string, string>> headers = null)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClientWebSocketHandler 实例
ClientWebSocketHandler clientWebSocketHandler = ...;
var result = clientWebSocketHandler.Connect("example", "example", list<KeyValuePair<string, "example");
```

### Disconnect
`public async Task Disconnect(string reason, bool onDisconnectCommand)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClientWebSocketHandler 实例
ClientWebSocketHandler clientWebSocketHandler = ...;
var result = clientWebSocketHandler.Disconnect("example", false);
```

### SendTextMessage
`public void SendTextMessage(string postBoxId, string text)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 ClientWebSocketHandler 实例
ClientWebSocketHandler clientWebSocketHandler = ...;
clientWebSocketHandler.SendTextMessage("example", "example");
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<ClientWebSocketHandler>();
```

## 参见

- [本区域目录](../)