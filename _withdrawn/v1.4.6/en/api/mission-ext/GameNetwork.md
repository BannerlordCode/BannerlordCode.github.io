---
title: "GameNetwork"
description: "GameNetwork: a public class in TaleWorlds.MountAndBlade; 90 exposed members (55 methods, 26 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/GameNetwork.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameNetwork

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public static class GameNetwork`
**File:** `TaleWorlds.MountAndBlade/GameNetwork.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameNetwork lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/GameNetwork.cs. It is a public class; the inheritance chain is GameNetwork. It exposes 90 public/protected members: 55 methods, 26 properties, 2 fields, 7 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameNetwork lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain GameNetwork. The surface is method-led (methods 55/90, properties 26/90), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/GameNetwork.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsServer` | `public static bool IsServer` | property |
| `IsServerOrRecorder` | `public static bool IsServerOrRecorder` | property |
| `IsClient` | `public static bool IsClient` | property |
| `IsReplay` | `public static bool IsReplay` | property |
| `IsClientOrReplay` | `public static bool IsClientOrReplay` | property |
| `IsDedicatedServer` | `public static bool IsDedicatedServer` | property |
| `MultiplayerDisabled` | `public static bool MultiplayerDisabled` | property |
| `IsMultiplayer` | `public static bool IsMultiplayer` | property |
| `IsMultiplayerOrReplay` | `public static bool IsMultiplayerOrReplay` | property |
| `IsSessionActive` | `public static bool IsSessionActive` | property |
| `IEnumerable` | `public static IEnumerable<NetworkCommunicator>NetworkPeersIncludingDisconnectedPeers` | property |
| `VirtualPlayer[]VirtualPlayers` | `public static VirtualPlayer[]VirtualPlayers` | property |
| `List` | `public static List<NetworkCommunicator>NetworkPeers` | property |
| `List` | `public static List<NetworkCommunicator>DisconnectedNetworkPeers` | property |
| `NetworkPeerCount` | `public static int NetworkPeerCount` | property |
| `NetworkPeersValid` | `public static bool NetworkPeersValid` | property |
| `ClearAllPeers` | `public static void ClearAllPeers()` | method |
| `FindNetworkPeer` | `public static NetworkCommunicator FindNetworkPeer(int index)` | method |
| `Initialize` | `public static void Initialize(IGameNetworkHandler handler)` | method |
| `EndMultiplayer` | `public static void EndMultiplayer()` | method |
| `StartReplay` | `public static void StartReplay()` | method |
| `EndReplay` | `public static void EndReplay()` | method |
| `PreStartMultiplayerOnServer` | `public static void PreStartMultiplayerOnServer()` | method |
| `StartMultiplayerOnServer` | `public static void StartMultiplayerOnServer(int port)` | method |
| `HandleConsoleCommand` | `public static void HandleConsoleCommand(string command)` | method |
| `GetActiveUdpSessionsIpAddress` | `public static string GetActiveUdpSessionsIpAddress()` | method |
| `AddNewPlayerOnServer` | `public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)` | method |
| `AddNewPlayersOnServer` | `public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo[]playerConnectionInfos, bool serverPeer)` | method |
| `ClientFinishedLoading` | `public static void ClientFinishedLoading(NetworkCommunicator networkPeer)` | method |
| `BeginModuleEventAsClient` | `public static void BeginModuleEventAsClient()` | method |
| `EndModuleEventAsClient` | `public static void EndModuleEventAsClient()` | method |
| `BeginModuleEventAsClientUnreliable` | `public static void BeginModuleEventAsClientUnreliable()` | method |
| `EndModuleEventAsClientUnreliable` | `public static void EndModuleEventAsClientUnreliable()` | method |
| `BeginModuleEventAsServer` | `public static void BeginModuleEventAsServer(NetworkCommunicator communicator)` | method |
| `BeginModuleEventAsServerUnreliable` | `public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)` | method |
| `BeginModuleEventAsServer` | `public static void BeginModuleEventAsServer(VirtualPlayer peer)` | method |
| `EndModuleEventAsServer` | `public static void EndModuleEventAsServer()` | method |
| `BeginModuleEventAsServerUnreliable` | `public static void BeginModuleEventAsServerUnreliable(VirtualPlayer peer)` | method |
| `EndModuleEventAsServerUnreliable` | `public static void EndModuleEventAsServerUnreliable()` | method |
| `BeginBroadcastModuleEvent` | `public static void BeginBroadcastModuleEvent()` | method |
| `EndBroadcastModuleEvent` | `public static void EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)` | method |
| `ElapsedTimeSinceLastUdpPacketArrived` | `public static double ElapsedTimeSinceLastUdpPacketArrived()` | method |
| `EndBroadcastModuleEventUnreliable` | `public static void EndBroadcastModuleEventUnreliable(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)` | method |
| `UnSynchronizeEveryone` | `public static void UnSynchronizeEveryone()` | method |
| `AddRemoveMessageHandlers` | `public static void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)` | method |
| `StartMultiplayerOnClient` | `public static void StartMultiplayerOnClient(string serverAddress, int port, int sessionKey, int playerIndex)` | method |
| `HandleNewClientConnect` | `public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)` | method |
| `HandleNewClientsConnect` | `public static GameNetwork.AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo[]playerConnectionInfos, bool isAdmin)` | method |
| `AddNetworkPeerToDisconnectAsServer` | `public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer)` | method |
| `InitializeClientSide` | `public static void InitializeClientSide(string serverAddress, int port, int sessionKey, int playerIndex)` | method |
| `TerminateClientSide` | `public static void TerminateClientSide()` | method |
| `GetSynchedMissionObjectReadableRecordTypeFromIndex` | `public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex)` | method |
| `GetSynchedMissionObjectReadableRecordIndexFromType` | `public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type)` | method |
| `DestroyComponent` | `public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent)` | method |
| `AddNetworkComponent` | `public static T AddNetworkComponent<T>() where T : UdpNetworkComponent` | method |
| `AddNetworkHandler` | `public static void AddNetworkHandler(IUdpNetworkHandler handler)` | method |
| `RemoveNetworkHandler` | `public static void RemoveNetworkHandler(IUdpNetworkHandler handler)` | method |
| `GetNetworkComponent` | `public static T GetNetworkComponent<T>() where T : UdpNetworkComponent` | method |
| `List` | `public static List<UdpNetworkComponent>NetworkComponents` | property |
| `List` | `public static List<IUdpNetworkHandler>NetworkHandlers` | property |
| `WriteMessage` | `public static void WriteMessage(GameNetworkMessage message)` | method |
| `SetServerBandwidthLimitInMbps` | `public static void SetServerBandwidthLimitInMbps(double value)` | method |
| `SetServerTickRate` | `public static void SetServerTickRate(double value)` | method |
| `SetServerFrameRate` | `public static void SetServerFrameRate(double value)` | method |
| `ResetDebugVariables` | `public static void ResetDebugVariables()` | method |
| `PrintDebugStats` | `public static void PrintDebugStats()` | method |
| `GetAveragePacketLossRatio` | `public static float GetAveragePacketLossRatio()` | method |
| `GetDebugUploadsInBits` | `public static void GetDebugUploadsInBits(ref GameNetwork.DebugNetworkPacketStatisticsStruct networkStatisticsStruct, ref GameNetwork.DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct)` | method |
| `PrintReplicationTableStatistics` | `public static void PrintReplicationTableStatistics()` | method |
| `ClearReplicationTableStatistics` | `public static void ClearReplicationTableStatistics()` | method |
| `ResetDebugUploads` | `public static void ResetDebugUploads()` | method |
| `ResetMissionData` | `public static void ResetMissionData()` | method |
| `InitializeCompressionInfos` | `public static void InitializeCompressionInfos()` | method |
| `MyPeer` | `public static NetworkCommunicator MyPeer` | property |
| `IsMyPeerReady` | `public static bool IsMyPeerReady` | property |
| `MaxAutomatedBattleIndex` | `public const int MaxAutomatedBattleIndex` | field |
| `MaxPlayerCount` | `public const int MaxPlayerCount` | field |
| `NetworkMessageHandlerRegisterer` | `public class NetworkMessageHandlerRegisterer` | property |
| `NetworkMessageHandlerRegistererContainer` | `public class NetworkMessageHandlerRegistererContainer` | property |
| `EventBroadcastFlags` | `public enum EventBroadcastFlags` | property |
| `DebugNetworkPositionCompressionStatisticsStruct` | `public struct DebugNetworkPositionCompressionStatisticsStruct` | property |
| `DebugNetworkPacketStatisticsStruct` | `public struct DebugNetworkPacketStatisticsStruct` | property |
| `AddPlayersResult` | `public struct AddPlayersResult` | property |
| `NetworkMessageHandlerRegisterer` | `public class NetworkMessageHandlerRegisterer` | nested type |
| `RegisterMode` | `public enum RegisterMode` | nested type |
| `NetworkMessageHandlerRegistererContainer` | `public class NetworkMessageHandlerRegistererContainer` | nested type |
| `EventBroadcastFlags` | `public enum EventBroadcastFlags` | nested type |
| `DebugNetworkPositionCompressionStatisticsStruct` | `public struct DebugNetworkPositionCompressionStatisticsStruct` | nested type |
| `DebugNetworkPacketStatisticsStruct` | `public struct DebugNetworkPacketStatisticsStruct` | nested type |
| `AddPlayersResult` | `public struct AddPlayersResult` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
