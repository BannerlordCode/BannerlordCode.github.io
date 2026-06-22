<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameModelsManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameModelsManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModelsManager`
**Base:** none
**File:** `TaleWorlds.Core/GameModelsManager.cs`

## Overview

`GameModelsManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### GetGameModels
```csharp
public MBReadOnlyList<GameModel> GetGameModels()
```

## Usage Example

```csharp
// Typical usage of GameModelsManager (Manager)
GameModelsManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)