---
title: "GameNetwork"
description: "Auto-generated class reference for GameNetwork."
---
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

**Purpose:** **Purpose:** Removes all all peers from the this instance.

```csharp
// Static call; no instance required
GameNetwork.ClearAllPeers();
```

### FindNetworkPeer
`public static NetworkCommunicator FindNetworkPeer(int index)`

**Purpose:** **Purpose:** Looks up the matching network peer in the current collection or scope.

```csharp
// Static call; no instance required
GameNetwork.FindNetworkPeer(0);
```

### Initialize
`public static void Initialize(IGameNetworkHandler handler)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GameNetwork.Initialize(handler);
```

### EndMultiplayer
`public static void EndMultiplayer()`

**Purpose:** **Purpose:** Executes the EndMultiplayer logic.

```csharp
// Static call; no instance required
GameNetwork.EndMultiplayer();
```

### StartReplay
`public static void StartReplay()`

**Purpose:** **Purpose:** Starts the replay flow or state machine.

```csharp
// Static call; no instance required
GameNetwork.StartReplay();
```

### EndReplay
`public static void EndReplay()`

**Purpose:** **Purpose:** Executes the EndReplay logic.

```csharp
// Static call; no instance required
GameNetwork.EndReplay();
```

### PreStartMultiplayerOnServer
`public static void PreStartMultiplayerOnServer()`

**Purpose:** **Purpose:** Executes the PreStartMultiplayerOnServer logic.

```csharp
// Static call; no instance required
GameNetwork.PreStartMultiplayerOnServer();
```

### StartMultiplayerOnServer
`public static void StartMultiplayerOnServer(int port)`

**Purpose:** **Purpose:** Starts the multiplayer on server flow or state machine.

```csharp
// Static call; no instance required
GameNetwork.StartMultiplayerOnServer(0);
```

### HandleConsoleCommand
`public static void HandleConsoleCommand(string command)`

**Purpose:** **Purpose:** Executes the response logic associated with console command.

```csharp
// Static call; no instance required
GameNetwork.HandleConsoleCommand("example");
```

### GetActiveUdpSessionsIpAddress
`public static string GetActiveUdpSessionsIpAddress()`

**Purpose:** **Purpose:** Reads and returns the active udp sessions ip address value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetActiveUdpSessionsIpAddress();
```

### AddNewPlayerOnServer
`public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)`

**Purpose:** **Purpose:** Adds new player on server to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddNewPlayerOnServer(playerConnectionInfo, false, false);
```

### AddNewPlayersOnServer
`public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo playerConnectionInfos, bool serverPeer)`

**Purpose:** **Purpose:** Adds new players on server to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddNewPlayersOnServer(playerConnectionInfos, false);
```

### ClientFinishedLoading
`public static void ClientFinishedLoading(NetworkCommunicator networkPeer)`

**Purpose:** **Purpose:** Executes the ClientFinishedLoading logic.

```csharp
// Static call; no instance required
GameNetwork.ClientFinishedLoading(networkPeer);
```

### BeginModuleEventAsClient
`public static void BeginModuleEventAsClient()`

**Purpose:** **Purpose:** Executes the BeginModuleEventAsClient logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsClient();
```

### EndModuleEventAsClient
`public static void EndModuleEventAsClient()`

**Purpose:** **Purpose:** Executes the EndModuleEventAsClient logic.

```csharp
// Static call; no instance required
GameNetwork.EndModuleEventAsClient();
```

### BeginModuleEventAsClientUnreliable
`public static void BeginModuleEventAsClientUnreliable()`

**Purpose:** **Purpose:** Executes the BeginModuleEventAsClientUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsClientUnreliable();
```

### EndModuleEventAsClientUnreliable
`public static void EndModuleEventAsClientUnreliable()`

**Purpose:** **Purpose:** Executes the EndModuleEventAsClientUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.EndModuleEventAsClientUnreliable();
```

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(NetworkCommunicator communicator)`

**Purpose:** **Purpose:** Executes the BeginModuleEventAsServer logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsServer(communicator);
```

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)`

**Purpose:** **Purpose:** Executes the BeginModuleEventAsServerUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsServerUnreliable(communicator);
```

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(VirtualPlayer peer)`

**Purpose:** **Purpose:** Executes the BeginModuleEventAsServer logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsServer(peer);
```

### EndModuleEventAsServer
`public static void EndModuleEventAsServer()`

**Purpose:** **Purpose:** Executes the EndModuleEventAsServer logic.

```csharp
// Static call; no instance required
GameNetwork.EndModuleEventAsServer();
```

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(VirtualPlayer peer)`

**Purpose:** **Purpose:** Executes the BeginModuleEventAsServerUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.BeginModuleEventAsServerUnreliable(peer);
```

### EndModuleEventAsServerUnreliable
`public static void EndModuleEventAsServerUnreliable()`

**Purpose:** **Purpose:** Executes the EndModuleEventAsServerUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.EndModuleEventAsServerUnreliable();
```

### BeginBroadcastModuleEvent
`public static void BeginBroadcastModuleEvent()`

**Purpose:** **Purpose:** Executes the BeginBroadcastModuleEvent logic.

```csharp
// Static call; no instance required
GameNetwork.BeginBroadcastModuleEvent();
```

### EndBroadcastModuleEvent
`public static void EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**Purpose:** **Purpose:** Executes the EndBroadcastModuleEvent logic.

```csharp
// Static call; no instance required
GameNetwork.EndBroadcastModuleEvent(broadcastFlags, null);
```

### ElapsedTimeSinceLastUdpPacketArrived
`public static double ElapsedTimeSinceLastUdpPacketArrived()`

**Purpose:** **Purpose:** Executes the ElapsedTimeSinceLastUdpPacketArrived logic.

```csharp
// Static call; no instance required
GameNetwork.ElapsedTimeSinceLastUdpPacketArrived();
```

### EndBroadcastModuleEventUnreliable
`public static void EndBroadcastModuleEventUnreliable(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**Purpose:** **Purpose:** Executes the EndBroadcastModuleEventUnreliable logic.

```csharp
// Static call; no instance required
GameNetwork.EndBroadcastModuleEventUnreliable(broadcastFlags, null);
```

### UnSynchronizeEveryone
`public static void UnSynchronizeEveryone()`

**Purpose:** **Purpose:** Executes the UnSynchronizeEveryone logic.

```csharp
// Static call; no instance required
GameNetwork.UnSynchronizeEveryone();
```

### AddRemoveMessageHandlers
`public static void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)`

**Purpose:** **Purpose:** Adds remove message handlers to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddRemoveMessageHandlers(mode);
```

### StartMultiplayerOnClient
`public static void StartMultiplayerOnClient(string serverAddress, int port, int sessionKey, int playerIndex)`

**Purpose:** **Purpose:** Starts the multiplayer on client flow or state machine.

```csharp
// Static call; no instance required
GameNetwork.StartMultiplayerOnClient("example", 0, 0, 0);
```

### HandleNewClientConnect
`public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**Purpose:** **Purpose:** Executes the response logic associated with new client connect.

```csharp
// Static call; no instance required
GameNetwork.HandleNewClientConnect(playerConnectionInfo, false);
```

### HandleNewClientsConnect
`public static GameNetwork.AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo playerConnectionInfos, bool isAdmin)`

**Purpose:** **Purpose:** Executes the response logic associated with new clients connect.

```csharp
// Static call; no instance required
GameNetwork.HandleNewClientsConnect(playerConnectionInfos, false);
```

### AddNetworkPeerToDisconnectAsServer
`public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer)`

**Purpose:** **Purpose:** Adds network peer to disconnect as server to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddNetworkPeerToDisconnectAsServer(networkPeer);
```

### InitializeClientSide
`public static void InitializeClientSide(string serverAddress, int port, int sessionKey, int playerIndex)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by client side.

```csharp
// Static call; no instance required
GameNetwork.InitializeClientSide("example", 0, 0, 0);
```

### TerminateClientSide
`public static void TerminateClientSide()`

**Purpose:** **Purpose:** Executes the TerminateClientSide logic.

```csharp
// Static call; no instance required
GameNetwork.TerminateClientSide();
```

### GetSynchedMissionObjectReadableRecordTypeFromIndex
`public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex)`

**Purpose:** **Purpose:** Reads and returns the synched mission object readable record type from index value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetSynchedMissionObjectReadableRecordTypeFromIndex(0);
```

### GetSynchedMissionObjectReadableRecordIndexFromType
`public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type)`

**Purpose:** **Purpose:** Reads and returns the synched mission object readable record index from type value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetSynchedMissionObjectReadableRecordIndexFromType(type);
```

### DestroyComponent
`public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent)`

**Purpose:** **Purpose:** Executes the DestroyComponent logic.

```csharp
// Static call; no instance required
GameNetwork.DestroyComponent(udpNetworkComponent);
```

### AddNetworkHandler
`public static void AddNetworkHandler(IUdpNetworkHandler handler)`

**Purpose:** **Purpose:** Adds network handler to the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.AddNetworkHandler(handler);
```

### RemoveNetworkHandler
`public static void RemoveNetworkHandler(IUdpNetworkHandler handler)`

**Purpose:** **Purpose:** Removes network handler from the current collection or state.

```csharp
// Static call; no instance required
GameNetwork.RemoveNetworkHandler(handler);
```

### WriteMessage
`public static void WriteMessage(GameNetworkMessage message)`

**Purpose:** **Purpose:** Writes message to the target location.

```csharp
// Static call; no instance required
GameNetwork.WriteMessage(message);
```

### SetServerBandwidthLimitInMbps
`public static void SetServerBandwidthLimitInMbps(double value)`

**Purpose:** **Purpose:** Assigns a new value to server bandwidth limit in mbps and updates the object's internal state.

```csharp
// Static call; no instance required
GameNetwork.SetServerBandwidthLimitInMbps(0);
```

### SetServerTickRate
`public static void SetServerTickRate(double value)`

**Purpose:** **Purpose:** Assigns a new value to server tick rate and updates the object's internal state.

```csharp
// Static call; no instance required
GameNetwork.SetServerTickRate(0);
```

### SetServerFrameRate
`public static void SetServerFrameRate(double value)`

**Purpose:** **Purpose:** Assigns a new value to server frame rate and updates the object's internal state.

```csharp
// Static call; no instance required
GameNetwork.SetServerFrameRate(0);
```

### ResetDebugVariables
`public static void ResetDebugVariables()`

**Purpose:** **Purpose:** Returns debug variables to its default or initial condition.

```csharp
// Static call; no instance required
GameNetwork.ResetDebugVariables();
```

### PrintDebugStats
`public static void PrintDebugStats()`

**Purpose:** **Purpose:** Executes the PrintDebugStats logic.

```csharp
// Static call; no instance required
GameNetwork.PrintDebugStats();
```

### GetAveragePacketLossRatio
`public static float GetAveragePacketLossRatio()`

**Purpose:** **Purpose:** Reads and returns the average packet loss ratio value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetAveragePacketLossRatio();
```

### GetDebugUploadsInBits
`public static void GetDebugUploadsInBits(ref GameNetwork.DebugNetworkPacketStatisticsStruct networkStatisticsStruct, ref GameNetwork.DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct)`

**Purpose:** **Purpose:** Reads and returns the debug uploads in bits value held by the this instance.

```csharp
// Static call; no instance required
GameNetwork.GetDebugUploadsInBits(networkStatisticsStruct, posStatisticsStruct);
```

### PrintReplicationTableStatistics
`public static void PrintReplicationTableStatistics()`

**Purpose:** **Purpose:** Executes the PrintReplicationTableStatistics logic.

```csharp
// Static call; no instance required
GameNetwork.PrintReplicationTableStatistics();
```

### ClearReplicationTableStatistics
`public static void ClearReplicationTableStatistics()`

**Purpose:** **Purpose:** Removes all replication table statistics from the this instance.

```csharp
// Static call; no instance required
GameNetwork.ClearReplicationTableStatistics();
```

### ResetDebugUploads
`public static void ResetDebugUploads()`

**Purpose:** **Purpose:** Returns debug uploads to its default or initial condition.

```csharp
// Static call; no instance required
GameNetwork.ResetDebugUploads();
```

### ResetMissionData
`public static void ResetMissionData()`

**Purpose:** **Purpose:** Returns mission data to its default or initial condition.

```csharp
// Static call; no instance required
GameNetwork.ResetMissionData();
```

### InitializeCompressionInfos
`public static void InitializeCompressionInfos()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by compression infos.

```csharp
// Static call; no instance required
GameNetwork.InitializeCompressionInfos();
```

### RegisterMessages
`public void RegisterMessages()`

**Purpose:** **Purpose:** Registers messages with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of GameNetwork from the subsystem API first
GameNetwork gameNetwork = ...;
gameNetwork.RegisterMessages();
```

### UnregisterMessages
`public void UnregisterMessages()`

**Purpose:** **Purpose:** Unregisters messages from the current system.

```csharp
// Obtain an instance of GameNetwork from the subsystem API first
GameNetwork gameNetwork = ...;
gameNetwork.UnregisterMessages();
```

## Usage Example

```csharp
GameNetwork.ClearAllPeers();
```

## See Also

- [Area Index](../)