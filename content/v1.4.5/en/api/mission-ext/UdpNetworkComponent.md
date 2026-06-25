---
title: "UdpNetworkComponent"
description: "Auto-generated class reference for UdpNetworkComponent."
---
# UdpNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UdpNetworkComponent : IUdpNetworkHandler`
**Base:** `IUdpNetworkHandler`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UdpNetworkComponent.cs`

## Overview

`UdpNetworkComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `UdpNetworkComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnUdpNetworkHandlerClose
`public virtual void OnUdpNetworkHandlerClose()`

**Purpose:** Invoked when the udp network handler close event is raised.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnUdpNetworkHandlerClose();
```

### OnUdpNetworkHandlerTick
`public virtual void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** Invoked when the udp network handler tick event is raised.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnUdpNetworkHandlerTick(0);
```

### HandleNewClientConnect
`public virtual void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)`

**Purpose:** Executes the response logic associated with new client connect.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleNewClientConnect(clientConnectionInfo);
```

### HandleEarlyNewClientAfterLoadingFinished
`public virtual void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with early new client after loading finished.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleEarlyNewClientAfterLoadingFinished(networkPeer);
```

### HandleNewClientAfterLoadingFinished
`public virtual void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with new client after loading finished.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleNewClientAfterLoadingFinished(networkPeer);
```

### HandleLateNewClientAfterLoadingFinished
`public virtual void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with late new client after loading finished.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleLateNewClientAfterLoadingFinished(networkPeer);
```

### HandleNewClientAfterSynchronized
`public virtual void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with new client after synchronized.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleNewClientAfterSynchronized(networkPeer);
```

### HandleLateNewClientAfterSynchronized
`public virtual void HandleLateNewClientAfterSynchronized(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with late new client after synchronized.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleLateNewClientAfterSynchronized(networkPeer);
```

### OnEveryoneUnSynchronized
`public virtual void OnEveryoneUnSynchronized()`

**Purpose:** Invoked when the everyone un synchronized event is raised.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnEveryoneUnSynchronized();
```

### HandleEarlyPlayerDisconnect
`public void HandleEarlyPlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with early player disconnect.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandleEarlyPlayerDisconnect(networkPeer);
```

### HandlePlayerDisconnect
`public virtual void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with player disconnect.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.HandlePlayerDisconnect(networkPeer);
```

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the player disconnected from server event is raised.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnPlayerDisconnectedFromServer(networkPeer);
```

### OnDisconnectedFromServer
`public virtual void OnDisconnectedFromServer()`

**Purpose:** Invoked when the disconnected from server event is raised.

```csharp
// Obtain an instance of UdpNetworkComponent from the subsystem API first
UdpNetworkComponent udpNetworkComponent = ...;
udpNetworkComponent.OnDisconnectedFromServer();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
UdpNetworkComponent instance = ...;
```

## See Also

- [Area Index](../)