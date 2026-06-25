---
title: "MapEventVisualBrushWidget"
description: "Auto-generated class reference for MapEventVisualBrushWidget."
---
# MapEventVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapEventVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map/MapEventVisualBrushWidget.cs`

## Overview

`MapEventVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapEventVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEventType` | `public int MapEventType { get; set; }` |

## Key Methods

### MapEventVisualBrushWidget
`public class MapEventVisualBrushWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the MapEventVisualBrushWidget logic.

```csharp
// Obtain an instance of MapEventVisualBrushWidget from the subsystem API first
MapEventVisualBrushWidget mapEventVisualBrushWidget = ...;
var result = mapEventVisualBrushWidget.MapEventVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MapEventVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)