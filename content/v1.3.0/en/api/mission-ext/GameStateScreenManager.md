---
title: "GameStateScreenManager"
description: "Auto-generated class reference for GameStateScreenManager."
---
# GameStateScreenManager

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameStateScreenManager : IGameStateManagerListener`
**Base:** `IGameStateManagerListener`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/GameStateScreenManager.cs`

## Overview

`GameStateScreenManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameStateScreenManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateScreen
`public ScreenBase CreateScreen(GameState state)`

**Purpose:** Constructs a new screen entity and returns it to the caller.

```csharp
// Obtain an instance of GameStateScreenManager from the subsystem API first
GameStateScreenManager gameStateScreenManager = ...;
var result = gameStateScreenManager.CreateScreen(state);
```

### BuildScreens
`public void BuildScreens()`

**Purpose:** Assembles and returns the built result for screens.

```csharp
// Obtain an instance of GameStateScreenManager from the subsystem API first
GameStateScreenManager gameStateScreenManager = ...;
gameStateScreenManager.BuildScreens();
```

## Usage Example

```csharp
var manager = GameStateScreenManager.Current;
```

## See Also

- [Area Index](../)