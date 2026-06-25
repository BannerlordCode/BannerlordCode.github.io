---
title: "MultiplayerPermissionHandler"
description: "MultiplayerPermissionHandler 的自动生成类参考。"
---
# MultiplayerPermissionHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPermissionHandler : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerPermissionHandler.cs`

## 概述

`MultiplayerPermissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MultiplayerPermissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**用途 / Purpose:** **用途 / Purpose:** 在 udp network handler close 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPermissionHandler 实例
MultiplayerPermissionHandler multiplayerPermissionHandler = ...;
multiplayerPermissionHandler.OnUdpNetworkHandlerClose();
```

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** **用途 / Purpose:** 在 player disconnected from server 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerPermissionHandler 实例
MultiplayerPermissionHandler multiplayerPermissionHandler = ...;
multiplayerPermissionHandler.OnPlayerDisconnectedFromServer(networkPeer);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MultiplayerPermissionHandler>();
```

## 参见

- [本区域目录](../)