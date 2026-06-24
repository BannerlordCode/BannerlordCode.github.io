<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNetwork`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class GameNetwork`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/GameNetwork.cs`

## 概述

`GameNetwork` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

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

## 主要方法

### ClearAllPeers
`public static void ClearAllPeers()`

**用途 / Purpose:** 处理 `clear all peers` 相关逻辑。

### FindNetworkPeer
`public static NetworkCommunicator FindNetworkPeer(int index)`

**用途 / Purpose:** 处理 `find network peer` 相关逻辑。

### Initialize
`public static void Initialize(IGameNetworkHandler handler)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### EndMultiplayer
`public static void EndMultiplayer()`

**用途 / Purpose:** 处理 `end multiplayer` 相关逻辑。

### StartReplay
`public static void StartReplay()`

**用途 / Purpose:** 处理 `start replay` 相关逻辑。

### EndReplay
`public static void EndReplay()`

**用途 / Purpose:** 处理 `end replay` 相关逻辑。

### PreStartMultiplayerOnServer
`public static void PreStartMultiplayerOnServer()`

**用途 / Purpose:** 处理 `pre start multiplayer on server` 相关逻辑。

### StartMultiplayerOnServer
`public static void StartMultiplayerOnServer(int port)`

**用途 / Purpose:** 处理 `start multiplayer on server` 相关逻辑。

### HandleConsoleCommand
`public static void HandleConsoleCommand(string command)`

**用途 / Purpose:** 处理 `console command` 事件或回调。

### GetActiveUdpSessionsIpAddress
`public static string GetActiveUdpSessionsIpAddress()`

**用途 / Purpose:** 获取 `active udp sessions ip address` 的当前值。

### AddNewPlayerOnServer
`public static ICommunicator AddNewPlayerOnServer(PlayerConnectionInfo playerConnectionInfo, bool serverPeer, bool isAdmin)`

**用途 / Purpose:** 向当前集合/状态中添加 `new player on server`。

### AddNewPlayersOnServer
`public static GameNetwork.AddPlayersResult AddNewPlayersOnServer(PlayerConnectionInfo playerConnectionInfos, bool serverPeer)`

**用途 / Purpose:** 向当前集合/状态中添加 `new players on server`。

### ClientFinishedLoading
`public static void ClientFinishedLoading(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 处理 `client finished loading` 相关逻辑。

### BeginModuleEventAsClient
`public static void BeginModuleEventAsClient()`

**用途 / Purpose:** 处理 `begin module event as client` 相关逻辑。

### EndModuleEventAsClient
`public static void EndModuleEventAsClient()`

**用途 / Purpose:** 处理 `end module event as client` 相关逻辑。

### BeginModuleEventAsClientUnreliable
`public static void BeginModuleEventAsClientUnreliable()`

**用途 / Purpose:** 处理 `begin module event as client unreliable` 相关逻辑。

### EndModuleEventAsClientUnreliable
`public static void EndModuleEventAsClientUnreliable()`

**用途 / Purpose:** 处理 `end module event as client unreliable` 相关逻辑。

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(NetworkCommunicator communicator)`

**用途 / Purpose:** 处理 `begin module event as server` 相关逻辑。

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(NetworkCommunicator communicator)`

**用途 / Purpose:** 处理 `begin module event as server unreliable` 相关逻辑。

### BeginModuleEventAsServer
`public static void BeginModuleEventAsServer(VirtualPlayer peer)`

**用途 / Purpose:** 处理 `begin module event as server` 相关逻辑。

### EndModuleEventAsServer
`public static void EndModuleEventAsServer()`

**用途 / Purpose:** 处理 `end module event as server` 相关逻辑。

### BeginModuleEventAsServerUnreliable
`public static void BeginModuleEventAsServerUnreliable(VirtualPlayer peer)`

**用途 / Purpose:** 处理 `begin module event as server unreliable` 相关逻辑。

### EndModuleEventAsServerUnreliable
`public static void EndModuleEventAsServerUnreliable()`

**用途 / Purpose:** 处理 `end module event as server unreliable` 相关逻辑。

### BeginBroadcastModuleEvent
`public static void BeginBroadcastModuleEvent()`

**用途 / Purpose:** 处理 `begin broadcast module event` 相关逻辑。

### EndBroadcastModuleEvent
`public static void EndBroadcastModuleEvent(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**用途 / Purpose:** 处理 `end broadcast module event` 相关逻辑。

### ElapsedTimeSinceLastUdpPacketArrived
`public static double ElapsedTimeSinceLastUdpPacketArrived()`

**用途 / Purpose:** 处理 `elapsed time since last udp packet arrived` 相关逻辑。

### EndBroadcastModuleEventUnreliable
`public static void EndBroadcastModuleEventUnreliable(GameNetwork.EventBroadcastFlags broadcastFlags, NetworkCommunicator targetPlayer = null)`

**用途 / Purpose:** 处理 `end broadcast module event unreliable` 相关逻辑。

### UnSynchronizeEveryone
`public static void UnSynchronizeEveryone()`

**用途 / Purpose:** 处理 `un synchronize everyone` 相关逻辑。

### AddRemoveMessageHandlers
`public static void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)`

**用途 / Purpose:** 向当前集合/状态中添加 `remove message handlers`。

### StartMultiplayerOnClient
`public static void StartMultiplayerOnClient(string serverAddress, int port, int sessionKey, int playerIndex)`

**用途 / Purpose:** 处理 `start multiplayer on client` 相关逻辑。

### HandleNewClientConnect
`public static NetworkCommunicator HandleNewClientConnect(PlayerConnectionInfo playerConnectionInfo, bool isAdmin)`

**用途 / Purpose:** 处理 `new client connect` 事件或回调。

### HandleNewClientsConnect
`public static GameNetwork.AddPlayersResult HandleNewClientsConnect(PlayerConnectionInfo playerConnectionInfos, bool isAdmin)`

**用途 / Purpose:** 处理 `new clients connect` 事件或回调。

### AddNetworkPeerToDisconnectAsServer
`public static void AddNetworkPeerToDisconnectAsServer(NetworkCommunicator networkPeer)`

**用途 / Purpose:** 向当前集合/状态中添加 `network peer to disconnect as server`。

### InitializeClientSide
`public static void InitializeClientSide(string serverAddress, int port, int sessionKey, int playerIndex)`

**用途 / Purpose:** 初始化 `client side` 的状态、资源或绑定。

### TerminateClientSide
`public static void TerminateClientSide()`

**用途 / Purpose:** 处理 `terminate client side` 相关逻辑。

### GetSynchedMissionObjectReadableRecordTypeFromIndex
`public static Type GetSynchedMissionObjectReadableRecordTypeFromIndex(int typeIndex)`

**用途 / Purpose:** 获取 `synched mission object readable record type from index` 的当前值。

### GetSynchedMissionObjectReadableRecordIndexFromType
`public static int GetSynchedMissionObjectReadableRecordIndexFromType(Type type)`

**用途 / Purpose:** 获取 `synched mission object readable record index from type` 的当前值。

### DestroyComponent
`public static void DestroyComponent(UdpNetworkComponent udpNetworkComponent)`

**用途 / Purpose:** 处理 `destroy component` 相关逻辑。

### AddNetworkHandler
`public static void AddNetworkHandler(IUdpNetworkHandler handler)`

**用途 / Purpose:** 向当前集合/状态中添加 `network handler`。

### RemoveNetworkHandler
`public static void RemoveNetworkHandler(IUdpNetworkHandler handler)`

**用途 / Purpose:** 从当前集合/状态中移除 `network handler`。

### WriteMessage
`public static void WriteMessage(GameNetworkMessage message)`

**用途 / Purpose:** 处理 `write message` 相关逻辑。

### SetServerBandwidthLimitInMbps
`public static void SetServerBandwidthLimitInMbps(double value)`

**用途 / Purpose:** 设置 `server bandwidth limit in mbps` 的值或状态。

### SetServerTickRate
`public static void SetServerTickRate(double value)`

**用途 / Purpose:** 设置 `server tick rate` 的值或状态。

### SetServerFrameRate
`public static void SetServerFrameRate(double value)`

**用途 / Purpose:** 设置 `server frame rate` 的值或状态。

### ResetDebugVariables
`public static void ResetDebugVariables()`

**用途 / Purpose:** 将 `debug variables` 重置为初始状态。

### PrintDebugStats
`public static void PrintDebugStats()`

**用途 / Purpose:** 处理 `print debug stats` 相关逻辑。

### GetAveragePacketLossRatio
`public static float GetAveragePacketLossRatio()`

**用途 / Purpose:** 获取 `average packet loss ratio` 的当前值。

### GetDebugUploadsInBits
`public static void GetDebugUploadsInBits(ref GameNetwork.DebugNetworkPacketStatisticsStruct networkStatisticsStruct, ref GameNetwork.DebugNetworkPositionCompressionStatisticsStruct posStatisticsStruct)`

**用途 / Purpose:** 获取 `debug uploads in bits` 的当前值。

### PrintReplicationTableStatistics
`public static void PrintReplicationTableStatistics()`

**用途 / Purpose:** 处理 `print replication table statistics` 相关逻辑。

### ClearReplicationTableStatistics
`public static void ClearReplicationTableStatistics()`

**用途 / Purpose:** 处理 `clear replication table statistics` 相关逻辑。

### ResetDebugUploads
`public static void ResetDebugUploads()`

**用途 / Purpose:** 将 `debug uploads` 重置为初始状态。

### ResetMissionData
`public static void ResetMissionData()`

**用途 / Purpose:** 将 `mission data` 重置为初始状态。

### InitializeCompressionInfos
`public static void InitializeCompressionInfos()`

**用途 / Purpose:** 初始化 `compression infos` 的状态、资源或绑定。

### RegisterMessages
`public void RegisterMessages()`

**用途 / Purpose:** 处理 `register messages` 相关逻辑。

### UnregisterMessages
`public void UnregisterMessages()`

**用途 / Purpose:** 处理 `unregister messages` 相关逻辑。

## 使用示例

```csharp
GameNetwork.ClearAllPeers();
```

## 参见

- [完整类目录](../catalog)