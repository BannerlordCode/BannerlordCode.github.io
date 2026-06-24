<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameModel

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModel`
**Base:** none
**File:** `TaleWorlds.Core/GameModel.cs`

## Overview

`GameModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `GameModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var implementation = new CustomGameModel();
```

## See Also

- [Complete Class Catalog](../catalog)