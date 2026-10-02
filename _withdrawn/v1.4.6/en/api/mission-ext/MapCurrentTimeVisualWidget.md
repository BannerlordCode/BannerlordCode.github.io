---
title: "MapCurrentTimeVisualWidget"
description: "MapCurrentTimeVisualWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar, inheriting Widget; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapCurrentTimeVisualWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapCurrentTimeVisualWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapCurrentTimeVisualWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapCurrentTimeVisualWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MapCurrentTimeVisualWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapCurrentTimeVisualWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MapCurrentTimeVisualWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapCurrentTimeVisualWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar`, inheritance chain MapCurrentTimeVisualWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapCurrentTimeVisualWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapCurrentTimeVisualWidget` | `public MapCurrentTimeVisualWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `CurrentTimeState` | `public int CurrentTimeState` | property |
| `FastForwardButton` | `public ButtonWidget FastForwardButton` | property |
| `PlayButton` | `public ButtonWidget PlayButton` | property |
| `PauseButton` | `public ButtonWidget PauseButton` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapBarCustomValueTextWidget](../MapBarCustomValueTextWidget/)
- [same namespace MapBarGatherArmyBrushWidget](../MapBarGatherArmyBrushWidget/)
- [same namespace MapBarTextWidget](../MapBarTextWidget/)
- [same namespace MapBarUnreadBrushWidget](../MapBarUnreadBrushWidget/)
