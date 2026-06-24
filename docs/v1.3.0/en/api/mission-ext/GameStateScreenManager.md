<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameStateScreenManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Creates a new `screen` instance or object.

### BuildScreens
`public void BuildScreens()`

**Purpose:** Handles logic related to `build screens`.

## Usage Example

```csharp
var manager = GameStateScreenManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)