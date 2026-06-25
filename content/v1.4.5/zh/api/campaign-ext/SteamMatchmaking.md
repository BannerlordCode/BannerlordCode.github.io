---
title: "SteamMatchmaking"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamMatchmaking`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamMatchmaking

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamMatchmaking`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamMatchmaking.cs`

## 概述

`SteamMatchmaking` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetFavoriteGameCount
`public static int GetFavoriteGameCount()`

**用途 / Purpose:** 获取 `favorite game count` 的当前值。

### GetFavoriteGame
`public static bool GetFavoriteGame(int iGame, out AppId_t pnAppID, out uint pnIP, out ushort pnConnPort, out ushort pnQueryPort, out uint punFlags, out uint pRTime32LastPlayedOnServer)`

**用途 / Purpose:** 获取 `favorite game` 的当前值。

### AddFavoriteGame
`public static int AddFavoriteGame(AppId_t nAppID, uint nIP, ushort nConnPort, ushort nQueryPort, uint unFlags, uint rTime32LastPlayedOnServer)`

**用途 / Purpose:** 向当前集合/状态中添加 `favorite game`。

### RemoveFavoriteGame
`public static bool RemoveFavoriteGame(AppId_t nAppID, uint nIP, ushort nConnPort, ushort nQueryPort, uint unFlags)`

**用途 / Purpose:** 从当前集合/状态中移除 `favorite game`。

### RequestLobbyList
`public static SteamAPICall_t RequestLobbyList()`

**用途 / Purpose:** 处理 `request lobby list` 相关逻辑。

### AddRequestLobbyListStringFilter
`public static void AddRequestLobbyListStringFilter(string pchKeyToMatch, string pchValueToMatch, ELobbyComparison eComparisonType)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list string filter`。

### AddRequestLobbyListNumericalFilter
`public static void AddRequestLobbyListNumericalFilter(string pchKeyToMatch, int nValueToMatch, ELobbyComparison eComparisonType)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list numerical filter`。

### AddRequestLobbyListNearValueFilter
`public static void AddRequestLobbyListNearValueFilter(string pchKeyToMatch, int nValueToBeCloseTo)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list near value filter`。

### AddRequestLobbyListFilterSlotsAvailable
`public static void AddRequestLobbyListFilterSlotsAvailable(int nSlotsAvailable)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list filter slots available`。

### AddRequestLobbyListDistanceFilter
`public static void AddRequestLobbyListDistanceFilter(ELobbyDistanceFilter eLobbyDistanceFilter)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list distance filter`。

### AddRequestLobbyListResultCountFilter
`public static void AddRequestLobbyListResultCountFilter(int cMaxResults)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list result count filter`。

### AddRequestLobbyListCompatibleMembersFilter
`public static void AddRequestLobbyListCompatibleMembersFilter(CSteamID steamIDLobby)`

**用途 / Purpose:** 向当前集合/状态中添加 `request lobby list compatible members filter`。

### GetLobbyByIndex
`public static CSteamID GetLobbyByIndex(int iLobby)`

**用途 / Purpose:** 获取 `lobby by index` 的当前值。

### CreateLobby
`public static SteamAPICall_t CreateLobby(ELobbyType eLobbyType, int cMaxMembers)`

**用途 / Purpose:** 创建一个 `lobby` 实例或对象。

### JoinLobby
`public static SteamAPICall_t JoinLobby(CSteamID steamIDLobby)`

**用途 / Purpose:** 处理 `join lobby` 相关逻辑。

### LeaveLobby
`public static void LeaveLobby(CSteamID steamIDLobby)`

**用途 / Purpose:** 处理 `leave lobby` 相关逻辑。

### InviteUserToLobby
`public static bool InviteUserToLobby(CSteamID steamIDLobby, CSteamID steamIDInvitee)`

**用途 / Purpose:** 处理 `invite user to lobby` 相关逻辑。

### GetNumLobbyMembers
`public static int GetNumLobbyMembers(CSteamID steamIDLobby)`

**用途 / Purpose:** 获取 `num lobby members` 的当前值。

### GetLobbyMemberByIndex
`public static CSteamID GetLobbyMemberByIndex(CSteamID steamIDLobby, int iMember)`

**用途 / Purpose:** 获取 `lobby member by index` 的当前值。

### GetLobbyData
`public static string GetLobbyData(CSteamID steamIDLobby, string pchKey)`

**用途 / Purpose:** 获取 `lobby data` 的当前值。

### SetLobbyData
`public static bool SetLobbyData(CSteamID steamIDLobby, string pchKey, string pchValue)`

**用途 / Purpose:** 设置 `lobby data` 的值或状态。

### GetLobbyDataCount
`public static int GetLobbyDataCount(CSteamID steamIDLobby)`

**用途 / Purpose:** 获取 `lobby data count` 的当前值。

### GetLobbyDataByIndex
`public static bool GetLobbyDataByIndex(CSteamID steamIDLobby, int iLobbyData, out string pchKey, int cchKeyBufferSize, out string pchValue, int cchValueBufferSize)`

**用途 / Purpose:** 获取 `lobby data by index` 的当前值。

### DeleteLobbyData
`public static bool DeleteLobbyData(CSteamID steamIDLobby, string pchKey)`

**用途 / Purpose:** 处理 `delete lobby data` 相关逻辑。

### GetLobbyMemberData
`public static string GetLobbyMemberData(CSteamID steamIDLobby, CSteamID steamIDUser, string pchKey)`

**用途 / Purpose:** 获取 `lobby member data` 的当前值。

### SetLobbyMemberData
`public static void SetLobbyMemberData(CSteamID steamIDLobby, string pchKey, string pchValue)`

**用途 / Purpose:** 设置 `lobby member data` 的值或状态。

### SendLobbyChatMsg
`public static bool SendLobbyChatMsg(CSteamID steamIDLobby, byte pvMsgBody, int cubMsgBody)`

**用途 / Purpose:** 处理 `send lobby chat msg` 相关逻辑。

### GetLobbyChatEntry
`public static int GetLobbyChatEntry(CSteamID steamIDLobby, int iChatID, out CSteamID pSteamIDUser, byte pvData, int cubData, out EChatEntryType peChatEntryType)`

**用途 / Purpose:** 获取 `lobby chat entry` 的当前值。

### RequestLobbyData
`public static bool RequestLobbyData(CSteamID steamIDLobby)`

**用途 / Purpose:** 处理 `request lobby data` 相关逻辑。

### SetLobbyGameServer
`public static void SetLobbyGameServer(CSteamID steamIDLobby, uint unGameServerIP, ushort unGameServerPort, CSteamID steamIDGameServer)`

**用途 / Purpose:** 设置 `lobby game server` 的值或状态。

### GetLobbyGameServer
`public static bool GetLobbyGameServer(CSteamID steamIDLobby, out uint punGameServerIP, out ushort punGameServerPort, out CSteamID psteamIDGameServer)`

**用途 / Purpose:** 获取 `lobby game server` 的当前值。

### SetLobbyMemberLimit
`public static bool SetLobbyMemberLimit(CSteamID steamIDLobby, int cMaxMembers)`

**用途 / Purpose:** 设置 `lobby member limit` 的值或状态。

### GetLobbyMemberLimit
`public static int GetLobbyMemberLimit(CSteamID steamIDLobby)`

**用途 / Purpose:** 获取 `lobby member limit` 的当前值。

### SetLobbyType
`public static bool SetLobbyType(CSteamID steamIDLobby, ELobbyType eLobbyType)`

**用途 / Purpose:** 设置 `lobby type` 的值或状态。

### SetLobbyJoinable
`public static bool SetLobbyJoinable(CSteamID steamIDLobby, bool bLobbyJoinable)`

**用途 / Purpose:** 设置 `lobby joinable` 的值或状态。

### GetLobbyOwner
`public static CSteamID GetLobbyOwner(CSteamID steamIDLobby)`

**用途 / Purpose:** 获取 `lobby owner` 的当前值。

### SetLobbyOwner
`public static bool SetLobbyOwner(CSteamID steamIDLobby, CSteamID steamIDNewOwner)`

**用途 / Purpose:** 设置 `lobby owner` 的值或状态。

### SetLinkedLobby
`public static bool SetLinkedLobby(CSteamID steamIDLobby, CSteamID steamIDLobbyDependent)`

**用途 / Purpose:** 设置 `linked lobby` 的值或状态。

## 使用示例

```csharp
SteamMatchmaking.GetFavoriteGameCount();
```

## 参见

- [完整类目录](../catalog)