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

`CustomGameBannedPlayerManager` is a static, in-memory ban list for custom (non-Master) multiplayer games. It holds a `Dictionary<PlayerId, BannedPlayer>` behind a lazily-created private property (`CustomGameBannedPlayerManager.cs:12`) and exposes exactly two operations: `AddBannedPlayer(PlayerId, int banDueTime)` (`CustomGameBannedPlayerManager.cs:25`) and `IsUserBanned(PlayerId)` (`CustomGameBannedPlayerManager.cs:35`).

The shipped caller shows the contract for `banDueTime`: the poll-kick path calls `AddBannedPlayer(component.Peer.Id, Environment.TickCount + 600000)` (`MultiplayerPollComponent.cs:293`) — that is an **absolute** value on `Environment.TickCount`'s scale, with ten minutes added. `IsUserBanned` compares against the same clock: `ContainsKey(playerId) && _bannedPlayers[playerId].BanDueTime > Environment.TickCount` (`CustomGameBannedPlayerManager.cs:37`).

The value stored is the private `BannedPlayer` struct (`CustomGameBannedPlayerManager.cs:44`), which holds the `PlayerId` and the `BanDueTime` as plain auto-properties.

## Mental Model

The parameter is a deadline, not a duration. `IsUserBanned` reads `BanDueTime > Environment.TickCount` (`CustomGameBannedPlayerManager.cs:37`), so what you pass is compared directly against milliseconds-since-boot. The shipped call adds `600000` to the current tick to express "ten minutes from now" (`MultiplayerPollComponent.cs:293`). Passing a duration instead — `600000` on its own — asks for the instant the machine booted, which is in the past on every running system, so the ban is expired before it is stored and `IsUserBanned` answers `false` immediately. It never throws; the ban simply does not happen.

The dictionary lazily allocates on first access (`CustomGameBannedPlayerManager.cs:16`), so you never have to initialise anything and a read before any write is safe.

Nothing is ever removed. There is no `Remove` and no `Clear`, and `IsUserBanned` filters by time rather than deleting expired entries. An expired ban therefore keeps its dictionary slot — and keeps a strong reference to that `PlayerId` — for the life of the process. Only the answer changes, not the storage.

Nothing is persisted either. The backing field is a plain static with no save/load path, so every ban is lost on process exit. If your mod needs bans to survive a restart, this class cannot do it; keep your own store and use this one only for the session-lifetime case.

`BannedPlayer.PlayerId` (`CustomGameBannedPlayerManager.cs:49`) duplicates the dictionary key and is never read — `IsUserBanned` looks up by the key and reads only `BanDueTime`. It is dead weight, but harmless.

## How to use

**Getting one.** Static — nothing to obtain. Ban a player with `AddBannedPlayer` and gate your own join logic on `IsUserBanned`.

**Typical use** — a session-scoped ban with an explicit expiry:

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.PlayerServices;

public static class MyBanService
{
    // Ten minutes, expressed the way IsUserBanned compares it.
    public const int BanDurationMs = 600000;

    public static void BanFor(PlayerId playerId, int durationMs)
    {
        // Absolute deadline on the Environment.TickCount scale, NOT a duration.
        CustomGameBannedPlayerManager.AddBannedPlayer(
            playerId,
            Environment.TickCount + durationMs);
    }

    public static bool TryJoin(PlayerId playerId, out string reason)
    {
        if (!CustomGameBannedPlayerManager.IsUserBanned(playerId))
        {
            reason = null;
            return true;
        }

        reason = "You are banned from this battle.";
        return false;
    }
}
```

`Environment.TickCount` is the clock the manager itself reads (`CustomGameBannedPlayerManager.cs:37`), and `PlayerId` is the key type — the shipped caller passes `component.Peer.Id` (`MultiplayerPollComponent.cs:293`).

**Most common mistake:** passing a duration where a deadline is expected.

```csharp
CustomGameBannedPlayerManager.AddBannedPlayer(playerId, 600000);   // looks like 10 minutes
```

Because `600000` is compared against `Environment.TickCount` (`CustomGameBannedPlayerManager.cs:37`), and the machine has been up for far longer than 600 seconds in any real session, the entry is stored already-expired. `IsUserBanned` returns `false`, the banned player rejoins, and nothing in the log indicates a ban was ever registered — the dictionary write succeeded, so there is no error to debug from. Always add `Environment.TickCount`, exactly as `MultiplayerPollComponent.cs:293` does.

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
- [MultiplayerPollComponent — the shipped caller, showing the deadline convention](../MultiplayerPollComponent)
- [中文页面](../../../../zh/api/mission-ext/CustomGameBannedPlayerManager)