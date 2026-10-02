---
title: "MapNotificationContainerWidget"
description: "MapNotificationContainerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationContainerWidget.cs."
---
# MapNotificationContainerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapNotificationContainerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationContainerWidget.cs`

## Overview

MapNotificationContainerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationContainerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MapNotificationContainerWidget → Widget. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapNotificationContainerWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Notification) the module directory; inheritance chain MapNotificationContainerWidget → Widget. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Notification/MapNotificationContainerWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapNotificationContainerWidget` | `public MapNotificationContainerWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnAfterChildRemoved` | `protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)` | method |
| `MoreTextWidgetContainer` | `public BrushWidget MoreTextWidgetContainer` | property |
| `MoreTextWidget` | `public TextWidget MoreTextWidget` | property |
| `MaxAmountOfNotificationsToShow` | `public int MaxAmountOfNotificationsToShow` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapNotificationItemWidget](../MapNotificationItemWidget)
