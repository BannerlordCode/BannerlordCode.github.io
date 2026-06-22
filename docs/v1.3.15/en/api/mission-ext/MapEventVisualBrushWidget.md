<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapEventVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapEventVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapEventVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapEventVisualBrushWidget.cs`

## Overview

`MapEventVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEventType` | `public int MapEventType { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapEventVisualBrushWidget (Widget)
// 声明/访问一个 MapEventVisualBrushWidget
var widget = root.GetChild("mapEventVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)