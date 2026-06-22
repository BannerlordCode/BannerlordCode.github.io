<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecentPlayersManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecentPlayersManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class RecentPlayersManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/RecentPlayersManager.cs`

## Overview

`RecentPlayersManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `RecentPlayers` | `public static MBReadOnlyList<RecentPlayerInfo> RecentPlayers { get; }` |
| `Score` | `public int Score { get; }` |
| `ProcessType` | `public RecentPlayersManager.InteractionTypeInfo.InteractionProcessType ProcessType { get; }` |

## Key Methods

### Initialize
```csharp
public static void Initialize()
```

### GetRecentPlayerInfos
```csharp
public static Task<MBReadOnlyList<RecentPlayerInfo>> GetRecentPlayerInfos()
```

### GetRecentPlayerIds
```csharp
public static PlayerId GetRecentPlayerIds()
```

### AddOrUpdatePlayerEntry
```csharp
public static void AddOrUpdatePlayerEntry(PlayerId playerId, string playerName, InteractionType interactionType, int forcedIndex)
```

### TrimPlayers
```csharp
public static void TrimPlayers()
```

### Serialize
```csharp
public static void Serialize()
```

### GetPlayersOrdered
```csharp
public static IEnumerable<PlayerId> GetPlayersOrdered()
```

## Usage Example

```csharp
// Typical usage of RecentPlayersManager (Manager)
RecentPlayersManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)