---
title: "GameNetwork"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameNetwork`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameNetwork

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public static class GameNetwork`
**领域:** mission-ext

## 概述

`GameNetwork` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
GameNetwork.ClearAllPeers();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
