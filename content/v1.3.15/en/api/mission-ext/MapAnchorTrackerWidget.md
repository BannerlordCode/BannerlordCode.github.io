---
title: "MapAnchorTrackerWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapAnchorTrackerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapAnchorTrackerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapAnchorTrackerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapAnchorTrackerWidget.cs`

## Overview

`MapAnchorTrackerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapAnchorTrackerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PositionX` | `public float PositionX { get; set; }` |
| `PositionY` | `public float PositionY { get; set; }` |
| `PositionW` | `public float PositionW { get; set; }` |

## Usage Example

```csharp
var widget = new MapAnchorTrackerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)