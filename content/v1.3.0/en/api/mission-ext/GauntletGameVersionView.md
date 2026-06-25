---
title: "GauntletGameVersionView"
description: "Auto-generated class reference for GauntletGameVersionView."
---
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

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Static call; no instance required
GauntletGameVersionView.Initialize();
```

### Refresh
`public static void Refresh()`

**Purpose:** Refreshes the current object's display or cache to match the underlying state.

```csharp
// Static call; no instance required
GauntletGameVersionView.Refresh();
```

### AddModuleVersionInfo
`public static void AddModuleVersionInfo(string title, string versionStr)`

**Purpose:** Adds `module version info` to the current collection or state.

```csharp
// Static call; no instance required
GauntletGameVersionView.AddModuleVersionInfo("example", "example");
```

### RemoveModuleVersionInfo
`public static void RemoveModuleVersionInfo(string title)`

**Purpose:** Removes `module version info` from the current collection or state.

```csharp
// Static call; no instance required
GauntletGameVersionView.RemoveModuleVersionInfo("example");
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletGameVersionView view = ...;
```

## See Also

- [Area Index](../)