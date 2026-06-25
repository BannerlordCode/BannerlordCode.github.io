---
title: "GauntletView"
description: "Auto-generated class reference for GauntletView."
---
# GauntletView

**Namespace:** TaleWorlds.GauntletUI.Data
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GauntletView : WidgetComponent`
**Base:** `WidgetComponent`
**File:** `TaleWorlds.GauntletUI.Data/GauntletView.cs`

## Overview

`GauntletView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `GauntletMovie` | `public GauntletMovie GauntletMovie { get; }` |
| `ItemTemplateUsageWithData` | `public ItemTemplateUsageWithData ItemTemplateUsageWithData { get; set; }` |
| `ViewModelPath` | `public BindingPath ViewModelPath { get; }` |
| `ViewModelPathString` | `public string ViewModelPathString { get; }` |
| `Parent` | `public GauntletView Parent { get; }` |
| `DisplayName` | `public string DisplayName { get; }` |

## Key Methods

### AddChild
`public void AddChild(GauntletView child)`

**Purpose:** Adds child to the current collection or state.

```csharp
// Obtain an instance of GauntletView from the subsystem API first
GauntletView gauntletView = ...;
gauntletView.AddChild(child);
```

### RemoveChild
`public void RemoveChild(GauntletView child)`

**Purpose:** Removes child from the current collection or state.

```csharp
// Obtain an instance of GauntletView from the subsystem API first
GauntletView gauntletView = ...;
gauntletView.RemoveChild(child);
```

### SwapChildrenAtIndeces
`public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)`

**Purpose:** Executes the SwapChildrenAtIndeces logic.

```csharp
// Obtain an instance of GauntletView from the subsystem API first
GauntletView gauntletView = ...;
gauntletView.SwapChildrenAtIndeces(child1, child2);
```

### RefreshBinding
`public void RefreshBinding()`

**Purpose:** Keeps the display or cache of binding in sync with the underlying state.

```csharp
// Obtain an instance of GauntletView from the subsystem API first
GauntletView gauntletView = ...;
gauntletView.RefreshBinding();
```

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**Purpose:** Keeps the display or cache of binding with children in sync with the underlying state.

```csharp
// Obtain an instance of GauntletView from the subsystem API first
GauntletView gauntletView = ...;
gauntletView.RefreshBindingWithChildren();
```

### ReleaseBindingWithChildren
`public void ReleaseBindingWithChildren()`

**Purpose:** Executes the ReleaseBindingWithChildren logic.

```csharp
// Obtain an instance of GauntletView from the subsystem API first
GauntletView gauntletView = ...;
gauntletView.ReleaseBindingWithChildren();
```

### BindData
`public void BindData(string property, BindingPath path)`

**Purpose:** Executes the BindData logic.

```csharp
// Obtain an instance of GauntletView from the subsystem API first
GauntletView gauntletView = ...;
gauntletView.BindData("example", path);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletView view = ...;
```

## See Also

- [Area Index](../)