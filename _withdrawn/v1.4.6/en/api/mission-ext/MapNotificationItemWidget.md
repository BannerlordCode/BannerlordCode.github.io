---
title: "MapNotificationItemWidget"
description: "MapNotificationItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification, inheriting BrushWidget; 16 exposed members (1 methods, 14 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapNotificationItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapNotificationItemWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MapNotificationItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is MapNotificationItemWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 16 public/protected members: 1 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNotificationItemWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification`, inheritance chain MapNotificationItemWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 14/16, methods 1/16), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationItemWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace MapNotificationContainerWidget](../MapNotificationContainerWidget/)
