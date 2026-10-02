---
title: "MissionNetwork"
description: "MissionNetwork 的自动生成类参考。"
---
# MissionNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionNetwork : MissionLogic,IUdpNetworkHandler `
**Base:** MissionLogic,IUdpNetworkHandler
**Source:** TaleWorlds.MountAndBlade/MissionNetwork.cs

## 概述

`MissionNetwork` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/MissionNetwork.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnAfterMissionCreated
`public override void OnAfterMissionCreated() `

### OnBehaviorInitialize
`public override void OnBehaviorInitialize() `

### OnRemoveBehavior
`public override void OnRemoveBehavior() `

### AddRemoveMessageHandlers
`protected virtual void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer) `

### OnPlayerConnectedToServer
`public virtual void OnPlayerConnectedToServer(NetworkCommunicator networkPeer) `

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer) `

### OnUdpNetworkHandlerTick
`protected virtual void OnUdpNetworkHandlerTick() `

### OnUdpNetworkHandlerClose
`protected virtual void OnUdpNetworkHandlerClose() `

### HandleNewClientConnect
`protected virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo) `

### HandleEarlyNewClientAfterLoadingFinished
`protected virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleNewClientAfterLoadingFinished
`protected virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleLateNewClientAfterLoadingFinished
`protected virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer) `

### HandleNewClientAfterSynchronized
`protected virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### HandleLateNewClientAfterSynchronized
`protected virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer) `

### HandleEarlyPlayerDisconnect
`protected virtual void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer) `

### HandlePlayerDisconnect
`protected virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
