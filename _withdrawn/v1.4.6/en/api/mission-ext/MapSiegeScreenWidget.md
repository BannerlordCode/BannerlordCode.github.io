---
title: "MapSiegeScreenWidget"
description: "MapSiegeScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege, inheriting Widget; 15 exposed members (13 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapSiegeScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapSiegeScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MapSiegeScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MapSiegeScreenWidget → Widget → PropertyOwnerObject. It exposes 15 public/protected members: 13 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapSiegeScreenWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Siege`, inheritance chain MapSiegeScreenWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 13/15, properties 1/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Siege/MapSiegeScreenWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapSiegeScreenWidget` | `public MapSiegeScreenWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `SetCurrentButton` | `public void SetCurrentButton(MapSiegeMachineButtonWidget button)` | method |
| `OnPreviewMousePressed` | `protected override bool OnPreviewMousePressed()` | method |
| `OnPreviewDragEnd` | `protected override bool OnPreviewDragEnd()` | method |
| `OnPreviewDragBegin` | `protected override bool OnPreviewDragBegin()` | method |
| `OnPreviewDrop` | `protected override bool OnPreviewDrop()` | method |
| `OnPreviewDragHover` | `protected override bool OnPreviewDragHover()` | method |
| `OnPreviewMouseMove` | `protected override bool OnPreviewMouseMove()` | method |
| `OnPreviewMouseReleased` | `protected override bool OnPreviewMouseReleased()` | method |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | method |
| `OnPreviewMouseAlternatePressed` | `protected override bool OnPreviewMouseAlternatePressed()` | method |
| `OnPreviewMouseAlternateReleased` | `protected override bool OnPreviewMouseAlternateReleased()` | method |
| `DeployableSiegeMachinesPopup` | `public Widget DeployableSiegeMachinesPopup` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapSiegeConstructionControllerWidget](../MapSiegeConstructionControllerWidget/)
- [same namespace MapSiegeMachineButtonWidget](../MapSiegeMachineButtonWidget/)
- [same namespace MapSiegePOIBrushWidget](../MapSiegePOIBrushWidget/)
- [same namespace MapSiegeQueueIndexTextWidget](../MapSiegeQueueIndexTextWidget/)
