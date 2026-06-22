<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UdpNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UdpNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler`
**Base:** `IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`

## 概述

`UdpNetworkComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<UdpNetworkComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnUdpNetworkHandlerClose
```csharp
public virtual void OnUdpNetworkHandlerClose()
```

### OnUdpNetworkHandlerTick
```csharp
public virtual void OnUdpNetworkHandlerTick(float dt)
```

### HandleNewClientConnect
```csharp
public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)
```

### HandleEarlyNewClientAfterLoadingFinished
```csharp
public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
```

### HandleNewClientAfterLoadingFinished
```csharp
public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
```

### HandleLateNewClientAfterLoadingFinished
```csharp
public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)
```

### HandleNewClientAfterSynchronized
```csharp
public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)
```

### HandleLateNewClientAfterSynchronized
```csharp
public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)
```

### OnEveryoneUnSynchronized
```csharp
public virtual void OnEveryoneUnSynchronized()
```

### HandleEarlyPlayerDisconnect
```csharp
public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)
```

### HandlePlayerDisconnect
```csharp
public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)
```

### OnPlayerDisconnectedFromServer
```csharp
public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)
```

### OnDisconnectedFromServer
```csharp
public virtual void OnDisconnectedFromServer()
```

## 使用示例

```csharp
// UdpNetworkComponent (Component) 的典型用法
agent.GetComponent<UdpNetworkComponent>();
```

## 参见

- [完整类目录](../catalog)