---
title: "GamepadCursorWidget"
description: "GamepadCursorWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 16 exposed members (1 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs."
---
# GamepadCursorWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GamepadCursorWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs`

## Overview

GamepadCursorWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is GamepadCursorWidget → BrushWidget. It exposes 16 public/protected members: 1 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GamepadCursorWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain GamepadCursorWidget → BrushWidget. The surface is property-led (properties 14/16, methods 1/16), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GamepadCursorWidget` | `public GamepadCursorWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `CursorParentWidget` | `public GamepadCursorParentWidget CursorParentWidget` | property |
| `TopLeftMarker` | `public GamepadCursorMarkerWidget TopLeftMarker` | property |
| `TopRightMarker` | `public GamepadCursorMarkerWidget TopRightMarker` | property |
| `BottomLeftMarker` | `public GamepadCursorMarkerWidget BottomLeftMarker` | property |
| `BottomRightMarker` | `public GamepadCursorMarkerWidget BottomRightMarker` | property |
| `HasTarget` | `public bool HasTarget` | property |
| `TargetHasAction` | `public bool TargetHasAction` | property |
| `DefaultOffset` | `public float DefaultOffset` | property |
| `HoverOffset` | `public float HoverOffset` | property |
| `DefaultTargetlessOffset` | `public float DefaultTargetlessOffset` | property |
| `PressOffset` | `public float PressOffset` | property |
| `DefaultSizeX` | `public float DefaultSizeX` | property |
| `DefaultSizeY` | `public float DefaultSizeY` | property |
| `ActionAnimationTime` | `public float ActionAnimationTime` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
