---
title: "SteamGameSearch"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamGameSearch`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameSearch

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameSearch`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameSearch.cs`

## 概述

`SteamGameSearch` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### AddGameSearchParams
`public static EGameSearchErrorCode_t AddGameSearchParams(string pchKeyToFind, string pchValuesToFind)`

**用途 / Purpose:** 向当前集合/状态中添加 `game search params`。

### SearchForGameWithLobby
`public static EGameSearchErrorCode_t SearchForGameWithLobby(CSteamID steamIDLobby, int nPlayerMin, int nPlayerMax)`

**用途 / Purpose:** 处理 `search for game with lobby` 相关逻辑。

### SearchForGameSolo
`public static EGameSearchErrorCode_t SearchForGameSolo(int nPlayerMin, int nPlayerMax)`

**用途 / Purpose:** 处理 `search for game solo` 相关逻辑。

### AcceptGame
`public static EGameSearchErrorCode_t AcceptGame()`

**用途 / Purpose:** 处理 `accept game` 相关逻辑。

### DeclineGame
`public static EGameSearchErrorCode_t DeclineGame()`

**用途 / Purpose:** 处理 `decline game` 相关逻辑。

### RetrieveConnectionDetails
`public static EGameSearchErrorCode_t RetrieveConnectionDetails(CSteamID steamIDHost, out string pchConnectionDetails, int cubConnectionDetails)`

**用途 / Purpose:** 处理 `retrieve connection details` 相关逻辑。

### EndGameSearch
`public static EGameSearchErrorCode_t EndGameSearch()`

**用途 / Purpose:** 处理 `end game search` 相关逻辑。

### SetGameHostParams
`public static EGameSearchErrorCode_t SetGameHostParams(string pchKey, string pchValue)`

**用途 / Purpose:** 设置 `game host params` 的值或状态。

### SetConnectionDetails
`public static EGameSearchErrorCode_t SetConnectionDetails(string pchConnectionDetails, int cubConnectionDetails)`

**用途 / Purpose:** 设置 `connection details` 的值或状态。

### RequestPlayersForGame
`public static EGameSearchErrorCode_t RequestPlayersForGame(int nPlayerMin, int nPlayerMax, int nMaxTeamSize)`

**用途 / Purpose:** 处理 `request players for game` 相关逻辑。

### HostConfirmGameStart
`public static EGameSearchErrorCode_t HostConfirmGameStart(ulong ullUniqueGameID)`

**用途 / Purpose:** 处理 `host confirm game start` 相关逻辑。

### CancelRequestPlayersForGame
`public static EGameSearchErrorCode_t CancelRequestPlayersForGame()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel request players for game`。

### SubmitPlayerResult
`public static EGameSearchErrorCode_t SubmitPlayerResult(ulong ullUniqueGameID, CSteamID steamIDPlayer, EPlayerResult_t EPlayerResult)`

**用途 / Purpose:** 处理 `submit player result` 相关逻辑。

### EndGame
`public static EGameSearchErrorCode_t EndGame(ulong ullUniqueGameID)`

**用途 / Purpose:** 处理 `end game` 相关逻辑。

## 使用示例

```csharp
SteamGameSearch.AddGameSearchParams("example", "example");
```

## 参见

- [完整类目录](../catalog)