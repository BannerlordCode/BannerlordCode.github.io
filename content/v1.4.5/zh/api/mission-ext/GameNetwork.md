---
title: "GameNetwork"
description: "GameNetwork 的自动生成类参考。"
---
# GameNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameNetwork`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/GameNetwork.cs`

## 概述

`GameNetwork` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### RegisterMessages
`public void RegisterMessages()`

**用途 / Purpose:** 将messages注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 GameNetwork 实例
GameNetwork gameNetwork = ...;
gameNetwork.RegisterMessages();
```

### UnregisterMessages
`public void UnregisterMessages()`

**用途 / Purpose:** 从当前系统中注销messages。

```csharp
// 先通过子系统 API 拿到 GameNetwork 实例
GameNetwork gameNetwork = ...;
gameNetwork.UnregisterMessages();
```

### ClearAllPeers
`public static void ClearAllPeers()`

**用途 / Purpose:** 清空当前对象中的all peers。

```csharp
// 静态调用，不需要实例
GameNetwork.ClearAllPeers();
```

### FindNetworkPeer
`public static NetworkCommunicator FindNetworkPeer(int index)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的network peer。

```csharp
// 静态调用，不需要实例
GameNetwork.FindNetworkPeer(0);
```

### Initialize
`public static void Initialize(IGameNetworkHandler handler)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GameNetwork.Initialize(handler);
```

### EndMultiplayer
`public static void EndMultiplayer()`

**用途 / Purpose:** 调用 EndMultiplayer 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.EndMultiplayer();
```

### StartReplay
`public static void StartReplay()`

**用途 / Purpose:** 启动replay流程或状态机。

```csharp
// 静态调用，不需要实例
GameNetwork.StartReplay();
```

### EndReplay
`public static void EndReplay()`

**用途 / Purpose:** 调用 EndReplay 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.EndReplay();
```

### PreStartMultiplayerOnServer
`public static void PreStartMultiplayerOnServer()`

**用途 / Purpose:** 调用 PreStartMultiplayerOnServer 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.PreStartMultiplayerOnServer();
```

### StartMultiplayerOnServer
`public static void StartMultiplayerOnServer(int port)`

**用途 / Purpose:** 启动multiplayer on server流程或状态机。

```csharp
// 静态调用，不需要实例
GameNetwork.StartMultiplayerOnServer(0);
```

### HandleConsoleCommand
`public static void HandleConsoleCommand(string command)`

**用途 / Purpose:** 响应 console command 事件，执行对应的处理逻辑。

```csharp
// 静态调用，不需要实例
GameNetwork.HandleConsoleCommand("example");
```

### GetActiveUdpSessionsIpAddress
`public static string GetActiveUdpSessionsIpAddress()`

**用途 / Purpose:** 读取并返回当前对象中 active udp sessions ip address 的结果。

```csharp
// 静态调用，不需要实例
GameNetwork.GetActiveUdpSessionsIpAddress();
```

### AddNewPlayerOnServer
`public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)`

**用途 / Purpose:** 将 new player on server 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameNetwork.AddNewPlayerOnServer(playerConnectionInfo, false, false);
```

### AddNewPlayersOnServer
`public static AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo playerConnectionInfos, bool serverPeer)`

**用途 / Purpose:** 将 new players on server 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameNetwork.AddNewPlayersOnServer(playerConnectionInfos, false);
```

### ClientFinishedLoading
`public static void ClientFinishedLoading(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 调用 ClientFinishedLoading 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.ClientFinishedLoading(networkPeer);
```

### BeginModuleEventAsClient
`public static void BeginModuleEventAsClient()`

**用途 / Purpose:** 调用 BeginModuleEventAsClient 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.BeginModuleEventAsClient();
```

### EndModuleEventAsClient
`public static void EndModuleEventAsClient()`

**用途 / Purpose:** 调用 EndModuleEventAsClient 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.EndModuleEventAsClient();
```

### BeginModuleEventAsClientUnreliable
`public static void BeginModuleEventAsClientUnreliable()`

**用途 / Purpose:** 调用 BeginModuleEventAsClientUnreliable 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.BeginModuleEventAsClientUnreliable();
```

### EndModuleEventAsClientUnreliable
`public static void EndModuleEventAsClientUnreliable()`

**用途 / Purpose:** 调用 EndModuleEventAsClientUnreliable 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.EndModuleEventAsClientUnreliable();
```

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(NetworkCommunicator communicator)`

**用途 / Purpose:** 调用 BeginModuleEventAsServer 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.BeginModuleEventAsServer(communicator);
```

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)`

**用途 / Purpose:** 调用 BeginModuleEventAsServerUnreliable 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.BeginModuleEventAsServerUnreliable(communicator);
```

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(VirtualPlayer peer)`

**用途 / Purpose:** 调用 BeginModuleEventAsServer 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.BeginModuleEventAsServer(peer);
```

### EndModuleEventAsServer
`public static void EndModuleEventAsServer()`

**用途 / Purpose:** 调用 EndModuleEventAsServer 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.EndModuleEventAsServer();
```

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(VirtualPlayer peer)`

**用途 / Purpose:** 调用 BeginModuleEventAsServerUnreliable 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.BeginModuleEventAsServerUnreliable(peer);
```

### EndModuleEventAsServerUnreliable
`public static void EndModuleEventAsServerUnreliable()`

**用途 / Purpose:** 调用 EndModuleEventAsServerUnreliable 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.EndModuleEventAsServerUnreliable();
```

### BeginBroadcastModuleEvent
`public static void BeginBroadcastModuleEvent()`

**用途 / Purpose:** 调用 BeginBroadcastModuleEvent 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.BeginBroadcastModuleEvent();
```

### EndBroadcastModuleEvent
`public static void EndBroadcastModuleEvent(EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**用途 / Purpose:** 调用 EndBroadcastModuleEvent 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.EndBroadcastModuleEvent(broadcastFlags, null);
```

### ElapsedTimeSinceLastUdpPacketArrived
`public static double ElapsedTimeSinceLastUdpPacketArrived()`

**用途 / Purpose:** 调用 ElapsedTimeSinceLastUdpPacketArrived 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.ElapsedTimeSinceLastUdpPacketArrived();
```

### EndBroadcastModuleEventUnreliable
`public static void EndBroadcastModuleEventUnreliable(EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**用途 / Purpose:** 调用 EndBroadcastModuleEventUnreliable 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.EndBroadcastModuleEventUnreliable(broadcastFlags, null);
```

### UnSynchronizeEveryone
`public static void UnSynchronizeEveryone()`

**用途 / Purpose:** 调用 UnSynchronizeEveryone 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.UnSynchronizeEveryone();
```

### AddRemoveMessageHandlers
`public static void AddRemoveMessageHandlers(NetworkMessageHandlerRegisterer.RegisterMode mode)`

**用途 / Purpose:** 将 remove message handlers 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameNetwork.AddRemoveMessageHandlers(mode);
```

### StartMultiplayerOnClient
`public static void StartMultiplayerOnClient(string serverAddress, int port, int sessionKey, int playerIndex)`

**用途 / Purpose:** 启动multiplayer on client流程或状态机。

```csharp
// 静态调用，不需要实例
GameNetwork.StartMultiplayerOnClient("example", 0, 0, 0);
```

### HandleNewClientConnect
`public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**用途 / Purpose:** 响应 new client connect 事件，执行对应的处理逻辑。

```csharp
// 静态调用，不需要实例
GameNetwork.HandleNewClientConnect(playerConnectionInfo, false);
```

### HandleNewClientsConnect
`public static AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo playerConnectionInfos, bool isAdmin)`

**用途 / Purpose:** 响应 new clients connect 事件，执行对应的处理逻辑。

```csharp
// 静态调用，不需要实例
GameNetwork.HandleNewClientsConnect(playerConnectionInfos, false);
```

### AddNetworkPeerToDisconnectAsServer
`public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 将 network peer to disconnect as server 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameNetwork.AddNetworkPeerToDisconnectAsServer(networkPeer);
```

### InitializeClientSide
`public static void InitializeClientSide(string serverAddress, int port, int sessionKey, int playerIndex)`

**用途 / Purpose:** 为 client side 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GameNetwork.InitializeClientSide("example", 0, 0, 0);
```

### TerminateClientSide
`public static void TerminateClientSide()`

**用途 / Purpose:** 调用 TerminateClientSide 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.TerminateClientSide();
```

### GetSynchedMissionObjectReadableRecordTypeFromIndex
`public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex)`

**用途 / Purpose:** 读取并返回当前对象中 synched mission object readable record type from index 的结果。

```csharp
// 静态调用，不需要实例
GameNetwork.GetSynchedMissionObjectReadableRecordTypeFromIndex(0);
```

### GetSynchedMissionObjectReadableRecordIndexFromType
`public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type)`

**用途 / Purpose:** 读取并返回当前对象中 synched mission object readable record index from type 的结果。

```csharp
// 静态调用，不需要实例
GameNetwork.GetSynchedMissionObjectReadableRecordIndexFromType(type);
```

### DestroyComponent
`public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent)`

**用途 / Purpose:** 调用 DestroyComponent 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.DestroyComponent(udpNetworkComponent);
```

### AddNetworkHandler
`public static void AddNetworkHandler(IUdpNetworkHandler handler)`

**用途 / Purpose:** 将 network handler 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
GameNetwork.AddNetworkHandler(handler);
```

### RemoveNetworkHandler
`public static void RemoveNetworkHandler(IUdpNetworkHandler handler)`

**用途 / Purpose:** 从当前容器或状态中移除 network handler。

```csharp
// 静态调用，不需要实例
GameNetwork.RemoveNetworkHandler(handler);
```

### WriteMessage
`public static void WriteMessage(GameNetworkMessage message)`

**用途 / Purpose:** 将message写入目标位置。

```csharp
// 静态调用，不需要实例
GameNetwork.WriteMessage(message);
```

### SetServerBandwidthLimitInMbps
`public static void SetServerBandwidthLimitInMbps(double value)`

**用途 / Purpose:** 为 server bandwidth limit in mbps 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameNetwork.SetServerBandwidthLimitInMbps(0);
```

### SetServerTickRate
`public static void SetServerTickRate(double value)`

**用途 / Purpose:** 为 server tick rate 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameNetwork.SetServerTickRate(0);
```

### SetServerFrameRate
`public static void SetServerFrameRate(double value)`

**用途 / Purpose:** 为 server frame rate 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
GameNetwork.SetServerFrameRate(0);
```

### ResetDebugVariables
`public static void ResetDebugVariables()`

**用途 / Purpose:** 将 debug variables 重置回默认或初始状态。

```csharp
// 静态调用，不需要实例
GameNetwork.ResetDebugVariables();
```

### PrintDebugStats
`public static void PrintDebugStats()`

**用途 / Purpose:** 调用 PrintDebugStats 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.PrintDebugStats();
```

### GetAveragePacketLossRatio
`public static float GetAveragePacketLossRatio()`

**用途 / Purpose:** 读取并返回当前对象中 average packet loss ratio 的结果。

```csharp
// 静态调用，不需要实例
GameNetwork.GetAveragePacketLossRatio();
```

### GetDebugUploadsInBits
`public static void GetDebugUploadsInBits(ref DebugNetworkPacketStatisticsStruct networkStatisticsStruct, ref DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct)`

**用途 / Purpose:** 读取并返回当前对象中 debug uploads in bits 的结果。

```csharp
// 静态调用，不需要实例
GameNetwork.GetDebugUploadsInBits(networkStatisticsStruct, posStatisticsStruct);
```

### PrintReplicationTableStatistics
`public static void PrintReplicationTableStatistics()`

**用途 / Purpose:** 调用 PrintReplicationTableStatistics 对应的操作。

```csharp
// 静态调用，不需要实例
GameNetwork.PrintReplicationTableStatistics();
```

### ClearReplicationTableStatistics
`public static void ClearReplicationTableStatistics()`

**用途 / Purpose:** 清空当前对象中的replication table statistics。

```csharp
// 静态调用，不需要实例
GameNetwork.ClearReplicationTableStatistics();
```

### ResetDebugUploads
`public static void ResetDebugUploads()`

**用途 / Purpose:** 将 debug uploads 重置回默认或初始状态。

```csharp
// 静态调用，不需要实例
GameNetwork.ResetDebugUploads();
```

### ResetMissionData
`public static void ResetMissionData()`

**用途 / Purpose:** 将 mission data 重置回默认或初始状态。

```csharp
// 静态调用，不需要实例
GameNetwork.ResetMissionData();
```

### InitializeCompressionInfos
`public static void InitializeCompressionInfos()`

**用途 / Purpose:** 为 compression infos 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
GameNetwork.InitializeCompressionInfos();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
GameNetwork gameNetwork = ...;
gameNetwork.RegisterMessages();
```

## 参见

- [本区域目录](../)