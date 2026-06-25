---
title: "GauntletGameVersionView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletGameVersionView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletGameVersionView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletGameVersionView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletGameVersionView.cs`

## Overview

`GauntletGameVersionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletGameVersionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletGameVersionView Current { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Refresh
`public static void Refresh()`

**Purpose:** Refreshes the display or cache of `refresh`.

### AddModuleVersionInfo
`public static void AddModuleVersionInfo(string title, string versionStr)`

**Purpose:** Adds `module version info` to the current collection or state.

### RemoveModuleVersionInfo
`public static void RemoveModuleVersionInfo(string title)`

**Purpose:** Removes `module version info` from the current collection or state.

## Usage Example

```csharp
var view = new GauntletGameVersionView();
```

## See Also

- [Complete Class Catalog](../catalog)