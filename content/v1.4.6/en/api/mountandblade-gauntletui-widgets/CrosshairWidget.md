---
title: "CrosshairWidget"
description: "CrosshairWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 19 exposed members (2 methods, 16 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs."
---
# CrosshairWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CrosshairWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs`

## Overview

CrosshairWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CrosshairWidget → Widget. It exposes 19 public/protected members: 2 methods, 16 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CrosshairWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission) the module directory; inheritance chain CrosshairWidget → Widget. The surface is property-led (properties 16/19, methods 2/19), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CrosshairWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [same namespace AgentHealthWidget](../AgentHealthWidget)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
