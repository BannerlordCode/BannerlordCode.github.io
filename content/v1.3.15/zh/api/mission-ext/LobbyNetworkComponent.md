---
title: "LobbyNetworkComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LobbyNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `early new client after loading finished` 事件或回调。

### HandleNewClientAfterLoadingFinished
`public override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `new client after loading finished` 事件或回调。

### HandleLateNewClientAfterLoadingFinished
`public override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `late new client after loading finished` 事件或回调。

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `player disconnect` 事件或回调。

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**用途 / Purpose:** 当 `udp network handler tick` 事件触发时调用此方法。

## 使用示例

```csharp
var component = agent.GetComponent<LobbyNetworkComponent>();
```

## 参见

- [完整类目录](../catalog)