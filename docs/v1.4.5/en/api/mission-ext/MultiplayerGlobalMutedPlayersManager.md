<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGlobalMutedPlayersManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerGlobalMutedPlayersManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGlobalMutedPlayersManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs`

## Overview

`MultiplayerGlobalMutedPlayersManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerGlobalMutedPlayersManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### MutePlayer
`public static void MutePlayer(PlayerId playerId)`

**Purpose:** Handles logic related to `mute player`.

### UnmutePlayer
`public static void UnmutePlayer(PlayerId playerId)`

**Purpose:** Handles logic related to `unmute player`.

### IsUserMuted
`public static bool IsUserMuted(PlayerId playerId)`

**Purpose:** Handles logic related to `is user muted`.

### ClearMutedPlayers
`public static void ClearMutedPlayers()`

**Purpose:** Handles logic related to `clear muted players`.

## Usage Example

```csharp
var manager = MultiplayerGlobalMutedPlayersManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)