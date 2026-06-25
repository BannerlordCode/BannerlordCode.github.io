---
title: "MapBarGatherArmyBrushWidget"
description: "Auto-generated class reference for MapBarGatherArmyBrushWidget."
---
# MapBarGatherArmyBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarGatherArmyBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar/MapBarGatherArmyBrushWidget.cs`

## Overview

`MapBarGatherArmyBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapBarGatherArmyBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `InfoBarWidget` | `public MapInfoBarWidget InfoBarWidget { get; set; }` |
| `IsGatherArmyEnabled` | `public bool IsGatherArmyEnabled { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapBarGatherArmyBrushWidget widget = ...;
```

## See Also

- [Area Index](../)