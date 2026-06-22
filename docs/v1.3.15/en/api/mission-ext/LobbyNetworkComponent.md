<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyNetworkComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LobbyNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs`

## Overview

`LobbyNetworkComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<LobbyNetworkComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

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

## Usage Example

```csharp
// Typical usage of LobbyNetworkComponent (Component)
agent.GetComponent<LobbyNetworkComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)