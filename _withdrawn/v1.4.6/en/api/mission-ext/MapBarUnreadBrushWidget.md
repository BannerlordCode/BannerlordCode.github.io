---
title: "MapBarUnreadBrushWidget"
description: "MapBarUnreadBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar, inheriting BrushWidget; 6 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapBarUnreadBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MapBarUnreadBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MapBarUnreadBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is MapBarUnreadBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 1 methods, 3 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapBarUnreadBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar`, inheritance chain MapBarUnreadBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarUnreadBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsBannerNotification` | `public bool IsBannerNotification` | property |
| `MapBarUnreadBrushWidget` | `public MapBarUnreadBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `UnreadTextWidget` | `public TextWidget UnreadTextWidget` | property |
| `AnimState` | `public enum AnimState` | property |
| `AnimState` | `public enum AnimState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace MapBarCustomValueTextWidget](../MapBarCustomValueTextWidget/)
- [same namespace MapBarGatherArmyBrushWidget](../MapBarGatherArmyBrushWidget/)
- [same namespace MapBarTextWidget](../MapBarTextWidget/)
- [same namespace MapCurrentTimeVisualWidget](../MapCurrentTimeVisualWidget/)
