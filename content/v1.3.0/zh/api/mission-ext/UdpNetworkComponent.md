---
title: "UdpNetworkComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UdpNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# UdpNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler`
**Base:** `IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`

## 概述

`UdpNetworkComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `UdpNetworkComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnUdpNetworkHandlerClose
`public virtual void OnUdpNetworkHandlerClose()`

**用途 / Purpose:** 当 `udp network handler close` 事件触发时调用此方法。

### OnUdpNetworkHandlerTick
`public virtual void OnUdpNetworkHandlerTick(float dt)`

**用途 / Purpose:** 当 `udp network handler tick` 事件触发时调用此方法。

### HandleNewClientConnect
`public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)`

**用途 / Purpose:** 处理 `new client connect` 事件或回调。

### HandleEarlyNewClientAfterLoadingFinished
`public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `early new client after loading finished` 事件或回调。

### HandleNewClientAfterLoadingFinished
`public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `new client after loading finished` 事件或回调。

### HandleLateNewClientAfterLoadingFinished
`public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `late new client after loading finished` 事件或回调。

### HandleNewClientAfterSynchronized
`public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `new client after synchronized` 事件或回调。

### HandleLateNewClientAfterSynchronized
`public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `late new client after synchronized` 事件或回调。

### OnEveryoneUnSynchronized
`public virtual void OnEveryoneUnSynchronized()`

**用途 / Purpose:** 当 `everyone un synchronized` 事件触发时调用此方法。

### HandleEarlyPlayerDisconnect
`public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `early player disconnect` 事件或回调。

### HandlePlayerDisconnect
`public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `player disconnect` 事件或回调。

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 当 `player disconnected from server` 事件触发时调用此方法。

### OnDisconnectedFromServer
`public virtual void OnDisconnectedFromServer()`

**用途 / Purpose:** 当 `disconnected from server` 事件触发时调用此方法。

## 使用示例

```csharp
var implementation = new CustomUdpNetworkComponent();
```

## 参见

- [完整类目录](../catalog)