---
title: "MessageServiceConnection"
description: "Auto-generated class reference for MessageServiceConnection."
---
# MessageServiceConnection

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageServiceConnection `
**Base:** System.Object
**Source:** TaleWorlds.Network/MessageServiceConnection.cs

## Overview

Auto-generated stub for `MessageServiceConnection`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### SendAsync
`public abstract Task SendAsync(string text)`

### Init
`public abstract void Init(string address,string token)`

### RegisterProxyClient
`public abstract void RegisterProxyClient(string name,IMessageProxyClient playerClient)`

### StartAsync
`public abstract Task StartAsync()`

### StopAsync
`public abstract Task StopAsync()`

### InvokeClosed
`protected void InvokeClosed()`

### InvokeStateChanged
`protected void InvokeStateChanged(ConnectionState oldState,ConnectionState newState)`

### ClosedDelegate
`public delegate Task ClosedDelegate()`

### StateChangedDelegate
`public delegate void StateChangedDelegate(ConnectionState oldState,ConnectionState newState)`

## See Also

- [Section index](../)
