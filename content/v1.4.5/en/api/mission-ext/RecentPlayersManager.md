---
title: "RecentPlayersManager"
description: "Auto-generated class reference for RecentPlayersManager."
---
# RecentPlayersManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class RecentPlayersManager`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`

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

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
RecentPlayersManager.Initialize();
```

### GetRecentPlayerInfos
`public static async Task<MBReadOnlyList<RecentPlayerInfo>> GetRecentPlayerInfos()`

**Purpose:** Reads and returns the `recent player infos` value held by the current object.

```csharp
// Static call; no instance required
RecentPlayersManager.GetRecentPlayerInfos();
```

### GetRecentPlayerIds
`public static PlayerId GetRecentPlayerIds()`

**Purpose:** Reads and returns the `recent player ids` value held by the current object.

```csharp
// Static call; no instance required
RecentPlayersManager.GetRecentPlayerIds();
```

### AddOrUpdatePlayerEntry
`public static void AddOrUpdatePlayerEntry(PlayerId playerId, string playerName, InteractionType interactionType, int forcedIndex)`

**Purpose:** Adds `or update player entry` to the current collection or state.

```csharp
// Static call; no instance required
RecentPlayersManager.AddOrUpdatePlayerEntry(playerId, "example", interactionType, 0);
```

### TrimPlayers
`public static void TrimPlayers()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
RecentPlayersManager.TrimPlayers();
```

### Serialize
`public static void Serialize()`

**Purpose:** Serializes the current object into a storable or transmittable format.

```csharp
// Static call; no instance required
RecentPlayersManager.Serialize();
```

### GetPlayersOrdered
`public static IEnumerable<PlayerId> GetPlayersOrdered()`

**Purpose:** Reads and returns the `players ordered` value held by the current object.

```csharp
// Static call; no instance required
RecentPlayersManager.GetPlayersOrdered();
```

## Usage Example

```csharp
var manager = RecentPlayersManager.Current;
```

## See Also

- [Area Index](../)