<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamGameServer`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServer

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServer`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServer.cs`

## 概述

`SteamGameServer` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### SetProduct
`public static void SetProduct(string pszProduct)`

**用途 / Purpose:** 设置 `product` 的值或状态。

### SetGameDescription
`public static void SetGameDescription(string pszGameDescription)`

**用途 / Purpose:** 设置 `game description` 的值或状态。

### SetModDir
`public static void SetModDir(string pszModDir)`

**用途 / Purpose:** 设置 `mod dir` 的值或状态。

### SetDedicatedServer
`public static void SetDedicatedServer(bool bDedicated)`

**用途 / Purpose:** 设置 `dedicated server` 的值或状态。

### LogOn
`public static void LogOn(string pszToken)`

**用途 / Purpose:** 处理 `log on` 相关逻辑。

### LogOnAnonymous
`public static void LogOnAnonymous()`

**用途 / Purpose:** 处理 `log on anonymous` 相关逻辑。

### LogOff
`public static void LogOff()`

**用途 / Purpose:** 处理 `log off` 相关逻辑。

### BLoggedOn
`public static bool BLoggedOn()`

**用途 / Purpose:** 处理 `b logged on` 相关逻辑。

### BSecure
`public static bool BSecure()`

**用途 / Purpose:** 处理 `b secure` 相关逻辑。

### GetSteamID
`public static CSteamID GetSteamID()`

**用途 / Purpose:** 获取 `steam i d` 的当前值。

### WasRestartRequested
`public static bool WasRestartRequested()`

**用途 / Purpose:** 处理 `was restart requested` 相关逻辑。

### SetMaxPlayerCount
`public static void SetMaxPlayerCount(int cPlayersMax)`

**用途 / Purpose:** 设置 `max player count` 的值或状态。

### SetBotPlayerCount
`public static void SetBotPlayerCount(int cBotplayers)`

**用途 / Purpose:** 设置 `bot player count` 的值或状态。

### SetServerName
`public static void SetServerName(string pszServerName)`

**用途 / Purpose:** 设置 `server name` 的值或状态。

### SetMapName
`public static void SetMapName(string pszMapName)`

**用途 / Purpose:** 设置 `map name` 的值或状态。

### SetPasswordProtected
`public static void SetPasswordProtected(bool bPasswordProtected)`

**用途 / Purpose:** 设置 `password protected` 的值或状态。

### SetSpectatorPort
`public static void SetSpectatorPort(ushort unSpectatorPort)`

**用途 / Purpose:** 设置 `spectator port` 的值或状态。

### SetSpectatorServerName
`public static void SetSpectatorServerName(string pszSpectatorServerName)`

**用途 / Purpose:** 设置 `spectator server name` 的值或状态。

### ClearAllKeyValues
`public static void ClearAllKeyValues()`

**用途 / Purpose:** 处理 `clear all key values` 相关逻辑。

### SetKeyValue
`public static void SetKeyValue(string pKey, string pValue)`

**用途 / Purpose:** 设置 `key value` 的值或状态。

### SetGameTags
`public static void SetGameTags(string pchGameTags)`

**用途 / Purpose:** 设置 `game tags` 的值或状态。

### SetGameData
`public static void SetGameData(string pchGameData)`

**用途 / Purpose:** 设置 `game data` 的值或状态。

### SetRegion
`public static void SetRegion(string pszRegion)`

**用途 / Purpose:** 设置 `region` 的值或状态。

### SetAdvertiseServerActive
`public static void SetAdvertiseServerActive(bool bActive)`

**用途 / Purpose:** 设置 `advertise server active` 的值或状态。

### GetAuthSessionTicket
`public static HAuthTicket GetAuthSessionTicket(byte pTicket, int cbMaxTicket, out uint pcbTicket)`

**用途 / Purpose:** 获取 `auth session ticket` 的当前值。

### BeginAuthSession
`public static EBeginAuthSessionResult BeginAuthSession(byte pAuthTicket, int cbAuthTicket, CSteamID steamID)`

**用途 / Purpose:** 处理 `begin auth session` 相关逻辑。

### EndAuthSession
`public static void EndAuthSession(CSteamID steamID)`

**用途 / Purpose:** 处理 `end auth session` 相关逻辑。

### CancelAuthTicket
`public static void CancelAuthTicket(HAuthTicket hAuthTicket)`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel auth ticket`。

### UserHasLicenseForApp
`public static EUserHasLicenseForAppResult UserHasLicenseForApp(CSteamID steamID, AppId_t appID)`

**用途 / Purpose:** 处理 `user has license for app` 相关逻辑。

### RequestUserGroupStatus
`public static bool RequestUserGroupStatus(CSteamID steamIDUser, CSteamID steamIDGroup)`

**用途 / Purpose:** 处理 `request user group status` 相关逻辑。

### GetGameplayStats
`public static void GetGameplayStats()`

**用途 / Purpose:** 获取 `gameplay stats` 的当前值。

### GetServerReputation
`public static SteamAPICall_t GetServerReputation()`

**用途 / Purpose:** 获取 `server reputation` 的当前值。

### GetPublicIP
`public static SteamIPAddress_t GetPublicIP()`

**用途 / Purpose:** 获取 `public i p` 的当前值。

### HandleIncomingPacket
`public static bool HandleIncomingPacket(byte pData, int cbData, uint srcIP, ushort srcPort)`

**用途 / Purpose:** 处理 `incoming packet` 事件或回调。

### GetNextOutgoingPacket
`public static int GetNextOutgoingPacket(byte pOut, int cbMaxOut, out uint pNetAdr, out ushort pPort)`

**用途 / Purpose:** 获取 `next outgoing packet` 的当前值。

### AssociateWithClan
`public static SteamAPICall_t AssociateWithClan(CSteamID steamIDClan)`

**用途 / Purpose:** 处理 `associate with clan` 相关逻辑。

### ComputeNewPlayerCompatibility
`public static SteamAPICall_t ComputeNewPlayerCompatibility(CSteamID steamIDNewPlayer)`

**用途 / Purpose:** 处理 `compute new player compatibility` 相关逻辑。

### SendUserConnectAndAuthenticate_DEPRECATED
`public static bool SendUserConnectAndAuthenticate_DEPRECATED(uint unIPClient, byte pvAuthBlob, uint cubAuthBlobSize, out CSteamID pSteamIDUser)`

**用途 / Purpose:** 处理 `send user connect and authenticate_ d e p r e c a t e d` 相关逻辑。

### CreateUnauthenticatedUserConnection
`public static CSteamID CreateUnauthenticatedUserConnection()`

**用途 / Purpose:** 创建一个 `unauthenticated user connection` 实例或对象。

### SendUserDisconnect_DEPRECATED
`public static void SendUserDisconnect_DEPRECATED(CSteamID steamIDUser)`

**用途 / Purpose:** 处理 `send user disconnect_ d e p r e c a t e d` 相关逻辑。

### BUpdateUserData
`public static bool BUpdateUserData(CSteamID steamIDUser, string pchPlayerName, uint uScore)`

**用途 / Purpose:** 处理 `b update user data` 相关逻辑。

## 使用示例

```csharp
SteamGameServer.SetProduct("example");
```

## 参见

- [完整类目录](../catalog)