---
title: "MultiplayerGlobalMutedPlayersManager"
description: "Auto-generated class reference for MultiplayerGlobalMutedPlayersManager."
---
# MultiplayerGlobalMutedPlayersManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGlobalMutedPlayersManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs`

## Overview

`MultiplayerGlobalMutedPlayersManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerGlobalMutedPlayersManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MutedPlayers` | `public static List<PlayerId> MutedPlayers { get; }` |

## Key Methods

### MutePlayer
`public static void MutePlayer(PlayerId playerId)`

**Purpose:** Executes the MutePlayer logic.

```csharp
// Static call; no instance required
MultiplayerGlobalMutedPlayersManager.MutePlayer(playerId);
```

### UnmutePlayer
`public static void UnmutePlayer(PlayerId playerId)`

**Purpose:** Executes the UnmutePlayer logic.

```csharp
// Static call; no instance required
MultiplayerGlobalMutedPlayersManager.UnmutePlayer(playerId);
```

### IsUserMuted
`public static bool IsUserMuted(PlayerId playerId)`

**Purpose:** Determines whether the this instance is in the user muted state or condition.

```csharp
// Static call; no instance required
MultiplayerGlobalMutedPlayersManager.IsUserMuted(playerId);
```

### ClearMutedPlayers
`public static void ClearMutedPlayers()`

**Purpose:** Removes all muted players from the this instance.

```csharp
// Static call; no instance required
MultiplayerGlobalMutedPlayersManager.ClearMutedPlayers();
```

## Usage Example

```csharp
var manager = MultiplayerGlobalMutedPlayersManager.Current;
```

## See Also

- [Area Index](../)