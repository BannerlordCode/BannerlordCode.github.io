<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionNetworkComponent.cs`

## 概述

`MissionNetworkComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MissionNetworkComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnPlayerDisconnectedFromServer
```csharp
public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnAddTeam
```csharp
public override void OnAddTeam(Team team)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnClearScene
```csharp
public override void OnClearScene()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnPeerSelectedTeam
```csharp
public void OnPeerSelectedTeam(MissionPeer missionPeer)
```

### OnClientSynchronized
```csharp
public void OnClientSynchronized(NetworkCommunicator networkPeer)
```

## 使用示例

```csharp
// MissionNetworkComponent (Component) 的典型用法
agent.GetComponent<MissionNetworkComponent>();
```

## 参见

- [完整类目录](../catalog)