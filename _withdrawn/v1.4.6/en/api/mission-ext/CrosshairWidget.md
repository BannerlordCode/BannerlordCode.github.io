---
title: "CrosshairWidget"
description: "CrosshairWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission, inheriting Widget; 19 exposed members (2 methods, 16 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CrosshairWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CrosshairWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CrosshairWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CrosshairWidget → Widget → PropertyOwnerObject. It exposes 19 public/protected members: 2 methods, 16 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CrosshairWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`, inheritance chain CrosshairWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 16/19, methods 2/19), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CrosshairWidget` | `public CrosshairWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `TopArrowOpacity` | `public double TopArrowOpacity` | property |
| `BottomArrowOpacity` | `public double BottomArrowOpacity` | property |
| `RightArrowOpacity` | `public double RightArrowOpacity` | property |
| `LeftArrowOpacity` | `public double LeftArrowOpacity` | property |
| `IsTargetInvalid` | `public bool IsTargetInvalid` | property |
| `CrosshairAccuracy` | `public double CrosshairAccuracy` | property |
| `CrosshairScale` | `public double CrosshairScale` | property |
| `IsVictimDead` | `public bool IsVictimDead` | property |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot` | property |
| `ShowHitMarker` | `public bool ShowHitMarker` | property |
| `LeftArrow` | `public BrushWidget LeftArrow` | property |
| `RightArrow` | `public BrushWidget RightArrow` | property |
| `TopArrow` | `public BrushWidget TopArrow` | property |
| `BottomArrow` | `public BrushWidget BottomArrow` | property |
| `HitMarker` | `public BrushWidget HitMarker` | property |
| `HeadshotMarker` | `public BrushWidget HeadshotMarker` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget/)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget/)
- [same namespace AgentHealthWidget](../AgentHealthWidget/)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget/)
