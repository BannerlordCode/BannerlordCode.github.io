<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherDebugManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherDebugManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDebugManager.cs`

## Overview

`LauncherDebugManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `LauncherDebugManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var manager = LauncherDebugManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)