---
title: "SteamMatchmakingServers"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamMatchmakingServers`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamMatchmakingServers

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamMatchmakingServers`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamMatchmakingServers.cs`

## Overview

`SteamMatchmakingServers` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RequestInternetServerList
`public static HServerListRequest RequestInternetServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `request internet server list`.

### RequestLANServerList
`public static HServerListRequest RequestLANServerList(AppId_t iApp, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `request l a n server list`.

### RequestFriendsServerList
`public static HServerListRequest RequestFriendsServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `request friends server list`.

### RequestFavoritesServerList
`public static HServerListRequest RequestFavoritesServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `request favorites server list`.

### RequestHistoryServerList
`public static HServerListRequest RequestHistoryServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `request history server list`.

### RequestSpectatorServerList
`public static HServerListRequest RequestSpectatorServerList(AppId_t iApp, MatchMakingKeyValuePair_t ppchFilters, uint nFilters, ISteamMatchmakingServerListResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `request spectator server list`.

### ReleaseRequest
`public static void ReleaseRequest(HServerListRequest hServerListRequest)`

**Purpose:** Handles logic related to `release request`.

### GetServerDetails
`public static gameserveritem_t GetServerDetails(HServerListRequest hRequest, int iServer)`

**Purpose:** Gets the current value of `server details`.

### CancelQuery
`public static void CancelQuery(HServerListRequest hRequest)`

**Purpose:** Checks whether the current object can `cel query`.

### RefreshQuery
`public static void RefreshQuery(HServerListRequest hRequest)`

**Purpose:** Refreshes the display or cache of `query`.

### IsRefreshing
`public static bool IsRefreshing(HServerListRequest hRequest)`

**Purpose:** Handles logic related to `is refreshing`.

### GetServerCount
`public static int GetServerCount(HServerListRequest hRequest)`

**Purpose:** Gets the current value of `server count`.

### RefreshServer
`public static void RefreshServer(HServerListRequest hRequest, int iServer)`

**Purpose:** Refreshes the display or cache of `server`.

### PingServer
`public static HServerQuery PingServer(uint unIP, ushort usPort, ISteamMatchmakingPingResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `ping server`.

### PlayerDetails
`public static HServerQuery PlayerDetails(uint unIP, ushort usPort, ISteamMatchmakingPlayersResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `player details`.

### ServerRules
`public static HServerQuery ServerRules(uint unIP, ushort usPort, ISteamMatchmakingRulesResponse pRequestServersResponse)`

**Purpose:** Handles logic related to `server rules`.

### CancelServerQuery
`public static void CancelServerQuery(HServerQuery hServerQuery)`

**Purpose:** Checks whether the current object can `cel server query`.

## Usage Example

```csharp
SteamMatchmakingServers.RequestInternetServerList(iApp, ppchFilters, 0, pRequestServersResponse);
```

## See Also

- [Complete Class Catalog](../catalog)