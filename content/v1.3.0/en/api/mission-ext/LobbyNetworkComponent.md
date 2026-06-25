---
title: "LobbyNetworkComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LobbyNetworkComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LobbyNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LobbyNetworkComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/LobbyNetworkComponent.cs`

## Overview

`LobbyNetworkComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `LobbyNetworkComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HandleEarlyNewClientAfterLoadingFinished
`public override void HandleEarlyNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `early new client after loading finished` event or callback.

### HandleNewClientAfterLoadingFinished
`public override void HandleNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `new client after loading finished` event or callback.

### HandleLateNewClientAfterLoadingFinished
`public override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `late new client after loading finished` event or callback.

### HandlePlayerDisconnect
`public override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)`

**Purpose:** Handles the `player disconnect` event or callback.

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** Called when the `udp network handler tick` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<LobbyNetworkComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)