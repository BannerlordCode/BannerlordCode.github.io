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

`CustomGameBannedPlayerManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `CustomGameBannedPlayerManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `BanDueTime` | `public int BanDueTime { get; set; }` |

## Key Methods

### AddBannedPlayer
`public static void AddBannedPlayer(PlayerId playerId, int banDueTime)`

**Purpose:** **Purpose:** Adds banned player to the current collection or state.

```csharp
// Static call; no instance required
CustomGameBannedPlayerManager.AddBannedPlayer(playerId, 0);
```

### IsUserBanned
`public static bool IsUserBanned(PlayerId playerId)`

**Purpose:** **Purpose:** Determines whether the this instance is in the user banned state or condition.

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