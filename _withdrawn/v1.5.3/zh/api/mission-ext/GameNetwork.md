---
title: "GameNetwork"
description: "GameNetwork 的自动生成类参考。"
---
# GameNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameNetwork `
**Base:** System.Object
**Source:** TaleWorlds.MountAndBlade/GameNetwork.cs

## 概述

`GameNetwork` 的自动生成类参考页面。声明来自 `TaleWorlds.MountAndBlade/GameNetwork.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### ClearAllPeers
`public static void ClearAllPeers() `

### FindNetworkPeer
`public static NetworkCommunicator FindNetworkPeer(int index) `

### Initialize
`public static void Initialize(IGameNetworkHandler handler) `

### EndMultiplayer
`public static void EndMultiplayer() `

### StartReplay
`public static void StartReplay() `

### EndReplay
`public static void EndReplay() `

### PreStartMultiplayerOnServer
`public static void PreStartMultiplayerOnServer() `

### StartMultiplayerOnServer
`public static void StartMultiplayerOnServer(int port) `

### HandleConsoleCommand
`public static void HandleConsoleCommand(string command) `

### GetActiveUdpSessionsIpAddress
`public static string GetActiveUdpSessionsIpAddress() `

### AddNewPlayerOnServer
`public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo,bool serverPeer,bool isAdmin,bool isSpectator) `

### AddNewPlayersOnServer
`public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo[] playerConnectionInfos,bool serverPeer) `

### ClientFinishedLoading
`public static void ClientFinishedLoading(NetworkCommunicator networkPeer) `

### BeginModuleEventAsClient
`public static void BeginModuleEventAsClient() `

### EndModuleEventAsClient
`public static void EndModuleEventAsClient() `

### BeginModuleEventAsClientUnreliable
`public static void BeginModuleEventAsClientUnreliable() `

### EndModuleEventAsClientUnreliable
`public static void EndModuleEventAsClientUnreliable() `

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(NetworkCommunicator communicator) `
`public static void BeginModuleEventAsServer(VirtualPlayer peer) `

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator) `
`public static void BeginModuleEventAsServerUnreliable(VirtualPlayer peer) `

### EndModuleEventAsServer
`public static void EndModuleEventAsServer() `

### EndModuleEventAsServerUnreliable
`public static void EndModuleEventAsServerUnreliable() `

### BeginBroadcastModuleEvent
`public static void BeginBroadcastModuleEvent() `

### EndBroadcastModuleEvent
`public static void EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags broadcastFlags,NetworkCommunicator targetPlayer = null) `

### ElapsedTimeSinceLastUdpPacketArrived
`public static double ElapsedTimeSinceLastUdpPacketArrived() `

### EndBroadcastModuleEventUnreliable
`public static void EndBroadcastModuleEventUnreliable(GameNetwork.EventBroadcastFlags broadcastFlags,NetworkCommunicator targetPlayer = null) `

### UnSynchronizeEveryone
`public static void UnSynchronizeEveryone() `

### AddRemoveMessageHandlers
`public static void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode) `

### StartMultiplayerOnClient
`public static void StartMultiplayerOnClient(string serverAddress,int port,int sessionKey,int playerIndex) `

### HandleNewClientConnect
`public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo,bool isAdmin,bool isSpectator) `

### HandleNewClientsConnect
`public static GameNetwork.AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo[] playerConnectionInfos,bool isAdmin) `

### AddNetworkPeerToDisconnectAsServer
`public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer) `

### InitializeClientSide
`public static void InitializeClientSide(string serverAddress,int port,int sessionKey,int playerIndex) `

### TerminateClientSide
`public static void TerminateClientSide() `

### GetSynchedMissionObjectReadableRecordTypeFromIndex
`public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex) `

### GetSynchedMissionObjectReadableRecordIndexFromType
`public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type) `

### DestroyComponent
`public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent) `

### AddNetworkHandler
`public static void AddNetworkHandler(IUdpNetworkHandler handler) `

### RemoveNetworkHandler
`public static void RemoveNetworkHandler(IUdpNetworkHandler handler) `

### WriteMessage
`public static void WriteMessage(GameNetworkMessage message) `

### SetServerBandwidthLimitInMbps
`public static void SetServerBandwidthLimitInMbps(double value) `

### SetServerTickRate
`public static void SetServerTickRate(double value) `

### SetServerFrameRate
`public static void SetServerFrameRate(double value) `

### ResetDebugVariables
`public static void ResetDebugVariables() `

### PrintDebugStats
`public static void PrintDebugStats() `

### GetAveragePacketLossRatio
`public static float GetAveragePacketLossRatio() `

### GetDebugUploadsInBits
`public static void GetDebugUploadsInBits(ref GameNetwork.DebugNetworkPacketStatisticsStruct networkStatisticsStruct,ref GameNetwork.DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct) `

### PrintReplicationTableStatistics
`public static void PrintReplicationTableStatistics() `

### ClearReplicationTableStatistics
`public static void ClearReplicationTableStatistics() `

### ResetDebugUploads
`public static void ResetDebugUploads() `

### ResetMissionData
`public static void ResetMissionData() `

### InitializeCompressionInfos
`public static void InitializeCompressionInfos() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
