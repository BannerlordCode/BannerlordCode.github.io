---
title: "MapBarUnreadBrushWidget"
description: "MapBarUnreadBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 6 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs."
---
# MapBarUnreadBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapBarUnreadBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs`

## Overview

MapBarUnreadBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is MapBarUnreadBrushWidget → BrushWidget. It exposes 6 public/protected members: 1 methods, 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapBarUnreadBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar) the module directory; inheritance chain MapBarUnreadBrushWidget → BrushWidget. The surface is property-led (properties 3/6, methods 1/6), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsBannerNotification` | `public bool IsBannerNotification` | property |
| `MapBarUnreadBrushWidget` | `public MapBarUnreadBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `UnreadTextWidget` | `public TextWidget UnreadTextWidget` | property |
| `AnimState` | `public enum AnimState` | property |
| `AnimState` | `public enum AnimState` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapBarCustomValueTextWidget](../MapBarCustomValueTextWidget)
- [same namespace MapBarGatherArmyBrushWidget](../MapBarGatherArmyBrushWidget)
- [same namespace MapBarTextWidget](../MapBarTextWidget)
- [same namespace MapCurrentTimeVisualWidget](../MapCurrentTimeVisualWidget)
