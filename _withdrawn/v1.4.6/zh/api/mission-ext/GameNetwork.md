---
title: "GameNetwork"
description: "GameNetwork：TaleWorlds.MountAndBlade 的 public 类；公开成员 90 个（方法 55、属性 26、字段 2）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/GameNetwork.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameNetwork

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class GameNetwork`
**File:** `TaleWorlds.MountAndBlade/GameNetwork.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

GameNetwork 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/GameNetwork.cs。它是一个 public 类，继承链为 GameNetwork。public/protected 成员共 90 个：55 方法、26 属性、2 字段、7 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：GameNetwork 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 GameNetwork。成员构成以方法为主（方法 55/90，属性 26/90），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/GameNetwork.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsServer` | `public static bool IsServer` | 属性 |
| `IsServerOrRecorder` | `public static bool IsServerOrRecorder` | 属性 |
| `IsClient` | `public static bool IsClient` | 属性 |
| `IsReplay` | `public static bool IsReplay` | 属性 |
| `IsClientOrReplay` | `public static bool IsClientOrReplay` | 属性 |
| `IsDedicatedServer` | `public static bool IsDedicatedServer` | 属性 |
| `MultiplayerDisabled` | `public static bool MultiplayerDisabled` | 属性 |
| `IsMultiplayer` | `public static bool IsMultiplayer` | 属性 |
| `IsMultiplayerOrReplay` | `public static bool IsMultiplayerOrReplay` | 属性 |
| `IsSessionActive` | `public static bool IsSessionActive` | 属性 |
| `IEnumerable` | `public static IEnumerable<NetworkCommunicator>NetworkPeersIncludingDisconnectedPeers` | 属性 |
| `VirtualPlayer[]VirtualPlayers` | `public static VirtualPlayer[]VirtualPlayers` | 属性 |
| `List` | `public static List<NetworkCommunicator>NetworkPeers` | 属性 |
| `List` | `public static List<NetworkCommunicator>DisconnectedNetworkPeers` | 属性 |
| `NetworkPeerCount` | `public static int NetworkPeerCount` | 属性 |
| `NetworkPeersValid` | `public static bool NetworkPeersValid` | 属性 |
| `ClearAllPeers` | `public static void ClearAllPeers()` | 方法 |
| `FindNetworkPeer` | `public static NetworkCommunicator FindNetworkPeer(int index)` | 方法 |
| `Initialize` | `public static void Initialize(IGameNetworkHandler handler)` | 方法 |
| `EndMultiplayer` | `public static void EndMultiplayer()` | 方法 |
| `StartReplay` | `public static void StartReplay()` | 方法 |
| `EndReplay` | `public static void EndReplay()` | 方法 |
| `PreStartMultiplayerOnServer` | `public static void PreStartMultiplayerOnServer()` | 方法 |
| `StartMultiplayerOnServer` | `public static void StartMultiplayerOnServer(int port)` | 方法 |
| `HandleConsoleCommand` | `public static void HandleConsoleCommand(string command)` | 方法 |
| `GetActiveUdpSessionsIpAddress` | `public static string GetActiveUdpSessionsIpAddress()` | 方法 |
| `AddNewPlayerOnServer` | `public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)` | 方法 |
| `AddNewPlayersOnServer` | `public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo[]playerConnectionInfos, bool serverPeer)` | 方法 |
| `ClientFinishedLoading` | `public static void ClientFinishedLoading(NetworkCommunicator networkPeer)` | 方法 |
| `BeginModuleEventAsClient` | `public static void BeginModuleEventAsClient()` | 方法 |
| `EndModuleEventAsClient` | `public static void EndModuleEventAsClient()` | 方法 |
| `BeginModuleEventAsClientUnreliable` | `public static void BeginModuleEventAsClientUnreliable()` | 方法 |
| `EndModuleEventAsClientUnreliable` | `public static void EndModuleEventAsClientUnreliable()` | 方法 |
| `BeginModuleEventAsServer` | `public static void BeginModuleEventAsServer(NetworkCommunicator communicator)` | 方法 |
| `BeginModuleEventAsServerUnreliable` | `public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)` | 方法 |
| `BeginModuleEventAsServer` | `public static void BeginModuleEventAsServer(VirtualPlayer peer)` | 方法 |
| `EndModuleEventAsServer` | `public static void EndModuleEventAsServer()` | 方法 |
| `BeginModuleEventAsServerUnreliable` | `public static void BeginModuleEventAsServerUnreliable(VirtualPlayer peer)` | 方法 |
| `EndModuleEventAsServerUnreliable` | `public static void EndModuleEventAsServerUnreliable()` | 方法 |
| `BeginBroadcastModuleEvent` | `public static void BeginBroadcastModuleEvent()` | 方法 |
| `EndBroadcastModuleEvent` | `public static void EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)` | 方法 |
| `ElapsedTimeSinceLastUdpPacketArrived` | `public static double ElapsedTimeSinceLastUdpPacketArrived()` | 方法 |
| `EndBroadcastModuleEventUnreliable` | `public static void EndBroadcastModuleEventUnreliable(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)` | 方法 |
| `UnSynchronizeEveryone` | `public static void UnSynchronizeEveryone()` | 方法 |
| `AddRemoveMessageHandlers` | `public static void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)` | 方法 |
| `StartMultiplayerOnClient` | `public static void StartMultiplayerOnClient(string serverAddress, int port, int sessionKey, int playerIndex)` | 方法 |
| `HandleNewClientConnect` | `public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)` | 方法 |
| `HandleNewClientsConnect` | `public static GameNetwork.AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo[]playerConnectionInfos, bool isAdmin)` | 方法 |
| `AddNetworkPeerToDisconnectAsServer` | `public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer)` | 方法 |
| `InitializeClientSide` | `public static void InitializeClientSide(string serverAddress, int port, int sessionKey, int playerIndex)` | 方法 |
| `TerminateClientSide` | `public static void TerminateClientSide()` | 方法 |
| `GetSynchedMissionObjectReadableRecordTypeFromIndex` | `public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex)` | 方法 |
| `GetSynchedMissionObjectReadableRecordIndexFromType` | `public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type)` | 方法 |
| `DestroyComponent` | `public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent)` | 方法 |
| `AddNetworkComponent` | `public static T AddNetworkComponent<T>() where T : UdpNetworkComponent` | 方法 |
| `AddNetworkHandler` | `public static void AddNetworkHandler(IUdpNetworkHandler handler)` | 方法 |
| `RemoveNetworkHandler` | `public static void RemoveNetworkHandler(IUdpNetworkHandler handler)` | 方法 |
| `GetNetworkComponent` | `public static T GetNetworkComponent<T>() where T : UdpNetworkComponent` | 方法 |
| `List` | `public static List<UdpNetworkComponent>NetworkComponents` | 属性 |
| `List` | `public static List<IUdpNetworkHandler>NetworkHandlers` | 属性 |
| `WriteMessage` | `public static void WriteMessage(GameNetworkMessage message)` | 方法 |
| `SetServerBandwidthLimitInMbps` | `public static void SetServerBandwidthLimitInMbps(double value)` | 方法 |
| `SetServerTickRate` | `public static void SetServerTickRate(double value)` | 方法 |
| `SetServerFrameRate` | `public static void SetServerFrameRate(double value)` | 方法 |
| `ResetDebugVariables` | `public static void ResetDebugVariables()` | 方法 |
| `PrintDebugStats` | `public static void PrintDebugStats()` | 方法 |
| `GetAveragePacketLossRatio` | `public static float GetAveragePacketLossRatio()` | 方法 |
| `GetDebugUploadsInBits` | `public static void GetDebugUploadsInBits(ref GameNetwork.DebugNetworkPacketStatisticsStruct networkStatisticsStruct, ref GameNetwork.DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct)` | 方法 |
| `PrintReplicationTableStatistics` | `public static void PrintReplicationTableStatistics()` | 方法 |
| `ClearReplicationTableStatistics` | `public static void ClearReplicationTableStatistics()` | 方法 |
| `ResetDebugUploads` | `public static void ResetDebugUploads()` | 方法 |
| `ResetMissionData` | `public static void ResetMissionData()` | 方法 |
| `InitializeCompressionInfos` | `public static void InitializeCompressionInfos()` | 方法 |
| `MyPeer` | `public static NetworkCommunicator MyPeer` | 属性 |
| `IsMyPeerReady` | `public static bool IsMyPeerReady` | 属性 |
| `MaxAutomatedBattleIndex` | `public const int MaxAutomatedBattleIndex` | 字段 |
| `MaxPlayerCount` | `public const int MaxPlayerCount` | 字段 |
| `NetworkMessageHandlerRegisterer` | `public class NetworkMessageHandlerRegisterer` | 属性 |
| `NetworkMessageHandlerRegistererContainer` | `public class NetworkMessageHandlerRegistererContainer` | 属性 |
| `EventBroadcastFlags` | `public enum EventBroadcastFlags` | 属性 |
| `DebugNetworkPositionCompressionStatisticsStruct` | `public struct DebugNetworkPositionCompressionStatisticsStruct` | 属性 |
| `DebugNetworkPacketStatisticsStruct` | `public struct DebugNetworkPacketStatisticsStruct` | 属性 |
| `AddPlayersResult` | `public struct AddPlayersResult` | 属性 |
| `NetworkMessageHandlerRegisterer` | `public class NetworkMessageHandlerRegisterer` | 嵌套类型 |
| `RegisterMode` | `public enum RegisterMode` | 嵌套类型 |
| `NetworkMessageHandlerRegistererContainer` | `public class NetworkMessageHandlerRegistererContainer` | 嵌套类型 |
| `EventBroadcastFlags` | `public enum EventBroadcastFlags` | 嵌套类型 |
| `DebugNetworkPositionCompressionStatisticsStruct` | `public struct DebugNetworkPositionCompressionStatisticsStruct` | 嵌套类型 |
| `DebugNetworkPacketStatisticsStruct` | `public struct DebugNetworkPacketStatisticsStruct` | 嵌套类型 |
| `AddPlayersResult` | `public struct AddPlayersResult` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
