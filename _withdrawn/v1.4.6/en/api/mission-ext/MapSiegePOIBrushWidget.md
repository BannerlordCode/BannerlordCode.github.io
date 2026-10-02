---
title: "MapSiegePOIBrushWidget"
description: "MapSiegePOIBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege, inheriting BrushWidget; 20 exposed members (4 methods, 14 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSiegePOIBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapSiegePOIBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MapSiegePOIBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is MapSiegePOIBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 20 public/protected members: 4 methods, 14 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegePOIBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`, inheritance chain MapSiegePOIBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 14/20, methods 4/20), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegePOIBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace MapSiegeConstructionControllerWidget](../MapSiegeConstructionControllerWidget/)
- [same namespace MapSiegeMachineButtonWidget](../MapSiegeMachineButtonWidget/)
- [same namespace MapSiegeQueueIndexTextWidget](../MapSiegeQueueIndexTextWidget/)
- [same namespace MapSiegeScreenWidget](../MapSiegeScreenWidget/)
