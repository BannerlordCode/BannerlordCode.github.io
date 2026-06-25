---
title: "ValueBasedVisibilityWidget"
description: "Auto-generated class reference for ValueBasedVisibilityWidget."
---
# ValueBasedVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ValueBasedVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ValueBasedVisibilityWidget.cs`

## Overview

`ValueBasedVisibilityWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ValueBasedVisibilityWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WatchType` | `public ValueBasedVisibilityWidget.WatchTypes WatchType { get; set; }` |
| `IndexToWatch` | `public int IndexToWatch { get; set; }` |
| `IndexToWatchFloat` | `public float IndexToWatchFloat { get; set; }` |
| `IndexToBeVisible` | `public int IndexToBeVisible { get; set; }` |
| `IndexToBeVisibleFloat` | `public float IndexToBeVisibleFloat { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ValueBasedVisibilityWidget widget = ...;
```

## See Also

- [Area Index](../)