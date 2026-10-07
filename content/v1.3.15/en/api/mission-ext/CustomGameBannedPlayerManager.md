---
title: "CustomGameBannedPlayerManager"
description: "Auto-generated class reference for CustomGameBannedPlayerManager."
---
# CustomGameBannedPlayerManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomGameBannedPlayerManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs`

## Overview

`CustomGameBannedPlayerManager` is a static class holding a process-wide ban list for custom (community)
games, keyed by `TaleWorlds.PlayerServices.PlayerId`. The surface is two static methods: `AddBannedPlayer`
and `IsUserBanned` (`CustomGameBannedPlayerManager.cs:25`, `CustomGameBannedPlayerManager.cs:35`).

The store is a lazily created `Dictionary<PlayerId, BannedPlayer>` behind a private static property that
allocates on first access (`CustomGameBannedPlayerManager.cs:12`). The value is a private struct carrying
the same `PlayerId` back plus an `int BanDueTime` (`CustomGameBannedPlayerManager.cs:44`).

The expiry model is the thing to understand. `IsUserBanned` does not compare against wall-clock time; it
compares the stored `int` against `Environment.TickCount`
(`CustomGameBannedPlayerManager.cs:37`) — a millisecond counter of system uptime. A ban therefore lives
exactly as long as the number it was given, and the caller is expected to have supplied
`Environment.TickCount + durationInMilliseconds`.

## Mental Model

Read it as an in-memory session ban list with a millisecond-tick deadline, not as a persisted moderation
system. The boundaries:

- **Nothing is persisted.** `_bannedPlayersInternal` is a plain static field
  (`CustomGameBannedPlayerManager.cs:41`). Restarting the process clears every ban.
- **The deadline is an `int` compared against `Environment.TickCount`, which wraps.** Once the tick count
  rolls over, a stored `BanDueTime` becomes numerically *smaller* than the current value and
  `BanDueTime > Environment.TickCount` is false (`CustomGameBannedPlayerManager.cs:37`) — the ban silently
  expires early. A ban whose deadline spans the wrap is the case where this bites.
- **Entries are never removed.** There is no `Remove` and no expiry sweep, so expired bans accumulate for the
  life of the process. `IsUserBanned` is the only thing that distinguishes live from lapsed.
- **`AddBannedPlayer` overwrites silently.** Re-adding the same `PlayerId` replaces the record — including its
  `BanDueTime` — with no warning and no return value (`CustomGameBannedPlayerManager.cs:27`).
- **`IsUserBanned` touches the dictionary three times** — `ContainsKey` then two indexer reads
  (`CustomGameBannedPlayerManager.cs:37`) — each going through the lazy-allocating property. Harmless, but it
  is three lookups per call and the guard buys nothing over a single `TryGetValue`.
- The `BannedPlayer` struct stores `PlayerId` even though it is already the dictionary key
  (`CustomGameBannedPlayerManager.cs:49`); nothing in the class reads that field.

## How to use

**Getting one.** It is a static class — call the static methods directly. There is no instance to obtain and
no registration step.

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.PlayerServices;

public class CommunityModeration
{
    // Environment.TickCount is an int of milliseconds and wraps - keep durations well under
    // the wrap window (CustomGameBannedPlayerManager.cs:37).
    private const int BanDurationMs = 60 * 60 * 1000;

    public void Ban(PlayerId id, string reason)
    {
        if (Campaign.Current == null) { return; }

        // Stores an absolute TickCount deadline, not a duration (CustomGameBannedPlayerManager.cs:25).
        CustomGameBannedPlayerManager.AddBannedPlayer(id, Environment.TickCount + BanDurationMs);
        Debug.Print("banned: " + reason);
    }

    public bool IsBanned(PlayerId id)
    {
        return CustomGameBannedPlayerManager.IsUserBanned(id);
    }
}
```

**The mistake that bites.** Passing a *duration* to `AddBannedPlayer` instead of an absolute deadline,
because the parameter is named `banDueTime` and the argument type is `int`. A duration of, say, `3600000` is
almost certainly *smaller* than the current `Environment.TickCount`, so
`BanDueTime > Environment.TickCount` is false and `IsUserBanned` reports the player as not banned
(`CustomGameBannedPlayerManager.cs:37`) — the ban appears to do nothing, with no error anywhere.



## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `BanDueTime` | `public int BanDueTime { get; set; }` |

## Key Methods

### AddBannedPlayer
`public static void AddBannedPlayer(PlayerId playerId, int banDueTime)`

**Purpose:** Adds banned player to the current collection or state.

```csharp
// Static call; no instance required
CustomGameBannedPlayerManager.AddBannedPlayer(playerId, 0);
```

### IsUserBanned
`public static bool IsUserBanned(PlayerId playerId)`

**Purpose:** Determines whether the this instance is in the user banned state or condition.

```csharp
// Static call; no instance required
CustomGameBannedPlayerManager.IsUserBanned(playerId);
```

## Usage Example

```csharp
var manager = CustomGameBannedPlayerManager.Current;
```

## See Also

- [Area Index](../)
- [CommunityGameJoinData](../CommunityGameJoinData)
- [BaseNetworkComponentData](../BaseNetworkComponentData)
- [CasualtyHandler](../CasualtyHandler)
- [中文页面](../../../../zh/api/mission-ext/CustomGameBannedPlayerManager)