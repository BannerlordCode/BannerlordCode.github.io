---
title: "NavigatableGridWidget"
description: "Auto-generated class reference for NavigatableGridWidget."
---
# NavigatableGridWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigatableGridWidget : GridWidget`
**Base:** `GridWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigatableGridWidget.cs`

## Overview

`NavigatableGridWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `NavigatableGridWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ParentPanel` | `public ScrollablePanel ParentPanel { get; set; }` |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset { get; set; }` |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset { get; set; }` |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset { get; set; }` |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset { get; set; }` |
| `MinIndex` | `public int MinIndex { get; set; }` |
| `MaxIndex` | `public int MaxIndex { get; set; }` |
| `StepSize` | `public int StepSize { get; set; }` |
| `UseSelfIndexForMinimum` | `public bool UseSelfIndexForMinimum { get; set; }` |
| `EmptyNavigationWidget` | `public Widget EmptyNavigationWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
NavigatableGridWidget widget = ...;
```

## See Also

- [Area Index](../)