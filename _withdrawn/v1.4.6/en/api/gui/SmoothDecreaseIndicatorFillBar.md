---
title: "SmoothDecreaseIndicatorFillBar"
description: "SmoothDecreaseIndicatorFillBar: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting BrushWidget; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SmoothDecreaseIndicatorFillBar

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class SmoothDecreaseIndicatorFillBar : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

SmoothDecreaseIndicatorFillBar lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is SmoothDecreaseIndicatorFillBar → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SmoothDecreaseIndicatorFillBar lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain SmoothDecreaseIndicatorFillBar → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/SmoothDecreaseIndicatorFillBar.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SmoothDecreaseIndicatorFillBar` | `public SmoothDecreaseIndicatorFillBar(UIContext context) : base(context)` | constructor |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `MaxAmount` | `public float MaxAmount` | property |
| `CurrentAmount` | `public float CurrentAmount` | property |
| `IsVertical` | `public bool IsVertical` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../BrushWidget/)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
