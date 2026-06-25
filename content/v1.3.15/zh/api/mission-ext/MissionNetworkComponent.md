---
title: "MissionNetworkComponent"
description: "MissionNetworkComponent 的自动生成类参考。"
---
# MissionNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionNetworkComponent.cs`

## 概述

`MissionNetworkComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionNetworkComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 在 player disconnected from server 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNetworkComponent 实例
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnPlayerDisconnectedFromServer(networkPeer);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNetworkComponent 实例
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnRemoveBehavior();
```

### OnAddTeam
`public override void OnAddTeam(Team team)`

**用途 / Purpose:** 在 add team 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNetworkComponent 实例
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnAddTeam(team);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNetworkComponent 实例
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnBehaviorInitialize();
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNetworkComponent 实例
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnClearScene();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNetworkComponent 实例
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnMissionTick(0);
```

### OnPeerSelectedTeam
`public void OnPeerSelectedTeam(MissionPeer missionPeer)`

**用途 / Purpose:** 在 peer selected team 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNetworkComponent 实例
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnPeerSelectedTeam(missionPeer);
```

### OnClientSynchronized
`public void OnClientSynchronized(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 在 client synchronized 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionNetworkComponent 实例
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnClientSynchronized(networkPeer);
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionNetworkComponent>();
```

## 参见

- [本区域目录](../)