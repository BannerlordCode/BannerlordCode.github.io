---
title: "GameModelsManager"
description: "Auto-generated class reference for GameModelsManager."
---
# GameModelsManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModelsManager`
**Base:** none
**File:** `TaleWorlds.Core/GameModelsManager.cs`

## Overview

`GameModelsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameModelsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetGameModels
`public MBReadOnlyList<GameModel> GetGameModels()`

**Purpose:** Reads and returns the `game models` value held by the current object.

```csharp
// Obtain an instance of GameModelsManager from the subsystem API first
GameModelsManager gameModelsManager = ...;
var result = gameModelsManager.GetGameModels();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GameModelsManager instance = ...;
```

## See Also

- [Area Index](../)