---
title: "MapNotificationItemWidget"
description: "MapNotificationItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 16 exposed members (1 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs."
---
# MapNotificationItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapNotificationItemWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs`

## Overview

MapNotificationItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is MapNotificationItemWidget → BrushWidget. It exposes 16 public/protected members: 1 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNotificationItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification) the module directory; inheritance chain MapNotificationItemWidget → BrushWidget. The surface is property-led (properties 14/16, methods 1/16), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapNotificationItemWidget` | `public MapNotificationItemWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsFocusItem` | `public bool IsFocusItem` | property |
| `DefaultWidth` | `public float DefaultWidth` | property |
| `ExtendedWidth` | `public float ExtendedWidth` | property |
| `RemoveNotificationButtonWidget` | `public ButtonWidget RemoveNotificationButtonWidget` | property |
| `NotificationRingImageWidget` | `public Widget NotificationRingImageWidget` | property |
| `IsInspectionForced` | `public bool IsInspectionForced` | property |
| `NotificationType` | `public string NotificationType` | property |
| `DefaultWidthSprite` | `public Sprite DefaultWidthSprite` | property |
| `ExtendedWidthSprite` | `public Sprite ExtendedWidthSprite` | property |
| `NotificationRingWidget` | `public Widget NotificationRingWidget` | property |
| `NotificationExtensionWidget` | `public Widget NotificationExtensionWidget` | property |
| `NotificationTextContainerWidget` | `public Widget NotificationTextContainerWidget` | property |
| `NotificationDescriptionText` | `public RichTextWidget NotificationDescriptionText` | property |
| `RemoveButtonVisualWidget` | `public InputKeyVisualWidget RemoveButtonVisualWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapNotificationContainerWidget](../MapNotificationContainerWidget)
