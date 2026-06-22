<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapTimeImageBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
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

## Key Properties

| Name | Signature |
|------|-----------|
| `DayTime` | `public double DayTime { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapTimeImageBrushWidget (Widget)
// 声明/访问一个 MapTimeImageBrushWidget
var widget = root.GetChild("mapTimeImageBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)