---
title: "BaseNetworkComponent"
description: "BaseNetworkComponent 的自动生成类参考。"
---
# BaseNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.NetworkComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.NetworkComponents/BaseNetworkComponent.cs`

## 概述

`BaseNetworkComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `BaseNetworkComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `ClientIntermissionState` | `public MultiplayerIntermissionState ClientIntermissionState { get; }` |
| `CurrentIntermissionTimer` | `public float CurrentIntermissionTimer { get; }` |
| `DisplayingWelcomeMessage` | `public bool DisplayingWelcomeMessage { get; }` |

## 主要方法

### WelcomeMessageReceivedDelegate
`public delegate void WelcomeMessageReceivedDelegate(string messageText)`

**用途 / Purpose:** 处理与 「welcome message received delegate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponent 实例
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.WelcomeMessageReceivedDelegate("example");
```

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**用途 / Purpose:** 在 「udp network handler tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponent 实例
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.OnUdpNetworkHandlerTick(0);
```

### HandleNewClientConnect
`public override void HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo)`

**用途 / Purpose:** 执行与 「new client connect」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponent 实例
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.HandleNewClientConnect(playerConnectionInfo);
```

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 执行与 「player disconnect」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponent 实例
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.HandlePlayerDisconnect(networkPeer);
```

### IntermissionCastVote
`public void IntermissionCastVote(string itemID, int voteCount)`

**用途 / Purpose:** 处理与 「intermission cast vote」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponent 实例
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.IntermissionCastVote("example", 0);
```

### HandleNewClientAfterSynchronized
`public override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 执行与 「new client after synchronized」 相关的响应逻辑。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponent 实例
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.HandleNewClientAfterSynchronized(networkPeer);
```

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**用途 / Purpose:** 在 「udp network handler close」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponent 实例
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.OnUdpNetworkHandlerClose();
```

### SetDisplayingWelcomeMessage
`public void SetDisplayingWelcomeMessage(bool displaying)`

**用途 / Purpose:** 为 「displaying welcome message」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BaseNetworkComponent 实例
BaseNetworkComponent baseNetworkComponent = ...;
baseNetworkComponent.SetDisplayingWelcomeMessage(false);
```

## 使用示例

```csharp
var component = agent.GetComponent<BaseNetworkComponent>();
```

## 参见

- [本区域目录](../)