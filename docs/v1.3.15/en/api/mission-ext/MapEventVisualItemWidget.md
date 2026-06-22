<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventVisualItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventVisualItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapEvents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapEventVisualItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapEvents/MapEventVisualItemWidget.cs`

## Overview

`MapEventVisualItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public Vec2 Position { get; set; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapEventVisualItemWidget (Widget)
// 声明/访问一个 MapEventVisualItemWidget
var widget = root.GetChild("mapEventVisualItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)