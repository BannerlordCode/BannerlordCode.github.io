<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomGameBannedPlayerManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomGameBannedPlayerManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class CustomGameBannedPlayerManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/CustomGameBannedPlayerManager.cs`

## Overview

`CustomGameBannedPlayerManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `BanDueTime` | `public int BanDueTime { get; set; }` |

## Key Methods

### AddBannedPlayer
```csharp
public static void AddBannedPlayer(PlayerId playerId, int banDueTime)
```

### IsUserBanned
```csharp
public static bool IsUserBanned(PlayerId playerId)
```

## Usage Example

```csharp
// Typical usage of CustomGameBannedPlayerManager (Manager)
CustomGameBannedPlayerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)