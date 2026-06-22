<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModel`
**Base:** none
**File:** `TaleWorlds.Core/GameModel.cs`

## Overview

`GameModel` is a game Model — a rules/override point. Subclass it and register via `Game.Current.ReplaceModel<GameModel>(new MyGameModel())` to change how it computes.

## Usage Example

```csharp
// Typical usage of GameModel (Model)
Game.Current.ReplaceModel<GameModel>(new MyGameModel());
```

## See Also

- [Complete Class Catalog](../catalog)