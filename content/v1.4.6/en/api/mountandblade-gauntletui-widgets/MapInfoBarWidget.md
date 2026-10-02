---
title: "MapInfoBarWidget"
description: "MapInfoBarWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapInfoBarWidget.cs."
---
# MapInfoBarWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapInfoBarWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapInfoBarWidget.cs`

## Overview

MapInfoBarWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapInfoBarWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MapInfoBarWidget → Widget. It exposes 7 public/protected members: 2 methods, 2 properties, 1 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapInfoBarWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar) the module directory; inheritance chain MapInfoBarWidget → Widget. The surface is method-led (methods 2/7, properties 2/7), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapInfoBarWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMapInfoBarExtendStateChange;` | `public event MapInfoBarWidget.MapBarExtendStateChangeEvent OnMapInfoBarExtendStateChange;` | event |
| `MapInfoBarWidget` | `public MapInfoBarWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget` | property |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended` | property |
| `MapBarExtendStateChangeEvent` | `public delegate void MapBarExtendStateChangeEvent(bool newState);` | method |
| `MapBarExtendStateChangeEvent` | `public delegate void MapBarExtendStateChangeEvent(bool newState)` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapBarCustomValueTextWidget](../MapBarCustomValueTextWidget)
- [same namespace MapBarGatherArmyBrushWidget](../MapBarGatherArmyBrushWidget)
- [same namespace MapBarTextWidget](../MapBarTextWidget)
- [same namespace MapBarUnreadBrushWidget](../MapBarUnreadBrushWidget)
