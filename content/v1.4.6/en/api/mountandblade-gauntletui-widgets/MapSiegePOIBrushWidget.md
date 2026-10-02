---
title: "MapSiegePOIBrushWidget"
description: "MapSiegePOIBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 20 exposed members (4 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs."
---
# MapSiegePOIBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapSiegePOIBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs`

## Overview

MapSiegePOIBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is MapSiegePOIBrushWidget → BrushWidget. It exposes 20 public/protected members: 4 methods, 14 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegePOIBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege) the module directory; inheritance chain MapSiegePOIBrushWidget → BrushWidget. The surface is property-led (properties 14/20, methods 4/20), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Slider` | `public SliderWidget Slider` | property |
| `ConstructionBrush` | `public Brush ConstructionBrush` | property |
| `NormalBrush` | `public Brush NormalBrush` | property |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |
| `MapSiegePOIBrushWidget` | `public MapSiegePOIBrushWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | method |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | method |
| `ConstructionControllerWidget` | `public MapSiegeConstructionControllerWidget ConstructionControllerWidget` | property |
| `IsPlayerSidePOI` | `public bool IsPlayerSidePOI` | property |
| `IsInVisibleRange` | `public bool IsInVisibleRange` | property |
| `IsPOISelected` | `public bool IsPOISelected` | property |
| `IsConstructing` | `public bool IsConstructing` | property |
| `MachineType` | `public int MachineType` | property |
| `QueueIndex` | `public int QueueIndex` | property |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget` | property |
| `HammerAnimWidget` | `public BrushWidget HammerAnimWidget` | property |
| `AnimState` | `public enum AnimState` | property |
| `AnimState` | `public enum AnimState` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapSiegeConstructionControllerWidget](../MapSiegeConstructionControllerWidget)
- [same namespace MapSiegeMachineButtonWidget](../MapSiegeMachineButtonWidget)
- [same namespace MapSiegeQueueIndexTextWidget](../MapSiegeQueueIndexTextWidget)
- [same namespace MapSiegeScreenWidget](../MapSiegeScreenWidget)
