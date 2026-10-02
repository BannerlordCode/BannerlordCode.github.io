---
title: "GamepadCursorWidget"
description: "GamepadCursorWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 16 exposed members (1 methods, 14 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GamepadCursorWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GamepadCursorWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GamepadCursorWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is GamepadCursorWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 16 public/protected members: 1 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GamepadCursorWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain GamepadCursorWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 14/16, methods 1/16), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
