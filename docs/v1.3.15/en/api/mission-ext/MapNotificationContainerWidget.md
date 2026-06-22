<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNotificationContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNotificationContainerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapNotificationContainerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationContainerWidget.cs`

## Overview

`MapNotificationContainerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `MoreTextWidgetContainer` | `public BrushWidget MoreTextWidgetContainer { get; set; }` |
| `MoreTextWidget` | `public TextWidget MoreTextWidget { get; set; }` |
| `MaxAmountOfNotificationsToShow` | `public int MaxAmountOfNotificationsToShow { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapNotificationContainerWidget (Widget)
// 声明/访问一个 MapNotificationContainerWidget
var widget = root.GetChild("mapNotificationContainerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)