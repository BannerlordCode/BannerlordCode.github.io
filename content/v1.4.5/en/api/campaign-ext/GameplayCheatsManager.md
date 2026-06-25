---
title: "GameplayCheatsManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameplayCheatsManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameplayCheatsManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class GameplayCheatsManager`
**Base:** none
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/Sandbox/GameplayCheatsManager.cs`

## Overview

`GameplayCheatsManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameplayCheatsManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMapCheatList
`public static IEnumerable<GameplayCheatBase> GetMapCheatList()`

**Purpose:** Gets the current value of `map cheat list`.

### GetMissionCheatList
`public static IEnumerable<GameplayCheatBase> GetMissionCheatList()`

**Purpose:** Gets the current value of `mission cheat list`.

## Usage Example

```csharp
var manager = GameplayCheatsManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)