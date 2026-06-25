---
title: "LobbyNetworkComponent"
description: "Auto-generated class reference for LobbyNetworkComponent."
---
# LobbyNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs`

## Overview

`LobbyNetworkComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `LobbyNetworkComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HandleEarlyNewClientAfterLoadingFinished
`public override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with early new client after loading finished.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleEarlyNewClientAfterLoadingFinished(networkPeer);
```

### HandleNewClientAfterLoadingFinished
`public override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with new client after loading finished.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleNewClientAfterLoadingFinished(networkPeer);
```

### HandleLateNewClientAfterLoadingFinished
`public override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with late new client after loading finished.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandleLateNewClientAfterLoadingFinished(networkPeer);
```

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** Executes the response logic associated with player disconnect.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.HandlePlayerDisconnect(networkPeer);
```

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** Invoked when the udp network handler tick event is raised.

```csharp
// Obtain an instance of LobbyNetworkComponent from the subsystem API first
LobbyNetworkComponent lobbyNetworkComponent = ...;
lobbyNetworkComponent.OnUdpNetworkHandlerTick(0);
```

## Usage Example

```csharp
var component = agent.GetComponent<LobbyNetworkComponent>();
```

## See Also

- [Area Index](../)