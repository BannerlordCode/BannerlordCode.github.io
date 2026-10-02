---
title: "MessageServiceConnection"
description: "MessageServiceConnection 的自动生成类参考。"
---
# MessageServiceConnection

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class MessageServiceConnection `
**Base:** System.Object
**Source:** TaleWorlds.Network/MessageServiceConnection.cs

## 概述

`MessageServiceConnection` 的自动生成类参考页面。声明来自 `TaleWorlds.Network/MessageServiceConnection.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

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
`protected void InvokeClosed() `

### InvokeStateChanged
`protected void InvokeStateChanged(ConnectionState oldState,ConnectionState newState) `

### ClosedDelegate
`public delegate Task ClosedDelegate()`

### StateChangedDelegate
`public delegate void StateChangedDelegate(ConnectionState oldState,ConnectionState newState)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
