<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UdpNetworkComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UdpNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler`
**Base:** `IUdpNetworkHandler`
**File:** `TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`

## Overview

`UdpNetworkComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<UdpNetworkComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of UdpNetworkComponent (Component)
agent.GetComponent<UdpNetworkComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)