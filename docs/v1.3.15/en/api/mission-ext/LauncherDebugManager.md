<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherDebugManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherDebugManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherDebugManager.cs`

## Overview

`LauncherDebugManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### OnFinalize
```csharp
public void OnFinalize()
```

## Usage Example

```csharp
// Typical usage of LauncherDebugManager (Manager)
LauncherDebugManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)