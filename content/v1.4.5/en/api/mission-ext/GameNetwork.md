---
title: "GameNetwork"
description: "Auto-generated class reference for GameNetwork."
---
# GameNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameNetwork`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameNetwork.cs`

## Overview

`GameNetwork` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsServer` | `public static bool IsServer { get; }` |
| `IsServerOrRecorder` | `public static bool IsServerOrRecorder { get; }` |
| `IsClientOrReplay` | `public static bool IsClientOrReplay { get; }` |
| `IsMultiplayer` | `public static bool IsMultiplayer { get; }` |
| `IsMultiplayerOrReplay` | `public static bool IsMultiplayerOrReplay { get; }` |
| `IsSessionActive` | `public static bool IsSessionActive { get; }` |
| `NetworkPeersIncludingDisconnectedPeers` | `public static IEnumerable<NetworkCommunicator> NetworkPeersIncludingDisconnectedPeers { get; }` |
| `VirtualPlayers` | `public static VirtualPlayer VirtualPlayers { get; }` |
| `NetworkPeers` | `public static List<NetworkCommunicator> NetworkPeers { get; }` |
| `DisconnectedNetworkPeers` | `public static List<NetworkCommunicator> DisconnectedNetworkPeers { get; }` |
| `NetworkComponents` | `public static List<UdpNetworkComponent> NetworkComponents { get; }` |
| `NetworkHandlers` | `public static List<IUdpNetworkHandler> NetworkHandlers { get; }` |
| `MyPeer` | `public static NetworkCommunicator MyPeer { get; }` |
| `IsMyPeerReady` | `public static bool IsMyPeerReady { get; }` |

## Key Methods

### RegisterMessages
`public void RegisterMessages()`

**Purpose:** Registers messages with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GameNetwork from the subsystem API first
GameNetwork gameNetwork = ...;
gameNetwork.RegisterMessages();
```

### UnregisterMessages
`public void UnregisterMessages()`

**Purpose:** Unregisters messages from the current system.

```csharp
// Obtain an instance of GameNetwork from the subsystem API first
GameNetwork gameNetwork = ...;
gameNetwork.UnregisterMessages();
```

### ClearAllPeers
`public static void ClearAllPeers()`

**Purpose:** Removes all all peers from the this instance.

```csharp
// Static call; no instance required
GameNetwork.ClearAllPeers();
```

### FindNetworkPeer
`public static NetworkCommunicator FindNetworkPeer(int index)`

**Purpose:** Looks up the matching network peer in the current collection or scope.

```csharp
// Static call; no instance required
GameNetwork.FindNetworkPeer(0);
```

### Initialize
`public static void Initialize(IGameNetworkHandler handler)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GameNetwork.Initialize(handler);
```

### EndMultiplayer
`public static void EndMultiplayer()`

**Purpose:** Executes the EndMultiplayer logic.

```csharp
// Static call; no instance required
GameNetwork.EndMultiplayer();
```

### StartReplay
`public static void StartReplay()`

**Purpose:** Starts the replay flow or state machine.

```csharp
// Static call; no instance required
GameNetwork.StartReplay();
```

### EndReplay
`public static void EndReplay()`

**Purpose:** Executes the EndReplay logic.

```csharp
// Static call; no instance required
GameNetwork.EndReplay();
```

### PreStartMultiplayerOnServer
`public static void PreStartMultiplayerOnServer()`

**Purpose:** Executes the PreStartMultiplayerOnServer logic.

```csharp
// Static call; no instance required
GameNetwork.PreStartMultiplayerOnServer();
```

### StartMultiplayerOnServer
`public static void StartMultiplayerOnServer(int port)`

**Purpose:** Starts the multiplayer on server flow or state machine.

```csharp
// Static call; no instance required
GameNetwork.StartMultiplayerOnServer(0);
```

### HandleConsoleCommand
`public static void HandleConsoleCommand(string command)`

**Purpose:** Executes the response logic associated with console command.

```csharp
// Static call; no instance required
GameNetwork.HandleConsoleCommand("example");
```

### GetActiveUdpSessionsIpAddress
`public static string GetActiveUdpSessionsIpAddress()`

**Purpose:** Reads and returns the active udp sessions ip address value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetActiveUdpSessionsIpAddress();
```

### AddNewPlayerOnServer
`public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)`

**Purpose:** Adds new player on server to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddNewPlayerOnServer(playerConnectionInfo, false, false);
```

### AddNewPlayersOnServer
`public static AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo playerConnectionInfos, bool serverPeer)`

**Purpose:** Adds new players on server to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddNewPlayersOnServer(playerConnectionInfos, false);
```

### ClientFinishedLoading
`public static void ClientFinishedLoading(NetworkCommunicator networkPeer)`

**Purpose:** Executes the ClientFinishedLoading logic.

```csharp
// Static call; no instance required
GameNetwork.ClientFinishedLoading(networkPeer);
```

### BeginModuleEventAsClient
`public static void BeginModuleEventAsClient()`

**Purpose:** Executes the BeginModuleEventAsClient logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsClient();
```

### EndModuleEventAsClient
`public static void EndModuleEventAsClient()`

**Purpose:** Executes the EndModuleEventAsClient logic.

```csharp
// Static call; no instance required
GameNetwork.EndModuleEventAsClient();
```

### BeginModuleEventAsClientUnreliable
`public static void BeginModuleEventAsClientUnreliable()`

**Purpose:** Executes the BeginModuleEventAsClientUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsClientUnreliable();
```

### EndModuleEventAsClientUnreliable
`public static void EndModuleEventAsClientUnreliable()`

**Purpose:** Executes the EndModuleEventAsClientUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.EndModuleEventAsClientUnreliable();
```

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(NetworkCommunicator communicator)`

**Purpose:** Executes the BeginModuleEventAsServer logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsServer(communicator);
```

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)`

**Purpose:** Executes the BeginModuleEventAsServerUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsServerUnreliable(communicator);
```

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(VirtualPlayer peer)`

**Purpose:** Executes the BeginModuleEventAsServer logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsServer(peer);
```

### EndModuleEventAsServer
`public static void EndModuleEventAsServer()`

**Purpose:** Executes the EndModuleEventAsServer logic.

```csharp
// Static call; no instance required
GameNetwork.EndModuleEventAsServer();
```

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(VirtualPlayer peer)`

**Purpose:** Executes the BeginModuleEventAsServerUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsServerUnreliable(peer);
```

### EndModuleEventAsServerUnreliable
`public static void EndModuleEventAsServerUnreliable()`

**Purpose:** Executes the EndModuleEventAsServerUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.EndModuleEventAsServerUnreliable();
```

### BeginBroadcastModuleEvent
`public static void BeginBroadcastModuleEvent()`

**Purpose:** Executes the BeginBroadcastModuleEvent logic.

```csharp
// Static call; no instance required
GameNetwork.BeginBroadcastModuleEvent();
```

### EndBroadcastModuleEvent
`public static void EndBroadcastModuleEvent(EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**Purpose:** Executes the EndBroadcastModuleEvent logic.

```csharp
// Static call; no instance required
GameNetwork.EndBroadcastModuleEvent(broadcastFlags, null);
```

### ElapsedTimeSinceLastUdpPacketArrived
`public static double ElapsedTimeSinceLastUdpPacketArrived()`

**Purpose:** Executes the ElapsedTimeSinceLastUdpPacketArrived logic.

```csharp
// Static call; no instance required
GameNetwork.ElapsedTimeSinceLastUdpPacketArrived();
```

### EndBroadcastModuleEventUnreliable
`public static void EndBroadcastModuleEventUnreliable(EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**Purpose:** Executes the EndBroadcastModuleEventUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.EndBroadcastModuleEventUnreliable(broadcastFlags, null);
```

### UnSynchronizeEveryone
`public static void UnSynchronizeEveryone()`

**Purpose:** Executes the UnSynchronizeEveryone logic.

```csharp
// Static call; no instance required
GameNetwork.UnSynchronizeEveryone();
```

### AddRemoveMessageHandlers
`public static void AddRemoveMessageHandlers(NetworkMessageHandlerRegisterer.RegisterMode mode)`

**Purpose:** Adds remove message handlers to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddRemoveMessageHandlers(mode);
```

### StartMultiplayerOnClient
`public static void StartMultiplayerOnClient(string serverAddress, int port, int sessionKey, int playerIndex)`

**Purpose:** Starts the multiplayer on client flow or state machine.

```csharp
// Static call; no instance required
GameNetwork.StartMultiplayerOnClient("example", 0, 0, 0);
```

### HandleNewClientConnect
`public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**Purpose:** Executes the response logic associated with new client connect.

```csharp
// Static call; no instance required
GameNetwork.HandleNewClientConnect(playerConnectionInfo, false);
```

### HandleNewClientsConnect
`public static AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo playerConnectionInfos, bool isAdmin)`

**Purpose:** Executes the response logic associated with new clients connect.

```csharp
// Static call; no instance required
GameNetwork.HandleNewClientsConnect(playerConnectionInfos, false);
```

### AddNetworkPeerToDisconnectAsServer
`public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer)`

**Purpose:** Adds network peer to disconnect as server to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddNetworkPeerToDisconnectAsServer(networkPeer);
```

### InitializeClientSide
`public static void InitializeClientSide(string serverAddress, int port, int sessionKey, int playerIndex)`

**Purpose:** Prepares the resources, state, or bindings required by client side.

```csharp
// Static call; no instance required
GameNetwork.InitializeClientSide("example", 0, 0, 0);
```

### TerminateClientSide
`public static void TerminateClientSide()`

**Purpose:** Executes the TerminateClientSide logic.

```csharp
// Static call; no instance required
GameNetwork.TerminateClientSide();
```

### GetSynchedMissionObjectReadableRecordTypeFromIndex
`public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex)`

**Purpose:** Reads and returns the synched mission object readable record type from index value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetSynchedMissionObjectReadableRecordTypeFromIndex(0);
```

### GetSynchedMissionObjectReadableRecordIndexFromType
`public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type)`

**Purpose:** Reads and returns the synched mission object readable record index from type value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetSynchedMissionObjectReadableRecordIndexFromType(type);
```

### DestroyComponent
`public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent)`

**Purpose:** Executes the DestroyComponent logic.

```csharp
// Static call; no instance required
GameNetwork.DestroyComponent(udpNetworkComponent);
```

### AddNetworkHandler
`public static void AddNetworkHandler(IUdpNetworkHandler handler)`

**Purpose:** Adds network handler to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddNetworkHandler(handler);
```

### RemoveNetworkHandler
`public static void RemoveNetworkHandler(IUdpNetworkHandler handler)`

**Purpose:** Removes network handler from the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.RemoveNetworkHandler(handler);
```

### WriteMessage
`public static void WriteMessage(GameNetworkMessage message)`

**Purpose:** Writes message to the target location.

```csharp
// Static call; no instance required
GameNetwork.WriteMessage(message);
```

### SetServerBandwidthLimitInMbps
`public static void SetServerBandwidthLimitInMbps(double value)`

**Purpose:** Assigns a new value to server bandwidth limit in mbps and updates the object's internal state.

```csharp
// Static call; no instance required
GameNetwork.SetServerBandwidthLimitInMbps(0);
```

### SetServerTickRate
`public static void SetServerTickRate(double value)`

**Purpose:** Assigns a new value to server tick rate and updates the object's internal state.

```csharp
// Static call; no instance required
GameNetwork.SetServerTickRate(0);
```

### SetServerFrameRate
`public static void SetServerFrameRate(double value)`

**Purpose:** Assigns a new value to server frame rate and updates the object's internal state.

```csharp
// Static call; no instance required
GameNetwork.SetServerFrameRate(0);
```

### ResetDebugVariables
`public static void ResetDebugVariables()`

**Purpose:** Returns debug variables to its default or initial condition.

```csharp
// Static call; no instance required
GameNetwork.ResetDebugVariables();
```

### PrintDebugStats
`public static void PrintDebugStats()`

**Purpose:** Executes the PrintDebugStats logic.

```csharp
// Static call; no instance required
GameNetwork.PrintDebugStats();
```

### GetAveragePacketLossRatio
`public static float GetAveragePacketLossRatio()`

**Purpose:** Reads and returns the average packet loss ratio value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetAveragePacketLossRatio();
```

### GetDebugUploadsInBits
`public static void GetDebugUploadsInBits(ref DebugNetworkPacketStatisticsStruct networkStatisticsStruct, ref DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct)`

**Purpose:** Reads and returns the debug uploads in bits value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetDebugUploadsInBits(networkStatisticsStruct, posStatisticsStruct);
```

### PrintReplicationTableStatistics
`public static void PrintReplicationTableStatistics()`

**Purpose:** Executes the PrintReplicationTableStatistics logic.

```csharp
// Static call; no instance required
GameNetwork.PrintReplicationTableStatistics();
```

### ClearReplicationTableStatistics
`public static void ClearReplicationTableStatistics()`

**Purpose:** Removes all replication table statistics from the this instance.

```csharp
// Static call; no instance required
GameNetwork.ClearReplicationTableStatistics();
```

### ResetDebugUploads
`public static void ResetDebugUploads()`

**Purpose:** Returns debug uploads to its default or initial condition.

```csharp
// Static call; no instance required
GameNetwork.ResetDebugUploads();
```

### ResetMissionData
`public static void ResetMissionData()`

**Purpose:** Returns mission data to its default or initial condition.

```csharp
// Static call; no instance required
GameNetwork.ResetMissionData();
```

### InitializeCompressionInfos
`public static void InitializeCompressionInfos()`

**Purpose:** Prepares the resources, state, or bindings required by compression infos.

```csharp
// Static call; no instance required
GameNetwork.InitializeCompressionInfos();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameNetwork gameNetwork = ...;
gameNetwork.RegisterMessages();
```

## See Also

- [Area Index](../)