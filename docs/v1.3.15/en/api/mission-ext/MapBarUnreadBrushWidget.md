<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapBarUnreadBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarUnreadBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarUnreadBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs`

## Overview

`MapBarUnreadBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsBannerNotification` | `public bool IsBannerNotification { get; set; }` |
| `UnreadTextWidget` | `public TextWidget UnreadTextWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapBarUnreadBrushWidget (Widget)
// 声明/访问一个 MapBarUnreadBrushWidget
var widget = root.GetChild("mapBarUnreadBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)