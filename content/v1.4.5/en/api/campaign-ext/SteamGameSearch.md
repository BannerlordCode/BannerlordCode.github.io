---
title: "SteamGameSearch"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamGameSearch`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamGameSearch

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public static class SteamGameSearch`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamGameSearch.cs`

## Overview

`SteamGameSearch` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddGameSearchParams
`public static EGameSearchErrorCode_t AddGameSearchParams(string pchKeyToFind, string pchValuesToFind)`

**Purpose:** Adds `game search params` to the current collection or state.

### SearchForGameWithLobby
`public static EGameSearchErrorCode_t SearchForGameWithLobby(CSteamID steamIDLobby, int nPlayerMin, int nPlayerMax)`

**Purpose:** Handles logic related to `search for game with lobby`.

### SearchForGameSolo
`public static EGameSearchErrorCode_t SearchForGameSolo(int nPlayerMin, int nPlayerMax)`

**Purpose:** Handles logic related to `search for game solo`.

### AcceptGame
`public static EGameSearchErrorCode_t AcceptGame()`

**Purpose:** Handles logic related to `accept game`.

### DeclineGame
`public static EGameSearchErrorCode_t DeclineGame()`

**Purpose:** Handles logic related to `decline game`.

### RetrieveConnectionDetails
`public static EGameSearchErrorCode_t RetrieveConnectionDetails(CSteamID steamIDHost, out string pchConnectionDetails, int cubConnectionDetails)`

**Purpose:** Handles logic related to `retrieve connection details`.

### EndGameSearch
`public static EGameSearchErrorCode_t EndGameSearch()`

**Purpose:** Handles logic related to `end game search`.

### SetGameHostParams
`public static EGameSearchErrorCode_t SetGameHostParams(string pchKey, string pchValue)`

**Purpose:** Sets the value or state of `game host params`.

### SetConnectionDetails
`public static EGameSearchErrorCode_t SetConnectionDetails(string pchConnectionDetails, int cubConnectionDetails)`

**Purpose:** Sets the value or state of `connection details`.

### RequestPlayersForGame
`public static EGameSearchErrorCode_t RequestPlayersForGame(int nPlayerMin, int nPlayerMax, int nMaxTeamSize)`

**Purpose:** Handles logic related to `request players for game`.

### HostConfirmGameStart
`public static EGameSearchErrorCode_t HostConfirmGameStart(ulong ullUniqueGameID)`

**Purpose:** Handles logic related to `host confirm game start`.

### CancelRequestPlayersForGame
`public static EGameSearchErrorCode_t CancelRequestPlayersForGame()`

**Purpose:** Checks whether the current object can `cel request players for game`.

### SubmitPlayerResult
`public static EGameSearchErrorCode_t SubmitPlayerResult(ulong ullUniqueGameID, CSteamID steamIDPlayer, EPlayerResult_t EPlayerResult)`

**Purpose:** Handles logic related to `submit player result`.

### EndGame
`public static EGameSearchErrorCode_t EndGame(ulong ullUniqueGameID)`

**Purpose:** Handles logic related to `end game`.

## Usage Example

```csharp
SteamGameSearch.AddGameSearchParams("example", "example");
```

## See Also

- [Complete Class Catalog](../catalog)