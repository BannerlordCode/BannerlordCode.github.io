<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherModsDLLManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LauncherModsDLLManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModsDLLManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsDLLManager.cs`

## Overview

`LauncherModsDLLManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShouldUpdateSaveData` | `public bool ShouldUpdateSaveData { get; }` |

## Key Methods

### GetSubModuleVerifyData
```csharp
public LauncherDLLData GetSubModuleVerifyData(SubModuleInfo subModuleInfo)
```

## Usage Example

```csharp
// Typical usage of LauncherModsDLLManager (Manager)
LauncherModsDLLManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)