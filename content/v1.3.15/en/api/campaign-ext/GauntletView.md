---
title: "GauntletView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Adds `child` to the current collection or state.

### RemoveChild
`public void RemoveChild(GauntletView child)`

**Purpose:** Removes `child` from the current collection or state.

### SwapChildrenAtIndeces
`public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)`

**Purpose:** Handles logic related to `swap children at indeces`.

### RefreshBinding
`public void RefreshBinding()`

**Purpose:** Refreshes the display or cache of `binding`.

### RefreshBindingWithChildren
`public void RefreshBindingWithChildren()`

**Purpose:** Refreshes the display or cache of `binding with children`.

### ReleaseBindingWithChildren
`public void ReleaseBindingWithChildren()`

**Purpose:** Handles logic related to `release binding with children`.

### BindData
`public void BindData(string property, BindingPath path)`

**Purpose:** Handles logic related to `bind data`.

## Usage Example

```csharp
var view = new GauntletView();
```

## See Also

- [Complete Class Catalog](../catalog)