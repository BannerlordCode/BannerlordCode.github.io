---
title: "NetworkStatusReplicationComponent"
description: "NetworkStatusReplicationComponent 的自动生成类参考。"
---
# NetworkStatusReplicationComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal sealed class NetworkStatusReplicationComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/NetworkStatusReplicationComponent.cs`

## 概述

`NetworkStatusReplicationComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `NetworkStatusReplicationComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**用途 / Purpose:** 在 udp network handler tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 NetworkStatusReplicationComponent 实例
NetworkStatusReplicationComponent networkStatusReplicationComponent = ...;
networkStatusReplicationComponent.OnUdpNetworkHandlerTick(0);
```

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**用途 / Purpose:** 在 udp network handler close 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 NetworkStatusReplicationComponent 实例
NetworkStatusReplicationComponent networkStatusReplicationComponent = ...;
networkStatusReplicationComponent.OnUdpNetworkHandlerClose();
```

## 使用示例

```csharp
var component = agent.GetComponent<NetworkStatusReplicationComponent>();
```

## 参见

- [本区域目录](../)