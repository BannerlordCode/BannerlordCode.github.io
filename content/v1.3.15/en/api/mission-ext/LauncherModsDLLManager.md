---
title: "LauncherModsDLLManager"
description: "Auto-generated class reference for LauncherModsDLLManager."
---
# LauncherModsDLLManager

**Namespace:** TaleWorlds.MountAndBlade.Launcher.Library
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class LauncherModsDLLManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/LauncherModsDLLManager.cs`

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

**Purpose:** **Purpose:** Reads and returns the sub module verify data value held by the this instance.

```csharp
// Obtain an instance of LauncherModsDLLManager from the subsystem API first
LauncherModsDLLManager launcherModsDLLManager = ...;
var result = launcherModsDLLManager.GetSubModuleVerifyData(subModuleInfo);
```

## Usage Example

```csharp
var manager = LauncherModsDLLManager.Current;
```

## See Also

- [Area Index](../)