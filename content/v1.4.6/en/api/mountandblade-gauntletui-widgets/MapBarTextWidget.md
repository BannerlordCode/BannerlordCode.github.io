---
title: "MapBarTextWidget"
description: "MapBarTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting TextWidget; 4 exposed members (0 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarTextWidget.cs."
---
# MapBarTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapBarTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarTextWidget.cs`

## Overview

MapBarTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is MapBarTextWidget → TextWidget. It exposes 4 public/protected members: 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapBarTextWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar) the module directory; inheritance chain MapBarTextWidget → TextWidget. The surface is property-led (properties 3/4, methods 0/4), so it mostly exposes state for reading. TextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapBarTextWidget` | `public MapBarTextWidget(UIContext context) : base(context)` | constructor |
| `IsWarning` | `public bool IsWarning` | property |
| `NormalColor` | `public Color NormalColor` | property |
| `WarningColor` | `public Color WarningColor` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapBarCustomValueTextWidget](../MapBarCustomValueTextWidget)
- [same namespace MapBarGatherArmyBrushWidget](../MapBarGatherArmyBrushWidget)
- [same namespace MapBarUnreadBrushWidget](../MapBarUnreadBrushWidget)
- [same namespace MapCurrentTimeVisualWidget](../MapCurrentTimeVisualWidget)
