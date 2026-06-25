---
title: "ISteamMatchmakingPlayersResponse"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ISteamMatchmakingPlayersResponse`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ISteamMatchmakingPlayersResponse

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public class ISteamMatchmakingPlayersResponse`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/ISteamMatchmakingPlayersResponse.cs`

## Overview

`ISteamMatchmakingPlayersResponse` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AddPlayerToList
`public delegate void AddPlayerToList(string pchName, int nScore, float flTimePlayed)`

**Purpose:** Adds `player to list` to the current collection or state.

### PlayersFailedToRespond
`public delegate void PlayersFailedToRespond()`

**Purpose:** Handles logic related to `players failed to respond`.

### PlayersRefreshComplete
`public delegate void PlayersRefreshComplete()`

**Purpose:** Handles logic related to `players refresh complete`.

### InternalAddPlayerToList
`public delegate void InternalAddPlayerToList(IntPtr thisptr, IntPtr pchName, int nScore, float flTimePlayed)`

**Purpose:** Handles logic related to `internal add player to list`.

### InternalPlayersFailedToRespond
`public delegate void InternalPlayersFailedToRespond(IntPtr thisptr)`

**Purpose:** Handles logic related to `internal players failed to respond`.

### InternalPlayersRefreshComplete
`public delegate void InternalPlayersRefreshComplete(IntPtr thisptr)`

**Purpose:** Handles logic related to `internal players refresh complete`.

### IntPtr
`public static explicit operator IntPtr(ISteamMatchmakingPlayersResponse that)`

**Purpose:** Handles logic related to `int ptr`.

## Usage Example

```csharp
var value = new ISteamMatchmakingPlayersResponse();
value.AddPlayerToList("example", 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)