---
title: "ClientWebSocketHandler"
description: "ClientWebSocketHandler 的自动生成类参考。"
---
# ClientWebSocketHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ClientWebSocketHandler `
**Base:** System.Object
**Source:** TaleWorlds.Network/ClientWebSocketHandler.cs

## 概述

`ClientWebSocketHandler` 的自动生成类参考页面。声明来自 `TaleWorlds.Network/ClientWebSocketHandler.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Connect
`public async Task Connect(string uri,string token,List<KeyValuePair<string,string>> headers = null) `

### Disconnect
`public async Task Disconnect(string reason,bool onDisconnectCommand) `

### SendTextMessage
`public void SendTextMessage(string postBoxId,string text) `

### MessageReceivedDelegate
`public delegate void MessageReceivedDelegate(WebSocketMessage message,ClientWebSocketHandler socket)`

### OnErrorDelegate
`public delegate void OnErrorDelegate(ClientWebSocketHandler sender,Exception ex)`

### DisconnectedDelegate
`public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender,bool onDisconnectCommand)`

### ConnectedDelegate
`public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
