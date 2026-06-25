---
title: "CustomGameBannedPlayerManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomGameBannedPlayerManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Adds `banned player` to the current collection or state.

### IsUserBanned
`public static bool IsUserBanned(PlayerId playerId)`

**Purpose:** Handles logic related to `is user banned`.

## Usage Example

```csharp
var manager = CustomGameBannedPlayerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)