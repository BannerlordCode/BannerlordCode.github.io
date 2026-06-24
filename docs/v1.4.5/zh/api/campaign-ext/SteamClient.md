<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamClient`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamClient

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamClient`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamClient.cs`

## 概述

`SteamClient` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateSteamPipe
`public static HSteamPipe CreateSteamPipe()`

**用途 / Purpose:** 创建一个 `steam pipe` 实例或对象。

### BReleaseSteamPipe
`public static bool BReleaseSteamPipe(HSteamPipe hSteamPipe)`

**用途 / Purpose:** 处理 `b release steam pipe` 相关逻辑。

### ConnectToGlobalUser
`public static HSteamUser ConnectToGlobalUser(HSteamPipe hSteamPipe)`

**用途 / Purpose:** 处理 `connect to global user` 相关逻辑。

### CreateLocalUser
`public static HSteamUser CreateLocalUser(out HSteamPipe phSteamPipe, EAccountType eAccountType)`

**用途 / Purpose:** 创建一个 `local user` 实例或对象。

### ReleaseUser
`public static void ReleaseUser(HSteamPipe hSteamPipe, HSteamUser hUser)`

**用途 / Purpose:** 处理 `release user` 相关逻辑。

### GetISteamUser
`public static IntPtr GetISteamUser(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam user` 的当前值。

### GetISteamGameServer
`public static IntPtr GetISteamGameServer(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam game server` 的当前值。

### SetLocalIPBinding
`public static void SetLocalIPBinding(ref SteamIPAddress_t unIP, ushort usPort)`

**用途 / Purpose:** 设置 `local i p binding` 的值或状态。

### GetISteamFriends
`public static IntPtr GetISteamFriends(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam friends` 的当前值。

### GetISteamUtils
`public static IntPtr GetISteamUtils(HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam utils` 的当前值。

### GetISteamMatchmaking
`public static IntPtr GetISteamMatchmaking(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam matchmaking` 的当前值。

### GetISteamMatchmakingServers
`public static IntPtr GetISteamMatchmakingServers(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam matchmaking servers` 的当前值。

### GetISteamGenericInterface
`public static IntPtr GetISteamGenericInterface(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam generic interface` 的当前值。

### GetISteamUserStats
`public static IntPtr GetISteamUserStats(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam user stats` 的当前值。

### GetISteamGameServerStats
`public static IntPtr GetISteamGameServerStats(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam game server stats` 的当前值。

### GetISteamApps
`public static IntPtr GetISteamApps(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam apps` 的当前值。

### GetISteamNetworking
`public static IntPtr GetISteamNetworking(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam networking` 的当前值。

### GetISteamRemoteStorage
`public static IntPtr GetISteamRemoteStorage(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam remote storage` 的当前值。

### GetISteamScreenshots
`public static IntPtr GetISteamScreenshots(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam screenshots` 的当前值。

### GetISteamGameSearch
`public static IntPtr GetISteamGameSearch(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam game search` 的当前值。

### GetIPCCallCount
`public static uint GetIPCCallCount()`

**用途 / Purpose:** 获取 `i p c call count` 的当前值。

### SetWarningMessageHook
`public static void SetWarningMessageHook(SteamAPIWarningMessageHook_t pFunction)`

**用途 / Purpose:** 设置 `warning message hook` 的值或状态。

### BShutdownIfAllPipesClosed
`public static bool BShutdownIfAllPipesClosed()`

**用途 / Purpose:** 处理 `b shutdown if all pipes closed` 相关逻辑。

### GetISteamHTTP
`public static IntPtr GetISteamHTTP(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam h t t p` 的当前值。

### GetISteamController
`public static IntPtr GetISteamController(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam controller` 的当前值。

### GetISteamUGC
`public static IntPtr GetISteamUGC(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam u g c` 的当前值。

### GetISteamAppList
`public static IntPtr GetISteamAppList(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam app list` 的当前值。

### GetISteamMusic
`public static IntPtr GetISteamMusic(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam music` 的当前值。

### GetISteamMusicRemote
`public static IntPtr GetISteamMusicRemote(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam music remote` 的当前值。

### GetISteamHTMLSurface
`public static IntPtr GetISteamHTMLSurface(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam h t m l surface` 的当前值。

### GetISteamInventory
`public static IntPtr GetISteamInventory(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam inventory` 的当前值。

### GetISteamVideo
`public static IntPtr GetISteamVideo(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam video` 的当前值。

### GetISteamParentalSettings
`public static IntPtr GetISteamParentalSettings(HSteamUser hSteamuser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam parental settings` 的当前值。

### GetISteamInput
`public static IntPtr GetISteamInput(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam input` 的当前值。

### GetISteamParties
`public static IntPtr GetISteamParties(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam parties` 的当前值。

### GetISteamRemotePlay
`public static IntPtr GetISteamRemotePlay(HSteamUser hSteamUser, HSteamPipe hSteamPipe, string pchVersion)`

**用途 / Purpose:** 获取 `i steam remote play` 的当前值。

## 使用示例

```csharp
SteamClient.CreateSteamPipe();
```

## 参见

- [完整类目录](../catalog)