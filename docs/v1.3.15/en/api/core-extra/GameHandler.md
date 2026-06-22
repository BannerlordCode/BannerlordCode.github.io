<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameHandler`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameHandler

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameHandler : IEntityComponent`
**Base:** `IEntityComponent`
**File:** `TaleWorlds.Core/GameHandler.cs`

## Overview

`GameHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnBeforeSave
```csharp
public abstract void OnBeforeSave()
```

### OnAfterSave
```csharp
public abstract void OnAfterSave()
```

## Usage Example

```csharp
// Typical usage of GameHandler (Handler)
Mission.Current.AddMissionBehavior(new GameHandler());
```

## See Also

- [Complete Class Catalog](../catalog)