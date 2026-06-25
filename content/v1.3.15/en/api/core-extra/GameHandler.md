---
title: "GameHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameHandler`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameHandler

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameHandler : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/GameHandler.cs`

## Overview

`GameHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `GameHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBeforeSave
`public abstract void OnBeforeSave()`

**Purpose:** Called when the `before save` event is raised.

### OnAfterSave
`public abstract void OnAfterSave()`

**Purpose:** Called when the `after save` event is raised.

## Usage Example

```csharp
var implementation = new CustomGameHandler();
```

## See Also

- [Complete Class Catalog](../catalog)