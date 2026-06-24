<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IStats`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IStats

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class IStats : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IStats.cs`

## Overview

`IStats` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### RequestUserStatsAndAchievements
`public virtual void RequestUserStatsAndAchievements(GalaxyID userID, IUserStatsAndAchievementsRetrieveListener listener)`

**Purpose:** Handles logic related to `request user stats and achievements`.

### RequestUserStatsAndAchievements
`public virtual void RequestUserStatsAndAchievements(GalaxyID userID)`

**Purpose:** Handles logic related to `request user stats and achievements`.

### RequestUserStatsAndAchievements
`public virtual void RequestUserStatsAndAchievements()`

**Purpose:** Handles logic related to `request user stats and achievements`.

### GetStatInt
`public virtual int GetStatInt(string name, GalaxyID userID)`

**Purpose:** Gets the current value of `stat int`.

### GetStatInt
`public virtual int GetStatInt(string name)`

**Purpose:** Gets the current value of `stat int`.

### GetStatFloat
`public virtual float GetStatFloat(string name, GalaxyID userID)`

**Purpose:** Gets the current value of `stat float`.

### GetStatFloat
`public virtual float GetStatFloat(string name)`

**Purpose:** Gets the current value of `stat float`.

### SetStatInt
`public virtual void SetStatInt(string name, int value)`

**Purpose:** Sets the value or state of `stat int`.

### SetStatFloat
`public virtual void SetStatFloat(string name, float value)`

**Purpose:** Sets the value or state of `stat float`.

### UpdateAvgRateStat
`public virtual void UpdateAvgRateStat(string name, float countThisSession, double sessionLength)`

**Purpose:** Updates the state or data of `avg rate stat`.

### GetAchievement
`public virtual void GetAchievement(string name, ref bool unlocked, ref uint unlockTime, GalaxyID userID)`

**Purpose:** Gets the current value of `achievement`.

### GetAchievement
`public virtual void GetAchievement(string name, ref bool unlocked, ref uint unlockTime)`

**Purpose:** Gets the current value of `achievement`.

### SetAchievement
`public virtual void SetAchievement(string name)`

**Purpose:** Sets the value or state of `achievement`.

### ClearAchievement
`public virtual void ClearAchievement(string name)`

**Purpose:** Handles logic related to `clear achievement`.

### StoreStatsAndAchievements
`public virtual void StoreStatsAndAchievements(IStatsAndAchievementsStoreListener listener)`

**Purpose:** Handles logic related to `store stats and achievements`.

### StoreStatsAndAchievements
`public virtual void StoreStatsAndAchievements()`

**Purpose:** Handles logic related to `store stats and achievements`.

### ResetStatsAndAchievements
`public virtual void ResetStatsAndAchievements(IStatsAndAchievementsStoreListener listener)`

**Purpose:** Resets `stats and achievements` to its initial state.

### ResetStatsAndAchievements
`public virtual void ResetStatsAndAchievements()`

**Purpose:** Resets `stats and achievements` to its initial state.

### GetAchievementDisplayName
`public virtual string GetAchievementDisplayName(string name)`

**Purpose:** Gets the current value of `achievement display name`.

### GetAchievementDisplayNameCopy
`public virtual void GetAchievementDisplayNameCopy(string name, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `achievement display name copy`.

### GetAchievementDescription
`public virtual string GetAchievementDescription(string name)`

**Purpose:** Gets the current value of `achievement description`.

### GetAchievementDescriptionCopy
`public virtual void GetAchievementDescriptionCopy(string name, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `achievement description copy`.

### IsAchievementVisible
`public virtual bool IsAchievementVisible(string name)`

**Purpose:** Handles logic related to `is achievement visible`.

### IsAchievementVisibleWhileLocked
`public virtual bool IsAchievementVisibleWhileLocked(string name)`

**Purpose:** Handles logic related to `is achievement visible while locked`.

### RequestLeaderboards
`public virtual void RequestLeaderboards(ILeaderboardsRetrieveListener listener)`

**Purpose:** Handles logic related to `request leaderboards`.

### RequestLeaderboards
`public virtual void RequestLeaderboards()`

**Purpose:** Handles logic related to `request leaderboards`.

### GetLeaderboardDisplayName
`public virtual string GetLeaderboardDisplayName(string name)`

**Purpose:** Gets the current value of `leaderboard display name`.

### GetLeaderboardDisplayNameCopy
`public virtual void GetLeaderboardDisplayNameCopy(string name, out string buffer, uint bufferLength)`

**Purpose:** Gets the current value of `leaderboard display name copy`.

### GetLeaderboardSortMethod
`public virtual LeaderboardSortMethod GetLeaderboardSortMethod(string name)`

**Purpose:** Gets the current value of `leaderboard sort method`.

### GetLeaderboardDisplayType
`public virtual LeaderboardDisplayType GetLeaderboardDisplayType(string name)`

**Purpose:** Gets the current value of `leaderboard display type`.

### RequestLeaderboardEntriesGlobal
`public virtual void RequestLeaderboardEntriesGlobal(string name, uint rangeStart, uint rangeEnd, ILeaderboardEntriesRetrieveListener listener)`

**Purpose:** Handles logic related to `request leaderboard entries global`.

### RequestLeaderboardEntriesGlobal
`public virtual void RequestLeaderboardEntriesGlobal(string name, uint rangeStart, uint rangeEnd)`

**Purpose:** Handles logic related to `request leaderboard entries global`.

### RequestLeaderboardEntriesAroundUser
`public virtual void RequestLeaderboardEntriesAroundUser(string name, uint countBefore, uint countAfter, GalaxyID userID, ILeaderboardEntriesRetrieveListener listener)`

**Purpose:** Handles logic related to `request leaderboard entries around user`.

### RequestLeaderboardEntriesAroundUser
`public virtual void RequestLeaderboardEntriesAroundUser(string name, uint countBefore, uint countAfter, GalaxyID userID)`

**Purpose:** Handles logic related to `request leaderboard entries around user`.

### RequestLeaderboardEntriesAroundUser
`public virtual void RequestLeaderboardEntriesAroundUser(string name, uint countBefore, uint countAfter)`

**Purpose:** Handles logic related to `request leaderboard entries around user`.

### RequestLeaderboardEntriesForUsers
`public virtual void RequestLeaderboardEntriesForUsers(string name, ref GalaxyID userArray, ILeaderboardEntriesRetrieveListener listener)`

**Purpose:** Handles logic related to `request leaderboard entries for users`.

### RequestLeaderboardEntriesForUsers
`public virtual void RequestLeaderboardEntriesForUsers(string name, ref GalaxyID userArray)`

**Purpose:** Handles logic related to `request leaderboard entries for users`.

### GetRequestedLeaderboardEntry
`public virtual void GetRequestedLeaderboardEntry(uint index, ref uint rank, ref int score, ref GalaxyID userID)`

**Purpose:** Gets the current value of `requested leaderboard entry`.

### GetRequestedLeaderboardEntryWithDetails
`public virtual void GetRequestedLeaderboardEntryWithDetails(uint index, ref uint rank, ref int score, byte details, uint detailsSize, ref uint outDetailsSize, ref GalaxyID userID)`

**Purpose:** Gets the current value of `requested leaderboard entry with details`.

### SetLeaderboardScore
`public virtual void SetLeaderboardScore(string name, int score, bool forceUpdate, ILeaderboardScoreUpdateListener listener)`

**Purpose:** Sets the value or state of `leaderboard score`.

### SetLeaderboardScore
`public virtual void SetLeaderboardScore(string name, int score, bool forceUpdate)`

**Purpose:** Sets the value or state of `leaderboard score`.

### SetLeaderboardScore
`public virtual void SetLeaderboardScore(string name, int score)`

**Purpose:** Sets the value or state of `leaderboard score`.

### SetLeaderboardScoreWithDetails
`public virtual void SetLeaderboardScoreWithDetails(string name, int score, byte details, uint detailsSize, bool forceUpdate, ILeaderboardScoreUpdateListener listener)`

**Purpose:** Sets the value or state of `leaderboard score with details`.

### SetLeaderboardScoreWithDetails
`public virtual void SetLeaderboardScoreWithDetails(string name, int score, byte details, uint detailsSize, bool forceUpdate)`

**Purpose:** Sets the value or state of `leaderboard score with details`.

### SetLeaderboardScoreWithDetails
`public virtual void SetLeaderboardScoreWithDetails(string name, int score, byte details, uint detailsSize)`

**Purpose:** Sets the value or state of `leaderboard score with details`.

### GetLeaderboardEntryCount
`public virtual uint GetLeaderboardEntryCount(string name)`

**Purpose:** Gets the current value of `leaderboard entry count`.

### FindLeaderboard
`public virtual void FindLeaderboard(string name, ILeaderboardRetrieveListener listener)`

**Purpose:** Handles logic related to `find leaderboard`.

### FindLeaderboard
`public virtual void FindLeaderboard(string name)`

**Purpose:** Handles logic related to `find leaderboard`.

### FindOrCreateLeaderboard
`public virtual void FindOrCreateLeaderboard(string name, string displayName, LeaderboardSortMethod sortMethod, LeaderboardDisplayType displayType, ILeaderboardRetrieveListener listener)`

**Purpose:** Handles logic related to `find or create leaderboard`.

### FindOrCreateLeaderboard
`public virtual void FindOrCreateLeaderboard(string name, string displayName, LeaderboardSortMethod sortMethod, LeaderboardDisplayType displayType)`

**Purpose:** Handles logic related to `find or create leaderboard`.

### RequestUserTimePlayed
`public virtual void RequestUserTimePlayed(GalaxyID userID, IUserTimePlayedRetrieveListener listener)`

**Purpose:** Handles logic related to `request user time played`.

### RequestUserTimePlayed
`public virtual void RequestUserTimePlayed(GalaxyID userID)`

**Purpose:** Handles logic related to `request user time played`.

### RequestUserTimePlayed
`public virtual void RequestUserTimePlayed()`

**Purpose:** Handles logic related to `request user time played`.

### GetUserTimePlayed
`public virtual uint GetUserTimePlayed(GalaxyID userID)`

**Purpose:** Gets the current value of `user time played`.

### GetUserTimePlayed
`public virtual uint GetUserTimePlayed()`

**Purpose:** Gets the current value of `user time played`.

## Usage Example

```csharp
var value = new IStats();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)