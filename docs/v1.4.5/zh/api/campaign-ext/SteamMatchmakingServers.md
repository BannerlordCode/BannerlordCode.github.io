<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamMatchmakingServers`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamMatchmakingServers

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamMatchmakingServers`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamMatchmakingServers.cs`

## 概述

`SteamMatchmakingServers` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RequestInternetServerList
`public static HServerListRequest RequestInternetServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `request internet server list` 相关逻辑。

### RequestLANServerList
`public static HServerListRequest RequestLANServerList(AppId_t iApp, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `request l a n server list` 相关逻辑。

### RequestFriendsServerList
`public static HServerListRequest RequestFriendsServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `request friends server list` 相关逻辑。

### RequestFavoritesServerList
`public static HServerListRequest RequestFavoritesServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `request favorites server list` 相关逻辑。

### RequestHistoryServerList
`public static HServerListRequest RequestHistoryServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `request history server list` 相关逻辑。

### RequestSpectatorServerList
`public static HServerListRequest RequestSpectatorServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `request spectator server list` 相关逻辑。

### ReleaseRequest
`public static void ReleaseRequest(HServerListRequest hServerListRequest)`

**用途 / Purpose:** 处理 `release request` 相关逻辑。

### GetServerDetails
`public static gameserveritem_t GetServerDetails(HServerListRequest hRequest, int iServer)`

**用途 / Purpose:** 获取 `server details` 的当前值。

### CancelQuery
`public static void CancelQuery(HServerListRequest hRequest)`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel query`。

### RefreshQuery
`public static void RefreshQuery(HServerListRequest hRequest)`

**用途 / Purpose:** 刷新 `query` 的显示或缓存。

### IsRefreshing
`public static bool IsRefreshing(HServerListRequest hRequest)`

**用途 / Purpose:** 处理 `is refreshing` 相关逻辑。

### GetServerCount
`public static int GetServerCount(HServerListRequest hRequest)`

**用途 / Purpose:** 获取 `server count` 的当前值。

### RefreshServer
`public static void RefreshServer(HServerListRequest hRequest, int iServer)`

**用途 / Purpose:** 刷新 `server` 的显示或缓存。

### PingServer
`public static HServerQuery PingServer(uint unIP, ushort usPort, ISteamMatchmakingPingResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `ping server` 相关逻辑。

### PlayerDetails
`public static HServerQuery PlayerDetails(uint unIP, ushort usPort, ISteamMatchmakingPlayersResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `player details` 相关逻辑。

### ServerRules
`public static HServerQuery ServerRules(uint unIP, ushort usPort, ISteamMatchmakingRulesResponse pRequestServersResponse)`

**用途 / Purpose:** 处理 `server rules` 相关逻辑。

### CancelServerQuery
`public static void CancelServerQuery(HServerQuery hServerQuery)`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel server query`。

## 使用示例

```csharp
SteamMatchmakingServers.RequestInternetServerList(iApp, ppchFilters, 0, pRequestServersResponse);
```

## 参见

- [完整类目录](../catalog)