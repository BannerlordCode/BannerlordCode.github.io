---
title: "MultiplayerLocalDataManager"
description: "Auto-generated class reference for MultiplayerLocalDataManager."
---
# MultiplayerLocalDataManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLocalDataManager`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby/MultiplayerLocalDataManager.cs`

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

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by manager.

```csharp
// Static call; no instance required
MultiplayerLocalDataManager.InitializeManager();
```

### FinalizeManager
`public static void FinalizeManager()`

**Purpose:** **Purpose:** Executes the FinalizeManager logic.

```csharp
// Static call; no instance required
MultiplayerLocalDataManager.FinalizeManager();
```

### Tick
`public async void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of MultiplayerLocalDataManager from the subsystem API first
MultiplayerLocalDataManager multiplayerLocalDataManager = ...;
multiplayerLocalDataManager.Tick(0);
```

## Usage Example

```csharp
var manager = MultiplayerLocalDataManager.Current;
```

## See Also

- [Area Index](../)