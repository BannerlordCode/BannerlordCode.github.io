---
title: "TwoWaySliderWidget"
description: "Auto-generated class reference for TwoWaySliderWidget."
---
# TwoWaySliderWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class TwoWaySliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs`

## Overview

`TwoWaySliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `TwoWaySliderWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ChangeFillWidget` | `public BrushWidget ChangeFillWidget { get; set; }` |
| `BaseValueInt` | `public int BaseValueInt { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
TwoWaySliderWidget widget = ...;
```

## See Also

- [Area Index](../)