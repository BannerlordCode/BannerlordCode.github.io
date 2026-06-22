<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LobbyNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LobbyNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs`

## 概述

`LobbyNetworkComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<LobbyNetworkComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### HandleEarlyNewClientAfterLoadingFinished
```csharp
public override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
```

### HandleNewClientAfterLoadingFinished
```csharp
public override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
```

### HandleLateNewClientAfterLoadingFinished
```csharp
public override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
```

### HandlePlayerDisconnect
```csharp
public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)
```

### OnUdpNetworkHandlerTick
```csharp
public override void OnUdpNetworkHandlerTick(float dt)
```

## 使用示例

```csharp
// LobbyNetworkComponent (Component) 的典型用法
agent.GetComponent<LobbyNetworkComponent>();
```

## 参见

- [完整类目录](../catalog)