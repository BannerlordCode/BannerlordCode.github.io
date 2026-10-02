---
title: "MobilePartyTrackerItemWidget"
description: "MobilePartyTrackerItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs."
---
# MobilePartyTrackerItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MobilePartyTrackerItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs`

## Overview

MobilePartyTrackerItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MobilePartyTrackerItemWidget → Widget. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MobilePartyTrackerItemWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map) the module directory; inheritance chain MobilePartyTrackerItemWidget → Widget. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MapAnchorTrackerWidget](../MapAnchorTrackerWidget)
- [same namespace MapEventVisualBrushWidget](../MapEventVisualBrushWidget)
