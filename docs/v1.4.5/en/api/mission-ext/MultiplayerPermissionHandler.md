<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerPermissionHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerPermissionHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerPermissionHandler : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerPermissionHandler.cs`

## Overview

`MultiplayerPermissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MultiplayerPermissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**Purpose:** Called when the `udp network handler close` event is raised.

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Called when the `player disconnected from server` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MultiplayerPermissionHandler());
```

## See Also

- [Complete Class Catalog](../catalog)