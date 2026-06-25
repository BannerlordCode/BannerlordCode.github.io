---
title: "SteamGameServerStats"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamGameServerStats`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServerStats

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServerStats`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServerStats.cs`

## 概述

`SteamGameServerStats` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RequestUserStats
`public static SteamAPICall_t RequestUserStats(CSteamID steamIDUser)`

**用途 / Purpose:** 处理 `request user stats` 相关逻辑。

### GetUserStat
`public static bool GetUserStat(CSteamID steamIDUser, string pchName, out int pData)`

**用途 / Purpose:** 获取 `user stat` 的当前值。

### GetUserStat
`public static bool GetUserStat(CSteamID steamIDUser, string pchName, out float pData)`

**用途 / Purpose:** 获取 `user stat` 的当前值。

### GetUserAchievement
`public static bool GetUserAchievement(CSteamID steamIDUser, string pchName, out bool pbAchieved)`

**用途 / Purpose:** 获取 `user achievement` 的当前值。

### SetUserStat
`public static bool SetUserStat(CSteamID steamIDUser, string pchName, int nData)`

**用途 / Purpose:** 设置 `user stat` 的值或状态。

### SetUserStat
`public static bool SetUserStat(CSteamID steamIDUser, string pchName, float fData)`

**用途 / Purpose:** 设置 `user stat` 的值或状态。

### UpdateUserAvgRateStat
`public static bool UpdateUserAvgRateStat(CSteamID steamIDUser, string pchName, float flCountThisSession, double dSessionLength)`

**用途 / Purpose:** 更新 `user avg rate stat` 的状态或数据。

### SetUserAchievement
`public static bool SetUserAchievement(CSteamID steamIDUser, string pchName)`

**用途 / Purpose:** 设置 `user achievement` 的值或状态。

### ClearUserAchievement
`public static bool ClearUserAchievement(CSteamID steamIDUser, string pchName)`

**用途 / Purpose:** 处理 `clear user achievement` 相关逻辑。

### StoreUserStats
`public static SteamAPICall_t StoreUserStats(CSteamID steamIDUser)`

**用途 / Purpose:** 处理 `store user stats` 相关逻辑。

## 使用示例

```csharp
SteamGameServerStats.RequestUserStats(steamIDUser);
```

## 参见

- [完整类目录](../catalog)