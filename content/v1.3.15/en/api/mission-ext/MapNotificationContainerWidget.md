---
title: "MapNotificationContainerWidget"
description: "Auto-generated class reference for MapNotificationContainerWidget."
---
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
// Obtain this widget from the Gauntlet widget tree or movie
MapNotificationContainerWidget widget = ...;
```

## See Also

- [Area Index](../)