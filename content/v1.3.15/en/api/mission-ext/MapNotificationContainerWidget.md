---
title: "MapNotificationContainerWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNotificationContainerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `MapNotificationContainerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MoreTextWidgetContainer` | `public BrushWidget MoreTextWidgetContainer { get; set; }` |
| `MoreTextWidget` | `public TextWidget MoreTextWidget { get; set; }` |
| `MaxAmountOfNotificationsToShow` | `public int MaxAmountOfNotificationsToShow { get; set; }` |

## Usage Example

```csharp
var widget = new MapNotificationContainerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)