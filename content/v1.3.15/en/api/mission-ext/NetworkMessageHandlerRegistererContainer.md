---
title: "NetworkMessageHandlerRegistererContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NetworkMessageHandlerRegistererContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NetworkMessageHandlerRegistererContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NetworkMessageHandlerRegistererContainer`
**Area:** mission-ext

## Overview

`NetworkMessageHandlerRegistererContainer` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsServer` | `public static bool IsServer { get; }` |
| `IsServerOrRecorder` | `public static bool IsServerOrRecorder { get; }` |
| `IsClient` | `public static bool IsClient { get; }` |
| `IsReplay` | `public static bool IsReplay { get; }` |
| `IsClientOrReplay` | `public static bool IsClientOrReplay { get; }` |
| `IsDedicatedServer` | `public static bool IsDedicatedServer { get; }` |
| `MultiplayerDisabled` | `public static bool MultiplayerDisabled { get; }` |
| `IsMultiplayer` | `public static bool IsMultiplayer { get; }` |
| `IsMultiplayerOrReplay` | `public static bool IsMultiplayerOrReplay { get; }` |
| `IsSessionActive` | `public static bool IsSessionActive { get; }` |
| `NetworkPeersIncludingDisconnectedPeers` | `public static IEnumerable<NetworkCommunicator> NetworkPeersIncludingDisconnectedPeers { get; }` |
| `VirtualPlayers` | `public static VirtualPlayer VirtualPlayers { get; }` |
| `NetworkPeers` | `public static List<NetworkCommunicator> NetworkPeers { get; }` |
| `DisconnectedNetworkPeers` | `public static List<NetworkCommunicator> DisconnectedNetworkPeers { get; }` |
| `NetworkPeerCount` | `public static int NetworkPeerCount { get; }` |
| `NetworkPeersValid` | `public static bool NetworkPeersValid { get; }` |
| `NetworkComponents` | `public static List<UdpNetworkComponent> NetworkComponents { get; }` |
| `NetworkHandlers` | `public static List<IUdpNetworkHandler> NetworkHandlers { get; }` |
| `MyPeer` | `public static NetworkCommunicator MyPeer { get; }` |
| `IsMyPeerReady` | `public static bool IsMyPeerReady { get; }` |

## Key Methods

### ClearAllPeers
`public static void ClearAllPeers()`

**Purpose:** Handles logic related to `clear all peers`.

### FindNetworkPeer
`public static NetworkCommunicator FindNetworkPeer(int index)`

**Purpose:** Handles logic related to `find network peer`.

### Initialize
`public static void Initialize(IGameNetworkHandler handler)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### EndMultiplayer
`public static void EndMultiplayer()`

**Purpose:** Handles logic related to `end multiplayer`.

### StartReplay
`public static void StartReplay()`

**Purpose:** Handles logic related to `start replay`.

### EndReplay
`public static void EndReplay()`

**Purpose:** Handles logic related to `end replay`.

### PreStartMultiplayerOnServer
`public static void PreStartMultiplayerOnServer()`

**Purpose:** Handles logic related to `pre start multiplayer on server`.

### StartMultiplayerOnServer
`public static void StartMultiplayerOnServer(int port)`

**Purpose:** Handles logic related to `start multiplayer on server`.

### HandleConsoleCommand
`public static void HandleConsoleCommand(string command)`

**Purpose:** Handles the `console command` event or callback.

### GetActiveUdpSessionsIpAddress
`public static string GetActiveUdpSessionsIpAddress()`

**Purpose:** Gets the current value of `active udp sessions ip address`.

### AddNewPlayerOnServer
`public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)`

**Purpose:** Adds `new player on server` to the current collection or state.

### AddNewPlayersOnServer
`public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo playerConnectionInfos, bool serverPeer)`

**Purpose:** Adds `new players on server` to the current collection or state.

### ClientFinishedLoading
`public static void ClientFinishedLoading(NetworkCommunicator networkPeer)`

**Purpose:** Handles logic related to `client finished loading`.

### BeginModuleEventAsClient
`public static void BeginModuleEventAsClient()`

**Purpose:** Handles logic related to `begin module event as client`.

### EndModuleEventAsClient
`public static void EndModuleEventAsClient()`

**Purpose:** Handles logic related to `end module event as client`.

### BeginModuleEventAsClientUnreliable
`public static void BeginModuleEventAsClientUnreliable()`

**Purpose:** Handles logic related to `begin module event as client unreliable`.

### EndModuleEventAsClientUnreliable
`public static void EndModuleEventAsClientUnreliable()`

**Purpose:** Handles logic related to `end module event as client unreliable`.

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(NetworkCommunicator communicator)`

**Purpose:** Handles logic related to `begin module event as server`.

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)`

**Purpose:** Handles logic related to `begin module event as server unreliable`.

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(VirtualPlayer peer)`

**Purpose:** Handles logic related to `begin module event as server`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
NetworkMessageHandlerRegistererContainer.ClearAllPeers();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
