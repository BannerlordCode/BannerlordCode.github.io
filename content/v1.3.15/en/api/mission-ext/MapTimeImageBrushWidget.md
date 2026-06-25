---
title: "MapTimeImageBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTimeImageBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapTimeImageBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapTimeImageBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/MapBar/MapTimeImageBrushWidget.cs`

## Overview

`MapTimeImageBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapTimeImageBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DayTime` | `public double DayTime { get; set; }` |

## Usage Example

```csharp
var widget = new MapTimeImageBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)