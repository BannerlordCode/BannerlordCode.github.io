---
title: "MultiplayerLocalDataManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerLocalDataManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerLocalDataManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLocalDataManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs`

## Overview

`MultiplayerLocalDataManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MultiplayerLocalDataManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static MultiplayerLocalDataManager Instance { get; }` |
| `TauntSlotData` | `public TauntSlotDataContainer TauntSlotData { get; }` |
| `MatchHistory` | `public MatchHistoryDataContainer MatchHistory { get; }` |
| `FavoriteServers` | `public FavoriteServerDataContainer FavoriteServers { get; }` |

## Key Methods

### InitializeManager
`public static void InitializeManager()`

**Purpose:** Initializes the state, resources, or bindings for `manager`.

### FinalizeManager
`public static void FinalizeManager()`

**Purpose:** Handles logic related to `finalize manager`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var manager = MultiplayerLocalDataManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)