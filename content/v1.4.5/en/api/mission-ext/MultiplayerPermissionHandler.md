---
title: "MultiplayerPermissionHandler"
description: "Auto-generated class reference for MultiplayerPermissionHandler."
---
# MultiplayerPermissionHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPermissionHandler : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerPermissionHandler.cs`

## Overview

`MultiplayerPermissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MultiplayerPermissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**Purpose:** Invoked when the `udp network handler close` event is raised.

```csharp
// Obtain an instance of MultiplayerPermissionHandler from the subsystem API first
MultiplayerPermissionHandler multiplayerPermissionHandler = ...;
multiplayerPermissionHandler.OnUdpNetworkHandlerClose();
```

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the `player disconnected from server` event is raised.

```csharp
// Obtain an instance of MultiplayerPermissionHandler from the subsystem API first
MultiplayerPermissionHandler multiplayerPermissionHandler = ...;
multiplayerPermissionHandler.OnPlayerDisconnectedFromServer(networkPeer);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MultiplayerPermissionHandler>();
```

## See Also

- [Area Index](../)