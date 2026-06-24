<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameNetwork`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameNetwork`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/GameNetwork.cs`

## Overview

`GameNetwork` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### EndModuleEventAsServer
`public static void EndModuleEventAsServer()`

**Purpose:** Handles logic related to `end module event as server`.

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(VirtualPlayer peer)`

**Purpose:** Handles logic related to `begin module event as server unreliable`.

### EndModuleEventAsServerUnreliable
`public static void EndModuleEventAsServerUnreliable()`

**Purpose:** Handles logic related to `end module event as server unreliable`.

### BeginBroadcastModuleEvent
`public static void BeginBroadcastModuleEvent()`

**Purpose:** Handles logic related to `begin broadcast module event`.

### EndBroadcastModuleEvent
`public static void EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**Purpose:** Handles logic related to `end broadcast module event`.

### ElapsedTimeSinceLastUdpPacketArrived
`public static double ElapsedTimeSinceLastUdpPacketArrived()`

**Purpose:** Handles logic related to `elapsed time since last udp packet arrived`.

### EndBroadcastModuleEventUnreliable
`public static void EndBroadcastModuleEventUnreliable(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**Purpose:** Handles logic related to `end broadcast module event unreliable`.

### UnSynchronizeEveryone
`public static void UnSynchronizeEveryone()`

**Purpose:** Handles logic related to `un synchronize everyone`.

### AddRemoveMessageHandlers
`public static void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)`

**Purpose:** Adds `remove message handlers` to the current collection or state.

### StartMultiplayerOnClient
`public static void StartMultiplayerOnClient(string serverAddress, int port, int sessionKey, int playerIndex)`

**Purpose:** Handles logic related to `start multiplayer on client`.

### HandleNewClientConnect
`public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**Purpose:** Handles the `new client connect` event or callback.

### HandleNewClientsConnect
`public static GameNetwork.AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo playerConnectionInfos, bool isAdmin)`

**Purpose:** Handles the `new clients connect` event or callback.

### AddNetworkPeerToDisconnectAsServer
`public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer)`

**Purpose:** Adds `network peer to disconnect as server` to the current collection or state.

### InitializeClientSide
`public static void InitializeClientSide(string serverAddress, int port, int sessionKey, int playerIndex)`

**Purpose:** Initializes the state, resources, or bindings for `client side`.

### TerminateClientSide
`public static void TerminateClientSide()`

**Purpose:** Handles logic related to `terminate client side`.

### GetSynchedMissionObjectReadableRecordTypeFromIndex
`public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex)`

**Purpose:** Gets the current value of `synched mission object readable record type from index`.

### GetSynchedMissionObjectReadableRecordIndexFromType
`public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type)`

**Purpose:** Gets the current value of `synched mission object readable record index from type`.

### DestroyComponent
`public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent)`

**Purpose:** Handles logic related to `destroy component`.

### AddNetworkHandler
`public static void AddNetworkHandler(IUdpNetworkHandler handler)`

**Purpose:** Adds `network handler` to the current collection or state.

### RemoveNetworkHandler
`public static void RemoveNetworkHandler(IUdpNetworkHandler handler)`

**Purpose:** Removes `network handler` from the current collection or state.

### WriteMessage
`public static void WriteMessage(GameNetworkMessage message)`

**Purpose:** Handles logic related to `write message`.

### SetServerBandwidthLimitInMbps
`public static void SetServerBandwidthLimitInMbps(double value)`

**Purpose:** Sets the value or state of `server bandwidth limit in mbps`.

### SetServerTickRate
`public static void SetServerTickRate(double value)`

**Purpose:** Sets the value or state of `server tick rate`.

### SetServerFrameRate
`public static void SetServerFrameRate(double value)`

**Purpose:** Sets the value or state of `server frame rate`.

### ResetDebugVariables
`public static void ResetDebugVariables()`

**Purpose:** Resets `debug variables` to its initial state.

### PrintDebugStats
`public static void PrintDebugStats()`

**Purpose:** Handles logic related to `print debug stats`.

### GetAveragePacketLossRatio
`public static float GetAveragePacketLossRatio()`

**Purpose:** Gets the current value of `average packet loss ratio`.

### GetDebugUploadsInBits
`public static void GetDebugUploadsInBits(ref GameNetwork.DebugNetworkPacketStatisticsStruct networkStatisticsStruct, ref GameNetwork.DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct)`

**Purpose:** Gets the current value of `debug uploads in bits`.

### PrintReplicationTableStatistics
`public static void PrintReplicationTableStatistics()`

**Purpose:** Handles logic related to `print replication table statistics`.

### ClearReplicationTableStatistics
`public static void ClearReplicationTableStatistics()`

**Purpose:** Handles logic related to `clear replication table statistics`.

### ResetDebugUploads
`public static void ResetDebugUploads()`

**Purpose:** Resets `debug uploads` to its initial state.

### ResetMissionData
`public static void ResetMissionData()`

**Purpose:** Resets `mission data` to its initial state.

### InitializeCompressionInfos
`public static void InitializeCompressionInfos()`

**Purpose:** Initializes the state, resources, or bindings for `compression infos`.

### RegisterMessages
`public void RegisterMessages()`

**Purpose:** Handles logic related to `register messages`.

### UnregisterMessages
`public void UnregisterMessages()`

**Purpose:** Handles logic related to `unregister messages`.

## Usage Example

```csharp
GameNetwork.ClearAllPeers();
```

## See Also

- [Complete Class Catalog](../catalog)