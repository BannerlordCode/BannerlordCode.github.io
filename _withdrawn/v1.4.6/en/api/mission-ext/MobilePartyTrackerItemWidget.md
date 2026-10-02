---
title: "MobilePartyTrackerItemWidget"
description: "MobilePartyTrackerItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map, inheriting Widget; 9 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MobilePartyTrackerItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MobilePartyTrackerItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MobilePartyTrackerItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MobilePartyTrackerItemWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MobilePartyTrackerItemWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map`, inheritance chain MobilePartyTrackerItemWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FrameVisualWidget` | `public Widget FrameVisualWidget` | property |
| `MobilePartyTrackerItemWidget` | `public MobilePartyTrackerItemWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsActive` | `public bool IsActive` | property |
| `IsBehind` | `public bool IsBehind` | property |
| `IsTracked` | `public bool IsTracked` | property |
| `TrackerType` | `public string TrackerType` | property |
| `Position` | `public Vec2 Position` | property |
| `TrackerImageBrush` | `public Brush TrackerImageBrush` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapAnchorTrackerWidget](../MapAnchorTrackerWidget/)
- [same namespace MapEventVisualBrushWidget](../MapEventVisualBrushWidget/)
