---
title: "SteamGameServerStats"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamGameServerStats`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameServerStats

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameServerStats`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameServerStats.cs`

## Overview

`SteamGameServerStats` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

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

### SetUserStat
`public static bool SetUserStat(CSteamID steamIDUser, string pchName, int nData)`

**Purpose:** Sets the value or state of `user stat`.

### SetUserStat
`public static bool SetUserStat(CSteamID steamIDUser, string pchName, float fData)`

**Purpose:** Sets the value or state of `user stat`.

### UpdateUserAvgRateStat
`public static bool UpdateUserAvgRateStat(CSteamID steamIDUser, string pchName, float flCountThisSession, double dSessionLength)`

**Purpose:** Updates the state or data of `user avg rate stat`.

### SetUserAchievement
`public static bool SetUserAchievement(CSteamID steamIDUser, string pchName)`

**Purpose:** Sets the value or state of `user achievement`.

### ClearUserAchievement
`public static bool ClearUserAchievement(CSteamID steamIDUser, string pchName)`

**Purpose:** Handles logic related to `clear user achievement`.

### StoreUserStats
`public static SteamAPICall_t StoreUserStats(CSteamID steamIDUser)`

**Purpose:** Handles logic related to `store user stats`.

## Usage Example

```csharp
SteamGameServerStats.RequestUserStats(steamIDUser);
```

## See Also

- [Complete Class Catalog](../catalog)