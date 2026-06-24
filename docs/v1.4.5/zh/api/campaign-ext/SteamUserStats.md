<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SteamUserStats`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SteamUserStats

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamUserStats`
**Base:** 无
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamUserStats.cs`

## 概述

`SteamUserStats` 位于 `Steamworks`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Steamworks` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### RequestCurrentStats
`public static bool RequestCurrentStats()`

**用途 / Purpose:** 处理 `request current stats` 相关逻辑。

### GetStat
`public static bool GetStat(string pchName, out int pData)`

**用途 / Purpose:** 获取 `stat` 的当前值。

### GetStat
`public static bool GetStat(string pchName, out float pData)`

**用途 / Purpose:** 获取 `stat` 的当前值。

### SetStat
`public static bool SetStat(string pchName, int nData)`

**用途 / Purpose:** 设置 `stat` 的值或状态。

### SetStat
`public static bool SetStat(string pchName, float fData)`

**用途 / Purpose:** 设置 `stat` 的值或状态。

### UpdateAvgRateStat
`public static bool UpdateAvgRateStat(string pchName, float flCountThisSession, double dSessionLength)`

**用途 / Purpose:** 更新 `avg rate stat` 的状态或数据。

### GetAchievement
`public static bool GetAchievement(string pchName, out bool pbAchieved)`

**用途 / Purpose:** 获取 `achievement` 的当前值。

### SetAchievement
`public static bool SetAchievement(string pchName)`

**用途 / Purpose:** 设置 `achievement` 的值或状态。

### ClearAchievement
`public static bool ClearAchievement(string pchName)`

**用途 / Purpose:** 处理 `clear achievement` 相关逻辑。

### GetAchievementAndUnlockTime
`public static bool GetAchievementAndUnlockTime(string pchName, out bool pbAchieved, out uint punUnlockTime)`

**用途 / Purpose:** 获取 `achievement and unlock time` 的当前值。

### StoreStats
`public static bool StoreStats()`

**用途 / Purpose:** 处理 `store stats` 相关逻辑。

### GetAchievementIcon
`public static int GetAchievementIcon(string pchName)`

**用途 / Purpose:** 获取 `achievement icon` 的当前值。

### GetAchievementDisplayAttribute
`public static string GetAchievementDisplayAttribute(string pchName, string pchKey)`

**用途 / Purpose:** 获取 `achievement display attribute` 的当前值。

### IndicateAchievementProgress
`public static bool IndicateAchievementProgress(string pchName, uint nCurProgress, uint nMaxProgress)`

**用途 / Purpose:** 处理 `indicate achievement progress` 相关逻辑。

### GetNumAchievements
`public static uint GetNumAchievements()`

**用途 / Purpose:** 获取 `num achievements` 的当前值。

### GetAchievementName
`public static string GetAchievementName(uint iAchievement)`

**用途 / Purpose:** 获取 `achievement name` 的当前值。

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

### GetUserAchievementAndUnlockTime
`public static bool GetUserAchievementAndUnlockTime(CSteamID steamIDUser, string pchName, out bool pbAchieved, out uint punUnlockTime)`

**用途 / Purpose:** 获取 `user achievement and unlock time` 的当前值。

### ResetAllStats
`public static bool ResetAllStats(bool bAchievementsToo)`

**用途 / Purpose:** 将 `all stats` 重置为初始状态。

### FindOrCreateLeaderboard
`public static SteamAPICall_t FindOrCreateLeaderboard(string pchLeaderboardName, ELeaderboardSortMethod eLeaderboardSortMethod, ELeaderboardDisplayType eLeaderboardDisplayType)`

**用途 / Purpose:** 处理 `find or create leaderboard` 相关逻辑。

### FindLeaderboard
`public static SteamAPICall_t FindLeaderboard(string pchLeaderboardName)`

**用途 / Purpose:** 处理 `find leaderboard` 相关逻辑。

### GetLeaderboardName
`public static string GetLeaderboardName(SteamLeaderboard_t hSteamLeaderboard)`

**用途 / Purpose:** 获取 `leaderboard name` 的当前值。

### GetLeaderboardEntryCount
`public static int GetLeaderboardEntryCount(SteamLeaderboard_t hSteamLeaderboard)`

**用途 / Purpose:** 获取 `leaderboard entry count` 的当前值。

### GetLeaderboardSortMethod
`public static ELeaderboardSortMethod GetLeaderboardSortMethod(SteamLeaderboard_t hSteamLeaderboard)`

**用途 / Purpose:** 获取 `leaderboard sort method` 的当前值。

### GetLeaderboardDisplayType
`public static ELeaderboardDisplayType GetLeaderboardDisplayType(SteamLeaderboard_t hSteamLeaderboard)`

**用途 / Purpose:** 获取 `leaderboard display type` 的当前值。

### DownloadLeaderboardEntries
`public static SteamAPICall_t DownloadLeaderboardEntries(SteamLeaderboard_t hSteamLeaderboard, ELeaderboardDataRequest eLeaderboardDataRequest, int nRangeStart, int nRangeEnd)`

**用途 / Purpose:** 处理 `download leaderboard entries` 相关逻辑。

### DownloadLeaderboardEntriesForUsers
`public static SteamAPICall_t DownloadLeaderboardEntriesForUsers(SteamLeaderboard_t hSteamLeaderboard, CSteamID prgUsers, int cUsers)`

**用途 / Purpose:** 处理 `download leaderboard entries for users` 相关逻辑。

### GetDownloadedLeaderboardEntry
`public static bool GetDownloadedLeaderboardEntry(SteamLeaderboardEntries_t hSteamLeaderboardEntries, int index, out LeaderboardEntry_t pLeaderboardEntry, int pDetails, int cDetailsMax)`

**用途 / Purpose:** 获取 `downloaded leaderboard entry` 的当前值。

### UploadLeaderboardScore
`public static SteamAPICall_t UploadLeaderboardScore(SteamLeaderboard_t hSteamLeaderboard, ELeaderboardUploadScoreMethod eLeaderboardUploadScoreMethod, int nScore, int pScoreDetails, int cScoreDetailsCount)`

**用途 / Purpose:** 处理 `upload leaderboard score` 相关逻辑。

### AttachLeaderboardUGC
`public static SteamAPICall_t AttachLeaderboardUGC(SteamLeaderboard_t hSteamLeaderboard, UGCHandle_t hUGC)`

**用途 / Purpose:** 处理 `attach leaderboard u g c` 相关逻辑。

### GetNumberOfCurrentPlayers
`public static SteamAPICall_t GetNumberOfCurrentPlayers()`

**用途 / Purpose:** 获取 `number of current players` 的当前值。

### RequestGlobalAchievementPercentages
`public static SteamAPICall_t RequestGlobalAchievementPercentages()`

**用途 / Purpose:** 处理 `request global achievement percentages` 相关逻辑。

### GetMostAchievedAchievementInfo
`public static int GetMostAchievedAchievementInfo(out string pchName, uint unNameBufLen, out float pflPercent, out bool pbAchieved)`

**用途 / Purpose:** 获取 `most achieved achievement info` 的当前值。

### GetNextMostAchievedAchievementInfo
`public static int GetNextMostAchievedAchievementInfo(int iIteratorPrevious, out string pchName, uint unNameBufLen, out float pflPercent, out bool pbAchieved)`

**用途 / Purpose:** 获取 `next most achieved achievement info` 的当前值。

### GetAchievementAchievedPercent
`public static bool GetAchievementAchievedPercent(string pchName, out float pflPercent)`

**用途 / Purpose:** 获取 `achievement achieved percent` 的当前值。

### RequestGlobalStats
`public static SteamAPICall_t RequestGlobalStats(int nHistoryDays)`

**用途 / Purpose:** 处理 `request global stats` 相关逻辑。

### GetGlobalStat
`public static bool GetGlobalStat(string pchStatName, out long pData)`

**用途 / Purpose:** 获取 `global stat` 的当前值。

### GetGlobalStat
`public static bool GetGlobalStat(string pchStatName, out double pData)`

**用途 / Purpose:** 获取 `global stat` 的当前值。

### GetGlobalStatHistory
`public static int GetGlobalStatHistory(string pchStatName, long pData, uint cubData)`

**用途 / Purpose:** 获取 `global stat history` 的当前值。

### GetGlobalStatHistory
`public static int GetGlobalStatHistory(string pchStatName, double pData, uint cubData)`

**用途 / Purpose:** 获取 `global stat history` 的当前值。

### GetAchievementProgressLimits
`public static bool GetAchievementProgressLimits(string pchName, out int pnMinProgress, out int pnMaxProgress)`

**用途 / Purpose:** 获取 `achievement progress limits` 的当前值。

### GetAchievementProgressLimits
`public static bool GetAchievementProgressLimits(string pchName, out float pfMinProgress, out float pfMaxProgress)`

**用途 / Purpose:** 获取 `achievement progress limits` 的当前值。

## 使用示例

```csharp
SteamUserStats.RequestCurrentStats();
```

## 参见

- [完整类目录](../catalog)