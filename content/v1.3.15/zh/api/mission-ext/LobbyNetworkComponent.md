---
title: "LobbyNetworkComponent"
description: "LobbyNetworkComponent 的自动生成类参考。"
---
# LobbyNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs`

## 概述

`LobbyNetworkComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `LobbyNetworkComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### HandleEarlyNewClientAfterLoadingFinished
`public override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 early new client after loading finished 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 LobbyNetworkComponent 实例
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleEarlyNewClientAfterLoadingFinished(networkPeer);
```

### HandleNewClientAfterLoadingFinished
`public override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 new client after loading finished 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 LobbyNetworkComponent 实例
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleNewClientAfterLoadingFinished(networkPeer);
```

### HandleLateNewClientAfterLoadingFinished
`public override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 late new client after loading finished 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 LobbyNetworkComponent 实例
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleLateNewClientAfterLoadingFinished(networkPeer);
```

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 执行与 player disconnect 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 LobbyNetworkComponent 实例
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandlePlayerDisconnect(networkPeer);
```

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 udp network handler tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LobbyNetworkComponent 实例
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.OnUdpNetworkHandlerTick(0);
```

## 使用示例

```csharp
var component = agent.GetComponent<LobbyNetworkComponent>();
```

## 参见

- [本区域目录](../)