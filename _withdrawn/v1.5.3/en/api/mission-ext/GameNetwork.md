---
title: "GameNetwork"
description: "Auto-generated class reference for GameNetwork."
---
# GameNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameNetwork `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/GameNetwork.cs

## Overview

Auto-generated stub for `GameNetwork`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### ClearAllPeers
`public static void ClearAllPeers()`

### FindNetworkPeer
`public static NetworkCommunicator FindNetworkPeer(int index)`

### Initialize
`public static void Initialize(IGameNetworkHandler handler)`

### EndMultiplayer
`public static void EndMultiplayer()`

### StartReplay
`public static void StartReplay()`

### EndReplay
`public static void EndReplay()`

### PreStartMultiplayerOnServer
`public static void PreStartMultiplayerOnServer()`

### StartMultiplayerOnServer
`public static void StartMultiplayerOnServer(int port)`

### HandleConsoleCommand
`public static void HandleConsoleCommand(string command)`

### GetActiveUdpSessionsIpAddress
`public static string GetActiveUdpSessionsIpAddress()`

### AddNewPlayerOnServer
`public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo,bool serverPeer,bool isAdmin,bool isSpectator)`

### AddNewPlayersOnServer
`public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo[] playerConnectionInfos,bool serverPeer)`

### ClientFinishedLoading
`public static void ClientFinishedLoading(NetworkCommunicator networkPeer)`

### BeginModuleEventAsClient
`public static void BeginModuleEventAsClient()`

### EndModuleEventAsClient
`public static void EndModuleEventAsClient()`

### BeginModuleEventAsClientUnreliable
`public static void BeginModuleEventAsClientUnreliable()`

### EndModuleEventAsClientUnreliable
`public static void EndModuleEventAsClientUnreliable()`

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(NetworkCommunicator communicator)`

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)`

### EndModuleEventAsServer
`public static void EndModuleEventAsServer()`

### EndModuleEventAsServerUnreliable
`public static void EndModuleEventAsServerUnreliable()`

### BeginBroadcastModuleEvent
`public static void BeginBroadcastModuleEvent()`

### EndBroadcastModuleEvent
`public static void EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags broadcastFlags,NetworkCommunicator targetPlayer = null)`

### ElapsedTimeSinceLastUdpPacketArrived
`public static double ElapsedTimeSinceLastUdpPacketArrived()`

### EndBroadcastModuleEventUnreliable
`public static void EndBroadcastModuleEventUnreliable(GameNetwork.EventBroadcastFlags broadcastFlags,NetworkCommunicator targetPlayer = null)`

### UnSynchronizeEveryone
`public static void UnSynchronizeEveryone()`

### AddRemoveMessageHandlers
`public static void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)`

### StartMultiplayerOnClient
`public static void StartMultiplayerOnClient(string serverAddress,int port,int sessionKey,int playerIndex)`

### HandleNewClientConnect
`public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo,bool isAdmin,bool isSpectator)`

### HandleNewClientsConnect
`public static GameNetwork.AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo[] playerConnectionInfos,bool isAdmin)`

### AddNetworkPeerToDisconnectAsServer
`public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer)`

### InitializeClientSide
`public static void InitializeClientSide(string serverAddress,int port,int sessionKey,int playerIndex)`

### TerminateClientSide
`public static void TerminateClientSide()`

### GetSynchedMissionObjectReadableRecordTypeFromIndex
`public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex)`

### GetSynchedMissionObjectReadableRecordIndexFromType
`public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type)`

### DestroyComponent
`public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent)`

### AddNetworkHandler
`public static void AddNetworkHandler(IUdpNetworkHandler handler)`

### RemoveNetworkHandler
`public static void RemoveNetworkHandler(IUdpNetworkHandler handler)`

### WriteMessage
`public static void WriteMessage(GameNetworkMessage message)`

### SetServerBandwidthLimitInMbps
`public static void SetServerBandwidthLimitInMbps(double value)`

### SetServerTickRate
`public static void SetServerTickRate(double value)`

### SetServerFrameRate
`public static void SetServerFrameRate(double value)`

### ResetDebugVariables
`public static void ResetDebugVariables()`

### PrintDebugStats
`public static void PrintDebugStats()`

### GetAveragePacketLossRatio
`public static float GetAveragePacketLossRatio()`

### GetDebugUploadsInBits
`public static void GetDebugUploadsInBits(ref GameNetwork.DebugNetworkPacketStatisticsStruct networkStatisticsStruct,ref GameNetwork.DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct)`

### PrintReplicationTableStatistics
`public static void PrintReplicationTableStatistics()`

### ClearReplicationTableStatistics
`public static void ClearReplicationTableStatistics()`

### ResetDebugUploads
`public static void ResetDebugUploads()`

### ResetMissionData
`public static void ResetMissionData()`

### InitializeCompressionInfos
`public static void InitializeCompressionInfos()`

## See Also

- [Section index](../)
