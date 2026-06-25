---
title: "MapEventVisualItemWidget"
description: "Auto-generated class reference for MapEventVisualItemWidget."
---
# MapEventVisualItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapEvents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapEventVisualItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapEvents/MapEventVisualItemWidget.cs`

## Overview

`MapEventVisualItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapEventVisualItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapEventVisualItemWidget widget = ...;
```

## See Also

- [Area Index](../)