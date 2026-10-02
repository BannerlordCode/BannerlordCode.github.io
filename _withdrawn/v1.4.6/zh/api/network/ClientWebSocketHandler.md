---
title: "ClientWebSocketHandler"
description: "ClientWebSocketHandler：TaleWorlds.Network 的 public 类；公开成员 17 个（方法 7、属性 1、字段 0）。canonical 桶 network。源文件 TaleWorlds.Network/ClientWebSocketHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClientWebSocketHandler

**Namespace:** `TaleWorlds.Network`
**Module:** `TaleWorlds.Network`
**Type:** `public class ClientWebSocketHandler`
**File:** `TaleWorlds.Network/ClientWebSocketHandler.cs`
**Bucket:** `network` (rule:TaleWorlds.Network)

## 概述

ClientWebSocketHandler 位于 TaleWorlds.Network 模块，源文件 TaleWorlds.Network/ClientWebSocketHandler.cs。它是一个 public 类，继承链为 ClientWebSocketHandler。public/protected 成员共 17 个：7 方法、1 属性、4 事件、1 构造函数、4 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ClientWebSocketHandler 落在 canonical 桶 `network`（命中规则 `rule:TaleWorlds.Network`），命名空间 `TaleWorlds.Network`，继承链 ClientWebSocketHandler。成员构成以方法为主（方法 7/17，属性 1/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Network/ClientWebSocketHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MessageReceived;` | `public event ClientWebSocketHandler.MessageReceivedDelegate MessageReceived;` | 事件 |
| `IsConnected` | `public bool IsConnected` | 属性 |
| `OnError;` | `public event ClientWebSocketHandler.OnErrorDelegate OnError;` | 事件 |
| `Disconnected;` | `public event ClientWebSocketHandler.DisconnectedDelegate Disconnected;` | 事件 |
| `Connected;` | `public event ClientWebSocketHandler.ConnectedDelegate Connected;` | 事件 |
| `ClientWebSocketHandler` | `public ClientWebSocketHandler()` | 构造函数 |
| `Connect` | `public async Task Connect(string uri, string token, List<KeyValuePair<string, string>>headers = null)` | 方法 |
| `Disconnect` | `public async Task Disconnect(string reason, bool onDisconnectCommand)` | 方法 |
| `SendTextMessage` | `public void SendTextMessage(string postBoxId, string text)` | 方法 |
| `MessageReceivedDelegate` | `public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket);` | 方法 |
| `OnErrorDelegate` | `public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex);` | 方法 |
| `DisconnectedDelegate` | `public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand);` | 方法 |
| `ConnectedDelegate` | `public delegate Task ConnectedDelegate(ClientWebSocketHandler sender);` | 方法 |
| `MessageReceivedDelegate` | `public delegate void MessageReceivedDelegate(WebSocketMessage message, ClientWebSocketHandler socket)` | 嵌套类型 |
| `OnErrorDelegate` | `public delegate void OnErrorDelegate(ClientWebSocketHandler sender, Exception ex)` | 嵌套类型 |
| `DisconnectedDelegate` | `public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender, bool onDisconnectCommand)` | 嵌套类型 |
| `ConnectedDelegate` | `public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Authorize](../Authorize/)
- [同命名空间 ClientsideSession](../ClientsideSession/)
- [同命名空间 ConnectionState](../ConnectionState/)
- [同命名空间 Coroutine](../Coroutine/)
