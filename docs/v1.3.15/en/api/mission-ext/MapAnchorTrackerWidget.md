<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapAnchorTrackerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `PositionX` | `public float PositionX { get; set; }` |
| `PositionY` | `public float PositionY { get; set; }` |
| `PositionW` | `public float PositionW { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapAnchorTrackerWidget (Widget)
// 声明/访问一个 MapAnchorTrackerWidget
var widget = root.GetChild("mapAnchorTrackerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)