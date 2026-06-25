---
title: "LauncherModsDLLManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LauncherModsDLLManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LauncherModsDLLManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModsDLLManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Launcher.Library/TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsDLLManager.cs`

## Overview

`LauncherModsDLLManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `LauncherModsDLLManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShouldUpdateSaveData` | `public bool ShouldUpdateSaveData { get; }` |

## Key Methods

### GetSubModuleVerifyData
`public LauncherDLLData GetSubModuleVerifyData(SubModuleInfo subModuleInfo)`

**Purpose:** Gets the current value of `sub module verify data`.

## Usage Example

```csharp
var manager = LauncherModsDLLManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)