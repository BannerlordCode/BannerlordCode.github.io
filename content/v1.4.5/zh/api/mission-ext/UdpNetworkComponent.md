---
title: "UdpNetworkComponent"
description: "UdpNetworkComponent 的自动生成类参考。"
---
# UdpNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler`
**Base:** `IUdpNetworkHandler`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`

## 概述

`UdpNetworkComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `UdpNetworkComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnUdpNetworkHandlerClose
`public virtual void OnUdpNetworkHandlerClose()`

**用途 / Purpose:** **用途 / Purpose:** 在 udp network handler close 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnUdpNetworkHandlerClose();
```

### OnUdpNetworkHandlerTick
`public virtual void OnUdpNetworkHandlerTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 udp network handler tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnUdpNetworkHandlerTick(0);
```

### HandleNewClientConnect
`public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 new client connect 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleNewClientConnect(clientConnectionInfo);
```

### HandleEarlyNewClientAfterLoadingFinished
`public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 early new client after loading finished 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleEarlyNewClientAfterLoadingFinished(networkPeer);
```

### HandleNewClientAfterLoadingFinished
`public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 new client after loading finished 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleNewClientAfterLoadingFinished(networkPeer);
```

### HandleLateNewClientAfterLoadingFinished
`public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 late new client after loading finished 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleLateNewClientAfterLoadingFinished(networkPeer);
```

### HandleNewClientAfterSynchronized
`public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 new client after synchronized 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleNewClientAfterSynchronized(networkPeer);
```

### HandleLateNewClientAfterSynchronized
`public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 late new client after synchronized 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleLateNewClientAfterSynchronized(networkPeer);
```

### OnEveryoneUnSynchronized
`public virtual void OnEveryoneUnSynchronized()`

**用途 / Purpose:** **用途 / Purpose:** 在 everyone un synchronized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnEveryoneUnSynchronized();
```

### HandleEarlyPlayerDisconnect
`public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 early player disconnect 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleEarlyPlayerDisconnect(networkPeer);
```

### HandlePlayerDisconnect
`public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 player disconnect 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandlePlayerDisconnect(networkPeer);
```

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 在 player disconnected from server 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnPlayerDisconnectedFromServer(networkPeer);
```

### OnDisconnectedFromServer
`public virtual void OnDisconnectedFromServer()`

**用途 / Purpose:** **用途 / Purpose:** 在 disconnected from server 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 UdpNetworkComponent 实例
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnDisconnectedFromServer();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
UdpNetworkComponent instance = ...;
```

## 参见

- [本区域目录](../)