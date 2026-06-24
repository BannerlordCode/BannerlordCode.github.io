<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UdpNetworkComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UdpNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler`
**Base:** `IUdpNetworkHandler`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`

## Overview

`UdpNetworkComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `UdpNetworkComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnUdpNetworkHandlerClose
`public virtual void OnUdpNetworkHandlerClose()`

**Purpose:** Called when the `udp network handler close` event is raised.

### OnUdpNetworkHandlerTick
`public virtual void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** Called when the `udp network handler tick` event is raised.

### HandleNewClientConnect
`public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)`

**Purpose:** Handles the `new client connect` event or callback.

### HandleEarlyNewClientAfterLoadingFinished
`public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `early new client after loading finished` event or callback.

### HandleNewClientAfterLoadingFinished
`public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `new client after loading finished` event or callback.

### HandleLateNewClientAfterLoadingFinished
`public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `late new client after loading finished` event or callback.

### HandleNewClientAfterSynchronized
`public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `new client after synchronized` event or callback.

### HandleLateNewClientAfterSynchronized
`public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `late new client after synchronized` event or callback.

### OnEveryoneUnSynchronized
`public virtual void OnEveryoneUnSynchronized()`

**Purpose:** Called when the `everyone un synchronized` event is raised.

### HandleEarlyPlayerDisconnect
`public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `early player disconnect` event or callback.

### HandlePlayerDisconnect
`public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `player disconnect` event or callback.

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Called when the `player disconnected from server` event is raised.

### OnDisconnectedFromServer
`public virtual void OnDisconnectedFromServer()`

**Purpose:** Called when the `disconnected from server` event is raised.

## Usage Example

```csharp
var implementation = new CustomUdpNetworkComponent();
```

## See Also

- [Complete Class Catalog](../catalog)