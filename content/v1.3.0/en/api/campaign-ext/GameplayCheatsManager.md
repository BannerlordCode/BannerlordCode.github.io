---
title: "GameplayCheatsManager"
description: "Auto-generated class reference for GameplayCheatsManager."
---
# GameplayCheatsManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class GameplayCheatsManager`
**Base:** none
**File:** `SandBox/GameplayCheatsManager.cs`

## Overview

`GameplayCheatsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameplayCheatsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMapCheatList
`public static IEnumerable<GameplayCheatBase> GetMapCheatList()`

**Purpose:** **Purpose:** Reads and returns the map cheat list value held by the this instance.

```csharp
// Static call; no instance required
GameplayCheatsManager.GetMapCheatList();
```

### GetMissionCheatList
`public static IEnumerable<GameplayCheatBase> GetMissionCheatList()`

**Purpose:** **Purpose:** Reads and returns the mission cheat list value held by the this instance.

```csharp
// Static call; no instance required
GameplayCheatsManager.GetMissionCheatList();
```

## Usage Example

```csharp
var manager = GameplayCheatsManager.Current;
```

## See Also

- [Area Index](../)