<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamUserStats`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamUserStats

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamUserStats`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamUserStats.cs`

## Overview

`SteamUserStats` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### RequestCurrentStats
`public static bool RequestCurrentStats()`

**Purpose:** Handles logic related to `request current stats`.

### GetStat
`public static bool GetStat(string pchName, out int pData)`

**Purpose:** Gets the current value of `stat`.

### GetStat
`public static bool GetStat(string pchName, out float pData)`

**Purpose:** Gets the current value of `stat`.

### SetStat
`public static bool SetStat(string pchName, int nData)`

**Purpose:** Sets the value or state of `stat`.

### SetStat
`public static bool SetStat(string pchName, float fData)`

**Purpose:** Sets the value or state of `stat`.

### UpdateAvgRateStat
`public static bool UpdateAvgRateStat(string pchName, float flCountThisSession, double dSessionLength)`

**Purpose:** Updates the state or data of `avg rate stat`.

### GetAchievement
`public static bool GetAchievement(string pchName, out bool pbAchieved)`

**Purpose:** Gets the current value of `achievement`.

### SetAchievement
`public static bool SetAchievement(string pchName)`

**Purpose:** Sets the value or state of `achievement`.

### ClearAchievement
`public static bool ClearAchievement(string pchName)`

**Purpose:** Handles logic related to `clear achievement`.

### GetAchievementAndUnlockTime
`public static bool GetAchievementAndUnlockTime(string pchName, out bool pbAchieved, out uint punUnlockTime)`

**Purpose:** Gets the current value of `achievement and unlock time`.

### StoreStats
`public static bool StoreStats()`

**Purpose:** Handles logic related to `store stats`.

### GetAchievementIcon
`public static int GetAchievementIcon(string pchName)`

**Purpose:** Gets the current value of `achievement icon`.

### GetAchievementDisplayAttribute
`public static string GetAchievementDisplayAttribute(string pchName, string pchKey)`

**Purpose:** Gets the current value of `achievement display attribute`.

### IndicateAchievementProgress
`public static bool IndicateAchievementProgress(string pchName, uint nCurProgress, uint nMaxProgress)`

**Purpose:** Handles logic related to `indicate achievement progress`.

### GetNumAchievements
`public static uint GetNumAchievements()`

**Purpose:** Gets the current value of `num achievements`.

### GetAchievementName
`public static string GetAchievementName(uint iAchievement)`

**Purpose:** Gets the current value of `achievement name`.

### RequestUserStats
`public static SteamAPICall_t RequestUserStats(CSteamID steamIDUser)`

**Purpose:** Handles logic related to `request user stats`.

### GetUserStat
`public static bool GetUserStat(CSteamID steamIDUser, string pchName, out int pData)`

**Purpose:** Gets the current value of `user stat`.

### GetUserStat
`public static bool GetUserStat(CSteamID steamIDUser, string pchName, out float pData)`

**Purpose:** Gets the current value of `user stat`.

### GetUserAchievement
`public static bool GetUserAchievement(CSteamID steamIDUser, string pchName, out bool pbAchieved)`

**Purpose:** Gets the current value of `user achievement`.

### GetUserAchievementAndUnlockTime
`public static bool GetUserAchievementAndUnlockTime(CSteamID steamIDUser, string pchName, out bool pbAchieved, out uint punUnlockTime)`

**Purpose:** Gets the current value of `user achievement and unlock time`.

### ResetAllStats
`public static bool ResetAllStats(bool bAchievementsToo)`

**Purpose:** Resets `all stats` to its initial state.

### FindOrCreateLeaderboard
`public static SteamAPICall_t FindOrCreateLeaderboard(string pchLeaderboardName, ELeaderboardSortMethod eLeaderboardSortMethod, ELeaderboardDisplayType eLeaderboardDisplayType)`

**Purpose:** Handles logic related to `find or create leaderboard`.

### FindLeaderboard
`public static SteamAPICall_t FindLeaderboard(string pchLeaderboardName)`

**Purpose:** Handles logic related to `find leaderboard`.

### GetLeaderboardName
`public static string GetLeaderboardName(SteamLeaderboard_t hSteamLeaderboard)`

**Purpose:** Gets the current value of `leaderboard name`.

### GetLeaderboardEntryCount
`public static int GetLeaderboardEntryCount(SteamLeaderboard_t hSteamLeaderboard)`

**Purpose:** Gets the current value of `leaderboard entry count`.

### GetLeaderboardSortMethod
`public static ELeaderboardSortMethod GetLeaderboardSortMethod(SteamLeaderboard_t hSteamLeaderboard)`

**Purpose:** Gets the current value of `leaderboard sort method`.

### GetLeaderboardDisplayType
`public static ELeaderboardDisplayType GetLeaderboardDisplayType(SteamLeaderboard_t hSteamLeaderboard)`

**Purpose:** Gets the current value of `leaderboard display type`.

### DownloadLeaderboardEntries
`public static SteamAPICall_t DownloadLeaderboardEntries(SteamLeaderboard_t hSteamLeaderboard, ELeaderboardDataRequest eLeaderboardDataRequest, int nRangeStart, int nRangeEnd)`

**Purpose:** Handles logic related to `download leaderboard entries`.

### DownloadLeaderboardEntriesForUsers
`public static SteamAPICall_t DownloadLeaderboardEntriesForUsers(SteamLeaderboard_t hSteamLeaderboard, CSteamID prgUsers, int cUsers)`

**Purpose:** Handles logic related to `download leaderboard entries for users`.

### GetDownloadedLeaderboardEntry
`public static bool GetDownloadedLeaderboardEntry(SteamLeaderboardEntries_t hSteamLeaderboardEntries, int index, out LeaderboardEntry_t pLeaderboardEntry, int pDetails, int cDetailsMax)`

**Purpose:** Gets the current value of `downloaded leaderboard entry`.

### UploadLeaderboardScore
`public static SteamAPICall_t UploadLeaderboardScore(SteamLeaderboard_t hSteamLeaderboard, ELeaderboardUploadScoreMethod eLeaderboardUploadScoreMethod, int nScore, int pScoreDetails, int cScoreDetailsCount)`

**Purpose:** Handles logic related to `upload leaderboard score`.

### AttachLeaderboardUGC
`public static SteamAPICall_t AttachLeaderboardUGC(SteamLeaderboard_t hSteamLeaderboard, UGCHandle_t hUGC)`

**Purpose:** Handles logic related to `attach leaderboard u g c`.

### GetNumberOfCurrentPlayers
`public static SteamAPICall_t GetNumberOfCurrentPlayers()`

**Purpose:** Gets the current value of `number of current players`.

### RequestGlobalAchievementPercentages
`public static SteamAPICall_t RequestGlobalAchievementPercentages()`

**Purpose:** Handles logic related to `request global achievement percentages`.

### GetMostAchievedAchievementInfo
`public static int GetMostAchievedAchievementInfo(out string pchName, uint unNameBufLen, out float pflPercent, out bool pbAchieved)`

**Purpose:** Gets the current value of `most achieved achievement info`.

### GetNextMostAchievedAchievementInfo
`public static int GetNextMostAchievedAchievementInfo(int iIteratorPrevious, out string pchName, uint unNameBufLen, out float pflPercent, out bool pbAchieved)`

**Purpose:** Gets the current value of `next most achieved achievement info`.

### GetAchievementAchievedPercent
`public static bool GetAchievementAchievedPercent(string pchName, out float pflPercent)`

**Purpose:** Gets the current value of `achievement achieved percent`.

### RequestGlobalStats
`public static SteamAPICall_t RequestGlobalStats(int nHistoryDays)`

**Purpose:** Handles logic related to `request global stats`.

### GetGlobalStat
`public static bool GetGlobalStat(string pchStatName, out long pData)`

**Purpose:** Gets the current value of `global stat`.

### GetGlobalStat
`public static bool GetGlobalStat(string pchStatName, out double pData)`

**Purpose:** Gets the current value of `global stat`.

### GetGlobalStatHistory
`public static int GetGlobalStatHistory(string pchStatName, long pData, uint cubData)`

**Purpose:** Gets the current value of `global stat history`.

### GetGlobalStatHistory
`public static int GetGlobalStatHistory(string pchStatName, double pData, uint cubData)`

**Purpose:** Gets the current value of `global stat history`.

### GetAchievementProgressLimits
`public static bool GetAchievementProgressLimits(string pchName, out int pnMinProgress, out int pnMaxProgress)`

**Purpose:** Gets the current value of `achievement progress limits`.

### GetAchievementProgressLimits
`public static bool GetAchievementProgressLimits(string pchName, out float pfMinProgress, out float pfMaxProgress)`

**Purpose:** Gets the current value of `achievement progress limits`.

## Usage Example

```csharp
SteamUserStats.RequestCurrentStats();
```

## See Also

- [Complete Class Catalog](../catalog)