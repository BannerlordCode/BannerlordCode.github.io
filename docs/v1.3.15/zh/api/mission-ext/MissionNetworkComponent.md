<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 当 `player disconnected from server` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### OnAddTeam
`public override void OnAddTeam(Team team)`

**用途 / Purpose:** 当 `add team` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnPeerSelectedTeam
`public void OnPeerSelectedTeam(MissionPeer missionPeer)`

**用途 / Purpose:** 当 `peer selected team` 事件触发时调用此方法。

### OnClientSynchronized
`public void OnClientSynchronized(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 当 `client synchronized` 事件触发时调用此方法。

## 使用示例

```csharp
var component = agent.GetComponent<MissionNetworkComponent>();
```

## 参见

- [完整类目录](../catalog)