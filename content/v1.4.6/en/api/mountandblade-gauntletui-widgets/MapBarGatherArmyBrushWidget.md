---
title: "MapBarGatherArmyBrushWidget"
description: "MapBarGatherArmyBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarGatherArmyBrushWidget.cs."
---
# MapBarGatherArmyBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapBarGatherArmyBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarGatherArmyBrushWidget.cs`

## Overview

MapBarGatherArmyBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarGatherArmyBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is MapBarGatherArmyBrushWidget → BrushWidget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapBarGatherArmyBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar) the module directory; inheritance chain MapBarGatherArmyBrushWidget → BrushWidget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarGatherArmyBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapBarGatherArmyBrushWidget` | `public MapBarGatherArmyBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `InfoBarWidget` | `public MapInfoBarWidget InfoBarWidget` | property |
| `IsGatherArmyEnabled` | `public bool IsGatherArmyEnabled` | property |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapBarCustomValueTextWidget](../MapBarCustomValueTextWidget)
- [same namespace MapBarTextWidget](../MapBarTextWidget)
- [same namespace MapBarUnreadBrushWidget](../MapBarUnreadBrushWidget)
- [same namespace MapCurrentTimeVisualWidget](../MapCurrentTimeVisualWidget)
