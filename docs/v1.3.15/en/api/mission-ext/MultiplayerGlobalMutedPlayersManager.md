<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerGlobalMutedPlayersManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerGlobalMutedPlayersManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class MultiplayerGlobalMutedPlayersManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/MultiplayerGlobalMutedPlayersManager.cs`

## Overview

`MultiplayerGlobalMutedPlayersManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `MutedPlayers` | `public static List<PlayerId> MutedPlayers { get { return MultiplayerGlobalMutedPlayersManager._mutedPlayers; }` |

## Key Methods

### MutePlayer
```csharp
public static void MutePlayer(PlayerId playerId)
```

### UnmutePlayer
```csharp
public static void UnmutePlayer(PlayerId playerId)
```

### IsUserMuted
```csharp
public static bool IsUserMuted(PlayerId playerId)
```

### ClearMutedPlayers
```csharp
public static void ClearMutedPlayers()
```

## Usage Example

```csharp
// Typical usage of MultiplayerGlobalMutedPlayersManager (Manager)
MultiplayerGlobalMutedPlayersManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)