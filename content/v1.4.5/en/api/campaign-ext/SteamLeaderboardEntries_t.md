---
title: "SteamLeaderboardEntries_t"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SteamLeaderboardEntries_t`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SteamLeaderboardEntries_t

**Namespace:** Steamworks
**Module:** Steamworks
**Type:** `public struct SteamLeaderboardEntries_t`
**Base:** none
**File:** `Bannerlord.Source/bin/Steamworks.NET/Steamworks/SteamLeaderboardEntries_t.cs`

## Overview

`SteamLeaderboardEntries_t` lives in `Steamworks` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Steamworks` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SteamLeaderboardEntries_t
`public struct SteamLeaderboardEntries_t(ulong value)`

**Purpose:** Handles logic related to `steam leaderboard entries_t`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### SteamLeaderboardEntries_t
`public static explicit operator SteamLeaderboardEntries_t(ulong value)`

**Purpose:** Handles logic related to `steam leaderboard entries_t`.

### ulong
`public static explicit operator ulong(SteamLeaderboardEntries_t that)`

**Purpose:** Handles logic related to `ulong`.

### Equals
`public bool Equals(SteamLeaderboardEntries_t other)`

**Purpose:** Handles logic related to `equals`.

### CompareTo
`public int CompareTo(SteamLeaderboardEntries_t other)`

**Purpose:** Handles logic related to `compare to`.

## Usage Example

```csharp
var value = new SteamLeaderboardEntries_t();
value.SteamLeaderboardEntries_t(0);
```

## See Also

- [Complete Class Catalog](../catalog)