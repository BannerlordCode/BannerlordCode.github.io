<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamNetworkingSockets`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamNetworkingSockets

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamNetworkingSockets`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamNetworkingSockets.cs`

## 概述

`SteamNetworkingSockets` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateListenSocketIP
`public static HSteamListenSocket CreateListenSocketIP(ref SteamNetworkingIPAddr localAddress, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**用途 / Purpose:** 创建一个 `listen socket i p` 实例或对象。

### ConnectByIPAddress
`public static HSteamNetConnection ConnectByIPAddress(ref SteamNetworkingIPAddr address, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**用途 / Purpose:** 处理 `connect by i p address` 相关逻辑。

### CreateListenSocketP2P
`public static HSteamListenSocket CreateListenSocketP2P(int nLocalVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**用途 / Purpose:** 创建一个 `listen socket p2 p` 实例或对象。

### ConnectP2P
`public static HSteamNetConnection ConnectP2P(ref SteamNetworkingIdentity identityRemote, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**用途 / Purpose:** 处理 `connect p2 p` 相关逻辑。

### AcceptConnection
`public static EResult AcceptConnection(HSteamNetConnection hConn)`

**用途 / Purpose:** 处理 `accept connection` 相关逻辑。

### CloseConnection
`public static bool CloseConnection(HSteamNetConnection hPeer, int nReason, string pszDebug, bool bEnableLinger)`

**用途 / Purpose:** 处理 `close connection` 相关逻辑。

### CloseListenSocket
`public static bool CloseListenSocket(HSteamListenSocket hSocket)`

**用途 / Purpose:** 处理 `close listen socket` 相关逻辑。

### SetConnectionUserData
`public static bool SetConnectionUserData(HSteamNetConnection hPeer, long nUserData)`

**用途 / Purpose:** 设置 `connection user data` 的值或状态。

### GetConnectionUserData
`public static long GetConnectionUserData(HSteamNetConnection hPeer)`

**用途 / Purpose:** 获取 `connection user data` 的当前值。

### SetConnectionName
`public static void SetConnectionName(HSteamNetConnection hPeer, string pszName)`

**用途 / Purpose:** 设置 `connection name` 的值或状态。

### GetConnectionName
`public static bool GetConnectionName(HSteamNetConnection hPeer, out string pszName, int nMaxLen)`

**用途 / Purpose:** 获取 `connection name` 的当前值。

### SendMessageToConnection
`public static EResult SendMessageToConnection(HSteamNetConnection hConn, IntPtr pData, uint cbData, int nSendFlags, out long pOutMessageNumber)`

**用途 / Purpose:** 处理 `send message to connection` 相关逻辑。

### SendMessages
`public static void SendMessages(int nMessages, SteamNetworkingMessage_t pMessages, long pOutMessageNumberOrResult)`

**用途 / Purpose:** 处理 `send messages` 相关逻辑。

### FlushMessagesOnConnection
`public static EResult FlushMessagesOnConnection(HSteamNetConnection hConn)`

**用途 / Purpose:** 处理 `flush messages on connection` 相关逻辑。

### ReceiveMessagesOnConnection
`public static int ReceiveMessagesOnConnection(HSteamNetConnection hConn, IntPtr ppOutMessages, int nMaxMessages)`

**用途 / Purpose:** 处理 `receive messages on connection` 相关逻辑。

### GetConnectionInfo
`public static bool GetConnectionInfo(HSteamNetConnection hConn, out SteamNetConnectionInfo_t pInfo)`

**用途 / Purpose:** 获取 `connection info` 的当前值。

### GetConnectionRealTimeStatus
`public static EResult GetConnectionRealTimeStatus(HSteamNetConnection hConn, ref SteamNetConnectionRealTimeStatus_t pStatus, int nLanes, ref SteamNetConnectionRealTimeLaneStatus_t pLanes)`

**用途 / Purpose:** 获取 `connection real time status` 的当前值。

### GetDetailedConnectionStatus
`public static int GetDetailedConnectionStatus(HSteamNetConnection hConn, out string pszBuf, int cbBuf)`

**用途 / Purpose:** 获取 `detailed connection status` 的当前值。

### GetListenSocketAddress
`public static bool GetListenSocketAddress(HSteamListenSocket hSocket, out SteamNetworkingIPAddr address)`

**用途 / Purpose:** 获取 `listen socket address` 的当前值。

### CreateSocketPair
`public static bool CreateSocketPair(out HSteamNetConnection pOutConnection1, out HSteamNetConnection pOutConnection2, bool bUseNetworkLoopback, ref SteamNetworkingIdentity pIdentity1, ref SteamNetworkingIdentity pIdentity2)`

**用途 / Purpose:** 创建一个 `socket pair` 实例或对象。

### ConfigureConnectionLanes
`public static EResult ConfigureConnectionLanes(HSteamNetConnection hConn, int nNumLanes, out int pLanePriorities, out ushort pLaneWeights)`

**用途 / Purpose:** 处理 `configure connection lanes` 相关逻辑。

### GetIdentity
`public static bool GetIdentity(out SteamNetworkingIdentity pIdentity)`

**用途 / Purpose:** 获取 `identity` 的当前值。

### InitAuthentication
`public static ESteamNetworkingAvailability InitAuthentication()`

**用途 / Purpose:** 初始化 `authentication` 的状态、资源或绑定。

### GetAuthenticationStatus
`public static ESteamNetworkingAvailability GetAuthenticationStatus(out SteamNetAuthenticationStatus_t pDetails)`

**用途 / Purpose:** 获取 `authentication status` 的当前值。

### CreatePollGroup
`public static HSteamNetPollGroup CreatePollGroup()`

**用途 / Purpose:** 创建一个 `poll group` 实例或对象。

### DestroyPollGroup
`public static bool DestroyPollGroup(HSteamNetPollGroup hPollGroup)`

**用途 / Purpose:** 处理 `destroy poll group` 相关逻辑。

### SetConnectionPollGroup
`public static bool SetConnectionPollGroup(HSteamNetConnection hConn, HSteamNetPollGroup hPollGroup)`

**用途 / Purpose:** 设置 `connection poll group` 的值或状态。

### ReceiveMessagesOnPollGroup
`public static int ReceiveMessagesOnPollGroup(HSteamNetPollGroup hPollGroup, IntPtr ppOutMessages, int nMaxMessages)`

**用途 / Purpose:** 处理 `receive messages on poll group` 相关逻辑。

### ReceivedRelayAuthTicket
`public static bool ReceivedRelayAuthTicket(IntPtr pvTicket, int cbTicket, out SteamDatagramRelayAuthTicket pOutParsedTicket)`

**用途 / Purpose:** 处理 `received relay auth ticket` 相关逻辑。

### FindRelayAuthTicketForServer
`public static int FindRelayAuthTicketForServer(ref SteamNetworkingIdentity identityGameServer, int nRemoteVirtualPort, out SteamDatagramRelayAuthTicket pOutParsedTicket)`

**用途 / Purpose:** 处理 `find relay auth ticket for server` 相关逻辑。

### ConnectToHostedDedicatedServer
`public static HSteamNetConnection ConnectToHostedDedicatedServer(ref SteamNetworkingIdentity identityTarget, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**用途 / Purpose:** 处理 `connect to hosted dedicated server` 相关逻辑。

### GetHostedDedicatedServerPort
`public static ushort GetHostedDedicatedServerPort()`

**用途 / Purpose:** 获取 `hosted dedicated server port` 的当前值。

### GetHostedDedicatedServerPOPID
`public static SteamNetworkingPOPID GetHostedDedicatedServerPOPID()`

**用途 / Purpose:** 获取 `hosted dedicated server p o p i d` 的当前值。

### GetHostedDedicatedServerAddress
`public static EResult GetHostedDedicatedServerAddress(out SteamDatagramHostedAddress pRouting)`

**用途 / Purpose:** 获取 `hosted dedicated server address` 的当前值。

### CreateHostedDedicatedServerListenSocket
`public static HSteamListenSocket CreateHostedDedicatedServerListenSocket(int nLocalVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**用途 / Purpose:** 创建一个 `hosted dedicated server listen socket` 实例或对象。

### GetGameCoordinatorServerLogin
`public static EResult GetGameCoordinatorServerLogin(IntPtr pLoginInfo, out int pcbSignedBlob, IntPtr pBlob)`

**用途 / Purpose:** 获取 `game coordinator server login` 的当前值。

### ConnectP2PCustomSignaling
`public static HSteamNetConnection ConnectP2PCustomSignaling(out ISteamNetworkingConnectionSignaling pSignaling, ref SteamNetworkingIdentity pPeerIdentity, int nRemoteVirtualPort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**用途 / Purpose:** 处理 `connect p2 p custom signaling` 相关逻辑。

### ReceivedP2PCustomSignal
`public static bool ReceivedP2PCustomSignal(IntPtr pMsg, int cbMsg, out ISteamNetworkingSignalingRecvContext pContext)`

**用途 / Purpose:** 处理 `received p2 p custom signal` 相关逻辑。

### GetCertificateRequest
`public static bool GetCertificateRequest(out int pcbBlob, IntPtr pBlob, out SteamNetworkingErrMsg errMsg)`

**用途 / Purpose:** 获取 `certificate request` 的当前值。

### SetCertificate
`public static bool SetCertificate(IntPtr pCertificate, int cbCertificate, out SteamNetworkingErrMsg errMsg)`

**用途 / Purpose:** 设置 `certificate` 的值或状态。

### ResetIdentity
`public static void ResetIdentity(ref SteamNetworkingIdentity pIdentity)`

**用途 / Purpose:** 将 `identity` 重置为初始状态。

### RunCallbacks
`public static void RunCallbacks()`

**用途 / Purpose:** 处理 `run callbacks` 相关逻辑。

### BeginAsyncRequestFakeIP
`public static bool BeginAsyncRequestFakeIP(int nNumPorts)`

**用途 / Purpose:** 处理 `begin async request fake i p` 相关逻辑。

### GetFakeIP
`public static void GetFakeIP(int idxFirstPort, out SteamNetworkingFakeIPResult_t pInfo)`

**用途 / Purpose:** 获取 `fake i p` 的当前值。

### CreateListenSocketP2PFakeIP
`public static HSteamListenSocket CreateListenSocketP2PFakeIP(int idxFakePort, int nOptions, SteamNetworkingConfigValue_t pOptions)`

**用途 / Purpose:** 创建一个 `listen socket p2 p fake i p` 实例或对象。

### GetRemoteFakeIPForConnection
`public static EResult GetRemoteFakeIPForConnection(HSteamNetConnection hConn, out SteamNetworkingIPAddr pOutAddr)`

**用途 / Purpose:** 获取 `remote fake i p for connection` 的当前值。

### CreateFakeUDPPort
`public static IntPtr CreateFakeUDPPort(int idxFakeServerPort)`

**用途 / Purpose:** 创建一个 `fake u d p port` 实例或对象。

## 使用示例

```csharp
SteamNetworkingSockets.CreateListenSocketIP(localAddress, 0, pOptions);
```

## 参见

- [完整类目录](../catalog)