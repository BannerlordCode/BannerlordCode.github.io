<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DevelopmentQueueVisualIconWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DevelopmentQueueVisualIconWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DevelopmentQueueVisualIconWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentQueueVisualIconWidget.cs`

## Overview

`DevelopmentQueueVisualIconWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `QueueIndex` | `public int QueueIndex { get; set; }` |
| `QueueIconWidget` | `public Widget QueueIconWidget { get; set; }` |
| `InProgressIconWidget` | `public BrushWidget InProgressIconWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of DevelopmentQueueVisualIconWidget (Widget)
// 声明/访问一个 DevelopmentQueueVisualIconWidget
var widget = root.GetChild("developmentQueueVisualIconWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)