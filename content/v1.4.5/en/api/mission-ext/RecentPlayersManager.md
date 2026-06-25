---
title: "RecentPlayersManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecentPlayersManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RecentPlayersManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class RecentPlayersManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`

## Overview

`RecentPlayersManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `RecentPlayersManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `ProcessType` | `public InteractionProcessType ProcessType { get; }` |

## Key Methods

### Initialize
`public static async void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetRecentPlayerInfos
`public static async Task<MBReadOnlyList<RecentPlayerInfo>> GetRecentPlayerInfos()`

**Purpose:** Gets the current value of `recent player infos`.

### GetRecentPlayerIds
`public static PlayerId GetRecentPlayerIds()`

**Purpose:** Gets the current value of `recent player ids`.

### AddOrUpdatePlayerEntry
`public static void AddOrUpdatePlayerEntry(PlayerId playerId, string playerName, InteractionType interactionType, int forcedIndex)`

**Purpose:** Adds `or update player entry` to the current collection or state.

### TrimPlayers
`public static void TrimPlayers()`

**Purpose:** Handles logic related to `trim players`.

### Serialize
`public static void Serialize()`

**Purpose:** Handles logic related to `serialize`.

### GetPlayersOrdered
`public static IEnumerable<PlayerId> GetPlayersOrdered()`

**Purpose:** Gets the current value of `players ordered`.

## Usage Example

```csharp
var manager = RecentPlayersManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)