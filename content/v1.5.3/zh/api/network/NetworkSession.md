---
title: "NetworkSession"
description: "NetworkSession 的自动生成类参考。"
---
# NetworkSession

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public abstract class NetworkSession `
**Base:** System.Object
**Source:** TaleWorlds.Network/NetworkSession.cs

## 概述

`NetworkSession` 的自动生成类参考页面。声明来自 `TaleWorlds.Network/NetworkSession.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SendDisconnectMessage
`public void SendDisconnectMessage() `

### OnConnected
`protected internal virtual void OnConnected() `

### OnSocketSet
`protected internal virtual void OnSocketSet() `

### OnDisconnected
`protected internal virtual void OnDisconnected() `

### OnCantConnect
`protected internal virtual void OnCantConnect() `

### OnMessageReceived
`protected internal virtual void OnMessageReceived(INetworkMessageReader networkMessage) `

### Tick
`public virtual void Tick() `

### SendMessage
`public void SendMessage(MessageContract message) `

### SendPlainMessage
`protected void SendPlainMessage(MessageContract message) `

### ComponentMessageHandlerDelegate
`public delegate void ComponentMessageHandlerDelegate(NetworkMessage networkMessage)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
