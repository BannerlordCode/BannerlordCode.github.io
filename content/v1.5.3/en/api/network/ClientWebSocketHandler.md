---
title: "ClientWebSocketHandler"
description: "Auto-generated class reference for ClientWebSocketHandler."
---
# ClientWebSocketHandler

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ClientWebSocketHandler `
**Base:** System.Object
**Source:** TaleWorlds.Network/ClientWebSocketHandler.cs

## Overview

Auto-generated stub for `ClientWebSocketHandler`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Connect
`public async Task Connect(string uri,string token,List<KeyValuePair<string,string>> headers = null)`

### Disconnect
`public async Task Disconnect(string reason,bool onDisconnectCommand)`

### SendTextMessage
`public void SendTextMessage(string postBoxId,string text)`

### MessageReceivedDelegate
`public delegate void MessageReceivedDelegate(WebSocketMessage message,ClientWebSocketHandler socket)`

### OnErrorDelegate
`public delegate void OnErrorDelegate(ClientWebSocketHandler sender,Exception ex)`

### DisconnectedDelegate
`public delegate Task DisconnectedDelegate(ClientWebSocketHandler sender,bool onDisconnectCommand)`

### ConnectedDelegate
`public delegate Task ConnectedDelegate(ClientWebSocketHandler sender)`

## See Also

- [Section index](../)
