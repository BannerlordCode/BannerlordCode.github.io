<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLocalDataManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLocalDataManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLocalDataManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs`

## Overview

`MultiplayerLocalDataManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static MultiplayerLocalDataManager Instance { get; }` |
| `TauntSlotData` | `public TauntSlotDataContainer TauntSlotData { get; }` |
| `MatchHistory` | `public MatchHistoryDataContainer MatchHistory { get; }` |
| `FavoriteServers` | `public FavoriteServerDataContainer FavoriteServers { get; }` |

## Key Methods

### InitializeManager
```csharp
public static void InitializeManager()
```

### FinalizeManager
```csharp
public static void FinalizeManager()
```

### Tick
```csharp
public void Tick(float dt)
```

## Usage Example

```csharp
// Typical usage of MultiplayerLocalDataManager (Manager)
MultiplayerLocalDataManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)