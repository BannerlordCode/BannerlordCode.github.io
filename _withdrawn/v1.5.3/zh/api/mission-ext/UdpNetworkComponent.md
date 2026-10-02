---
title: "UdpNetworkComponent"
description: "UdpNetworkComponent 的自动生成类参考。"
---
# UdpNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler `
**Base:** IUdpNetworkHandler
**Source:** TaleWorlds.MountAndBlade/UdpNetworkComponent.cs

## 概述

`UdpNetworkComponent` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddRemoveMessageHandlers
`protected virtual void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### OnUdpNetworkHandlerClose
`public virtual void OnUdpNetworkHandlerClose() `

### OnUdpNetworkHandlerTick
`public virtual void OnUdpNetworkHandlerTick(float dt) `

### HandleNewClientConnect
`public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo) `

### HandleEarlyNewClientAfterLoadingFinished
`public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleNewClientAfterLoadingFinished
`public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleLateNewClientAfterLoadingFinished
`public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleNewClientAfterSynchronized
`public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### HandleLateNewClientAfterSynchronized
`public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### OnEveryoneUnSynchronized
`public virtual void OnEveryoneUnSynchronized() `

### HandleEarlyPlayerDisconnect
`public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer) `

### HandlePlayerDisconnect
`public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer) `

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer) `

### OnDisconnectedFromServer
`public virtual void OnDisconnectedFromServer() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
