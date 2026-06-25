---
title: "MapNotificationItemWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapNotificationItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapNotificationItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapNotificationItemWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs`

## Overview

`MapNotificationItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapNotificationItemWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsFocusItem` | `public bool IsFocusItem { get; set; }` |
| `DefaultWidth` | `public float DefaultWidth { get; set; }` |
| `ExtendedWidth` | `public float ExtendedWidth { get; set; }` |
| `RemoveNotificationButtonWidget` | `public ButtonWidget RemoveNotificationButtonWidget { get; set; }` |
| `NotificationRingImageWidget` | `public Widget NotificationRingImageWidget { get; set; }` |
| `IsInspectionForced` | `public bool IsInspectionForced { get; set; }` |
| `NotificationType` | `public string NotificationType { get; set; }` |
| `DefaultWidthSprite` | `public Sprite DefaultWidthSprite { get; set; }` |
| `ExtendedWidthSprite` | `public Sprite ExtendedWidthSprite { get; set; }` |
| `NotificationRingWidget` | `public Widget NotificationRingWidget { get; set; }` |
| `NotificationExtensionWidget` | `public Widget NotificationExtensionWidget { get; set; }` |
| `NotificationTextContainerWidget` | `public Widget NotificationTextContainerWidget { get; set; }` |
| `NotificationDescriptionText` | `public RichTextWidget NotificationDescriptionText { get; set; }` |
| `RemoveButtonVisualWidget` | `public InputKeyVisualWidget RemoveButtonVisualWidget { get; set; }` |

## Usage Example

```csharp
var widget = new MapNotificationItemWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)