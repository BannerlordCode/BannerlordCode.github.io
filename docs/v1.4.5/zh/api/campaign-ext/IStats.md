<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `IStats`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# IStats

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IStats : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IStats.cs`

## 概述

`IStats` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### RequestUserStatsAndAchievements
`public virtual void RequestUserStatsAndAchievements(GalaxyID userID, IUserStatsAndAchievementsRetrieveListener listener)`

**用途 / Purpose:** 处理 `request user stats and achievements` 相关逻辑。

### RequestUserStatsAndAchievements
`public virtual void RequestUserStatsAndAchievements(GalaxyID userID)`

**用途 / Purpose:** 处理 `request user stats and achievements` 相关逻辑。

### RequestUserStatsAndAchievements
`public virtual void RequestUserStatsAndAchievements()`

**用途 / Purpose:** 处理 `request user stats and achievements` 相关逻辑。

### GetStatInt
`public virtual int GetStatInt(string name, GalaxyID userID)`

**用途 / Purpose:** 获取 `stat int` 的当前值。

### GetStatInt
`public virtual int GetStatInt(string name)`

**用途 / Purpose:** 获取 `stat int` 的当前值。

### GetStatFloat
`public virtual float GetStatFloat(string name, GalaxyID userID)`

**用途 / Purpose:** 获取 `stat float` 的当前值。

### GetStatFloat
`public virtual float GetStatFloat(string name)`

**用途 / Purpose:** 获取 `stat float` 的当前值。

### SetStatInt
`public virtual void SetStatInt(string name, int value)`

**用途 / Purpose:** 设置 `stat int` 的值或状态。

### SetStatFloat
`public virtual void SetStatFloat(string name, float value)`

**用途 / Purpose:** 设置 `stat float` 的值或状态。

### UpdateAvgRateStat
`public virtual void UpdateAvgRateStat(string name, float countThisSession, double sessionLength)`

**用途 / Purpose:** 更新 `avg rate stat` 的状态或数据。

### GetAchievement
`public virtual void GetAchievement(string name, ref bool unlocked, ref uint unlockTime, GalaxyID userID)`

**用途 / Purpose:** 获取 `achievement` 的当前值。

### GetAchievement
`public virtual void GetAchievement(string name, ref bool unlocked, ref uint unlockTime)`

**用途 / Purpose:** 获取 `achievement` 的当前值。

### SetAchievement
`public virtual void SetAchievement(string name)`

**用途 / Purpose:** 设置 `achievement` 的值或状态。

### ClearAchievement
`public virtual void ClearAchievement(string name)`

**用途 / Purpose:** 处理 `clear achievement` 相关逻辑。

### StoreStatsAndAchievements
`public virtual void StoreStatsAndAchievements(IStatsAndAchievementsStoreListener listener)`

**用途 / Purpose:** 处理 `store stats and achievements` 相关逻辑。

### StoreStatsAndAchievements
`public virtual void StoreStatsAndAchievements()`

**用途 / Purpose:** 处理 `store stats and achievements` 相关逻辑。

### ResetStatsAndAchievements
`public virtual void ResetStatsAndAchievements(IStatsAndAchievementsStoreListener listener)`

**用途 / Purpose:** 将 `stats and achievements` 重置为初始状态。

### ResetStatsAndAchievements
`public virtual void ResetStatsAndAchievements()`

**用途 / Purpose:** 将 `stats and achievements` 重置为初始状态。

### GetAchievementDisplayName
`public virtual string GetAchievementDisplayName(string name)`

**用途 / Purpose:** 获取 `achievement display name` 的当前值。

### GetAchievementDisplayNameCopy
`public virtual void GetAchievementDisplayNameCopy(string name, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `achievement display name copy` 的当前值。

### GetAchievementDescription
`public virtual string GetAchievementDescription(string name)`

**用途 / Purpose:** 获取 `achievement description` 的当前值。

### GetAchievementDescriptionCopy
`public virtual void GetAchievementDescriptionCopy(string name, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `achievement description copy` 的当前值。

### IsAchievementVisible
`public virtual bool IsAchievementVisible(string name)`

**用途 / Purpose:** 处理 `is achievement visible` 相关逻辑。

### IsAchievementVisibleWhileLocked
`public virtual bool IsAchievementVisibleWhileLocked(string name)`

**用途 / Purpose:** 处理 `is achievement visible while locked` 相关逻辑。

### RequestLeaderboards
`public virtual void RequestLeaderboards(ILeaderboardsRetrieveListener listener)`

**用途 / Purpose:** 处理 `request leaderboards` 相关逻辑。

### RequestLeaderboards
`public virtual void RequestLeaderboards()`

**用途 / Purpose:** 处理 `request leaderboards` 相关逻辑。

### GetLeaderboardDisplayName
`public virtual string GetLeaderboardDisplayName(string name)`

**用途 / Purpose:** 获取 `leaderboard display name` 的当前值。

### GetLeaderboardDisplayNameCopy
`public virtual void GetLeaderboardDisplayNameCopy(string name, out string buffer, uint bufferLength)`

**用途 / Purpose:** 获取 `leaderboard display name copy` 的当前值。

### GetLeaderboardSortMethod
`public virtual LeaderboardSortMethod GetLeaderboardSortMethod(string name)`

**用途 / Purpose:** 获取 `leaderboard sort method` 的当前值。

### GetLeaderboardDisplayType
`public virtual LeaderboardDisplayType GetLeaderboardDisplayType(string name)`

**用途 / Purpose:** 获取 `leaderboard display type` 的当前值。

### RequestLeaderboardEntriesGlobal
`public virtual void RequestLeaderboardEntriesGlobal(string name, uint rangeStart, uint rangeEnd, ILeaderboardEntriesRetrieveListener listener)`

**用途 / Purpose:** 处理 `request leaderboard entries global` 相关逻辑。

### RequestLeaderboardEntriesGlobal
`public virtual void RequestLeaderboardEntriesGlobal(string name, uint rangeStart, uint rangeEnd)`

**用途 / Purpose:** 处理 `request leaderboard entries global` 相关逻辑。

### RequestLeaderboardEntriesAroundUser
`public virtual void RequestLeaderboardEntriesAroundUser(string name, uint countBefore, uint countAfter, GalaxyID userID, ILeaderboardEntriesRetrieveListener listener)`

**用途 / Purpose:** 处理 `request leaderboard entries around user` 相关逻辑。

### RequestLeaderboardEntriesAroundUser
`public virtual void RequestLeaderboardEntriesAroundUser(string name, uint countBefore, uint countAfter, GalaxyID userID)`

**用途 / Purpose:** 处理 `request leaderboard entries around user` 相关逻辑。

### RequestLeaderboardEntriesAroundUser
`public virtual void RequestLeaderboardEntriesAroundUser(string name, uint countBefore, uint countAfter)`

**用途 / Purpose:** 处理 `request leaderboard entries around user` 相关逻辑。

### RequestLeaderboardEntriesForUsers
`public virtual void RequestLeaderboardEntriesForUsers(string name, ref GalaxyID userArray, ILeaderboardEntriesRetrieveListener listener)`

**用途 / Purpose:** 处理 `request leaderboard entries for users` 相关逻辑。

### RequestLeaderboardEntriesForUsers
`public virtual void RequestLeaderboardEntriesForUsers(string name, ref GalaxyID userArray)`

**用途 / Purpose:** 处理 `request leaderboard entries for users` 相关逻辑。

### GetRequestedLeaderboardEntry
`public virtual void GetRequestedLeaderboardEntry(uint index, ref uint rank, ref int score, ref GalaxyID userID)`

**用途 / Purpose:** 获取 `requested leaderboard entry` 的当前值。

### GetRequestedLeaderboardEntryWithDetails
`public virtual void GetRequestedLeaderboardEntryWithDetails(uint index, ref uint rank, ref int score, byte details, uint detailsSize, ref uint outDetailsSize, ref GalaxyID userID)`

**用途 / Purpose:** 获取 `requested leaderboard entry with details` 的当前值。

### SetLeaderboardScore
`public virtual void SetLeaderboardScore(string name, int score, bool forceUpdate, ILeaderboardScoreUpdateListener listener)`

**用途 / Purpose:** 设置 `leaderboard score` 的值或状态。

### SetLeaderboardScore
`public virtual void SetLeaderboardScore(string name, int score, bool forceUpdate)`

**用途 / Purpose:** 设置 `leaderboard score` 的值或状态。

### SetLeaderboardScore
`public virtual void SetLeaderboardScore(string name, int score)`

**用途 / Purpose:** 设置 `leaderboard score` 的值或状态。

### SetLeaderboardScoreWithDetails
`public virtual void SetLeaderboardScoreWithDetails(string name, int score, byte details, uint detailsSize, bool forceUpdate, ILeaderboardScoreUpdateListener listener)`

**用途 / Purpose:** 设置 `leaderboard score with details` 的值或状态。

### SetLeaderboardScoreWithDetails
`public virtual void SetLeaderboardScoreWithDetails(string name, int score, byte details, uint detailsSize, bool forceUpdate)`

**用途 / Purpose:** 设置 `leaderboard score with details` 的值或状态。

### SetLeaderboardScoreWithDetails
`public virtual void SetLeaderboardScoreWithDetails(string name, int score, byte details, uint detailsSize)`

**用途 / Purpose:** 设置 `leaderboard score with details` 的值或状态。

### GetLeaderboardEntryCount
`public virtual uint GetLeaderboardEntryCount(string name)`

**用途 / Purpose:** 获取 `leaderboard entry count` 的当前值。

### FindLeaderboard
`public virtual void FindLeaderboard(string name, ILeaderboardRetrieveListener listener)`

**用途 / Purpose:** 处理 `find leaderboard` 相关逻辑。

### FindLeaderboard
`public virtual void FindLeaderboard(string name)`

**用途 / Purpose:** 处理 `find leaderboard` 相关逻辑。

### FindOrCreateLeaderboard
`public virtual void FindOrCreateLeaderboard(string name, string displayName, LeaderboardSortMethod sortMethod, LeaderboardDisplayType displayType, ILeaderboardRetrieveListener listener)`

**用途 / Purpose:** 处理 `find or create leaderboard` 相关逻辑。

### FindOrCreateLeaderboard
`public virtual void FindOrCreateLeaderboard(string name, string displayName, LeaderboardSortMethod sortMethod, LeaderboardDisplayType displayType)`

**用途 / Purpose:** 处理 `find or create leaderboard` 相关逻辑。

### RequestUserTimePlayed
`public virtual void RequestUserTimePlayed(GalaxyID userID, IUserTimePlayedRetrieveListener listener)`

**用途 / Purpose:** 处理 `request user time played` 相关逻辑。

### RequestUserTimePlayed
`public virtual void RequestUserTimePlayed(GalaxyID userID)`

**用途 / Purpose:** 处理 `request user time played` 相关逻辑。

### RequestUserTimePlayed
`public virtual void RequestUserTimePlayed()`

**用途 / Purpose:** 处理 `request user time played` 相关逻辑。

### GetUserTimePlayed
`public virtual uint GetUserTimePlayed(GalaxyID userID)`

**用途 / Purpose:** 获取 `user time played` 的当前值。

### GetUserTimePlayed
`public virtual uint GetUserTimePlayed()`

**用途 / Purpose:** 获取 `user time played` 的当前值。

## 使用示例

```csharp
var value = new IStats();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)