---
title: "MapBarUnreadBrushWidget"
description: "Auto-generated class reference for MapBarUnreadBrushWidget."
---
# MapBarUnreadBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarUnreadBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar/MapBarUnreadBrushWidget.cs`

## Overview

`MapBarUnreadBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapBarUnreadBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsBannerNotification` | `public bool IsBannerNotification { get; set; }` |
| `UnreadTextWidget` | `public TextWidget UnreadTextWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapBarUnreadBrushWidget widget = ...;
```

## See Also

- [Area Index](../)