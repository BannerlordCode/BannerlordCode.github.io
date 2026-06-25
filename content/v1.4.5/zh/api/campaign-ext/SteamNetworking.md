---
title: "SteamNetworking"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamNetworking`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworking

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamNetworking`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworking.cs`

## 概述

`SteamNetworking` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SendP2PPacket
`public static bool SendP2PPacket(CSteamID steamIDRemote, byte pubData, uint cubData, EP2PSend eP2PSendType, int nChannel = 0)`

**用途 / Purpose:** 处理 `send p2 p packet` 相关逻辑。

### IsP2PPacketAvailable
`public static bool IsP2PPacketAvailable(out uint pcubMsgSize, int nChannel = 0)`

**用途 / Purpose:** 处理 `is p2 p packet available` 相关逻辑。

### ReadP2PPacket
`public static bool ReadP2PPacket(byte pubDest, uint cubDest, out uint pcubMsgSize, out CSteamID psteamIDRemote, int nChannel = 0)`

**用途 / Purpose:** 处理 `read p2 p packet` 相关逻辑。

### AcceptP2PSessionWithUser
`public static bool AcceptP2PSessionWithUser(CSteamID steamIDRemote)`

**用途 / Purpose:** 处理 `accept p2 p session with user` 相关逻辑。

### CloseP2PSessionWithUser
`public static bool CloseP2PSessionWithUser(CSteamID steamIDRemote)`

**用途 / Purpose:** 处理 `close p2 p session with user` 相关逻辑。

### CloseP2PChannelWithUser
`public static bool CloseP2PChannelWithUser(CSteamID steamIDRemote, int nChannel)`

**用途 / Purpose:** 处理 `close p2 p channel with user` 相关逻辑。

### GetP2PSessionState
`public static bool GetP2PSessionState(CSteamID steamIDRemote, out P2PSessionState_t pConnectionState)`

**用途 / Purpose:** 获取 `p2 p session state` 的当前值。

### AllowP2PPacketRelay
`public static bool AllowP2PPacketRelay(bool bAllow)`

**用途 / Purpose:** 处理 `allow p2 p packet relay` 相关逻辑。

### CreateListenSocket
`public static SNetListenSocket_t CreateListenSocket(int nVirtualP2PPort, SteamIPAddress_t nIP, ushort nPort, bool bAllowUseOfPacketRelay)`

**用途 / Purpose:** 创建一个 `listen socket` 实例或对象。

### CreateP2PConnectionSocket
`public static SNetSocket_t CreateP2PConnectionSocket(CSteamID steamIDTarget, int nVirtualPort, int nTimeoutSec, bool bAllowUseOfPacketRelay)`

**用途 / Purpose:** 创建一个 `p2 p connection socket` 实例或对象。

### CreateConnectionSocket
`public static SNetSocket_t CreateConnectionSocket(SteamIPAddress_t nIP, ushort nPort, int nTimeoutSec)`

**用途 / Purpose:** 创建一个 `connection socket` 实例或对象。

### DestroySocket
`public static bool DestroySocket(SNetSocket_t hSocket, bool bNotifyRemoteEnd)`

**用途 / Purpose:** 处理 `destroy socket` 相关逻辑。

### DestroyListenSocket
`public static bool DestroyListenSocket(SNetListenSocket_t hSocket, bool bNotifyRemoteEnd)`

**用途 / Purpose:** 处理 `destroy listen socket` 相关逻辑。

### SendDataOnSocket
`public static bool SendDataOnSocket(SNetSocket_t hSocket, byte pubData, uint cubData, bool bReliable)`

**用途 / Purpose:** 处理 `send data on socket` 相关逻辑。

### IsDataAvailableOnSocket
`public static bool IsDataAvailableOnSocket(SNetSocket_t hSocket, out uint pcubMsgSize)`

**用途 / Purpose:** 处理 `is data available on socket` 相关逻辑。

### RetrieveDataFromSocket
`public static bool RetrieveDataFromSocket(SNetSocket_t hSocket, byte pubDest, uint cubDest, out uint pcubMsgSize)`

**用途 / Purpose:** 处理 `retrieve data from socket` 相关逻辑。

### IsDataAvailable
`public static bool IsDataAvailable(SNetListenSocket_t hListenSocket, out uint pcubMsgSize, out SNetSocket_t phSocket)`

**用途 / Purpose:** 处理 `is data available` 相关逻辑。

### RetrieveData
`public static bool RetrieveData(SNetListenSocket_t hListenSocket, byte pubDest, uint cubDest, out uint pcubMsgSize, out SNetSocket_t phSocket)`

**用途 / Purpose:** 处理 `retrieve data` 相关逻辑。

### GetSocketInfo
`public static bool GetSocketInfo(SNetSocket_t hSocket, out CSteamID pSteamIDRemote, out int peSocketStatus, out SteamIPAddress_t punIPRemote, out ushort punPortRemote)`

**用途 / Purpose:** 获取 `socket info` 的当前值。

### GetListenSocketInfo
`public static bool GetListenSocketInfo(SNetListenSocket_t hListenSocket, out SteamIPAddress_t pnIP, out ushort pnPort)`

**用途 / Purpose:** 获取 `listen socket info` 的当前值。

### GetSocketConnectionType
`public static ESNetSocketConnectionType GetSocketConnectionType(SNetSocket_t hSocket)`

**用途 / Purpose:** 获取 `socket connection type` 的当前值。

### GetMaxPacketSize
`public static int GetMaxPacketSize(SNetSocket_t hSocket)`

**用途 / Purpose:** 获取 `max packet size` 的当前值。

## 使用示例

```csharp
SteamNetworking.SendP2PPacket(steamIDRemote, 0, 0, eP2PSendType, 0);
```

## 参见

- [完整类目录](../catalog)