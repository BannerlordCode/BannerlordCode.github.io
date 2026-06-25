---
title: "BaseNetworkComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BaseNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BaseNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.NetworkComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.NetworkComponents/BaseNetworkComponent.cs`

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

**用途 / Purpose:** 处理 `welcome message received delegate` 相关逻辑。

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**用途 / Purpose:** 当 `udp network handler tick` 事件触发时调用此方法。

### HandleNewClientConnect
`public override void HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo)`

**用途 / Purpose:** 处理 `new client connect` 事件或回调。

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `player disconnect` 事件或回调。

### IntermissionCastVote
`public void IntermissionCastVote(string itemID, int voteCount)`

**用途 / Purpose:** 处理 `intermission cast vote` 相关逻辑。

### HandleNewClientAfterSynchronized
`public override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `new client after synchronized` 事件或回调。

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**用途 / Purpose:** 当 `udp network handler close` 事件触发时调用此方法。

### SetDisplayingWelcomeMessage
`public void SetDisplayingWelcomeMessage(bool displaying)`

**用途 / Purpose:** 设置 `displaying welcome message` 的值或状态。

## 使用示例

```csharp
var component = agent.GetComponent<BaseNetworkComponent>();
```

## 参见

- [完整类目录](../catalog)