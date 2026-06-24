<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameModelsManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `game models`.

## Usage Example

```csharp
var implementation = new CustomGameModelsManager();
```

## See Also

- [Complete Class Catalog](../catalog)